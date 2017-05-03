import React from 'react';

export default class CreateDays extends React.Component {
    constructor() {
        super();
        this.calendarGrid = this.calendarGrid.bind(this);
        this.state = {
            dayRender:[],
            daysOfWeek:["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],
            row:[]
        }
    }
    calendarGrid(){
        console.log("Calendar Grid Active");
        for(let i = 0; i<= 6; i++){
            console.log(this.state.daysOfWeek[i]);
            this.state.row.push(<div className="row" key={this.state.daysOfWeek[i]}>{this.state.daysOfWeek[i]}</div>)
        }
    }
    componentWillMount(){
        for(let i = 1; i < this.props.numberOfDaysInMonth + 1; i++){
            this.state.dayRender.push(<div className='day' key={[i]}>{[i]}</div>);
        }
        this.calendarGrid();
    }
    render() {
        return (
            <div className="dayContainer">
                <div className="rowOfWeekNames">
                    {this.state.row}
                    <div className="daysOfWeek"></div>
                    {this.state.dayRender}
                </div>
            </div>
        )
    }
}
console.log("ok");

