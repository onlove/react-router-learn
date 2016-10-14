/**
 * Created by DT274 on 2016/10/14.
 */
/**
 * Created by DT274 on 2016/10/14.
 */
import React, { Component } from 'react';

export default class Inbox extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "welcome to your Inbox"}
            </div>
        )
    }
}