import React from 'react';
import Header from './components/Header.js';
import CreateYear from './components/CreateYear.js';
import CreateMonth from './components/CreateMonth.js';
import CreateDays from './components/CreateDays.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.getDates = this.getDates.bind(this);
        this.renderYearAndMonth = this.renderYearAndMonth.bind(this);
        this.state = {
            currentYear: [],
            currentMonth: [],
            selectedDay: [],
        };
    }

    getDates() {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        let day = currentDate.getDate();
        this.renderYearAndMonth(year, month)
    }

    renderYearAndMonth(year, month) {
        this.state.currentYear.push(year);
        this.state.currentMonth.push(month);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.getDates()}
                <CreateYear currentYear={this.state.currentYear}/>
                <CreateMonth currentMonth={this.state.currentMonth}/>
                <CreateDays
                    selectedDay={this.state.selectedDay}
                    currentYear={this.state.currentYear}
                    currentMonth={this.state.currentMonth}
                />
            </div>
        );
    }
}
console.log("yay");
export default App;
