import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Historical from './Historical';
import Error404 from './Error404';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="navbar navbar-dark bg-success d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal text-light">RHT CENTER</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-light" to="/">Home</Link>
                            <Link className="p-2 text-light" to="/profile">Profile</Link>
                            <Link className="p-2 text-light" to="/historical">Historical</Link>
                        </nav>
                        <Link className="btn btn-outline-light text-light" to="/signout">Sign Out</Link>
                    </div>
                    <div className="container mt-3">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/historical" component={Historical}/>
                            <Route exact path="/*" component={Error404}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}