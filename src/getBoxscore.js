/**
 * Get Game Boxscore
 * Accepts required argument of gamePk id
 */

import API_URL from "./constants";
const request = require("request");

const getBoxscore = function(gameId) {
  return new Promise((resolve, reject) => {
    request(
      { url: API_URL + `game/${gameId}/boxscore`, json: true },
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

export default getBoxscore;
