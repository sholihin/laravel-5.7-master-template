import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                    <div className="card-header bg-light">
                        <h4 className="my-0 font-weight-normal">RHT Member</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="card-title pricing-card-title"><small className="text-muted">Tn. </small>Mohamad Sholihin</h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li><h4><b>RHT21201</b></h4></li>
                                    <li></li>
                                    <li>Ciomas</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6"><img src="https://uploads.toptal.io/user/photo/241808/large_5a6c56416dcbeec06cc3d14546ab8f79.jpg" className="img-thumbnail" /></div>
                            <div className="col-md-6"><img src="https://uploads.toptal.io/user/photo/241808/large_5a6c56416dcbeec06cc3d14546ab8f79.jpg" className="img-thumbnail" /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}