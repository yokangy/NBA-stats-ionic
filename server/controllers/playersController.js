var Players = require('../models/players.js');

module.exports = {
  get: function(req, res){
    Players.Players.findAll().then(function(players){
      res.status(200).send(players);
    });
  },
  getAvg: function(req, res){
    Players.PlayerAvgStats.findOne({where: {PlayerId: req.params.playerId}}).then(function(stats){
      res.status(200).send(stats);
    })
  },
  getGameLogs: function(req, res){
    Players.PlayerGameLogs.findAll({
      where: {PlayerId: req.params.playerId},
      order: 'id'
    }).then(function(gamelogs){
      res.status(200).send(gamelogs);
    });
  }
}