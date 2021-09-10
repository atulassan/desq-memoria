import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Leftsidemenu from '../modules/Leftsidemenu';

export class Tickets extends Component{
    render(){
        return(
            <div>
                <Header />
                <Leftsidemenu />

	                <div className="mainWrapper">
					  <div className="row no-gutters">
					    <div className="col-lg-12">
					      <div className="mainWrapperBody">
					        <div className="requestqueuecontainer">
					          <div className="Ticketfilter" style={{display: 'none'}}>
					            <div id="TicketfilterClose">×</div>
					            <ul className="newFilter">
					              <li>
					                <div className="block-content Filter-toggle-content">
					                  <div className="FilterToggle">
					                    <label className="amshopby_label">Agent <i className="fa fa-angle-down" /></label>
					                    <span className="special_border" />
					                  </div>
					                  <div id="attr_lebensphase1" className="attr_lebensphase filterToggleOpen">
					                    <input type="text" className="form-control" placeholder="suche" id="myInput1" />
					                    <ul>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Nicht-zugewiesen" />
					                          <label className="form-check-label" htmlFor="Nicht-zugewiesen">Nicht zugewiesen</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="anitha-Sivakumar" />
					                          <label className="form-check-label" htmlFor="anitha-Sivakumar">anitha Sivakumar</label>
					                        </div>
					                      </li>
					                    </ul>
					                  </div>
					                </div>
					              </li>
					              <li>
					                <div className="block-content Filter-toggle-content">
					                  <div className="FilterToggle">
					                    <label className="amshopby_label">Status <i className="fa fa-angle-down" /></label>
					                    <span className="special_border" />
					                  </div>
					                  <div id="attr_lebensphase1" className="attr_lebensphase filterToggleOpen">
					                    <input type="text" className="form-control" placeholder="suche" id="myInput1" />
					                    <ul>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="open" />
					                          <label className="form-check-label" htmlFor="open">Open</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="onhold" />
					                          <label className="form-check-label" htmlFor="onhold">On hold</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="escalated" />
					                          <label className="form-check-label" htmlFor="escalated">Escalated</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="closed" />
					                          <label className="form-check-label" htmlFor="closed">Closed</label>
					                        </div>
					                      </li>
					                    </ul>
					                  </div>
					                </div>
					              </li>
					              <li>
					                <div className="block-content Filter-toggle-content">
					                  <div className="FilterToggle">
					                    <label className="amshopby_label">Priorität <i className="fa fa-angle-down" /></label>
					                    <span className="special_border" />
					                  </div>
					                  <div id="attr_lebensphase1" className="attr_lebensphase filterToggleOpen">
					                    <input type="text" className="form-control" placeholder="suche" id="myInput1" />
					                    <ul>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="-None-" />
					                          <label className="form-check-label" htmlFor="-None-">-None-</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="high" />
					                          <label className="form-check-label" htmlFor="high">High</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="medium" />
					                          <label className="form-check-label" htmlFor="medium">Medium</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="low" />
					                          <label className="form-check-label" htmlFor="low">Low</label>
					                        </div>
					                      </li>
					                    </ul>
					                  </div>
					                </div>
					              </li>
					              <li>
					                <div className="block-content Filter-toggle-content">
					                  <div className="FilterToggle">
					                    <label className="amshopby_label">Kanal <i className="fa fa-angle-down" /></label>
					                    <span className="special_border" />
					                  </div>
					                  <div id="attr_lebensphase1" className="attr_lebensphase filterToggleOpen">
					                    <input type="text" className="form-control" placeholder="suche" id="myInput1" />
					                    <ul>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Phone" />
					                          <label className="form-check-label" htmlFor="Phone">Phone</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Eail" />
					                          <label className="form-check-label" htmlFor="Eail">Eail</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Web" />
					                          <label className="form-check-label" htmlFor="Web">Web</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Twitter" />
					                          <label className="form-check-label" htmlFor="Twitter">Twitter</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Facebook" />
					                          <label className="form-check-label" htmlFor="Facebook">Facebook</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Chat" />
					                          <label className="form-check-label" htmlFor="Chat">Chat</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Forums" />
					                          <label className="form-check-label" htmlFor="Forums">Forums</label>
					                        </div>
					                      </li>
					                    </ul>
					                  </div>
					                </div>
					              </li>
					              <li>
					                <div className="block-content Filter-toggle-content">
					                  <div className="FilterToggle">
					                    <label className="amshopby_label">Fälligkeitsdatum <i className="fa fa-angle-down" /></label>
					                    <span className="special_border" />
					                  </div>
					                  <div id="attr_lebensphase1" className="attr_lebensphase filterToggleOpen">
					                    <input type="text" className="form-control" placeholder="suche" id="myInput1" />
					                    <ul>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Überfällig" />
					                          <label className="form-check-label" htmlFor="Überfällig">Überfällig</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Heute" />
					                          <label className="form-check-label" htmlFor="Heute">Heute</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="HeuteÜberfällig" />
					                          <label className="form-check-label" htmlFor="HeuteÜberfällig">Heute + Überfällig</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="Morgen" />
					                          <label className="form-check-label" htmlFor="Morgen">Morgen</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="AktuelleWoche" />
					                          <label className="form-check-label" htmlFor="AktuelleWoche">Aktuelle Woche</label>
					                        </div>
					                      </li>
					                      <li>
					                        <div className="form-check">
					                          <input type="checkbox" name="lebensphase" id="AktuellerMonat" />
					                          <label className="form-check-label" htmlFor="AktuellerMonat">Aktueller Monat</label>
					                        </div>
					                      </li>
					                    </ul>
					                  </div>
					                </div>
					              </li>
					            </ul>
					            <div className="TicketFilterBtns">
					              <Link className="btn-theme btn-sm mr-1">Finden</Link>
					              <Link className="btn-white btn-sm">Schließen</Link>
					            </div>
					          </div>
					          <div className="row no-gutters mt-2 mb-2">
					            <div className="col-lg-6">
					              <span className="dropdown">
					                <i style={{position: 'relative', top: '2px', paddingRight: '10px', color: '#f6b241'}} className="fa fa-star" />
					                <button className="btn pl-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					                  Alle Tickets - 01 <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
					                </button>
					                <div className="dropdown-menu posLeft" aria-labelledby="dropdownMenuButton">
					                  <span className="dropSearch"><input type="text" placeholder="Suchen" /></span>
					                  <div className="dropMinHeight">
					                    <Link to className="dropdown-item">Stern-Ansichten</Link>
					                    <Link to className="dropdown-item">Alle Tickets- 01</Link>
					                    <Link to className="dropdown-item">Alle Ansichten</Link>
					                    <Link to className="dropdown-item">Alle Tickets</Link>
					                    <Link to className="dropdown-item">Antwort überfällig Tickets</Link>
					                    <Link to className="dropdown-item">DLV verstößt gegen Tickets</Link>
					                    <Link to className="dropdown-item">Gehalten-Tickets</Link>
					                    <Link to className="dropdown-item">Geschlossene Tickets</Link>
					                    <Link to className="dropdown-item">Geteilte offene Tickets</Link>
					                    <Link to className="dropdown-item">Meine Antwort überfällig Tickets</Link>
					                    <Link to className="dropdown-item">Meine Tickets</Link>
					                    <Link to className="dropdown-item">Meine gehaltenen Tickets</Link>
					                    <Link to className="dropdown-item">Meine offenen Tickets</Link>
					                    <Link to className="dropdown-item">Meine überfällige Tickets</Link>
					                    <Link to className="dropdown-item">Nicht zugewiesene, offene Tickets</Link>
					                    <Link to className="dropdown-item">Offene Tickets</Link>
					                    <Link to className="dropdown-item">Offene Tickets meines Teams</Link>
					                    <Link to className="dropdown-item">Spam Tickets</Link>
					                    <Link to className="dropdown-item">Tickets geteilt</Link>
					                    <Link to className="dropdown-item">Tickets mit Kundenantwort</Link>
					                    <Link to className="dropdown-item">Tickets zur Durchsicht</Link>
					                    <Link to className="dropdown-item">Verpasste Chats</Link>
					                    <Link to className="dropdown-item">Überfällige Tickets</Link>
					                  </div>
					                  <Link className="link text-center drop-btn" href><i style={{position: 'relative', top: '1px', marginRight: '5px'}} className="lnr lnr-plus-circle" /> Spezifische Ansicht hinzufügen</Link>
					                </div>
					              </span>
					            </div>
					            <div className="col-lg-6 text-right">
					              <ul className="helpFilterRight">
					                <li className="dropdown">
					                  <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					                    <i className="fa fa-ellipsis-v" data-toggle="tooltip" data-placement="bottom" title="Voreinstellungen Anzeigen" />
					                  </button>
					                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					                    <Link className="dropdown-item FilterTrigger"><i style={{position: 'relative', top: '1px', marginRight: '3px', fontSize: '12px !important'}} className="lnr lnr-funnel" /> Filter</Link>
					                    <Link className="dropdown-item" style={{borderBottom: '1px solid #eee'}}><i style={{position: 'relative', top: '1px', marginRight: '3px', fontSize: '12px !important'}} className="lnr lnr-sort-amount-asc" /> Neueste Einträge zuerst anzeigen</Link>
					                    <div className="helpFilterRightSelect">
					                      <div className="form-group mt-2">
					                        <label>Sortieren nach</label>
					                        <select name id className="form-control chosen-select">
					                          <option value>Ticket-ID</option>
					                          <option value>Fälligkeitsdatum</option>
					                          <option value>Neuester Thread</option>
					                          <option value>Erstellungszeit</option>
					                        </select>
					                      </div>
					                      <div className="form-group">
					                        <label>Ticket erhalten in</label>
					                        <select name id className="form-control chosen-select">
					                          <option value>Letzten 15 Tagen</option>
					                          <option value>Letzten 30 Tagen</option>
					                          <option value>den letzten 3 Monaten</option>
					                        </select>
					                      </div>
					                      <div className="form-group">
					                        <label>Einträge pro Seite</label>
					                        <select name id className="form-control chosen-select">
					                          <option value>10</option>
					                          <option value>20</option>
					                          <option value>30</option>
					                          <option value>40</option>
					                          <option value>50</option>
					                          <option value>60</option>
					                        </select>
					                      </div>
					                      <div className="form-group">
					                        <Link to className="btn-theme btn-sm">Übernehmen</Link>
					                      </div>
					                    </div>
					                  </div>
					                </li>
					              </ul>
					            </div>
					          </div>
					          <div className="tickets helpList min-height85">
					            <ul>
					              <li>
					                <table className="table m-0">
					                  <tbody>
					                    <tr>
					                      <td width="5%">
					                        <div className="mediaIcon">
					                          <span>LA </span>
					                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className /></label>
					                        </div>
					                      </td>
					                      <td width="60%">
					                        <div className="custom_item">
					                          <p><Link to="/tickets-detail">#2376 Ticket </Link></p>
					                          <ul className="custom_breadcrumb">
					                            <li><Link to="/tickets-contact-info" className="link">Lawrence </Link></li>
					                            <li><Link to="/tickets-contact-info" className="link">One ix</Link> </li>
					                            <li><Link className data-toggle="tooltip" data-placement="bottom" title="Erstellt am 28 Sep 2020 08:36 AM">28 Sep </Link></li> 
					                            <li><Link className data-toggle="tooltip" data-placement="bottom" title="Überfällig seit 30 Sep 2020 08:36 AM">30 Sep 08:36 AM</Link></li> 
					                          </ul>
					                        </div>
					                      </td>
					                      <td className="text-center" width="20%">
					                        <div className="hlpcnt action-btns">
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="Ticketvoransicht"><i className="lnr-enter-down" /></Link>
					                          <Link to="/edit-ticket" data-toggle="tooltip" data-placement="bottom" title="Editieren"><i className="lnr-pencil" /></Link>
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="löschen"><i className="lnr-trash" /></Link>
					                        </div>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="dropdown">
					                          <Link to className="btn link-red" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					                            Open <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
					                          </Link>
					                          <div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
					                            <Link to className="dropdown-item">Open</Link>
					                            <Link to className="dropdown-item">On hold</Link>
					                            <Link to className="dropdown-item">Escalated</Link>
					                            <Link to className="dropdown-item">Closed</Link>
					                          </div>
					                        </span>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <Link  className="comtTrigger" data-toggle="tooltip" data-placement="bottom" title="Kommentar"><i className="lnr-bubble" /></Link>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="custom_avatar float-right" data-toggle="tooltip" data-placement="bottom" title data-original-title="Anita Sivakumar">AS</span>
					                      </td>
					                    </tr>
					                  </tbody>
					                </table>
					              </li>
					              <li>
					                <table className="table m-0">
					                  <tbody>
					                    <tr>
					                      <td width="5%">
					                        <div className="mediaIcon">
					                          <span>LA </span>
					                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className /></label>
					                        </div>
					                      </td>
					                      <td width="60%">
					                        <div className="custom_item">
					                          <p><Link to="/tickets-detail">#2377 Ticket </Link></p>
					                          <ul className="custom_breadcrumb">
					                            <li><Link to="/tickets-contact-info" className="link">Lawrence </Link></li>
					                            <li><Link to="/tickets-contact-info" className="link">One ix</Link> </li>
					                            <li><Link  className data-toggle="tooltip" data-placement="bottom" title="Erstellt am 28 Sep 2020 08:36 AM">28 Sep </Link></li> 
					                            <li><Link  className data-toggle="tooltip" data-placement="bottom" title="Überfällig seit 30 Sep 2020 08:36 AM">30 Sep 08:36 AM</Link></li>
					                          </ul>
					                        </div>
					                      </td>
					                      <td className="text-center" width="20%">
					                        <div className="hlpcnt action-btns">
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="Ticketvoransicht"><i className="lnr-enter-down" /></Link>
					                          <Link to="/edit-ticket" data-toggle="tooltip" data-placement="bottom" title="Editieren"><i className="lnr-pencil" /></Link>
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="löschen"><i className="lnr-trash" /></Link>
					                        </div>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="dropdown">
					                          <Link to className="btn link-red" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					                            Open <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
					                          </Link>
					                          <div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
					                            <Link to className="dropdown-item">Open</Link>
					                            <Link to className="dropdown-item">On hold</Link>
					                            <Link to className="dropdown-item">Escalated</Link>
					                            <Link to className="dropdown-item">Closed</Link>
					                          </div>
					                        </span>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <Link  className="comtTrigger" data-toggle="tooltip" data-placement="bottom" title="Kommentar"><i className="lnr-bubble" /></Link>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="custom_avatar float-right" data-toggle="tooltip" data-placement="bottom" title data-original-title="Anita Sivakumar">AS</span>
					                      </td>
					                    </tr>
					                  </tbody>
					                </table>
					              </li>
					              <li>
					                <table className="table m-0">
					                  <tbody>
					                    <tr>
					                      <td width="5%">
					                        <div className="mediaIcon">
					                          <span>LA </span>
					                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className /></label>
					                        </div>
					                      </td>
					                      <td width="60%">
					                        <div className="custom_item">
					                          <p><Link to="/tickets-detail">#2378 Ticket </Link></p>
					                          <ul className="custom_breadcrumb">
					                            <li><Link to="/tickets-contact-info" className="link">Lawrence </Link></li>
					                            <li><Link to="/tickets-contact-info" className="link">One ix</Link> </li>
					                            <li><Link  className data-toggle="tooltip" data-placement="bottom" title="Erstellt am 28 Sep 2020 08:36 AM">28 Sep </Link></li> 
					                            <li><Link  className data-toggle="tooltip" data-placement="bottom" title="Überfällig seit 30 Sep 2020 08:36 AM">30 Sep 08:36 AM</Link></li> 
					                          </ul>
					                        </div>
					                      </td>
					                      <td className="text-center" width="20%">
					                        <div className="hlpcnt action-btns">
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="Ticketvoransicht"><i className="lnr-enter-down" /></Link>
					                          <Link to="/edit-ticket" data-toggle="tooltip" data-placement="bottom" title="Editieren"><i className="lnr-pencil" /></Link>
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="löschen"><i className="lnr-trash" /></Link>
					                        </div>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="dropdown">
					                          <Link to className="btn link-red" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					                            Open <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
					                          </Link>
					                          <div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
					                            <Link to className="dropdown-item">Open</Link>
					                            <Link to className="dropdown-item">On hold</Link>
					                            <Link to className="dropdown-item">Escalated</Link>
					                            <Link to className="dropdown-item">Closed</Link>
					                          </div>
					                        </span>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <Link  className="comtTrigger" data-toggle="tooltip" data-placement="bottom" title="Kommentar"><i className="lnr-bubble" /></Link>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="custom_avatar float-right" data-toggle="tooltip" data-placement="bottom" title data-original-title="Anita Sivakumar">AS</span>
					                      </td>
					                    </tr>
					                  </tbody>
					                </table>
					              </li>
					              <li>
					                <table className="table m-0">
					                  <tbody>
					                    <tr>
					                      <td width="5%">
					                        <div className="mediaIcon">
					                          <span>LA </span>
					                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className /></label>
					                        </div>
					                      </td>
					                      <td width="60%">
					                        <div className="custom_item">
					                          <p><Link to="/tickets-detail">#2379 Ticket </Link></p>
					                          <ul className="custom_breadcrumb">
					                            <li><Link to="/tickets-contact-info" className="link">Lawrence </Link></li>
					                            <li><Link to="/tickets-contact-info" className="link">One ix</Link> </li>
					                            <li><Link  className data-toggle="tooltip" data-placement="bottom" title="Erstellt am 28 Sep 2020 08:36 AM">28 Sep </Link></li> 
					                            <li><Link  className data-toggle="tooltip" data-placement="bottom" title="Überfällig seit 30 Sep 2020 08:36 AM">30 Sep 08:36 AM</Link></li> 
					                          </ul>
					                        </div>
					                      </td>
					                      <td className="text-center" width="20%">
					                        <div className="hlpcnt action-btns">
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="Ticketvoransicht"><i className="lnr-enter-down" /></Link>
					                          <Link to="/edit-ticket" data-toggle="tooltip" data-placement="bottom" title="Editieren"><i className="lnr-pencil" /></Link>
					                          <Link  data-toggle="tooltip" data-placement="bottom" title="löschen"><i className="lnr-trash" /></Link>
					                        </div>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="dropdown">
					                          <Link to className="btn link-red" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					                            Open <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
					                          </Link>
					                          <div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
					                            <Link to className="dropdown-item">Open</Link>
					                            <Link to className="dropdown-item">On hold</Link>
					                            <Link to className="dropdown-item">Escalated</Link>
					                            <Link to className="dropdown-item">Closed</Link>
					                          </div>
					                        </span>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <Link  className="comtTrigger" data-toggle="tooltip" data-placement="bottom" title="Kommentar"><i className="lnr-bubble" /></Link>
					                      </td>
					                      <td className="text-center" width="5%">
					                        <span className="custom_avatar float-right" data-toggle="tooltip" data-placement="bottom" title data-original-title="Anita Sivakumar">AS</span>
					                      </td>
					                    </tr>
					                  </tbody>
					                </table>
					              </li>
					            </ul>
					          </div>
					          <div className="pagiNation">
					            Einträge gesamt <Link><i className="lnr lnr-chevron-left" /></Link> <span>1 - 1</span> <Link><i className="lnr lnr-chevron-right" /></Link>
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
export default Tickets
