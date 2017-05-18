import React from 'react';
import RenderDayCollection from './RenderDayCollection.js';

export default class RenderDaysInMonth extends React.Component {
    constructor() {
        super();
        this.renderDaysOfWeek = this.renderDaysOfWeek.bind(this);
    }
    render() {
        return (
            <div className="dayContainer">
                <div className="rowOfWeekNames">
                    {this.renderDaysOfWeek()}
                </div>
            </div>
        )
    }

    renderDaysOfWeek() {
        var dayOfWeekComponents = [];
        let daysOfWeek = this.props.dayNameDays;
        for (let dayName in daysOfWeek) {
            dayOfWeekComponents.push(<RenderDayCollection dates={this.props.dayNameDays[dayName]} key={dayName}/>);
        }
        return dayOfWeekComponents;
    }
}

