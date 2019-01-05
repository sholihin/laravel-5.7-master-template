import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Login from './Login';
import Error404 from './Error404';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navbar navbar-dark navbar-expand fixed-top bg-success d-flex flex-column flex-md-row justify-content-between p-3 px-md-4 border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal text-light h3"><Link to="/" className="navbar-brand font-weight-bold">RHT CENTER</Link></h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-light" to="/">Home</Link>
                            <Link className="p-2 text-light" to="/profile">Profile</Link>
                            <Link className="p-2 text-light" to="/about">About</Link>
                        </nav>
                        <Link className="btn btn-outline-light text-light" to="/signup">Sign Up</Link>
                    </div>
                    <div className="container-fluid" style={{ marginTop: `150px` }}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact url="/signin" component={Login}/>
                            <Route exact path="/*" component={Error404}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}