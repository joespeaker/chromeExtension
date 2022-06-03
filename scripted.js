
name = [];
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyrRyE4uADzRD3rx'}).base('appEkotM6yOke3kE3');

base('Spring 2022 Tutor Center Schedule').select({
    view: "grid_view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        if(record.get('Name').contains(monthDay)){
            let nameArray = record.get('Name').split(" ")
            name.push(nameArray[5])
            console.log(nameArray[5])
        }
        fetchNextPage();
        console.log();
}, function done(err) {
    if (err) { console.error(err); return; }
})
}); 
console.log(name);