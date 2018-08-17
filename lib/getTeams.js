//      

/**
 * Get a list of data about teams
 * Accepts argument for singleTeamId to only return information from one team
 * Possible TODO: Allow to get multiple teams, but not all? Use case??
 * Possible TODO: Add team abbrev for easy call? `getTeams('CLE')`
 */

const { API_URL } = require("./constants");
const request = require("request");

const getTeams = (singleTeamId         = "") => {
  return new Promise((resolve          , reject          ) => {
    request(
      { url: API_URL + `teams?sportId=1&teamId=${singleTeamId}`, json: true },
      (error        , response        , body        ) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
};

module.exports = getTeams;
