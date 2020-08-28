import Piece from './piece'

/** A piece that moves 1 space orthogonally or 1 space diagonally forward */
class KinBase extends Piece {
  /**
   * The destinations that a kin can move from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.orthogonal(square).union(gameState.squares.inDirection(square, this.playerNumber)).inRange(square, 1).unoccupiedOrOccupiedByOpponent(this.playerNumber).unblocked(square, gameState.squares);
  }
}

export default KinBase

