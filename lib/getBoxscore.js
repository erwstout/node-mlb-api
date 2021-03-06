//      

/**
 * Get Game Boxscore
 * Accepts required argument of gamePk id
 */

const constants = require("./constants");
const request = require("request");

const { API_URL } = constants;

const getBoxscore = (gameId        ) => {
  return new Promise((resolve          , reject          ) => {
    request(
      { url: API_URL + `game/${gameId}/boxscore`, json: true },
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

module.exports = getBoxscore;
