import React from 'react';
import Header from './components/Header.js';
import CreateYear from './components/CreateYear.js';
import CreateMonth from './components/CreateMonth.js';
import CreateDays from './components/CreateDays.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.initYearAndMonth = this.initYearAndMonth.bind(this);
        this.weekDays = this.weekDays.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.state = {
            currentYear: [new Date().getFullYear()],
            currentMonth: [new Date().getMonth()],
            selectedDay: [],
            dayOfWeek: []
        };
    }
    initYearAndMonth() {
        // let currentDate = new Date();
        // let year = currentDate.getFullYear();
        // let month = currentDate.getMonth();
        // this.state.currentYear.push(year);
        // this.state.currentMonth.push(month);

    }
    weekDays() {
        const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
        let text = "";
        for (var i = 0; i < weekDays.length; i++) {
            let newText = text + weekDays[i];
            this.state.dayOfWeek.push(<div className='weekDay' key={newText}>{newText}</div>);
        }
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
                {this.initYearAndMonth()}
                <CreateYear currentYear={this.state.currentYear}/>
                <CreateMonth
                   currentMonth={this.state.currentMonth}
                   nextMonth={this.prevMonth}
                   prevMonth={this.nextMonth}
                   inItYearAndMoth={this.initYearAndMonth}
                />
                {this.weekDays()}
                {this.state.dayOfWeek}
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
