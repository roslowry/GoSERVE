const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/organizations', require('./organizations'))
router.use('/test', require('./test'));


router.use((req, res) => {
  res.status(404).send('Not found');
});
