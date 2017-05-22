import React from 'react';
import RenderIndividualDay from './RenderIndividualDay.js';

export default class RenderDayCollection extends React.Component {
    constructor() {
        super();
        this.renderIndividualDay = this.renderIndividualDay.bind(this);
    }
    renderIndividualDay(){
        var individualDayComponents = [];
        let daysOfWeek = this.props.dates;
        console.log(daysOfWeek);
        for (let date in daysOfWeek) {
            individualDayComponents.push(<RenderIndividualDay date={daysOfWeek[date]} key={Math.random()} movieData={this.props.movieData}/>);
            console.log(daysOfWeek[date]);
        }
        return individualDayComponents;
    }
    render() {
        return (
            <div className="collectionOfDays">
                {this.renderIndividualDay()}
            </div>
        )
    }
}

