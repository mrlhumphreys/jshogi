import SquareSet from '../src/square_set'
import GameState from '../src/game_state'

describe('SquareSet', () => {
  describe('findOuForPlayer', () => {
    describe('when player is 1', () => {
      it('must return the gyokushou for the specified player', () => {
        let squareSet = new SquareSet({
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'oushou' } },
            { id: '81', x: 1, y: 0, piece: null },
            { id: '71', x: 2, y: 0, piece: { id: 2, player_number: 1, type: 'gyokushou' } },
            { id: '61', x: 3, y: 0, piece: { id: 3, player_number: 2, type: 'fuhyou' } },
            { id: '51', x: 4, y: 0, piece: { id: 4, player_number: 1, type: 'fuhyou' } }
          ]
        });

        let result = squareSet.findOuForPlayer(1);
        expect(result.piece.type).toEqual('gyokushou');
      });
    });

    describe('when player is 2', () => {
      it('must return the oushou for the specified player', () => {
        let squareSet = new SquareSet({
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'oushou' } },
            { id: '81', x: 1, y: 0, piece: null },
            { id: '71', x: 2, y: 0, piece: { id: 2, player_number: 1, type: 'gyokushou' } },
            { id: '61', x: 3, y: 0, piece: { id: 3, player_number: 2, type: 'fuhyou' } },
            { id: '51', x: 4, y: 0, piece: { id: 4, player_number: 1, type: 'fuhyou' } }
          ]
        });

        let result = squareSet.findOuForPlayer(2);
        expect(result.piece.type).toEqual('oushou');
      });
    });
  });

  describe('threatenedBy', () => {
    it('must return squares threatened by player', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: null },
            { id: '92', x: 0, y: 1, piece: null },
            { id: '93', x: 0, y: 2, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [ 
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });
        let squareSet = gameState.squares;

        let result = squareSet.threatenedBy(1, gameState);
      
        expect(result.squares.length).toEqual(1);
        expect(result.squares[0].id).toEqual('92');
    });
  });
});
