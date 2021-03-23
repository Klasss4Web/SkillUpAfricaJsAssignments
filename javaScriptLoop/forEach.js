const myJsTutor = [
  {
    name: 'Ebenezer Don',
    goodTutor: true,
    stack: 'JavaScript Python RubyAndRails',
  },
  {
    youtubeCourses: 'learn git and gitHub in 20 minutes',
    goodTutor: true,
    udemyCourse: 'Web Development for absolute beginners',
    price: '$11.99' 
  }
]

console.log(myJsTutor);

myJsTutor.forEach(item => {
  console.log(item.goodTutor)
})