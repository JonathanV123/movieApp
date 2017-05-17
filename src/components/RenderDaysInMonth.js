import React from 'react';

export default class RenderDaysInMonth extends React.Component {
    constructor() {
        super();
    }
    componentWillMount(){
        // console.log("Create Days Mounted");
        //     return this.props.Sun.map(function (date) {
        //         return <div className="dayOfWeek" key={Date.now}>
        //             </div>
        //     }, this)
    }
    render() {
        return (
            <div className="dayContainer">
                <div className="rowOfWeekNames">
                    {/*{this.renderDaysOfWeek()}*/}
                </div>
            </div>
        )
    }

    // renderDaysOfWeek() {
    //     var dayOfWeekComponents = [];
    //     for (dayName in this.props.dayNameDays) {
    //         dayOfWeekComponents.push(<DayOfWeekCollection dates={this.props.dayNameDays[dayName]} key={dayName}/>);
    //     }
    //     return dayOfWeekComponents;
    // }
}

