import React from 'react';

export default class CreateDayInWeek extends React.Component {
    constructor() {
        super();
        this.createDay = this.createDay.bind(this);
        // this.createDay = this.createDay.bind(this);
        this.state = {
            dayData: []
        }
    }
    createDay(){
        const dayObject = {
            description: null,
            picture: null,
            key: Date.now(),
        };
        for(let i= 0; i < 30; i++){
            this.state.monthData.push(dayObject)
        }
    }
    render() {
        return (
            <div className="ok">
            </div>
        )
    }
}
