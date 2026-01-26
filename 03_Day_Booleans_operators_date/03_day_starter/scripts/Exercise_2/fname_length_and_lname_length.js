let firstName = "Shiferaw";
let lastName = "Nigatu";

if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}`);
}
else if (firstName.length < lastName.length) {
    console.log(`Your last name, ${lastName} is longer than your first name, ${firstName}`);
}
else {
    console.log(`Your first name, ${firstName} and last name, ${lastName} are of equal length.`);
}