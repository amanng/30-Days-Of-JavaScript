const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
const logedinuser = Object.values(users).filter(
    users=>users.isLoggedIn).length
console.log("Loged in users : ", logedinuser)

const points50ormore = Object.values(users).filter(
    users=>users.points>=50
).length
console.log("points more than 50 : ",points50ormore)

let maxskills = 0
let skilledperson = ''
for (const user in users) {
    if (users[user].skills.length > maxskills) {
        maxskills = users[user].skills.length
        skilledperson = user;
    }
}
console.log("Skilled person : ", skilledperson)

const mernDevelopers = []
for (const user in users) {
    const skills = users[user].skills
    if (
        skills.includes('MongoDB') &&
        skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
    )
        {
    mernDevelopers.push(user);
  }
}
console.log(mernDevelopers);

const newUsers = {
  ...users,
  Shiferaw: {
    email: 'shiferaw@shiferaw.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: false,
    points: 0
  }
};

console.log(newUsers);

const keys = Object.keys(users);
console.log(keys);

const values = Object.values(users);
console.log(values);

const countries = [
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    population: 123000000,
    languages: ["Amharic", "Oromo", "Tigrinya"]
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    population: 55000000,
    languages: ["English", "Swahili"]
  }
];
