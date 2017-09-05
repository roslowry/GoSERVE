const User = require('./user');
const Initiative = require('./initiative');
const Profile = require('./profile');
const Locale = require('./locale');
const Opportunity = require('./opportunity');
const Organization = require('./organization');

User.hasOne(Profile)
Profile.belongsTo(User)

User.belongsToMany(Initiative, {through: 'UserInitiative'})
Initiative.belongsToMany(User, {through: 'UserInitiative'})

User.belongsTo(Locale)
Locale.hasMany(User)

User.belongsToMany(Opportunity, {through: 'UserOpportunity'})
Opportunity.belongsToMany(User, {through: 'UserOpportunity'})
//
// Initiative.belongsTo(Locale)
// Locale.hasMany(Initiative)
Organization.belongsToMany(Locale, {through: 'OrganizationLocale'});
Locale.belongsToMany(Organization, {through: 'OrganizationLocale'});

Initiative.belongsTo(Organization)
Organization.hasMany(Initiative)

Opportunity.belongsTo(Initiative)
Initiative.hasMany(Opportunity)

/*

Possible improvements for another version:

- Add a many-to-many relationship between initiatives and locations (this would account for cross-country inititiatives, walkathons, fundraisers, etc.)
- Consider adding something for technical skills....
- Add a "sectors" model whereby the admin can add in/update all sectors that are searchable;
- Add a "skills" model whereby the admin can add in/update the skills that are searchable;
- Add a relation between users and organizations with whom they've done stuff

*/


/*
**** Re-organized view of relations listed below:

User.hasOne(Profile)
User.belongsToMany(Initiative, {through: 'UserInitiative'})
User.belongsTo(Locale)
User.belongsToMany(Opportunity, {through: 'UserOpportunity'})

Organization.hasMany(Initiative)
Organization.hasMany(Opportunity)

Locale.hasMany(User)
Locale.hasMany(Opportunity)
Locale.hasMany(Initiative)

Initiative.belongsToMany(User, {through: 'UserInitiative'})
Initiative.belongsTo(Locale)
Initiative.belongsTo(Organization)

Profile.belongsTo(User)

Opportunity.belongsToMany(User, {through: 'UserOpportunity'})
Opportunity.belongsTo(Organization)
Opportunity.belongsTo(Locale)
*/
