/**
 * Created by DT274 on 2016/10/14.
 */
//事例
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';


var root = document.getElementById("app");

render(
    <Router routes={routes} history={browserHistory}/>,
    root
)