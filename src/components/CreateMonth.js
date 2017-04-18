
import React from 'react';
import CreateDayInMonth from './CreateDayInMonth'
import Jan from './components/Jan.js';
import Feb from './components/Feb.js';
import March from './components/March.js';
import April from './components/April.js';
import May from './components/May.js';
import June from './components/June.js';
import July from './components/July.js';
import August from './components/August.js';
import Sept from './components/Sept.js';
import Oct from './components/Oct.js';
import Nov from './components/Nov.js';
import Dec from './components/Dec.js';
{/*<Jan renderDaysJan={this.renderThirtyOneDaysInMonth}/>*/}
{/*<Feb/>*/}
{/*<March renderDaysMar={this.renderThirtyOneDaysInMonth}/>*/}
{/*<April renderDaysApril={this.renderThirtyDaysInMonth}/>*/}
{/*<May renderDaysMay={this.renderThirtyOneDaysInMonth}/>*/}
{/*<June renderDaysApril={this.renderThirtyDaysInMonth}/>*/}
{/*<July renderDaysJul={this.renderThirtyOneDaysInMonth}/>*/}
{/*<August renderDaysAug={this.renderThirtyOneDaysInMonth}/>*/}
{/*<Sept renderDaysApril={this.renderThirtyDaysInMonth}/>*/}
{/*<Oct renderDaysOct={this.renderThirtyOneDaysInMonth}/>*/}
{/*<Nov renderDaysApril={this.renderThirtyDaysInMonth}/>*/}
{/*<Dec renderDaysDec={this.renderThirtyOneDaysInMonth}/>*/}
export default class CreateMonth extends React.Component {
    constructor() {
        super();
        this.renderMonth = this.renderMonth.bind(this);

        this.state = {
            day: null
        }
    }
    renderMonth() {

    }

}