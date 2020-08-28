import { exists } from './utils'
import Fuhyou from './fuhyou'
import Kakugyou from './kakugyou'
import Hisha from './hisha'
import Kyousha from './kyousha'
import Keima from './keima'
import Ginshou from './ginshou'

import Tokin from './tokin'
import Ryuuma from './ryuuma'
import Ryuuou from './ryuuou'
import Narikyou from './narikyou'
import Narikei from './narikei'
import Narigin from './narigin'

const PROMOTIONS = [ 
  { from: Fuhyou, to: Tokin },
  { from: Kakugyou, to: Ryuuma },
  { from: Hisha, to: Ryuuou },
  { from: Kyousha, to: Narikyou },
  { from: Keima, to: Narikei },
  { from: Ginshou, to: Narigin }
];

class PromotionFactory {
  constructor(piece) {
    this.piece = piece;
  }

  get promotable() {
    return exists(this._promotedKlass(this.piece.constructor));
  }

  get demotable() {
    return exists(this._demotedKlass(this.piece.constructor));
  }

  promote() {
    let promotedKlass = this._promotedKlass(this.piece.constructor);
    if (exists(promotedKlass)) {
      return new promotedKlass({id: this.piece.id, player_number: this.piece.playerNumber}); 
    } else {
      throw 'Piece cannot be promoted';
    }
  }

  demote() {
    let demotedKlass = this._demotedKlass(this.piece.constructor);
    if (exists(demotedKlass)) {
      return new demotedKlass({id: this.piece.id, player_number: this.piece.playerNumber}); 
    } else {
      throw 'Piece cannot be promoted';
    }
  }

  _promotedKlass(klass) {
    let mapping = PROMOTIONS.filter((p) => { return p.from === klass; })[0];
    if (exists(mapping)) {
      return mapping.to;
    } else {
      return null;
    }
  }

  _demotedKlass(klass) {
    let mapping = PROMOTIONS.filter((p) => { return p.to === klass; })[0];
    if (exists(mapping)) {
      return mapping.from;
    } else {
      return null;
    }
  }
}

export default PromotionFactory
