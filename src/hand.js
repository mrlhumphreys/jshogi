import { exists } from './utils'
import PieceFactory from './piece_factory'
import PromotionFactory from './promotion_factory'

/** The players hand */
class Hand {
  /**
   * Create a hand.
   * @param {Object} args - The properties of a hand.
   * @param {number} args.player_number - The number of the player.
   * @param {Object[]} args.pieces - The pieces in the hand.
   */
  constructor(args) {
    /** @member {number} */
    this.playerNumber = args.player_number;

    /** @member {Pieces} */
    this.pieces = args.pieces.map(function(p) {
      let pieceFactory = new PieceFactory(p);
      return pieceFactory.build;
    });
  }

  get asJson() {
    return {
      player_number: this.playerNumber,
      pieces: this.pieces.map(function(p) { return p.asJson; }) 
    };
  }

  hasPiece(id) {
    let piece = this.findById(id);
    return exists(piece);
  }

  findById(id) {
    return this.pieces.find(function(p) { return p.id === id; });
  }

  get selectedPiece() {
    return this.pieces.find(function(p) { return p.selected; });
  }

  pushPiece(piece) {
    let factory = new PromotionFactory(piece);
    let demotedPiece = (factory.demotable ? factory.demote() : piece);
    demotedPiece.switchPlayer();
    this.pieces.push(demotedPiece);
  }

  popPiece(id) {
    let piece = this.pieces.find(function(p) { return p.id === id; });

    if (exists(piece)) {
      let index = this.pieces.findIndex(function(p) { return p.id === id; });
      this.pieces.splice(index, 1);
      return piece;
    } else {
      return null;
    }
  }

  selectPiece(pieceId) {
    let piece = this.findById(pieceId);
    if (exists(piece)) {
      return piece.select();
    } else {
      return false;
    }
  }

  deselectPiece(pieceId) {
    let piece = this.findById(pieceId);
    if (exists(piece)) {
      return piece.deselect();
    } else {
      return false;
    }
  }
}

export default Hand
