// @flow

/**
 * Get Single Game Feed
 */

const constants = require("./constants");
const request = require("request");

const { API_URL_11 } = constants;

const getGameFeed = (gameId: number) => {
  return new Promise((resolve: Function, reject: Function) => {
    request(
      { url: API_URL_11 + `game/${gameId}/feed/live`, json: true },
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

module.exports = getGameFeed;
