
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