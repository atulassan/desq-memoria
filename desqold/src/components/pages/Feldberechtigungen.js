import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';


export class Feldberechtigungen extends Component{
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
		                              <div className="accordion-heading active">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse11"> Layouts und Felder  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse11" className="collapsed" aria-labelledby="heading11" data-parent="#accordion">
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
		                                  <li className="active">
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
		                              <div className="accordion-heading">
		                                <Link className="accordion-toggle" data-toggle="collapse" data-target="#collapse14"> Vorlagen  <i className="fa fa-angle-right" /></Link>
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
						        Feldberechtigungen
						        <span className="dropdown">
						          <Link id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						            Tickets <i className="lnr lnr-chevron-down" />
						          </Link>
						          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						            <Link className="dropdown-item drop_title">MODULE</Link>
						            <span className="dropSearch"><input type="text" placeholder="Suchen" /></span>
						            <div className="dropMinHeight">
						              <Link className="dropdown-item">Tickets</Link>
						              <Link className="dropdown-item">Accounts</Link>
						              <Link className="dropdown-item">Contacts</Link>
						              <Link className="dropdown-item">Products</Link>
						              <Link className="dropdown-item">Time Entry</Link>
						              <Link className="dropdown-item">Contracts</Link>
						              <Link className="dropdown-item">Calls</Link>
						              <Link className="dropdown-item">Tasks</Link>
						              <Link className="dropdown-item">Events</Link>
						            </div>
						          </div>
						        </span>
						        <span className="dropdown">
						          <Link id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						            Tickets <i className="lnr lnr-chevron-down" />
						          </Link>
						          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						            <Link className="dropdown-item drop_title">PROFILE</Link>
						            <span className="dropSearch"><input type="text" placeholder="Suchen" /></span>
						            <div className="dropMinHeight">
						              <Link className="dropdown-item">Kundendienstadministrator</Link>
						              <Link className="dropdown-item">Nebenagent</Link>
						              <Link className="dropdown-item">Newbie Agent</Link>
						              <Link className="dropdown-item">Hilfecenter</Link>
						              <Link className="dropdown-item">Agent</Link>
						              <Link className="dropdown-item">Supervisor</Link>
						              <Link className="dropdown-item">Support Manager</Link>
						            </div>
						          </div>
						        </span>
						      </div>
						      <div className="col-lg-6 text-right">
						        <ul className="nutzer-top">
						          <li><input type name placeholder="Suchfelder..." /></li>
						        </ul>
						      </div>
						    </div>
						  </div>
						  <div className="Setting-right-content">
						    <div className="table-content-scroll">
						      <table className="table m-0a">
						        <thead>
						          <tr>
						            <th className="pl-3" width="20%">FELDNAME</th>
						            <th className="text-center" width="15%">LESEN/SCHREIBEN</th>
						            <th className="text-center" width="15%">SCHREIBGESCHÜTZT</th>
						            <th className="text-center" width="15%">NICHT ANZEIGEN</th>
						            <th width="35%" />
						          </tr>
						        </thead>
						        <tbody>
						          <tr>
						            <td className="pl-3"><strong>Abteilung</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Abteilung" defaultChecked /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Abteilung" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Abteilung" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Anzahl Kommentare</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Anzahl-Kommentare" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Anzahl-Kommentare" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Anzahl-Kommentare" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Anzahl Threads</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Anzahl-Threads" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Anzahl-Threads" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Anzahl-Threads" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Beschreibung</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Beschreibung" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Beschreibung" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Beschreibung" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Betreff</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Betreff" defaultChecked /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Betreff" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Betreff" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>E-Mail</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="E-Mail" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="E-Mail" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="E-Mail" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Empfängeradresse</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Empfängeradresse" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Empfängeradresse" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Empfängeradresse" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Erstellt von</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Erstellt" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Erstellt" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Erstellt" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Erstellungszeit</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Erstellungszeit" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Erstellungszeit" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Erstellungszeit" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Fälligkeitsdatum</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Fälligkeitsdatum" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Fälligkeitsdatum" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Fälligkeitsdatum" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Geändert von</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Geändert" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Geändert" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Geändert" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>isSpam</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="isSpam" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="isSpam" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="isSpam" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Ist eskaliert</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="eskaliert" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="eskaliert" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="eskaliert" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Ist überfällig</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="überfällig" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="überfällig" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="überfällig" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Kanal</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kanal" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kanal" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kanal" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Kategorie</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kategorie" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kategorie" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kategorie" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Klassifizierungen</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Klassifizierungen" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Klassifizierungen" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Klassifizierungen" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Kontakt Name</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kontakt-Name" defaultChecked /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kontakt-Name" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Kontakt-Name" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Konto Name</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Konto-Name" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Konto-Name" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Konto-Name" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Lösung</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Lösung" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Lösung" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Lösung" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Modifiziert Zeit</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Modifiziert" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Modifiziert" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Modifiziert" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Neuester Thread</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Neuester-Thread" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Neuester-Thread" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Neuester-Thread" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Priorität</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Priorität" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Priorität" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Priorität" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Produkt Name</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Produkt-Name" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Produkt-Name" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Produkt-Name" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Reaktionszeit</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Reaktionszeit" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Reaktionszeit" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Reaktionszeit" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Status</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Status" defaultChecked /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Status" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Status" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Tel.</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Tel" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Tel" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Tel" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Threadstatus</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Threadstatus" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Threadstatus" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Threadstatus" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Ticket Abschlusszeit</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Abschlusszeit" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Abschlusszeit" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Abschlusszeit" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Ticket Besitzer</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Besitzer" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Besitzer" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Besitzer" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Ticket-Gehalten-Zeit</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Gehalten" defaultChecked /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Gehalten" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-Gehalten" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Ticket-ID</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-ID" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-ID" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Ticket-ID" /><mark className="radioDisabled" /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Unterkategorie</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Unterkategorie" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Unterkategorie" /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Unterkategorie" /><mark className /></label></td>
						            <td />
						          </tr>
						          <tr>
						            <td className="pl-3"><strong>Zufriedenheitsbewertung</strong></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Zufriedenheitsbewertung" /><mark className="radioDisabled" /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Zufriedenheitsbewertung" defaultChecked /><mark className /></label></td>
						            <td className="text-center"><label className="ix-radiobox-label"><input type="radio" className="ix-radiobox" name="Zufriedenheitsbewertung" /><mark className /></label></td>
						            <td />
						          </tr>
						        </tbody>
						      </table>
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
export default Feldberechtigungen
