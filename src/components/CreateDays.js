import React from 'react';

export default class CreateDays extends React.Component {
    constructor() {
        super();
        this.daysInMonth = this.daysInMonth.bind(this);
        this.renderDaysInMonth = this.renderDaysInMonth.bind(this);
        this.state = {
            dayData: [],
            dayRender:[]
        }
    }

    daysInMonth(month,year) {
        this.state.dayData.push(new Date(year, month, 0).getDate());
    }
    renderDaysInMonth(amt){
        for(var i = 1; i < amt; i++){
            this.state.dayRender.push(<div className='day' key={i}>{[i]}</div>);
        }
    }
    render() {
        return (
            <div className="dayContainer">
                {this.daysInMonth(this.props.currentMonth,this.props.currentYear)}
                {this.renderDaysInMonth(this.state.dayData)}
                {this.state.dayRender}
            </div>
        )
    }
}
