import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class UserInfo extends Component{
    render(){
        return(
            <div id="userInfo" className="slide-form">
			  <div id="userMenuClose" className="slideFormClose">×</div>
			  <div className="userInfoHeader">
			    <div className="userTitle  chat_status online"><img src="images/default-image.png" alt="default" /></div>
			    <div className="profile-section">
			      <span className="profile-name">anitha Sivakumar</span>
			      <span><Link className="profile-email" href="mailto:oneixswiss@gmail.com">oneixswiss@gmail.com</Link></span>
			      <span className="profile-user-id">CEO - Kundendienstadministrator</span>
			      <span className="profile-user-id">One ix User ID: 20072693861</span>
			      <Link className="link">Mein Profil</Link>. <Link className="link">Voreinstellungen</Link>
			    </div>
			  </div>
			  <div className="profile-content-wrap flex1">
			    <div className="profile_details ">
			      <div className="upBxDv">
			        <div className="upBxHdr">Agentenstatus 
			          <label className="switch ml-3 switch-pos">
			            <input type="checkbox" />
			            <span className="slider round" />
			          </label>
			        </div>
			        <ul>
			          <li><Link><i className="lnr lnr-envelope" /> E-Mail</Link></li>
			          <li className="text-right">
			            <Link className="dropdown" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			              <span className="online_status online mr-2" /> Online <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
			            </Link>
			            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			              <Link to="" className="dropdown-item active"><span className="online_status online mr-2" /> Online</Link>
			              <Link to="" className="dropdown-item"><span className="online_status offline mr-2" /> Offline</Link>
			            </div>
			          </li>
			          <li><Link><i className="lnr lnr-bubble" /> Chat</Link></li>
			          <li className="text-right">
			            <span className="online-mute lnr lnr-volume mr-2" />
			            <Link className="dropdown"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			              <span className="online_status offline mr-2" /> Offline <i style={{position: 'relative', left: '5px', top: '1px'}} className="lnr lnr-chevron-down" />
			            </Link>
			            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			              <Link to="" className="dropdown-item active"><span className="online_status online mr-2" /> Online</Link>
			              <Link to="" className="dropdown-item"><span className="online_status offline mr-2" /> Offline</Link>
			            </div>
			          </li>
			        </ul>
			      </div>
			      <div className="upBxDv">
			        <div className="upBxHdr">Agentenstatus</div>
			        <ul>
			          <li><Link><i className="lnr lnr-users" /> Community</Link></li>
			          <li><Link><i className="lnr lnr-bubble" /> Talk with us</Link></li>
			          <li><Link><i className="lnr lnr-smartphone" /> Mobilapps</Link></li>
			          <li><Link><i className="lnr lnr-envelope" /> Write to us</Link></li>
			          <li><Link><i className="lnr lnr-user" /> Ressourcen</Link></li>
			          <li><Link><i className="lnr lnr-bubble" /> WhatsApp Us</Link></li>
			        </ul>
			      </div>
			    </div>
			  </div>
			  <div className="userBottom">
			    <ul className="upgradebox ">
			      <li><Link>One ix  Testversion <span>Probezeitraum läuft in 16 Tagen ab</span></Link></li>
			      <li><Link className="btn-white btn-sm">Upgraden</Link></li>
			    </ul>
			    <ul className="upBtmBnd">
			      <li><Link className="link"><i className="lnr lnr-link" /> One ix-Konto</Link></li>
			      <li><Link className="link"><i className="lnr lnr-power-switch" /> Abmelden</Link></li>
			    </ul>
			  </div>
			</div>
        )
    }

}
export default UserInfo

