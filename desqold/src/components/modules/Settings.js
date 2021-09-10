import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export class Leftsidemenu extends Component{
    render(){
        return(

                <div id="settingPopup" className="searchPopup">
                  <div className="searchPopupBox">
                    <div className="input-group">
                      <div className="input-group-prepend dropdown">
                        <Link className="btn"><i className="lnr lnr-magnifier" /></Link> 
                        <input type="text" className="form-control" placeholder="Suche in Alle Module" aria-label="search" />
                        <div id="settingPopupClose" className="slideFormClose">× <span>Esc</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4">
                        <h3>KANÄLE</h3>
                        <ul>
                          <li><Link to="kanale-e-mail">E-Mail</Link></li>
                          <li><Link to="rebrand">Hilfecenter</Link></li>
                          <li><Link to="chat-einstellungen">Chat</Link></li>
                          <li><Link to="rückmeldung-widget">Webformulare</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <h3>ALLGEMEIN</h3>
                        <ul>
                          <li><Link to="unternehmen">Unternehmen</Link></li>
                          <li><Link to="firmenlogo">Rebranding</Link></li>
                          <li><Link to="geschäftszeiten">Geschäftszeiten</Link></li>
                          <li><Link to="kundenzufriedenheit">Kundenzufriedenheit</Link></li>
                          <li><Link to="produkte">Produkte</Link></li>
                          <li><Link to="abteilungen">Abteilungen</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <h3>ANPASSUNG</h3>
                        <ul>
                          <li><Link to="ticket-status">Ticket-Status</Link></li>
                          <li><Link to="pagelayout">Layouts und Felder</Link></li>
                          <li><Link to="zeiterfassung">Zeiterfassung</Link></li>
                          <li><Link to="module-organisieren">Module</Link></li>
                          <li><Link to="emailtemplates">Vorlagen</Link></li>
                          <li><Link to="tickets-gereral-settings">Allgemeine Einstellungen</Link></li>
                          <li><Link to="meine-informationen">Persönliche Einstellungen</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-4">
                        <h3>NUTZER UND KONTROLLE</h3>
                        <ul>
                          <li><Link to="agenten">Agenten</Link></li>
                          <li><Link to="berechtigungen-rollen">Berechtigungen</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <h3>DATENADMINISTRATION</h3>
                        <ul>
                          <li><Link to="importieren">Importieren/Exportieren</Link></li>
                          <li><Link to="papierkorb">Papierkorb</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <h3>ENTWICKLERRAUM</h3>
                        <ul>
                          <li><Link to="api">API</Link></li>
                          <li><Link to="wehooks">Webhooks</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
        )
    }

}
export default Leftsidemenu

