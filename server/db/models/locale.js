const Sequelize = require('sequelize')
const db = require('../db');

module.exports = db.define('locale', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING
  },
  photoUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})



/*

Future functionality:

Would include a zip-code


*/
