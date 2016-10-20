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
//import React, { Component } from 'react';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//
//import './index.css';
//
//class Message extends Component {
//    render(){
//        console.log(this.props)
//        return (
//            <div>
//                <h1>{this.props.params.message || 'hello'}</h1>
//                <Links />
//            </div>
//        )
//    }
//}
//
//const Links = () =>
//    <nav>
//        <Link to='/'>Hello</Link>
//        <Link to='/yong'>Yong</Link>
//        <Link to='/feng'>Fong</Link>
//    </nav>
//
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/(:message)" component={Message} />
//            </Router>
//        )
//    }
//}
//
//export default App;





//Route中components参数的高级用法
//import React, { Component } from 'react';
//import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
//
//import './index.css';
//
//const HomeHeader = () => <h1>HomeHeader</h1>
//const HomeBody = () => <h1>HomeBody</h1>
//const AboutHeader = () => <h1>AboutHeader</h1>
//const AboutBody = () => <h1>AboutBody</h1>
//
//const Container = (props) =>
//    <div>
//        <Links />
//        {props.header}
//        {props.body}
//    </div>
//
//
//const Links = () =>
//    <nav>
//        <Link to="/">Hello</Link>
//        <Link to="/about">About</Link>
//    </nav>
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Container}>
//                    <IndexRoute components={{header:HomeHeader, body:HomeBody}}/>
//                    <Route path="about" components={{header:AboutHeader, body:AboutBody}}/>
//                </Route>
//            </Router>
//        )
//    }
//}
//
//export default App;






//使用query获取url中的参数
//import React, { Component } from 'react';
//import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
//
//import './index.css';
//
//const Page = (props) =>
//    <div>
//        <h1>{props.location.query.message || 'hello'}</h1>
//        <h1>{props.location.query.value || 'React-Router'}</h1>
//    </div>
//
////?message=dsadsa&value=222
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Page} />
//            </Router>
//        )
//    }
//}
//
//export default App;

//另外，可以在Link组件中设置pathname和query变量
//import React, { Component } from 'react';
//import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
//
//import './index.css';
//
//const Page = (props) =>
//    <div>
//        <h1>{props.location.query.message || 'hello'}</h1>
//        <h1>{props.location.query.value || 'React-Router'}</h1>
//        <Links />
//    </div>
//
//const Links = () =>
//    <nav>
//        <Link to={{pathname: '/', query: {message: 'onve', value:'ddd'}}}>链接</Link>
//    </nav>
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Page}/>
//            </Router>
//        )
//    }
//}
//
//export default App;






//重定向 Redirect
//import React, { Component } from 'react';
//import { Router, Route, IndexRoute, Link, browserHistory, Redirect } from 'react-router';
//
//const Home = () => <div><h1>Home</h1><Links /></div>
//const About = () => <div><h1>About</h1><Links /></div>
//const Contact = () => <div><h1>Contact</h1><Links /></div>
//
//const Links = () =>
//    <nav>
//        <Link to="/">Home</Link>
//        <Link to="/about"> About</Link>
//        <Link to="/contact"> Contact</Link>
//        <Link to="/contact-us"> Contact us</Link>
//    </nav>
//
//class App extends Component {
//    render(){
//        return (
//            <Router history={browserHistory}>
//                <Route path="/" component={Home}/>
//                <Route path="/about" component={About}/>
//                <Route path="/contact-us" component={Contact}/>
//                <Redirect from="/contact" to="/contact-us"/>
//            </Router>
//        )
//    }
//}
//
//export default App;




//setRouteLeaveHook路由钩子函数：处理路由切换时的操作
import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

class Home extends Component {
    componentWillMount(){
        console.log(this)
        this.context.router.setRouteLeaveHook(
            this.props.route,
            //hook触发时，做的事情
            this.routerWillLeave
        )
    }

    routerWillLeave(nextLocation){
        //转场动画
        console.log(nextLocation)
        return `页面即将切换到${nextLocation.pathname}`
    }

    handleClick() {
        this.context.router.push('/aa');
    }

    render(){
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this)}>Home</h1>
                <Links />
            </div>
        )
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
}

const Contact = () => <div><h1>Contact</h1><Links /></div>
const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </nav>

class App extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
            </Router>
        )
    }
}

export default App;













