import PieceFactory from '../src/piece_factory'
import Fuhyou from '../src/fuhyou'
import Kakugyou from '../src/kakugyou'
import Hisha from '../src/hisha'
import Kyousha from '../src/kyousha'
import Keima from '../src/keima'
import Ginshou from '../src/ginshou'
import Kinshou from '../src/kinshou'
import Oushou from '../src/oushou'
import Gyokushou from '../src/gyokushou'
import Tokin from '../src/tokin'
import Narikyou from '../src/narikyou'
import Narikei from '../src/narikei'
import Narigin from '../src/narigin'
import Ryuuma from '../src/ryuuma'
import Ryuuou from '../src/ryuuou'

describe('PieceFactory', () => {
  describe('build', () => {
    describe('with null', () => {
      it('returns null', () => {
        let pieceFactory = new PieceFactory(null);
        let result = pieceFactory.build;
        expect(result).toBe(null);
      });
    });

    describe('with built piece', () => {
      it('returns the piece', () => {
        let piece = new Fuhyou({id: 1, player_number: 2, type: 'fuhyou'});
        let pieceFactory = new PieceFactory(piece);
        let result = pieceFactory.build;
        expect(result).toBe(piece);
      });
    });

    describe('with fuhyou', () => {
      it('builds a fuhyou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'fuhyou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Fuhyou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with kakugyou', () => {
      it('builds a kakugyou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'kakugyou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Kakugyou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with hisha', () => {
      it('builds a hisha', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'hisha'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Hisha);
        expect(result.id).toEqual(1);
      });
    });

    describe('with kyousha', () => {
      it('builds a kyousha', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'kyousha'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Kyousha);
        expect(result.id).toEqual(1);
      });
    });

    describe('with keima', () => {
      it('builds a keima', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'keima'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Keima);
        expect(result.id).toEqual(1);
      });
    });

    describe('with ginshou', () => {
      it('builds a ginshou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'ginshou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Ginshou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with kinshou', () => {
      it('builds a kinshou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'kinshou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Kinshou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with oushou', () => {
      it('builds an oushou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'oushou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Oushou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with gyokushou', () => {
      it('builds a gyokushou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'gyokushou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Gyokushou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with tokin', () => {
      it('builds a tokin', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'tokin'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Tokin);
        expect(result.id).toEqual(1);
      });
    });

    describe('with narikyou', () => {
      it('builds a narikyou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'narikyou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Narikyou);
        expect(result.id).toEqual(1);
      });
    });

    describe('with narikei', () => {
      it('builds a narikei', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'narikei'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Narikei);
        expect(result.id).toEqual(1);
      });
    });

    describe('with narigin', () => {
      it('builds a narigin', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'narigin'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Narigin);
        expect(result.id).toEqual(1);
      });
    });

    describe('with ryuuma', () => {
      it('builds a ryuuma', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'ryuuma'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Ryuuma);
        expect(result.id).toEqual(1);
      });
    });

    describe('with ryuuou', () => {
      it('builds a ryuuou', () => {
        let pieceFactory = new PieceFactory({id: 1, player_number: 1, type: 'ryuuou'});
        let result = pieceFactory.build;
        expect(result.constructor).toBe(Ryuuou);
        expect(result.id).toEqual(1);
      });
    });
  });
});
