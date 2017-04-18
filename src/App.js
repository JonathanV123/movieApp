import React from 'react';
import Header from './components/Header.js';
import CreateMonth from './components/CreateMonth.js';

import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.renderThirtyDaysInMonth = this.renderThirtyDaysInMonth.bind(this);
        this.renderThirtyOneDaysInMonth = this.renderThirtyOneDaysInMonth.bind(this);
        this.createDaysInMonth = this.createDaysInMonth.bind(this);
        this.state = {
            monthData:[]
        };
    }
    createDaysInMonth() {
        const dayObject = {
            description: null,
            picture: null,
            key: Date.now(),
        };
    }
    renderThirtyDaysInMonth() {
        console.log("detected thirty function");
        for(let i= 0; i < 30; i++){
            this.state.dateData.push()
        }
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <CreateMonth monthInfo={this.state.monthData}/>
            </div>
        );
    }
}

export default App;
