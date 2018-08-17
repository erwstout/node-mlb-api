// @flow

/**
 * Get a list of games. If no game date is passed (MM/DD/YYYY), gets the current day
 */

const constants = require("./constants");
const request = require("request");

const { API_URL } = constants;

const getGames = (gameDate: string = "") => {
  return new Promise((resolve: Function, reject: Function) => {
    request(
      { url: API_URL + "schedule?sportId=1" + "&date=" + gameDate, json: true },
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

module.exports = getGames;
