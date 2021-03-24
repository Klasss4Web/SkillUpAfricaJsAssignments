//Create an array with a function as the second element of the array
const mixedArray = [
  'skillUpAfrica',
  ()=>'Making Gold',
  ['frontend','backend','cinematography','product design']
]

//Call the function outside the array in which it was defined.
console.log(mixedArray[1]())