import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';


export class EMailVorlageBearbeiten  extends Component{
    render(){
        return(
            <div>
                <Header />
	                <div className="mainWrapper pl-0">
					  <div className="mainWrapperBody">
					  	<div className="setting-left">
		                    <div className="setting-left-title">
		                      Einstellungen
		                    </div>
		                    <div className="setting-search">
		                      <input type="text" placeholder="Suchen" className="form-control" />
		                    </div>
		                    <div className="setting-left-scroll">
		                      <div className="setting-left-accordion">
		                        <div className="accordion" id="accordion">
		                          <h3>Kanäle</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading1">
		                              <div className="accordion-heading ">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse1"> E-Mail  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="kanale-e-mail">Kundendienst-E-Mail-Adresse</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="absenderadresse">Absenderadresse <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                  <li>
		                                    <Link to="dkim-authentication"> DKIM Authentication </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="weitere-konfiguration">Weitere Konfiguration</Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading2">
		                              <div className="accordion-heading ">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse2"> Hilfecenter  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="rebrand">Rebrand</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="zugriffseinstellungen">Zugriffseinstellungen</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="languages"> Languages</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="hilfecenter-anpassung">Hilfecenter-Anpassung</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="hilfecenter-saml">Hilfecenter-SAML</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="setting-seo">SEO</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="e-mail-vorlagen">E-Mail-Vorlagen</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="nutzer">Nutzer</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="user-labels">User Labels</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="user-groups">User Groups</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="google-analytics">Google Analytics</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="sales-iq">Sales IQ</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="page-sense">PageSense</Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading3">
		                              <div className="accordion-heading ">
		                                <Link to="chat-einstellungen" className="accordion-toggle"> Chat</Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading4">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse4"> Webformulare  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="rückmeldung-widget">Rückmeldung-Widget</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="erweitertes-webformular">Erweitertes Webformular <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <h3>Allgemein</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading5">
		                              <div className="accordion-heading ">
		                                <Link to="unternehmen" className="accordion-toggle"> Unternehmen </Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading6">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse6"> Rebranding  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="firmenlogo">Logo</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="domänenzuordnung">Domänenzuordnung</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="portalname">Portalname</Link>
		                                  </li>
		                                  <li>
		                                    <Link to="multi-branding">Multi-Branding</Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading7">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse7"> Geschäftszeiten  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="geschäftszeiten"> Geschäftszeiten <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                  <li>
		                                    <Link to="jährliche"> Jährliche Liste arbeitsfreier Tage <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading8">
		                              <div className="accordion-heading ">
		                                <Link to="kundenzufriedenheit" className="accordion-toggle"> Kundenzufriedenheit </Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading9">
		                              <div className="accordion-heading ">
		                                <Link to="produkte" className="accordion-toggle"> Produkte  <span className="SettingAdd">+</span></Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading9">
		                              <div className="accordion-heading ">
		                                <Link to="abteilungen" className="accordion-toggle"> Abteilungen  <span className="SettingAdd">+</span></Link>
		                              </div>
		                            </div>
		                          </div>
		                          <h3>Anpassung</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading10">
		                              <div className="accordion-heading ">
		                                <Link to="ticket-status" className="accordion-toggle"> Ticket Status</Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading11">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse11"> Layouts und Felder  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="pagelayout"> Layouts </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="layout-rules"> Layout Rules </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="validation-rules"> Validation Rules </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="felderliste"> Felderliste </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="feldabhängigkeiten"> Feldabhängigkeiten </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="feldberechtigungen"> Feldberechtigungen </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="suchfelder"> Suchfelder </Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading12">
		                              <div className="accordion-heading ">
		                                <Link to="zeiterfassung" className="accordion-toggle"> Zeiterfassung</Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading13">
		                              <div className="accordion-heading ">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse13"> Module  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse13" className="collapse" aria-labelledby="heading13" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="module-organisieren"> Module organisieren </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="module-umbenennen"> Module umbenennen </Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading14">
		                              <div className="accordion-heading active">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse14"> Vorlagen  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse14" className="collapsed" aria-labelledby="heading14" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li class="active">
		                                    <Link to="emailtemplates"> E-Mail-Vorlagen <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                  <li>
		                                    <Link to="ticketvorlagen"> Ticketvorlagen <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading15">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse15"> Allgemeine Einstellungen  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse15" className="collapse" aria-labelledby="heading15" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="tickets-gereral-settings"> Tickets </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="kontakte-gereral-settings"> Kontakte </Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading16">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse16"> Persönliche Einstellungen  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse16" className="collapse" aria-labelledby="heading16" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="meine-informationen"> Meine Informationen </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="voreinstellungen"> Voreinstellungen</Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <h3>Nutzer und Kontrolle</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading17">
		                              <div className="accordion-heading">
		                                <Link to="agenten" className="accordion-toggle"> Agenten  <span className="SettingAdd">+</span></Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading18">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse18"> Berechtigungen  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse18" className="collapse" aria-labelledby="heading18" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="berechtigungen-rollen"> Rollen <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                  <li>
		                                    <Link to="berechtigungen-profile"> Profile <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                  <li>
		                                    <Link to="berechtigungen-datenfreigabe"> Datenfreigabe </Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <h3>Datenadministration</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading19">
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse19"> Importieren/Exportieren  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse19" className="collapse" aria-labelledby="heading19" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="importieren"> Importieren </Link>
		                                  </li>
		                                  <li>
		                                    <Link to="exportieren"> Exportieren </Link>
		                                  </li>
		                                </ul>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading20">
		                              <div className="accordion-heading">
		                                <Link to="papierkorb" className="accordion-toggle"> Papierkorb </Link>
		                              </div>
		                            </div>
		                          </div>
		                          <h3>Entwicklerraum</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading21">
		                              <div className="accordion-heading">
		                                <Link to="api" className="accordion-toggle"> API </Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading22">
		                              <div className="accordion-heading">
		                                <Link to="webhooks" className="accordion-toggle"> Webhooks </Link>
		                              </div>
		                            </div>
		                          </div>
		                        </div>
		                      </div>
		                    </div>
		                </div>

		                
		                <div className="setting-right">
						  <div className="setting-right-title">
						    <div className="row">
						      <div className="col-lg-6">
						        E-Mail-Vorlage bearbeiten
						      </div>
						      <div className="col-lg-6 text-right">
						        <ul className="nutzer-top">
						          <li className="dropdown">
						            <Link className="btn-theme btn-sm text-white" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hinzufügen</Link>
						            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						              <Link className="dropdown-item">Neue Vorlage</Link>
						              <Link className="dropdown-item">Neuer Vorlagenordner</Link>
						            </div>
						          </li>
						        </ul>
						      </div>
						    </div>
						  </div>
						  <div className="Setting-right-content bt1px">
						    <div className="row">
						      <div className="col-lg-12">
						        <div className="Vorlage-bearbeiten-scroll">
						          <div className="form-page p20">
						            <form id>
						              <div className="row">
						                <div className="col-md-4">
						                  <div className="row">
						                    <div className="col-md-12">
						                      <div className="form-group">
						                        <label className="label-red">Modul auswählen</label>
						                        <select name id className="form-control chosen-select">
						                          <option value={0}>Calls</option>
						                        </select>
						                      </div>
						                    </div>
						                    <div className="col-md-12">
						                      <div className="form-group">
						                        <label className="label-red">Name</label>
						                        <input className="form-control" type name defaultValue="Notify agent on assigning a call" />
						                      </div>
						                    </div>
						                    <div className="col-md-12">
						                      <div className="form-group">
						                        <label className="label-red">Ordner auswählen</label>
						                        <select name id className="form-control chosen-select">
						                          <option value={0}>Agentenbenachrichtigung</option>
						                          <option value={0}>Kontakt-Benachrichtigung</option>
						                          <option value={0}>Team Notification</option>
						                          <option value={0}>Secondary Kontakt Notification</option>
						                        </select>
						                      </div>
						                    </div>
						                    <div className="col-md-12">
						                      <div className="form-group">
						                        <label className="label-red">Von</label>
						                        <select name id className="form-control chosen-select">
						                          <option value={0}>one ix gmbh - support@oneixgmbh377.oneixdesk.ch</option>
						                        </select>
						                      </div>
						                    </div>
						                    <div className="col-md-12">
						                      <div className="form-group">
						                        <label>Antworten an</label> 
						                        <input className="form-control" type name placeholder="Eg. johnzoho.eu" />
						                      </div>
						                    </div>
						                    <div className="col-md-12">
						                      <div className="form-group">
						                        <label className="label-red">Betreff</label> 
						                        <input className="form-control" type name defaultValue="You have been assigned a new call" />
						                      </div>
						                    </div>
						                  </div>
						                </div>
						                <div className="col-md-10">
						                  <label>Nachricht</label> 
						                  <div id="einladung-editor">
						                    <div className="einladung-editor-scroll">
						                      <div className="einladung-editor-outer">
						                        <div className="einladung-editor-inner text-left">
						                          <p>NachrichtHi ${'{'}Calls.Call Owner{'}'},</p>
						                          <p>You've been assigned the following Call: </p>
						                          <p>Call Subject : ${'{'}Calls.Subject{'}'}</p>
						                          <p>Start Time: ${'{'}Calls.Start Time{'}'}</p>
						                          <p>Priority : ${'{'}Calls.Priority{'}'}</p>
						                          <p>Ticket : #${'{'}Calls.Request{'}'}</p>
						                          <p>Contact Name : ${'{'}Calls.Contact Name{'}'}</p>
						                          <p>Created Time : ${'{'}Calls.Created Time{'}'}</p>
						                          <p>Created by : ${'{'}Calls.Created By{'}'}</p>
						                          <p>${'{'}Calls.CALL_BUTTON{'}'}</p>
						                        </div>
						                      </div>
						                    </div>
						                  </div>
						                  <p className="mt-3">Nur die ersten 32.000 Textzeichen werden akzeptiert.</p>
						                </div>
						                <div className="col-md-12">
						                  <div className="form-group">
						                    <Link className="link-blue mr-3 rndbtn" style={{transform: 'rotate(-45deg)'}}><i style={{position: 'relative', top: '4px'}} className="lnr lnr-paperclip" /></Link> <span className="link-blue">Anhänge</span>  (Up to 5 MB)
						                  </div>
						                </div>
						              </div>
						            </form>
						          </div>
						        </div>
						        <div className="Setting_right_fxd_btns p20" style={{left:'15px'}}>
						          <button className="btn-theme btn-md mr-2">Speichern</button>
						          <button className="btn-theme-white btn-md mr-2">Vorschau</button>
						          <button className="btn-theme-white btn-md">Abbrechen</button>
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
export default EMailVorlageBearbeiten 