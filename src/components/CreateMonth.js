
import React from 'react';
import CreateDayInMonth from './CreateDayInMonth.js'
export default class CreateMonth extends React.Component {
    constructor() {
        super();
        this.renderMonth = this.renderMonth.bind(this);

        this.state = {
            month: null
        }
    }
    renderMonth() {

    }
    render(){
        return(
            <div className="blah">
                <CreateDayInMonth />
            </div>
        )
    }
}