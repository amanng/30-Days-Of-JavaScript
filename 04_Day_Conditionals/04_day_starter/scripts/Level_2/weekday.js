let day=prompt("Enter a day:");
day = day.toLowerCase();
if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log(`${day} is a working day.`);
}
else if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend.`);
}
else {
    console.log("Invalid day name.");
}