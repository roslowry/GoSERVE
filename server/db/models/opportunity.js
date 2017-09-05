const Sequelize = require('sequelize')
const db = require('../db');

module.exports = db.define('opportunity', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  task: {
    type: Sequelize.TEXT
  },
  skillsNeeded: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
    get: function() {
      return this.getDataValue("skillsNeeded").join(", ")
    }
  },
  numVolunteers: {
    type: Sequelize.INTEGER
  }
}, {
  getterMethods: {
    skillsArray() {
      return this.getDataValue('skillsNeeded')
    }
  }
})
