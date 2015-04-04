var Teams = require('../models/teams.js');

module.exports = {
  get: function(req, res){
    Teams.findAll().then(function(teams){
      res.status(200).send(teams);
    });
  }
};