/**
 * Created by DT274 on 2016/10/14.
 */
import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount(){
        console.log("home componentDidMount")
    }

    componentWillUnMount(){
        console.log("Home componentWillUnMount")
    }

    render(){
        return <div>Home</div>
    }
}