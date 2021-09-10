import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

export class AddTicket extends Component{
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
					                            <div className="ix-formheader-icon" />
					                            <div className=" ix-formheader-innerContainer">
					                              <h3>Ticket hinzufügen</h3>
					                              <div className="dropdown">
					                                <div className="pl-0 " id="dropdownMenuButton" data-toggle="dropdown">
					                                  Choose Ticket Template <i style={{position: 'relative', left: '5px', top: '-1px'}} className="fa fa-sort-desc" />
					                                </div>
					                                <div className="dropdown-menu posLeft dropMaxWidth TicketTemplate" aria-labelledby="dropdownMenuButton">
					                                  <Link className="dropdown-item">Template01</Link>
					                                  <Link className="dropdown-item">Template02</Link>
					                                  <Link className="dropdown-item link-blue drop-btn"><i className="fa fa-plus " /> Neue Vorlage</Link>
					                                </div>
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <h2>Ticket Information</h2>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label className="label-red">Kontakt Name </label>
					                              <input type="text" className="form-control" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Konto Name</label>
					                              <input type="text" className="form-control" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>E-Mail</label>
					                              <input type="text" className="form-control" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Tel.</label>
					                              <input type="text" className="form-control" />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label className="label-red">Betreff</label>
					                              <input type="text" className="form-control" />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label>Beschreibung</label>
					                              <input type="text" className="form-control BeschreibungOpen" />
					                              <div className="BeschreibungEditor" style={{display: 'none'}}>
					                              	aasasas
					                                <span className="BeschreibungClose">×</span>
					                                <textarea name id="editor" rows={10} cols={80} defaultValue={""} />
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label className="label-red">Status </label>
					                              <div className="form-group">
					                                <select name id className="form-control chosen-select">
					                                  <option value={0}>Open</option>
					                                  <option value={0}>On hold</option>
					                                  <option value={0}>Escalated</option>
					                                  <option value={0}>Closed</option>
					                                </select>
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Ticket Besitzer </label>
					                              <div className="form-group">
					                                <select name id className="form-control chosen-select">
					                                  <option value={0}>Anita Sivakumar</option>
					                                  <option value={0}>On hold</option>
					                                  <option value={0}>Escalated</option>
					                                  <option value={0}>Closed</option>
					                                </select>
					                              </div>
					                            </div>
					                          </div>
					                        </div>
					                        <div className="row">
					                          <div className="col-lg-12 col-md-12 mt-4">
					                            <div className="form-group">
					                              <h2>ZusätzlicheInformationen</h2>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Fälligkeitsdatum </label>
					                              <input type="text" id="datetimepicker1" className="form-control" placeholder="dd.mm.yyyy hh:mm" defaultValue />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Priorität </label>
					                              <div className="form-group">
					                                <select name id className="form-control chosen-select">
					                                  <option value={0}>-None-</option>
					                                  <option value={0}>High</option>
					                                  <option value={0}>Medium</option>
					                                  <option value={0}>Low</option>
					                                </select>
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Kanal </label>
					                              <div className="form-group">
					                                <select name id className="form-control chosen-select">
					                                  <option value={0}>Phone</option>
					                                  <option value={0}>E-Mail</option>
					                                  <option value={0}>Web</option>
					                                  <option value={0}>Twitter</option>
					                                  <option value={0}>Facebook</option>
					                                  <option value={0}>Chat</option>
					                                  <option value={0}>Forums</option>
					                                </select>
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Klassifizierungen </label>
					                              <div className="form-group">
					                                <select name id className="form-control chosen-select">
					                                  <option value={0}>-None-</option>
					                                  <option value={0}>Question</option>
					                                  <option value={0}>Problem</option>
					                                  <option value={0}>Feature</option>
					                                  <option value={0}>Others</option>
					                                </select>
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 mt-4 mb-5">
					                            <div className="form-group">
					                              <div className="form-group">
					                                <p>
					                                  <div className="link-blue mr-3 rndbtn rndInput">
					                                    <input type="file" />
					                                    <i className="fa fa-paperclip" />
					                                  </div> <span className="ahange"><span className="link-blue">Anhänge</span> (Bis 20 MB)</span>
					                                </p>
					                              </div>
					                            </div>
					                          </div>
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                  <div className="btnFooter addTicketFoterBtns">
					                    <div className="row">
					                      <div className="col-lg-12 col-md-12 ">
					                      	<div className="btn-groups">
						                        <button className="btn-theme btn-md" >Absenden</button>
						                        <button className="btn-theme-white btn-md" >Abbrechen</button>
						                    </div>
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
					                  <div className="card-header" id="headingOne">
					                    <h5 className="mb-0">
					                      <Link className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					                        Kontakt Information
					                      </Link>
					                    </h5>
					                  </div>
					                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
					                    <div className="card-body">
					                      <div className="media">
					                        <div className="mediaImg font13">LA </div>
					                        <div className="media-body">
					                          <h5 className="mt-0 hint-title smTitle mt-2 mb-0">Lawrence</h5>
					                          Oneix
					                        </div>
					                      </div>
					                      <div className="contactInfoList">
					                        <ul>
					                          <li><i className="lnr lnr-envelope" /> support@oneixort.com</li>
					                          <li><i className="lnr lnr-phone" /> 1 888 900 9646</li>
					                          <li><i className="lnr lnr-map-marker" /> Hacienda Drive, Pleasanton, CA, United States, 94588</li>
					                        </ul>
					                      </div>
					                      <div className="contactInfoListTxt">
					                        <p>Besitzer <span>anitha Sivakumar</span></p>
					                        <p>Kontakt-Erstellungszeit <span>28.09.2020 08:36 AM</span></p>
					                        <p>Titel <span>Customer Support Executive</span></p>
					                      </div>
					                    </div>
					                  </div>
					                </div>
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
					                        <a href className="btn-theme btn-sm">Zum Desk Marketplace wechseln</a>
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
export default AddTicket
