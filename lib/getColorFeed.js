/**
 * Get Color Feed
 * Accepts required argument of gamePk id
 * Warning: This payload can get very large. See MLB API Documentation for DiffPatch information
 *
 *
 */

import API_URL from "./constants";
const request = require("request");

const getColorFeed = function(gameId) {
  return new Promise((resolve, reject) => {
    request(
      { url: API_URL + `game/${gameId}/feed/color`, json: true },
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

export default getColorFeed;
