import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="flex-center position-ref full-height">
                <div className="top-right links">
                        <a href="/home">Home</a>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                </div>

                <div className="content">
                    <div className="title m-b-md">
                        Laravel
                    </div>

                    <div className="links">
                        <a href="https://laravel.com/docs">Documentation</a>
                        <a href="https://laracasts.com">Laracasts</a>
                        <a href="https://laravel-news.com">News</a>
                        <a href="https://forge.laravel.com">Forge</a>
                        <a href="https://github.com/laravel/laravel">GitHub</a>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
