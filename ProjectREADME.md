##### Information on the project #####

## Randomness generation
Create randomness generators for volunteer profiles and events...
Page for admin to create volunteers....
Need randomness generators for:

Users: names, profile information, photo, etc.
Initiatives (select sector): photos, name, description (a lot of lorem ipsem for now)
// Redirect to event page to create information on volunteer and service types...



*** Category legend
## Service opps.
# environment
beach cleanup
park cleanup
environmental exhibition
walk for science

#civic engagement
xxth Annual Anniversary Celebration
xxth Anniversary City Festival
xxth Annual walkathons
xxth Library Fundraiser
Cityname... Recreation and Parks Food and Fun Exhibition

#Education
After-School Mentoring
School Repair and Cleanup
STEM Tutoring

#Homeless
Soup Kitchen Servathon
Food Drive
Walk for Hunger

#Animal Welfare
xxth Annual Veterinary Fundraiser
Walk for Animal Rights


***

MVP Functionality:

Thursday:
-Models set up; models seeded;

Friday:
-Backend API routes written
-Users can sign up and create a profile
-Organizations can sign up and create a profile

Saturday
-Front-end routes created, including all reducers
-Database seeded with:
  20 volunteers
  3 locations
  10 'organizations'
  10 events

Sunday
-Styling accomplished



- Users can signup and create a profile
- Organization can signup and create a profile
- Organization can create events/opportunities
- Volunteers can search for events/opportunities

Core funtionality

## Users
Can create a profile
Can search for volunteer opportunities by sector and location
Can specify the types of opportunities they are looking for



## User profiles
They will include:
A locations
Skills
Description
Photo
An optional LinkedIn profile
Specify whether they are searchable or not

##Organizations
Can create a profile
Can view users by interest

Can search for volunteers (who opt to be searchable) by location, and overlapping interest
Add a later point
Can add skills they are seeking
Can create skills



# Administrators
Can add locations
Can add categories
Can add sectors
Can add sought-after skills




Potential Add-On Features for Later

Date Plugin used by AirBNB
https://github.com/airbnb/react-dates


- Twitter function where you can add more
- With OAuth, take information directly from Facebook profiles and use it to render their profile Information
- Allow users to only search for opportunities within a certain distance
- LinkedIn integration to allow people to select opportunities by skill-set
- Administrators have the ability to approve of new submissions on the part of organizations.


Other potential add-on features... This will all be managed in the front-end.
Filter skills by various categories; For now, will allow:
- people to enter skills by category
- Organizations to search by category
