import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,indexRoute, hashHistory } from 'react-router'
import App from './App';
import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>

    </Router>, app);