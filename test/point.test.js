import Point from '../src/point'

describe("Point", () => {
  describe("add", () => {
    it('must sum their attributes', () => {
      let pointA = new Point(1, 3);
      let pointB = new Point(2, 5);

      let pointC = pointA.add(pointB);

      expect(pointC.x).toEqual(3);
      expect(pointC.y).toEqual(8);
    });
  });

  describe("eq", () => {
    it('must return true if their attributes are equal', () => {
      let pointA = new Point(1, 3);
      let pointB = new Point(1, 3);

      expect(pointA.eq(pointB)).toBe(true);
    });

    it('must return false if their attributes are not equal', () => {
      let pointA = new Point(1, 3);
      let pointB = new Point(2, 4);

      expect(pointA.eq(pointB)).toBe(false);
    });
  });

  describe("notEq", () => {
    it('must return false if their attributes are equal', () => {
      let pointA = new Point(1, 3);
      let pointB = new Point(1, 3);

      expect(pointA.notEq(pointB)).toBe(false);
    });

    it('must return true if their attributes are not equal', () => {
      let pointA = new Point(1, 3);
      let pointB = new Point(2, 4);

      expect(pointA.notEq(pointB)).toBe(true);
    });
  });
});

