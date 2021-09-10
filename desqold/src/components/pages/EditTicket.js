import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

export class EditTicket extends Component{
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
					                              <p>#101</p>
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <h2>Ticket Information</h2>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Kontakt Name </label>
					                              <input type="text" className="form-control" placeholder defaultValue="Lawrence" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Konto Name</label>
					                              <input type="text" className="form-control" placeholder defaultValue="One ix" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>E-Mail</label>
					                              <input type="text" className="form-control" placeholder defaultValue="support@oneix.com" />
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Tel.</label>
					                              <input type="text" className="form-control" placeholder defaultValue="1 888 900 9646" />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label>Betreff</label>
					                              <input type="text" className="form-control" placeholder defaultValue="Here's your first ticket." />
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label>Beschreibung</label>
					                              <div name id="editor" rows={10} cols={80}>
					                                <p>Hallo</p>
					                                <p>Willkommen beim neuen vereinheitlichten Ticketbildschirm von One ix Desk. Hier sehen Sie den vollständigen Kontext des Tickets. Ihr erstes Ticket liegt schon vor. Haben Sie gemerkt, dass dieses Ticket mit Ihnen verknüpft wurde? Wenn Sie auf dieses Ticket clever reagieren möchten, schauen Sie sich einmal die automatisch vorgeschlagenen Lösungen im linken Feld an.</p>
					                                <p>Wenn Sie mit dem Verfassen Ihrer Reaktion fertig sind, können Sie das Ticket senden und schließen.</p>
					                                <p>Welche Aktion Sie auch ausführen – alles lässt sich jederzeit über den Ticketverlauf verfolgen. Ein weiterer Schritt zu einem Kundendienst der Extraklasse!</p>
					                                <p>Gruß;</p>
					                                <p>Team One ix Desk</p>
					                                <p>1 888 900 9646</p>
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Status </label>
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
					                              <input type="text" id="datetimepicker1" className="form-control" placeholder="dd.mm.yyyy hh:mm" defaultValue=" " />
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
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label>Lösung </label>
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
					                        <button className="btn-theme btn-md mr-2" href>Absenden</button>
					                        <button className="btn-theme-white btn-md" href>Abbrechen</button>
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
export default EditTicket
