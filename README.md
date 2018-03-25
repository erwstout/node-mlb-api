# node-mlb-api
[![Build Status](https://travis-ci.org/erwstout/node-mlb-api.svg?branch=master)](https://travis-ci.org/erwstout/node-mlb-api)
[![npm version](https://badge.fury.io/js/node-mlb-api.svg)](https://badge.fury.io/js/node-mlb-api)

A Node.js wrapper for the new MLB API.

## Getting Started
Install via npm
`npm install node-mlb-api --save`

Use in your Node.js application
```js
const MLBApi = require('node-mlb-api')

const games = MLBApi.getGames()
```

## Available Functions
All functions return a promise containing the JSON response.

### `getGames()`
Get a list of games. Accepts an optional date argument as a string (MM/DD/YYYY)
to get particular date. If no argument is passed it will get the current day.

```js
MLBApi.getGames('03/03/2018')
```

### `getTeams()`
Accepts optional argument for singleTeamId to only return information from one team. Otherwise
it will return all 32 teams.

```js
MLBApi.getTeams(133); // returns Oakland Athletics - see the MLB Stats documentation for IDs
```

### `getGameFeed()`
Gets a single game's live feed. Accepts a **required** argument of the `gamePk` id.

```js
MLBApi.getGameFeed(533786) // Tigers vs. Yankees 02/23/2018
```

### `getLinescore()`
Gets a single game's linescore. Accepts a **required** argument of the `gamePk` id.

```js
MLBApi.getLinescore(533786) // Tigers vs. Yankees 02/23/2018
```

### `getBoxscore()`
Gets a single game's boxscore. Accepts a **required** argument of the `gamePk` id.

```js
MLBApi.getBoxscore(533786) // Tigers vs. Yankees 02/23/2018
```

### `getColorFeed()`
Gets a single game's color feed. Accepts a **required** argument of the `gamePk` id.
Beware, the payload for this can get very large - see the disclaiming on the [MLB Stats API](http://statsapi.mlb.com/docs/)
to learn more and how to manage the data responsibly. 

```js
MLBApi.getBoxscore(533786) // Tigers vs. Yankees 02/23/2018
```

### `getStandings()`
Gets regular season standings by League. Accepts a **required** string argument of league
(`'AL'` / `'NL'`) and an *optional* year argument (`YYYY`). The response from the API
is broken up by division.

```js
MLBApi.getStandings('NL', 2017) // 2017 NL Standings
```

## MLB Stats API
The MLB Stats API documentation can be found [here](http://statsapi.mlb.com/docs/)

**<u>NOTICE</u>:** This is **NOT** an official MLB product or affiliated with MLB in anyway.
