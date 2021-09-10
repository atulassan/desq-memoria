import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getData, postData } from "../../services/main-service";
//import Leftsidemenu from '../modules/Leftsidemenu';
import { countries } from "../../utils";
import Header from '../shared/Header';
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import queryString from 'query-string';
import { connect } from "react-redux";
import { SET_MESSAGE } from "../../redux/types";

type FormData = {
	privateAddress: string,
	salutation: string,
	title: string,
	firstname: string,
	lastname: string,
	street: string,
	city: string,
	postcode: string,
	company: string,
	zusatz: string,
	mobile: string,
	email: string,
	web: string,
	postbox:string, 
	country: string
};

function AddAusfuhrungsort(props:any) {

	const [loading, setLoading] =  useState(true);
	const [privateAddress, setPrivateAddress] = useState<boolean>(false);
	const [deliverAddresses, setDeliverAddresses] = useState([]);

	let params:any = queryString.parse(props.location.search);

	let history = useHistory();

	const goToPreviousPath = () => {
		history.goBack()
	}

	//console.log("params Investigation+++++++++++++++++++++++++", params);

	const { register, errors, handleSubmit } = useForm<FormData>({
		criteriaMode: "all"
	 });

	 const handlePrivateAddress = async () => {
		console.log('Testing');
		setPrivateAddress(!privateAddress ? true : false);
		console.log(privateAddress);
	 }
	 
	useEffect(() => {
		async function fetchData() {
			let deliveryAddreses:any = await getData(`/memoria/getMethod?url=/DeliveryAddresses/getDeliveryAddressesByAddressID&AddressID=${params.vid}`);
			console.log('Contact Persons++++++++++++++++', deliveryAddreses);
			setDeliverAddresses(deliveryAddreses.status === 200 ? deliveryAddreses.data : []);
			setLoading(false);
		}
		fetchData();
	}, []);

	const onSubmit = async (data: FormData) => {
		console.log('Private address', data);
		
		/*let fData:any = [{
			id:  0,
			addressID : parseInt(params['vid']) ? parseInt(params['vid']) : 0,
			addressLine:data.street.toString(),
			city:data.street.toString(),
			zip: data.postcode.toString(),
			salutation: (privateAddress) ? data.salutation.toString() : "",
			title: (privateAddress) ? data.title.toString() : "",
			firstname: (privateAddress) ? data.firstname.toString() : "",
			lastname: (privateAddress) ? data.lastname.toString() : "",
			company : (!privateAddress) ? data.company.toString() : "",
			privatAddress: privateAddress,
		}];*/

		let fData:any = {};
		fData['id'] =  0;
		fData['addressID'] = parseInt(params['vid']) ? parseInt(params['vid']) : 0;
		fData['addressLine'] = data.street.toString();
		fData['city'] =  data.street.toString();
		fData["zip"] = data.postcode.toString();
		fData['additionalAddressInfo'] = data.zusatz.toString();

		if(privateAddress) {
			fData["salutation"] = data.salutation.toString();
			fData["title"] = data.title.toString();
			fData["firstname"] = data.firstname.toString();
			fData["lastname"] = data.lastname.toString();
		}

		if(!privateAddress) {
			fData["company"] = data.company.toString();
		}
		
		fData["privatAddress"] = privateAddress;
		fData['postbox'] = data.postbox.toString();
		fData["country"] = data['country'].toString();

		console.log("POST DATA+++++++++++++++", fData);

		let setDelAddress:any = await postData(`/memoria/putMethod?url=/DeliveryAddresses/setDeliveryAddresses`, [fData]);	

		console.log('SUBMIT DATA+++++++++++', setDelAddress);
		
		if(setDelAddress.hasOwnProperty('status') && setDelAddress.status === 200) {
			props.dispatch({
				type: SET_MESSAGE,
				payload: { message: "Delivary Added success", variant: 'success' },
			  });
		} else {
			props.dispatch({
				type: SET_MESSAGE,
				payload: { message: "Internal Server Error", variant: 'Error' },
			  });
		}


	}

  	return(
  		<div>
			<Header linkPage={`/addkontakte`} />
			<div className="mainWrapper pl-0">
				<div className="row no-gutters">
					<div className="col-lg-12">
						<div className="mainWrapperBody">
							<div className="row no-gutters">
								<div className="col-lg-9">
									<div className="addTicketForm">
										<div className="form-page">
											<div className="form-page">
											<form onSubmit={handleSubmit(onSubmit)}>
											  	<div className="addTicketFormpPadding overflowScroll">
													<div className="row">
														<div className="col-lg-6">
															<div className="row">
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <h2>Ausführungsort hinzufügen</h2>
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																		<label className="ix-checkbox-label"><input name="privateAddress" ref={register()} onClick={()=>handlePrivateAddress()} type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Privatadresse</label>
																	</div>
																</div>
															</div>

															{/* Note : when check Privatadresse show  "privatadresseShow" and hide firmaShow */}
															
															{ privateAddress &&	
																<div className="privatadresseShow" style={{display: privateAddress ? "block": "none"}}>
																	<div className="row">
																		<div className="col-lg-6 col-md-6 ">
																			<div className="form-group">
																			  	<label>Anrede</label>
																			  	<select name="salutation" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control custom-select">
												                                  	<option value="Herr">Herr</option>
												                                  	<option value="Frau">Frau</option>
												                                  	<option value="Herr and Frau">Herr and Frau</option>
												                                  	<option value="Firma">Firma</option>
																				</select>
																				<ErrorMessage
																				errors={errors}
																				name="salutation"
																				render={({ messages }) => {
																				return messages
																					? Object.entries(messages).map(([type, message]) => (
																					<span className="text-danger error" key={type}>{message}</span>
																					))
																					: null;
																				}}
																			/>
																			</div>
																		</div>
																		<div className="col-lg-6 col-md-6">
																			<div className="form-group">
																			  	<label>Titel</label>
																			  	<select name="title" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control custom-select">
												                                  	<option value="Dr.">Dr.</option>
												                                  	<option value="Dres.">Dres.</option>
												                                  	<option value="Prof.">Prof.</option>
																				</select>
																				<ErrorMessage
																				errors={errors}
																				name="title"
																				render={({ messages }) => {
																				return messages
																					? Object.entries(messages).map(([type, message]) => (
																					<span className="text-danger error" key={type}>{message}</span>
																					))
																					: null;
																				}}
																				/>
																			</div>
																		</div>
																		<div className="col-lg-12 col-md-12 ">
																			<div className="form-group">
																			  <label>Vorname</label>
																			  <input type="text" name="firstname" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																			  <ErrorMessage
																				errors={errors}
																				name="firstname"
																				render={({ messages }) => {
																				return messages
																					? Object.entries(messages).map(([type, message]) => (
																					<span className="text-danger error" key={type}>{message}</span>
																					))
																					: null;
																				}}
																				/>
																			</div>
																		</div>
																		<div className="col-lg-12 col-md-12 ">
																			<div className="form-group">
																			  <label>Nachname</label>
																			  <input type="text" name="lastname" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																			  <ErrorMessage
																				errors={errors}
																				name="lastname"
																				render={({ messages }) => {
																				return messages
																					? Object.entries(messages).map(([type, message]) => (
																					<span className="text-danger error" key={type}>{message}</span>
																					))
																					: null;
																				}}
																				/>	
																			</div>
																		</div>
																	</div>
																</div>
															}
															{!privateAddress &&	
																<div className="row firmaShow">
																	<div className="col-lg-12 col-md-12 ">
																		<div className="form-group">
																		<label>Firma</label>
																		<input type="text" name="company" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																		<ErrorMessage
																		errors={errors}
																		name="company"
																		render={({ messages }) => {
																		return messages
																			? Object.entries(messages).map(([type, message]) => (
																			<span className="text-danger error" key={type}>{message}</span>
																			))
																			: null;
																		}}
																		/>
																		</div>
																	</div>
																</div>
															}

															<div className="row">
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Zusatz</label>
																	  <textarea name="zusatz" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control addAusfuhrungsortTextbox" placeholder="Zusatz"></textarea>
																	  <ErrorMessage
																		errors={errors}
																		name="zusatz"
																		render={({ messages }) => {
																		return messages
																			? Object.entries(messages).map(([type, message]) => (
																			<span className="text-danger error" key={type}>{message}</span>
																			))
																			: null;
																		}}
																		/>
																	</div>
																</div>
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Strasse</label>
																	  <input type="text" name="street" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																	  <ErrorMessage
																		errors={errors}
																		name="street"
																		render={({ messages }) => {
																		return messages
																			? Object.entries(messages).map(([type, message]) => (
																			<span className="text-danger error" key={type}>{message}</span>
																			))
																			: null;
																		}}
																		/>
																	</div>
																</div>
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <label>Postleitzahl</label>
																	  <input type="text" name="postcode" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																	  <ErrorMessage
																		errors={errors}
																		name="postcode"
																		render={({ messages }) => {
																		return messages
																			? Object.entries(messages).map(([type, message]) => (
																			<span className="text-danger error" key={type}>{message}</span>
																			))
																			: null;
																		}}
																	/>	
																	</div>
																</div>
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <label>Ort</label>
																	  <input type="text" name="city" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																	  <ErrorMessage
																		errors={errors}
																		name="city"
																		render={({ messages }) => {
																		return messages
																			? Object.entries(messages).map(([type, message]) => (
																			<span className="text-danger error" key={type}>{message}</span>
																			))
																			: null;
																		}}
																	/>
																	</div>
																</div>
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Postfach</label>
																	  <input type="text" name="postbox" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control"  />
																	  <ErrorMessage
																		errors={errors}
																		name="postbox"
																		render={({ messages }) => {
																		return messages
																			? Object.entries(messages).map(([type, message]) => (
																			<span className="text-danger error" key={type}>{message}</span>
																			))
																			: null;
																		}}
																		/>
																	</div>
																</div>
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  	<label>Land</label>
																	  	<select name="country" className="form-control custom-select" ref={register()}>
																		  	{  countries.map((cnt:any, idx:any) =>
																					<option value={cnt.name}>{cnt.name}</option>
																			  	)
																			}
																		</select>
																	</div>
																</div>

															</div>
														</div>
													</div>
												</div>
											  	<div className="btnFooter addTicketFoterBtns">
													<div className="row">
													  <div className="col-lg-12 col-md-12 ">
														<button className="btn-theme btn-md mr-2" type="submit">Erstellen</button>
														<span onClick={()=>goToPreviousPath()} style={{cursor: 'pointer'}} className="btn-theme-white btn-md">Abbrechen</span>
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
												{ loading ? <div>Loading...</div> :
													Array.isArray(deliverAddresses) ?
													deliverAddresses.map((address:any, idx:any) =>
														<div className="media mb-3" key={idx}>
															<div className="mediaImg font13">{address.firstname?.charAt(0).toUpperCase()}{address.lastname?.charAt(0).toUpperCase()}</div>
															<div className="media-body">
																<h4 className="mt-2 mb-2">
																	<Link to={`/UpdAusfuhrungsort/${address.id}`}>{address?.firstname} {address?.lastname}</Link>
																</h4>
																<p>{address?.company}</p>
															</div>
							                    		</div>
													) : null
												}
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

//export default AddAusfuhrungsort;

function mapStateToProps(state: any) {
	const { messages } = state;
	return {
	  messages
	};
  }
  export default connect(mapStateToProps)(AddAusfuhrungsort);



