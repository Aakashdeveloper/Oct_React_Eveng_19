import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import PostsDetails from './PostDetails';
import LifeCycle from './lifecycle'
import Hooks from './ReactHooks';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">React App</a>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/posts">Posts</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/lifecycle">LifeCycle</Link></li>
                                <li><Link to="/hooks">Hooks</Link></li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/posts" component={Posts}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/posts/:topic" component={PostsDetails}></Route>
                    <Route path="/lifecycle" component={LifeCycle}></Route>
                    <Route path="/hooks" component={Hooks}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing;