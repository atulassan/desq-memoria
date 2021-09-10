import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../templates/HeaderKontakte';
import Footer from '../templates/Footer';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class KontakteDetail extends Component{
    render(){
        return(
            <div>
                <Header />
                    <div className="mainWrapper pl-0">
                      <div className="mainWrapperBody">
                        <div className="ticketcolum left">
                          <div className="ticketcolumBackBtn p10">
                            <Link to="/kunden">
                              <i style={{position: 'relative', top: '2px', paddingRight: '10px'}} className="fa fa-arrow-left" />
                            </Link>
                            <span className=" dropdown ">
                              <Link className="pl-0 " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Alle Kontakte <i style={{position: 'relative', left: '5px', top: '-1px'}} className="fa fa-sort-desc" />
                              </Link>
                              <div className="dropdown-menu posLeft" aria-labelledby="dropdownMenuButton">
                                <span className="dropSearch"><input type="text" placeholder="Suchen" /></span>
                                <div className="dropMinHeight">
                                  <Link className="dropdown-item">Alle Ansichten</Link>
                                  <Link className="dropdown-item">Alle Kontakte</Link>
                                  <Link className="dropdown-item">Anonymous Kontakte</Link>
                                  <Link className="dropdown-item">Kontakte mit CRM verknüpft</Link>
                                  <Link className="dropdown-item">Kontakte-CRM-Verknüpfung aufgehoben</Link>
                                  <Link className="dropdown-item">Last 30 days</Link>
                                  <Link className="dropdown-item">Meine Kontakte</Link>
                                  <Link className="dropdown-item">New Today</Link>
                                  <Link className="dropdown-item">Spam Kontakte</Link>
                                  <Link className="dropdown-item">Suche in</Link>
                                  <Link className="dropdown-item">Archivierte Ansichten</Link>
                                </div>
                              </div>
                            </span>
                          </div>
                          <div className="overflowScroll">
                            <div className="recentTicketList p10">
                              <ul>
                                <li className="active">
                                  <div className="profile-info adminBenutzerOpen">
                                    <h6 className="primary-val"><span className="ph_container">LA</span> Lawrence</h6>
                                  </div>
                                  <div className="recentTicketSmList">
                                    <span className="recent-sm-list"><Link>support@oneixsupport.com</Link></span>
                                    <span className="recent-sm-list"><Link>1 888 900 9646</Link></span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="ticketcolum center">
                          <div className="overflowScroll">
                            <Tabs>
                              <TabList className="nav-tabs">
                                <Tab><i className="fa fa-ticket" /></Tab>
                                <Tab><i className="fa fa-bookmark" /></Tab>
                                <Tab><i class="fa fa-history"></i></Tab>
                              </TabList>
                              <TabPanel>
                                <div className="form-page">
                                  <form id>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="media Kontakte_company_logo">
                                          <div className="mediaImg"><img src="images/default-image.png" alt="default" /></div>
                                          <div className="media-body">
                                            <h5 className="mt-0 hint-title smTitle mt-2 mb-0">one ix gmbh</h5>
                                          </div>
                                        </div>
                                        <div className="contactInfoListTxt mt-3 pt-3" style={{borderTop: '1px solid #eee'}}>
                                          <p>Strasse nr. <span>Rosenweg 12</span></p>
                                          <p>PLZ <span>4452 </span></p>
                                          <p>Ort <span>Itingen</span></p>
                                          <p>Kanton <span>Basel-Land</span></p>
                                          <p>Land <span>Schweiz</span></p>
                                        </div>

                                        <div className="contactInfoList" style={{borderTop: '1px solid #eee'}}>
                                          <ul>
                                            <li><i className="fa fa-phone-square" />  +41 61 971 75 75</li>
                                            <li><i className="fa fa-envelope" />  info@oneix.ch</li>
                                            <li><i className="fa fa-globe" />  www.oneix.ch</li>
                                          </ul>
                                        </div>
                                        
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div className="form-page">
                                  <form id>
                                    <input type="text" placeholder="Suchen" className="form-control" />
                                    <div className="nichtGefunden">
                                      <i className="fa fa-info-circle" aria-hidden="true" />
                                      Artikel nicht gefunden
                                    </div>
                                  </form>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div className="row">
                                  <div className="col-md-12">
                                    <h5>Gestern</h5>
                                    <span className="mute-text-sm">01 Oct 2020</span>
                                    <ul className="timeline">
                                      <li>
                                        <Link>#102 Test</Link>
                                        <div className="mentionsSmList">
                                          <span className="bredcrum-sm-list">03:38 PM</span>
                                          <span className="dotSep">.</span>
                                          <span className="bredcrum-sm-list">anitha Sivakumar</span>
                                          <span className="dotSep">.</span>
                                          <span className="bredcrum-sm-list">Open</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </TabPanel>
                            </Tabs>
                          </div>
                        </div>
                        <div className="ticketcolum right">
                          <div className="mainWrapperBody">
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                    <Tabs>
                                      <TabList>
                                        <Tab>Übersicht</Tab>
                                        <Tab>Verlauf</Tab>
                                        <Tab>Activities</Tab>
                                        <Tab>Tickets</Tab>
                                        <Tab>Eintrag in die Zeitplanung</Tab>
                                        <Tab>Zufriedenheitsbewertung</Tab>
                                        <Tab>Produkte</Tab>
                                        <Tab>Anhänge</Tab>
                                        <Tab>Kommentare</Tab>
                                        <Tab>Kontakte</Tab>

                                        <span className="tabRightdrop dropdown active">
                                            <Link className id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="r90 fa fa-ellipsis-v" /></Link>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                              <Link to="" className="dropdown-item"><i className="fa fa-pencil mr-2" /> Editieren</Link>
                                              <Link to="" className="dropdown-item"><i className="fa fa-arrows mr-2" />Als Endnutzer hinzufügen</Link>
                                              <Link to="" className="dropdown-item"><i className="fa fa-clock-o mr-2" />Folgen</Link>
                                              <Link to="" className="dropdown-item"><i className="fa fa-ban mr-2" />Spam markieren</Link>
                                              <Link to="" className="dropdown-item"><i className="fa fa-trash mr-2" />Löschen</Link>
                                              <Link to="" className="dropdown-item"><i className="fa fa-ban mr-2" />Spam markieren</Link>
                                            </div>
                                          </span>

                                      </TabList>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="text-right p20"><Link className="progressBarTrigger btn-white btn-sm">Erweitern</Link></div>
                                          <div className="overAllRslt">
                                            <ul>
                                              <li>
                                                <div className="tktBase">
                                                  <p>1 <span>Alle Tickets</span></p>
                                                </div>
                                                <div className="tktBase">
                                                  <p>1 <span>Überfällige Tickets</span></p>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="tktBase">
                                                  <p>00:00 <i>Stunden</i><span>Durchschnittliche Reaktionszeit</span></p>
                                                </div>
                                                <div className="tktBase">
                                                  <p>00:00 <i>Stunden</i><span>Durchschnittliche Reaktionszeit</span></p>
                                                </div>
                                              </li>
                                              <li>
                                                <div className="tktBase">
                                                  <p><img className="mr-2" src="images/emoji-smile.png" alt="emoji-smile" /> 0% <span>Zufriedenheitsbewertung</span></p>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                          <div className="p20 progressBarSection" style={{display: 'none'}}>
                                            <div className="row">
                                              <div className="col-lg-4">
                                                <div className>
                                                  <div className="rprogress mx-auto" data-value={100}>
                                                    <span className="progress-left">
                                                      <span className="progress-bar border-primary" />
                                                    </span>
                                                    <span className="progress-right">
                                                      <span className="progress-bar border-primary" />
                                                    </span>
                                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                      Kanäle
                                                    </div>
                                                  </div>
                                                  <div className="text-center">Email 1</div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4">
                                                <div className="horiPercent">
                                                  <div className="form-group">
                                                    <label>Erstreaktionszeit <span>00:00</span></label>
                                                    <div className="progress progress-bar-horizontal">
                                                      <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="form-group">
                                                    <label>Reaktionszeit <span>00:00</span></label>
                                                    <div className="progress progress-bar-horizontal">
                                                      <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="form-group">
                                                    <label>Lösungszeit <span>00:00</span></label>
                                                    <div className="progress progress-bar-horizontal">
                                                      <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="form-group">
                                                    <ul className="inlineRslt">
                                                      <li>0</li>
                                                      <li><i className="lnr lnr-chevron-left" /> <span /> <i className="lnr lnr-chevron-right" /></li>
                                                      <li>10</li>
                                                      <div className="text-center">Durchschnitt in Stunden</div>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-4">
                                                <div className="verPercent">
                                                  <div className="progress progress-bar-vertical">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                                    </div>
                                                  </div>
                                                  <div className="progress progress-bar-vertical">
                                                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                                    </div>
                                                  </div>
                                                  <div className="progress progress-bar-vertical">
                                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{height: '0%'}}>
                                                    </div>
                                                  </div>
                                                </div>
                                                <ul>
                                                  <li>0% Good(0)</li>
                                                  <li>0% Okay(0)</li>
                                                  <li>0% Bad(0)</li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="uershit-active-tab">
                                            <div className="OpenTktsCountTab">1 <span>Offen</span></div>
                                          </div>
                                          <div className="activity_timeline uershit p20">
                                            <ul>
                                              <li>
                                                <div className="Htline_item ml-3">
                                                  <div className="Htline_item_cont">
                                                    <i className="lnr lnr-clock" />
                                                  </div>
                                                  <div className="H_timeline_cont">
                                                    <h4 className="font15 mb-1"><Link to="">#101 Here's your first ticket.Oneix.</Link> </h4>
                                                    <p>Oneix <span className="dotSep">.</span>  Sep 28 2020 08:36 AM <span className="dotSep">.</span> Verspätet um 7 Tage 3 Stunden</p>
                                                  </div>
                                                  <div className="profile-info">
                                                    <h6 className="primary-val"><span className="ph_container">AS</span></h6>
                                                  </div>
                                                </div></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="row">
                                            <div className="col-lg-6">
                                              <div className="p20">
                                                <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark className="mr-1" /> Nur meine Aktivitäten anzeigen</label>
                                              </div>
                                            </div>
                                            <div className="col-lg-6 text-right">
                                              <div className="p20">
                                                <span className="dropdown">
                                                  <Link className id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-ellipsis-h" /></Link>
                                                  <div className="dropdown-menu dropMinHeight" aria-labelledby="dropdownMenuButton">
                                                    <Link to="" className="dropdown-item">Eingehende Antworten</Link>
                                                    <Link to="" className="dropdown-item">Abgehende Antworten</Link>
                                                    <Link to="" className="dropdown-item">Status</Link>
                                                    <Link to="" className="dropdown-item">Kommentare</Link>
                                                    <Link to="" className="dropdown-item">Zeiteinträge</Link>
                                                    <Link to="" className="dropdown-item">Anhänge</Link>
                                                    <Link to="" className="dropdown-item">Aufgaben</Link>
                                                    <Link to="" className="dropdown-item">Anrufe</Link>
                                                    <Link to="" className="dropdown-item">Ereignisse</Link>
                                                    <Link to="" className="dropdown-item">Genehmigungen</Link>
                                                    <Link to="" className="dropdown-item">Automatisierung</Link>
                                                    <Link to="" className="dropdown-item">Ticketverknüpfungen</Link>
                                                    <Link to="" className="dropdown-item">Benachrichtigungen</Link>
                                                    <Link to="" className="dropdown-item">Workflows</Link>
                                                    <Link to="" className="dropdown-item">Makros</Link>
                                                    <Link to="" className="dropdown-item">Eskalationen</Link>
                                                    <Link to="" className="dropdown-item">Zeitbasierte Aktionen</Link>
                                                    <Link to="" className="dropdown-item">Blueprint</Link>
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                            <div className="history_timeline p20">
                                              <ul>
                                                <li className="timeline-item">
                                                  <div className="tline_icn-cont">
                                                    <span className="icon-duetime1"><i className="lnr lnr-clock" /></span>
                                                  </div>
                                                  <div className="timeline-cont">
                                                    <div className="tline-datebase"><span className="timeline-date">01 Okt 2020</span> <span className="timeline-time">09:38 PM</span></div>
                                                    <div className="timeline-subj mt2">Ticket überschritt die Auflösungsfälligkeitszeit</div>
                                                  </div>
                                                </li>
                                                <li className="timeline-item">
                                                  <div className="tline_icn-cont">
                                                    <span className="icon-duetime1"><i className="lnr lnr-tag" /></span>
                                                  </div>
                                                  <div className="timeline-cont">
                                                    <div className="tline-date"><span className="timeline-time">09:38 PM</span></div>
                                                    <div className="timeline-subj mt2">Dienstleistungvereinbarung wurde aktiviert</div>
                                                    <div className="mt-1">
                                                      <span className="tline-label">DGV-Bezeichnung   <span className="tline-val">Priority-based SLAs</span></span>
                                                      <span className="tline-label">Fälligkeitsdatum geändert von <span className="tline-val">02.10.2020 12:00 PM an 01.10.2020 09:38 PM</span></span>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="timeline-item">
                                                  <div className="tline_icn-cont">
                                                    <span className="icon-duetime1"><i className="lnr lnr-user" /></span>
                                                  </div>
                                                  <div className="timeline-cont">
                                                    <div className="tline-date"><span className="timeline-time">09:38 PM</span></div>
                                                    <div className="timeline-subj mt2">anitha Sivakumar übermittelte neue ticket</div>
                                                    <div className="mt-1">
                                                      <span className="tline-label">Konto Name <span className="tline-val">Sar</span></span>
                                                      <span className="tline-label">Kontakt Name <span className="tline-val">Sar</span></span>
                                                      <span className="tline-label">Betreff <span className="tline-val">Test</span></span>
                                                      <span className="tline-label">Beschreibung <span className="tline-val">asfdfasfasfsdf</span></span>
                                                      <span className="tline-label">Status <span className="tline-val">Open</span></span>
                                                      <span className="tline-label">Ticket Besitzer <span className="tline-val">anitha Sivakumar</span></span>
                                                      <span className="tline-label">Fälligkeitsdatum <span className="tline-val">02.10.2020 12:00 PM</span></span>
                                                      <span className="tline-label">Priorität <span className="tline-val">High</span></span>
                                                      <span className="tline-label">Kanal <span className="tline-val">Phone</span></span>
                                                      <span className="tline-label">Klassifizierung <span className="tline-val">Problem</span></span>
                                                      <span className="tline-label">Reaktionszeit <span className="tline-val">02.10.2020 12:00 PM</span></span>
                                                      <span className="tline-label">Layout <span className="tline-val">one ix gmbh</span></span>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticketcolum_right_scroll">
                                          <div className="p20">
                                            <div className="row">
                                              <div className="col-lg-6">
                                                <div className="oraganizationInfo">
                                                  <ul>
                                                    <li>
                                                      <div className="profile-info">
                                                        <span className="dropdown">
                                                          <Link to="" className="rndbtn float-left mr-3">+</Link>
                                                          <div className="dropdown-menu posLeft" aria-labelledby="dropdownMenuButton" style={{marginTop: '30px'}}>
                                                            <Link to="" className="dropdown-item drop_title">HINZUFÜGEN</Link>
                                                            <Link to="" className="dropdown-item">Anruf</Link>
                                                            <Link to="" className="dropdown-item">Aufgabe</Link>
                                                            <Link to="" className="dropdown-item">Ereignis</Link>
                                                          </div>
                                                        </span>
                                                        <span className="profile-info">
                                                          <h6 className="primary-val pl-3 pt-2">Keine Gruppen zugewiesen 
                                                            <span className="dropdown">
                                                              <i style={{position: 'relative', left: '5px', top: '-1px', width: '20px', display: 'inline-block'}} className="fa fa-sort-desc" />
                                                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <Link to="" className="dropdown-item drop_title">Aktivitäten</Link>
                                                                <Link to="" className="dropdown-item">Kommende Aktivitäten</Link>
                                                                <Link to="" className="dropdown-item ">Alle Aktivitäten</Link>
                                                                <Link to="" className="dropdown-item drop_title">Anrufe</Link>
                                                                <Link to="" className="dropdown-item ">Kommende Anrufe</Link>
                                                                <Link to="" className="dropdown-item ">Alle Anrufe</Link>
                                                                <Link to="" className="dropdown-item drop_title">Aufgaben</Link>
                                                                <Link to="" className="dropdown-item">Kommende Aufgaben</Link>
                                                                <Link to="" className="dropdown-item">Alle Aufgaben</Link>
                                                                <Link to="" className="dropdown-item drop_title">Ereignisse</Link>
                                                                <Link to="" className="dropdown-item">Kommende Ereignisse</Link>
                                                                <Link to="" className="dropdown-item">Alle Ereignisse</Link>
                                                              </div>
                                                            </span>
                                                          </h6>
                                                        </span>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 text-right">
                                                <ul className="rightSmList">
                                                  <li className="dropdown">Fälligkeitsdatum / Anfangszeit <Link className="pl-0 " id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i style={{position: 'relative', left: '5px', top: '-1px'}} className="fa fa-sort-desc" /></Link>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                      <Link to="" className="dropdown-item drop_title">Sortieren nach</Link>
                                                      <Link to="" className="dropdown-item">Erstellungszeit</Link>
                                                      <Link to="" className="dropdown-item">Fälligkeitsdatum / Anfangszeit</Link>
                                                    </div>
                                                  </li>
                                                  <li>
                                                    <Link className="pl-0 " data-toggle="tooltip" data-placement="bottom" title data-original-title="Neueste Einträge zuerst anzeigen">
                                                      <i className="fa fa-filter" /></Link>
                                                  </li>
                                                </ul>
                                              </div>
                                              <div className="col-lg-12">
                                                <div className="no-feeds">
                                                  <h1>Keinkommende aktivitäten für kontakt!</h1>
                                                  <p>aktivität neu hinzufügen – Klick auf  <Link to="" className="link-blue mr-3 ml-3 rndbtn">+</Link> Symbol</p>
                                                  <p><span className="line80" /></p>
                                                  <p>Wenn Sie mehr erfahren möchten, <Link to="" className="link pl-2">Hier klicken</Link></p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="Tickets-tab-top p20">
                                            <div className="row">
                                              <div className="col-lg-4">
                                                <div className="TicketsTopLeft">
                                                  <span className="dropdown">
                                                    <Link className="mt-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                      Alle Tickets <i style={{position: 'relative', left: '5px', top: '-1px'}} className="fa fa-sort-desc" /></Link>
                                                    <div className="dropdown-menu posLeft" aria-labelledby="dropdownMenuButton">
                                                      <Link to="" className="dropdown-item">Alle Tickets</Link>
                                                      <Link to="" className="dropdown-item">Offene Tickets</Link>
                                                      <Link to="" className="dropdown-item">Tickets gehalten</Link>
                                                      <Link to="" className="dropdown-item">Überfällige Tickets</Link>
                                                      <Link to="" className="dropdown-item">Spam Tickets</Link>
                                                    </div>
                                                  </span></div>
                                              </div>
                                              <div className="col-lg-8 text-right">
                                                <ul className="TicketsTopCount">
                                                  <li> Alle(s) <span>1</span></li>
                                                  <li> Often <span>1</span></li>
                                                  <li> Im Wartezustand <span>0</span></li>
                                                  <li> Überfällig <span>0</span></li>
                                                  <li> <Link to="/edit-ticket" className="link-blue rndbtn">+</Link></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="activity_timeline p20">
                                            <ul>
                                              <li>
                                                <div className="Htline_date">
                                                  <p> 28 Sep 2020<span>08:36 AM</span></p>
                                                </div>
                                                <div className="Htline_item">
                                                  <div className="Htline_item_cont">
                                                    <i className="lnr lnr-clock" />
                                                  </div>
                                                  <div className="H_timeline_cont">
                                                    <h4 className="font15 mb-1"><Link to="">#101 Here's your first ticket.Oneix.</Link> </h4>
                                                    <p>Oneix <span className="dotSep">.</span>  Verspätet um 7 Tage 3 Stunden</p>
                                                  </div>
                                                  <div className="profile-info">
                                                    <h6 className="primary-val"><span className="ph_container">AS</span></h6>
                                                  </div>
                                                </div></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <div className="no-feeds">
                                                <h1>Keine Eintrag in die Zeitplanung in Kontakt</h1>
                                                <p><span className="line80" /></p>
                                                <p>Wenn Sie mehr erfahren möchten, <Link to="" className="link pl-2">klicken Sie hier</Link></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="ratingTop p20">
                                            <div className="row">
                                              <div className="col-lg-6">
                                                <div className="ratingTopLeft">
                                                  <span className="mr-2">Zufriedenheitsbewertung</span> <span><img src="images/emoji-smile.png" alt="emoji-smile" /></span> <span className="ml-2 mr-2">0%</span> <span>(0 Bewertung)</span>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 text-right">
                                                <ul className="ratingTopCount">
                                                  <li className="hpy-gr-txt">Good <span>0</span></li>
                                                  <li className="hpy-yel-txt">Okay <span>0</span></li>
                                                  <li className="hpy-red-txt">Bad <span>0</span></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <div className="no-feeds">
                                                <h1>Sie erhalten eine Zufriedenheitsbewertung von kontakt.</h1>
                                                <p><span className="line80" /></p>
                                                <p>Wenn Sie mehr erfahren möchten, <Link to="" className="link pl-2">klicken Sie hier</Link></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <div className="no-feeds">
                                                <h1>Keine Produkt mit Kontakt verknüpft</h1>
                                                <p>Zur Produkt-Neuverknüpfung klicken Sie bitte auf  <Link to=""  className="link-blue mr-3 ml-3 rndbtn">+</Link> Symbol</p>
                                                <p><span className="line80" /></p>
                                                <p>Wenn Sie mehr erfahren möchten, <Link to="" className="link pl-2">klicken Sie hier</Link></p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="no-feeds">
                                            <h1>KeinGenehmigungen für ticket!</h1>
                                            <p>Genehmigungen  neu hinzufügen – Klick auf  <Link to=""  className="link-blue mr-3 ml-3 rndbtn">+</Link> Symbol</p>
                                            <p><span className="line80" /></p>
                                            <p>Wenn Sie mehr erfahren möchten,  <Link to="" className="link pl-2">klicken Sie hier</Link></p>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="row">
                                            <div className="col-lg-12">
                                              <div className="media p20">
                                                <div className="mediaImg font13">AS</div>
                                                <div className="media-body ">
                                                  <textarea className="form-control ticketcolumTxtarea" defaultValue={""} />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="ticketcolum_right_nr_btns">
                                            <div className="row">
                                              <div className="col-lg-5">
                                                AS
                                              </div>
                                              <div className="col-lg-7 text-right ">
                                                <Link to="" className="btn-theme btn-sm mr-2">Kommentar</Link>
                                                <Link to="" className="btn-white btn-sm">Löschen</Link>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className="ticket_contact_info_scroll">
                                          <div className="p20 kontakteList">
                                            <div className="row">
                                              <div className="col-lg-12">
                                                <h3>Kontakte</h3>
                                              </div>
                                              <div className="col-lg-6 mb-4">
                                                <div className="media">
                                                  <div className="mediaImg"><img className="mr-2" src="images/default-image.png" alt="default" /></div>
                                                  <div className="media-body">
                                                    <h5 className="mt-0 hint-title smTitle mt-2 mb-1">one ix gmbh</h5>
                                                    <p class="mb-1"><i class="fa fa-map-marker mr-2"></i>  Rosenweg 12</p>
                                                    <p class="mb-1 mr-2"><i class="fa fa-phone mr-2"></i> +41414291501</p>
                                                    <p class="mb-1"><i class="fa fa-envelope mr-2"></i>  info@oneix.ch</p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 mb-4">
                                                <div className="media">
                                                  <div className="mediaImg"><img className="mr-2" src="images/default-image.png" alt="default" /></div>
                                                  <div className="media-body">
                                                    <h5 className="mt-0 hint-title smTitle mt-2 mb-1">one ix gmbh</h5>
                                                    <p class="mb-1"><i class="fa fa-map-marker mr-2"></i>  Rosenweg 12</p>
                                                    <p class="mb-1 mr-2"><i class="fa fa-phone mr-2"></i> +41414291501</p>
                                                    <p class="mb-1"><i class="fa fa-envelope mr-2"></i>  info@oneix.ch</p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 mb-4">
                                                <div className="media">
                                                  <div className="mediaImg"><img className="mr-2" src="images/default-image.png" alt="default" /></div>
                                                  <div className="media-body">
                                                    <h5 className="mt-0 hint-title smTitle mt-2 mb-1">one ix gmbh</h5>
                                                    <p class="mb-1"><i class="fa fa-map-marker mr-2"></i>Rosenweg 12</p>
                                                    <p class="mb-1 mr-2"><i class="fa fa-phone mr-2"></i>+41414291501</p>
                                                    <p class="mb-1"><i class="fa fa-envelope mr-2"></i>info@oneix.ch</p>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 mb-4">
                                                <div className="media">
                                                  <div className="mediaImg"><img className="mr-2" src="images/default-image.png" alt="default" /></div>
                                                  <div className="media-body">
                                                    <h5 className="mt-0 hint-title smTitle mt-2 mb-1">one ix gmbh</h5>
                                                    <p class="mb-1"><i class="fa fa-map-marker mr-2"></i>Rosenweg 12</p>
                                                    <p class="mb-1 mr-2"><i class="fa fa-phone mr-2"></i>+41414291501</p>
                                                    <p class="mb-1"><i class="fa fa-envelope mr-2"></i>info@oneix.ch</p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      </TabPanel>
                                    </Tabs>

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
export default KontakteDetail
