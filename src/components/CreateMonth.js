
import React from 'react';
// import CreateDays from './CreateDays.js';

export default class CreateMonth extends React.Component {
    constructor() {
        super();
        this.monthsIndex = this.monthsIndex.bind(this);
    }
    monthsIndex(){
    }
    render(){
        return(
            <div className="monthContainer">
                <button onClick={() => {this.props.prevMonth(); this.props.displayMonth();}}>
                    Previous Month
                </button>
                {this.props.month}
                <button onClick={() => {this.props.nextMonth(); this.props.displayMonth();}}>
                    Next Month
                </button>
            </div>
        )
    }
}