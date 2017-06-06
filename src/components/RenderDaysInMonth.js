import React from 'react';
import RenderDayCollection from './RenderDayCollection.js';

export default class RenderDaysInMonth extends React.Component {
    constructor() {
        super();
        this.renderDaysOfWeek = this.renderDaysOfWeek.bind(this);
    }

    render() {
        return (
            <div className="monthContainer">
                {this.renderDaysOfWeek()}
            </div>
        )
    }

    renderDaysOfWeek() {
        var dayOfWeekComponents = [];
        let daysOfWeek = this.props.dayNameDays;
        for (let dayName in daysOfWeek) {
            dayOfWeekComponents.push(
                <RenderDayCollection
                    dates={this.props.dayNameDays[dayName]}
                    key={dayName}
                    movieData={this.props.movieData}
                    onMovieClick={this.props.onMovieClick}
                />);
        }
        return dayOfWeekComponents;
    }
}

