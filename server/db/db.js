const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/poker');

module.exports = connection;