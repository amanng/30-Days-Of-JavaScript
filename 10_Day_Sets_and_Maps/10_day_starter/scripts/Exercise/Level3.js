const countries = [
  {
    name: 'Afghanistan',
    languages: ['Pashto', 'Uzbek', 'Turkmen']
  },
  {
    name: 'Albania',
    languages: ['Albanian']
  },
  {
    name: 'Algeria',
    languages: ['Arabic']
  },
  {
    name: 'Argentina',
    languages: ['Spanish']
  },
  {
    name: 'Australia',
    languages: ['English']
  },
  {
    name: 'Austria',
    languages: ['German']
  },
  {
    name: 'Belgium',
    languages: ['Dutch', 'French', 'German']
  },
  {
    name: 'Brazil',
    languages: ['Portuguese']
  },
  {
    name: 'Canada',
    languages: ['English', 'French']
  },
  {
    name: 'China',
    languages: ['Chinese']
  },
  {
    name: 'Egypt',
    languages: ['Arabic']
  },
  {
    name: 'Ethiopia',
    languages: ['Amharic']
  },
  {
    name: 'Finland',
    languages: ['Finnish', 'Swedish']
  },
  {
    name: 'France',
    languages: ['French']
  },
  {
    name: 'Germany',
    languages: ['German']
  },
  {
    name: 'India',
    languages: ['Hindi', 'English']
  },
  {
    name: 'Kenya',
    languages: ['Swahili', 'English']
  },
  {
    name: 'Nigeria',
    languages: ['English']
  },
  {
    name: 'Russia',
    languages: ['Russian']
  },
  {
    name: 'South Africa',
    languages: ['English', 'Afrikaans', 'Zulu', 'Xhosa']
  }
]



const mostSpokenLanguages = (countries, num) => {
  const languageMap = new Map()

  // Count languages
  countries.forEach(country => {
    country.languages.forEach(lang => {
      languageMap.set(lang, (languageMap.get(lang) || 0) + 1)
    })
  })

  // Sort and format result
  return [...languageMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, num)
    .map(([language, count]) => ({ [language]: count }))
}


const countLanguages = (countries) => {
  const languageSet = new Set()

  countries.forEach(country => {
    country.languages.forEach(lang => languageSet.add(lang))
  })

  return languageSet.size
}

console.log(countLanguages(countries))

console.log(mostSpokenLanguages(countries, 10))