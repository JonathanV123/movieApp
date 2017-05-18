import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
        // this.dayInfo = this.dayInfo.bind(this);
    }
    // dayInfo(){
    //     console.log("DayInfo Initiated");
    //     var dayDiv=[];
    //     let date= this.props.date;
    //     dayDiv.push(<div className="dayz">{date}</div>)
    // }
    render() {
        return (
            <div className="individualDay">
                {this.props.date.getDate()}
            </div>
        )
    }
}

