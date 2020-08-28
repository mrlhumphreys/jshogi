/** A point on a grid */
class Point {
  /**
   * Create a point.
   * @param {number} x - The x co-ordinate.
   * @param {number} y - The x co-ordinate.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Add two points together.
   * @param {Point} point - The other point.
   * @return {Point}
   */
  add(point) { 
    let newX = this.x + point.x;
    let newY = this.y + point.y;
    return new Point(newX, newY);
  }

  /**
   * Are the points equal?
   * @param {Point} point - The other point.
   * @return {boolean}
   */
  eq(point) { 
    return this.x === point.x && this.y === point.y;
  }

  /**
   * Are the points not equal?
   * @param {Point} point - The other point.
   * @return {boolean}
   */
  notEq(point) { 
    return !this.eq(point);
  }
}

export default Point
