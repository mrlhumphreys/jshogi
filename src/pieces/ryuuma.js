import Piece from './piece'

/** A piece that moves any number of squares diagonally and 1 square orthogonally */
class Ryuuma extends Piece {
  /**
   * The destinations that a ryuuma can move from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.diagonal(square).union(gameState.squares.atRange(square, 1)).unoccupiedOrOccupiedByOpponent(this.playerNumber).unblocked(square, gameState.squares);
  }
}

export default Ryuuma
