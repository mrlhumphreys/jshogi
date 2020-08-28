import Piece from './piece'

/** A kyousha piece. Moves forward any number of squares. */
class Kyousha extends Piece {
  /**
   * The destinations thata Kyousha can move to from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.orthogonal(square).inDirection(square, this.playerNumber).unoccupiedOrOccupiedByOpponent(this.playerNumber).unblocked(square, gameState.squares);
  }

  /**
   * Does the piece have legal moves just based on its rank? 
   * @param {number} Y - The y co-ordinate.
   * @return {boolean}
   */
  hasLegalMovesFromY(y) {
    if (this.playerNumber === 1) {
      return y !== 0;
    } else {
      return y !== 8;
    }
  }
}

export default Kyousha
