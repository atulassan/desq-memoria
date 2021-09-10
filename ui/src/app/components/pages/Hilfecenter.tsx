import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
 
import Leftsidemenu from '../modules/Leftsidemenu';

export class Hilfecenter extends Component{
    render(){
        return(
            <div>
                <Leftsidemenu />
                 
                  <div className="mainWrapper">
                    <div className="row no-gutters">
                      <div className="col-lg-12">
                        <div className="mainWrapperBody">
                          <div className="helpFilter">
                            <div className="row no-gutters">
                              <div className="col-lg-6">
                                <label className="ix-checkbox-label pl-2"><input type="checkbox" className="ix-checkbox" /><mark /></label> 
                                <span className="dropdown">
                                  <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    VERÖFFENTLICHT <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to="" className="dropdown-item">Veröffentlicht</Link>
                                    <Link to="" className="dropdown-item">Meine Articles</Link>
                                  </div>
                                </span>
                              </div>
                              <div className="col-lg-6 text-right">
                                <ul className="helpFilterRight">
                                  <li className="dropdown mr-1">
                                    <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                      <i className="fa fa-filter" data-toggle="tooltip" data-placement="bottom" title="Filter" />
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <span  className="dropdown-item title">NACH SICHTBARKEIT FILTERN</span>
                                      <Link to="" className="dropdown-item">Allen Benutzern anzeigen</Link>
                                      <Link to="" className="dropdown-item">Nur registrierten Benutzern</Link>
                                      <Link to="" className="dropdown-item">Nur Agenten</Link>
                                      <span  className="dropdown-item title">NACH ABLAUF FILTERN</span>
                                      <Link to="" className="dropdown-item">30 Tage</Link>
                                      <Link to="" className="dropdown-item">7 Tage</Link>
                                      <Link to="" className="dropdown-item">Heute</Link>
                                    </div>
                                  </li>
                                  <li className="dropdown">
                                    <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                      <i className="fa fa-ellipsis-v" data-toggle="tooltip" data-placement="bottom" title="Voreinstellungen Anzeigen" />
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                      <span  className="dropdown-item title">NACH SICHTBARKEIT FILTERN</span>
                                      <div className="helpFilterRightSelect">
                                        <div className="form-group">
                                          <label>Sortieren Nach</label>
                                          <select  className="form-control chosen-select">
                                            <option value={0}>Letzte zuerst</option>
                                            <option value={0}>Älteste zuerst</option>
                                          </select>
                                        </div>
                                        <div className="form-group">
                                          <label>Sortieren Nach</label>
                                          <select  className="form-control chosen-select">
                                            <option value={0}>Erstellungszeit</option>
                                            <option value={0}>Änderungszeit</option>
                                          </select>
                                        </div>
                                        <div className="form-group mb-0">
                                          <label>Einträge Pro Seite</label>
                                          <select  className="form-control chosen-select">
                                            <option value={0}>10</option>
                                            <option value={0}>20</option>
                                            <option value={0}>30</option>
                                            <option value={0}>40</option>
                                            <option value={0}>50</option>
                                            <option value={0}>60</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="row no-gutters">
                            <div className="col-lg-12">
                              <div className="helpHeader">
                                <table className="table m-0">
                                  <tbody>
                                    <tr>
                                      <td colSpan={2} data-width="50%">
                                        <div className="input-group pl-2">
                                          <div className="input-group-prepend">
                                             <Link to="#" className="btn"><i className="lnr lnr-magnifier" /></Link> 
                                            <input type="text" className="form-control searchBox" placeholder="Suche in Alle Module" aria-label="search" />
                                          </div>
                                        </div>
                                      </td>
                                      <td className="text-center" data-width="10%">Ansichten</td>
                                      <td className="text-center" data-width="10%">Kommentare</td>
                                      <td className="text-center" data-width="10%">Gefällt-mir</td>
                                      <td className="text-center" data-width="10%"><span data-toggle="tooltip" data-placement="bottom" title="Negativbewertungen">Negativbewertungen</span></td>
                                      <td className="text-center" data-width="10%">&nbsp;</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="helpList min-height80">
                                <ul>
                                  <li>
                                    <table className="table m-0">
                                      <tbody>
                                        <tr>
                                          <td data-width="5%"><div className="hlpchk"><label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark /></label></div></td>
                                          <td data-width="5%"><div className="custom_avatar" data-toggle="tooltip" data-placement="bottom" title="Anita Sivakumar">AS</div></td>
                                          <td data-width="40%"><div className="custom_item">Answering your first ticket. <span className="custom_breadcrumb"> <span>anitha Sivakumar</span> <span>1 Tag zuvor</span></span></div></td>
                                          <td className="text-center" data-width="10%"><div className="hlpcnt">0</div></td>
                                          <td className="text-center" data-width="10%"><div className="hlpcnt">0</div></td>
                                          <td className="text-center" data-width="10%"><div className="hlpcnt">0</div></td>
                                          <td className="text-center" data-width="10%"><div className="hlpcnt">0</div></td>
                                          <td className="text-center" data-width="10%">
                                            <div className="hlpcnt action-btns">
                                              <span  data-toggle="tooltip" data-placement="bottom" title="Bearbeiten"><i className="lnr-pencil" /></span>
                                              <span className="dropdown">
                                                <button className="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                  <img src="/assets/images/svg/v-dot.svg"  data-toggle="tooltip" data-placement="bottom" title="Weitere Aktion" alt="Vdot" />
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                  <Link to="" className="dropdown-item">löschen</Link>
                                                </div>
                                              </span>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </li>
                                </ul>
                              </div>
                              <div className="pagiNation">
                                Einträge gesamt <Link to="#"><i className="lnr lnr-chevron-left" /></Link> <span>1 - 1</span> <Link to="#"><i className="lnr lnr-chevron-right" /></Link>
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
export default Hilfecenter