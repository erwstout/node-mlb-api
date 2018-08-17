//      

/**
 * Get Color Feed
 * Accepts required argument of gamePk id
 * Warning: This payload can get very large. See MLB API Documentation for DiffPatch information
 *
 *
 */

const constants = require("./constants");
const request = require("request");

const { API_URL } = constants;

const getColorFeed = (gameId        ) => {
  return new Promise((resolve          , reject          ) => {
    request(
      { url: API_URL + `game/${gameId}/feed/color`, json: true },
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

module.exports = getColorFeed;
