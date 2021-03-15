//Country Objects
const country = {
  name: 'Nigeria',
  continent: 'Africa',
  population: '200 million',
  yearOfIndependence: 1960,
  linguaFranca: 'English',
  officialCurrency: 'naira',
  mineralResourcesAndTheirLocations: {
    crudeOil: ['Delta', 'Ondo', 'Imo', 'Abia', 'Edo', 'Rivers', 'Bayelsa', 'Akwa ibom', 'Cross rivers'],
    coal: 'Enugu',
    tin: 'jos',
    lead: 'Kano',
    ironOre: 'Kogi'
  },
  systemOfGovernment: 'presidential system',
  nameOfCurrentPresident: 'Muhammadu Buhari',
  majorEthnicGroups: ['Hausa', 'Yoruba', 'Igbo'],
  mainSourceOfRevenue: 'petroleum',
  ebenezerIsFromNigeria: true
}

console.log(country.mineralResourcesAndTheirLocations.crudeOil[1])

//Objects containing delicacies in different countries
const differentCountriesAndTheirDelicacies = {
  nigeria: 'jollof rice',
  ukraine: 'kvas',
  unitedArabEmirates: 'knafeh',
  germany: 'sartzle',
  russia: 'blini',
  indonesia: 'satay',
  netherlands: 'stroopwaffel',
  england: 'porkPies',
  southKorea: 'kimchi',
  japan: 'shabu shabu',
  portugal: 'gougere'
}

console.log(differentCountriesAndTheirDelicacies.england)

//Objects Containing different Inventors and their works
const inventionAndInventors = {  
  bulb: 'Thomas Edison',
  electricity: 'Michael faraday',
  javaScript: 'Brendan Eich',
  google: 'Larry Page',
  elevator: 'Elish Ortis',
  submarine: 'David Bushnel',
  revolver: 'Samuel Colt',
  telephone: 'Alex Graham Bell',
  dynamite: 'Alfred Nobel',
  microscope: 'Zacharis Jahnsen',
  windows: 'Bill Gates'
}

console.log(inventionAndInventors.dynamite)