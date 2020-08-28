import { exists } from './utils'

/** A promote action */
class Promote {
  /**
   * Create a promote action
   * @param {Object} args - The properties of the promote action.
   * @param {number} args.playerNumber - The number of the player promoting.
   * @param {Match} args.match - The match being played.
   */
  constructor(args) {
    /** @member {number} */
    this.playerNumber = args.playerNumber;

    /** @member {Match} */
    this.match = args.match;
  }

  /**
   * The result of the promotion.
   * @return {Object} - A result with name and message.
   */
  get result() {
    if (exists(this.match.winner)) {
      return { name: 'GameOver', message: 'Game is over.' };
    }

    if (!this.match.gameState.playersTurn(this.playerNumber)) {
      return { name: 'NotPlayersTurn', message: 'It is not your turn.' };
    }

    if (!this.match.promotion) {
      return { name: 'NoPieceToPromote', message: 'There is no piece to promote.' };
    }

    return { name: 'ValidPromotion', message: '' }; 
  }
}

export default Promote
