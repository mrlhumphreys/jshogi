import GameState from '../src/game_state'
import Square from '../src/square'
import Fuhyou from '../src/fuhyou'
import Tokin from '../src/tokin'

describe('GameState', () => {
  describe('asJson', () => {
    it('must return the game state serialized as a simple object', () => {
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } }
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ] 
      });

      let expected = {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ] 
      };

      let result = gameState.asJson;

      expect(result).toEqual(expected);
    });
  });

  describe('selectedSquare', () => {
    describe('with a square selected', () => {
      it('must return the selected square', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: true, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectedSquare;

        expect(result.id).toEqual("91");
      });
    });

    describe('with a square not selected', () => {
      it('must return undefined', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectedSquare;

        expect(result).toBe(undefined);
      });
    });
  });

  describe('selectedPieceInHand', () => {
    describe('there is a selected piece', () => {
      it('must return the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [ { id: 3, player_number: 1, selected: true, type: 'fuhyou' } ] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectedPieceInHand;

        expect(result.constructor).toBe(Fuhyou);
        expect(result.id).toEqual(3);
      });
    });

    describe('there is no selected piece', () => {
      it('must return null', () => {

      });
    });
  });

  describe('findSquare', () => {
    describe('with the square existing', () => {
      it('returns the square matching the id', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.findSquare('81');

        expect(result.id).toEqual('81');
      });
    });

    describe('with the square not existing', () => {
      it('returns undefined', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.findSquare('101');

        expect(result).toBe(undefined);
      });
    });
  });

  describe('findPieceInHand', () => {
    describe('when it exists', () => {
      it('returns the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [{ id: 3, player_number: 1, type: 'fuhyou' }] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.findPieceInHand(3);

        expect(result.type).toEqual('fuhyou');
        expect(result.id).toEqual(3);
      });
    });

    describe('when it does not exist', () => {
      it('returns null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [{ id: 3, player_number: 1, type: 'fuhyou' }] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.findPieceInHand(4);

        expect(result).toBe(null);
      });
    });
  });

  describe('playersTurn', () => {
    describe('when current player matches', () => {
      it('returns true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.playersTurn(1); 

        expect(result).toBe(true);
      });
    });

    describe('when current player does not match', () => {
      it('returns false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: 'keima' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.playersTurn(2); 

        expect(result).toBe(false);
      });
    });
  });

  describe('capturedSquare', () => {
    describe('when to is occupied', () => {
      it('must return to', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: '' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let from = new Square({ id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } });
        let to = new Square({ id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'fuhyou' } }); 

        let result = gameState.capturedSquare(from, to);

        expect(result.id).toEqual('91');
      });
    });

    describe('when to is not occupied', () => {
      it('must return null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: null },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let from = new Square({ id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } });
        let to = new Square({ id: '91', x: 0, y: 0, piece: null }); 

        let result = gameState.capturedSquare(from, to);

        expect(result).toBe(null);
      });
    });
  });

  describe('capturedSquareId', () => {
    describe('when to occupied', () => {
      it('must return the id', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'kyousha' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, selected: false, type: '' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let from = new Square({ id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } });
        let to = new Square({ id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, selected: false, type: 'fuhyou' } }); 

        let result = gameState.capturedSquareId(from, to);

        expect(result).toEqual('91');
      });
    });

    describe('when to is not occupied', () => {
      it('must return null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: null },
            { id: '81', x: 1, y: 0, piece: { id: 1, player_number: 1, selected: false, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let from = new Square({ id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } });
        let to = new Square({ id: '91', x: 0, y: 0, piece: null }); 

        let result = gameState.capturedSquare(from, to);

        expect(result).toBe(null);
      });
    });
  });

  describe('pieceMovedToPromotionZone', () => {
    describe('from has piece', () => {
      describe('to is in the promotion zone', () => {
        it('returns true', () => {
          let gameState = new GameState({
            current_player_number: 1,
            squares: [
              { id: '93', x: 0, y: 2, piece: null },
              { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, selected: false, type: 'fuhyou' } }
            ],
            hands: [
              { player_number: 1, pieces: [] },
              { player_number: 2, pieces: [] }
            ] 
          });

          let from = new Square({ id: '94', x: 0, y: 3, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } });
          let to = new Square({ id: '93', x: 0, y: 2, piece: null }); 

          let result = gameState.pieceMovedToPromotionZone(from, to);

          expect(result).toBe(true);
        });
      });

      describe('to is not in the promotion zone', () => {
        it('returns false', () => {
          let gameState = new GameState({
            current_player_number: 1,
            squares: [
              { id: '94', x: 0, y: 3, piece: null },
              { id: '95', x: 0, y: 4, piece: { id: 1, player_number: 1, selected: false, type: 'fuhyou' } }
            ],
            hands: [
              { player_number: 1, pieces: [] },
              { player_number: 2, pieces: [] }
            ] 
          });

          let from = new Square({ id: '95', x: 0, y: 4, piece: { id: 2, player_number: 1, selected: false, type: 'fuhyou' } });
          let to = new Square({ id: '94', x: 0, y: 3, piece: null }); 

          let result = gameState.pieceMovedToPromotionZone(from, to);

          expect(result).toBe(false);
        });
      });
    });

    describe('from has no piece', () => {
      it('returns false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let from = new Square({ id: '94', x: 0, y: 3, piece: null });
        let to = new Square({ id: '93', x: 0, y: 2, piece: null }); 

        let result = gameState.pieceMovedToPromotionZone(from, to);

        expect(result).toBe(false);
      });
    });
  });

  describe('inCheckmate', () => {
    describe('in check and ou cannot move', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'gyokushou' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, type: 'fuhyou' } },
            { id: '92', x: 0, y: 1, piece: null },
            { id: '93', x: 0, y: 2, piece: { id: 3, player_number: 2, type: 'hisha' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(true);
      });
    });

    describe('in check and ou can move', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'gyokushou' } },
            { id: '81', x: 1, y: 0, piece: null },
            { id: '92', x: 0, y: 1, piece: null },
            { id: '93', x: 0, y: 2, piece: { id: 3, player_number: 2, type: 'hisha' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(false);
      });
    });

    describe('not in check and non ou pieces cannot move and ou cannot move', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'gyokushou' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, type: 'fuhyou' } },

            { id: '92', x: 0, y: 1, piece: { id: 3, player_number: 1, type: 'fuhyou' } },
            { id: '82', x: 1, y: 1, piece: { id: 4, player_number: 1, type: 'fuhyou' } },
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(true);
      });
    });

    describe('not in check and non ou pieces cannot move and ou can move', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 1, type: 'gyokushou' } },
            { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 1, type: 'fuhyou' } },

            { id: '92', x: 0, y: 1, piece: { id: 3, player_number: 1, type: 'fuhyou' } },
            { id: '82', x: 1, y: 1, piece: { id: 4, player_number: 1, type: 'fuhyou' } },

            { id: '93', x: 0, y: 2, piece: null },

            { id: '94', x: 0, y: 3, piece: { id: 5, player_number: 1, type: 'fuhyou' } },
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.inCheckmate(1);

        expect(result).toBe(false);
      });
    });
  });

  describe('inCheck', () => {
    describe('when ou is threatened', () => {
      it('returns true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
            { id: '92', x: 0, y: 1, piece: null },
            { id: '93', x: 0, y: 2, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.inCheck(2);

        expect(result).toBe(true); 
      });
    });

    describe('when ou is not threatened', () => {
      it('returns false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
            { id: '92', x: 0, y: 1, piece: null },
            { id: '93', x: 0, y: 2, piece: { id: 32, player_number: 1, type: 'fuhyou' } },
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.inCheck(2);

        expect(result).toBe(false); 
      });
    });
  });

  describe('nonOuPiecesCannotMove', () => {
    describe('non ou pieces have no destinations', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 5, player_number: 1, type: 'fuhyou' } },
            { id: '92', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.nonOuPiecesCannotMove(1);

        expect(result).toBe(true);
      });
    });

    describe('non ou pieces have destinations', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: null },
            { id: '92', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.nonOuPiecesCannotMove(1);

        expect(result).toBe(false);
      });
    });
  });

  describe('ouCannotMove', () => {
    describe('ou has no destinations', () => {
      it('must return true', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'gyokushou' } },
            { id: '92', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.ouCannotMove(1);
        
        expect(result).toBe(true);
      });
    });

    describe('ou has destinations', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'gyokushou' } },
            { id: '92', x: 0, y: 1, piece: { id: 6, player_number: 2, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.ouCannotMove(1);
        
        expect(result).toBe(false);
      });
    });
  });

  describe('winner', () => {
    describe('when player 1 is in checkmate', () => {
      it('must return 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'gyokushou' } },
            { id: '92', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'fuhyou' } },

            { id: '81', x: 1, y: 0, piece: null },
            { id: '82', x: 1, y: 1, piece: { id: 8, player_number: 1, type: 'fuhyou' } },

            { id: '71', x: 2, y: 0, piece: { id: 10, player_number: 2, type: 'hisha' } },
            { id: '72', x: 2, y: 1, piece: { id: 12, player_number: 2, type: 'oushou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.winner;

        expect(result).toEqual(2);
      });
    });

    describe('when player 2 is in checkmate', () => {
      it('must return 1', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'gyokushou' } },
            { id: '92', x: 0, y: 1, piece: { id: 6, player_number: 1, type: 'hisha' } },

            { id: '81', x: 1, y: 0, piece: { id: 14, player_number: 2, type: 'fuhyou' } },
            { id: '82', x: 1, y: 1, piece: null },

            { id: '71', x: 2, y: 0, piece: { id: 10, player_number: 2, type: 'fuhyou' } },
            { id: '72', x: 2, y: 1, piece: { id: 12, player_number: 2, type: 'oushou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.winner;

        expect(result).toEqual(1);
      });
    });

    describe('when no player is in checkmate', () => {
      it('must return null', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '91', x: 0, y: 0, piece: { id: 4, player_number: 1, type: 'gyokushou' } },
            { id: '92', x: 0, y: 1, piece: null },

            { id: '81', x: 1, y: 0, piece: null },
            { id: '82', x: 1, y: 1, piece: null },

            { id: '71', x: 2, y: 0, piece: null },
            { id: '72', x: 2, y: 1, piece: { id: 12, player_number: 2, type: 'oushou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.winner;

        expect(result).toBe(null);
      });
    });
  });

  describe('dup', () => {
    it('returns a duplicate game state object', () => {
      let gameState = new GameState({
        current_player_number: 1,
        squares: [
          { id: '93', x: 0, y: 2, piece: null },
          { id: '94', x: 0, y: 3, piece: null }
        ],
        hands: [
          { player_number: 1, pieces: [] },
          { player_number: 2, pieces: [] }
        ] 
      });

      let result = gameState.dup;

      expect(result.constructor).toEqual(GameState);
      expect(result.currentPlayerNumber).toEqual(1);
      expect(result.squares.length()).toEqual(2);
      expect(result.hands.length).toEqual(2);
    });
  });

  describe('opponentOf', () => {
    describe('when player 1', () => {
      it('must return 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.opponentOf(1);

        expect(result).toEqual(2);
      });
    });

    describe('when player 2', () => {
      it('must return 1', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.opponentOf(2);

        expect(result).toEqual(1);
      });
    });
  });

  describe('opponent', () => {
    describe('when current player is 1', () => {
      it('must return 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.opponent;

        expect(result).toEqual(2);
      });
    });

    describe('when current player is 2', () => {
      it('must return 1', () => {
        let gameState = new GameState({
          current_player_number: 2,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.opponent;

        expect(result).toEqual(1);
      });
    });
  });

  describe('performMove', () => {
    describe('piece is actually moving', () => {
      describe('and there is no capture', () => {
        it('moves the piece', () => {
          let gameState = new GameState({
            current_player_number: 1,
            squares: [
              { id: '93', x: 0, y: 2, piece: null },
              { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
            ],
            hands: [
              { player_number: 1, pieces: [] },
              { player_number: 2, pieces: [] }
            ] 
          });

          let from = gameState.squares.findById('94');
          let to = gameState.squares.findById('93');
          let captured = null;

          let result = gameState.performMove(from, to, captured);
          let newFrom = gameState.squares.findById('94');
          let newTo = gameState.squares.findById('93');

          expect(result).toBe(true);
          expect(newFrom.piece).toBe(null);
          expect(newTo.piece.id).toEqual(1);
        });
      });

      describe('and there is capture', () => {
        it('moves the piece and adds the captured piece to hand', () => {
          let gameState = new GameState({
            current_player_number: 1,
            squares: [
              { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
              { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
            ],
            hands: [
              { player_number: 1, pieces: [] },
              { player_number: 2, pieces: [] }
            ] 
          });

          let from = gameState.squares.findById('94');
          let to = gameState.squares.findById('93');
          let captured = gameState.squares.findById('93');

          let result = gameState.performMove(from, to, captured);
          let newFrom = gameState.squares.findById('94');
          let newTo = gameState.squares.findById('93');
          let hand = gameState.hands.find(function(h) { return h.playerNumber === 1; });

          expect(result).toBe(true);
          expect(newFrom.piece).toBe(null);
          expect(newTo.piece.id).toEqual(1);
          expect(hand.pieces.length).toEqual(1);
          expect(hand.pieces[0].id).toEqual(2);
        });
      });
    });

    describe('piece is not actually moving', () => {
      it('does not move the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let from = gameState.squares.findById('94');
        let to = gameState.squares.findById('94');
        let captured = null; 

        let result = gameState.performMove(from, to, captured);
        let newFrom = gameState.squares.findById('94');
        let newTo = gameState.squares.findById('94');

        expect(result).toBe(false);
        expect(newFrom.piece.id).toEqual(1);
      });
    });
  });

  describe('move', () => {
    describe('from and to exist', () => {
      it('moves the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.move('94','93');

        let from = gameState.squares.findById('94');
        let to = gameState.squares.findById('93');

        expect(result).toBe(true);
        expect(from.piece).toBe(null);
        expect(to.piece.id).toEqual(1);
      });
    });

    describe('from does not exist', () => {
      it('does not move the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.move('940','93');

        let a = gameState.squares.findById('94');
        let b = gameState.squares.findById('93');

        expect(result).toBe(false);
        expect(a.piece.id).toEqual(1);
        expect(b.piece.id).toEqual(2);
      });
    });

    describe('to does not exist', () => {
      it('does not move the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.move('94','930');

        let a = gameState.squares.findById('94');
        let b = gameState.squares.findById('93');

        expect(result).toBe(false);
        expect(a.piece.id).toEqual(1);
        expect(b.piece.id).toEqual(2);
      });
    });
  });

  describe('drop', () => {
    describe('piece is in hand and square exists', () => {
      it('must move the piece from hand to the square', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [{ id: 1, player_number: 1, type: 'fuhyou' }] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.drop(1, '94');
        let square = gameState.squares.findById('94');

        expect(result).toBe(true);
        expect(square.piece.id).toEqual(1);
      });
    });

    describe('piece is not in hand and square exists', () => {
      it('must not add a piece to the square', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [{ id: 1, player_number: 1, type: 'fuhyou' }] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.drop(2, '94');
        let square = gameState.squares.findById('94');

        expect(result).toBe(false);
        expect(square.piece).toBe(null);
      });
    });

    describe('piece is in hand and square does not exist', () => {
      it('must not move the piece from hand', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: null },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [{ id: 1, player_number: 1, type: 'fuhyou' }] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.drop(1, '104');
        let hand = gameState.hands.find(function(h) { return h.playerNumber === 1; });

        expect(result).toBe(false);
        expect(hand.pieces[0].id).toEqual(1);
      });
    });
  });

  describe('selectPiece', () => {
    describe('square exists', () => {
      it('must select the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectPiece('94');
        let square = gameState.findSquare('94');

        expect(result).toBe(true);
        expect(square.piece.selected).toBe(true);
      });
    });

    describe('square does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectPiece('104');
        let square_a = gameState.findSquare('93');
        let square_b = gameState.findSquare('94');

        expect(result).toBe(false);
        expect(square_a.piece.selected).toBe(false);
        expect(square_b.piece.selected).toBe(false);
      });
    });
  });

  describe('deselectPiece', () => {
    describe('square exists', () => {
      it('must deselect the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou', selected: true } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.deselectPiece('94');
        let square = gameState.findSquare('94');

        expect(result).toBe(true);
        expect(square.piece.selected).toBe(false);
      });
    });

    describe('square does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou', selected: true } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.deselectPiece('104');
        let square_a = gameState.findSquare('94');
        let square_b = gameState.findSquare('93');

        expect(result).toBe(false);
        expect(square_a.piece.selected).toBe(true);
        expect(square_b.piece.selected).toBe(false);
      });
    });
  });

  describe('selectPieceInHand', () => {
    describe('when piece exists', () => {
      it('must select the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou', selected: true } }
          ],
          hands: [
            { player_number: 1, pieces: [ { id: 7, player_number: 1, type: 'fuhyou', selected: false } ] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectPieceInHand(7);
        let piece = gameState.findPieceInHand(7);

        expect(result).toBe(true);
        expect(piece.selected).toBe(true);
      });
    });

    describe('when piece does not exist', () => {
      it('must deselect the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou', selected: true } }
          ],
          hands: [
            { player_number: 1, pieces: [ { id: 7, player_number: 1, type: 'fuhyou', selected: false } ] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.selectPieceInHand(17);

        expect(result).toBe(false);
      });
    });
  });

  describe('deselectPieceInHand', () => {
    describe('when selected piece exists', () => {
      it('must return the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou', selected: true } }
          ],
          hands: [
            { player_number: 1, pieces: [ { id: 7, player_number: 1, type: 'fuhyou', selected: true } ] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.deselectPieceInHand(7);
        let piece = gameState.findPieceInHand(7);

        expect(result).toBe(true);
        expect(piece.selected).toBe(false);
      });
    });

    describe('when piece does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou', selected: true } }
          ],
          hands: [
            { player_number: 1, pieces: [ { id: 7, player_number: 1, type: 'fuhyou', selected: true } ] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.deselectPieceInHand(17);

        expect(result).toBe(false);
      });
    });
  });

  describe('promote', () => {
    describe('when piece is promotable', () => {
      it('must promote the piece', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.promote('94');
        let square = gameState.squares.findById('94');

        expect(result).toBe(true);
        expect(square.piece.id).toEqual(1);
        expect(square.piece.constructor).toEqual(Tokin);
      });
    });

    describe('when piece is not promotable', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'tokin' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.promote('94');
        let square = gameState.squares.findById('94');

        expect(result).toBe(false);
        expect(square.piece.id).toEqual(1);
        expect(square.piece.constructor).toEqual(Tokin);
      });
    });

    describe('when piece does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: null }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.promote('94');
        let square = gameState.squares.findById('94');

        expect(result).toBe(false);
        expect(square.piece).toBe(null);
      });
    });

    describe('when square does not exist', () => {
      it('must return false', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.promote('104');
        let square_a = gameState.squares.findById('93');
        let square_b = gameState.squares.findById('94');

        expect(result).toBe(false);
        expect(square_a.piece.constructor).toEqual(Fuhyou);
        expect(square_b.piece.constructor).toEqual(Fuhyou);
      });
    });
  });

  describe('passTurn', () => {
    describe('when current player is 1', () => {
      it('must set the current player to 2', () => {
        let gameState = new GameState({
          current_player_number: 1,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.passTurn();

        expect(result).toBe(true);
        expect(gameState.currentPlayerNumber).toEqual(2);
      });
    });

    describe('when current player is 2', () => {
      it('must set the current player to 1', () => {
        let gameState = new GameState({
          current_player_number: 2,
          squares: [
            { id: '93', x: 0, y: 2, piece: { id: 2, player_number: 2, type: 'fuhyou' } },
            { id: '94', x: 0, y: 3, piece: { id: 1, player_number: 1, type: 'fuhyou' } }
          ],
          hands: [
            { player_number: 1, pieces: [] },
            { player_number: 2, pieces: [] }
          ] 
        });

        let result = gameState.passTurn();

        expect(result).toBe(true);
        expect(gameState.currentPlayerNumber).toEqual(1);
      });
    });
  });
});
