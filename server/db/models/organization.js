const Sequelize = require('sequelize')
const db = require('../db');
const Locale = require('./locale')

module.exports = db.define('organization', {
  name: {
    type: Sequelize.STRING
  },
  photoUrl: {
    type: Sequelize.STRING,
    // validate: {
    //   isUrl: true
    // }
  },
  sector: {
    type: Sequelize.ENUM("Environment", "Education", "Homelessness", "Global_Affairs", "Animal_Welfare", "Civic_Engagement", "Arts_and_Culture")
  },
  description: {
    type: Sequelize.TEXT
  },
  website: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
}
,
{
  defaultScope: {
    include: [ Locale ]
  }
}
)


/* Notes


- For later, it would make sense to havea  'unique' validation for various org names so that no one can put the same one in twice...
- Also, could consider having multiple sectors, as so:

sectors: {
  type: Sequelize.ARRAY(Sequelize.STRING),
  defaultValue: [],
  get: function() {
    return this.getDataValue("sectors").join(", ")
  }
},

getterMethods: {
  sectorsArray() {
    return this.getDataValue('sectors')
  }
}
*/
