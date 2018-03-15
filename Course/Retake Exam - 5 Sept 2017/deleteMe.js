let date = new Date("2015-03-18T08:05:38.604Z");
let period = new Date(Date.now() - date);
let period1 = Date.now() - date;

// console.log(period.toTimeString());
// console.log(period.toTimeString());
// console.log(date.toDateString());

let days = Math.round(period1/1000/60/60/24);

let years = Math.round(days / 365);
let months = Math.round((days - years*365) / 30);
let lastdays = days - years*365 - months*30;

let dayString = (lastdays <= 1) ? "day" : "days";
let monthString = (months <= 1) ? "month" : "months";


    console.log(`I'm automated QA from ${years} years, ${months} ${monthString} and ${lastdays} ${dayString}.`);



