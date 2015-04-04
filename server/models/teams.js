var Sequelize = require('sequelize');

var db = require('../db.js');

var Teams = db.define('Teams', {
  SDId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = Teams;