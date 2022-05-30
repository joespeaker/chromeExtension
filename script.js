// key = keyrRyE4uADzRD3rx

let today = new Date();
let hour = today.getHours();
let day = today.getDate();
let name = [];
let track = [];
let house = document.getElementById('in');

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyrRyE4uADzRD3rx'}).base('appEkotM6yOke3kE3');

base('Spring 2022 Tutor Center Schedule').select({
    view: "grid_view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        let splitName = record.get('Name').split(" ")
        name.push(splitName[1] + " ");
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
    house.innerHTML=name
}, function done(err) {
    if (err) { console.error(err); return; }
});



