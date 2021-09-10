import React ,{useState, useEffect, Fragment}from 'react';
import { Link, } from 'react-router-dom';
import { getData, postData } from "../../services/main-service";
//import Leftsidemenu from '../modules/Leftsidemenu';
//import Header from '../shared/HeaderKontakte';
import Header from '../shared/Header';
import 'react-toastify/dist/ReactToastify.css';
import { countries } from "../../utils";
import { ErrorMessage } from "@hookform/error-message";
//import { useForm, Controller} from "react-hook-form";
import { useForm } from "react-hook-form";
//import Alert from '../shared/Alert'
import { connect } from "react-redux";
import { SET_MESSAGE } from "../../redux/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';	

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

	function AddKontakte(props: any) {
		
		const [privateAddress, setPrivateAddress] = useState<boolean>(false);
		const [loading, setLoading] =  useState(true);
		const [customers, setCustomers] =  useState([]);	
		const [languages, setLanguages] = useState([]);
		const [birthDate, setBirthDate] = useState(new Date());

	  	const { register, errors, handleSubmit } = useForm<FormData>({
			criteriaMode: "all"
		 });
		
		 const handlePrivateAddress = async () => {
			console.log('Testing');
			setPrivateAddress(!privateAddress ? true : false);
			console.log(privateAddress);
		} 	

		/* Datepicker Setup*/
		//const [stdate, setStdate] = useState<any | []>([]);
		//const [date, setDate] = useState(new Date());
		//setStdate(format(new Date(date), 'yyyy-MM-dd'));

		/*const handledateChange: Function = (date:any) => {
			setDate(date);
			setStdate(format(new Date(date), 'yyyy-MM-dd'));
			
		}*/

		/*Error message Show */
	  	//const [alertMsg, setAlertMsg] = React.useState({show:false,variant:'success',message:''});
	
	  	const onSubmit = async (data: FormData) => {

			console.log('Form Data', data);

			/*clientId: "0"
			companyName: "one ix GmbH"
			country: "Switzerland"
			customerGroup: "15"
			customerLanguage: "FR"
			dob: "Male"
			email: "alex@one-x434.ch"
			fax: "test.com"
			mobile: "(987) 654-3210"
			place: "Itingen"
			postBox: "987654"
			postcode: "4452"
			streetNo: "Rosenweg 12, Testing address"
			telephone: "(987) 654-3210"
			website: "test.com"
			zusatz: "Additive"*/

			//let indexContactFields = ['telephone', 'mobile', 'email', 'website', 'fax'];
			
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
				"id": 0,
    			"masterID": 0,
    			//"groupID": 0,
				"addressLine": data.street,
				"contactFields": contactFields,
				'fields': fields,
				"inactive": false,
    			"dateCreated": "2021-02-01T07:10:13.397Z",
    			"dateLastModified": "2021-02-01T07:10:13.397Z",
    			"priceLevel": 0,
			}];

			console.log("Form Data+++++++++", fData);

			let setAddress:any = await postData(`/memoria/putMethod?url=/Addresses/setAddresses`, fData);

			console.log('sunmit Data+++++++++++', setAddress);
			
			if(setAddress.hasOwnProperty('status') && setAddress.status === 200) {
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Kontacte added success", variant: 'success' },
				  });
			} else {
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Internal Server Error", variant: 'Error' },
				  });
			}
			
	  }	
	
	useEffect(()=>{
		async function callApi() {
			let getCustomers:any = await getData(`/memoria/getMethod?url=/AddressGroups/getAddressGroupsAll`);
			let getLanguages:any = await getData(`/memoria/getMethod?url=/MasterData/getLanguages`);
			await setCustomers(getCustomers.status === 200 ? getCustomers.data : []);
			await setLanguages(getLanguages.status === 200 ? getLanguages.data : []);
			await setLoading(false);
			//console.log('get Customers', getCustomers);
			//console.log('get Languages', getLanguages);
		}
		callApi();
	}, [])

	/* console.log(loading);
	console.log('Loading Languages', languages);*/
	console.log('Loading customers',customers);

	const selectedDate = async (date:any)=> {
		console.log("Selected Date++++++++++", date);
		setBirthDate(date);
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
										<form name="customerAddform" onSubmit={handleSubmit(onSubmit)}>
											{loading ? <div>Loading...</div> : 
												<Fragment>
										{/* <Alert variant={alertMsg.variant} show={alertMsg.show} message={alertMsg.message}/> */ }
										  <div className="addTicketFormpPadding overflowScroll">
											<div className="row">
											  <div className="col-lg-7">
												<div className="row">
												  <div className="col-lg-12 col-md-12 mb-3">
													<div className="ix-kontactheader-icon" />
													<div className=" ix-formheader-innerContainer">
													  <h3>Kunden Hinzufügen</h3>
													</div>
												  </div>
												</div>
												<div className="row">
													<div className="col-lg-12 col-md-12 ">
														<div className="form-group">
														<label className="ix-checkbox-label"><input checked={ privateAddress ? true: false } name="privateAddress" ref={register()} onClick={()=>handlePrivateAddress()} type="checkbox" className="ix-checkbox" /><mark className="mr-2" />Privatadresse</label>
														</div>
													</div>
												</div>
												<div className="row">
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Adressgruppe </label>
													  <select name="AddressGroup" ref={register({ required: false })} className="form-control custom-select">
														{/* customers ? 
															customers.map((customer:any, idx:any) => <option key={idx} value={customer.hasOwnProperty('description_DE') ? customer.id : customer.id }>{customer.hasOwnProperty('description_DE') ? customer.description_DE : customer.id }</option>)
															: null
														*/ }
														{ customers ? 
															customers.map((customer:any, idx:any) => <option key={idx} value={ customer.id }>{customer.hasOwnProperty('description_DE') ? customer.description_DE : customer.id }</option>)
															: null
														}
													  </select>
													</div>
												  </div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  	<label>Sprache </label>
														<select name="LanguageCode" ref={register({ required: false })} className="form-control custom-select">
															{ languages ? 
																languages.map((language:any, idx:any) => <option  key={idx} value={language.code}>{language.name_DE}</option>)
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
																	  	<select name="salutation" ref={register()} className="form-control custom-select">
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
																<div className="col-lg-6 col-md-6 ">
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
													<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
														  <label>vorname</label>
														  <input name="Firstname" type="text" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
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
														  <input name="Lastname" type="text" ref={register({ required: "Diese Eingabe ist erforderlich." })}  className="form-control" />
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
														<input type="text" className="form-control" name="Lastname" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
												}
													<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
														  <label>Zusatz</label>
														  <input name="zusatz" type="text" ref={register({ required: "Diese Eingabe ist erforderlich." })}  className="form-control" />
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
														  <label>Strasse Nr.</label>
														  <input name="street" type="text" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
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
														  <label>PLZ</label>
														  <input name="postcode" type="text" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
													  		<input name="city" type="text" className="form-control" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
												  	<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
													  		<label>Postfach</label>
													  		<input name="Postbox" type="text" ref={register({ required: "Diese Eingabe ist erforderlich." })} className="form-control" />
															  <ErrorMessage
															errors={errors}
															name="Postbox"
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
														  <label>Land</label>
														  {/* <select data-type="select" className="form-control" name="account" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
														  <option value="">None</option>
														  <option value="swiss">Swiss</option>
														  </select>
														  <input type="text" className="form-control" name="country" ref={register({ required: "Diese Eingabe ist erforderlich." })} /> */}
														  
														<select name="Country" className="form-control custom-select" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
															{  countries.map((cnt:any, idx:any) =>
																<option value={cnt.code}>{cnt.name}</option>
																)
															}
														</select>
														  <ErrorMessage
															errors={errors}
															name="Country"
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
													  		{/*<input name="Birthday" ref={register()} placeholder="yyyy-mm-dd" type="text" className="form-control" />*/}
															<DatePicker className="form-control" name="geburstag" selected={birthDate} dateFormat="dd.MM.yyyy" onChange={(date)=>selectedDate(date)} />			
														</div>
												  	</div>
													  
												  	{/*<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
													  		<label>Kontakt-Besitzer</label>
													  		<select name="clientId" ref={register()} className="form-control custom-select">
															  	<option value={0}>Anitha Sivakumar</option>
															</select>
														</div>
														</div>*/}

												  	<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
														  <label>Telefon</label>
														  <input data-type="tel" className="form-control" name="telephone"  ref={register({ required: "Diese Eingabe ist erforderlich." })} 
															/>
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
														  <input data-type="tel" className="form-control" name="mobile" ref={register({ required: "Diese Eingabe ist erforderlich." })}/>
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
														  <input type="text" className="form-control" name="email"  ref={register({ required: "Diese Eingabe ist erforderlich." })} 
															 />
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
														  <input type="text" className="form-control" name="website" ref={register()} />
														</div>
													</div>
													<div className="col-lg-6 col-md-6 ">
														<div className="form-group">
														  <label>Fax</label>
														  <input type="text" className="form-control" name="fax" ref={register()}/>
														</div>
													</div>
													{/* <button onClick={handleSubmit(onSubmit)} className="btn-theme btn-md mr-2" type="submit" >Erstellen</button>*/ }
												{/* <div style={{display:'none'}}> 

												  <div className="col-lg-12 col-md-12 ">
													<div className="form-group">
													  <label>MwSt. Nr.</label>
													  <input type="text" className="form-control" name="vatno" ref={register()}/>
														
													</div>
												  </div>
												  <div className="col-lg-12 col-md-12 ">
													<div className="form-group">
													  <h2>Kontaktperson</h2>
													</div>
												  </div>
												  <div className="col-lg-12 col-md-12 ">
													  	<div className="form-group">
														  <label>Anrede</label>
														  <select data-type="select" className="form-control" name="salutation" ref={register()}>
															<option value="">-None-</option>
															<option value="herr">Herr</option>
															<option value="frau">Frau</option>
														  </select>
														</div>
													</div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Vorname</label>
													  <input type="text" className="form-control" name="firstName"  ref={register({ required: "Diese Eingabe ist erforderlich." })}/>
														<ErrorMessage
														errors={errors}
														name="firstName"
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
													  <input type="text" className="form-control" name="lastName" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
														<ErrorMessage
														errors={errors}
														name="lastName"
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
													  <input type="email" className="form-control" name="contEmail" ref={register({ required: "Diese Eingabe ist erforderlich." })}/>
														<ErrorMessage
														errors={errors}
														name="contEmail"
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
													  <label>Tel. Direkt</label>
													  <input data-type="tel" className="form-control" name="telephoneDirect" ref={register({ required: "Diese Eingabe ist erforderlich." })}/>
														<ErrorMessage
														errors={errors}
														name="telephoneDirect"
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
													  <input type="text" className="form-control" name="title"  ref={register()}/>
														
													</div>
												  </div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Geburtsdatum</label><br></br>
													  <Controller
													name="dob"
													control={control}
													defaultValue={date}
													render={({ onChange, value }) => (
														<DatePicker selected={date}  className="form-control" dateFormat="dd.MM.yyyy" onChange={(date)=>handledateChange(date)} />
													)}
												/> 
													</div>
												  </div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Tel. Privat</label>
													  <input data-type="tel" className="form-control" name="telephonePrivate" ref={register({ required: "Diese Eingabe ist erforderlich." })} />
													  <ErrorMessage
														errors={errors}
														name="telephonePrivate"
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
													  <label>Instagram</label>
													  <input type="text" className="form-control" name="instagram"  ref={register()}/>
														
													</div>
												  </div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Facebook</label>
													  <input type="text" className="form-control" name="facebook" ref={register()}/>
														
													</div>
												  </div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Linkedin</label>
													  <input type="text" className="form-control" name="linkedin" ref={register()}/>
													</div>
												  </div>
												  <div className="col-lg-6 col-md-6 ">
													<div className="form-group">
													  <label>Xing</label>
													  <input type="text" className="form-control" name="xing"  ref={register()}/>
													  <input type="hidden"  name="clientId"  value="1" ref={register()}/>
													</div>
												  </div> 

												</div>

			*/}
												</div>
											  </div>
											</div>
										  </div>
										  <div className="btnFooter addTicketFoterBtns">
											<div className="row">
											  <div className="col-lg-12 col-md-12 ">
												<button onClick={handleSubmit(onSubmit)} className="btn-theme btn-md mr-2" type="submit" >Erstellen</button>
												<Link to="/kunden" className="btn-theme-white btn-md">Abbrechen</Link>
											  </div>
											</div>
										  </div>
										  </Fragment>
										}
										</form>
										
									  </div>
									</div>
								  </div>
								  <div className="col-lg-3">
									<div className="kontactInfo">
									  { /*<div id="accordion">
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
									  </div> */}
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
  export default connect(mapStateToProps)(AddKontakte);

//export default AddKontakte
