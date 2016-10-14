/**
 * Created by DT274 on 2016/10/14.
 */
import React, { Component } from 'react';
import { Link } from  'react-router';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
            <h1>App</h1>
            <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            {this.props.children}
    </div>
    )

    }
}