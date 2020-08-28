import { exists } from './utils'

const mockSquareSet = {
  some: function() { return false; },
  none: function() { return true; },
  includes: function() { return false; }
};

/** Abstract class representing a piece on the board. */
class Piece {
  /** 
   * Create a piece.
   * @param {Object} args - The properties of a piece.
   * @param {number} args.player_number - The number of the player.
   * @param {boolean} [args.selected=false] - Is the piece selected?
   * @param {string} args.id - The unique identifier of the piece. 
   * @param {boolean} [args.has_moved=false] - Has the piece moved?
   * @param {string} args.type - The type of the piece.
   */
  constructor(args) {
    /** @member {string} */
    this.constructorName = 'Piece';
    
    /** @member {number} */
    this.playerNumber = args.player_number;

    /** @member {boolean} */
    this.selected = exists(args.selected) ? args.selected : false;

    /** @member {number} */
    this.id = args.id;

    /** @member {boolean} */
    this.hasMoved = exists(args.has_moved) ? args.has_moved : false;

    /** @member {string} */
    this.type = args.type;
  }

  /** 
   * The piece serialized as a simple object.
   * @return {Object}
   */
  get asJson() {
    return {
      player_number: this.playerNumber,
      selected: this.selected,
      id: this.id,
      type: this.type
    };
  }

  /**
   * Can the piece move from square?
   * @param {Square} square - The square the piece is moving from.
   * @param {GameState} game_state - The state of the game.
   * @return {boolean}
   */
  canMoveFrom(square, gameState) {
    return this.destinations(square, gameState).some();
  }

  /**
   * Can the piece move from the square to a specified square?
   * @param {Square} from - The square the piece is moving from.
   * @param {Square} to - The square the piece is moving to.
   * @param {GameState} game_state - The state of the game.
   * @return {boolean}
   */
  canMove(from, to, gameState) {
    return this.destinations(from, gameState).includes(to);
  }

  /**
   * All the destinations the piece can move to. 
   * Abstract method implemented in each subclass.
   * @param {Square} square - The square the piece is moving from.
   * @param {GameState} game_state - The state of the game.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return mockSquareSet;
  }

  /**
   * All the destinations the piece can move to that result in capture. 
   * Defaults to calling destinations function.
   * @param {Square} square - The square the piece is moving from.
   * @param {GameState} game_state - The state of the game.
   * @return {SquareSet}
   */
  captureSquares(square, gameState) {
    return this.destinations(square, gameState);
  }

  /**
   * The en passant square.
   * Defaults to null.
   * @return {(Square|null)}
   */
  enPassantSquare() {
    return null;
  }

  /**
   * The opponent of the piece's owner.
   * @return {boolean}
   */
  get opponent() {
    return (this.playerNumber === 1 ? 2 : 1);
  }

  /**
   * Does the piece have legal moves from y co-ordinate?
   * @param {number} Y - The y co-ordinate.
   * @return {boolean}
   */
  hasLegalMovesFromY(y) {
    return true;
  }

  /**
   * Make a duplicate of the piece.
   * @return {Piece}
   */
  get dup() {
    return new this.constructor(this.asJson);
  }

  // actions

  /**
   * Mark the piece as selected;
   * @return {boolean}
   */
  select() {
    this.selected = true;
    return true;
  }

  /**
   * Unmark the piece as selected;
   * @return {boolean}
   */
  deselect() {
    this.selected = false;
    return true;
  }

  /**
   * Change the owner of the piece;
   * @return {boolean}
   */
  switchPlayer() {
    if (this.playerNumber === 1) { 
      this.playerNumber = 2;
    } else {
      this.playerNumber = 1;
    }
  }
}

export default Piece
