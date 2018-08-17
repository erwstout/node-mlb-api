/**
 * Get Game Linescore
 * Accepts required argument of gamePk id
 */

const constants = require("./constants");
const request = require("request");

const getLinescore = function(gameId) {
  return new Promise((resolve, reject) => {
    request(
      { url: API_URL + `game/${gameId}/linescore`, json: true },
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

export default getLinescore;
