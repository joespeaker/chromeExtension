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

//arrays and html variables
const track = [];
const name = []
let house = document.getElementById('names');
let size = 0;

let dayHouse = document.getElementById('day');
dayHouse.textContent += dayofweek + ":";

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyrRyE4uADzRD3rx'}).base('appEkotM6yOke3kE3');

function getRecords() {
    base('Spring 2022 Tutor Center Schedule').select({
        // Selecting grid_view:
        view: "grid_view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            let dataName = record.get('Name');
            let dataHours = record.get(getColumnName(day))
            if(dataName.includes(monthDay)){
                    let nameArray = dataName.split(" ");
                    name[size] =  nameArray[5] + ' ' + dataHours;
                    size++;
            }
        });
        fetchNextPage();
    
    }, function done(err) {
        //put anything and everything here or else it won't work haha :( 
        updateList(name)
        if (err) { console.error(err); return; }
    });
}
getRecords();

function updateList(array) {
  
    for(var i = 0; i<array.length; i++) {
        
        let li = document.createElement("li");
        li.innerText = array[i];
        house.appendChild(li);
    }
}

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

function getColumnName(num) {
    if(num == 0) {
        return "Sunday Hours (CST)"
    } else if (num == 1) {
        return "Monday Hours (CST)"
    } else if (num == 2) {
        return "Tuesday Hours (CST)"
    } else if (num == 3) {
        return "Wednesday Hours (CST)"
    } else if (num == 4) {
        return "Thursday Hours (CST)"
    } else if (num == 5) {
        return "Friday Hours (CST)"
    } else if (num == 6) {
        return "Saturday Hours (CST)"
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