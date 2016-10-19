/**
 * Created by DT274 on 2016/10/14.
 */
import React { Component } from 'react';

export default class Home extends Component {
    componentDidMount(){
        console.log("Home componentDidMount")
    }

    componentWillUnmount(){
        console.log("Home componentWillUnmount");
    }

    render(){
        return (
            <div>Home</div>
        )
    }
}