var Sequelize = require('sequelize');

var dbName = 'NBA2014';
var dbUser = 'statman';
var dbPassword = process.env.DB_PASS;

var db = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
  host: process.env.SQL_HOST || 'localhost',
  port: process.env.SQL_PORT || 3306
});

module.exports = db;