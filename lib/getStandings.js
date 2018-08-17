//      

/**
 * Get Regular Season Standings
 * Accepts League Parameter (AL/NL), and year (YYYY)
 * If no year, return current year.
 */

const { API_URL, CURRENT_YEAR } = require("./constants");
const request = require("request");

const getStandings = (league        , year        ) => {
  return new Promise((resolve          , reject          ) => {
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
      (error        , response        , body        ) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      }
    );
  });
};

module.exports = getStandings;
