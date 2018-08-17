/**
 * Get a list of games. If no game date is passed (MM/DD/YYYY), gets the current day
 */

const constants = require("./constants");
const request = require("request");

const getGames = function(gameDate = "") {
  return new Promise((resolve, reject) => {
    request(
      { url: API_URL + "schedule?sportId=1" + "&date=" + gameDate, json: true },
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

export default getGames;
