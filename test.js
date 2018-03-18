const MLBApi = require('./index.js')

MLBApi.getGames();

MLBApi.getTeams();

MLBApi.getGameFeed(533786);

MLBApi.getLinescore(533786);

MLBApi.getBoxscore(533786);

MLBApi.getStandings('AL');
