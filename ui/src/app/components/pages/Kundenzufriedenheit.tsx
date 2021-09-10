import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 


export class Kundenzufriedenheit extends Component{
    render(){
        return(
            <div>
                 
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse1"> E-Mail  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse2"> Hilfecenter  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse4"> Webformulare  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse6"> Rebranding  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse7"> Geschäftszeiten  <i className="fa fa-angle-right" /></Link>
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
		                              <div className="accordion-heading active">
		                                <Link to="kundenzufriedenheit" className="accordion-toggle"> Kundenzufriedenheit </Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading9">
		                              <div className="accordion-heading">
		                                <Link to="produkte" className="accordion-toggle"> Produkte  <span className="SettingAdd">+</span></Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading9">
		                              <div className="accordion-heading">
		                                <Link to="abteilungen" className="accordion-toggle"> Abteilungen  <span className="SettingAdd">+</span></Link>
		                              </div>
		                            </div>
		                          </div>
		                          <h3>Anpassung</h3>
		                          <div className="card">
		                            <div className="card-header" id="heading10">
		                              <div className="accordion-heading">
		                                <Link to="ticket-status" className="accordion-toggle"> Ticket-Status</Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading11">
		                              <div className="accordion-heading">
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse11"> Layouts und Felder  <i className="fa fa-angle-right" /></Link>
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
		                              <div className="accordion-heading">
		                                <Link to="zeiterfassung" className="accordion-toggle"> Zeiterfassung</Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading13">
		                              <div className="accordion-heading">
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse13"> Module  <i className="fa fa-angle-right" /></Link>
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
		                              <div className="accordion-heading">
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse14"> Vorlagen  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse14" className="collapse" aria-labelledby="heading14" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse15"> Allgemeine Einstellungen  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse16"> Persönliche Einstellungen  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse18"> Berechtigungen  <i className="fa fa-angle-right" /></Link>
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
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse19"> Importieren/Exportieren  <i className="fa fa-angle-right" /></Link>
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
						      <div className="col-lg-12">
						        Kundenzufriedenheit <span style={{position: 'relative', top: '8px', marginLeft: '10px'}}><label className="switch switch-pos"><input type="checkbox" defaultChecked /><span className="slider round" /></label></span>
						      </div>
						    </div>
						  </div>
						  <div className="Setting-right-content bt1px">
						    <div className="Vorlagen-scroll pb-5">
						      <div className="form-page p20">
						        <form >
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right label-red">Bewertungsfrage</label>
						            <div className="col-sm-5">
						              <textarea className="form-control" defaultValue={"How would you rate our customer service?"} />
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Bewertungen</label>
						            <div className="col-sm-10">
						              <div className="row">
						                <div className="col-sm-3">
						                  <div className="card" style={{width: '18rem'}}>
						                    <div className="BewertungImg">
						                      <img src="/assets/images/emoji-smile.png" alt="emoji-smile" />
						                      <span>Good</span>
						                      <Link to="#"  className="BewertungIcon"><i className="lnr lnr-pencil" /></Link>
						                    </div>
						                    <ul className="list-group list-group-flush BewertungList">
						                      <li className="list-group-item">
						                        <span>Reaktion auf Bewertung</span> 
						                        Wow! You just made our day!
						                      </li>
						                    </ul>
						                    <ul className="list-group list-group-flush BewertungList">
						                      <li className="list-group-item">
						                        <span>Reaktion auf Rückmeldung</span> 
						                        Thank you! We are celebrating.
						                      </li>
						                    </ul>
						                  </div>
						                </div>
						                <div className="col-sm-3">
						                  <div className="card" style={{width: '18rem'}}>
						                    <div className="BewertungImg">
						                      <img src="/assets/images/emoji-okay.png" alt="emoji-okay" />
						                      <span>Okay</span>
						                      <Link to="#"  className="BewertungIcon"><i className="lnr lnr-checkmark-circle" /></Link>
						                    </div>
						                    <ul className="list-group list-group-flush BewertungList">
						                      <li className="list-group-item">
						                        <span>Reaktion auf Bewertung</span> 
						                        Oh, that's not good enough! Can you please tell us where we can improve?
						                      </li>
						                    </ul>
						                    <ul className="list-group list-group-flush BewertungList">
						                      <li className="list-group-item">
						                        <span>Reaktion auf Rückmeldung</span> 
						                        Ah! We will improve the next time around.
						                      </li>
						                    </ul>
						                  </div>
						                </div>
						                <div className="col-sm-3">
						                  <div className="card" style={{width: '18rem'}}>
						                    <div className="BewertungImg">
						                      <img src="/assets/images/emoji-bad.png" alt="emoji-bad" />
						                      <span>Bad</span>
						                       <Link to="#" className="BewertungIcon"><i className="lnr lnr-pencil" /></Link>
						                    </div>
						                    <ul className="list-group list-group-flush BewertungList">
						                      <li className="list-group-item">
						                        <span>Reaktion auf Bewertung</span> 
						                        Ah, that's unfortunate! Can you please tell us where we can improve?
						                      </li>
						                    </ul>
						                    <ul className="list-group list-group-flush BewertungList">
						                      <li className="list-group-item">
						                        <span>Reaktion auf Rückmeldung</span> 
						                        Sorry! we let you down.
						                      </li>
						                    </ul>
						                  </div>
						                </div>
						              </div>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Bewertungslink hinzufügen</label>
						            <div className="col-sm-10">
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" name="Bewertungslink" defaultChecked /><mark className="mr-2" /> Zu jeder gesendeten Antwort
						                </label>
						              </div>
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" name="Bewertungslink" /><mark className="mr-2" />Wenn ein Ticket geschlossen wurde <br /><span className="pl-3 ml-3">Der Bewertungslink wird zur Schließen-Benachrichtigungsregel zugefügt. Vorlage anpassen</span>
						                </label>
						              </div>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Bewertungslink</label>
						            <div className="col-sm-10">
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" name="Bewertungslink1" /><mark className="mr-2" /> Bekommt nur Bewertungsfrage.
						                </label>
						              </div>
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" defaultChecked name="Bewertungslink1" /><mark className="mr-2" />Bekommt Bewertungsfrage mit Smileys.
						                </label>
						              </div>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Rating link accessible to</label>
						            <div className="col-sm-10">
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" defaultChecked name="accessible" /><mark className="mr-2" /> Anyone on internet <br /><span className="pl-3 ml-3">Anyone on the internet with the rating link can access</span>
						                </label>
						              </div>
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" name="accessible" /><mark className="mr-2" />Requesters and cc'd users <br /><span className="pl-3 ml-3">Requestors and cc'd users can access the rating link on email replies, but will be concealed for agents.</span>
						                </label>
						              </div>
						              <div className="mb-2">
						                <label className="ix-radiobox-label">
						                  <input type="radio" className="ix-radiobox" name="accessible" /><mark className="mr-2" />End users <br /><span className="pl-3 ml-3">End users can access the rating link while others will be prompted to sign up for your help center</span>
						                </label>
						              </div>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Widget im Hilfecenter anzeigen</label>
						            <div className="col-sm-10">
						              <div className="mb-2">
						                <span style={{position: 'relative', top: '10px', marginLeft: '10px'}}><label className="switch switch-pos"><input type="checkbox" /><span className="slider round" /></label></span>
						              </div>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Agentenfoto anzeigen</label>
						            <div className="col-sm-10">
						              <div className="mb-2">
						                <span style={{position: 'relative', top: '10px', marginLeft: '10px'}}><label className="switch switch-pos"><input type="checkbox" defaultChecked /><span className="slider round" /></label></span>
						              </div>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Ticket erneut öffnen</label>
						            <div className="col-sm-3">
						              <select className="form-control chosen-select">
						                <option value={0}>--- Nicht erneut öffnen ---</option>
						                <option value={0}>Für alle Bewertungen</option>
						                <option value={0}>Für schlechte Bewertungen</option>
						              </select>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Ticket-Besitzer benachrichtigen über</label>
						            <div className="col-sm-3">
						              <select className="form-control chosen-select">
						                <option value={0}>Alle Bewertungen</option>
						                <option value={0}>Good</option>
						                <option value={0}>Bad</option>
						              </select>
						            </div>
						          </div>
						          <div className="form-group row">
						            <label className="col-sm-2 col-form-label text-right">Diese Agenten über schlechte Bewertungen informieren</label>
						            <div className="col-sm-3">
						              <select className="form-control chosen-select">
						                <option value={0}>--- Agenten wählen---</option>
						                <option value={0}>anita sivakumar</option>
						              </select>
						            </div>
						          </div>
						        </form>
						      </div>
						      <div className="Setting_right_fxd_btns p20">
							      <button className="btn-theme btn-md mr-2">Speichern</button>
							      <button className="btn-theme-white btn-md">Abbrechen</button>
							    </div>
						    </div>
						    
						  </div>
						</div>


					  </div>
					</div>

                
            </div>
        )
    }

}
export default Kundenzufriedenheit
