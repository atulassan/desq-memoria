import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export class Leftsidemenu extends Component<any,any>{
    render(){
        return(
                <React.Fragment>
                  <div className="left-sidebar sidebar-shadow">
                    <div className="left-sidebar-inner">
                      <ul className="vertical-nav-menu">
                        {/* <li className="mm-active">
                          <Link to="/"><i className="metismenu-icon fa fa-rss-square" aria-hidden="true" /> <span>Feed</span></Link>
                        </li> */}
                        <li>
                          <Link to="tickets"><i className="metismenu-icon fa fa-ticket" aria-hidden="true" /> <span>Tickets</span></Link>
                        </li>
                        <li className="lftIconFixed">
                          {/* <Link to=""><i className="metismenu-icon lnr-arrow-right" /></Link> */}
                        </li>
                      </ul>
                    </div>
                   </div>
                </React.Fragment>

        )
    }

}
export default Leftsidemenu

