const faker = require('faker')


let organization = [
{
name: "Art Without Borders", photoUrl: "https://i.pinimg.com/564x/61/b2/4a/61b24ad4148f98dd4f2b4efede706e8f.jpg", sector: "Arts_and_Culture", description: faker.lorem.paragraph(), website: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnbcjM62fktWZJ6Q0ZN9gNUxsjNl0UftQH0FaQxe0GA935MC6"
},
{
name: "Citizens for the Arts", photoUrl: "http://www.trbimg.com/img-56390bf7/turbine/la-me-ln-arts-education-nonprofit-help-2015110-002/650/650x366", sector: "Arts_and_Culture", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Classical Arts Foundation", photoUrl: "https://pbs.twimg.com/profile_images/691591784040763392/_V7_u7GL_400x400.png", sector: "Arts_and_Culture", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Culture and Creativity Institute", photoUrl: "http://flagartfoundation.org/wp-faf/wp-content/uploads/2011/09/ArtSq_01.jpg", sector: "Arts_and_Culture", description: faker.lorem.paragraph(), website: "http://placehold.it/400x200"
},
{
name: "Global Arts Society", photoUrl: "https://www.nac.gov.sg/naccorp/dam/jcr:f650deb4-c819-4acd-9436-a343bb1e37a5/Arts_Philanthropy_overview.jpg", sector: "Arts_and_Culture", description: faker.lorem.paragraph(), website: "http://placehold.it/400x200"
},
{
name: "Civic Engagement Forum", photoUrl: "http://civicsolidarity.org/sites/default/files/logo_web_7.jpg", sector: "Civic_Engagement", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Democracy Speaks!", photoUrl: "http://blogs.thenews.com.pk/blogs/wp-content/uploads/2012/01/democracy_logo1.jpg", sector: "Civic_Engagement" , description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Center for Community Service", photoUrl: "http://www.volunteercenterofracine.org/wp-content/uploads/2013/11/commserv.jpg", sector: "Civic_Engagement", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Global Citizens International", photoUrl: "http://www.hofstra.edu/images/positioning/id-cce.jpg", sector: "Civic_Engagement", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Civil Society Awareness Fund", photoUrl: "http://www.imprisonedshow.com/wp-content/uploads/2013/06/Civil-Society-logo-1024x1024.jpg", sector: "Civic_Engagement", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "International Animal Welfare Society", photoUrl: "https://www.aspca.org/sites/default/files/swyh-grocery-list_thumb_awa_1.jpg", sector: "Animal_Welfare", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "People for Animal Protection", photoUrl: "http://main.nfawl.org/wp-content/uploads/2015/10/CampaignLogo.jpg", sector: "Animal_Welfare", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
// {
// name: "Feral Cat Rescue!!!!!", photoUrl: "http://www.feralcatrescuemd.org/uploads/BrownFCRLogoNoBack-Small.png", sector: "Animal_Welfare", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
// },
{
name: "Against Animal Cruelty", photoUrl: "https://cdn.shopify.com/s/files/1/0224/3287/files/adopt2_808x500_large.jpg?10557223171937276780", sector: "Animal_Welfare", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
// {
// name: "National Coalition for Animal Welfare", photoUrl: "https://www.awla.org/2013/01/animal-welfare-league-of-arlington-partners-with-the-humane-society-of-the-united-states-to-promote-world-spay-day/awla-bitmap-logo-smaller/", sector: "Animal_Welfare", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
// },
{
name: "MicroFinance Opportunities Center", photoUrl: "https://images-platform.99static.com/EZrlvd0rMkjSQ_3-pAwK0tWikAI=/500x500/top/smart/99designs-contests-attachments/7/7762/attachment_7762725", sector: "Global_Affairs", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Global Citizens Unite", photoUrl: "http://www.dundascommunications.com/wp-content/uploads/2014/06/Global_Citizen_Logo-493x740@2x.jpg", sector: "Global_Affairs", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Helping Hands International", photoUrl: "https://thumbs.dreamstime.com/x/helping-hands-logo-26194570.jpg", sector: "Global_Affairs", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Global Refugee Support Network", photoUrl: "https://www.thestudentsunion.co.uk/asset/Organisation/18026/Refugee%20Actionlogo2014.jpg?thumbnail_width=420&thumbnail_height=240&resize_type=ResizeFitAllFill", sector: "Global_Affairs", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Care Worldwide", photoUrl: "https://i.vimeocdn.com/portrait/2392811_600x600.webp", sector: "Global_Affairs", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Action Against Homelessness", photoUrl: "https://www.globalhand.org/system/images/e907a2b4a90852633732b9e24ef94d2c747d8f0e/original/hth-logo.png?1335620811", sector: "Homelessness", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Project: Shelter", photoUrl: "http://petertatchellfoundation.org/images/shelter-logo.jpg", sector: "Homelessness", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Anti-Poverty Campaign", photoUrl: "http://www.uplifteducation.org/cms/lib01/TX01001293/Centricity/Domain/1/home_page-08.jpg", sector: "Homelessness", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Operation Blankets", photoUrl: "https://adkinsunitedfinance.com/wp-content/uploads/2015/11/blankets_t750x550.jpg", sector: "Homelessness", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Mission: H.O.M.E", photoUrl: "https://static01.nyt.com/images/2015/10/19/opinion/19levine/19levine-blog427.jpg", sector: "Homelessness", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Project R.E.A.D.", photoUrl: "http://www.edmentum.com/sites/edmentum.com/files/styles/content_image/public/product/content/Read_rgb.png?itok=2fIZOv8x", sector: "Education", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Partnership for Learning", photoUrl: "https://c.tadst.com/gfx/750w/read-a-book-day-fun.jpg?1", sector: "Education", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Education for All", photoUrl: "http://www.bluesquareconcepts.com/wp-content/uploads/2016/02/learning_featured@wdd2x-1.jpg", sector: "Education", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Global Education Trust", photoUrl: "http://www.marketcues.com/wp-content/uploads/2015/07/Nonprofit.jpg", sector: "Education", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
},
{
name: "Teach for the World", photoUrl: "https://thejournal.com/~/media/EDU/THEJournal/Images/2017/03/20170327compudot.jpeg", sector: "Education", description: faker.lorem.paragraph(), website: "http://www.placeholder.com"
}
]

module.exports = organization



/*
// civic engagement

http://www.utne.com/-/media/Images/UTR/Editorial/Articles/Online-Articles/2013/11-01/How-to-Promote-Civic-Engagement-in-Public-Issues/Civic-Engagement-jpg.jpg?h=367&la=en&w=550&hash=7B1D0A9B8EEF7EFC69AFF54E314FB32D01CE3F27




const sectorskillsInterests = {
  sector: [
    "environment", "education", "homelessness", "prison reform", "global affaire", "animal welfare", "civic engagement", "arts and culture"
  ],
  skills: [
    "technology", "translation", "repairs", "teaching", "tutoring", "mentorship", "legal", "medical"
  ],
  serviceInterests: ["all", "tutoring", "mentorship", "city cleanup", "fundraising", "event management"]
}



Education:

Project R.E.A.D.
Partnership for Learning
Education for All
Global Education Trust
Teach for the World



homelessness

Action Against Homelessness
End Poverty!
Anti-Poverty Campaign
Operation Blankets
Global Food and Shelter Mission

org. names...
Global_Affairs

MicroFinance Strategy Center
Global Citizens Unite
Helping Hands International
Global Refugee Support Network
Care Worldwide

Animal welfare

International Animal Welfare Society
People for Animal Protection
Stray Animal Relief Society
Against Animal Cruelty
National Coalition for Animal Welfare

Civic engagement

Civic_Engagement Forum
Democracy Speaks!
Center for Community Service
Global Citizens Unite
Civil Society Awareness Fund

Arts:

{name: ["Art Without Borders"]}
Citizens for the Arts
Classical Arts Foundation
Cuture and Creativity Institute
Global Arts Society












Education:

Project R.E.A.D.
Partnership for Learning
Education for All
Global Education Trust
Teach for the World

*/
