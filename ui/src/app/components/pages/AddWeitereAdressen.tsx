import React from 'react';
import { postData } from "../../services/main-service";
import { Link, } from 'react-router-dom';
//import Leftsidemenu from '../modules/Leftsidemenu';
import Header from '../shared/HeaderKontakte';
//import Alert from '../shared/Alert'
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import queryString from 'query-string';

type FormData = {
	addressline: string,
	salutation: string,
	firstname: string,
	lastname: string,
	street: string,
	city: string,
	postcode: string,
	telephone: string,
	mobile: string,
	email: string,
	web: string,
};

function AddWeitereAdressen(props:any) {

	//const [loading, setLoading] = useState<boolean>(true);
	
  	let params:any = queryString.parse(props.location.search);

	console.log("params Investigation+++++++++++++++++++++++++", params);

	const { register, errors, handleSubmit } = useForm<FormData>({
		criteriaMode: "all"
	 });

	/*useEffect(()=> {
		console.log('testing');
	}, []);*/

	const onSubmit = async (data: FormData) => {

		console.log('Form Data', data);

		let fData:any = [{
			"id": 0,
			"addressID": params['vid'] ? params['vid'] : 0,
			"addressLine": data.addressline,
			"firstname": data.firstname,
			"lastname": data.lastname,
			"city": data.city,
			"street": data.street,
			"privatAddress": true,
		}];

		console.log("Form Data+++++++++", fData);

		let setAddress:any = await postData(`/memoria/putMethod?url=/DeliveryAddresses/setDeliveryAddresses`, fData);

		console.log('sunmit Data+++++++++++', setAddress);

	};


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
											<form onSubmit={handleSubmit(onSubmit)}>
											  	<div className="addTicketFormpPadding overflowScroll">
													<div className="row">
														<div className="col-lg-6">
															<div className="row">
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <h2>Weitere Adressen hinzufügen</h2>
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col-lg-12 col-md-12 ">
																	<div className="form-group">
																	  <label>Vorname</label>
																	  <input type="text" name="firstname" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																	  <input type="text" name="lastname" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  <label>PLZ</label>
																	  <input type="text" name="postcode" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																	  <input type="text" name="city" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																	  <label>Lieferadresse</label>
																	  <input type="text" name="addressline" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
																	  <ErrorMessage
																		errors={errors}
																		name="addressline"
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
																	  <label>Telefon</label>
																	  <input type="text" name="telephone" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
																	  <ErrorMessage
																		errors={errors}
																		name="telephone"
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
																	  <label>Mobile</label>
																	  <input type="text" name="mobile" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
																	  <ErrorMessage
																		errors={errors}
																		name="mobile"
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
																	  <label>E-Mail</label>
																	  <input type="text" name="email"  ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
																	  <ErrorMessage
																		errors={errors}
																		name="email"
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
																	  <label>Web</label>
																	  <input type="text" name="web"  ref={register()} className="form-control" />
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

export default AddWeitereAdressen;



