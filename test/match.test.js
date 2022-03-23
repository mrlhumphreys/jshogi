import Match from '../src/match'
import Tokin from '../src/pieces/tokin'
import fixtures from './fixtures'

describe('Match', () => {
  describe('asJson', () => {
    it('returns the match serialised as a simple object', () => {
      let match = fixtures('match');
      let result = match.asJson;
      let expected = {
        id: 1,
        current_move: {},
        game_state: {
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } },
            { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, selected: false, type: 'ginshou' } },
            { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, selected: false, type: 'kinshou' } },
            { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, selected: false, type: 'oushou' } },
            { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, selected: false, type: 'kinshou' } },
            { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, selected: false, type: 'ginshou' } },
            { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, selected: false, type: 'keima' } },
            { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, selected: false, type: 'kyousha' } },

            { id: '92', x: 0, y: 1, piece: null },
            { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, selected: false, type: 'hisha' } },
            { id: '72', x: 2, y: 1, piece: null },
            { id: '62', x: 3, y: 1, piece: null },
            { id: '52', x: 4, y: 1, piece: null },
            { id: '42', x: 5, y: 1, piece: null },
            { id: '32', x: 6, y: 1, piece: null },
            { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, selected: false, type: 'kakugyou' } },
            { id: '12', x: 8, y: 1, piece: null },

            { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '73', x: 2, y: 2, piece: { id: 14, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, selected: false, type: 'fuhyou' } },
            { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, selected: false, type: 'fuhyou' } },

            { id: '94', x: 0, y: 3, piece: null },
            { id: '84', x: 1, y: 3, piece: null },
            { id: '74', x: 2, y: 3, piece: null },
            { id: '64', x: 3, y: 3, piece: null },
            { id: '54', x: 4, y: 3, piece: null },
            { id: '44', x: 5, y: 3, piece: null },
            { id: '34', x: 6, y: 3, piece: null },
            { id: '24', x: 7, y: 3, piece: null },
            { id: '14', x: 8, y: 3, piece: null },

            { id: '95', x: 0, y: 4, piece: null },
            { id: '85', x: 1, y: 4, piece: null },
            { id: '75', x: 2, y: 4, piece: null },
            { id: '65', x: 3, y: 4, piece: null },
            { id: '55', x: 4, y: 4, piece: null },
            { id: '45', x: 5, y: 4, piece: null },
            { id: '35', x: 6, y: 4, piece: null },
            { id: '25', x: 7, y: 4, piece: null },
            { id: '15', x: 8, y: 4, piece: null },

            { id: '96', x: 0, y: 5, piece: null },
            { id: '86', x: 1, y: 5, piece: null },
            { id: '76', x: 2, y: 5, piece: null },
            { id: '66', x: 3, y: 5, piece: null },
            { id: '56', x: 4, y: 5, piece: null },
            { id: '46', x: 5, y: 5, piece: null },
            { id: '36', x: 6, y: 5, piece: null },
            { id: '26', x: 7, y: 5, piece: null },
            { id: '16', x: 8, y: 5, piece: null },

            { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '77', x: 2, y: 6, piece: { id: 23, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, selected: false, type: 'fuhyou' } },
            { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, selected: false, type: 'fuhyou' } },

            { id: '98', x: 0, y: 7, piece: null },
            { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, selected: false, type: 'kakugyou' } },
            { id: '78', x: 2, y: 7, piece: null },
            { id: '68', x: 3, y: 7, piece: null },
            { id: '58', x: 4, y: 7, piece: null },
            { id: '48', x: 5, y: 7, piece: null },
            { id: '38', x: 6, y: 7, piece: null },
            { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, selected: false, type: 'hisha' } },
            { id: '18', x: 8, y: 7, piece: null },

            { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, selected: false, type: 'kyousha' } },
            { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, selected: false, type: 'keima' } },
            { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, selected: false, type: 'ginshou' } },
            { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, selected: false, type: 'kinshou' } },
            { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, selected: false, type: 'gyokushou' } },
            { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, selected: false, type: 'kinshou' } },
            { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, selected: false, type: 'ginshou' } },
            { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, selected: false, type: 'keima' } },
            { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, selected: false, type: 'kyousha' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] },
          ]
        },
        players: [
          { player_number: 1, name: 'aaa', resigned: false },
          { player_number: 2, name: 'bbb', resigned: false }
        ],
        last_action: null,
        notification: 'aaa to move',
        promotion: false
      };
      
      expect(result).toEqual(expected);
    });
  });

  describe('winner', () => {
    it('returns the winner of the match', () => {
      let match = fixtures('winnerMatch');
      expect(match.winner).toEqual(1);
    });
  });

  describe('touchSquare', () => {
    describe('when move is valid', () => {
      it('moves the piece and passes the turn', () => {
        let match = fixtures('selectedMatch');

        let result = match.touchSquare('76',1);
        let from = match.gameState.findSquare('77');
        let to = match.gameState.findSquare('76');
        let expectedAction = { kind: 'move', data: { fromId: '77', toId: '76' } };

        expect(result).toBe(true);
        expect(from.piece).toBe(null);
        expect(to.piece.selected).toBe(false);
        expect(to.piece.id).toEqual(23);
        expect(match.gameState.currentPlayerNumber).toEqual(2);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when drop is valid', () => {
      it('moves the piece and passes the turn', () => {
        let match = fixtures('selectedPieceInHandMatch');
        
        let result = match.touchSquare('86', 1);
        let hand = match.gameState.hands.find(function(h) { return h.playerNumber === 1; });
        let square = match.gameState.findSquare('86');
        let expectedAction = { kind: 'drop', data: { pieceId: 14, squareId: '86' } };

        expect(result).toBe(true);
        expect(hand.findById(14)).toBe(undefined);
        expect(square.piece.selected).toBe(false);
        expect(square.piece.id).toEqual(14);
        expect(match.gameState.currentPlayerNumber).toEqual(2);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when piece moves to promotion zone', () => {
      it('moves the piece and sets up promotion mode', () => {
        let match = fixtures('moveToPromotionZoneMatch');

        let result = match.touchSquare('73', 1);
        let from = match.gameState.findSquare('74');
        let to = match.gameState.findSquare('73');
        let expectedAction = null;

        expect(result).toBe(true);
        expect(from.piece).toBe(null);
        expect(to.piece.selected).toBe(true);
        expect(to.piece.id).toEqual(23);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when move is possible', () => {
      it('selects the piece', () => {
        let match = fixtures('match');

        let result = match.touchSquare('77', 1);
        let square = match.gameState.findSquare('77');
        let expectedAction = null;

        expect(result).toBe(true);
        expect(square.piece.selected).toBe(true);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when move is invalid', () => {
      it('deselects the piece', () => {
        let match = fixtures('selectedMatch');

        let result = match.touchSquare('75',1);
        let from = match.gameState.findSquare('77');
        let to = match.gameState.findSquare('75');
        let expectedAction = null; 

        expect(result).toBe(false);
        expect(from.piece.id).toEqual(23);
        expect(from.piece.selected).toBe(false);
        expect(to.piece).toBe(null);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when ou is in check', () => {
      it('deselects the piece', () => {
        let match = fixtures('moveToSelfCheckZoneMatch');

        let result = match.touchSquare('76',1);
        let from = match.gameState.findSquare('77');
        let to = match.gameState.findSquare('76');
        let expectedAction = null; 

        expect(result).toBe(false);
        expect(from.piece.id).toEqual(23);
        expect(from.piece.selected).toBe(false);
        expect(to.piece).toBe(null);
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });
  });

  describe('touchPromotionOption', () => {
    describe('when ValidPromotion', () => {
      it('promotes the piece and passes the turn', () => {
        let match = fixtures('promoteMatch');

        let result = match.touchPromotionOption(true, 1);
        let from = match.gameState.findSquare('74');
        let to = match.gameState.findSquare('73');
        let expectedAction = { kind: 'move', data: { fromId: '74', toId: '73', promote: true } };

        expect(result).toBe(true);
        expect(from.piece).toBe(null);
        expect(to.piece.selected).toBe(false);
        expect(to.piece.constructor).toBe(Tokin);
        expect(to.piece.id).toEqual(23);
        expect(match.gameState.currentPlayerNumber).toEqual(2);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });

    describe('when not ValidPromotion', () => {
      it('adds a notification', () => {
        let match = fixtures('match');

        let result = match.touchPromotionOption(true, 1);
        let expectedAction = null; 

        expect(result).toBe(false);
        expect(match.notification).toEqual('There is no piece to promote.');
        expect(match.gameState.currentPlayerNumber).toEqual(1);
        expect(match.lastAction).toEqual(expectedAction);
      });
    });
  });

  describe('touchPieceInHand', () => {
    describe('when piece has not been selected', () => {
      it('selects the piece', () => {
        let match = fixtures('pieceInHandMatch');

        let result = match.touchPieceInHand(14, 1);
        let hand = match.gameState.hands.find(function(h) { return h.playerNumber = 1});
        let piece = hand.findById(14);

        expect(result).toBe(true);
        expect(piece.selected).toBe(true);
      });
    });

    describe('when piece has been selected', () => {
      it('deselects the piece', () => {
        let match = fixtures('selectedPieceInHandMatch');

        let result = match.touchPieceInHand(14, 1);
        let hand = match.gameState.hands.find(function(h) { return h.playerNumber = 1});
        let piece = hand.findById(14);

        expect(result).toBe(true);
        expect(piece.selected).toBe(false);
      });
    });

    describe('when piece does not exist', () => {
      it('notifies with a message', () => {
        let match = fixtures('pieceInHandMatch');

        let result = match.touchPieceInHand(24, 1);

        expect(result).toBe(false);
        expect(match.notification).toEqual('Piece does not exist.');
      });
    });
  });
});
