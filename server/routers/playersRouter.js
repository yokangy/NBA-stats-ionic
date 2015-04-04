var playersController = require('../controllers/playersController.js');

module.exports = function(app){

  app.get('/', playersController.get);
  app.get('/avg/:playerId', playersController.getAvg);
  app.get('/gamelogs/:playerId', playersController.getGameLogs);

}