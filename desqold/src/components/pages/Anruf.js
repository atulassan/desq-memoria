import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

export class Anruf extends Component{
    render(){
        return(
            <div>
                <Header />
                	<div className="mainWrapper pl-0">
					  	<div className="row no-gutters">
						    <div className="col-lg-12">
						      	<div className="mainWrapperBody">
							        <div className="row no-gutters">
							          	<div className="col-lg-9">
								            <div className="addTicketForm">
								              <div className="form-page">
								                  <div className="addTicketFormpPadding overflowScroll">
								                    <div className="row">
								                      <div className="col-lg-7">
								                        <div className="row">
								                          <div className="col-lg-12 col-md-12 mb-3">
								                            <div className="ix-anruf-icon" />
								                            <div className=" ix-formheader-innerContainer">
								                              <h3>Anruf hinzufügen</h3>
								                            </div>
								                          </div>
								                          <div className="col-lg-12 col-md-12 ">
								                            <div className="form-group">
								                              <h2>Anruf-Informationen</h2>
								                            </div>
								                          </div>
								                          <div className="col-lg-12 col-md-12">
								                            <div className="form-group">
								                              <label className="label-red">Betreff</label>
								                              <input type="text" className="form-control" placeholder defaultValue />
								                            </div>
								                          </div>
								                          <div className="col-lg-12 col-md-12">
								                            <div className="form-group">
								                              <label>Richtung</label>
								                              <div className="mt-4 mb-4">
								                                <label className="ix-radiobox-label mr-4">
								                                  <input type="radio" className="ix-radiobox" name="Richtung" defaultChecked /><mark className="mr-2" /> Eingehend
								                                </label>
								                                <label className="ix-radiobox-label">
								                                  <input type="radio" className="ix-radiobox" name="Richtung" /><mark className="mr-2" /> Abgehend
								                                </label>
								                              </div>
								                            </div>
								                          </div>
								                          <div className="col-lg-12 col-md-12">
								                            <div className="form-group">
								                              <label>Richtung</label>
								                              <div className="mt-4 mb-4">
								                                <label className="ix-radiobox-label mr-4">
								                                  <input type="radio" className="ix-radiobox" name="Richtung1" defaultChecked /><mark className="mr-2" /> Abgeschlossen
								                                </label>
								                                <label className="ix-radiobox-label mr-4">
								                                  <input type="radio" className="ix-radiobox" name="Richtung1" /><mark className="mr-2" /> Geplant
								                                </label>
								                                <label className="ix-radiobox-label">
								                                  <input type="radio" className="ix-radiobox" name="Richtung1" /><mark className="mr-2" /> Aktueller Anruf
								                                </label>
								                              </div>
								                            </div>
								                          </div>
								                          <div className="col-lg-6 col-md-6">
								                            <div className="form-group">
								                              <label className="label-red">Anfangszeit </label>
								                              <input type="text" id="datetimepicker1" className="form-control" placeholder={"dd.mm.yyyy hh:mm"}  />
								                            </div>
								                          </div>
								                          <div className="col-lg-6 col-md-6">
								                            <div className="form-group">
								                              <label className="label-red">Dauer </label>
								                              <div className="form-row">
								                                <div className="col-lg-2 col-md-2">
								                                  <input type="text" className="form-control" placeholder={"HH"} />
								                                </div>
								                                <div className="col-lg-10 col-md-10">
								                                  <input type="text" className="form-control" placeholder={"MM"}  />
								                                </div>
								                              </div>
								                            </div>
								                          </div>
								                          <div className="col-lg-12 col-md-12">
								                            <div className="form-group">
								                              <label>Ticket</label>
								                              <input type="text" className="form-control"  />
								                            </div>
								                          </div>
								                          <div className="col-lg-6 col-md-6">
								                            <div className="form-group">
								                              <label className="label-red">Kontakt Name </label>
								                              <input type="text" id className="form-control" />
								                            </div>
								                          </div>
								                          <div className="col-lg-6 col-md-6">
								                            <div className="form-group">
								                              <label>Priorität </label>
								                              <div className="form-group">
								                                <select name id className="form-control chosen-select">
								                                  <option value={0}>-None-</option>
								                                  <option value={0}>High</option>
								                                  <option value={0}>Highest</option>
								                                  <option value={0}>Low</option>
								                                  <option value={0}>Lowest</option>
								                                  <option value={0}>Normal</option>
								                                </select>
								                              </div>
								                            </div>
								                          </div>
								                          <div className="col-lg-6 col-md-6">
								                            <div className="form-group">
								                              <label>Anrufen-Besitzer</label>
								                              <input type="text" id className="form-control" defaultValue="anita Sivakumar" />
								                            </div>
								                          </div>
								                          <div className="col-lg-12 col-md-12">
								                            <div className="form-group">
								                              <label>Beschreibung</label>
								                              <textarea className="form-control" defaultValue={""} />
								                            </div>
								                          </div>
								                        </div>
								                      </div>
								                    </div>
								                  </div>
								                  <div className="btnFooter addTicketFoterBtns">
								                    <div className="row">
								                      <div className="col-lg-12 col-md-12 ">
								                        <button className="btn-theme btn-md mr-2">Absenden</button>
								                        <button className="btn-theme-white btn-md">Abbrechen</button>
								                      </div>
								                    </div>
								                  </div>
								              </div>
								            </div>
							          	</div>
							          	<div className="col-lg-3">
								            <div className="kontactInfo">
								              <div id="accordion">
								                <div className="card">
								                  <div className="card-header" id="headingTwo">
								                    <h5 className="mb-0">
								                      <Link className="btn btn-link " data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
								                        Marketplace Extensions
								                      </Link>
								                    </h5>
								                  </div>
								                  <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
								                    <div className="card-body">
								                      <div className="no-info">
								                        <div className="no-info-icon" />
								                        <h4>No kontakt chosen for this anruf</h4>
								                        <p>The details about the kontakt you wish to add a anruf for will appear here.</p>
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
						</div>
                <Footer />
            </div>
        )
    }


}
export default Anruf
