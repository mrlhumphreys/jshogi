import Kyousha from '../src/kyousha'
import Square from '../src/square'
import GameState from '../src/game_state'

describe('Kyousha', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let kyousha = new Kyousha({ id: 17, player_number: 1, type: 'kyousha'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: kyousha});
      let forward = new Square({id: '87', x: 1, y: 6, piece: null}); 
      let far = new Square({id: '86', x: 1, y: 5, piece: null}); 
      let diagonal = new Square({id: '77', x: 2, y: 6, piece: null}); 
      let side = new Square({id: '78', x: 2, y: 7, piece: null}); 
      let back = new Square({id: '89', x: 1, y: 8, piece: null}); 
      let gameState = new GameState({
        current_player_number: 1, 
        squares: [
          origin,
          forward,
          far,
          diagonal,
          side,
          back
        ], 
        hands: [ 
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = kyousha.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonal);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must return occupied by opponent squares', () => {
      let kyousha = new Kyousha({ id: 17, player_number: 1, type: 'kyousha'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: kyousha});
      let forward = new Square({id: '87', x: 1, y: 6, piece: null}); 
      let far = new Square({id: '86', x: 1, y: 5, piece: { id: 2, player_number: 2, type: 'fuhyou' }}); 
      let diagonal = new Square({id: '77', x: 2, y: 6, piece: { id: 2, player_number: 2, type: 'fuhyou' }}); 
      let side = new Square({id: '78', x: 2, y: 7, piece: { id: 3, player_number: 2, type: 'fuhyou' }}); 
      let back = new Square({id: '89', x: 1, y: 8, piece: { id: 4, player_number: 2, type: 'fuhyou' }}); 
      let gameState = new GameState({
        current_player_number: 1, 
        squares: [
          origin,
          forward,
          far,
          diagonal,
          side,
          back
        ], 
        hands: [ 
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = kyousha.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonal);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(back);
    });

    it('must not return occupied by player squares', () => {
      let kyousha = new Kyousha({ id: 17, player_number: 1, type: 'kyousha'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: kyousha});
      let forward = new Square({id: '87', x: 1, y: 6, piece: null}); 
      let far = new Square({id: '86', x: 1, y: 5, piece: { id: 2, player_number: 1, type: 'fuhyou' }}); 
      let diagonal = new Square({id: '77', x: 2, y: 6, piece: { id: 2, player_number: 1, type: 'fuhyou' }}); 
      let side = new Square({id: '78', x: 2, y: 7, piece: { id: 3, player_number: 1, type: 'fuhyou' }}); 
      let back = new Square({id: '89', x: 1, y: 8, piece: { id: 4, player_number: 1, type: 'fuhyou' }}); 
      let gameState = new GameState({
        current_player_number: 1, 
        squares: [
          origin,
          forward,
          far,
          diagonal,
          side,
          back
        ], 
        hands: [ 
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = kyousha.destinations(origin, gameState);

      expect(result.squares).toContainEqual(forward);
      expect(result.squares).not.toContainEqual(far);
      expect(result.squares).not.toContainEqual(diagonal);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(back);
    });
  });

  describe('hasLegalMovesOnSquare', () => {
    describe('when player 1', () => {
      describe('when rank is 1 (y is 0)', () => {
        it('must return false', () => {
          let kyousha = new Kyousha({ id: 18, player_number: 1, type: 'fuhyou'});

          expect(kyousha.hasLegalMovesFromY(0)).toBe(false);
        });
      });

      describe('when rank is not 1 (y is not 1)', () => {
        it('must return true', () => {
          let kyousha = new Kyousha({ id: 18, player_number: 1, type: 'fuhyou'});

          expect(kyousha.hasLegalMovesFromY(1)).toBe(true);
        });
      });
    });

    describe('when player 2', () => {
      describe('when rank is 9 (y is 8)', () => {
        it('must return false', () => {
          let kyousha = new Kyousha({ id: 18, player_number: 2, type: 'fuhyou'});

          expect(kyousha.hasLegalMovesFromY(8)).toBe(false);
        });
      });

      describe('when rank is not 9 (y is not 8)', () => {
        it('must return true', () => {
          let kyousha = new Kyousha({ id: 18, player_number: 2, type: 'fuhyou'});

          expect(kyousha.hasLegalMovesFromY(7)).toBe(true);
        });
      });
    });
  });
});
