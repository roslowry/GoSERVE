const Sequelize = require('sequelize')
const db = require('../db');

module.exports = db.define('initiative', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.STRING
  },
  photoUrl: {
    type: Sequelize.STRING,
  },
  eventDate: {
    type: Sequelize.DATE
  }
  // ,
  // sectors: {
  //   type: Sequelize.ARRAY(Sequelize.STRING),
  //   defaultValue: [],
  //   get: function() {
  //     return this.getDataValue("sectors").join(", ")
  //   }
  // }

}, {
  getterMethods: {
    // sectorsArray() {
    //   return this.getDataValue('sectors')
    // },
    upcoming() {
      let bool = Date.now() > this.eventDate
      this.setDataValue('upcoming', bool)
    }
  }
})


/*

For later:

For the photo, it would be great if there could be a before validate hook that would set the photo value to null if there were no photo included... As in, if you include something,

Would be great to include skills-sought

Would be great to include a date range in case there were multiple dates...

Would be great to include a setter method to determine whether the event had passed or not.....

Could include front-end validations for address

*/
