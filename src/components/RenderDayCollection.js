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
            individualDayComponents.push(<RenderIndividualDay dates={daysOfWeek[date]} key={Math.random()}/>);
            console.log(daysOfWeek[date]);
        }
        return individualDayComponents;
    }
    render() {
        return (
            <div className="day">
                {this.renderIndividualDay()}
            </div>
        )
    }
}

