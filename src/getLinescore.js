// @flow

/**
 * Get Game Linescore
 * Accepts required argument of gamePk id
 */

const constants = require("./constants");
const request = require("request");

const { API_URL } = constants;

const getLinescore = (gameId: number) => {
  return new Promise((resolve: Function, reject: Function) => {
    request(
      { url: API_URL + `game/${gameId}/linescore`, json: true },
      (error: Object, response: Object, body: Object) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
};

module.exports = getLinescore;
