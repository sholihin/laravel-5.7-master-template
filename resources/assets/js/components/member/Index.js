import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

if (document.getElementById('reactApp')) {
    ReactDOM.render(<Index />, document.getElementById('reactApp'));
}
