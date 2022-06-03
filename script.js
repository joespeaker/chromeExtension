// key = keyrRyE4uADzRD3rx

let today = new Date();
let hour = today.getHours();
let date = today.getDate();
let day = today.getDay();
let dayofweek = getDayName(day)
let monthNumber = today.getMonth();
let nextMonth = getMonthName(monthNumber+1);
let month = getMonthName(monthNumber);
let monthDay = month + '-' + adjustDate(day, date, monthNumber);

//these are the arrays which we will display on the popout
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



function getMonthName(num) {
    if(num == 0) {
        return "Jan"
    } else if (num == 1) {
        return "Feb"
    } else if (num == 2) {
        return "Mar"
    } else if (num == 3) {
        return "Apr"
    } else if (num == 4) {
        return "May"
    } else if (num == 5) {
        return "Jun"
    } else if (num == 6) {
        return "Jul"
    } else if (num == 7) {
        return "Aug"
    } else if (num == 8) {
        return "Sep"
    } else if (num == 9) {
        return "Oct"
    } else if (num == 10) {
        return "Nov"
    } else if (num == 11) {
        return "Dec"
    }
}

function getDayName(num) {
    if(num == 0) {
        return "Sunday"
    } else if (num == 1) {
        return "Monday"
    } else if (num == 2) {
        return "Tuesday"
    } else if (num == 3) {
        return "Wednesday"
    } else if (num == 4) {
        return "Thursday"
    } else if (num == 5) {
        return "Friday"
    } else if (num == 6) {
        return "Saturday"
    }
};

function adjustDate(num, date, month) {
    if(date > 7){
        console.log(date)
        if(num == 0) {
            date = date
        } else if (num == 1) {
            date = date - 1
        } else if (num == 2) {
            date = date - 2
        } else if (num == 3) {
            date = date - 3
        } else if (num == 4) {
            date = date - 4
        } else if (num == 5) {
            date = date - 5
        } else if (num == 6) {
            date = date - 6
        }
    } else {
        if(num == 0) {
            date = date
        } else if (num == 1) {
            date = date + 6
        } else if (num == 2) {
            date = date + 5
        } else if (num == 3) {
            date = date + 4
        } else if (num == 4) {
            date = date + 3
        } else if (num == 5) {
            date = date + 2
        } else if (num == 6) {
            date = date + 1
        }
    }
    //check the month and make sure day is not over 31 or 30 or 29 or 28
    if(num == 0) {
        month = 31
    } else if (num == 1) {
        month = 28
    } else if (num == 2) {
        month = 31
    } else if (num == 3) {
        month = 30
    } else if (num == 4) {
        month = 31
    } else if (num == 5) {
        month = 30
    } else if (num == 6) {
        month = 31
    } else if (num == 7) {
        month = 31
    } else if (num == 8) {
        month = 30
    } else if (num == 9) {
        month = 31
    } else if (num == 10) {
        month = 30
    } else if (num == 11) {
        month = 31
    }

    if(date > month) {
        return date = date - month
    } 
    return date
};