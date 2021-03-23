
const myJsTutor = [
  {
    name: 'Ebenezer Don',
    goodTutor: true,
    profession: ['Developer', 'Tutor', 'Blogger'],
    stack: ['JavaScript', 'Python', 'RubyAndRails'],
    proficiency: 'Master',
    sloganOne: 'Mastery only comes from building',
    sloganTwo: 'The goal is to understand and not to cover large portion without understanding'
  },
  {
    youtubeCourses: ['learn git and gitHub in 20 minutes','Chillop in the rain','Simple fast web hosting with gitHub pages'],
    goodTutor: true,
    udemyCourse: 'Web Development for absolute beginners',
    priceForUdemyCourse: '$11.99',
    priceForYoutubeCourse: 'freeSubscription'  
  }
]


console.log(myJsTutor)

myJsTutor.forEach(property => {
  console.log(property.goodTutor)
})