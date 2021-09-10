import React from 'react';
import { } from 'react-router-dom';
//import Leftsidemenu from '../modules/Leftsidemenu';
import Header from '../shared/HeaderKontakte';
//import Alert from '../shared/Alert'

function NotFound(props:any){
  	return(
  		<div>
			<Header />
			<div className="mainWrapper pl-0">
				<div className="row no-gutters">
					<div className="col-lg-12">
						<div className="mainWrapperBody">
							<div className="not-found-base">
								<div className="not-found">
	                              <h1>404 ERROR</h1>
	                              <p>Page not Found</p>
	                            </div>
	                        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
    
}

export default NotFound;



