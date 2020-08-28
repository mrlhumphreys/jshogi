import { exists } from './utils'
import PieceFactory from './piece_factory'

import {
  squareAsJson,
  squareDup,
  squareOccupied,
  squareUnoccupied,
  squareOccupiedByPlayer,
  squareOccupiedByOpponentOf,
  squareUnoccupiedOrOccupiedByOpponentOf,
  squareOccupiedByPiece,
  squareNotOccupiedByPiece,
  point,
  select,
  deselect,
  addPiece,
  removePiece,
} from '@mrlhumphreys/jboardgame';

/** A square on a grid */
class Square {
  /**
   * Create a square
   * @param {Object} args - The properties of the square.
   * @param {string} args.id - The unique identifier of the square.
   * @param {number} args.x - The x co-ordinate of the square.
   * @param {number} args.y - The y co-ordinate of the square.
   * @param {{Object|null)} args.piece - The piece on the square.
   */
  constructor(args) {
    /** @member {string} */
    this.constructorName = 'Square';

    /** @member {string} */
    this.id = args.id;

    /** @member {number} */
    this.x = args.x;

    /** @member {number} */
    this.y = args.y;

    if (!exists(args.piece)) {
      this.piece = null;
    } else {
      let pieceFactory = new PieceFactory(args.piece);
      /** @member{(Piece|null)} */
      this.piece = pieceFactory.build;
    }

    this.asJson = squareAsJson;
    this.dup = squareDup;
    this.occupied = squareOccupied;
    this.unoccupied = squareUnoccupied;
    this.occupiedByPlayer = squareOccupiedByPlayer;
    this.occupiedByOpponentOf = squareOccupiedByOpponentOf;
    this.unoccupiedOrOccupiedByOpponentOf = squareUnoccupiedOrOccupiedByOpponentOf;
    this.occupiedByPiece = squareOccupiedByPiece;
    this.notOccupiedByPiece = squareNotOccupiedByPiece;
    this.point = point;
    this.select = select;
    this.deselect = deselect;
    this.addPiece = addPiece;
    this.removePiece = removePiece;
  }

  promotionZone(playerNumber) {
    switch(playerNumber) {
      case 1:
        return this.y >= 0 && this.y <= 2;
      case 2:
        return this.y >= 6 && this.y <= 8;
      default:
        throw 'Invalid Player Number';
    }
  }
}

export default Square
