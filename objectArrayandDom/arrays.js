//Arrays chemical elements classified based on their physical states
const elements = [
  ['sodium', 'gold', 'aluminium'],['chlorine', 'mercury'],['oxygen', 'fluorine', 'nitrogen']
]

console.log(elements[2][1])


//Array of Materials found in the kitchen and their appropriate groupings
const kitchen = [
  ['oven', 'microwave', 'gasBurner'],['knives', 'forks', 'spoons'],['detergents', 'spong']
]

console.log(kitchen[2][1])

//Arrays of Technologies classified according to their similarities
 const technologiesAndTechFirms = [
   ['paystack', 'flutterwave', 'interswitch'],['amazon', 'jumia', 'konga'],['javaScript', 'java', 'python']
 ]

 console.log(technologiesAndTechFirms[1][2])


 //Arrays containing objects as items

 const sports = [
   {
     sportsName: 'football',
     worldGoverningBody: 'fifa',
     currentPresident: 'Infantino',
     worldTournament: ['fifa world cup', 'olympic games', 'world club cup'],
     fifaOnlyCoversEurope: false 
   },
   {
     sportsName: 'basket ball',
     worldGoverningBody: 'fiba',
     currentPresident: 'Hamane Niang',
     worldTournaments: 'fiba world cup'
   }
 ]

 console.log(sports[0].worldTournament[0])

//  sports.forEach((sportsName) => {
//    let secondItem = Object.keys()
//   console.log(secondItem)
//  })