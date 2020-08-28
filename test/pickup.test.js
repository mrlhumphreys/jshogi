import Pickup from '../src/pickup'
import fixtures from './fixtures'

describe('Pickup', () => {
  describe('result', () => {
    describe('when there is a winner', () => {
      it('must return a GameOver result', () => {
        let match = fixtures('winnerMatch');
        let pickup = new Pickup({ playerNumber: 1, touchedId: 1, match: match });

        let result = pickup.result;
        let expected = { name: 'GameOver', message: 'Game is over.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when it is not the players turn', () => {
      it('must return a NotPlayersTurn result', () => {
        let match = fixtures('match');
        let pickup = new Pickup({ playerNumber: 2, touchedId: 1, match: match });

        let result = pickup.result;
        let expected = { name: 'NotPlayersTurn', message: 'It is not your turn.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when a piece is selected', () => {
      it('must return a PieceAlreadySelected result', () => {
        let match = fixtures('selectedPieceInHandMatch');
        let pickup = new Pickup({ playerNumber: 1, touchedId: 14, match: match });

        let result = pickup.result;
        let expected = { name: 'PieceAlreadySelected', message: '' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when the piece does not exist', () => {
      it('must return a PieceNotFound result', () => {
        let match = fixtures('pieceInHandMatch');
        let pickup = new Pickup({ playerNumber: 1, touchedId: 24, match: match });

        let result = pickup.result;
        let expected = { name: 'PieceNotFound', message: 'Piece does not exist.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when the piece exists', () => {
      it('must return a PieceSelected result', () => {
        let match = fixtures('pieceInHandMatch');
        let pickup = new Pickup({ playerNumber: 1, touchedId: 14, match: match });

        let result = pickup.result;
        let expected = { name: 'PieceSelected', message: '' }; 

        expect(result).toEqual(expected);
      });
    });
  });
});
