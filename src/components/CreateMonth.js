
import React from 'react';
// import CreateDays from './CreateDays.js';

export default class CreateMonth extends React.Component {
    render(){
        return(
            <div className="monthContainer">
                <button onClick={this.props.prevMonth}>
                    Previous Month
                </button>
                {this.props.currentMonth}
                <button onClick={this.props.nextMonth}>
                    Next Month
                </button>
            </div>
        )
    }
}