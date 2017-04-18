import React from 'react';

export default class Jan extends React.Component {
    render() {
        return (
            <div id="testing">
                <p>Hello Jan</p>
                {this.props.renderDaysJan()}
            </div>
        )
    }
}
