import Keima from '../src/keima'
import Square from '../src/square'
import GameState from '../src/game_state'

describe('Keima', () => {
  describe('destinations', () => {
    it('must return only valid destinations', () => {
      let keima = new Keima({ id: 17, player_number: 1, type: 'keima'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: keima});
      let forward = new Square({id: '87', x: 1, y: 6, piece: null});
      let farForward = new Square({id: '86', x: 1, y: 5, piece: null});
      let side = new Square({id: '78', x: 2, y: 7, piece: null});
      let diagonal = new Square({id: '77', x: 2, y: 6, piece: null});
      let lForward = new Square({id: '76', x: 2, y: 5, piece: null});
      let farSide = new Square({id: '68', x: 3, y: 7, piece: null});
      let lSide = new Square({id: '67', x: 3, y: 6, piece: null});
      let farDiagonal = new Square({id: '66', x: 3, y: 5, piece: null});
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farForward,
          side,
          diagonal,
          lForward,
          farSide,
          lSide,
          farDiagonal
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = keima.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(farForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonal);
      expect(result.squares).toContainEqual(lForward);
      expect(result.squares).not.toContainEqual(farSide);
      expect(result.squares).not.toContainEqual(lSide);
      expect(result.squares).not.toContainEqual(farDiagonal);
    });

    it('must return occupied by opponent squares', () => {
      let keima = new Keima({ id: 17, player_number: 1, type: 'keima'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: keima});
      let forward = new Square({id: '87', x: 1, y: 6, piece: { id: 1, player_number: 2, type: 'fuhyou' }});
      let farForward = new Square({id: '86', x: 1, y: 5, piece: { id: 2, player_number: 2, type: 'fuhyou' }});
      let side = new Square({id: '78', x: 2, y: 7, piece: { id: 3, player_number: 2, type: 'fuhyou' }});
      let diagonal = new Square({id: '77', x: 2, y: 6, piece: { id: 4, player_number: 2, type: 'fuhyou' }});
      let lForward = new Square({id: '76', x: 2, y: 5, piece: { id: 5, player_number: 2, type: 'fuhyou' }});
      let farSide = new Square({id: '68', x: 3, y: 7, piece: { id: 6, player_number: 2, type: 'fuhyou' }});
      let lSide = new Square({id: '67', x: 3, y: 6, piece: { id: 7, player_number: 2, type: 'fuhyou' }});
      let farDiagonal = new Square({id: '66', x: 3, y: 5, piece: { id: 8, player_number: 2, type: 'fuhyou' }});

      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farForward,
          side,
          diagonal,
          lForward,
          farSide,
          lSide,
          farDiagonal
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = keima.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(farForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonal);
      expect(result.squares).toContainEqual(lForward);
      expect(result.squares).not.toContainEqual(farSide);
      expect(result.squares).not.toContainEqual(lSide);
      expect(result.squares).not.toContainEqual(farDiagonal);
    });

    it('must not return occupied by player squares', () => {
      let keima = new Keima({ id: 17, player_number: 1, type: 'keima'});
      let origin = new Square({id: '88', x: 1, y: 7, piece: keima});
      let forward = new Square({id: '87', x: 1, y: 6, piece: { id: 1, player_number: 1, type: 'fuhyou' }});
      let farForward = new Square({id: '86', x: 1, y: 5, piece: { id: 2, player_number: 1, type: 'fuhyou' }});
      let side = new Square({id: '78', x: 2, y: 7, piece: { id: 3, player_number: 1, type: 'fuhyou' }});
      let diagonal = new Square({id: '77', x: 2, y: 6, piece: { id: 4, player_number: 1, type: 'fuhyou' }});
      let lForward = new Square({id: '76', x: 2, y: 5, piece: { id: 5, player_number: 1, type: 'fuhyou' }});
      let farSide = new Square({id: '68', x: 3, y: 7, piece: { id: 6, player_number: 1, type: 'fuhyou' }});
      let lSide = new Square({id: '67', x: 3, y: 6, piece: { id: 7, player_number: 1, type: 'fuhyou' }});
      let farDiagonal = new Square({id: '66', x: 3, y: 5, piece: { id: 8, player_number: 1, type: 'fuhyou' }});

      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          origin,
          forward,
          farForward,
          side,
          diagonal,
          lForward,
          farSide,
          lSide,
          farDiagonal
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ]
      });

      let result = keima.destinations(origin, gameState);

      expect(result.squares).not.toContainEqual(forward);
      expect(result.squares).not.toContainEqual(farForward);
      expect(result.squares).not.toContainEqual(side);
      expect(result.squares).not.toContainEqual(diagonal);
      expect(result.squares).not.toContainEqual(lForward);
      expect(result.squares).not.toContainEqual(farSide);
      expect(result.squares).not.toContainEqual(lSide);
    });
  });

  describe('hasLegalMovesOnSquare', () => {
    describe('when player 1', () => {
      describe('when rank is 1 (y is 0)', () => {
        it('must return false', () => {
          let keima = new Keima({ id: 18, player_number: 1, type: 'keima'});

          expect(keima.hasLegalMovesFromY(0)).toBe(false);
        });
      });

      describe('when rank is 2 (y is 1)', () => {
        it('must return true', () => {
          let keima = new Keima({ id: 18, player_number: 1, type: 'keima'});

          expect(keima.hasLegalMovesFromY(1)).toBe(false);
        });
      });

      describe('when rank is not 1 or 2 (y is not 0 or 1)', () => {
        it('must return true', () => {
          let keima = new Keima({ id: 18, player_number: 1, type: 'keima'});

          expect(keima.hasLegalMovesFromY(3)).toBe(true);
        });
      });
    });

    describe('when player 2', () => {
      describe('when rank is 9 (y is 8)', () => {
        it('must return false', () => {
          let keima = new Keima({ id: 18, player_number: 2, type: 'keima'});

          expect(keima.hasLegalMovesFromY(8)).toBe(false);
        });
      });

      describe('when rank is 8 (y is 7)', () => {
        it('must return true', () => {
          let keima = new Keima({ id: 18, player_number: 2, type: 'keima'});

          expect(keima.hasLegalMovesFromY(7)).toBe(false);
        });
      });

      describe('when rank is not 9 or 8 (y is not 8 or 7)', () => {
        it('must return true', () => {
          let keima = new Keima({ id: 18, player_number: 2, type: 'keima'});

          expect(keima.hasLegalMovesFromY(6)).toBe(true);
        });
      });
    });
  });
});
