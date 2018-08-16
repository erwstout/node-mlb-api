/**
 * Get Single Game Feed
 */

import API_URL_11 from "./constants";
const request = require("request");

const getGameFeed = function(gameId) {
  return new Promise((resolve, reject) => {
    request(
      { url: API_URL_11 + `game/${gameId}/feed/live`, json: true },
      (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
};

export default getGameFeed;
