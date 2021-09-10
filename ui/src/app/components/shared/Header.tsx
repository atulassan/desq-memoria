import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import UserInfo from '../modules/UserInfo';
import Suche from '../modules/Suche';
import { connect } from 'react-redux';

import { getData } from '../../services/main-service';
export class Header extends Component<any,any>{
constructor(props:any) {
		super(props);
		this.state = {
			loading: true,
			userInfo: {},
      userData: {},
      comapnyDetails: [],
			
		}
	  }
async componentDidMount() {
		this.fetchItems();
	}
	async fetchItems() {
    var $ = require( "jquery" );
    var tmenu_h = $('.top-header').height();
    $('.mainWrapper').css({"marginTop":tmenu_h});
    $('.left-sidebar').css({"marginTop":"0px"});
		//console.log("User Info", this.props.user.user);	
		await this.setState({loading:false, userInfo: this.props.user?.user});
		//console.log("User deatails",  this.state.userInfo );
		await this.setState({userData: this.state.userInfo?.user});
		let result: any = await getData(`/memoria/getMethod?url=/MasterData/getClientInfo&ID=${this.state.userData?.id}`);
		this.setState({ comapnyDetails: result.data[0] });

    $(document).on('click', '.searchPopupBoxOpen', function () {
        $('#searchPopup').addClass('active');
        $('.popUp-backdrop').addClass('show');
    });
	}
  
    render(){
      let { comapnyDetails } = this.state;
      
      //console.log("comapnyDetails Header Name------->",comapnyDetails.companyName);
	
        return(
              <div>
                <Suche />
                <div className="top-header">
                    <div className="row no-gutters">
                      <div className="col-lg-8">
                        <nav className="navbar navbar-expand-lg navbar-light">
                          <div className="dash-logo">
                            <Link to="/"><img src="/assets/images/m-logo.png" alt="logo" title="desq" /></Link>
                          </div>
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                <NavLink className="nav-link" exact to="/tickets">Tickets</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" exact to="/kunden">Kunden</NavLink>
                              </li>
                              <li className="nav-item">
                                <NavLink className="nav-link" exact to="/MProdukte">Produkte</NavLink>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                      <div className="col-lg-4">
                        <div className="rhs-menu">
                          <ul>
                            <li><Link to='#' className="">{comapnyDetails.companyName!="" && comapnyDetails.companyName!=null && comapnyDetails.companyName!=undefined?comapnyDetails.companyName:''}</Link></li>
                            <li><Link to='#' className="searchPopupBoxOpen"><i className="lnr lnr-magnifier" /></Link></li>
                            { this.props.hasOwnProperty('linkPage') ?
                              <li><Link to={this.props.linkPage}><i className="lnr lnr-plus-circle" /></Link></li>
                              : 
                              <li><Link to="/add-ticket"><i className="lnr lnr-plus-circle" /></Link></li>    
                            }
                            { /*<li><Link to='#' className="userNotifi"><i className="lnr lnr-alarm" /></Link></li>*/}
                            { /*<li><Link to='#' className="settingPopupOpen"><i className="lnr lnr-cog" /></Link></li>*/ }
                            <li><Link to='#' className="userMenu bg-white chat_status online"><img src="/assets/images/default-image.png" alt="default" /></Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>

                <UserInfo />

              </div>
              
        )
    }

    

}
const mapStateToProps = (state: any) => {
	console.log('loggedin', state)
	return {
	  isAuthenticated: state.client.isLoggedIn,
	  user: state.client,
	  messages: state.messages
	}
  };
  
export default connect(
	mapStateToProps
  )(Header)

