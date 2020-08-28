/** The direction a piece is moving */
class Direction {
  /**
   * Create a direction.
   * @param {number} x - The value of the direction in the x-axis.
   * @param {number} y - The value of the direction in the y-axis.
   */
  constructor(x, y) {
    /** @member {number} */
    this.x = x;

    /** @member {number} */
    this.y = y;
  } 
}

export default Direction
