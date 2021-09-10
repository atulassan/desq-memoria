import React, {useEffect } from 'react';
import { Link, } from 'react-router-dom';
//import Leftsidemenu from '../modules/Leftsidemenu';
import Header from '../shared/HeaderKontakte';
//import Alert from '../shared/Alert'

function UpdateWeitereAdressen(props:any) {

	//const [loading, setLoading] = useState<boolean>(true);
	//const [address, setAddress] = useState<[]>([]);

	useEffect(() => {
		console.log('testing');
		
	}, []);

  	return(
  		<div>
			<Header />
			<div className="mainWrapper pl-0">
				<div className="row no-gutters">
					<div className="col-lg-12">
						<div className="mainWrapperBody">
							<div className="row no-gutters">
								<div className="col-lg-9">
									<div className="addTicketForm">
										<div className="form-page">
											<div className="form-page">
											<form>
											  	<div className="addTicketFormpPadding overflowScroll">
													<div className="row">
														<div className="col-lg-6">
															<div className="row">
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <h2>Adresse aktualisieren</h2>
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Vorname</label>
																	  <input type="text" name="vorname" className="form-control"  />
																	</div>
																</div>
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Nachname</label>
																	  <input type="text" name="" className="form-control"  />
																	</div>
																</div>
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <label>PLZ</label>
																	  <input type="text" name="" className="form-control"  />
																	</div>
																</div>
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <label>Ort</label>
																	  <input type="text" name="" className="form-control"  />
																	</div>
																</div>
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Lieferadresse</label>
																	  <input type="text" name="" className="form-control"  />
																	</div>
																</div>
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Privatadresse</label>
																	  <input type="text" name="" className="form-control"  />
																	</div>
																</div>

															</div>
														</div>
													</div>
												</div>
											  	<div className="btnFooter addTicketFoterBtns">
													<div className="row">
													  <div className="col-lg-12 col-md-12 ">
														<button className="btn-theme btn-md mr-2" type="submit" >Erstellen</button>
														<Link to="/kunden" className="btn-theme-white btn-md">Abbrechen</Link>
													  </div>
													</div>
											  	</div>
											</form>
										</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="kontactInfo">
									  	<div id="accordion">
											<div className="card">
										  <div className="card-header" id="headingTwo">
											<h5 className="mb-0">
											   <Link to="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												Ausführungsort
											  </Link>
											</h5>
										  </div>
										  <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
											<div className="card-body">
											  	<div className="media mb-3">
							                        <div className="mediaImg font13">AS </div>
							                        <div className="media-body">
							                          <h4 className="mt-2 mb-2">Vorname Nachname </h4>
							                          <p>Firmenname</p>
							                        </div>
							                    </div>
							                    <div className="media mb-3">
							                        <div className="mediaImg font13">AS </div>
							                        <div className="media-body">
							                          <h4 className="mt-2 mb-2">Vorname Nachname </h4>
							                          <p>Firmenname</p>
							                        </div>
							                    </div>
							                    <div className="media mb-3">
							                        <div className="mediaImg font13">AS </div>
							                        <div className="media-body">
							                          <h4 className="mt-2 mb-2">Vorname Nachname </h4>
							                          <p>Firmenname</p>
							                        </div>
							                    </div>
											</div>
										  </div>
											</div>
									  	</div>
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

export default UpdateWeitereAdressen;



