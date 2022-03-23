import Piece from './piece'

/** A piece that moves 1 space away. */
class OuBase extends Piece {
  /**
   * The destinations that an ou can move from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.atRange(square, 1).unoccupiedOrOccupiedByOpponent(this.playerNumber);
  }
}

export default OuBase
