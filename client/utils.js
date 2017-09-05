// service opportunity types:

let sampleInitiatives = {
  environment: [
    {name: 'Creek Cleanup', img: "https://www.commondreams.org/views/2012/01/23/clean-water-safeguards-headed-down-drain"},
    {name: 'Walk for Science', img: "http://www.dw.com/en/opinions-divided-on-march-for-science-in-the-us/a-38511917#"},
    {name: 'RecycleMania', img: "https://cdn20.patchcdn.com/users/22910461/20170509/091600/styles/T600x450/public/article_images/recycle_logo_copy.gif"},
    {name: 'Food Waste Reduction Initiative', img: "http://www.montgomeryparks.org/uploads/2017/03/Gateway-Garden-Planting-2016_3.jpg"},
    {name: 'Conservation Initiative', img: "http://www.accafrica-us.org/wp-content/uploads/bfi_thumb/Kenya_Tanzania_Borderlands_Conservation_Initiative31-n8kvws2ejz3820cghgfi3ovd4tst8q3ie0jndxfd1o.jpg"},
    {name: 'Wetland Restoration Day', img: "http://141.232.10.32/images/Biscayne%20Bay.jpg"},


  , 'Park Cleanup', 'Walk for Science', 'RecycleMania', 'Environmental Education Festival', 'Conservation Initiative', 'Wetland Restoration Day']
}

let sampleAreas = {
  losAngeles: ['Calabasas', 'Playa del Rey', 'Thousand Oaks', 'Ventura', 'Santa Barbara'],
  newYork: ['Bronx', 'Hoboken', 'Jersey City', 'Yonkers', 'Queens'],
  chicago: ['Peoria', 'Muenster', 'Buffalo Grove', 'Wheaton', 'Elmhurst'],
  portland: ['Lake Oswego', 'West Linn', 'Happy Valley', 'Sherwood', 'Clackamas'],
  sanFran: ['Berkeley', 'Oakland', 'Mill Valley', 'Sausalito', 'Pleasanton']
}

function generateInitiative(majorCityName, orgName, sector) {

  let prefix, nearbyLocation, imageUrl;
  let randomIdx = Math.floor(Math.random()*3)
  let initiative = sampleInitiatives[sector][randomIdx].name
  let imageUrl = sampleInitiatives.initiative.photoUrl
  if (randomIdx === 2) return majorCityName + ' ' + initiative;
  if (randomIdx === 1) {
    nearbyLocation = generateNearbyLocation(majorCityName);
    return nearbyLocation + ' ' + initiative
  }
  if (randomIdx === 0) return orgName + ' - ' + initiative
  let condensedLocation = specifyLocation(majorCityName)
  let prefixArray = [cityName, orgName]
    Math.floor(Math.random()*3)
  }
}

function generateNearbyLocation(majorCityName, idx){
  let condensedName;
  if (majorCityName.toLowerCase() === 'los angeles') condensedName = 'losAngeles';
  if (majorCityName.toLowerCase() === 'san francisco') condensedName = 'sanFran';
  if (majorCityName.toLowerCase() === 'new york') condensedName = 'newYork';
  if (majorCityName.toLowerCase() === 'chicago') condensedName = 'chicago';
  if (majorCityName.toLowerCase() === 'portland') condensedName = 'portland';
  return condensedName
}

//
// *** Category legend
// ## Service opps.
// # environment
// beach cleanup
// park cleanup
// environmental exhibition
// walk for science
//
// #civic engagement
// xxth Annual Anniversary Celebration
// xxth Anniversary City Festival
// xxth Annual walkathons
// xxth Library Fundraiser
// Cityname... Recreation and Parks Food and Fun Exhibition
//
// #Education
// After-School Mentoring
// School Repair and Cleanup
// STEM Tutoring
//
// #Homeless
// Soup Kitchen Servathon
// Food Drive
// Walk for Hunger
//
// #Animal Welfare
// xxth Annual Veterinary Fundraiser
// Walk for Animal Rights
//
