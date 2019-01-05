import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div style={{ marginTop: `150px` }}>
                <div className="navbar navbar-dark navbar-expand bg-light d-flex flex-column flex-md-row justify-content-between p-3 px-md-4 border-bottom shadow-sm">
                    <div className="container">
                        <div className="navbar-header">
                            <h5>
                                <small className="text-muted">Copyright RHTCenter.</small>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}