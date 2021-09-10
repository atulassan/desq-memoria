import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../shared/HeaderKontakte';
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { countries } from "../../utils";
import { getData,postData } from "../../services/main-service";
//import Alert from '../shared/Alert'
import { format, parseISO } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { SET_MESSAGE } from "../../redux/types";

/*type FormData = {
	custContactId: string,
	customerName: string,
	telephone: string,
	email: string,
	website: string,
	address: string,
	postcode: string,
	city: string,
	place: string,
	account: string,
	country: string,
	fax: string,
	vatno: string,
	firstName: string,
	lastName: string,
	contEmail: string,
	mobile: string,
	telephoneDirect: string,
	telephonePrivate: string,
	dob: string,
	salutation: string,
	title: string,
	facebook: string,
	instagram: string,
	linkedin: string,
  xing: string,
  modifiedBy: string,
	}; */

	type FormData = {
		salutation: string,
		title: string,
		AddressGroup: string,
		LanguageCode: string,
		Firstname: string,
		Lastname: string,
		company: string,
		zusatz: string,
		street: string,
		address: string,
		postcode: string,
		city: string,
		place: string,
		Country: string,
		Postbox: string,
		Birthday: string,
		telephone: string,
		mobile: string,
		email: string,
		website: string,
		fax: string,
	};

function KontakteEdit(props:any) {
	
	const [privateAddress, setPrivateAddress] = useState<boolean>(false);
	const [customer, setCustomer] = useState<any | {}>({});
	const [addressgroups, setAddressGroups] = useState<any | []>([]);
	const [languages, setLanguages] = useState<any | []>([]);
	const [loading, setLoading] = useState(true);
	const [contaktPersons, setContaktPersons] =  useState([]);
	const [toEdit, setToEdit] = useState<boolean>(false);
	const [birthDate, setBirthDate] = useState<any>(new Date());
	let { id }:any =  props.match.params;
	/* GET Customer Data Using ID*/

	//console.log("New Date Alter Charged->++++++++++++++++++", format(new Date(), 'yyyy-MM-dd'));

	let history = useHistory();

	const goToPreviousPath = () => {
		history.goBack()
	}

	const handlePrivateAddress = async () => {
		console.log('Testing');
		setPrivateAddress(!privateAddress ? true : false);
		console.log(privateAddress);
	}

	const handleToEdit = async () => {
		console.log('handle edit');
		setToEdit(!toEdit ? true : false);
		console.log(toEdit);
	 }

    useEffect(() => {
		
     	async function fetchData() {

			console.log("Loading Start", loading);
			//let getCustomer:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&ID=${id}&IncludeDetails=true&Fields=ZIP&Fields=Street&Fields=AddressGroup&Fields=City`);
			let getCustomer:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&ID=${id}&IncludeDetails=true&Fields=Salutation&Fields=Title&Fields=Street&Fields=ZIP&Fields=Postbox&Fields=Lastname&Fields=Firstname
			&Fields=City&Fields=AdditionalAddressInfo&Fields=Country&Fields=LanguageCode&Fields=privatAddress`);
			console.log("Get Customer++++++++++++++++++++", getCustomer)
			if(getCustomer['status'] === 200 && getCustomer['data'].hasOwnProperty('fields')) {
				getCustomer['data']['fields'].forEach((field:any) => {
					getCustomer['data'][`${field.field}`] = field.value;
					if(field.field == "PrivatAddress") {
						console.log("Get Customer Private++++++++++++", field.value);
						setPrivateAddress(field.value);
					}
					if(field.field === "Birthday") {
						setBirthDate(parseISO(field.value).toString());
					  }
				});
				
				//
			}
			if(getCustomer['status'] === 200 && getCustomer['data'].hasOwnProperty('contactFields')) {
				getCustomer['data']['contactFields'].forEach((field:any) => {
					getCustomer['data'][`${field.code}`] = field.value;
				});		
			}
			let getAddressGroups:any = await getData(`/memoria/getMethod?url=/AddressGroups/getAddressGroupsAll`);
			let getLanguages:any = await getData(`/memoria/getMethod?url=/MasterData/getLanguages`);
			await setAddressGroups(getAddressGroups.status == 200 ? getAddressGroups.data : []);
			await setLanguages(getLanguages.status == 200 ? getLanguages.data : []); 
			await setCustomer(getCustomer['status'] == 200 ? getCustomer.data : {});
			console.log("Customer", getCustomer);
			console.log("Address Groups", getAddressGroups);
			console.log("Languages", getLanguages);
			console.log("Customer", customer);
			console.log("Address Groups", addressgroups);
			console.log("Languages", languages);
			let cntktPers:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID&AddressID=${id}&IncludeDetails=true`);
			console.log('Contact Persons++++++++++++++++', cntktPers);
			setContaktPersons(cntktPers.status === 200 ? cntktPers.data : []);
			await setLoading(false);
			console.log("Loding End", loading);

		}

    fetchData();
    
	}, []);
	
  	const { register, errors, handleSubmit } = useForm<FormData>({
    	criteriaMode: "all"
  	});
	  
	/* Datepicker Setup*/
	/*const handledateChange: Function = (date:any) => { 
		console.log("testdata"+date)
		console.log("testdata"+parseISO(date))
		setTdate({ date: format(new Date(date), 'dd.MM.yyyy'), selectedDate: date});
		setStdate(format(new Date(date), 'yyyy-MM-dd'));
		console.log("stdate"+stdate)
	};*/
  
  //const [alertMsg, setAlertMsg] = React.useState({show:false,variant:'success',message:''});
  
  const onSubmit = async (data: FormData) => {
	console.log("Submit Data +++++++++++++", data);
	let contactFields = [];
			let fields = [];
			for(const [i, dval] of Object.entries(data)) {
				//Contact Fields
				if(i === 'telephone') {
					contactFields.push({code: 'TEL', description: 'TEL', value: dval});
				}
				if(i === 'mobile') {
					contactFields.push({code: 'MOBILE', description: 'TEL', value: dval});
				}
				if(i === 'email') {
					contactFields.push({code: "EMAIL", description: 'TEL', value: dval});
				}
				if(i === 'website') {
					contactFields.push({code: "HP", description: 'TEL', value: dval});
				}
				if(i === 'fax') {
					contactFields.push({code: "FAX", description: 'TEL', value: dval});
				}
				// Fields
				if(i === 'AddressGroup') {
					//fields.push({field: "AddressGroup", value: dval.toString()});
				}
				if(i === 'street') {
					fields.push({field: "Street", value: dval.toString()});
				}
				if(i === 'postcode') {
					fields.push({field: "ZIP", value: dval.toString()});
				}
				if(i === 'city') {
					fields.push({field: "City", value: dval.toString()});
				}
				if(i === 'zusatz') {
					fields.push({field: "AdditionalAddressInfo", value: dval.toString()});
				}
				/*if(i === 'Birthday') {
					fields.push({field: "Birthday", value: dval.toString()});
				}*/
				if(i === 'Postbox') {
					fields.push({field: "Postbox", value: dval.toString()});
				}
				if(i === 'Firstname') {
					fields.push({field: "Firstname", value: dval.toString()});
				}
				if(i === 'Lastname') {
					fields.push({field: "Lastname", value: dval.toString()});
				}
				if(i === 'LanguageCode') {
					fields.push({field: "LanguageCode", value: dval.toString()});
				}
				if(i === 'Country') {
					fields.push({field: "Country", value: dval.toString()});
				}
				if(i === 'privateAddress') {
					fields.push({field: "PrivatAddress", value: privateAddress});
				}
				if(i === 'salutation') {
					fields.push({field: "Salutation", value: dval.toString()});
				}
				if(i === 'title') {
					fields.push({field: "Title", value: dval.toString()});
				}
				//console.log('form field data +++++++++++++', i, dval);
			}

			fields.push({field: "Birthday", value: format(new Date(birthDate), 'yyyy.MM.dd').toString()});

			let fData:any = [{
				"id": parseInt(id),
    			"masterID": 0,
    			//"groupID": 0,
				"addressLine": data.street,
				"contactFields": contactFields,
				'fields': fields,
				"inactive": false,
    			"dateCreated": format(new Date(), 'yyyy-MM-dd'),
    			"dateLastModified": format(new Date(), 'yyyy-MM-dd'),
    			"priceLevel": 0,
			}];


			console.log("Submit Build Data", fData);

			let setAddress:any = await postData(`/memoria/putMethod?url=/Addresses/setAddresses`, fData);

			console.log(setAddress);

			if(setAddress.hasOwnProperty('status') && setAddress.status === 200) {
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Kontacte Updated success", variant: 'success' },
				  });
			} else {
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Error", variant: 'Error' },
				  });
			}

	}
	
	const selectedDate = async (date:any)=> {
		console.log("Selected Date++++++++++", date);
		setBirthDate(date);
	}

  	//console.log('customer', customer);

	return(
            <div>

				    <Header/>
                 
                  	<div className="mainWrapper pl-0">
					  <div className="row no-gutters">
					    <div className="col-lg-12">
					      <div className="mainWrapperBody">
					        <div className="row no-gutters">
					          <div className="col-lg-9">
					            <div className="addTicketForm">
					              <div className="form-page">
								  {/* <CustomerEditForm props={this.props} /> */}
								  {loading ? <div>Loading...</div> : 
								  <>
								  <form  name="customerEditform"  onSubmit={handleSubmit(onSubmit)}>
									{/*<Alert variant={alertMsg.variant} show={alertMsg.show} message={alertMsg.message}/>*/}
									<div className="addTicketFormpPadding overflowScroll">
																
										<div className="row">
										<div className="col-lg-7">
											<div className="row">
												<div className="col-lg-12 col-md-12 mb-3">
													<div className="ix-kontactheader-icon" />
													<div className=" ix-formheader-innerContainer">
													<h3>Kunden Edit</h3>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-12 col-md-12 ">
													<div className="form-group">
													<label className="ix-checkbox-label"><input disabled={!toEdit ? true : false} checked={ privateAddress ? true: false } name="privateAddress" ref={register()} onClick={()=>handlePrivateAddress()} type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Privatadresse</label>
													</div>
												</div>
											</div>
											<div className="row">
											  	<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Adressgruppe </label>
													  <select name="AddressGroup" disabled={!toEdit ? true : false} className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
													  	{ addressgroups ? 
															addressgroups.map((group:any, idx:any) => <option key={idx} value={group.hasOwnProperty('description_DE') ? group.description_DE : group.id } selected={ group.description_DE === customer['AddressGroup'] ? true : false }>{group.hasOwnProperty('description_DE') ? group.description_DE : group.id }</option>)
															: null
														}
													  </select>
													</div>
											  	</div>
											  	<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Sprache </label>
													  <select name="LanguageCode" disabled={!toEdit ? true : false} className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
														{ languages ? 
																languages.map((language:any, idx:any) => <option  key={idx} value={language.code} selected={ language.code == customer?.LanguageCode ? true : false }>{language.name_DE}</option>)
																: null
														}
													  </select>
													</div>
											  	</div>
											</div>
											<div className="row">
												{ privateAddress &&
													<>
													<div className="col-lg-6 col-md-6">
																	<div className="form-group">
																	  	<label>Anrede</label>
																	  	<select disabled={!toEdit ? true : false} name="salutation" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control custom-select">
										                                  	<option value="Herr" selected={customer.hasOwnProperty('Salutation') && customer.Salutation == "Herr" ? true : false}>Herr</option>
										                                  	<option value="Frau" selected={customer.hasOwnProperty('Salutation') && customer.Salutation == "Frau" ? true : false}>Frau</option>
										                                  	<option value="Herr and Frau" selected={customer.hasOwnProperty('Salutation') && customer.Salutation == "Herr and Frau" ? true : false}>Herr and Frau</option>
										                                  	<option value="Firma" selected={customer.hasOwnProperty('Salutation') && customer.Salutation == "Firma" ? true : false}>Firma</option>
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
																<div className="col-lg-6 col-md-6 ">
																	<div className="form-group">
																	  	<label>Titel</label>
																	  	<select disabled={!toEdit ? true : false} name="title" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control custom-select">
										                                  	<option value="Dr." selected={customer.hasOwnProperty('Title') && customer.Title == "Dr." ? true : false}>Dr.</option>
										                                  	<option value="Dres." selected={customer.hasOwnProperty('Title') && customer.Title == "Dres." ? true : false}>Dres.</option>
										                                  	<option value="Prof." selected={customer.hasOwnProperty('Title') && customer.Title == "Prof." ? true : false}>Prof.</option>
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
													<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
														  <label>vorname</label>
														  <input disabled={!toEdit ? true : false} name="Firstname" type="text" defaultValue={customer['Firstname']} ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
														  <ErrorMessage
															errors={errors}
															name="Firstname"
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
														  <input disabled={!toEdit ? true : false} name="Lastname" type="text" defaultValue={customer['Lastname']} ref={register({ required: "Diese Eingabe ist erforderlich." })}  className="form-control" />
														  <ErrorMessage
															errors={errors}
															name="Lastname"
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
													</>
													}
												{!privateAddress &&	
													<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
														<label>Firmenname</label>
														<input disabled={!toEdit ? true : false} type="text" className="form-control" defaultValue={ customer['Lastname'] } name="Lastname" ref={register({ required: false })} />
														</div>
													</div>
												}
												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Zusatz</label>
													  <input disabled={!toEdit ? true : false} type="text" className="form-control" defaultValue={ customer?.AdditionalAddressInfo } name="zusatz" ref={register({ required: false })} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Strasse Nr.</label>
													  <input disabled={!toEdit ? true : false} type="text" className="form-control" name="street" defaultValue={ customer?.Street } ref={register()} />
													</div>
												</div>
											  	<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>PLZ</label>
													  <input disabled={!toEdit ? true : false} type="text" name="postcode" defaultValue={ customer?.ZIP } className="form-control" ref={register()} />
													</div>
											  	</div>

												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													<label>Ort</label>
													<input disabled={!toEdit ? true : false} type="text" className="form-control" name="city" defaultValue={ customer?.City } ref={register()} />
														{ <ErrorMessage
														errors={errors}
														name="place"
														render={({ messages }) => {
														return messages
															? Object.entries(messages).map(([type, message]) => (
															<span className="text-danger error" key={type}>{message}</span>
															))
															: null;
														}}
													/> }
													</div>
												</div>

												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
												  		<label>Postfach</label>
												  		<input disabled={!toEdit ? true : false} type="text" className="form-control" defaultValue={ customer?.Postbox } name="Postbox" ref={register({ required: false })} />
													</div>
											  	</div>

												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													<label>Land</label>
													<select disabled={!toEdit ? true : false} name="Country" className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
														{  countries.map((cnt:any, idx:any) =>
															<option value={cnt.name} selected={ customer['Country'] == cnt.code ? true : false }>{cnt.name}</option>
															)
														}
													</select>
													{/* <input type="text" className="form-control" name="country" defaultValue={ customer?.Country } ref={register({ required: "Diese Eingabe ist erforderlich." })} /> */ }

														{ <ErrorMessage
														errors={errors}
														name="Country"
														render={({ messages }) => {
														return messages
															? Object.entries(messages).map(([type, message]) => (
															<span className="text-danger error" key={type}>{message}</span>
															))
															: null;
														}}
													/> }
													</div>
												</div>
												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
												  		<label>Geburtstag</label>
												  		{/* <input disabled={!toEdit ? true : false} type="text" className="form-control" placeholder="yyyy-mm-dd" name="Birthday" defaultValue={ customer?.Birthday } ref={register( {required:false} )} />*/ }
														<DatePicker className="form-control" name="geburstag" selected={birthDate} dateFormat="dd.MM.yyyy" onChange={(date)=>selectedDate(date)} />			
													</div>
											  	</div>
											  	
												  {/*<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
												  		<label>Kontakt-Besitzer</label>
												  		<select className="form-control custom-select" ref={register({ required: false })}>
														  	<option value={0}>Anitha Sivakumar</option>
														</select>
													</div>
													</div>*/}

												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													<label>Telefon</label>
													<input disabled={!toEdit ? true : false} data-type="tel" className="form-control" name="telephone" defaultValue={customer['TEL']} ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
													<input disabled={!toEdit ? true : false} data-type="tel" className="form-control" name="mobile" defaultValue={customer['MOBILE']} ref={register({ required: "Diese Eingabe ist erforderlich." })}/>
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
													<input disabled={!toEdit ? true : false} type="text" className="form-control"  name="email" defaultValue={customer['EMAIL']} ref={register({ required: "Diese Eingabe ist erforderlich." })}  />
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
													  <input disabled={!toEdit ? true : false} type="text" className="form-control" defaultValue={customer['HP']} name="website" ref={register ( {required:false})} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Fax</label>
													  <input disabled={!toEdit ? true : false} type="text" className="form-control" defaultValue={customer['FAX']} name="fax" ref={register( {required:false} )} />
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
														<span onClick={()=>handleToEdit()} style={{cursor: 'pointer'}} className="btn-theme btn-md mr-2">bearbeiten</span>
													}
													<span onClick={()=>goToPreviousPath()} style={{cursor: 'pointer'}} className="btn-theme-white btn-md">Abbrechen</span>			

											{/* <button className="btn-theme btn-md mr-2" type="submit" >Erstellen</button>
											<Link to="/kunden" className="btn-theme-white btn-md">Abbrechen</Link> */ }
										</div>
										</div>
									</div>
									</form>
									</>
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
															<div className="mediaImg font13">{person?.firstname?.charAt(0).toUpperCase()}{person?.lastname?.charAt(0).toUpperCase()}</div>
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
  export default connect(mapStateToProps)(KontakteEdit);

//export default KontakteEdit
