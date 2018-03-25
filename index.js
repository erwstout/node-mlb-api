/**
 * Node MLB API
 * Author: Eric Stout <https://ericwstout.com>
 * Description: A Node wrapper for the new MLB Stats API.
 * Version: 0.0.1
 * License: MIT
 */

const request = require('request');

// api endpoint
const apiURL = `http://statsapi.mlb.com:80/api/v1/`;
const apiURL11 = `http://statsapi.mlb.com:80/api/v1.1/`;

// Get Current Year
const currentYear = new Date().getFullYear();

/**
 * Get a list of games. If no game date is passed (MM/DD/YYYY), gets the current day
 */
 const getGames = function(gameDate = '') {
   return new Promise( (resolve, reject) => {
     request({url: apiURL+'schedule?sportId=1'+'&date='+gameDate, json: true}, (error, response, body) => {
       if( error ) {
         resolve(error);
       } else {
         resolve(body);
       }
     })
   })
 }

/**
 * Get a list of data about teams
 * Accepts argument for singleTeamId to only return information from one team
 * Possible TODO: Allow to get multiple teams, but not all? Use case??
 * Possible TODO: Add team abbrev for easy call? `getTeams('CLE')`
 */
const getTeams = function(singleTeamId = '') {
  return new Promise((resolve, reject) => {
    request({url: apiURL+`teams?sportId=1&teamId=${singleTeamId}`, json: true}, (error, response, body) => {
      if( error ) {
        resolve(error)
      } else {
        resolve(body)
      }
    })
  })
}

/**
 * Get Single Game Feed
 */
const getGameFeed = function(gameId) {
  return new Promise((resolve, reject) => {
    request({url: apiURL11+`game/${gameId}/feed/live`, json: true}, (error, response, body) => {
      if( error ) {
        resolve(error)
      } else {
        resolve(body)
      }
    })
  })
}

/**
 * Get Regular Season Standings
 * Accepts League Parameter (AL/NL), and year (YYYY)
 * If no year, return current year.
 */
const getStandings = function(league, year) {
  return new Promise((resolve, reject) => {
    let leagueId = '';

    if( league === 'AL' ) {
      leagueId = '103';
    } else if ( league === 'NL' ) {
      leagueId = '104';
    } else if( league !== 'AL' || league !== 'NL' ) {
      return console.error('Please enter a league. Accepted: AL / NL')
    }

    request({url: `${apiURL}standings?leagueId=${leagueId}&season=${year ? year : currentYear}`, json: true}, (error, response, body) => {
      if( error ) {
        resolve(error)
      } else {
        resolve(body)
      }
    })
  })
}

/**
  * Get Game Linescore
  * Accepts required argument of gamePk id
**/
const getLinescore = function(gameId) {
  return new Promise((resolve, reject) => {
    request({url: apiURL+`game/${gameId}/linescore`, json: true}, (error, response, body) => {
      if( error ) {
        resolve(error)
      } else {
        resolve(body)
      }
    })
  })
}

/**
  * Get Game Boxscore
  * Accepts required argument of gamePk id
**/
const getBoxscore = function(gameId) {
  return new Promise((resolve, reject) => {
    request({url: apiURL+`game/${gameId}/boxscore`, json: true}, (error, response, body) => {
      if( error ) {
        resolve(error)
      } else {
        resolve(body)
      }
    })
  })
}

/**
  * Get Color Feed
  * Accepts required argument of gamePk id
  * Warning: This payload can get very large. See MLB API Documentation for DiffPatch information
**/
const getColorFeed = function(gameId) {
  return new Promise((resolve, reject) => {
    request({url: apiURL+`game/${gameId}/feed/color`, json: true}, (error, response, body) => {
      if( error ) {
        resolve(error)
      } else {
        resolve(body)
      }
    })
  })
}

module.exports = {
  getGames,
  getTeams,
  getGameFeed,
  getStandings,
  getLinescore,
  getBoxscore,
  getColorFeed
}
