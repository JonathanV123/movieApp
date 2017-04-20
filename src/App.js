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
        this.state = {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
        };
    }
    prevMonth() {
        console.log("prev clicked");
        let currentMonthIs = this.state.currentMonth;
        console.log(currentMonthIs);
        let prevMonthIs = currentMonthIs + 1;
        console.log(prevMonthIs);
        this.setState({
            currentMonth: prevMonthIs,
        })
    }
    nextMonth() {
        console.log("next clicked");
        let currentMonthIs = this.state.currentMonth;
        let nextMonthIs = currentMonthIs - 1;
        console.log(currentMonthIs);
        this.setState({
            currentMonth: nextMonthIs,
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <CreateYear currentYear={this.state.currentYear}/>
                <CreateMonth
                   currentMonth={this.state.currentMonth}
                   nextMonth={this.prevMonth}
                   prevMonth={this.nextMonth}
                   inItYearAndMoth={this.initYearAndMonth}
                />
                <CreateDays
                   theSelectedDay={this.state.selectedDay}
                   theCurrentYear={this.state.currentYear}
                   theCurrentMonth={this.state.currentMonth}
                />
            </div>
        );
    }
}
console.log("yajhhhy");
export default App;
