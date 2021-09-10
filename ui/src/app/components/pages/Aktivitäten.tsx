import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
 
import Leftsidemenu from '../modules/Leftsidemenu';

export class Aktivitäten extends Component{
    render(){
        return(
            <div>
                <Leftsidemenu />
                 
                    <div className="mainWrapper">
                      <div className="row no-gutters">
                        <div className="col-lg-12">
                          <div className="mainWrapperBody">
                            <div className="requestqueuecontainer">
                              <div className="aktivitätenSection">
                                <h3>Sie haben keine Aktivitäten</h3>
                                <p>Ergänzen Sie Aufgaben, Ereignisse und Anrufe zum Organisieren, behalten Sie Ihre tagtäglichen Aktionselemente im Auge.</p>
                                <ul>
                                  <li className="active"><Link to="/anruf">Anruf hinzufügen</Link></li>
                                  <li><Link to="/aufgabe">Aufgabe hinzufügen</Link></li>
                                  <li><Link to="/ereignis">Ereignis hinzufügen</Link></li>
                                </ul>
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
export default Aktivitäten
