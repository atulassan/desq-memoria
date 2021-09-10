import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

export class Aufgabe extends Component{
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
					                <form action>
					                  <div className="addTicketFormpPadding overflowScroll">
					                    <div className="row">
					                      <div className="col-lg-7">
					                        <div className="row">
					                          <div className="col-lg-12 col-md-12 mb-3">
					                            <div className="ix-aufgabe-icon" />
					                            <div className=" ix-formheader-innerContainer">
					                              <h3>Aufgabe  hinzufügen</h3>
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <h2>Aufgabe-Informationen</h2>
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label className="label-red">Betreff</label>
					                              <input type="text" className="form-control"  />
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
					                              <label>Fälligkeitsdatum </label>
					                              <input type="text" id="datetimepicker1" className="form-control" placeholder="dd.mm.yyyy hh:mm" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Aufgabe-Besitzer </label>
					                              <select name id className="form-control chosen-select">
					                                <option value={0}>anita sivakumar</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Kontakt Name </label>
					                              <input type="text" id className="form-control" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Status </label>
					                              <select name id className="form-control chosen-select">
					                                <option value={0}>Not started</option>
					                                <option value={0}>Deferred</option>
					                                <option value={0}>In Progress</option>
					                                <option value={0}>Completed</option>
					                                <option value={0}>Waiting on someone else</option>
					                                <option value={0}>Cancelled</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Priorität </label>
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
					                          <div className="col-lg-12 col-md-12 mb-4 mt-4">
					                            <div className="form-group">
					                              <label>Erinnerung einstellen</label> <label className="switch" style={{position: 'relative', top: '5px', left: '15px'}}><input type="checkbox" /><span className="slider round" /></label>
					                              <div className="mute-text-sm">Zum/vor Aufgabenfälligkeitsdatum</div>
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
					                </form>
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
export default Aufgabe
