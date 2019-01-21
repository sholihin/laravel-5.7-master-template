import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

export default class Index extends Component {
    render() {
        return (
            <NavBar/>
        );
    }
}

if (document.getElementById('reactApp')) {
    ReactDOM.render(<Index />, document.getElementById('reactApp'));
}

