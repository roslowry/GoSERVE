const faker = require('faker')

let sampleInitiatives = {
  environment: [
    {name: 'Creek Cleanup', img: "https://www.commondreams.org/views/2012/01/23/clean-water-safeguards-headed-down-drain"},
    {name: 'Walk for Science', img: "http://www.dw.com/en/opinions-divided-on-march-for-science-in-the-us/a-38511917#"},
    {name: 'RecycleMania', img: "https://cdn20.patchcdn.com/users/22910461/20170509/091600/styles/T600x450/public/article_images/recycle_logo_copy.gif"},
    {name: 'Food Waste Reduction Initiative', img: "http://www.montgomeryparks.org/uploads/2017/03/Gateway-Garden-Planting-2016_3.jpg"},
    {name: 'Conservation Initiative', img: "http://www.accafrica-us.org/wp-content/uploads/bfi_thumb/Kenya_Tanzania_Borderlands_Conservation_Initiative31-n8kvws2ejz3820cghgfi3ovd4tst8q3ie0jndxfd1o.jpg"},
    {name: 'Wetland Restoration Day', img: "http://141.232.10.32/images/Biscayne%20Bay.jpg"}],

}

let sampleAreas = {
  losAngeles: ['Calabasas', 'Playa del Rey', 'Thousand Oaks', 'Ventura', 'Santa Barbara'],
  newYork: ['Bronx', 'Hoboken', 'Jersey City', 'Yonkers', 'Queens'],
  chicago: ['Peoria', 'Muenster', 'Buffalo Grove', 'Wheaton', 'Elmhurst'],
  portland: ['Lake Oswego', 'West Linn', 'Happy Valley', 'Sherwood', 'Clackamas'],
  sanFran: ['Berkeley', 'Oakland', 'Mill Valley', 'Sausalito', 'Pleasanton']
}



function generateNearbyLocation(majorCityName, idx){
  let randomIdx = Math.floor(Math.random()*5)
  let condensedName, state;
  if (majorCityName.toLowerCase() === 'los angeles') {
    condensedName = 'losAngeles';
    state = "CA"
  }
  if (majorCityName.toLowerCase() === 'san francisco') {
    condensedName = 'sanFran';
    state = "CA";
  }
  if (majorCityName.toLowerCase() === 'new york') {
    condensedName = 'newYork';
    state = "NY"
  }
  if (majorCityName.toLowerCase() === 'chicago') {
    condensedName = 'chicago';
    state = "IL"
  }
  if (majorCityName.toLowerCase() === 'portland') {
    condensedName = 'portland';
    state = "OR"
  }
  return [sampleAreas[condensedName][randomIdx], state]
}

function generateEventAndPhoto(sector, suburb, orgName, locale) {
  let randomIdx = Math.floor(Math.random()*3);
  let eventTypes = sampleInitiatives[sector.toLowerCase()];
  let eventIdx = Math.floor(Math.random()*eventTypes.length);
  let initiative = eventTypes[eventIdx].name;
  let photo = eventTypes[eventIdx].img;
  let eventName;
  if (randomIdx === 0) eventName = orgName + ' - ' + initiative;
  if (randomIdx === 1) eventName = suburb + ' ' + initiative;
  if (randomIdx === 2) eventName = locale + ' ' + initiative;
  return [eventName, photo]
}

function generateInitiative(locale, orgName, sector) {
  let nearbyLocation = generateNearbyLocation(locale);
  let suburb = nearbyLocation[0];
  let state = nearbyLocation[1];
  let eventAddress = `${faker.address.streetAddress()}\n${locale}, ${state} ${faker.address.zipCode()}`;
  let eventNameAndPhoto = generateEventAndPhoto(sector, suburb, orgName, locale);
  let eventName = eventNameAndPhoto[0];
  let eventPhoto = eventNameAndPhoto[1];
  let initiativetoReturn =
    {
      title: eventName,
      description: faker.lorem.paragraph(),
      address: eventAddress,
      photoUrl: eventPhoto,
      eventDate: faker.date.future(),
      sector: sector
    };
    console.log('initiativetoReturn', initiativetoReturn)
}

generateInitiative("New York", "Donkey Society", "Environment")
