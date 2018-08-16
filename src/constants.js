// api endpoint
const API_URL = `http://statsapi.mlb.com:80/api/v1/`;
const API_URL_11 = `http://statsapi.mlb.com:80/api/v1.1/`;

// Get Current Year
const CURRENT_YEAR = new Date().getFullYear();

module.exports = {
  API_URL,
  API_URL_11,
  CURRENT_YEAR
};
