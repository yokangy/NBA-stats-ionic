var db = require('../db.js');
var Sequelize = require('sequelize');

module.exports.Players = db.define('Players', {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  fullName: Sequelize.STRING,
  primaryPosition: Sequelize.STRING
});

module.exports.PlayerGameLogs = db.define('playerGameLog', {
  PlayerId: Sequelize.INTEGER,
  minutes: Sequelize.STRING,
  fieldGoalsMade: Sequelize.INTEGER,
  fieldGoalsAtt: Sequelize.INTEGER,
  fieldGoalPct: Sequelize.FLOAT,
  threePointsMade: Sequelize.INTEGER,
  threePointAtt: Sequelize.INTEGER,
  threePointPct: Sequelize.FLOAT,
  twoPointsMade: Sequelize.INTEGER,
  twoPointsAtt: Sequelize.INTEGER,
  twoPointsPct: Sequelize.FLOAT,
  blockedAtt: Sequelize.INTEGER,
  freeThrowsMade: Sequelize.INTEGER,
  freeThrowsAtt: Sequelize.INTEGER,
  freeThrowsPct: Sequelize.FLOAT,
  offensiveRebounds: Sequelize.INTEGER,
  defensiveRebounds: Sequelize.INTEGER,
  rebounds: Sequelize.INTEGER,
  assists: Sequelize.INTEGER,
  turnovers: Sequelize.INTEGER,
  steals: Sequelize.INTEGER,
  blocks: Sequelize.INTEGER,
  assistsTurnoverRatio: Sequelize.FLOAT,
  personalFouls: Sequelize.INTEGER,
  technicalFouls: Sequelize.INTEGER,
  flagrantFouls: Sequelize.INTEGER,
  plusMinus: Sequelize.INTEGER,
  points: Sequelize.INTEGER,
  fanDuelGameScore: Sequelize.FLOAT,
  draftKingsGameScore: Sequelize.FLOAT,
  played: Sequelize.BOOLEAN,
  active: Sequelize.BOOLEAN,
  starter: Sequelize.BOOLEAN
});

module.exports.PlayerAvgStats = db.define('playerAvgStats', {
  PlayerId: Sequelize.INTEGER,
  fullName: Sequelize.STRING,
  seasonAvgPoints: Sequelize.FLOAT,
  seasonAvgThreePointsMade: Sequelize.FLOAT,
  seasonAvgRebounds: Sequelize.FLOAT,
  seasonAvgAssists: Sequelize.FLOAT,
  seasonAvgSteals: Sequelize.FLOAT,
  seasonAvgBlocks: Sequelize.FLOAT,
  seasonAvgTurnovers: Sequelize.FLOAT,
  seasonAvgFanDuelScore: Sequelize.FLOAT,
  seasonAvgDraftKingsScore: Sequelize.FLOAT,
  tenDayAvgPoints: Sequelize.FLOAT,
  tenDayAvgThreePointsMade: Sequelize.FLOAT,
  tenDayAvgRebounds: Sequelize.FLOAT,
  tenDayAvgAssists: Sequelize.FLOAT,
  tenDayAvgSteals: Sequelize.FLOAT,
  tenDayAvgBlocks: Sequelize.FLOAT,
  tenDayAvgTurnovers: Sequelize.FLOAT,
  tenDayAvgFanDuelScore: Sequelize.FLOAT,
  tenDayAvgDraftKingsScore: Sequelize.FLOAT,
  tenDayStdDevPoints: Sequelize.FLOAT,
  tenDayStdDevThreePointsMade: Sequelize.FLOAT,
  tenDayStdDevRebounds: Sequelize.FLOAT,
  tenDayStdDevAssists: Sequelize.FLOAT,
  tenDayStdDevSteals: Sequelize.FLOAT,
  tenDayStdDevBlocks: Sequelize.FLOAT,
  tenDayStdDevTurnovers: Sequelize.FLOAT,
  tenDayStdDevFanDuelScore: Sequelize.FLOAT,
  tenDayStdDevDraftKingsScore: Sequelize.FLOAT
});
