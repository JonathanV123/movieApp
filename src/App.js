import React from 'react';
import SwitchMonthButtons from './components/SwitchMonthButtons.js';
import RenderDaysInMonth from './components/RenderDaysInMonth.js';
import RenderIndividualDay from './components/RenderIndividualDay.js';

import './App.css';

// const DAYS_OF_WEEK = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
// dayNameDays = {};
// DAYS_OF_WEEK.forEach(function(dayOfWeek) { dayNameDays[dayOfWeek] = [] })
// dayNameDays {
//  'Sun': [],
//  'Mon': [],
// }
// for each date  in a monthe)
//  dayNameDays[DAYS_OF_WEEK[date.getDay()]].push(dat
//
const DAYS_OF_WEEK = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
class App extends React.Component {
    constructor() {
        super();
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.displayMonth = this.displayMonth.bind(this);
        this.getDay = this.getDay.bind(this);
        this.getDaysOfMonth = this.getDaysOfMonth.bind(this);
        this.fixed = this.fixed.bind(this);
        this.generateDayNameDays = this.generateDayNameDays.bind(this);
        this.getDayName = this.getDayName.bind(this);
        this.getDaysOfMonthV2 = this.getDaysOfMonthV2.bind(this);


        this.state = {
            year: new Date().getFullYear(),
            monthName: new Date().getMonth(),
            monthNumber: new Date().getMonth(),
            currentDay: null,
            numberOfDaysInMonth: null,
            counter: {
                0: "Jan",
                1: "Feb",
                2: "Mar",
                3: "Apr",
                4: "May",
                5: "June",
                6: "Jul",
                7: "Aug",
                8: "Sept",
                9: "Oct",
                10: "Nov",
                11: "Dec"
            },
            firstDay: null,
            lastDay: null,
            dayNameDays: this.generateDayNameDays(),
        };
    }

    componentWillMount() {
        let counterMonth = this.state.counter;
        let currentMonth = this.state.monthName;
        this.setState({
            monthName: counterMonth[currentMonth],
            monthNumber: currentMonth
        });
        this.getDay();
        this.fixed();
    }

    fixed() {
        var dayNameDays = this.generateDayNameDays();
        this.getDaysOfMonthV2().forEach((dateInMonth) => {
            dayNameDays[this.getDayName(dateInMonth)].push(dateInMonth)
        });
        this.setState({dayNameDays: dayNameDays});
    }

    generateDayNameDays() {
        var dayNameDays = {};
        DAYS_OF_WEEK.forEach((dayName) => {
            dayNameDays[dayName] = [];
        });
        return dayNameDays;
    }

    getDayName(date) {
        return DAYS_OF_WEEK[date.getDay()];
    }

    getDaysOfMonthV2() {
        var daysInMonth = [];
        //first day of this.state.monthNumber
        var date = new Date(this.state.year, this.state.monthNumber);
        while(date.getMonth() === this.state.monthNumber) {
            daysInMonth.push(new Date(date));
            date.setDate(date.getDate() + 1)
        }
        return daysInMonth
    }

    getDaysOfMonth() {
        // const dates = [];  //Dates accessible from here
        // // const dayNameDays = {};
        // for (let i = 0; i <= 6; i++) {
        //     let year = this.state.year;
        //     let month = this.state.monthNumber;
        //     let theDayOfTheWeek = i;
        //     // --month;                                    // correct JS date functions
        //     let d = new Date(year, month, 1);           // first of the month
        //     let firstDayOfWeek = d.getDay();                 // find out what Day of week that was
        //     let date = (7 + theDayOfTheWeek - firstDayOfWeek) % 7 + 1;   // and the first day matching the day of the week
        //     d.setDate(date);
        //     if (theDayOfTheWeek === 0) {
        //         do {
        //             this.state.Sun.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        //     if (theDayOfTheWeek === 1) {
        //         do {
        //             this.state.Mon.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        //     if (theDayOfTheWeek === 2) {
        //         do {
        //             this.state.Tues.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        //     if (theDayOfTheWeek === 3) {
        //         do {
        //             this.state.Wed.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        //     if (theDayOfTheWeek === 4) {
        //         do {
        //             this.state.Thurs.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        //     if (theDayOfTheWeek === 5) {
        //         do {
        //             this.state.Fri.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        //     if (theDayOfTheWeek === 6) {
        //         do {
        //             this.state.Sat.push(new Date(d));      // store a copy of that date
        //             date += 7;                    // go forward a week
        //             d.setDate(date);
        //         } while (d.getMonth() === month); // until the end of the month
        //     }
        // }
        // let a = dates.reduce(function(all, item, index){
        //     if(typeof item === "string"){
        //         console.log("is string");
        //     }else{
        //         console.log("not string");
        //     }
        //     return all;
        // },{Sun:[],Mon:[],Tues:[],Wed:[],Thurs:[],Fri:[],Sat:[]});
        // console.log(a);
    }

    prevMonth() {
        let monthNameCounter = this.state.counter;
        let monthNumber = this.state.monthNumber;
        let newMonthNumber = monthNumber + 1;
        if (newMonthNumber === 12) {
            newMonthNumber = 0;
            let nextYearIs = this.state.year + 1;
            this.setState({
                year: nextYearIs,
            })
        }
        this.setState({
            monthName: monthNameCounter[newMonthNumber],
            monthNumber: newMonthNumber
        });
        this.getDay();
    }

    nextMonth() {
        let monthNameCounter = this.state.counter;
        let monthNumber = this.state.monthNumber;
        let newMonthNumber = monthNumber - 1;
        if (newMonthNumber === -1) {
            newMonthNumber = 11;
            let nextYearIs = this.state.year - 1;
            this.setState({
                year: nextYearIs,
            })
        }
        this.setState({
            monthName: monthNameCounter[newMonthNumber],
            monthNumber: newMonthNumber
        });
        this.getDay();
    }

    displayMonth() {
        const counter = this.state.monthNumber;
        const monthNameName = this.state.counter;
        console.log(monthNameName);
        let monthNameIsNow = monthNameName[counter];
        console.log(monthNameIsNow);
        this.setState({
            monthName: monthNameIsNow,
        });
    }

    getDay() {
        let year = this.state.year;
        let month = this.state.monthNumber;
        let day = new Date().getDay();
        //Get first and last day of month
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let initNumOfDaysInMonth = new Date(year, month + 1, 0).getDate();
        this.setState({
            currentDay: day,
            firstDay: firstDay,
            lastDay: lastDay,
            numberOfDaysInMonth: initNumOfDaysInMonth
        })
    }

    render() {
        return (
            <div className="App">
                <SwitchMonthButtons
                    monthName={this.state.monthName}
                    monthNumber={this.state.count}
                    counterMonth={this.state.counter}
                    nextMonth={this.prevMonth}
                    prevMonth={this.nextMonth}
                    displayMonth={this.displayMonth}
                />
                <RenderDaysInMonth
                    theCurrentYear={this.state.year}
                    theCurrentMonth={this.state.monthNumber}
                    firstDay={this.state.firstDay}
                    lastDay={this.state.lastDay}
                    currentDay={this.state.currentDay}
                    numberOfDaysInMonth={this.state.numberOfDaysInMonth}
                    dayNameDays={this.state.dayNameDays}
                />
            </div>
        );
    }
}
export default App;

