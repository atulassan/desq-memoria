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
import { format, parseISO } from 'date-fns';
import queryString from 'query-string';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from 'date-fns/locale/de';

function UpdKontaktePerson( props: any ) {

	const { match } = props;
	const contactId = match.params.id;
	let params:any = queryString.parse(props.location.search);
	console.log('Query String Params', params);
	const [birthDate, setBirthDate] = useState(new Date());

	let history = useHistory();

	const goToPreviousPath = () => {
		history.goBack()
	}

	type FormData = {
		default: string,
		salutation: string,
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
	const [toEdit, setToEdit] = useState<boolean>(false);
	const [loading, setLoading] =  useState(true);
	const [contaktPersons, setContaktPersons] =  useState([]);
	const [contactInfo, setContactInfo] = useState<any | {}>({});

	const { register, errors, handleSubmit } = useForm<FormData>({
		criteriaMode: "all"
	});

	const handleToEdit = async () => {
		console.log('handle edit');
		setToEdit(!toEdit ? true : false);
		console.log(toEdit);
	}

	const handleDefault = async () => {
		setFDefault(!fdefault ? true : false);
		console.log(fdefault);
	}

	//const [alertMsg, setAlertMsg] = React.useState( { show:true, variant:'success', message:'Testing' } );

	useEffect(() => {
		async function fetchData() {
			let cntInfo:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonByID&ID=${contactId}&IncludeDetails=true`);
			console.log("Contact Info+++++++++++++++++", cntInfo);
			if(cntInfo['status'] === 200 && cntInfo['data'].hasOwnProperty('addressID')) {
				if(cntInfo['status'] === 200 && cntInfo['data'].hasOwnProperty('fields')) {
					cntInfo['data']['fields'].forEach((field:any) => {
						cntInfo['data'][`${field.field}`] = field.value;
					});		
				}
				if(cntInfo['status'] === 200 && cntInfo['data'].hasOwnProperty('contactFields')) {
					cntInfo['data']['contactFields'].forEach((field:any) => {
						cntInfo['data'][`${field.code}`] = field.value;
					});		
				}
				/*if(cntInfo['data'].hasOwnProperty('birthday') && cntInfo['data']['birthday']) {
					cntInfo['data']['birthday'] = (cntInfo['data'].hasOwnProperty('birthday') && cntInfo['data']['birthday']) ? parseISO(cntInfo['data']['birthday']).toString() : new Date(); 
				}*/
				cntInfo['data']['birthday'] = (cntInfo['data'].hasOwnProperty('birthday') && cntInfo['data']['birthday']) ? parseISO(cntInfo['data']['birthday']).toString() : new Date(); 
				setBirthDate(cntInfo['data']['birthday']);
				setContactInfo(cntInfo['data']);
				///ContactPersons/getContactPersonsByAddressID?AddressID=3241&IncludeDetails=true
				//let cntktPers:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID?AddressID=${params['tid']}&IncludeDetails=true`);
				let cntktPers:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID&AddressID=${cntInfo['data']['addressID']}&Fields=Comments&IncludeDetails=true`);
				console.log('Contact Persons++++++++++++++++', cntktPers);
				setContaktPersons(cntktPers.status === 200 ? cntktPers.data : []);
				setFDefault(cntInfo['data']['default']);
			}
			setLoading(false);
		}
		fetchData();
	},[contactId]);

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
				"id": parseInt(contactInfo['id']),
				"additionalAddressInfo": data.zusatz,
				"salutation": data.salutation,
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
				"addressID": parseInt(contactInfo['addressID']) ? parseInt(contactInfo['addressID']) : 0
			}];

			console.log("Form Data+++++++++", fData);

			let cntPost:any = await postData(`/memoria/putMethod?url=/ContactPersons/setContactPersons`, fData);
			
			console.log('submit Data+++++++++++', cntPost);
			
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
		setBirthDate(date);
	}

	console.log("contact Info", contactInfo);
	console.log("default info", fdefault);
	//console.log("Contact Persons++++++++++++++", contaktPersons);	

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
										{ loading ? <div>loading</div> : 
											contactInfo ? 
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
																	<label className="ix-checkbox-label"><input checked={ fdefault ? true : false } onClick={()=>handleDefault()} disabled={!toEdit ? true : false} type="checkbox" className="ix-checkbox" /><mark className="mr-2" /> Standardkontakt</label>
																</div>
															</div>
															<div className="col-lg-6 col-md-6">
																<div className="form-group">
																  <label>Anrede</label>
																  <select disabled={!toEdit ? true : false} name="salutation" className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })} >
																	<option value="Herr" selected={contactInfo.hasOwnProperty('salutation') && contactInfo.salutation == "Herr" ? true : false}>Herr</option>
																	<option value="Frau" selected={contactInfo.hasOwnProperty('salutation') && contactInfo.salutation == "Frau" ? true : false}>Frau</option>
																	<option value="Herr and Frau" selected={contactInfo.hasOwnProperty('salutation') && contactInfo.salutation == "Herr and Frau" ? true : false}>Herr and Frau</option>
																	<option value="Firma" selected={contactInfo.hasOwnProperty('salutation') && contactInfo.salutation == "Firma" ? true : false}>Firma</option>
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
																  <select disabled={!toEdit ? true : false} name="titel" className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
																	<option value="Dr." selected={contactInfo.hasOwnProperty('title') && contactInfo.title == "Herr" ? true : false}>Dr.</option>
																	<option value="Dres." selected={contactInfo.hasOwnProperty('title') && contactInfo.title == "Dres." ? true : false}>Dres.</option>
																	<option value="Prof." selected={contactInfo.hasOwnProperty('title') && contactInfo.title == "Prof." ? true : false}>Prof.</option>
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
																  <input disabled={!toEdit ? true : false} type="text" name="vorname" defaultValue={contactInfo['firstname']} className="form-control"  ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																  <input disabled={!toEdit ? true : false} type="text" name="nachname" className="form-control" defaultValue={contactInfo['lastname']} ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																  <input disabled={!toEdit ? true : false} type="text" name="funktion" defaultValue={ contactInfo.function } className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
															<div className="col-lg-6 col-md-6 ">
																<div className="form-group">
																  <label>Geburtstag</label>
																 {/* <input disabled={!toEdit ? true : false} placeholder="yyyy-mm-dd" type="text" name="geburstag" defaultValue={contactInfo?.birthday ? format(new Date(contactInfo.birthday), "yyyy-MM-dd") : ""} className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} /> */}
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
																  <input disabled={!toEdit ? true : false} type="text" name="zusatz" defaultValue={ contactInfo.additionalAddressInfo } className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																  <input disabled={!toEdit ? true : false} type="text" name="telefon" className="form-control" defaultValue={contactInfo.TEL} ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																  <input disabled={!toEdit ? true : false} type="text" name="mobile" className="form-control" defaultValue={contactInfo.MOBILE} ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																  <input disabled={!toEdit ? true : false} type="email" name="email" className="form-control" defaultValue={contactInfo.EMAIL} ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
																  <input disabled={!toEdit ? true : false} type="text" name="web" className="form-control" defaultValue={contactInfo.HP} ref={register({ required: false })} />
																</div>
															</div> 
															<div className="col-lg-6 col-md-6 ">
																<div className="form-group">
																  <label>Fax</label>
																  <input disabled={!toEdit ? true : false} type="text" name="fax" className="form-control" defaultValue={contactInfo.FAX} ref={register({ required: false })} />
																</div>
															</div> 
															<div className="col-lg-12 col-md-12 ">
																<div className="form-group">
																  <label>Bemerkungen</label>
																  <input disabled={!toEdit ? true : false} type="text" name="comments" defaultValue={contactInfo?.comments} className="form-control" ref={register({ required: false })} />
																</div>
															</div> 
														</div>
													</div>
												</div>
											</div>
										  	<div className="btnFooter addTicketFoterBtns">
												<div className="row">
												  <div className="col-lg-12 col-md-12 ">
												  	{ toEdit ? 
														<button className="btn-theme btn-md mr-2" type="submit">Erstellen</button>
														: 
														<span onClick={()=>handleToEdit()} className="btn-theme btn-md mr-2">bearbeiten</span>
													}
													<span onClick={()=>goToPreviousPath()} style={{cursor: 'pointer'}} className="btn-theme-white btn-md">Abbrechen</span>
												  </div>
												</div>
										  	</div>
										</form>

											: null
										}


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
																	<Link to={`/UpdKontaktePerson/${person.id}`}>{person?.firstname} {person?.lastname}</Link>
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

export default connect(mapStateToProps)(UpdKontaktePerson);
//export default AddKontaktePerson
