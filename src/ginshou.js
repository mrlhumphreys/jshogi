import Piece from './piece'

/** A ginshou piece. Moves 1 space diagonally or forwards orthogonally */
class Ginshou extends Piece {
  /**
   * The destinations that a Ginshou can move to from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.diagonal(square).union(gameState.squares.inDirection(square, this.playerNumber)).inRange(square, 1).unoccupiedOrOccupiedByOpponent(this.playerNumber);
  }
}

export default Ginshou
