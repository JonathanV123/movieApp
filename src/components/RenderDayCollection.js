import React from 'react';
import RenderIndividualDay from './RenderIndividualDay.js';

export default class RenderDayCollection extends React.Component {
    constructor() {
        super();
        this.renderIndividualDay = this.renderIndividualDay.bind(this);
        this.hasMatchingDate = this.hasMatchingDate.bind(this);
    }
    renderIndividualDay(){
        var individualDayComponents = [];
        let daysOfWeek = this.props.dates;
        for (let dayNum in daysOfWeek) {
            let currentIterationDate = daysOfWeek[dayNum];
            let moviesReleasedOnCurrentIterationDate = this.props.movieData.filter((movie)=>{
                let releaseDate = new Date(movie.release_date);
                return this.hasMatchingDate(releaseDate,currentIterationDate)
            });
            console.log(this.props.movieData);
            individualDayComponents.push(<RenderIndividualDay date={currentIterationDate} key={Math.random()} movieData={moviesReleasedOnCurrentIterationDate}/>);
        }
        return individualDayComponents;
    }
    hasMatchingDate(date1,date2){
        // reset dates to midnight and make utc to avoid timezone bugs
        return date1.getYear() === date2.getYear()
            && date1.getMonth() === date2.getMonth()
            && date1.getDate() === date2.getDate()
    }
    render() {
        return (
            <div className="collectionOfDays">
                {this.renderIndividualDay()}
            </div>
        )
    }
}

