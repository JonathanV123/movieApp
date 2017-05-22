import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
        this.renderTitle.bind(this);
    }
    renderTitle(){
        if(this.props.movieData.length > 0){
            return this.props.movieData[0].title;
        }
    }
    render() {
        return (
            <div className="individualDay">
                {this.props.date.getDate()}
                {this.renderTitle()}
            </div>
        )
    }
}

