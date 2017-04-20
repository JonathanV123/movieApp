
import React from 'react';
// import CreateDays from './CreateDays.js';

export default class CreateMonth extends React.Component {
    constructor() {
        super();
        this.renderMonth = this.renderMonth.bind(this);
        this.state = {
            month: null
        }
    }
    renderMonth() {
        // return this.props.movie.map(function (film) {
        //     return <CreateDays
        //         key={film.key}
        //         description={film.description}
        //         picture={film.picture}
        //     />
        // }, this)
    }

    render(){
        return(
            <div className="monthContainer">
                {this.props.currentMonth}
            </div>
        )
    }
}