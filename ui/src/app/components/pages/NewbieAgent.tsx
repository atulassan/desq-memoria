import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 


export class NewbieAgent extends Component{
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
		                              <div className="accordion-heading ">
		                                <Link to="zeiterfassung" className="accordion-toggle"> Zeiterfassung</Link>
		                              </div>
		                            </div>
		                          </div>
		                          <div className="card">
		                            <div className="card-header" id="heading13">
		                              <div className="accordion-heading ">
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
		                              <div className="accordion-heading ">
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
		                              <div className="accordion-heading ">
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
		                              <div className="accordion-heading active">
		                                <Link to="#" className="accordion-toggle" data-toggle="collapse" data-target="#collapse18"> Berechtigungen  <i className="fa fa-angle-right" /></Link>
		                              </div>
		                            </div>
		                            <div id="collapse18" className="collapsed" aria-labelledby="heading18" data-parent="#accordion">
		                              <div className="card-body">
		                                <ul>
		                                  <li>
		                                    <Link to="berechtigungen-rollen"> Rollen <span className="SettingAdd">+</span></Link>
		                                  </li>
		                                  <li className="active">
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
							        <Link to="berechtigungen-profile" className="mr-2"><i className="lnr-chevron-left" /></Link> Profile
							      </div>
							    </div>
							  </div>
							  <div className="Setting-right-content bt1px">
							    <div className="profile-setting-scroll">
							      <div className="p20">
							        <div className="mb-4">
							          <div className="profileNameBase"><h2 className="mb-0">Newbie Agent  <Link to="#" className="hoverShow"><i className="lnr lnr-pencil" /></Link></h2></div>
							          <div id="profileNameEdit" className="mb-2" style={{display: 'none'}}>
							            <form>
							              <div className="form-row align-items-center">
							                <div className="col-auto">
							                  <input type="text" className="form-control"  defaultValue="Newbie Agent" />
							                </div>
							                <div className="col-auto">
							                   <Link to="#" className="btn link-blue text-sm">Speichern</Link>
							                   <Link to="#" className="btn text-sm">Abbrechen</Link>
							                </div>
							              </div>
							            </form>
							          </div>
							          <div className="profileDescBase"><p>Legen Sie Berechtigungen für neue Agenten fest.  <Link to="#" className="hoverShow"><i className="lnr lnr-pencil" /></Link></p></div>
							          <div id="profileDescEdit" className="mb-2" style={{display: 'none'}}>
							            <form>
							              <div className="form-row align-items-center">
							                <div className="col-auto">
							                  <input type="text" className="form-control"  defaultValue="Legen Sie Berechtigungen für neue Agenten fest." />
							                </div>
							                <div className="col-auto">
							                   <Link to="#" className="btn link-blue text-sm">Speichern</Link>
							                   <Link to="#" className="btn text-sm">Abbrechen</Link>
							                </div>
							              </div>
							            </form>
							          </div>
							        </div>
							        <div className="row">
							          <div className="col-lg-4">
							            <div className="profileBoxList">
							              <h2>Modulberechtigungen</h2>
							              <ul>
							                <li>
							                  <div className="pleft">
							                    <h5>Eintrag in die Zeitplanung</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Verträge</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Tickets</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Hilfecenter</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Community</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Kontakte</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Kontos</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Reports and Dashboards</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Produkte</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Calls</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Aufgaben</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Events</h5>
							                    <span className="content-dotted">Anzeigen, erstellen, aktualisieren und löschen</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Ansicht</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Erstellen</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aktualisieren</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Löschen</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Stornieren</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Sozial</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Chat</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							              </ul>
							            </div>
							          </div>
							          <div className="col-lg-4">
							            <div className="profileBoxList">
							              <h2>Tickets-Berechtigungen</h2>
							              <ul>
							                <li>
							                  <div className="pleft">
							                    <h5>E-Mails senden</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Besitz ändern</h5>
							                    <span className="content-dotted">Alle Tickets</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-radiobox-label">
							                            <input type="radio" className="ix-radiobox" name="Tickets" /><mark className="mr-2" />Alle Tickets</label>
							                        </Link>
							                         <Link to="#" className="dropdown-item">
							                          <label className="ix-radiobox-label">
							                            <input type="radio" className="ix-radiobox" name="Tickets" /><mark className="mr-2" />Nicht verknüpfte Tickets</label>
							                        </Link>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Nicht Verknüpfte anzeigen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Tickets schließen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Bewertungs-E-Mails</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Finden und zusammenführen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Verfolger hinzufügen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							              </ul>
							            </div>
							          </div>
							          <div className="col-lg-4">
							            <div className="profileBoxList">
							              <h2>Administrative Berechtigungen</h2>
							              <ul>
							                <li>
							                  <div className="pleft">
							                    <h5>Kommentarberechtigungen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Agenten verwalten</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Manage Teams</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Berechtigungen verwalten</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Rebranding</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Module verwalten</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Helpdesk-Automatisierung</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Abteilungen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Kundenzufriedenheitsbewertungen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Email und Ticket Vorlagen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Administrator-Dashboard</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Agent Overview</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Layouts und Felder verwalten</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Endnutzer</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Endanwenderregistrierungen genehmigen</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Unterstützungskanäle</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Einträge importieren</h5>
							                    <span className="content-dotted">Tickets, Kontos, Kontakte, Hilfecenter, Aufgaben, Calls, Events, Produkte, Verlauf</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Tickets</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Kontos</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Kontakte</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Hilfecenter</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aufgaben</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Calls</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Events</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Produkte</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Verlauf</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Abbrechen</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Einträge exportieren</h5>
							                    <span className="content-dotted">Tickets, Kontos, Kontakt</span>
							                    <span className="dropdown">
							                        <Link to="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							                        <i className="lnr lnr-chevron-down" />
							                      </Link>
							                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Tickets</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Kontos</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Kontakte</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Hilfecenter</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Aufgaben</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Calls</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Events</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Produkte</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Agenten</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Endnutzer</label></Link>
							                         <Link to="#" className="dropdown-item"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Berichte</label></Link>
							                        <div className="drop_btns">
							                          <Link to="#" className="btn-theme btn-sm">Speichern</Link>
							                          <Link to="#" className="btn-theme btn-sm">Abbrechen</Link>
							                        </div>
							                      </div>
							                    </span>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" defaultChecked />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Allgemeine Einstellungen verwalten</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
							                <li>
							                  <div className="pleft">
							                    <h5>Webhooks</h5>
							                  </div>
							                  <div className="pright">
							                    <label className="switch">
							                      <input type="checkbox" />
							                      <span className="slider round" />
							                    </label>
							                  </div>
							                  <div className="clboth" />
							                </li>
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
        )
    }

}
export default NewbieAgent 
