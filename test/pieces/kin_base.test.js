import KinBase from '../../src/pieces/kin_base'
import Square from '../../src/square'
import GameState from '../../src/game_state'

describe('KinBase', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let kinBase = new KinBase({ id: 17, player_number: 1, type: 'kin_base'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: kinBase});
      let forward = new Square({id: '87', x: 1, y: 6, piece: null}); 
      let far = new Square({id: '86', x: 1, y: 5, piece: null}); 
      let diagonalForward = new Square({id: '77', x: 2, y: 6, piece: null}); 
      let side = new Square({id: '78', x: 2, y: 7, piece: null}); 
      let diagonalBack = new Square({id: '79', x: 2, y: 8, piece: null}); 
      let back = new Square({id: '89', x: 1, y: 8, piece: null}); 
      let gameState = new GameState({
        current_player_number: 1, 
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          side,
          diagonalBack,
          back
        ], 
        hands: [ 
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = kinBase.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonalBack);
    });

    it('must return occupied by opponent squares', () => {
      let kinBase = new KinBase({ id: 17, player_number: 1, type: 'kin_base'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: kinBase});
      let forward = new Square({id: '87', x: 1, y: 6, piece: { id: 2, player_number: 2, type: 'fuhyou' }}); 
      let far = new Square({id: '86', x: 1, y: 5, piece: { id: 3, player_number: 2, type: 'fuhyou' }}); 
      let diagonalForward = new Square({id: '77', x: 2, y: 6, piece: { id: 4, player_number: 2, type: 'fuhyou' }}); 
      let side = new Square({id: '78', x: 2, y: 7, piece: { id: 4, player_number: 2, type: 'fuhyou' }}); 
      let diagonalBack = new Square({id: '79', x: 2, y: 8, piece: { id: 5, player_number: 2, type: 'fuhyou' }}); 
      let back = new Square({id: '89', x: 1, y: 8, piece: { id: 6, player_number: 2, type: 'fuhyou' }}); 
      let gameState = new GameState({
        current_player_number: 1, 
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          side,
          diagonalBack,
          back
        ], 
        hands: [ 
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = kinBase.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).toContainEqual(diagonalForward);
      expect(result.squares).toContainEqual(side);
    });

    it('must not return occupied by player squares', () => {
      let kinBase = new KinBase({ id: 17, player_number: 1, type: 'kin_base'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: kinBase});
      let forward = new Square({id: '87', x: 1, y: 6, piece: { id: 2, player_number: 1, type: 'fuhyou' }}); 
      let far = new Square({id: '86', x: 1, y: 5, piece: { id: 3, player_number: 1, type: 'fuhyou' }}); 
      let diagonalForward = new Square({id: '77', x: 2, y: 6, piece: { id: 4, player_number: 1, type: 'fuhyou' }}); 
      let side = new Square({id: '78', x: 2, y: 7, piece: { id: 4, player_number: 1, type: 'fuhyou' }}); 
      let diagonalBack = new Square({id: '79', x: 2, y: 8, piece: { id: 5, player_number: 1, type: 'fuhyou' }}); 
      let back = new Square({id: '89', x: 1, y: 8, piece: { id: 6, player_number: 1, type: 'fuhyou' }}); 
      let gameState = new GameState({
        current_player_number: 1, 
        squares: [
          origin,
          forward,
          far,
          diagonalForward,
          side,
          diagonalBack,
          back
        ], 
        hands: [ 
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = kinBase.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonalForward);
      expect(result.squares).not.toContainEqual(side);
    });
  });
});

