var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app, express){

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../public'));

  var teamsRouter = express.Router();
  var playersRouter = express.Router();

  app.use('/api/teams/', teamsRouter);
  app.use('/api/players', playersRouter);

  require('./routers/teamsRouter.js')(teamsRouter);
  require('./routers/playersRouter.js')(playersRouter);

};