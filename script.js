// key = keyrRyE4uADzRD3rx

let today = new Date();
let hour = today.getHours();
let day = today.getDate();
let month = today.getMonth();
let mon = null;
if(month == 0) {
    mon = "Jan"
} else if (month == 1) {
    mon = "Feb"
} else if (month == 2) {
    mon = "Mar"
} else if (month == 3) {
    mon = "Apr"
} else if (month == 4) {
    mon = "May"
} else if (month == 5) {
    mon = "Jun"
} else if (month == 6) {
    mon = "Jul"
} else if (month == 7) {
    mon = "Aug"
} else if (month == 8) {
    mon = "Sep"
} else if (month == 9) {
    mon = "Oct"
} else if (month == 10) {
    mon = "Nov"
} else if (month == 11) {
    mon = "Dec"
}
let date = [];
let name = [];
let track = [];
let house = document.getElementById('in');

console.log(monDay);

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyrRyE4uADzRD3rx'}).base('appEkotM6yOke3kE3');

base('Spring 2022 Tutor Center Schedule').select({
    view: "grid_view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        // gets month and day
        let splitName = record.get('Name').split(" ")
        // pushes month and day to the date array
        let airMonth = splitName[1].split('-')
        date.push();
    });
        fetchNextPage();
        
        console.log()
}, function done(err) {
    if (err) { console.error(err); return; }
});




