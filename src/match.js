import { buildPlayers, buildLastAction, buildNotification, winner, matchAsJson } from '@mrlhumphreys/jboardgame'
import { exists } from './utils'
import GameState from './game_state'
import Move from './move'
import Pickup from './pickup'
import Promote from './promote'

/** A Shogi match between two players */
class Match {
  /** Create a shogi match.
   * @param {Object} args - The properties of the match.
   * @param {number} args.id = The unique identifier of the match.
   * @param {Object} args.game_state - THe properties of the game state.
   * @param {Object[]} args.players - THe properties of the players of the game.
   * @param {Object} [args.current_move={}] - Details of the current move.
   * @param {Object} [args.promotion=false] - Has a promotion move just been made?
   * @param {Object} [args.last_action=null] - The last action taken. Has kind and data attributes.
   * @param {string} [args.notification] - A notification to the player.
   */
  constructor(args) {
    /** @member {number} */
    this.id = args.id;

    /** @member {GameState} */
    this.gameState = new GameState(args.game_state);

    /** @member {Player[]} */
    this.players = buildPlayers(args.players);

    /** @member {Object} */
    this.currentMove = exists(args.current_move) ? args.current_move : {};

    /** @member {boolean} */
    this.promotion = exists(args.promotion) ? args.promotion : false;

    /** @member {Object} */
    this.lastAction = buildLastAction(args.last_action);

    /** @member {string} */
    this.notification = buildNotification(this, args.notification);
  }

  /**
   * The match serialized as a series of objects.
   * @return {Object}
   */
  get asJson() {
    let baseJson = matchAsJson(this);
    let extraJson = {
      current_move: this.currentMove,
      promotion: this.promotion
    };
    return Object.assign(baseJson, extraJson);
  }

  /**
   * The winner of the match.
   * Returns null if no winner.
   * @return {(number|null)}
   */
  get winner() {
    return winner(this);
  }

  // user actions
  
  /**
   * Touch a square to select a piece or move a piece.
   * @param {string} squareId - The id of the square.
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  touchSquare(squareId, playerNumber) {
    let selectedSquare = this.gameState.selectedSquare;
    let selectedPiece = this.gameState.selectedPieceInHand;

    this._clearLastAction();

    let move = new Move({
      touchedId: squareId,
      playerNumber: playerNumber,
      match: this
    });

    let result = move.result;

    switch (result.name) {
      case 'MoveValid':
        this.gameState.deselectPiece(selectedSquare.id);
        this.gameState.move(selectedSquare.id, squareId);
        this.gameState.passTurn();
        this._addMoveToLastAction(selectedSquare.id, squareId);
        return true;
      case 'DropValid':
        this.gameState.deselectPieceInHand(selectedPiece.id);
        this.gameState.drop(selectedPiece.id, squareId);
        this.gameState.passTurn();
        this._addDropToLastAction(selectedPiece.id, squareId);
        return true;
      case 'PieceMovedToPromotionZone':
        this.gameState.move(selectedSquare.id, squareId);
        this._setupPromotion(selectedSquare.id, squareId);
        return true;
      case 'MovePossible':
        this.gameState.selectPiece(squareId);
        return true;
      case 'MoveInvalid':
        this._notify(result.message);
        this.gameState.deselectPiece(selectedSquare.id);
        return false;
      case 'OuInCheck':
        this._notify(result.message);
        this.gameState.deselectPiece(selectedSquare.id);
        return false;
      default:
        this._notify(result.message);
        return false;
    }
  }

  /**
   * Touch the promotion option to either promote or not.
   * @param {boolean} promote - Will the piece promote? 
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  touchPromotionOption(promoteOption, playerNumber) {
    let promote = new Promote({
      playerNumber: playerNumber,
      match: this 
    });

    let result = promote.result;

    switch (result.name) {
      case 'ValidPromotion':
        this.gameState.deselectPiece(this.currentMove.toId);
        if (promoteOption) {
          this.gameState.promote(this.currentMove.toId); 
        }
        this.gameState.passTurn();
        this._addMoveToLastAction(this.currentMove.fromId, this.currentMove.toId, promoteOption);
        return true;
      default:
        this._notify(result.message);
        return false;
    }
  }

  /**
   * Touch a piece in hand.
   * @param {number} touchedId - The id of the piece.
   * @param {number} playerNumber - The number of the player.
   * @return {boolean}
   */
  touchPieceInHand(touchedId, playerNumber) {
    let pickup = new Pickup({
      playerNumber: playerNumber,
      touchedId: touchedId,
      match: this
    });

    let result = pickup.result;

    switch (result.name) {
      case 'PieceSelected':
        this.gameState.selectPieceInHand(touchedId);
        return true;
      case 'PieceAlreadySelected':
        this.gameState.deselectPieceInHand(touchedId);
        return true;
      default:
        this._notify(result.message);  
        return false;
    }
  }

  // private setters
  
  _setupPromotion(fromId, toId) {
    this.currentMove = { fromId: fromId, toId: toId };
    this.promotion = true;
  }

  _teardownPromotion() {
    this.currentMove = {};
    this.promotion = false;
  }

  _addMoveToLastAction(fromId, toId, promote=false) {
    if (promote) {
      this.lastAction = { kind: 'move', data: { fromId: fromId, toId: toId, promote: promote } };
    } else {
      this.lastAction = { kind: 'move', data: { fromId: fromId, toId: toId } };
    }
  }

  _addDropToLastAction(pieceId, squareId) {
    this.lastAction = { kind: 'drop', data: { pieceId: pieceId, squareId: squareId } };
  }

  _clearLastAction() {
    this.lastAction = null;
  }

  _notify(message) {
    this.notification = message;
  }
}

export default Match
