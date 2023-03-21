const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

function findCountry(countryName) {
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().indexOf(countryName.toLowerCase()) !== -1) {
      return 'Ada';
    }
  }
  return 'Tidak Ada';
}

console.log(findCountry('Indonesia')); // 'Ada'
console.log(findCountry('ind')); // 'Ada'
console.log(findCountry('Amerika')); //'Ada'
console.log(findCountry('Korea')); // 'Tidak Ada'
