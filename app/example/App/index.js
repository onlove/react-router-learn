/**
 * Created by DT274 on 2016/10/19.
 */
//hashHistory
//import React, { Component } from 'react';
//import { Router, Route, hashHistory, Link } from 'react-router';
//
//const Home = () => <div><Links /><h1>Home</h1></div>
//const About = () => <div><Links /> <h1>About</h1></div>
//const Contact = () => <div><Links /> <h1>Contact</h1></div>
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={hashHistory}>
//                <Route path="/" component={Home}/>
//                <Route path="/about" component={About}/>
//                <Route path="/contact" component={Contact}/>
//            </Router>
//        )
//    }
//}
//
//const Links = () =>
//    <nav>
//        <Link to="/">Home </Link>
//        <Link to="/about">about </Link>
//        <Link to="/contact">contact </Link>
//    </nav>
//
//export default App


//browserHistory activeStyle activeClassName
//import React, { Component } from 'react';
//import { Router, Route, Link, browserHistory } from 'react-router';
//import './index.css';
//
//const Home = () => <div><Links /> <h1>Home</h1></div>
//const About = () => <div><Links /> <h1>About</h1></div>
//const Contact = () => <div><Links /> <h1>Contact</h1></div>
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Home}/>
//                <Route path="/about" component={About}/>
//                <Route path="/contact" component={Contact}/>
//            </Router>
//        )
//    }
//}
//
//const Links = () =>
//    <nav>
//        <Link activeClassName="active" to="/">Home </Link>
//        <Link activeClassName="active" to="/about">about </Link>
//        <Link activeClassName="active" to="/contact">contact </Link>
//    </nav>
//
//export default App




//路由的嵌套
//import React, { Component } from 'react';
//import { Router, Route, Link, browserHistory } from 'react-router';
//import './index.css';
//
//
//const Home = (props) =>
//    <div>
//        <Links />
//        <h1>Home</h1>
//        {props.children}
//    </div>
//
//const About = (props) =>
//    <div>
//        <h1>About</h1>
//        {props.children}
//    </div>
//
//const Contact = (props) =>
//    <div>
//        <h1>Contact</h1>
//    </div>
//
//const Links = () =>
//    <nav>
//        <Link activeClassName="active" to="/">Home</Link>
//        <Link activeClassName="active" to="/about">About</Link>
//        <Link activeClassName="active" to="/about/contact">Contact</Link>
//    </nav>
//
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Home}>
//                    <Route path="about" component={About}>
//                        <Route path="contact" component={Contact}/>
//                    </Route>
//                </Route>
//            </Router>
//        )
//    }
//}
//
//export default App;





//IndexRoute 初始页面
//import React, { Component } from 'react';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//
//import './index.css';
//
//const Home = (props) =>
//    <div>
//        <Links />
//        <h1>Home</h1>
//        {props.children}
//    </div>
//
//
//const About = (props) =>
//    <div>
//        <h1>About</h1>
//    </div>
//
//const Contact = (props) =>
//    <div>
//        <h1>Contact</h1>
//    </div>
//
//const Links = () =>
//    <nav>
//        <Link activeClassName="active" to='/'>Home</Link>
//        <Link activeClassName="active" to='/contact'>contact</Link>
//    </nav>
//
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Home}>
//                    <IndexRoute component={About}/>
//                    <Route path="contact" component={Contact}/>
//                </Route>
//            </Router>
//        )
//    }
//}
//
//export default App







//路由变量
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import './index.css';

class Message extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.params.message || 'hello'}</h1>
                <Links />
            </div>
        )
    }
}

const Links = () =>
    <nav>
        <Link to='/'>Hello</Link>
        <Link to='/yong'>Yong</Link>
        <Link to='/feng'>Fong</Link>
    </nav>


class App extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/(:message)" component={Message} />
            </Router>
        )
    }
}

export default App;































