import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Leftsidemenu from '../modules/Leftsidemenu';

export class Berichte extends Component{
    render(){
        return(
            <div>
                <Leftsidemenu />
                <Header />
                    <div className="mainWrapper">
                      <div className="row no-gutters">
                        <div className="col-lg-12">
                          <div className="mainWrapperBody">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="p20 ovrvw-cur-stats">
                                  <div className="row">
                                    <div className="col-8">
                                      <ul>
                                        <li>Aktuelle Ticket-Statistik</li>
                                        <li><Link to=""  className="blue">1 <span>Offen</span></Link></li>
                                        <li><Link to=""  className="orabge">0 <span>Im Wartezustand</span></Link></li>
                                        <li><Link to=""  className="red">1 <span>Überfällig</span></Link></li>
                                        <li><Link to=""  className="grey">0 <span>Nicht zugewiesen</span></Link></li>
                                      </ul>
                                    </div>
                                    <div className="col-4">
                                      <div className="float-right mt-1">
                                        <span className=" dropdown ">
                                          <Link className="pl-0 " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            Letzte 24 Stunden <i style={{position: 'relative', left: '5px', top: '-1px'}} className="fa fa-sort-desc" />
                                          </Link>
                                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="dropMinHeight">
                                              <Link to=""  className="dropdown-item">Letzte 24 Stunden</Link>
                                              <Link to=""  className="dropdown-item">Heute</Link>
                                              <Link to=""  className="dropdown-item">Gestern</Link>
                                              <Link to=""  className="dropdown-item">Letzte 7 Tage</Link>
                                              <Link to=""  className="dropdown-item">Letzte 30 Tage</Link>
                                              <Link to=""  className="dropdown-item">Aktuelle Woche</Link>
                                              <Link to=""  className="dropdown-item">Letzte Woche</Link>
                                              <Link to=""  className="dropdown-item">Aktueller Monat</Link>
                                              <Link to=""  className="dropdown-item">Letzter Monat</Link>
                                              <Link to=""  className="dropdown-item">Benutzerdefiniert</Link>
                                            </div>
                                          </div>
                                        </span>
                                        <span className=" dropdown ">
                                          <Link className="pl-0 " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            <i style={{position: 'relative', left: '5px', top: '-1px'}} className="fa fa-ellipsis-h" />
                                          </Link>
                                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="dropMinHeight">
                                              <Link to=""  className="dropdown-item">Als CSV exportieren</Link>
                                              <Link to=""  className="dropdown-item">Als XLS exportieren</Link>
                                              <Link to=""  className="dropdown-item">Drucken</Link>
                                              <Link to=""  className="dropdown-item">Als Standard festlegen</Link>
                                              <Link to=""  className="dropdown-item">Vollbild</Link>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="p20 bg-white">
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="mb-3">
                                        <canvas id="chLine" />
                                      </div>
                                    </div>
                                    <div className="col-3">
                                      <Link className="card kpi-item" data-toggle="tooltip" data-placement="bottom" title="Zur Diagrammausblendung klicken">
                                        <div className="media">
                                          <i className="lnr lnr-checkmark-circle green" />
                                          <div className="media-body summary_cnt">
                                            <h5 className="mt-0">0</h5>
                                            <span>Neue Tickets (gesamt)</span>
                                          </div>
                                          <div className="kpi_icon">
                                            <img src="images/svg/sine-waves-green.svg" alt="sign-waves-green" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="col-3">
                                      <Link className="card kpi-item" data-toggle="tooltip" data-placement="bottom" title="Zur Diagrammausblendung klicken">
                                        <i className="lnr lnr-checkmark-circle orange" />
                                        <div className="media">
                                          <div className="media-body summary_cnt">
                                            <h5 className="mt-0">0</h5>
                                            <span>Tickets gehalten (gesamt)</span>
                                          </div>
                                          <div className="kpi_icon">
                                            <img src="images/svg/sound-waves-orange.svg" alt="sign-waves-orange" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="col-3">
                                      <Link className="card kpi-item" data-toggle="tooltip" data-placement="bottom" title="Zur Diagrammausblendung klicken">
                                        <i className="lnr lnr-checkmark-circle grey" />
                                        <div className="media">
                                          <div className="media-body summary_cnt">
                                            <h5 className="mt-0">0</h5>
                                            <span>Geschlossene Tickets (gesamt)</span>
                                          </div>
                                          <div className="kpi_icon">
                                            <img src="images/svg/sound-waves-grey.svg" alt="sign-waves-grey" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                    <div className="col-3">
                                      <Link className="card kpi-item" data-toggle="tooltip" data-placement="bottom" title="Zur Diagrammausblendung klicken">
                                        <i className="lnr lnr-checkmark-circle red" />
                                        <div className="media">
                                          <div className="media-body summary_cnt">
                                            <h5 className="mt-0">1</h5>
                                            <span>Rückstand (Durchschnitt)</span>
                                          </div>
                                          <div className="kpi_icon">
                                            <img src="images/svg/sound-waves-red.svg" alt="sign-waves-red" />
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="p20">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="card dash_min_height">
                                        <div className="card-header">
                                          Trafficanalyse 
                                        </div>
                                        <div className="card-body">
                                          <div className="rprogress mx-auto" data-value={0}>
                                            <span className="progress-left">
                                              <span className="progress-bar border-primary" />
                                            </span>
                                            <span className="progress-right">
                                              <span className="progress-bar border-primary" />
                                            </span>
                                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                              0 Tickets
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="card dash_min_height">
                                        <div className="card-header">
                                          Durchschnittliche Ticket-Reaktionszeit
                                        </div>
                                        <div className="card-body">
                                          <div className="horiPercent">
                                            <div className="form-group">
                                              <label>Erstreaktionszeit <span>00:00</span></label>
                                              <div className="progress progress-bar-horizontal">
                                                <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={100} aria-valuemax={100} style={{width: '0%'}}>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label>Reaktionszeit <span>00:00</span></label>
                                              <div className="progress progress-bar-horizontal">
                                                <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}}>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label>Lösungszeit <span>00:00</span></label>
                                              <div className="progress progress-bar-horizontal">
                                                <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}}>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="form-group mt-4">
                                              <ul className="inlineRslt text-center">
                                                <li>0</li>
                                                <li><i className="lnr lnr-chevron-left" /> <span /> <i className="lnr lnr-chevron-right" /></li>
                                                <li>10</li>
                                                <div className="text-center">Stunden</div>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-4">
                                      <div className="card dash_min_height">
                                        <div className="card-header">
                                          Zufriedenheitsbewertung
                                        </div>
                                        <div className="card-body">
                                          <div className="verPercent">
                                            <div className="progress progress-bar-vertical">
                                              <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                              </div>
                                            </div>
                                            <div className="progress progress-bar-vertical">
                                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                              </div>
                                            </div>
                                            <div className="progress progress-bar-vertical">
                                              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="clboth" />
                                          <ul className="quality-progress">
                                            <li><span className="prog-box good" />0% Good(0)</li>
                                            <li><span className="prog-box okay" />0% Okay(0)</li>
                                            <li><span className="prog-box bad" />0% Bad(0)</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                <Footer />
            </div>
        )
    }

}
export default Berichte
