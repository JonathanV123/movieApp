import React from 'react';
import Header from './components/Header.js';
import CreateYear from './components/CreateYear.js';
import CreateMonth from './components/CreateMonth.js';
import CreateDays from './components/CreateDays.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.displayMonth = this.displayMonth.bind(this);
        this.getDay = this.getDay.bind(this);
        this.state = {
            year: new Date().getFullYear(),
            monthName: new Date().getMonth(),
            monthNumber: new Date().getMonth(),
            counter:{
                0:"Jan",
                1:"Feb",
                2:"Mar",
                3:"Apr",
                4:"May",
                5:"June",
                6:"Jul",
                7:"Aug",
                8:"Sept",
                9:"Oct",
                10:"Nov",
                11:"Dec"
            },
            firstMonth: 1,
            lastMonth:12,
        };
    }
    componentWillMount(){
        let counterMonth = this.state.counter;
        let currentMonth = this.state.monthName;
        this.setState({
            monthName:counterMonth[currentMonth],
            monthNumber:currentMonth
        })
    }
    prevMonth(){
        let monthNameCounter = this.state.counter;
        let monthNumber = this.state.monthNumber;
        let newMonthNumber = monthNumber + 1;
        if(newMonthNumber === 12){
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
        if(newMonthNumber === -1){
            newMonthNumber = 11;
            let nextYearIs = this.state.year - 1;
            this.setState({
                year: nextYearIs,
            })
        }
        this.setState({
            monthName:monthNameCounter[newMonthNumber],
            monthNumber: newMonthNumber
        });
        this.getDay();
    }
    displayMonth(){
        const counter = this.state.monthNumber;
        const monthNameName = this.state.counter;
        console.log(monthNameName);
        let monthNameIsNow = monthNameName[counter];
        console.log(monthNameIsNow);
            this.setState({
                monthName: monthNameIsNow,
            });
    }
    getDay(){
        console.log("Get dat init");
        let year = this.state.year;
        console.log(year);
        let month = this.state.monthNumber;
        console.log(month);
        let day =  new Date(year + "-" + month).getDay();
        day = (day===0) ? 7 : day;
        console.log("today is " + day);
    }
    // calculateDayOfWeek(firstDay){
    //     // const daysOfWeesdvsdvsdvsdvk = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
    // }
    render() {
        return (
            <div className="App">
                <Header/>
                <CreateYear year={this.state.year}/>
                <CreateMonth
                   monthName={this.state.monthName}
                   monthNumber={this.state.count}
                   counterMonth={this.state.counter}
                   nextMonth={this.prevMonth}
                   prevMonth={this.nextMonth}
                   displayMonth={this.displayMonth}
                />
                <CreateDays
                   theCurrentYear={this.state.year}
                   theCurrentMonth={this.state.monthName}
                />
            </div>
        );
    }
}
console.log("App");
export default App;
