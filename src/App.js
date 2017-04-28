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
        this.determineCurrentYear = this.determineCurrentYear.bind(this);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            countIs:0,
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
        let currentMonth = this.state.month;
        this.setState({
            month:counterMonth[currentMonth],
            countIs:currentMonth
        })
    }
    prevMonth(){
        let theCount = this.state.countIs;
        let monthCounter = this.state.counter;
        let newCount = theCount + 1;
        if(newCount === 12){
            newCount = 0;
        }
        this.setState({
            countIs: newCount,
            month: monthCounter[theCount]
        })
    }
    nextMonth() {
        let theCount = this.state.countIs;
        let monthCounter = this.state.counter;
        let newCount = theCount - 1;
        if(newCount === -1){
            newCount = 11;
        }
        this.setState({
            countIs: newCount,
            month:monthCounter[theCount]
    })
    }
    displayMonth(){
        const counter = this.state.countIs;
        const monthName = this.state.counter;
        console.log(monthName);
        let monthIsNow = monthName[counter];
        console.log(monthIsNow);
            this.setState({
                month: monthIsNow,
            });
        return({
            monthIsNow
        })

    }
    determineCurrentYear(){
        console.log("determining current year");
        if(this.state.countIs > 12){
            let nextYearIs = new Date().getFullYear() + 1;
            this.setState({
                year: nextYearIs,
            })
        }
        if(this.state.countIs < 1){
            let prevYear = new Date().getFullYear() - 1;
            this.setState({
                year: prevYear,
            })
        }
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
                   month={this.state.month}
                   countIs={this.state.count}
                   counterMonth={this.state.counter}
                   nextMonth={this.prevMonth}
                   prevMonth={this.nextMonth}
                   inItYearAndMoth={this.initYearAndMonth}
                   displayMonth={this.displayMonth}
                />
                <CreateDays
                   theSelectedDay={this.state.selectedDay}
                   theCurrentYear={this.state.year}
                   theCurrentMonth={this.state.month}
                />
            </div>
        );
    }
}
console.log("fixabfdsfsdsdasfcedd");
export default App;
