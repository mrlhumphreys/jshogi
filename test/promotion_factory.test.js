import PromotionFactory from '../src/promotion_factory'
import Fuhyou from '../src/pieces/fuhyou'
import Tokin from '../src/pieces/tokin'

describe('PromotionFactory', () => {
  describe('promotable', () => {
    describe('a piece that can promote', () => {
      it('must return true', () => {
        let piece = new Fuhyou({id: 1, player_number: 1, type: 'fuhyou'}); 
        let promotionFactory = new PromotionFactory(piece);
        expect(promotionFactory.promotable).toBe(true);
      });
    });

    describe('a piece that cannot promote', () => {
      it('must return false', () => {
        let piece = new Tokin({id: 1, player_number: 1, type: 'tokin'}); 
        let promotionFactory = new PromotionFactory(piece);
        expect(promotionFactory.promotable).toBe(false);
      });
    });
  });

  describe('demotable', () => {
    describe('a piece that can demote', () => {
      it('must return true', () => {
        let piece = new Tokin({id: 1, player_number: 1, type: 'tokin'}); 
        let promotionFactory = new PromotionFactory(piece);
        expect(promotionFactory.demotable).toBe(true);
      });
    });

    describe('a piece that cannot demote', () => {
      it('must return false', () => {
        let piece = new Fuhyou({id: 1, player_number: 1, type: 'fuhyou'}); 
        let promotionFactory = new PromotionFactory(piece);
        expect(promotionFactory.demotable).toBe(false);
      });
    });
  });

  describe('promote', () => {
    describe('a piece that can promote', () => {
      it('must return the promoted piece', () => {
        let piece = new Fuhyou({id: 1, player_number: 1, type: 'fuhyou'}); 
        let promotionFactory = new PromotionFactory(piece);
        let result = promotionFactory.promote();
        expect(result.constructor).toBe(Tokin);
      });
    });

    describe('a piece that cannot promote', () => {
      it('must raise error', () => {
        let piece = new Tokin({id: 1, player_number: 1, type: 'tokin'}); 
        let promotionFactory = new PromotionFactory(piece);
        expect(() => promotionFactory.promote()).toThrow('Piece cannot be promoted');
      });
    });
  });

  describe('demote', () => {
    describe('a piece that can demote', () => {
      it('must return the demoted piece', () => {
        let piece = new Tokin({id: 1, player_number: 1, type: 'tokin'}); 
        let promotionFactory = new PromotionFactory(piece);
        let result = promotionFactory.demote();
        expect(result.constructor).toBe(Fuhyou);
      });
    });

    describe('a piece that cannot demote', () => {
      it('must raise error', () => {
        let piece = new Fuhyou({id: 1, player_number: 1, type: 'fuhyou'}); 
        let promotionFactory = new PromotionFactory(piece);
        expect(() => promotionFactory.demote()).toThrow('Piece cannot be promoted');
      });
    });
  });
});
