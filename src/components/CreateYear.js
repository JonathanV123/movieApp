
import React from 'react';

export default class CreateYear extends React.Component {
    constructor() {
        super();
        this.renderYear = this.renderYear.bind(this);
        this.grabYear = this.grabYear.bind(this);
        this.state = {
            month: null
        }
    }
    grabYear(){

    }
    renderYear() {
        // return this.props.movieInfo.map(function (movie) {
        //     return <CreateMonth
        //         key={movie.key}
        //         theMonth={movie.date}
        //         description={movie.description}
        //         picture={movie.picture}
        //     />
        // }, this)
    }


    render(){
        return(
            <div className="year">
                {this.props.currentYear}
            </div>
        )
    }
}