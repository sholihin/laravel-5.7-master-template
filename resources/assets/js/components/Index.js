import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Footer/>
            </div>
        );
    }
}

if (document.getElementById('reactApp')) {
    ReactDOM.render(<Index />, document.getElementById('reactApp'));
}