/**
 * Node MLB API
 * Author: Eric Stout <https://ericwstout.com>
 * Description: This is a Node wrapper for the new MLB Stats API.
 * Version: 0.0.1
 * License: MIT
 */

const request = require('request');

// api endpoint
const apiURL = `http://statsapi.mlb.com:80/api/v1/`;
const apiURL11 = `http://statsapi.mlb.com:80/api/v1.1/`;

/**
 * Get a list of games. If no game date is passed (MM/DD/YYYY), gets the current day
 */
const getGames = function(gameDate = '') {
  request(apiURL+'schedule?sportId=1'+'&date='+gameDate, (error, response, body) => {
    console.log(`Error: ${error}`);
    console.log(body);
  })
}

/**
 * Get a list of data about teams
 * Accepts argument for singleTeamId to only return information from one team
 * Possible TODO: Allow to get multiple teams, but not all? Use case??
 */
const getTeams = function(singleTeamId = '') {
  request(apiURL+`teams?sportId=1&teamId=${singleTeamId}`, (error, response, body) => {
    console.log(`Error: ${error}`);
    console.log(body);
  })
}

/**
 * Get Single Game Feed
 */
const getGameFeed = function(gameId) {
  request(apiURL11+`game/${gameId}/feed/live`, (error, repsonse, body) => {
    console.log(body);
  })
}

module.exports = {
  getGames,
  getTeams,
  getGameFeed
}
