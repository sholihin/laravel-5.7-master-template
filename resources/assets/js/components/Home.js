import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center mb-2">
                        <h1 className="display-4">RHT Center</h1>
                        <h3>Sehat sunnah.</h3>
                    </div>
                    
                    <div className="row">
                        <div className="card-deck mb-3 text-center ml-md-auto col">
                            <div className="card mb-4 box-shadow">
                                <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Terapi Mastakaraga</h4>
                                </div>
                                <div className="card-body">
                                <h1 className="card-title pricing-card-title">Rp. 100.000<small className="text-muted"></small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Totok Syaraf</li>
                                    <li>Totok Lemak</li>
                                    <li>Terapi Keperkasaan</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Informasi Lebih Lengkap</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-deck mb-3 text-center col">
                            <div className="card mb-4 box-shadow">
                                <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Terapi Bekam</h4>
                                </div>
                                <div className="card-body">
                                <h1 className="card-title pricing-card-title">Rp. 60.000<small className="text-muted">/ 9 titik</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Bekam Area Punggung</li>
                                    <li>Bekam Area Tangan</li>
                                    <li>Bekam Area Kaki</li>
                                    <li>Bekam Area Keperkasaan</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Informasi Lebih Lengkap</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-deck mb-3 text-center col">
                            <div className="card mb-4 box-shadow">
                                <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Terapi Al-Fasdhu</h4>
                                </div>
                                <div className="card-body">
                                <h1 className="card-title pricing-card-title">Rp. 100.000 <small className="text-muted">/ jarum</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Fasdhu Area Tangan</li>
                                    <li>Fasdhu Area Kaki</li>
                                </ul>
                                    <button type="button" className="btn btn-lg btn-bottom btn-block btn-outline-primary align-item-end">Informasi Lebih Lengkap</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}