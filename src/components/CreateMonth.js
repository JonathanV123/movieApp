
import React from 'react';
// import CreateDays from './CreateDays.js';

export default class CreateMonth extends React.Component {
    constructor() {
        super();
        this.state = {
            month: null
        }
    }
    render(){
        return(
            <div className="monthContainer">
                <button onClick={(e) =>this.props.prevMonth(e)}>
                    Previous Month
                </button>
                {this.props.currentMonth}
                <button onClick={ (e) =>this.props.nextMonth(e)}>
                    Next Month
                </button>
            </div>
        )
    }
}