import { exists } from '../src/utils'
import Match from '../src/match'

const fixtureDefinitions = {
  match: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'ginshou' } },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: { id: 14, player_number: 2, type: 'fuhyou' } },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, type: 'fuhyou' } },
          { id: '77', x: 2, y: 6, piece: { id: 23, player_number: 1, type: 'fuhyou' } },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
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
      lastAction: null,
      notification: null
    }
  },
  selectedMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'ginshou' } },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: { id: 14, player_number: 2, type: 'fuhyou' } },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, type: 'fuhyou' } },
          { id: '77', x: 2, y: 6, piece: { id: 23, player_number: 1, type: 'fuhyou', selected: true } },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
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
      lastAction: null,
      notification: null
    }
  },
  moveToSelfCheckZoneMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'ginshou' } },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: null },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: { id: 14, player_number: 2, type: 'fuhyou' } },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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
          { id: '86', x: 1, y: 5, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '76', x: 2, y: 5, piece: null },
          { id: '66', x: 3, y: 5, piece: null },
          { id: '56', x: 4, y: 5, piece: null },
          { id: '46', x: 5, y: 5, piece: null },
          { id: '36', x: 6, y: 5, piece: null },
          { id: '26', x: 7, y: 5, piece: null },
          { id: '16', x: 8, y: 5, piece: null },

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, type: 'fuhyou' } },
          { id: '77', x: 2, y: 6, piece: { id: 23, player_number: 1, type: 'fuhyou', selected: true } },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
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
      lastAction: null,
      notification: null
    }
  },
  moveToPromotionZoneMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'ginshou' } },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: { id: 14, player_number: 2, type: 'fuhyou' } },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

          { id: '94', x: 0, y: 3, piece: null },
          { id: '84', x: 1, y: 3, piece: null },
          { id: '74', x: 2, y: 3, piece: { id: 23, player_number: 1, type: 'fuhyou', selected: true } },
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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, type: 'fuhyou' } },
          { id: '77', x: 2, y: 6, piece: null },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
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
      lastAction: null,
      notification: null
    }
  },
  winnerMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '81', x: 1, y: 0, piece: null },
          { id: '71', x: 2, y: 0, piece: null },
          { id: '61', x: 3, y: 0, piece: null },
          { id: '51', x: 4, y: 0, piece: null },
          { id: '41', x: 5, y: 0, piece: null },
          { id: '31', x: 6, y: 0, piece: null },
          { id: '21', x: 7, y: 0, piece: null },
          { id: '11', x: 8, y: 0, piece: null },

          { id: '92', x: 0, y: 1, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '82', x: 1, y: 1, piece: null },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: null },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: null },
          { id: '83', x: 1, y: 2, piece: null },
          { id: '73', x: 2, y: 2, piece: null },
          { id: '63', x: 3, y: 2, piece: null },
          { id: '53', x: 4, y: 2, piece: null },
          { id: '43', x: 5, y: 2, piece: null },
          { id: '33', x: 6, y: 2, piece: null },
          { id: '23', x: 7, y: 2, piece: null },
          { id: '13', x: 8, y: 2, piece: null },

          { id: '94', x: 0, y: 3, piece: null },
          { id: '84', x: 1, y: 3, piece: null },
          { id: '74', x: 2, y: 3, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
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

          { id: '97', x: 0, y: 6, piece: null },
          { id: '87', x: 1, y: 6, piece: null },
          { id: '77', x: 2, y: 6, piece: null },
          { id: '67', x: 3, y: 6, piece: null },
          { id: '57', x: 4, y: 6, piece: null },
          { id: '47', x: 5, y: 6, piece: null },
          { id: '37', x: 6, y: 6, piece: null },
          { id: '27', x: 7, y: 6, piece: null },
          { id: '17', x: 8, y: 6, piece: null },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: null },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: null },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: null },
          { id: '89', x: 1, y: 8, piece: null },
          { id: '79', x: 2, y: 8, piece: null },
          { id: '69', x: 3, y: 8, piece: null },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: null },
          { id: '39', x: 6, y: 8, piece: null },
          { id: '29', x: 7, y: 8, piece: null },
          { id: '19', x: 8, y: 8, piece: null }
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
      lastAction: null,
      notification: null
    }
  },
  promotionMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'ginshou' } },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: { id: 23, player_number: 1, type: 'fuhyou', selected: false } },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, type: 'fuhyou' } },
          { id: '77', x: 2, y: 6, piece: null },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
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
      lastAction: null,
      notification: null,
      currentMove: { fromId: '74', toId: '73' },
      promotion: true
    }
  },
  selectedPieceInHandMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: null },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: null },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: null },
          { id: '77', x: 2, y: 6, piece: { id: 23, player_number: 1, type: 'fuhyou' } },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: null },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
        ],
        hands: [
          { player_number: 1, pieces: [{ id: 14, player_number: 1, type: 'fuhyou', selected: true }] },
          { player_number: 2, pieces: [] },
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  dropFuhyuuCheckmateMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '81', x: 1, y: 0, piece: null },
          { id: '71', x: 2, y: 0, piece: null },
          { id: '61', x: 3, y: 0, piece: null },
          { id: '51', x: 4, y: 0, piece: null },
          { id: '41', x: 5, y: 0, piece: null },
          { id: '31', x: 6, y: 0, piece: null },
          { id: '21', x: 7, y: 0, piece: null },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: null },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: null },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: null },
          { id: '83', x: 1, y: 2, piece: null },
          { id: '73', x: 2, y: 2, piece: null },
          { id: '63', x: 3, y: 2, piece: null },
          { id: '53', x: 4, y: 2, piece: null },
          { id: '43', x: 5, y: 2, piece: null },
          { id: '33', x: 6, y: 2, piece: null },
          { id: '23', x: 7, y: 2, piece: null },
          { id: '13', x: 8, y: 2, piece: null },

          { id: '94', x: 0, y: 3, piece: null },
          { id: '84', x: 1, y: 3, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '74', x: 2, y: 3, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
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

          { id: '97', x: 0, y: 6, piece: null },
          { id: '87', x: 1, y: 6, piece: null },
          { id: '77', x: 2, y: 6, piece: null },
          { id: '67', x: 3, y: 6, piece: null },
          { id: '57', x: 4, y: 6, piece: null },
          { id: '47', x: 5, y: 6, piece: null },
          { id: '37', x: 6, y: 6, piece: null },
          { id: '27', x: 7, y: 6, piece: null },
          { id: '17', x: 8, y: 6, piece: null },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: null },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: null },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: null },
          { id: '89', x: 1, y: 8, piece: null },
          { id: '79', x: 2, y: 8, piece: null },
          { id: '69', x: 3, y: 8, piece: null },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: null },
          { id: '39', x: 6, y: 8, piece: null },
          { id: '29', x: 7, y: 8, piece: null },
          { id: '19', x: 8, y: 8, piece: null }
        ],
        hands: [
          { player_number: 1, pieces: [{ id: 5, player_number: 1, type: 'fuhyou', selected: true }] },
          { player_number: 2, pieces: [] },
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  dropPieceCheckmateMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '81', x: 1, y: 0, piece: null },
          { id: '71', x: 2, y: 0, piece: null },
          { id: '61', x: 3, y: 0, piece: null },
          { id: '51', x: 4, y: 0, piece: null },
          { id: '41', x: 5, y: 0, piece: null },
          { id: '31', x: 6, y: 0, piece: null },
          { id: '21', x: 7, y: 0, piece: null },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: null },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: null },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: null },
          { id: '83', x: 1, y: 2, piece: null },
          { id: '73', x: 2, y: 2, piece: null },
          { id: '63', x: 3, y: 2, piece: null },
          { id: '53', x: 4, y: 2, piece: null },
          { id: '43', x: 5, y: 2, piece: null },
          { id: '33', x: 6, y: 2, piece: null },
          { id: '23', x: 7, y: 2, piece: null },
          { id: '13', x: 8, y: 2, piece: null },

          { id: '94', x: 0, y: 3, piece: null },
          { id: '84', x: 1, y: 3, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '74', x: 2, y: 3, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
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

          { id: '97', x: 0, y: 6, piece: null },
          { id: '87', x: 1, y: 6, piece: null },
          { id: '77', x: 2, y: 6, piece: null },
          { id: '67', x: 3, y: 6, piece: null },
          { id: '57', x: 4, y: 6, piece: null },
          { id: '47', x: 5, y: 6, piece: null },
          { id: '37', x: 6, y: 6, piece: null },
          { id: '27', x: 7, y: 6, piece: null },
          { id: '17', x: 8, y: 6, piece: null },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: null },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: null },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: null },
          { id: '89', x: 1, y: 8, piece: null },
          { id: '79', x: 2, y: 8, piece: null },
          { id: '69', x: 3, y: 8, piece: null },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: null },
          { id: '39', x: 6, y: 8, piece: null },
          { id: '29', x: 7, y: 8, piece: null },
          { id: '19', x: 8, y: 8, piece: null }
        ],
        hands: [
          { player_number: 1, pieces: [{ id: 5, player_number: 1, type: 'kinshou', selected: true }] },
          { player_number: 2, pieces: [] },
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  pieceInHandMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: null },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: null },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: null },
          { id: '77', x: 2, y: 6, piece: { id: 23, player_number: 1, type: 'fuhyou' } },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
        ],
        hands: [
          { player_number: 1, pieces: [{ id: 14, player_number: 1, type: 'fuhyou', selected: false }] },
          { player_number: 2, pieces: [] },
        ]
      },
      players: [
        { player_number: 1, name: 'aaa', resigned: false },
        { player_number: 2, name: 'bbb', resigned: false }
      ],
      lastAction: null,
      notification: null
    }
  },
  promoteMatch: {
    klass: Match,
    args: {
      id: 1,
      current_move: { fromId: '74', toId: '73' },
      game_state: {
        current_player_number: 1,
        squares: [
          { id: '91', x: 0, y: 0, piece: { id: 1, player_number: 2, type: 'kyousha' } },
          { id: '81', x: 1, y: 0, piece: { id: 2, player_number: 2, type: 'keima' } },
          { id: '71', x: 2, y: 0, piece: { id: 3, player_number: 2, type: 'ginshou' } },
          { id: '61', x: 3, y: 0, piece: { id: 4, player_number: 2, type: 'kinshou' } },
          { id: '51', x: 4, y: 0, piece: { id: 5, player_number: 2, type: 'oushou' } },
          { id: '41', x: 5, y: 0, piece: { id: 6, player_number: 2, type: 'kinshou' } },
          { id: '31', x: 6, y: 0, piece: { id: 7, player_number: 2, type: 'ginshou' } },
          { id: '21', x: 7, y: 0, piece: { id: 8, player_number: 2, type: 'keima' } },
          { id: '11', x: 8, y: 0, piece: { id: 9, player_number: 2, type: 'kyousha' } },

          { id: '92', x: 0, y: 1, piece: null },
          { id: '82', x: 1, y: 1, piece: { id: 10, player_number: 2, type: 'hisha' } },
          { id: '72', x: 2, y: 1, piece: null },
          { id: '62', x: 3, y: 1, piece: null },
          { id: '52', x: 4, y: 1, piece: null },
          { id: '42', x: 5, y: 1, piece: null },
          { id: '32', x: 6, y: 1, piece: null },
          { id: '22', x: 7, y: 1, piece: { id: 11, player_number: 2, type: 'kakugyou' } },
          { id: '12', x: 8, y: 1, piece: null },

          { id: '93', x: 0, y: 2, piece: { id: 12, player_number: 2, type: 'fuhyou' } },
          { id: '83', x: 1, y: 2, piece: { id: 13, player_number: 2, type: 'fuhyou' } },
          { id: '73', x: 2, y: 2, piece: { id: 23, player_number: 1, type: 'fuhyou', selected: false } },
          { id: '63', x: 3, y: 2, piece: { id: 15, player_number: 2, type: 'fuhyou' } },
          { id: '53', x: 4, y: 2, piece: { id: 16, player_number: 2, type: 'fuhyou' } },
          { id: '43', x: 5, y: 2, piece: { id: 17, player_number: 2, type: 'fuhyou' } },
          { id: '33', x: 6, y: 2, piece: { id: 18, player_number: 2, type: 'fuhyou' } },
          { id: '23', x: 7, y: 2, piece: { id: 19, player_number: 2, type: 'fuhyou' } },
          { id: '13', x: 8, y: 2, piece: { id: 20, player_number: 2, type: 'fuhyou' } },

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

          { id: '97', x: 0, y: 6, piece: { id: 21, player_number: 1, type: 'fuhyou' } },
          { id: '87', x: 1, y: 6, piece: { id: 22, player_number: 1, type: 'fuhyou' } },
          { id: '77', x: 2, y: 6, piece: null },
          { id: '67', x: 3, y: 6, piece: { id: 24, player_number: 1, type: 'fuhyou' } },
          { id: '57', x: 4, y: 6, piece: { id: 25, player_number: 1, type: 'fuhyou' } },
          { id: '47', x: 5, y: 6, piece: { id: 26, player_number: 1, type: 'fuhyou' } },
          { id: '37', x: 6, y: 6, piece: { id: 27, player_number: 1, type: 'fuhyou' } },
          { id: '27', x: 7, y: 6, piece: { id: 28, player_number: 1, type: 'fuhyou' } },
          { id: '17', x: 8, y: 6, piece: { id: 29, player_number: 1, type: 'fuhyou' } },

          { id: '98', x: 0, y: 7, piece: null },
          { id: '88', x: 1, y: 7, piece: { id: 30, player_number: 1, type: 'kakugyou' } },
          { id: '78', x: 2, y: 7, piece: null },
          { id: '68', x: 3, y: 7, piece: null },
          { id: '58', x: 4, y: 7, piece: null },
          { id: '48', x: 5, y: 7, piece: null },
          { id: '38', x: 6, y: 7, piece: null },
          { id: '28', x: 7, y: 7, piece: { id: 31, player_number: 1, type: 'hisha' } },
          { id: '18', x: 8, y: 7, piece: null },

          { id: '99', x: 0, y: 8, piece: { id: 32, player_number: 1, type: 'kyousha' } },
          { id: '89', x: 1, y: 8, piece: { id: 33, player_number: 1, type: 'keima' } },
          { id: '79', x: 2, y: 8, piece: { id: 34, player_number: 1, type: 'ginshou' } },
          { id: '69', x: 3, y: 8, piece: { id: 35, player_number: 1, type: 'kinshou' } },
          { id: '59', x: 4, y: 8, piece: { id: 36, player_number: 1, type: 'gyokushou' } },
          { id: '49', x: 5, y: 8, piece: { id: 37, player_number: 1, type: 'kinshou' } },
          { id: '39', x: 6, y: 8, piece: { id: 38, player_number: 1, type: 'ginshou' } },
          { id: '29', x: 7, y: 8, piece: { id: 39, player_number: 1, type: 'keima' } },
          { id: '19', x: 8, y: 8, piece: { id: 40, player_number: 1, type: 'kyousha' } }
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
      lastAction: null,
      notification: null,
      promotion: true
    }
  }
};

const deepMerge = function(aObject, bObject) {
  let cObject = {};

  let aObjectKeys = [];
  let bObjectKeys = [];

  if (exists(aObject)) {
    aObjectKeys = Object.keys(aObject);
  }

  if (exists(bObject)) {
    bObjectKeys = Object.keys(bObject);
  }

  let keys = [...new Set([...aObjectKeys, ...bObjectKeys])];

  keys.forEach(function(k) {
    let aValue = undefined;
    let bValue = undefined;

    if (exists(aObject)) {
      aValue = aObject[k];
    }

    if (exists(bObject)) {
      bValue = bObject[k];
    }

    let cValue = undefined;

    if (exists(bValue)) {
      if (bValue.constructor === Object) {
        cValue = deepMerge(aValue, bValue);
      } else {
        cValue = bValue;
      }
    } else {
      cValue = aValue;
    }

    cObject[k] = cValue;
  });
  return cObject;
};

const fixtures = function(name, customArgs) {
  let definition = fixtureDefinitions[name];

  if (!exists(definition)) {
    throw new Error(`Undefined fixture: ${name}`);
  }

  let args = {};

  if (exists(customArgs)) {
    args = deepMerge(definition.args, customArgs);
  } else {
    args = Object.assign({}, definition.args);
  }

  return new definition.klass(args);
};

export default fixtures
