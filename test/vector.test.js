import Vector from '../src/vector'
import Point from '../src/point'

describe('Vector', () => {
  describe('dx', () => {
    it('must return the difference between x2 and x1', () => {
      let pointA = new Point(1, 4);
      let pointB = new Point(7, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.dx).toEqual(6);
    });
  });

  describe('dy', () => {
    it('must return the difference between y2 and y1', () => {
      let pointA = new Point(1, 4);
      let pointB = new Point(7, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.dy).toEqual(-1);
    });
  });

  describe('absDx', () => {
    it('must return the absolute difference between x2 and x1', () => {
      let pointA = new Point(1, 4);
      let pointB = new Point(7, 3); 
      let vector = new Vector(pointA, pointB); 

      expect(vector.absDx).toEqual(6);
    });
  });

  describe('absDy', () => {
    it('must return the absolute difference between y2 and y1', () => {
      let pointA = new Point(1, 4);
      let pointB = new Point(7, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.absDy).toEqual(1);
    });
  });

  describe('diagonal', () => {
    it('must return true if the vertical and horizontal differences are the same', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(5, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.diagonal).toBe(true);
    });

    it('must return false if the vertical and horizontal differences are not the same', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.diagonal).toBe(false);
    });
  });

  describe('orthogonal', () => {
    it('must return true if the vertical or horizontal difference is zero', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.orthogonal).toBe(true);
    });

    it('must return false if the vertical and horizontal differences are not zero', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(5, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.orthogonal).toBe(false);
    });
  });

  describe('orthogonalOrDiagonal', () => {
    it('must return true if the vertical and horizontal differences are the same', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(5, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.orthogonalOrDiagonal).toBe(true);
    });

    it('must return true if the vertical or horizontal difference is zero', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.orthogonalOrDiagonal).toBe(true);
    });

    it('must return false if the vertical and horizontal differences are not the same and not zero', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(6, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.orthogonalOrDiagonal).toBe(false);
    });
  });

  describe('notOrthogonalOrDiagonal', () => {
    it('must return true if the vertical and horizontal differences are not the same and not zero', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(6, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.notOrthogonalOrDiagonal).toBe(true);
    });

    it('must return false if the vertical and horizontal differences are the same', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(5, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.notOrthogonalOrDiagonal).toBe(false);
    });

    it('must return false if the vertical or horizontal difference is zero', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.notOrthogonalOrDiagonal).toBe(false);
    });
  });

  describe('magnitude', () => {
    it('must return the maximum absolute difference', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(6, 2);
      let vector = new Vector(pointA, pointB);

      expect(vector.magnitude).toEqual(2);
    });
  });

  describe('directionX', () => {
    it('must return -1 if moving left', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(3, 4);
      let vector = new Vector(pointA, pointB);

      expect(vector.directionX).toEqual(-1);
    });

    it('must return 1 if moving right', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(5, 4);
      let vector = new Vector(pointA, pointB);

      expect(vector.directionX).toEqual(1);
    });

    it('must return 0 if not moving up or down', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 4);
      let vector = new Vector(pointA, pointB);

      expect(vector.directionX).toEqual(0);
    });
  });


  describe('directionY', () => {
    it('must return -1 if moving up', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.directionY).toEqual(-1);
    });

    it('must return 1 if moving down', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 5);
      let vector = new Vector(pointA, pointB);

      expect(vector.directionY).toEqual(1);
    });

    it('must return 0 if not moving left or right', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(4, 4);
      let vector = new Vector(pointA, pointB);

      expect(vector.directionY).toEqual(0);
    });
  });

  describe('direction', () => {
    it('must return a direction object with the directionX and directionY values', () => {
      let pointA = new Point(4, 4);
      let pointB = new Point(5, 3);
      let vector = new Vector(pointA, pointB);

      expect(vector.direction.x).toEqual(1);
      expect(vector.direction.y).toEqual(-1);
    });
  });
});
