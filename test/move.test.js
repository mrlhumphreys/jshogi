import Move from '../src/move'
import fixtures from './fixtures'

describe('Move', () => {
  describe('result', () => {
    describe('when there is a winner', () => {
      it('must return a GameOver result', () => {
        let match = fixtures('winnerMatch');
        let move = new Move({ touchedId: '75', playerNumber: 1, match: match });

        let result = move.result;
        let expected = { name: 'GameOver', message: 'Game is over.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('when it is not the players turn', () => {
      it('must return a NotPlayersTurn result', () => {
        let match = fixtures('match');
        let move = new Move({ touchedId: '75', playerNumber: 2, match: match });

        let result = move.result;
        let expected = { name: 'NotPlayersTurn', message: 'It is not your turn.' }; 

        expect(result).toEqual(expected);
      });
    });

    describe('piece is not selected', () => {
      describe('square does not exist', () => {
        it('must return a SquareNotFound result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: '110', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'SquareNotFound', message: 'Square does not exist.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('square is empty', () => {
        it('must return an EmptySquare result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: '76', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'EmptySquare', message: 'Square is empty.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('piece is not owned by player', () => {
        it('must return a PieceOwnershipMismatch result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: '73', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'PieceOwnershipMismatch', message: 'Piece is owned by opponent.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('piece cannot move in that way', () => {
        it('must return a MoveImpossible result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: '88', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MoveImpossible', message: 'Piece cannot move.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('piece can move that way', () => {
        it('must return a MovePossible result', () => {
          let match = fixtures('match');
          let move = new Move({ touchedId: '77', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MovePossible', message: '' }; 

          expect(result).toEqual(expected);
        });
      });
    });

    describe('piece in hand is selected', () => {
      describe('when destination is occupied', () => {
        it('must return a SquareOccupied result', () => {
          let match = fixtures('selectedPieceInHandMatch');
          let move = new Move({ touchedId: '13', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'SquareOccupied', message: 'Piece must be dropped on empty square.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('when drop prevents legal moves', () => {
        it('must return a NoLegalMoves result', () => {
          let match = fixtures('selectedPieceInHandMatch');
          let move = new Move({ touchedId: '71', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'NoLegalMoves', message: 'Piece cannot move if placed on that square.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('when drop puts two fuhyuu in file', () => {
        it('must return a TwoFuhyuuInFile result', () => {
          let match = fixtures('selectedPieceInHandMatch');
          let move = new Move({ touchedId: '96', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'TwoFuhyouInFile', message: 'Cannot place two fuhyou in the same file.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('when drop of fuhyuu causes checkmate', () => {
        it('must return a Fuhyuu causes checkmate result', () => {
          let match = fixtures('dropFuhyuuCheckmateMatch');
          let move = new Move({ touchedId: '92', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'FuhyouCausesCheckmate', message: 'Fuhyou cannot cause checkmate when dropped.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('when drop of non-fuhyou causes checkmate', () => {
        it('must return a DropValid result', () => {
          let match = fixtures('dropPieceCheckmateMatch');
          let move = new Move({ touchedId: '92', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'DropValid', message: '' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('when drop is valid', () => {
        it('must return a drop valid result', () => {
          let match = fixtures('selectedPieceInHandMatch');
          let move = new Move({ touchedId: '86', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'DropValid', message: '' }; 

          expect(result).toEqual(expected);
        });
      });
    });

    describe('piece on square is selected', () => {
      describe('move puts ou in check', () => {
        it('must return an OuInCheck result', () => {
          let match = fixtures('moveToSelfCheckZoneMatch');
          let move = new Move({ touchedId: '76', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'OuInCheck', message: 'Move puts ou in check.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('piece moves to promotion zone', () => {
        it('must return a PieceMovedToPromotionZone result', () => {
          let match = fixtures('moveToPromotionZoneMatch');
          let move = new Move({ touchedId: '73', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'PieceMovedToPromotionZone', message: 'Piece can promote.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('piece cannot move that way', () => {
        it('must return a MoveInvalid result', () => {
          let match = fixtures('selectedMatch');
          let move = new Move({ touchedId: '75', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MoveInvalid', message: 'Piece cannot move.' }; 

          expect(result).toEqual(expected);
        });
      });

      describe('piece can move that way', () => {
        it('must return a MoveValid result', () => {
          let match = fixtures('selectedMatch');
          let move = new Move({ touchedId: '76', playerNumber: 1, match: match });

          let result = move.result;
          let expected = { name: 'MoveValid', message: '' }; 

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
