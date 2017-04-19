import React from 'react';
import Header from './components/Header.js';
import CreateMonth from './components/CreateMonth.js';

import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monthData:[]
        };
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
