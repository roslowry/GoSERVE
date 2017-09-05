const Sequelize = require('sequelize')
const db = require('../db');

module.exports = db.define('profile', {
  name: {
    type: Sequelize.STRING
  },
  photoUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  }
  ,
  serviceInterests: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
    // get: function() {
    //   return this.getDataValue("volunteerInterests").join(", ")
    // }
  },
  sectorInterests: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
    // get: function() {
    //   return this.getDataValue("sectorInterests").join(", ")
    // }
  },
  skills: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: []
  //   get: function(){
  //     return this.getDataValue("skills").join(", ")
  //   }
  }
}
,
{
    getterMethods: {
      allSkills: function () {
        let vals = this.getDataValue('skills').join(', ');
        return vals
      },
      allSectorInterests: function () {
        let vals = this.getDataValue('sectorInterests').join(', ');
        return vals
      },
      allServiceInterests: function () {
        let vals = this.getDataValue('serviceInterests').join(', ');
        return vals
      }
    }
  })

        // let oneThroughLast = vals.slice(0, skills.length - 1);
      //   let lastOne = vals[vals.length - 1];
      //   let newVals = vals.join(', ')
      //   let valsToReturn = newVals + ', and ' + lastOne
      //   return valsToReturn
      // },
      // allSectors() {
      //   let vals = this.getDataValue('sectorInterests');
      //   let oneThroughLast = valsToReturn.slice(0, vals.length - 1);
      //   let lastOne = vals[vals.length - 1];
      //   let newVals = vals.join(', ')
      //   let valsToReturn = newVals + ', and ' + lastOne
      //   return valsToReturn
      // },
      // allServices() {
      //   let vals = this.getDataValue('serviceInterests')
      //   let oneThroughLast = vals.slice(0, vals.length - 1);
      //   let lastOne = vals[vals.length - 1];
      //   let newVals = vals.join(', ')
      //   let valsToReturn = newVals + ', and ' + lastOne
      //   return valsToReturn
      // }
    // }
// }
// )

/* Notes

- The location could technically be a Sequelize.ENUM. I'm still thinking of whether it makes sense for this to be an enum, requiring me to select a few potential values for input, or whether the user would only be presented certain options to select (which would be based on the various locations that exist)

*/
