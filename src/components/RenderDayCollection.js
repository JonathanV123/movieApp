import React from 'react';
import RenderIndividualDay from './RenderIndividualDay.js';

export default class RenderDayCollection extends React.Component {
    constructor() {
        super();
        this.renderIndividualDay = this.renderIndividualDay.bind(this);
        this.hasMatchingDate = this.hasMatchingDate.bind(this);
        this.renderDays = this.renderDays.bind(this);
    }

    renderIndividualDay() {
        var individualDayComponents = [];
        let daysOfWeek = this.props.dates;
        for (let dayNum in daysOfWeek) {
            let currentIterationDate = daysOfWeek[dayNum];
            let moviesReleasedOnCurrentIterationDate = this.props.movieData.filter((movie) => {
                let removeDashes = movie.release_date.replace(/-/g, "/");
                let releaseDate = new Date(removeDashes);
                return this.hasMatchingDate(releaseDate, currentIterationDate)
            });
            individualDayComponents.push(
                <RenderIndividualDay
                    date={currentIterationDate} key={Math.random()}
                    movieData={moviesReleasedOnCurrentIterationDate}
                    onMovieClick={this.props.onMovieClick}
                    multipleMovieModal={this.props.multipleMovieModal}
                />
            );
        }
        return individualDayComponents;
    }

    hasMatchingDate(date1, date2) {
        // reset dates to midnight and make utc to avoid timezone bugs
        return date1.getYear() === date2.getYear()
            && date1.getMonth() === date2.getMonth()
            && date1.getDate() === date2.getDate()
    }
    renderDays(){
        console.log(this.props.date);
    }
    render() {
        return (
            <div className="collectionOfDays">
                <span className="dayOfWeekName">{this.props.name}</span>
                {this.renderIndividualDay()}
            </div>
        )
    }
}

