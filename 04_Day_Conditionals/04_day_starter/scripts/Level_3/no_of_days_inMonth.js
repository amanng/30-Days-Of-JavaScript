let Month=prompt("Enter month name:");
Month = Month.toLowerCase();
if (Month === "january" || Month === "march" || Month === "may" || Month === "july" || Month === "august" || Month === "october" || Month === "december") {
    console.log(`${Month} has 31 days.`);
}
else if (Month === "april" || Month === "june" || Month === "september" || Month === "november") {
    console.log(`${Month} has 30 days.`);
}
else if (Month === "february") {
    console.log(`${Month} has 28 days.`);
}
else {
    console.log("Invalid month name.");
}