import {
  squaresAsJson,
  squaresDup,
  some,
  none,
  every,
  map,
  filter,
  push,
  concat,
  union,
  difference,
  intersection,
  uniq,
  length,
  includes,
  excludes,
  first,
  selected,
  findById,
  findByCoordinate,
  findByPieceId,
  whereX,
  whereY,
  inRange,
  atRange,
  ranksAway,
  filesAway,
  inDirection,
  orthogonal,
  diagonal,
  sideways,
  orthogonalOrDiagonal,
  notOrthogonalOrDiagonal,
  unoccupied,
  occupiedByPlayer,
  occupiedByOpponentOf,
  unoccupiedOrOccupiedByOpponent,
  occupiedByPiece,
  excludingPiece,
  unblocked,
  between
} from '@mrlhumphreys/jboardgame'
import Square from './square' 

/** A Set of squares */
class SquareSet {
  /**
   * Create a square set.
   * @param {Object} args - The properties of a square set.
   * @param {Object[]} args.squares - An array of square properties.
   */
  constructor(args) {
    /** @member {Square[]} */
    this.squares = args.squares.map(function(s) {
      if (s.constructorName === 'Square') {
        return s;
      } else {
        return new Square(s);
      }
    });

    /** @member {Function} */
    this.asJson = squaresAsJson;

    /** @member {Function} */
    this.dup = squaresDup;

    /** @member {Function} */
    this.some = some;

    /** @member {Function} */
    this.none = none;

    /** @member {Function} */
    this.every = every;

    /** @member {Function} */
    this.map = map;

    /** @member {Function} */
    this.filter = filter;

    /** @member {Function} */
    this.push = push;

    /** @member {Function} */
    this.concat = concat;

    /** @member {Function} */
    this.union = union;

    /** @member {Function} */
    this.difference = difference;

    /** @member {Function} */
    this.intersection = intersection;

    /** @member {Function} */
    this.uniq = uniq;

    /** @member {Function} */
    this.length = length;

    /** @member {Function} */
    this.includes = includes;

    /** @member {Function} */
    this.excludes = excludes;

    /** @member {Function} */
    this.first = first;

    /** @member {Function} */
    this.selected = selected;

    /** @member {Function} */
    this.findById = findById;

    /** @member {Function} */
    this.findByCoordinate = findByCoordinate;

    /** @member {Function} */
    this.findByPieceId = findByPieceId;
    
    /** @member {Function} */
    this.whereX = whereX;

    /** @member {Function} */
    this.whereY = whereY;

    /** @member {Function} */
    this.inRange = inRange;

    /** @member {Function} */
    this.atRange = atRange;

    /** @member {Function} */
    this.ranksAway = ranksAway;

    /** @member {Function} */
    this.filesAway = filesAway;

    /** @member {Function} */
    this.inDirection = inDirection;

    /** @member {Function} */
    this.orthogonal = orthogonal;

    /** @member {Function} */
    this.diagonal = diagonal;

    /** @member {Function} */
    this.sideways = sideways;

    /** @member {Function} */
    this.orthogonalOrDiagonal = orthogonalOrDiagonal;

    /** @member {Function} */
    this.notOrthogonalOrDiagonal = notOrthogonalOrDiagonal;

    /** @member {Function} */
    this.unoccupied = unoccupied;

    /** @member {Function} */
    this.occupiedByPlayer = occupiedByPlayer;

    /** @member {Function} */
    this.occupiedByOpponentOf = occupiedByOpponentOf;

    /** @member {Function} */
    this.unoccupiedOrOccupiedByOpponent = unoccupiedOrOccupiedByOpponent;

    /** @member {Function} */
    this.occupiedByPiece = occupiedByPiece;

    /** @member {Function} */
    this.excludingPiece = excludingPiece;

    /** @member {Function} */
    this.unblocked = unblocked;

    /** @member {Function} */
    this.between = between;
  }

  findOuForPlayer(playerNumber) {
    return this.occupiedByPiece(['gyokushou', 'oushou']).occupiedByPlayer(playerNumber).first();
  }

  threatenedBy(playerNumber, gameState) {
    let destinations = this.occupiedByPlayer(playerNumber).excludingPiece(['gyokushou', 'oushou']).map((s) => {
      return s.piece.captureSquares(s, gameState).squares;
    });

    let _squares = [].concat.apply([], destinations);

    return new SquareSet({squares: _squares}).uniq();
  }
}

export default SquareSet
