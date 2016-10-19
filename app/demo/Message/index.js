
/**
 * Created by DT274 on 2016/10/14.
 */
import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <h3>Message {this.props.parmas.id}</h3>
    }
}