const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 8

// Do not change code above this comment

console.log(holidays[futureId].name || `ID ${futureId} not created yet`)

let copied = {...holidays[christmas]}
copied.name = "X-mas Day" 
let correctDate = new Date() //why does let correctDate = copied.date change the original objects date instead of just the copy
correctDate.setHours(0)
correctDate.setMinutes(0)
copied.date = correctDate

const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime() 
console.log('New date is earlier:', isEarlier)
if (isEarlier) {
console.log('ID change:', holidays[christmas].id != copied.id ? copied.id : false ) //why does holidays[christmas].id != copied.id || holidays[christmas].id === copied.id ? copied.id : false
console.log('Name change:', holidays[christmas].name != copied.name ? copied.name : false )
console.log('Date change:', holidays[christmas].date != copied.date ? "25/12/2023" : false )
}

copied = holidays
const zero = new Date( `16 December ${currentYear}`)
copied[0].date = zero

const firstHolidayTimestamp = Math.min (
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)
 
 const lastHolidayTimestamp = Math.max (
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstDay = new Date(firstHolidayTimestamp).getDate() //convert milliseconds to date. Date object allows you to work with dates
const firstMonth = (new Date(firstHolidayTimestamp).getMonth()) + 1; //in javascript months value runs from 0-11
const lastDay = new Date (lastHolidayTimestamp).getDate() //new Date(lastHolidayTimestamp).getDate()
const lastMonth = (new Date(lastHolidayTimestamp).getMonth()) + 1;

console.log(`${firstDay.toString().padStart(2, "0")}/${firstMonth.toString().padStart(2, "0")}/${currentYear}`)
console.log(`${lastDay.toString().padStart(2, "0")}/${lastMonth.toString().padStart(2, "0")}/${currentYear}`)

const randomHoliday = Math.floor(Math.random()*10) //math.floor rounds down to nearst integer
//math.random * 10 since we only need a random number up to and including 10
console.log(randomHoliday)