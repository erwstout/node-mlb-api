/**
 * Get Regular Season Standings
 * Accepts League Parameter (AL/NL), and year (YYYY)
 * If no year, return current year.
 */

import { API_URL, CURRENT_YEAR } from "./constants";
const request = require("request");

const getStandings = function(league, year) {
  return new Promise((resolve, reject) => {
    let leagueId = "";

    if (league === "AL") {
      leagueId = "103";
    } else if (league === "NL") {
      leagueId = "104";
    } else if (league !== "AL" || league !== "NL") {
      return console.error("Please enter a league. Accepted: AL / NL");
    }

    request(
      {
        url: `${API_URL}standings?leagueId=${leagueId}&season=${
          year ? year : CURRENT_YEAR
        }`,
        json: true
      },
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

export default getStandings;
