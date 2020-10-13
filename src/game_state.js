import { exists } from './utils'
import SquareSet from './square_set'
import Hand from './hand'
import PromotionFactory from './promotion_factory'

/** A Shogi Game State */
class GameState {
  /**
   * Create a game state.
   * @param {Object} args - The properties of the game state.
   * @param {number} args.current_player_number - The number of the current player.
   * @param {Object[]} args.squares - An array of square properties
   * @param {Object[]) args.hands - The hands of each player.
   */
  constructor(args) {
    /** @member {number} */
    this.currentPlayerNumber = args.current_player_number;

    /** @member {SquareSet} */
    this.squares = new SquareSet({squares: args.squares});

    /** @member {Hand[]} */
    this.hands = args.hands.map(function(m) { return new Hand(m); });  
  }

  /**
   * The game state serialized as simple objects.
   * @return {Object}
   */
  get asJson() {
    return {
      current_player_number: this.currentPlayerNumber,
      squares: this.squares.asJson().squares,
      hands: this.hands.map(function(h) { return h.asJson; })
    };
  }

  /**
   * The square that's selected.
   * @return {(Square|null)}
   */
  get selectedSquare() {
    return this.squares.selected();
  }

  /**
   * The piece in hand that's selected.
   * @return {(Piece|null)}
   */
  get selectedPieceInHand() {
    let hand = this.hands.find(function(h) { return exists(h.selectedPiece); });
    if (exists(hand)) {
      return hand.selectedPiece;
    } else {
      return null;
    }
  }

  /**
   * Find square with id.
   * @param {number} id - The id of the square.
   * @return {(Square|null)}
   */
  findSquare(id) {
    return this.squares.findById(id);
  }

  /**
   * Find piece with id.
   * @param {number} id - The id of the piece.
   * @return {(Piece|null)}
   */
  findPieceInHand(id) {
    let hand = this.hands.find(function(h) { return h.hasPiece(id) });
    if (exists(hand)) {
      return hand.findById(id);
    } else {
      return null;
    }
  }

  /**
   * Is it the player's turn?
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  playersTurn(playerNumber) {
    return this.currentPlayerNumber === playerNumber;
  }

  /**
   * Get the captured square.
   * It's the to square if occupied.
   * @param {Square} from - The origin square.
   * @param {Square} to - The destination square.
   * @return {(Square|null)}
   */
  capturedSquare(from, to) {
    if (to.occupied()) {
      return to;
    } else {
      return null;
    }
  }

  /**
   * If a piece is being captured, get the id of the square it's on.
   * @param {Square} from - The origin square.
   * @param {Square} to - The destination square.
   * @return {(Square|null)}
   */
  capturedSquareId(from, to) {
    let square = this.capturedSquare(from, to);
    return exists(square) ? square.id : null;
  }

  pieceMovedToPromotionZone(from, to) {
    let piece = from.piece;

    if (exists(piece)) {
      return to.promotionZone(piece.playerNumber);
    } else {
      return false;
    }
  }

  /**
   * Is the player in checkmate?
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  inCheckmate(playerNumber) {
    return (this.inCheck(playerNumber) || this.nonOuPiecesCannotMove(playerNumber)) && this.ouCannotMove(playerNumber);
  }

  /**
   * Is the player in check?
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  inCheck(playerNumber) {
    let ouSquare = this.squares.findOuForPlayer(playerNumber);
    let threatenedBy = this.squares.threatenedBy(this.opponentOf(playerNumber), this);
    return threatenedBy.includes(ouSquare);
  }

  /**
   * Are non king pieces owned by the player unable to move?
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  nonOuPiecesCannotMove(playerNumber) {
    return this.squares.occupiedByPlayer(playerNumber).excludingPiece(['oushou','gyokushou']).every((s) => {
      return s.piece.destinations(s, this).none();
    });
  }

  /**
   * Is the player's king unable to move?
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  ouCannotMove(playerNumber) {
    let ouSquare = this.squares.findOuForPlayer(playerNumber);
    let destinations = ouSquare.piece.destinations(ouSquare, this);

    return destinations.every((d) => {
      let duplicate = this.dup;
      duplicate.move(ouSquare.id, d.id);
      return duplicate.inCheck(playerNumber);
    });
  }

  /**
   * The winner of the game.
   * Returns null if no winner.
   * @return {(number|null)}
   */
  get winner() {
    if (this.inCheckmate(1)) {
      return 2;
    } else if (this.inCheckmate(2)) {
      return 1;
    } else {
      return null;
    }
  }

  /**
   * Duplicate the game state.
   * @return {GameState}
   */
  get dup() {
    return new GameState({
      current_player_number: this.currentPlayerNumber,
      squares: this.squares.asJson().squares,
      hands: this.hands.map(function(h) { return h.asJson; })
    });
  }

  /**
   * Get the opponent of the player.
   * @return {number}
   */
  opponentOf(playerNumber) {
    return playerNumber === 1 ? 2 : 1;
  }

  /**
   * Get the opponent of the current player.
   * @return {number}
   */
  get opponent() {
    return this.opponentOf(this.currentPlayerNumber);
  }

  /**
   * Perform a simple move.
   * @param {Square} from - The origin square.
   * @param {Square} to - The destination square.
   * @param {Square} captured - The captured piece's square.
   * @return {boolean}
   */
  performMove(from, to, captured) {
    if (from.id != to.id) {
      if (exists(captured)) {
        let hand = this.hands.find(function(h) { return h.playerNumber === from.piece.playerNumber; }); 
        hand.pushPiece(to.piece);
        captured.removePiece();
      }
      let fromPiece = from.piece;
      to.addPiece(fromPiece);
      from.removePiece();
      return true;
    } else {
      return false;
    }
  }

  /**
   * Perform a complete move.
   * @param {string} fromId - The origin square id.
   * @param {string} toId = The destination square id.
   * @return {boolean}
   */
  move(fromId, toId) {
    let from = this.squares.findById(fromId);
    let to = this.squares.findById(toId);

    if (exists(from) && exists(to)) {
      let capturedSquare = this.capturedSquare(from, to);
      this.performMove(from, to, capturedSquare);
      return true;
    } else {
      return false;
    }
  }

  drop(pieceId, squareId) {
    let hand = this.hands.find(function(h) { return h.hasPiece(pieceId); }); 
    let square = this.squares.findById(squareId);

    if (exists(hand) && exists(square)) {
      let piece = hand.popPiece(pieceId);
      square.addPiece(piece);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Select a piece on the square.
   * @param {string} squareId - THe id of the square.
   * @return {boolean}
   */
  selectPiece(squareId) {
    let square = this.findSquare(squareId);
    if (exists(square)) {
      return square.select();
    } else {
      return false;
    }
  }

  /**
   * Deselect a piece on the square.
   * @param {string} squareId - THe id of the square.
   * @return {boolean}
   */
  deselectPiece(squareId) {
    let square = this.findSquare(squareId);
    if (exists(square)) {
      return square.deselect();
    } else {
      return false;
    }
  }

  /**
   * Select a piece in hand.
   * @param {number} pieceId - The id of the piece.
   * @return {boolean}
   */
  selectPieceInHand(pieceId) {
    let hand = this.hands.find(function(h) { return h.hasPiece(pieceId) });

    if (exists(hand)) {
      return hand.selectPiece(pieceId);
    } else {
      return false;
    }
  }

  /**
   * Deselect a piece in hand.
   * @param {number} pieceId - The id of the piece.
   * @return {boolean}
   */
  deselectPieceInHand(pieceId) {
    let hand = this.hands.find(function(h) { return h.hasPiece(pieceId) });

    if (exists(hand)) {
      return hand.deselectPiece(pieceId);
    } else {
      return false;
    }
  }

  /**
   * Promote a piece on the square.
   * @param {string} squareId - The id of the square.
   */
  promote(squareId) {
    let square = this.findSquare(squareId);
    if (exists(square) && exists(square.piece)) {
      let promotionFactory = new PromotionFactory(square.piece);
      if (promotionFactory.promotable) {
        return square.addPiece(promotionFactory.promote());
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * Pass the turn to the other player.
   * @return {boolean}
   */
  passTurn() {
    if (this.currentPlayerNumber == 1) {
      this.currentPlayerNumber = 2;
    } else {
      this.currentPlayerNumber = 1;
    }
    return true;
  }
}

export default GameState
