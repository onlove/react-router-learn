/**
 * Created by DT274 on 2016/10/14.
 */
import React, { Component } from 'react';
import $ from 'jquery';

export default class UserDetail extends Component {
    constructor(props){
        super(props);
        this.state = { name: "" };
        $.get('/users.json').then((data) => {
            var id = this.props.params.id;
            this.setState({name: data[id] ? data[id].name : "" });
        })
    }

    render(){
        return <div>{this.state.name}</div>
    }
}