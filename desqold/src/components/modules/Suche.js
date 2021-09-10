import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Suche extends Component{
    render(){
        return(
            <div id="searchPopup" className="searchPopup">
		        <div className="searchPopupBox">
		          <div className="input-group">
		            <div className="input-group-prepend dropdown">
		              <Link className="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                <i className="lnr lnr-magnifier" /> <i style={{position: 'absolute', right: '-2px', top: '20px', fontSize: '10px'}} className="lnr lnr-chevron-down" />
		              </Link> 
		              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                <div className="listMenuContainer">
		                  <Link	className="dropdown-item active">Alle Module</Link>
		                  <Link	 className="dropdown-item">Tickets</Link>
		                  <Link	 className="dropdown-item">Hilfecenter</Link>
		                  <Link	 className="dropdown-item">Kontakte</Link>
		                  <Link	 className="dropdown-item">Kontos</Link>
		                  <Link	 className="dropdown-item">Aktivitäten</Link>
		                  <Link	 className="dropdown-item">Produkte</Link>
		                </div>
		                <div className="depMenuContainer">
		                  <Link className="dropdown-item active">Suche in  Alle Abteilungen</Link>
		                  <Link className="dropdown-item">Suche in one ix gmbh</Link>
		                </div>
		                <Link className="btn dropdown-item">
		                <i className="lnr lnr-magnifier" style={{position: 'relative', left: '0px', top: '2px', marginRight: '10px', color: '#333'}} /> Erweiterte Suche</Link>
		              </div>
		              <input type="text" className="form-control" placeholder="Suche in Alle Module" aria-label="search" />
		              <div id="searchPopupBoxClose" className="slideFormClose">× <span>Esc</span></div>
		            </div>
		          </div>
		        </div>
		      </div>
        )
    }

}
export default Suche

