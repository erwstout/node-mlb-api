const MLBApi = require("./lib/index.js");

MLBApi.getGames();

MLBApi.getTeams();

MLBApi.getGameFeed(533786);

MLBApi.getLinescore(533786);

MLBApi.getBoxscore(533786).then(result => console.log(result));

MLBApi.getStandings("AL");
