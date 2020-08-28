import Square from '../src/square'

describe('Square', () => {
  describe('promotionZone', () => {
    describe('when player 1', () => {
      describe('and y is less than 2', () => {
        it('must return true', () => {
          let square = new Square({id: 1, x: 2, y: 1, piece: null});
          let playerNumber = 1;
          let result = square.promotionZone(playerNumber);
          expect(result).toBe(true);
        });
      });

      describe('and y is greater than 2', () => {
        it('must return false', () => {
          let square = new Square({id: 1, x: 2, y: 3, piece: null});
          let playerNumber = 1;
          let result = square.promotionZone(playerNumber);
          expect(result).toBe(false);
        });
      });
    });

    describe('when player 2', () => {
      describe('and y is less than 6', () => {
        it('must return false', () => {
          let square = new Square({id: 1, x: 2, y: 5, piece: null});
          let playerNumber = 2;
          let result = square.promotionZone(playerNumber);
          expect(result).toBe(false);
        });
      });

      describe('and y is greater than 6', () => {
        it('must return true', () => {
          let square = new Square({id: 1, x: 2, y: 7, piece: null});
          let playerNumber = 2;
          let result = square.promotionZone(playerNumber);
          expect(result).toBe(true);
        });
      });
    });
  });
});
