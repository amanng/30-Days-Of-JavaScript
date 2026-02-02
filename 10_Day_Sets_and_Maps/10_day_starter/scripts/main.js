const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const setOfLanguage = new Set(languages)
for (const language of setOfLanguage) {
    console.log(language)
}
console.log(setOfLanguage.size)