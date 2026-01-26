let time = new Date();
let years = time.getFullYear();
let month = String(time.getMonth() + 1).padStart(2, '0');
let date = String(time.getDate()).padStart(2, '0');
let hours = String(time.getHours()).padStart(2, '0');
let minutes = String(time.getMinutes()).padStart(2, '0');
console.log(`${years}-${month}-${date} ${hours}:${minutes}`);
