
for (const { name, capital, population, language } of countries) {
    //console.log(name, capital, population, language)
}
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  let [name,[skills1,skill2,skills3,skills4],[jsScore,reactScore]]=student
console.log(`${name} ["${skills1},${skill2},${skills3},${skills4}"] ${jsScore} ${reactScore}`)
    
function convertArrayToObject(students) {
    return students.map(([name, skills, scores])=>({
        name,
        skills,
        scores
    }));
}

const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    console.log(convertArrayToObject(students))
    [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]