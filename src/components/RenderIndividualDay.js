import React from 'react';

export default class RenderIndividualDay extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="individualDay">
                {this.props.date.getDate()}
            </div>
        )
    }
}

