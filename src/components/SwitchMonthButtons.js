
import React from 'react';

export default class SwitchMonthButtons extends React.Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className="buttonAndMonthNameContainer">
                <div className="titleContainer">
                    <div className="title">
                        Movie Calendar
                    </div>
                    <div className="titleDesc">
                        The biggest releases in film.
                    </div>
                </div>
                <button onClick={() => {this.props.prevMonth(); this.props.displayMonth();}}>
                    Previous Month
                </button>
                <div className="currentlySelectedMonth">
                    {this.props.monthName}
                </div>
                <button onClick={() => {this.props.nextMonth(); this.props.displayMonth();}}>
                    Next Month
                </button>
            </div>
        )
    }
}