const router = require('express').Router();
const User = require('../db').model('user');
const Profile = require('../db').model('profile')
module.exports = router;

router.get('/profile/:profileId', (req, res, next) => {
  // res.status(200).send(+req.params.profileId)
  // console.log('id', req.params.id)
  console.log('route hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit hereroute hit here')
  return Profile.findOne({
    where: {
      id: req.params.profileId
    }
  })
  .then(foundProfile => {
    console.log('here is the profile i am stubbornlyt not sending', foundProfile);
    // res.send(foundProfile)
    res.json(foundProfile)
  })
  .catch(function(error){
    console.error(error)
  })
    // console.log('found profile herlekwra;lkdfjaslkdfja;ldkfja;lsdf', foundProfile)
  //   return res.json(foundProfile);
  //   // res.json({dog: 'whatup'})
  // })
})



router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});


router.post('/newUser', (req, res, next) => {
  User.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(next);
});

router.get('/allProfiles', (req, res, next) => {
  console.log('getting profiles')
  Profile.findAll()
  .then(allProfiles => res.json(allProfiles))
  .catch(next)
})
