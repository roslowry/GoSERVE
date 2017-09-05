const router = require('express').Router();
const Organization = require('../db').model('organization');

router.get('/', (req, res, next) => {
  Organization.findAll()
  .then(foundOrgs => {
    res.json(foundOrgs);
    // console.log('i arrived here');
    // console.log('foundOrgs', foundOrgs)
  })
  .catch(next)
})


// router.get('/', (req, res, next) => {
//   User.findAll()
//     .then(users => res.json(users))
//     .catch(next);
// });










module.exports = router;
