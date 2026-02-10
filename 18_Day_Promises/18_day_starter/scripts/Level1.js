const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
  .then(response => response.json())
  .then(countries => {
    countries.forEach(country => {
      const name = country.name?.common || 'N/A';
      const capital = country.capital ? country.capital[0] : 'N/A';
      const languages = country.languages
        ? Object.values(country.languages).join(', ')
        : 'N/A';
      const population = country.population || 'N/A';
      const area = country.area || 'N/A';

      console.log(`
Country: ${name}
Capital: ${capital}
Languages: ${languages}
Population: ${population}
Area: ${area} km²
---------------------------
`);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));