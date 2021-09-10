import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/HeaderKontakte';
import Footer from '../templates/Footer';
import Leftsidemenu from '../modules/Leftsidemenu';

export class Kunden extends Component{
    render(){
        return(
            <div>
                <Leftsidemenu />
                <Header />
                    <div className="mainWrapper">
                      <div className="row no-gutters">
                        <div className="col-lg-12">
                          <div className="mainWrapperBody">
                            <div className="requestqueuecontainer">
                              <div className="row no-gutters mt-2 mb-2">
                                <div className="col-lg-6">
                                  <span className="dropdown">
                                    <i style={{position: 'relative', top: '2px', paddingRight: '10px', color: '#f6b241'}} className="fa fa-star" />
                                    <button className="btn pl-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                      Alle Kontakte (All) <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <span className="dropSearch"><input type="text" placeholder="Suchen" /></span>
                                      <div className="dropMinHeight">
                                        <Link to=""  className="dropdown-item">Stern-Ansichten</Link>
                                        <Link to=""  className="dropdown-item">Alle Tickets- 01</Link>
                                        <Link to=""  className="dropdown-item">Alle Ansichten</Link>
                                        <Link to=""  className="dropdown-item">Alle Tickets</Link>
                                        <Link to=""  className="dropdown-item">Antwort überfällig Tickets</Link>
                                        <Link to=""  className="dropdown-item">DLV verstößt gegen Tickets</Link>
                                        <Link to=""  className="dropdown-item">Gehalten-Tickets</Link>
                                        <Link to=""  className="dropdown-item">Geschlossene Tickets</Link>
                                        <Link to=""  className="dropdown-item">Geteilte offene Tickets</Link>
                                        <Link to=""  className="dropdown-item">Meine Antwort überfällig Tickets</Link>
                                        <Link to=""  className="dropdown-item">Meine Tickets</Link>
                                        <Link to=""  className="dropdown-item">Meine gehaltenen Tickets</Link>
                                        <Link to=""  className="dropdown-item">Meine offenen Tickets</Link>
                                        <Link to=""  className="dropdown-item">Meine überfällige Tickets</Link>
                                        <Link to=""  className="dropdown-item">Nicht zugewiesene, offene Tickets</Link>
                                        <Link to=""  className="dropdown-item">Offene Tickets</Link>
                                        <Link to=""  className="dropdown-item">Offene Tickets meines Teams</Link>
                                        <Link to=""  className="dropdown-item">Spam Tickets</Link>
                                        <Link to=""  className="dropdown-item">Tickets geteilt</Link>
                                        <Link to=""  className="dropdown-item">Tickets mit Kundenantwort</Link>
                                        <Link to=""  className="dropdown-item">Tickets zur Durchsicht</Link>
                                        <Link to=""  className="dropdown-item">Verpasste Chats</Link>
                                        <Link to=""  className="dropdown-item">Überfällige Tickets</Link>
                                      </div>
                                      <Link className="link text-center drop-btn" to="" ><i style={{position: 'relative', top: '1px', marginRight: '5px'}} className="lnr lnr-plus-circle" /> Spezifische Ansicht hinzufügen</Link>
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
                                        <Link to=""  className="dropdown-item mb-2" style={{borderBottom: '1px solid #eee'}}><i style={{position: 'relative', top: '1px', marginRight: '3px', fontSize: '12px !important'}} className="lnr lnr-book" /> Kontakte von Duplikaten befreien</Link>
                                        <div className="helpFilterRightSelect">
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
                                            <Link to=""  className="btn-theme btn-sm">Übernehmen</Link>
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
                                            </div>
                                          </td>
                                          <td width="60%">
                                            <div className="custom_item">
                                              <p><Link to="/kontakte-detail">Lawrence</Link></p>
                                              <ul className="custom_breadcrumb">
                                                <li><Link className="link">One ix</Link> </li>
                                                <li><Link>support@zohosupport.com</Link></li> 
                                                <li><Link>1 888 900 9646</Link></li> 
                                              </ul>
                                            </div>
                                          </td>
                                          <td className="text-center" width="20%">
                                            <div className="hlpcnt action-btns">
                                              <Link to="/kontakte-edit" data-toggle="tooltip" data-placement="bottom" title data-original-title="Editieren"><i className="lnr-pencil" /></Link>
                                              <Link data-toggle="tooltip" data-placement="bottom" title data-original-title="löschen"><i className="lnr-trash" /></Link>
                                              <Link to="/add-ticket" data-toggle="tooltip" data-placement="bottom" title data-original-title="Ticket hinzufügen"><i className="lnr-file-add" /></Link>
                                            </div>
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
export default Kunden
