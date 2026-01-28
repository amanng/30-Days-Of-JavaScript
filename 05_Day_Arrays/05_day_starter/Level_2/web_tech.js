let web_tech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
let checkTech = 'Sass';
if (web_tech.includes(checkTech)) {
    console.log(`${checkTech} is found in the web_tech array.`);
}
else {
    console.log(`${checkTech} is not found in the web_tech array.`);
  web_tech.push(checkTech);
  console.log(web_tech);
}