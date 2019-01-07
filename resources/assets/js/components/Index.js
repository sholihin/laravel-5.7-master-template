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
                <div> //harus ada untuk Router
                    <div className="navbar navbar-dark fixed-top bg-success d-flex justify-content-center p-3 border-bottom shadow-sm">
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

