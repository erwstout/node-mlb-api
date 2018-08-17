// @flow

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

const getColorFeed = (gameId: number) => {
  return new Promise((resolve: Function, reject: Function) => {
    request(
      { url: API_URL + `game/${gameId}/feed/color`, json: true },
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

module.exports = getColorFeed;
