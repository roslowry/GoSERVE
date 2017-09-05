let faker = require('faker');
let chance = require('chance')
const randomName = require('node-random-name')

function genderSelect() {
  let randomIdx = Math.floor(Math.random()*2);
  if (randomIdx !== 1) {
    return "male"
  } else {
     return "female";
   }
}


function createUser() {

  let photoGender
  let photoNo = Math.floor(Math.random()*99);
  let randomGender = genderSelect();
  if (randomGender === "male") photoGender = "men";
  if (randomGender === "female") photoGender = "women"
  return {
    name: randomName({ gender: randomGender}),
    // gender: genderSelect,
    // name: faker.ame.findName(),
    // prefix: faker.name.prefix(),
    email: faker.internet.email(),
    // address: getAddress(),
    isAdmin: false,
    password: faker.internet.password(),
    image: `https://randomuser.me/api/portraits/${photoGender}/${photoNo}.jpg`,
    searchable: true
  };
}

let user1 = createUser();
let user2 = createUser();

console.log('user1', user1)
console.log('user2', user2)


console.log('description', faker.lorem.paragraph())


console.log('description', faker.lorem.paragraph())
