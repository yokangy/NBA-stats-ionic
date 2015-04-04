var playersController = require('../controllers/playersController.js');

module.exports = function(app){

  app.get('/', playersController.get);
  app.get('/avg/:player', playersController.getAvg);
  app.get('/gamelogs/:player', playersController.getGameLogs);

}