
import React from 'react';

export default class SwitchMonthButtons extends React.Component {
    constructor() {
        super();
        this.monthsIndex = this.monthsIndex.bind(this);
    }
    monthsIndex(){
    }
    render(){
        return(
            <div className="buttonAndMonthNameContainer">
                <button onClick={() => {this.props.prevMonth(); this.props.displayMonth();}}>
                    Previous Month
                </button>
                <div className ="currentlySelectedMonth">
                    {this.props.monthName}
                </div>
                <button onClick={() => {this.props.nextMonth(); this.props.displayMonth();}}>
                    Next Month
                </button>
            </div>
        )
    }
}