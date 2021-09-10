import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Leftsidemenu from '../modules/Leftsidemenu';

export class Home extends Component{
    render(){
        return(
            <div>
                <Leftsidemenu />
                <Header />
                  <div className="mainWrapper">
                    <div className="row no-gutters">
                      <div className="col-lg-12">
                        <div className="mainWrapperBody">
                          <div className="feeds-container mauto">
                            <div className="feeds-stream">
                              <div className="mb-4">
                                <span className="dropdown">
                                  <button className="btn pl-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Alle(s) <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item">Offene Tickets</Link>
                                    <Link className="dropdown-item">Alle Status</Link>
                                  </div>
                                </span>
                              </div>
                              <div className="feeds-stream-content mb-4">
                                <div className="feedImg">
                                  <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                </div>
                                <div className="mentions-input-box">
                                  <textarea placeholder="Was tun Sie gerade?" id className defaultValue={""} />
                                </div>
                              </div>
                              <div className="feeds-stream-content mb-4">
                                <div className="feedImg">
                                  <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                </div>
                                <div className="mentions-input-box p-0">
                                  <div className="mentionsHeaderTitle">
                                    <h5>
                                    	<Link to="">Urs Sennhauser</Link> aktualisierte Ticket von <Link to="">Tobias Fueter</Link> in 02 zBusiness 
                                      	<span className="right">
                                        	<span className="right-sm-list"><i className="lnr lnr-clock" /></span>
                                        	<span className="right-sm-list">31 Okt 2019 03:18 PM</span>
                                        	<span className="right-sm-list"><i className="md-icon lnr lnr-phone" /></span>
                                      	</span>
                                    </h5>
                                    <h5>#2376 CityDogs (Tobi) Projekt Citydog</h5>
                                  </div>
                                  <div className="mentionsToggle">
                                    <p data-toggle="collapse" href="#allComtToggle" role="button" aria-expanded="false" aria-controls="Regionsangaben">... <span><i className="fa fa-sort-desc" aria-hidden="true" /></span></p>
                                  </div>
                                  <div className="mentionsSmList">
                                    <span className="bredcrum-sm-list">23 Sep 2020 04:47 PM</span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">Kommentar (3)</Link></span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">Antworten</Link></span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">schließen</Link></span>
                                  </div>
                                  <div id="allComtToggle" className="collapse show">
                                    <div className="Alle-Kommentare">
                                      Alle Kommentare werden angezelgt
                                    </div>
                                    <div className="Alle-KommentareList cmntBordertop">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="Alle-KommentareList">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="Alle-KommentareList">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="feeds-stream-content mb-4">
                                <div className="feedImg">
                                  <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                </div>
                                <div className="mentions-input-box p-0">
                                  <div className="mentionsHeaderTitle">
                                    <h5><Link to="">Urs Sennhauser</Link> aktualisierte Ticket von <Link to="">Tobias Fueter</Link> in 02 zBusiness 
                                      <span className="right">
                                        <span className="right-sm-list"><i className="lnr lnr-clock" /></span>
                                        <span className="right-sm-list">31 Okt 2019 03:18 PM</span>
                                        <span className="right-sm-list"><i className="md-icon lnr lnr-phone" /></span>
                                      </span>
                                    </h5>
                                    <h5>#2376 CityDogs (Tobi) Projekt Citydog</h5>
                                  </div>
                                  <div className="mentionsToggle">
                                    <p data-toggle="collapse" href="#allComtToggle01" role="button" aria-expanded="false" aria-controls="Regionsangaben">... <span><i className="fa fa-sort-desc" aria-hidden="true" /></span></p>
                                  </div>
                                  <div className="mentionsSmList">
                                    <span className="bredcrum-sm-list">23 Sep 2020 04:47 PM</span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">Kommentar (3)</Link></span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">Antworten</Link></span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">schließen</Link></span>
                                  </div>
                                  <div id="allComtToggle01" className="collapse">
                                    <div className="Alle-Kommentare">
                                      Alle Kommentare werden angezelgt
                                    </div>
                                    <div className="Alle-KommentareList cmntBordertop">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="Alle-KommentareList">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="Alle-KommentareList">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="feeds-stream-content mb-4">
                                <div className="feedImg">
                                  <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                </div>
                                <div className="mentions-input-box p-0">
                                  <div className="mentionsHeaderTitle">
                                    <h5><Link to="">Urs Sennhauser</Link> aktualisierte Ticket von <Link to="">Tobias Fueter</Link> in 02 zBusiness 
                                      <span className="right">
                                        <span className="right-sm-list"><i className="lnr lnr-clock" /></span>
                                        <span className="right-sm-list">31 Okt 2019 03:18 PM</span>
                                        <span className="right-sm-list"><i className="md-icon lnr lnr-phone" /></span>
                                      </span>
                                    </h5>
                                    <h5>#2376 CityDogs (Tobi) Projekt Citydog</h5>
                                  </div>
                                  <div className="mentionsToggle">
                                    <p data-toggle="collapse" href="#allComtToggle02" role="button" aria-expanded="false" aria-controls="Regionsangaben">... <span><i className="fa fa-sort-desc" aria-hidden="true" /></span></p>
                                  </div>
                                  <div className="mentionsSmList">
                                    <span className="bredcrum-sm-list">23 Sep 2020 04:47 PM</span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">Kommentar (3)</Link></span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">Antworten</Link></span>
                                    <span className="dotSep">.</span>
                                    <span className="bredcrum-sm-list"><Link to="">schließen</Link></span>
                                  </div>
                                  <div id="allComtToggle02" className="collapse">
                                    <div className="Alle-Kommentare">
                                      Alle Kommentare werden angezelgt
                                    </div>
                                    <div className="Alle-KommentareList cmntBordertop">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="Alle-KommentareList">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="Alle-KommentareList">
                                      <div className="media">
                                        <div className="feedImg mt-0">
                                          <div style={{background: 'url(./images/man_avatar.jpg)'}} className="agent-photo bg-cover" />
                                        </div>
                                        <div className="media-body">
                                          <h5 className="mt-0"><Link to="">Sarangan Ravendran</Link></h5>
                                          <h5 className="mt-0"><Link to="">http://35.181.23.133/citydog-new/index.html</Link></h5>
                                          <p className="mb-1 mt-1">Mail an Tobi mit der zwischenstand</p>
                                          <div className="mentionsSmList p-0">
                                            <span className="bredcrum-sm-list">Privater Kommentar</span>
                                            <span className="dotSep">.</span>
                                            <span className="bredcrum-sm-list">09 Jul 219 03:48 PM</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          	{/*  
                      		<div class="no-feeds">
                              <h1>Keine Feeds verfügbar</h1>
                              <p>Zusammenarbeit starten und Feeds abrufen.</p>
                            </div> 
                            */}

                        </div>
                      </div>
                    </div>
                  </div>
                <Footer />
            </div>
        )
    }


}
export default Home
