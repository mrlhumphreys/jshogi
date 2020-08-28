# JShogi

A shogi game state and validation library written in Javascript.

## Installation

Install via npm:

  $ npm install @mrlhumphreys/jshogi

## Usage

ES5:

```javascript
  var Match = require('@mrlhumphreys/jshogi').Match;
```

ES6:

```javascript
  import { Match } from '@mrlhumphreys/jshogi'
```

Initialize a new match object:

```javascript 
  var match = new Match({
    id: 1,
    game_state: {
      current_player_number: 1,
      squares: [
        { 
          id: 'a8', 
          x: 0, 
          y: 0, 
          piece: {
            id: 1, 
            player_number: 1, 
            type: 'fuhyou' 
          }
        },
        ...
      ],
      hands: [
        { player_number: 1, pieces: [] },
        { player_number: 2, pieces: [] },
      ]
    },
    players: [
      { player_number: 1, name: 'aaa' },
      { player_number: 2, name: 'bbb' }
    ],
    winner: null
  });
```

Serialize match

```javascript
  match.asJson;
```

Make Move

```javascript
  playerNumber = 1;
  match.touchSquare('44', playerNumber); // select piece at 44 
  match.touchSquare('54', playerNumber); // move piece to 54 
```

Drop a piece from one in hand

```javascript
  playerNumber = 1;
  match.touchSquare(23, playerNumber); // select piece with id 23 
  match.touchSquare('54', playerNumber); // drop piece on square 54 
```

Select Piece Type to Promote

```javascript
  playerNumber = 1;
  match.touchSquare('57', playerNumber); // select piece at 57
  match.touchSquare('58', playerNumber); // move piece to 58 
  match.touchPromotionOption(true, playerNumber); // promote the moved piece 
```

Get winner

```javascript
  match.winner
```

## Development

After checkout out the repo, run `npm install` to install dependencies. Run `npm build` to transpile ES6 to ES5 into the lib directory. Run `npm test` to run the tests.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/mrlhumphreys/jshogi. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
