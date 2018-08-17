//      

/**
 * Get Single Game Feed
 */

const constants = require("./constants");
const request = require("request");

const { API_URL_11 } = constants;

const getGameFeed = (gameId        ) => {
  return new Promise((resolve          , reject          ) => {
    request(
      { url: API_URL_11 + `game/${gameId}/feed/live`, json: true },
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

module.exports = getGameFeed;
