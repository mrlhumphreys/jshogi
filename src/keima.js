import Piece from './piece'

/** A piece that moves 2 forward and 1 to the side */
class Keima extends Piece {
  /**
   * The destinations that a keima can move from a square on a board
   * @param {Square} square - THe origin square.
   * @param {GameState} gameState - the game state being played on.
   * @return {SquareSet}
   */
  destinations(square, gameState) {
    return gameState.squares.inDirection(square, this.playerNumber).ranksAway(square, 2).filesAway(square, 1).unoccupiedOrOccupiedByOpponent(this.playerNumber);
  }

  /**
   * Does the piece have legal moves just based on its rank? 
   * @param {number} Y - The y co-ordinate.
   * @return {boolean}
   */
  hasLegalMovesFromY(y) {
    if (this.playerNumber === 1) {
      return y !== 0 && y !== 1;
    } else {
      return y !== 8 && y !== 7;
    }
  }
}

export default Keima
