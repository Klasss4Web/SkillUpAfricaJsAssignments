//An Array of objects containing informations about my JavaScript tutor
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

//Using forEach to output the second properties in each of the objects in myJsTutor Array
myJsTutor.forEach(property => {
  //Using Object.values to get the value of each object poperty and returning them as array
  const objectValues = Object.values(property);
  console.log(objectValues[1])
  // console.log(property.goodTutor)
})