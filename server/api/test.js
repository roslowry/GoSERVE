const express = require('express');
const router = express.Router();
const db = require('../db');
const Locale = db.model('locale');
const Opportunity = require('../db/models').Opportunity;
const Organization = require('../db/models').Organization;

router.get('/stuff', (req, res, next) => {
  db.model('organization').findAll({
    include: [Locale]
  })
  .then((foundOrgs) => {
    console.log(foundOrgs)
    res.json(foundOrgs);
  })
})

module.exports = router;
