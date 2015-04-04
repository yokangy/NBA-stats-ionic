var teamsController = require('../controllers/teamsController.js');

module.exports = function(app){
  app.get('/', teamsController.get);
};