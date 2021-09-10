import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

export class Suche extends Component<any, any>{
	constructor(props: any){
		super(props);

		this.state= {
		  searchTo: 'Alle Module',
		  searchString: '',
		  redirectTo: window.location.pathname?window.location.pathname:''
		}
		
	  }
	   onKeyPress = (e:any) => {
		
		if(e.which === 13) {
			//console.log("props+++++++++++++++++++++++++++",this.props)
			//console.log("zzz",e.which )
			//let { history,match } = this.props;
			let { searchString, searchTo,redirectTo } = this.state;
			//console.log("match",match )
			//console.log("masearchStringtch",this.state.searchString )
			//console.log("searchTo",this.state.searchTo )
			//console.log("redirectTo",this.state.redirectTo )
			window.location.href=`/search?q=${searchString}&type=${searchTo}&pre=${redirectTo}`;
			//history.push(`${match.path}/search?q=${searchString}&type=${searchTo}&pre=${redirectTo}`);
		}
	  }
	  
    render(){
		let {searchString, searchTo,redirectTo } = this.state;
        return(
            <div id="searchPopup" className="searchPopup">
		        <div className="searchPopupBox">
		          <div className="input-group">
		            <div className="input-group-prepend dropdown">
		              <Link to="#" className ="btn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		                <i className="lnr lnr-menu" /> <i style={{position: 'absolute', right: '-2px', top: '20px', fontSize: '10px'}} className="lnr lnr-chevron-down" />
		              </Link> 
		              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
		                <div className="listMenuContainer">
		                  <Link	to="#" onClick={()=>this.setState({searchTo:'Alle Module'})} className="dropdown-item active">Alle Module</Link>
		                  <Link  to="#" onClick={()=>this.setState({searchTo:'Tickets'})} className="dropdown-item">Tickets</Link>
		                  <Link  to="#"  onClick={()=>this.setState({searchTo:'Aufgaben'})}  className="dropdown-item">Aufgaben</Link>
		                  <Link  to="#" onClick={()=>this.setState({searchTo:'Kunden'})}  className="dropdown-item">Kunden</Link>
		                  <Link  to="#" onClick={()=>this.setState({searchTo:'Kontakte'})}  className="dropdown-item">Kontakte</Link>
		                </div>
		              </div>
		              <input type="text" onChange={(e)=>{this.setState({searchString:e.target.value})}} onKeyPress={this.onKeyPress} className="form-control" placeholder="Suche" aria-label="search" />
		              <div className="searchSubmit">
					  	<Link to={`/search?q=${searchString}&type=${searchTo}&pre=${redirectTo}`} id="searchPopupBoxClose">
					  		<i className="lnr lnr-magnifier" />
					  	</Link>
		              </div>
		              {/* <div id="searchPopupBoxClose" className="slideFormClose">× <span>Esc</span></div> */}
					  {/* <div className="col-lg-4" >
					<Link to={`${redirectTo}`}   id="searchPopupBoxClose" className="slideFormClose">×</Link>
					</div> */}
		            </div>
		          </div>
		        </div>
		      </div>
        )
    }

}
export default Suche

