/**
 * Created by DT274 on 2016/10/14.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log("app componentDidMount")
    }

    componentWillReceiveProp(){
        console.log("app componentWillReceiveProp")
    }

    componentDidUpdate(){
        console.log("app componentDidUpdate")
    }

    render(){
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div>
                            <ul className="nav navbar-nav">
                                <li><Link activeStyle={{color:'red'}} to="/home" >首页</Link></li>
                                <li><Link activeStyle={{color:'red'}}  to="/user" >用户管理</Link></li>
                                <li><Link activeStyle={{color:'red'}}  to="/profile" >个人设置</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}