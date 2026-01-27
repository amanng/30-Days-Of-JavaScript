let month = prompt("Enter a month:");
month = month.toLowerCase();
if (month === "september" || month === "october" || month === "november") {
    console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
    console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("The season is Summer.");
} else {
    console.log("Invalid month name.");
}