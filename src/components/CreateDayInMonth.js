
import React from 'react';

export default class CreateDayInMonth extends React.Component {
    constructor() {
        super();
        this.createDay = this.createDay.bind(this);

        this.state = {
            day: true
        }
    }
    createDay(){
        const dayObject = {
            description: null,
            picture: null,
            key: Date.now(),
        };
    this.createDay();
    }
}