import React from 'react';

export default class SwitchMonthButtons extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="buttonAndMonthNameContainer">
                <div className="titleContainer">
                    <div className="title">
                        Movie Calendar
                    </div>
                    <div className="titleDesc">
                        The biggest releases in film.
                    </div>
                    <div>
                        <p className="moreInfo">Select a movie for more information</p>
                    </div>
                </div>
                <div className="buttonMonthContainer">
                    <button className="leftMonthButton" onClick={() => {
                        this.props.nextMonth()
                    }}>
                    </button>
                    <div className="currentlySelectedMonth">
                        {this.props.monthName}
                    </div>
                    <button className="rightMonthButton" onClick={() => {
                        this.props.prevMonth()
                    }}>
                    </button>
                </div>
            </div>
        )
    }
}