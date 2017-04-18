import React from 'react';
import Header from './components/Header.js';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movieData:[]
        };
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <h1>Testing</h1>
            </div>
        );
    }
}

export default App;
