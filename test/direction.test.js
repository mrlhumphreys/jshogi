import Direction from '../src/direction'

describe('direction', () => {
  describe('initialize', () => {
    it('must initialize a direction', () => {
      let x = 1;
      let y = 1;
      let direction = new Direction(x, y);

      expect(direction.x).toEqual(x);
      expect(direction.y).toEqual(y);
    });
  });
});
