const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/volunteer_engage', {
    logging: false
  }
);
module.exports = db;
