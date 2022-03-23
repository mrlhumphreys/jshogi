import { exists } from './utils'
import Fuhyou from './pieces/fuhyou'
import Kakugyou from './pieces/kakugyou'
import Hisha from './pieces/hisha'
import Kyousha from './pieces/kyousha'
import Keima from './pieces/keima'
import Ginshou from './pieces/ginshou'
import Kinshou from './pieces/kinshou'
import Oushou from './pieces/oushou'
import Gyokushou from './pieces/gyokushou'
import Tokin from './pieces/tokin'
import Narikyou from './pieces/narikyou'
import Narikei from './pieces/narikei'
import Narigin from './pieces/narigin'
import Ryuuma from './pieces/ryuuma'
import Ryuuou from './pieces/ryuuou'

/** A piece generator */
class PieceFactory {
  /**
   * Create a Piece Factory
   * @params {Object} args - The properties of the piece.
   * @param {String} args.type - The type of the piece.
   */
  constructor(args) {
    this.args = args;
  }

  /**
   * Build a piece based on the args type.
   * @return {(Piece|null)}
   */
  get build() {
    if (exists(this.args)) {
      if (this.args.constructorName === 'Piece') {
        return this.args;
      } else {
        switch (this.args.type) {
          case 'fuhyou':
            return new Fuhyou(this.args);
          case 'kakugyou':
            return new Kakugyou(this.args);
          case 'hisha':
            return new Hisha(this.args);
          case 'kyousha':
            return new Kyousha(this.args);
          case 'keima':
            return new Keima(this.args);
          case 'ginshou':
            return new Ginshou(this.args);
          case 'kinshou':
            return new Kinshou(this.args);
          case 'oushou':
            return new Oushou(this.args);
          case 'gyokushou':
            return new Gyokushou(this.args);
          case 'tokin':
            return new Tokin(this.args);
          case 'narikyou':
            return new Narikyou(this.args);
          case 'narikei':
            return new Narikei(this.args);
          case 'narigin':
            return new Narigin(this.args);
          case 'ryuuma':
            return new Ryuuma(this.args);
          case 'ryuuou':
            return new Ryuuou(this.args);
          default:
            return null;
        }
      }
    } else {
      return null;
    }
  }
}

export default PieceFactory
