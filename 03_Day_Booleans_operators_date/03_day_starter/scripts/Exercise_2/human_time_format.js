let time = new Date();
let years = time.getFullYear();
let month = time.getMonth() + 1;
let date = time.getDate();
let hours = time.getHours();
let minutes = time.getMinutes();
console.log(`${years}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${years} ${hours}:${minutes}`);
console.log(`${date}/${month}/${years} ${hours}:${minutes}`);