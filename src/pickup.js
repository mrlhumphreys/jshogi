import { exists } from './utils'

/** A pickup action */
class Pickup {
  /**
   * Create a pickup action
   * @param {Object} args - The properties of the pickup action.
   * @param {number} args.playerNumber - The number of the player making a pickup.
   * @param {string|number} args.touchedId - The id of the piece being pickupped or the square being pickupped on.
   * @param {Match} args.match - The match being played.
   */
  constructor(args) {
    /** @member {number} */
    this.playerNumber = args.playerNumber;

    /** @member {number} */
    this.touchedId = args.touchedId;

    /** @member {Match} */
    this.match = args.match;
  }

  /**
   * The result of the pickup.
   * @return {Object} - A result with name and message.
   */
  get result() {
    if (exists(this.match.winner)) {
      return { name: 'GameOver', message: 'Game is over.' };
    }

    if (!this.match.gameState.playersTurn(this.playerNumber)) {
      return { name: 'NotPlayersTurn', message: 'It is not your turn.' };
    }

    if (exists(this._selectedPieceInHand)) {
      return { name: 'PieceAlreadySelected', message: '' };
    } else if (this._pieceNotFound) {
      return { name: 'PieceNotFound', message: 'Piece does not exist.' }
    } else {
      return { name: 'PieceSelected', message: '' };
    }
  }

  get _selectedPieceInHand() {
    return this.match.gameState.selectedPieceInHand;
  }

  get _pieceNotFound() {
    return !exists(this.match.gameState.findPieceInHand(this.touchedId));
  }
}

export default Pickup
