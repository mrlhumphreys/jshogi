import Piece from './piece'

/** A fuhyou piece. Moves forward one square. */
class Fuhyou extends Piece {
  /**
   * The destinations that a Pawn can move to from a square on a board.
   * @param {Square} square - The origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.inRange(square, 1).inDirection(square, this.playerNumber).orthogonal(square).unoccupiedOrOccupiedByOpponent(this.playerNumber);
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

export default Fuhyou
