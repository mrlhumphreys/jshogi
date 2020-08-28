import Promote from '../src/promote'
import fixtures from './fixtures'

describe('Promote', () => {
  describe('result', () => {
    describe('when there is a winner', () => {
      it('must return a GameOver result', () => {
        let match = fixtures('winnerMatch');
        let promote = new Promote({ playerNumber: 1, match: match });

        let result = promote.result;
        let expected = { name: 'GameOver', message: 'Game is over.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when it is not the players turn', () => {
      it('must return a NotPlayersTurn result', () => {
        let match = fixtures('match');
        let promote = new Promote({ playerNumber: 2, match: match });

        let result = promote.result;
        let expected = { name: 'NotPlayersTurn', message: 'It is not your turn.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when it is not in promotion mode', () => {
      it('must return a NoPieceToPromote result', () => {
        let match = fixtures('match');
        let promote = new Promote({ playerNumber: 1, match: match });

        let result = promote.result;
        let expected = { name: 'NoPieceToPromote', message: 'There is no piece to promote.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when it is valid', () => {
      it('must return a ValidPromotionResult', () => {
        let match = fixtures('promotionMatch');
        let promote = new Promote({ playerNumber: 1, match: match });

        let result = promote.result;
        let expected = { name: 'ValidPromotion', message: '' }; 

        expect(result).toEqual(expected);
      });
    });
  });
});
