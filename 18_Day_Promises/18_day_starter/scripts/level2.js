const cats = [
  { name: 'Whiskers', age: 2 },
  { name: 'Mittens', age: 3 },
  { name: 'Luna', age: 1 },
  { name: 'Oliver', age: 4 }
];

// Extract all cat names
const catNames = cats.map(cat => cat.name);

// Print the cat names
console.log(catNames);
