const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = user.Model.generateSalt();
    user.password = user.Model.encryptPassword(user.password, user.salt);
  }
};

module.exports = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.ENUM('male', 'female')
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
  },
  searchable: {
    type: Sequelize.BOOLEAN
  }
},
  {
  instanceMethods: {
    correctPassword (candidatePwd) {
      return this.Model.encryptPassword(candidatePwd, this.salt) === this.password;
    }
  },
  classMethods: {
    generateSalt () {
      return crypto.randomBytes(16).toString('base64');
    },
    encryptPassword (plainText, salt) {
      return crypto.createHash('sha1').update(plainText).update(salt).digest('hex');
    }
  },
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
});




/* Notes...

// A first-name, last-name feature may be ideal...
//

Questions ***


How does the get method work (yes, it's similar functionaly same as an options-based getter-method) in the schema definition?


*/
