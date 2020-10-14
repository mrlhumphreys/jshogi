import { exists } from './utils'
import PromotionFactory from './promotion_factory'

/** A move */
class Move {
  /** Create a move */
  constructor(args) {
    /** @member {string} */
    this.touchedId = args.touchedId;

    /** @member {number} */
    this.playerNumber = args.playerNumber;

    /** @member {Match} */
    this.match = args.match;
  }

  /**
   * The result of performing the move.
   * @return {Object} A result with name and message.
   */
  get result() {
    if (exists(this.match.winner)) {
      return { name: 'GameOver', message: 'Game is over.' };
    }

    if (!this.match.gameState.playersTurn(this.playerNumber)) {
      return { name: 'NotPlayersTurn', message: 'It is not your turn.' };
    }

    if (exists(this._selectedSquare)) {
      return this._selectedResult;
    } if (exists(this._selectedPieceInHand)) {
      return this._dropResult;
    } else {
      return this._unselectedResult;
    }
  }

  get _selectedResult() {
    if (this._putsOuInCheck) {
      return { name: 'OuInCheck', message: 'Move puts ou in check.' };
    } else if (!this._selectedSquare.piece.canMove(this._selectedSquare, this._touched, this.match.gameState)) {
      return { name: 'MoveInvalid', message: 'Piece cannot move.' };
    } else if (this._pieceCanPromote) {
      return { name: 'PieceMovedToPromotionZone', message: 'Piece can promote.' };
    } else {
      return { name: 'MoveValid', message: '' };
    }
  }

  get _dropResult() {
    if (this._squareOccupied) {
      return { name: 'SquareOccupied', message: 'Piece must be dropped on empty square.' };
    } else if (this._preventsLegalMoves) {
      return { name: 'NoLegalMoves', message: 'Piece cannot move if placed on that square.' };
    } else if (this._putsTwoFuhyouInFile) {
      return { name: 'TwoFuhyouInFile', message: 'Cannot place two fuhyou in the same file.' };
    } else if (this._fuhyouCausesCheckmate) {
      return { name: 'FuhyouCausesCheckmate', message: 'Fuhyou cannot cause checkmate when dropped.' };
    } else {
      return { name: 'DropValid', message: '' };
    }
  }

  get _unselectedResult() {
    if (!exists(this._touched)) {
      return { name: 'SquareNotFound', message: 'Square does not exist.' };
    } else if (!exists(this._touched.piece)) {
      return { name: 'EmptySquare', message: 'Square is empty.' };
    } else if (!this._touched.occupiedByPlayer(this.playerNumber)) {
      return { name: 'PieceOwnershipMismatch', message: 'Piece is owned by opponent.' };
    } else if (!this._touched.piece.canMoveFrom(this._touched, this.match.gameState)) {
      return { name: 'MoveImpossible', message: 'Piece cannot move.' };
    } else {
      return { name: 'MovePossible', message: '' };
    }
  }

  get _putsOuInCheck() {
    let dup = this.match.gameState.dup;
    dup.move(this._selectedSquare.id, this.touchedId);
    return dup.inCheck(this.match.gameState.currentPlayerNumber);
  }

  get _pieceCanPromote() {
    let factory = new PromotionFactory(this._selectedSquare.piece);
    return factory.promotable && this.match.gameState.pieceMovedToPromotionZone(this._selectedSquare, this._touched);
  }

  get _touched() {
    return this.match.gameState.findSquare(this.touchedId);
  }

  get _selectedSquare() {
    return this.match.gameState.selectedSquare;
  }

  get _selectedPieceInHand() {
    return this.match.gameState.selectedPieceInHand;
  }

  get _squareOccupied() {
    return this._touched.occupied();
  }

  get _preventsLegalMoves() {
    return !this._selectedPieceInHand.hasLegalMovesFromY(this._touched.y);
  }

  get _putsTwoFuhyouInFile() {
    return this.match.gameState.squares.whereX(this._touched.x).occupiedByPiece('fuhyou').occupiedByPlayer(this.playerNumber).length() > 0;
  }

  get _fuhyouCausesCheckmate() {
    if (this._selectedPieceInHand.type === 'fuhyou') {
      let dup = this.match.gameState.dup; 
      dup.drop(this._selectedPieceInHand.id, this.touchedId);
      return dup.inCheckmate(this._opponentNumber);
    } else {
      return false;
    }
  }

  get _opponentNumber() {
    if (this.playerNumber === 1) {
      return 2;
    } else {
      return 1;
    }
  }
}

export default Move
