import React from 'react';
import Header from './components/Header.js';
import Jan from './components/Jan.js';
import Feb from './components/Feb.js';
import March from './components/March.js';
import April from './components/April.js';
import May from './components/May.js';
import June from './components/June.js';
import July from './components/July.js';
import August from './components/August.js';
import Sept from './components/Sept.js';
import Oct from './components/Oct.js';
import Nov from './components/Nov.js';
import Dec from './components/Dec.js';

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
                <Jan/>
                <Feb/>
                <March/>
                <April/>
                <May/>
                <June/>
                <July/>
                <August/>
                <Sept/>
                <Oct/>
                <Nov/>
                <Dec/>
            </div>
        );
    }
}

export default App;
