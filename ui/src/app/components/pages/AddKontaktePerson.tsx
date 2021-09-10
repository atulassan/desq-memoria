import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
//import Leftsidemenu from '../modules/Leftsidemenu';
import Header from '../shared/Header';
import { getData, postData } from "../../services/main-service";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
//import Alert from '../shared/Alert'
import { connect } from "react-redux";
import { SET_MESSAGE } from "../../redux/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import queryString from 'query-string';
import { format } from 'date-fns';
import de from 'date-fns/locale/de';

function AddKontaktePerson( props: any ) {

	let params:any = queryString.parse(props.location.search);
	console.log('Query String Params', params);

	let history = useHistory();

	const goToPreviousPath = () => {
		history.goBack()
	}

	type FormData = {
		anrede: string,
		titel: string,
		vorname: string,
		nachname: string,
		funktion: string,
		geburstag: string,
		telefon: string,
		zusatz: string,
		mobile: string,
		email: string,
		web: string,
		fax: string,
		comments: string,
	};

	const [fdefault, setFDefault] = useState<boolean>(false);
	const [loading, setLoading] =  useState(true);
	const [contaktPersons, setContaktPersons] =  useState([]);
	const [birthDate, setBirthDate] = useState(new Date());

	const { register, errors, handleSubmit } = useForm<FormData>({
		criteriaMode: "all"
	 });

	 const handleDefault = async () => {
		setFDefault(!fdefault ? true : false);
		console.log(fdefault);
	}

	//const [alertMsg, setAlertMsg] = React.useState( { show:true, variant:'success', message:'Testing' } );

	useEffect(() => {
		async function fetchData() {
			let cntktPers:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID&AddressID=${params['tid']}&IncludeDetails=true`);
			console.log('Contact Persons++++++++++++++++', cntktPers);
			setContaktPersons(cntktPers.status === 200 ? cntktPers.data : []);
			setLoading(false);
		}
		fetchData();
	},[]);

	//setAlertMsg({ show:true, variant:'danger', message:'Testing' });

	const onSubmit = async (data: FormData) => {

		console.log('Form Builder++++++++++++++', data);

		let contactFields = [];

			for(const [i, dval] of Object.entries(data)) {
				if(i === 'telefon') {
					contactFields.push({ code: 'TEL', description: 'TEL', value: dval });
				}
				if(i === 'mobile') {
					contactFields.push({ code: "MOBILE", description: 'MOBILE', value: dval });
				}
				if(i === 'email') {
					contactFields.push({ code: "EMAIL", description: 'TEL', value: dval });
				}
				if(i === 'web') {
					contactFields.push({ code: "HP", description: 'HP', value: dval });
				}
				if(i === 'fax') {
					contactFields.push({ code: "FAX", description: 'FAX', value: dval });
				}
			}

			let fData:any = [{
				"id": 0,
				"additionalAddressInfo": data.zusatz,
				"salutation": data.anrede,
				"firstname": data.vorname,
				"title": data.titel,
				"lastname": data.nachname,
				'comments': data.comments,
				//"street": "string",
				//"city": "string",
				//"zip": "string",
				"default": fdefault,
				"birthday": format(new Date(birthDate), 'yyyy.MM.dd').toString(),
				"contactFields": contactFields,
				"inactive": false,
				"function" : data.funktion,
				"addressID": parseInt(params['tid']) ? parseInt(params['tid']) : 0
			}];

			console.log("Form Data+++++++++", fData);

			let cntPost:any = await postData(`/memoria/putMethod?url=/ContactPersons/setContactPersons`, fData);
			
			console.log('sunmit Data+++++++++++', cntPost);
			
			if(cntPost.hasOwnProperty('status') && cntPost.status === 200) {
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "kontakte Person Success", variant: 'success' },
				  });
			} else {
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Internal Server Error", variant: 'Error' },
				  });
			}

	}

	const selectedDate = async (date:any)=> {
		console.log("Selected Date++++++++++", date);
		//let dateVal:any = parseISO(date);
		//console.log(format(new Date(date), 'dd.MM.yyyy'), new Date());
		//console.log(dateVal);
		setBirthDate(date);
	}
	
	console.log(loading);
	console.log("Contact Persons++++++++++++++", contaktPersons);	

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
										<form  name="customerAddform" onSubmit={handleSubmit(onSubmit)}>
											{/* <Alert variant={alertMsg.variant} show={alertMsg.show} message={alertMsg.message}/> */}
										  	<div className="addTicketFormpPadding overflowScroll">
												<div className="row">
													<div className="col-lg-6">
														<div className="row">
															<div className="col-lg-6 col-md-6 ">
																<div className="form-group">
																  <h2>Kontaktperson</h2>
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-lg-12 col-md-12 mb-2 mt-2">
																<div className="form-group ">
																	<label className="ix-checkbox-label"><input checked={ fdefault ? true : false } onClick={()=>handleDefault()} type="checkbox" className="ix-checkbox" /><mark className="mr-2" /> Standardkontakt</label>
																</div>
															</div>
															<div className="col-lg-6 col-md-6 ">
																<div className="form-group">
																  <label>Anrede</label>
																  <select name="anrede" className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })} >
																	<option value="Herr">Herr</option>
																	<option value="Frau">Frau</option>
																	<option value="Herr and Frau">Herr and Frau</option>
																	<option value="Firma">Firma</option>
																  </select>
																  <ErrorMessage
																		errors={errors}
																		name="anrede"
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
																  <select name="titel" className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
																	<option value="Dr.">Dr.</option>
																	<option value="Dres.">Dres.</option>
																	<option value="Prof.">Prof.</option>
																  </select>
																  <ErrorMessage
																		errors={errors}
																		name="titel"
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
																  <label>Vorname</label>
																  <input type="text" name="vorname" className="form-control"  ref={register({ required: "Diese Eingabe ist erforderlich." })} />
																  <ErrorMessage
																		errors={errors}
																		name="vorname"
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
																  <label>Nachname</label>
																  <input type="text" name="nachname" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
																  <ErrorMessage
																		errors={errors}
																		name="nachname"
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
																  <label>Funktion</label>
																  <input type="text" name="funktion" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
																  <ErrorMessage
																		errors={errors}
																		name="funktion"
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
																  <label>Geburtstag</label>
																  {/* <input type="text" name="geburstag" placeholder="yyyy-mm-dd" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} /> */}
																  <DatePicker className="form-control" name="geburstag" selected={birthDate} dateFormat="dd.MM.yyyy" locale={de} onChange={(date)=>selectedDate(date)} />			
																  <ErrorMessage
																		errors={errors}
																		name="geburstag"
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
																  <label>Zusatz</label>
																  <input type="text" name="zusatz" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
															<div className="col-lg-6 col-md-6 ">
																<div className="form-group">
																  <label>Telefon</label>
																  <input type="text" name="telefon" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
																  <ErrorMessage
																		errors={errors}
																		name="telefon"
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
																  <input type="text" name="mobile" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
															<div className="col-lg-12 col-md-12 ">
																<div className="form-group">
																  <label>E-Mail</label>
																  <input type="email" name="email" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
															<div className="col-lg-6 col-md-6">
																<div className="form-group">
																  <label>Web</label>
																  <input type="text" name="web" className="form-control" ref={register({ required: false })} />
																</div>
															</div> 
															<div className="col-lg-6 col-md-6">
																<div className="form-group">
																  <label>Fax</label>
																  <input type="text" name="fax" className="form-control" ref={register({ required: false })} />
																</div>
															</div>
															<div className="col-lg-12 col-md-12">
																<div className="form-group">
																  <label>Bemerkungen</label>
																  <input type="text" name="comments" className="form-control" ref={register({ required: false })} />
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
													<span onClick={()=>goToPreviousPath()} style={{cursor: 'pointer'}} className="btn-theme-white btn-md">Abbrechen</span>
												  </div>
												</div>
										  	</div>
										</form>
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
												Kontaktpersonen
											  </Link>
											</h5>
										  </div>
										  <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
											<div className="card-body">
												{ loading ? <div>Loading...</div> :
													Array.isArray(contaktPersons) ?
													contaktPersons.map((person:any, idx:any) =>
														<div className="media mb-3" key={idx}>
															<div className="mediaImg font13">{person.firstname?.charAt(0).toUpperCase()}{person.lastname?.charAt(0).toUpperCase()}</div>
															<div className="media-body">
																<h4 className="mt-2 mb-2">
																	<Link to={`/UpdKontaktePerson/${person.id}`}>
																		{person?.firstname} {person?.lastname}
																	</Link>
																</h4>
																<p>{person?.company}</p>
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

function mapStateToProps(state: any) {
	const { messages } = state;
	return {
	  messages
	};
  }

export default connect(mapStateToProps)(AddKontaktePerson);
//export default AddKontaktePerson
