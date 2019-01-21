import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Login from './Login';
import About from './About';
import Error404 from './Error404';

export default class Index extends Component {
    render() {
        return (
            <Router>
                 <div> {/* harus ada untuk Router */}
                    <div className="navbar navbar-dark fixed-top bg-success d-flex justify-content-center p-3 border-bottom shadow-sm">
                        <div className="container">
                            <h5 className="my-0 mr-md-auto font-weight-normal text-light h3"><Link to="/" className="navbar-brand font-weight-bold">RHT CENTER</Link></h5>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="p-2 text-light" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="p-2 text-light" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="p-2 text-light" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="btn btn-outline-light text-light" to="/signup">Sign Up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" style={{ marginTop: `150px` }}>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/signup" component={Login}/>
                            <Route exact path="/*" component={Error404}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('reactApp')) {
    ReactDOM.render(<Index />, document.getElementById('reactApp'));
}

