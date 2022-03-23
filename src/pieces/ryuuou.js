import Piece from './piece'

/** A piece that moves any number of squares orthogonally and 1 square diagonally */
class Ryuuou extends Piece {
  /**
   * The destinations that a ryuuou can move from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.orthogonal(square).union(gameState.squares.atRange(square, 1)).unoccupiedOrOccupiedByOpponent(this.playerNumber).unblocked(square, gameState.squares); 
  }
}

export default Ryuuou
