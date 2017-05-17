import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
    }
    componentWillMount(){
        console.log("Create Days Mounted");
        return this.props.Sun.map(function (date) {
            return <div className="dayOfWeek" key={Date.now}>
            </div>
        }, this)
    }
    render() {
        return (
            <div class ="day"></div>
        )
    }
}

