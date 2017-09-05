const Promise = require('bluebird');
const db = require('./server/db');
const User = require('./server/db/models').User;
const Initiative = require('./server/db/models').Initiative;
const Profile = require('./server/db/models').Profile;
const Locale = require('./server/db/models').Locale;
const Opportunity = require('./server/db/models').Opportunity;
const Organization = require('./server/db/models').Organization;
const createUser = require('./seedUtils').createUser
const createPhoto = require('./seedUtils').createPhoto;
const generateInitiative = require('./seedUtils').generateInitiative
const organizations = require('./orgUtils');
const createProfile = require('./seedUtils').createProfile
const _ = require('underscore');
const createName = require('./nameUtils').createFullName;
const createLastName = require('./nameUtils').createLastName;
const femaleNames =
require('./nameUtils').femaleNames;
const maleNames = require('./nameUtils').maleNames;
// const cats = require('./server/db/models').cats;

const amountOfUsers = 200;


function getCollectionOfUsers(n) {
  let users = [];
  while (n) {
    let newUser = createUser()
    users.push(newUser)
    n -=1
  }
  return users;
}


let newUsers = getCollectionOfUsers(600)

// console.log('newUsers', newUsers)

let data = {
  locale: [
    {city: 'Los Angeles', photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/LA_Skyline_Mountains2.jpg"},
    {city: 'Chicago', photoUrl: "http://www.germany.info/contentblob/4434560/Startseitenteaser/5051520/Chicago_Bean.jpg"},
    {city: 'San Francisco', photoUrl: "http://kaprizhardwoodfloors.com/wp-content/uploads/2015/12/san-francisco.jpg"},
    {city: 'New York', photoUrl: "https://1.cdnkic.com/sites/default/files/styles/380x255/public/desti-newyork-tds-03.jpg?itok=jRo2m060"},
    {city: 'Portland', photoUrl: "https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178299/Portland-186874.jpg" }
  ],
  user: newUsers,
  organization: organizations
};


// console.log(' the data is.....', data)

let usersArray, localesArray, orgsArray;

function assignLocation () {
  let randomIdx = Math.floor(Math.random()*localeArray.length);
  let itemToReturn = localeArray[randomIdx]
  if (!itemToReturn) console.log('error error error error error in assign location');
  return itemToReturn
};

function assignMultipleLocations () {
  let locations = []
  let locationIds = []
  let numLocations =  Math.floor(Math.random()*localeArray.length) + 1
  while (numLocations) {
    let added = false;
    while (added === false) {
      let newLocation = assignLocation();
      if (!alreadyAdded(newLocation.id, locationIds)) {
        locations.push(newLocation)
        added = true;
      }
    }
    numLocations -= 1;
  }
  return _.unique(locations)
};

function alreadyAdded(id, locationIds){
  locationIds.forEach(function(location){
    if (location === "id") return true
  });
  return false
}


function createData() {

  db.sync({force: true})
  .then(function () {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function (name) {
      return Promise.map(data[name], function (item) {
        return db.model(name)
        .create(item);
      })
    });
  })
  .then(() => {
    return db.model('locale').findAll()
    .then(locales => {
      localeArray = locales
      console.log('1 locale array')
    })
  })
  .then(() => {
    console.log('2 users array')
    return db.model('user').findAll()
    .then(users => {
      usersArray = users
    })
  })
  .then(() => {
    console.log('3 orgs Array')
    return db.model('organization').findAll()
    .then(organizations => {
      orgsArray = organizations
    });
  })
  .then(() => {
    return db.model('user').findAll()
    .then(users => {
      let usersProfiles = []
      users.forEach(function(user){
        let gender = user.gender;
        console.log('gender,', gender);
        let name = user.name;
        console.log('name', name)
        let newProfile = createProfile(gender, name);
        // console.log('voila the new profile', newProfile)
        let profilePromise =
        db.model('profile')
        .create(newProfile)
        .then(function(returnedProfile) {
          return user.setProfile(returnedProfile)
        })
        // user.setProfile(newProfile);
        usersProfiles.push(profilePromise)
      })
      // console.log('before the promise.all', usersProfiles);
      return Promise.all(usersProfiles)
    })
  })
  .then(() => {
    console.log('4 setting user locations')
    return db.model('user').findAll()
    .then(users => {
      return Promise.map(users, function (user){
        return user.setLocale(assignLocation());
      })
    })
  })
  .then(()=> {
    console.log('5 setting organization locations')
    return db.model('organization').findAll()
    .then(foundOrgs => {
      let reservedPromises = []
      foundOrgs.forEach(function(org){
        let locations = assignMultipleLocations();
        locations.forEach(function(location){
          let newPromise = org.addLocale(location);
          reservedPromises.push(newPromise)
        })
      })
      return Promise.all(reservedPromises)
    })
  })
  .then(()=> {
    return db.model('organization').findAll(
      {
        include: [
          db.model('locale')
        ]
      }
    )
  })
  .then(orgsWithLocations => {
    let initiativesArrPromise = []
    orgsWithLocations.forEach(function(org){
      let sector = org.sector;
      let locales = org.locales;
      // console.log()
      let orgName = org.name;
      // console.log('orgName', org.name)
      let counter = 3 * locales.length;
      locales.forEach(function(locale){
        // console.log('sector', sector);
        // console.log('orgName', orgName);
        // console.log('localeName', locale.city)

        while (counter) {
          let newInitiative = generateInitiative(locale.city, orgName,  sector.toLowerCase());
          // console.log('newInitiative', newInitiative)
          let initiativePromise = db.model('initiative')
            .create(newInitiative)
            // .then(createdInitiative => {
            //   createdInitiative.setOrganization(org)
            // })
          initiativesArrPromise.push(initiativePromise);
          counter -= 1
        }
      })
    })
    // console.log('initiatives promises', initiativesArrPromise)
    return Promise.all(initiativesArrPromise)
  })

    // })

}

createData()
