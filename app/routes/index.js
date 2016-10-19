/**
 * Created by DT274 on 2016/10/14.
 */
//import React from 'react';
//import { Route, IndexRoute, Redirect } from 'react-router';
//import { App, Inbox, About, Message, Dashboard } from '../containers';
//
//export default (
//    <Route path="/" component={App}>
//        <IndexRoute component={Dashboard}/>
//        <Route path="about" component={About}/>
//        <Route path="inbox" component={Inbox}>
//            <Route path="messages/:id" component={Message} />
//            <Redirect from="messages/:id" to="/messages/:id" />
//        </Route>
//    </Route>
//)


import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { App, Home, User, Profile, UserList, UserAdd, UserDetail } from '../containers';

function handleEnter(nextLocation){
    if(nextLocation){
        console.log(`页面即将切换到${nextLocation.location.pathname}`);
    }
}
function handleLeave(nextLocation){
    console.log(`handleLeave`);
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}>
            <IndexRoute component={UserList}/>
            <Route path="list" component={UserList}/>
            <Route path="add" component={UserAdd} onEnter={handleEnter} onLeave={handleLeave}/>
            <Route path="/detail/:id" component={UserDetail}/>
            <Redirect from="detail/:id" to="/detail/:id"/>
        </Route>
        <Route path="profile" component={Profile}/>
    </Route>
)


























