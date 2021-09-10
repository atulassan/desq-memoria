import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

export class KontakteEdit extends Component{
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
					                            <div className="ix-kontactheader-icon" />
					                            <div className=" ix-formheader-innerContainer">
					                              <h3>Kunden Hinzufügen</h3>
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <label>Kundenname </label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <label>Strasse nr.</label>
					                              <input type="text" className="form-control" placeholder  />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>PLZ</label>
					                              <input type="text" className="form-control" placeholder  />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Ort</label>
					                              <input type="text" className="form-control" placeholder  />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Konton</label>
					                              <select name id className="form-control chosen-select">
					                                <option value={0}>Swiss</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Land</label>
					                              <select name id className="form-control chosen-select">
					                                <option value={0}>Swiss</option>
					                              </select>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Tel.</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Fax</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>E-Mail</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Website</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <label>MwSt. Nr.</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <h2>Kontaktperson</h2>
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <label>Anrede</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Vorname</label>
					                              <select name id className="form-control chosen-select">
					                                <option value={0}>-None-</option>
					                                <option value={0}>Herr</option>
					                                <option value={0}>Frau</option>
					                              </select>
					                            </div>
					                          </div><div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Nachname</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>E-Mail</label>
					                              <input type="email" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Tel. Direkt</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Mobile</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Titel</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Geburtsdatum</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Tel. Privat</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Instagram</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Facebook</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Linkedin</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Xing</label>
					                              <input type="text" className="form-control" placeholder />
					                            </div>
					                          </div>

					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                  <div className="btnFooter addTicketFoterBtns">
					                    <div className="row">
					                      <div className="col-lg-12 col-md-12 ">
					                        <button className="btn-theme btn-md mr-2" >Speichern</button>
					                        <button className="btn-theme-white btn-md" >Abbrechen</button>
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
					                      <Link className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					                        Marketplace Extensions
					                      </Link>
					                    </h5>
					                  </div>
					                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
					                    <div className="card-body">
					                      <div className="no-info">
					                        <h4>Erweiterungen erkunden, sinnvoll ausbauen!</h4>
					                        <p>Erweiterungen erleichtern Ihnen die Arbeit wie nie zuvor. Blättern Sie das Archiv durch, probieren Sie neue Lösungen aus, erwerben Sie Erweiterungen, die exakt Ihrem Bedarf entsprechen.</p>
					                        <Link href className="btn-theme btn-sm">Zum Desk Marketplace wechseln</Link>
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
export default KontakteEdit
