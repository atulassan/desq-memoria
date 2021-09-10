import React,{useEffect, useState} from 'react';
import { Link} from 'react-router-dom';
import { useHistory } from "react-router";
import { getData} from "../../services/main-service";
import { postData} from "../../services/main-service";
import Header from '../shared/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorMessage } from "@hookform/error-message";
import { useForm,Controller} from "react-hook-form";
import {format,parseISO } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { de } from 'date-fns/locale';
import Select from 'react-select'
import { connect } from 'react-redux';
import { SET_MESSAGE } from "../../redux/types";
import { getCustList } from "../../utils"

import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';

type FormData = {
	id: number,
	addressID: number,
	contactPersonID: number,
	dateCreated: string,
	departmentID: string,
	orderOrigin: string,
	productID: number,
	deliveryAddressID: number,
	status: string,
	text: string,
	title: string,
	typeID: number,
	urgencyID: number,
	userAssignedID: number,
	userCreatedID: number,
	followUp: boolean,
	followUpDate:string,
	roomID: number,
	};  
 

function EditTicket(props:any){
	const history = useHistory();
	const [loading, setLoading] = useState(true);
	const [ channel, setChannel] = useState<any | []>([]);
	const [custTele, setCustTele] = useState("");
	const [custEmail, setCustEmail] = useState("");
	const [ticketsData, setTickets] = useState<any | []>([]);
	const [tdate, setTdate] = useState<any | []>([]);
	const [stdate, setStdate] = useState<any | []>([]);
	const [dep, setDep] = useState<any | []>([]);
	const [turgency, setTurgency] = useState<any | []>([]);
	const [ticketType, setTicketType] = useState<any | []>([]);
	const [allCust, setAllCust] = useState<any | []>([]);
	const [addressId, setAddressId] = useState("");
	const [allContact, setAllContact] = useState<any | []>([]);
	const [cperson, setCperson] = useState("");
	const [contactFullData, setContactFullData] = useState<any | []>([]);
	const [userList, setUserList] = useState<any | []>([]);
	const [userInfo, setUserInfo] = useState<any | []>([]);
	const [deliveryAddress, setDeliveryAddress] = useState<any | []>([]);
	//const [contDetails, setContDetails] = useState<any | []>([]);
	const [uid, setUid] = useState("");
	const [uname, setUname] = useState("");
	const [selectedOption, setSelectedOption] = useState("");
	const [selectedOptionCont, setSelectedOptionCont] = useState("");
	const [product, setProduct] = useState<any | []>([]);
	const [rooms, setRooms] = useState<any | []>([]);

	const [value, setValue] = useState(RichTextEditor.createEmptyValue());
	
	let { id }:any =  props.match.params;
	/* GET Channel And Classifications Data Using ID*/
	useEffect(() => {
		console.log("link id------------"+id);
      	async function fetchData(){
			await setUserInfo(props.user.user);
			console.log("userInfouserInfouserInfo-",userInfo);
			console.log("userInfouserInfouserInfo-",userInfo.user?.id);
			await  setUid(userInfo.user?.id);
			let fname =userInfo.user?.firstname!='' && userInfo.user?.firstname!=null && userInfo.user?.firstname!=undefined?userInfo.user?.firstname:'';
			let lanme = userInfo.user?.lastname!='' && userInfo.user?.lastname!=null && userInfo.user?.lastname!=undefined?userInfo.user?.lastname:'';
			await  setUname( fname + lanme)
			let deliveryAddress: any = await getData(`/memoria/getMethod?url=/DeliveryAddresses/getDeliveryAddressesAll`);
			// GET ALL PRODUCTS
			let resultproduct:any = await getData('/memoria/getMethod?url=/Tickets/getTicketProducts');
			// GET ALL DEPARTMENT
			let resultdep:any = await getData('/memoria/getMethod?url=/Tickets/getTicketDepartments');
			// GET ALL  URGENCY
			let resultUrgency:any = await getData('/memoria/getMethod?url=/Tickets/getTicketUrgencies');
			// GET ALL  KANNAL
			let resultChannel:any = await getData('/memoria/getMethod?url=/MasterData/getOrderOrigins');
			// GET ALL  KANNAL
			let resultTicketType:any = await getData('/memoria/getMethod?url=/Tickets/getTicketTypes');
			// GET ALL Rooms
			let resultrooms:any = await getData('/memoria/getMethod?url=/Tickets/getTicketRooms');
			await setRooms(resultrooms.data);
			let resultuser: any = await getData(`/memoria/getMethod?url=/Users/getUsersAll&Fields=Firstname&Fields=Lastname`);
			await setDeliveryAddress(deliveryAddress.data.objects);
            await setUserList(resultuser.data.objects);
			await setChannel(resultChannel.data);
			await setDep(resultdep.data);
			await setTurgency(resultUrgency.data);
			await setTicketType(resultTicketType.data);
			await setProduct(resultproduct.data);
			let resultTicket:any = await getData(`/memoria/getMethod?url=/Tickets/getTicketByID&Fields=Firstname&Fields=Lastname&IncludeDetails=true&ID=${id}`);
			await setTickets(resultTicket.data);
			//console.log(ticketsData);
			console.log(tdate);
			console.log(stdate);
			console.log("check data===============",resultTicket)
			if(resultTicket.status==200)
			 {
				if(resultTicket.data["text"]!="" && resultTicket.data["text"]!=null && resultTicket.data["text"]!=undefined)
				{
				setValue(RichTextEditor.createValueFromString(resultTicket.data["text"], 'html'));
				}
				await setCperson(resultTicket.data.contactPersonID);
				await setAddressId(resultTicket.data.addressID);
				await setTdate({ date: resultTicket.data.followUpDate!=""  && resultTicket.data.followUpDate!=null  && resultTicket.data.followUpDate!=undefined?format(new Date(resultTicket.data.followUpDate), 'dd.MM.yyyy'):'', selectedDate:  resultTicket.data.followUpDate!=""  && resultTicket.data.followUpDate!=null  && resultTicket.data.followUpDate!=undefined?parseISO(resultTicket.data.followUpDate):''});
				await setStdate( resultTicket.data.followUpDate!=""  && resultTicket.data.followUpDate!=null  && resultTicket.data.followUpDate!=undefined?format(new Date(resultTicket.data.followUpDate), 'yyyy-MM-dd'):'');
				
				let resultContactSep:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonByID&IncludeDetails=true&ID=${resultTicket.data.contactPersonID}`);
				let fname = resultContactSep.data.firstname?resultContactSep.data.firstname:'';
				let lname = resultContactSep.data.lastname?resultContactSep.data.lastname:'';
				let sOptionCont:any  ={value: resultTicket.data, label: fname+' '+lname};
				setSelectedOptionCont(sOptionCont);
				console.log(selectedOptionCont);
				let  custData:any = await {firstName :resultContactSep.data.firstname,
					lastName :resultContactSep.data.lastname,
					street :resultContactSep.data.street,
					zip :resultContactSep.data.zip,
					city :resultContactSep.data.city,
					// email :resultContactSep.data.contactFields[1].value,
					// web :"",
					// mobile :"",
					// telephone :resultContactSep.data.contactFields[0].value,
					company :resultContactSep.data.company
				};
				let data1 = await getCustList(resultContactSep.data.contactFields,'code');
				custData = await {
						...custData,
						...data1,
						};
				setCustTele(custData.MOBILE);
				setCustEmail(custData.EMAIL);
				await setContactFullData(custData);
			

			let resultCustomersep:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&Fields=Firstname&Fields=Lastname&ID=${resultTicket.data.addressID}`);
			let sOption:any  ={value: resultTicket.data.addressID, label: resultCustomersep.data.fields[0].value?resultCustomersep.data.fields[0].value:''+ resultCustomersep.data.fields[1].value?resultCustomersep.data.fields[1].value:''};
			await setSelectedOption(sOption);
			// ALL CUSTOMER
			let resultCustomer:any = await getData('/memoria/getMethod?url=/Addresses/getAddressesAll&Fields=Firstname&Fields=Lastname');
			let options = [];
			for (let i = 0; i < resultCustomer.data.objects.length; i++) {
				//console.log("all cust--------------------------------------",resultCustomer.data.objects[i]);
				let cname = await getCustList(resultCustomer.data.objects[i].fields,'field');
				// let fname = resultCustomer.data[i].fields[0].value!="" && resultCustomer.data[i].fields[0].value!=null && resultCustomer.data[i].fields[0].value!=undefined?resultCustomer.data[i].fields[0].value:""
				// let lname = resultCustomer.data[i].fields[1].value!="" && resultCustomer.data[i].fields[1].value!=null && resultCustomer.data[i].fields[1].value!=undefined?resultCustomer.data[i].fields[1].value:""
				options.push(	{ value: resultCustomer.data.objects[i].id, label: cname.Firstname?cname.Firstname:null+' '+cname.Lastname?cname.Lastname:null});
				
				
			}
			await setAllCust(options);
			
			let resultContactAll:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID&IncludeDetails=true&addressID=${resultTicket.data.addressID}`);
			let options1:any=[];
				for (let i = 0; i < resultContactAll.data.length; i++) {
					let fname = resultContactAll.data[i].firstname!="" && resultContactAll.data[i].firstname!=null && resultContactAll.data[i].firstname!=undefined?resultContactAll.data[i].firstname:""
					let lname = resultContactAll.data[i].lastname!="" && resultContactAll.data[i].lastname!=null && resultContactAll.data[i].lastname!=undefined?resultContactAll.data[i].lastname:""
					options1.push(	{ value: resultContactAll.data[i], label: fname+' '+lname });
				}
				setAllContact(options1);
				
			}
			setLoading(false);
			
			await setStdate(format(new Date(tdate), 'yyyy-MM-dd'));
			
		}
		fetchData()
		},[props]);
		
		//console.log("userList----------------------------",userList);
		//console.log("all cust++++++++++++++++++++++++++++++++++++",allCust);
		async function handleSelectChange(event:any)  {
			setAddressId(event.value);
			await setSelectedOption(event);
			await setSelectedOptionCont("");
			let resultContact:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID&IncludeDetails=true&addressID=${event.value}`);
			let options:any=[];
			for (let i = 0; i < resultContact.data.length; i++) {
				let fname = resultContact.data[i].firstname!="" && resultContact.data[i].firstname!=null && resultContact.data[i].firstname!=undefined?resultContact.data[i].firstname:""
				let lname = resultContact.data[i].lastname!="" && resultContact.data[i].lastname!=null && resultContact.data[i].lastname!=undefined?resultContact.data[i].lastname:""
				options.push(	{ value: resultContact.data[i], label: fname+' '+lname });
			}
			setAllContact(options);
			;
		}
		async function handleSelectContactChange(event:any)  {
			
			let fname = event.value.firstname?event.value.firstname:'';
			let lname = event.value.lastname?event.value.lastname:'';
			let selectUpdate :any  ={value: event, label: fname+' '+lname};
			console.log(selectUpdate);
			await setSelectedOptionCont(selectUpdate);
			let  custData:any = await {firstName :event.value.firstname,
				lastName :event.value.lastname,
				street :event.value.street,
				zip :event.value.zip,
				city :event.value.city,
				// email :event.value.contactFields[1].value,
				// web :"",
				// mobile :"",
				// telephone :event.value.contactFields[0].value,
				company :event.value.company
			};
			if(event.value.contactFields!==undefined)
			{
				let data1 = await getCustList(event.value.contactFields,'code');
				custData = await {
					...custData,
					...data1,
					};
				setContactFullData(custData);
				setCustTele(custData.MOBILE);
				setCustEmail(custData.EMAIL);
				setCperson(event.value.id);
				
			}
			else{
				setContactFullData({});
				setCustTele("");
				setCustEmail("");
				setCperson("");
			}
			
			
		}
		console.log(loading);
		const { register, errors, handleSubmit, control } = useForm<FormData>({
			criteriaMode: "all"
		  });
		/* Datepicker Setup*/
		const handledateChange: Function = (date:any) => { 
			console.log("testdata"+date)
			console.log("testdata"+parseISO(date))
			setTdate({ date: format(new Date(date), 'dd.MM.yyyy'), selectedDate: date});
			setStdate(format(new Date(date), 'yyyy-MM-dd'));
			console.log("stdate"+stdate)
		};
		/*Sumbit Update Form */
		const onSubmit = async (data:FormData) => {
			data["dateCreated"]=new Date().toISOString();
			data["followUp"]=true;
			//data['followUpDate']=new Date(stdate.selectedDate).toISOString();
			data['followUpDate']=new Date().toISOString();
			//data['productID']=22;
			let  fData:any =[];
			let data1:any = {
				"id": data.id,
				"addressID": data.addressID,
    			"contactPersonID": data.contactPersonID,
    			"dateCreated": data.dateCreated,
				//"deliveryAddressID": data.deliveryAddressID,
				//"followUp": data.followUp,
				//"followUpDate": data.dateCreated,
				"orderOrigin": data.orderOrigin,
    			"productID": data.productID,
    			"status": data.status,
    			"text": value.toString('html'),
				"title": data.title,
				"typeID": data.typeID,
				"departmentID":data.departmentID,
				"urgencyID": data.urgencyID,
				"userAssignedID":data.userAssignedID,
				"userCreatedID":data.userCreatedID,
				"roomID":data.roomID,
			};
			if(data.deliveryAddressID !== 0)
			{
				data1["deliveryAddressID"]=await data.deliveryAddressID;
			}
			await fData.push(data1);
			console.log("ticket final data----fdata-------->",fData);
			let result:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', fData);
            console.log("Ticket  post result is ",result);
            if(result.status === 200)
            {
				await props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Ticket Update Success", variant: 'success' },
				  });
				 await history.push('/tickets');
			}
			else
			{
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Internal Server Error", variant: 'Error' },
				  });
			}
			
		}
		const onChange = (value: any) => {    
			console.log('inside onchange',value);
			setValue(value);
		  	console.log('inside props.change',value.toString('markdown'));
		}
		let addressVal:any  = selectedOption;
		let contactAddressVal:any  = selectedOptionCont;
        return(
            <div>
                 <Header/>
                  	<div className="mainWrapper pl-0">
					  {loading? <div className="p-3">Loading...</div>:(
					  <div className="row no-gutters">
					    <div className="col-lg-12">
					      <div className="mainWrapperBody">
					        <div className="row no-gutters">
					          <div className="col-lg-9">
					            <div className="addTicketForm">
					              <div className="form-page">
								  <form name="ticketAddform"  onSubmit={handleSubmit(onSubmit)}>
									<div className="addTicketFormpPadding overflowScroll">
					                    <div className="row">
					                      <div className="col-lg-7">
					                        <div className="row">
					                          <div className="col-lg-12 col-md-12 ">
					                            <div className="form-group">
					                              <h2>Ticket </h2>
					                            </div>
					                          </div>
											  <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Firmenname</label>
												  <Select options={allCust} name="address" value={addressVal}  onChange={(event) =>{handleSelectChange(event)}} placeholder={<div>Suchen...</div>} />
												<input type="hidden" name="addressID" value={addressId} ref={register({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })} />  
												<ErrorMessage
														errors={errors}
														name="addressID"
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
					                              <label className="label-red">Kontakt </label>
												  
												  <Select options={allContact} name="contactperson" value={contactAddressVal}  onChange={(event) =>{handleSelectContactChange(event)}} placeholder={<div>Bitte wählen</div>}/>
												<input type="hidden" name="contactPersonID" value={cperson} ref={register({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })} />  
												<ErrorMessage
														errors={errors}
														name="contactPersonID"
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
					                              	<label>Ausführungsort</label>
													  <select  className="form-control" name="deliveryAddressID" ref={register({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
													  <option value={0}>Bitte wählen</option>
													  {deliveryAddress.length>0?deliveryAddress.map((adtype:any, key:any) => 
														<option value={adtype.id} key={key} selected={ticketsData.deliveryAddressID === adtype.id ? true : false}> {adtype.addressLine}</option>
														):""}
					                                </select>
													{/* <ErrorMessage
														errors={errors}
														name="deliveryAddressID"
														render={({ messages }) => {
														  return messages
															? Object.entries(messages).map(([type, message]) => (
															  <span className="text-danger error" key={type}>{message}</span>
															))
															: null;
														}}
													  /> */}
					                          	</div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>E-Mail</label>
												  <input type="text" className="form-control" name="email"  value={custEmail} />
												 
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6 ">
					                            <div className="form-group">
					                              <label>Tel.</label>
												  <input type="text" className="form-control" name="telephone"   value={custTele}  />
												  
					                            </div>
					                          </div>
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label className="label-red">Betreff</label>
												  <input type="text" className="form-control" name="title" defaultValue={ticketsData.title} ref={register({ required: "Diese Eingabe ist erforderlich." })} />
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
					                          <div className="col-lg-12 col-md-12">
					                            <div className="form-group">
					                              <label>Beschreibung</label>
												  <RichTextEditor value={value} onChange={onChange} />
												  <input type="hidden" className="form-control BeschreibungOpen"  name="text" ref={register()}/>
					                              <div className="BeschreibungEditor" style={{display: 'none'}}>
					                              	<span className="BeschreibungClose">×</span>
					                                <textarea rows={10} cols={80}  />
					                              </div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              	<label>Produkt </label>
					                              	<div className="form-group">
												  	<select  className="form-control custom-select" name="productID" ref={register({valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
													  	<option value="">Bitte wählen</option>
														{product.map((product:any, key:any) => 
															<option value={product.id} key={key} selected={ticketsData.productID === product.id ? true : false} > {product.name_DE}</option>
														)}
					                                </select>
													<ErrorMessage
														errors={errors}
														name="productID"
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
											  <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              	<label>Raum </label>
					                              	<div className="form-group">
													  <select  className="form-control custom-select" name="roomID" ref={register({valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
													  	<option value="">Bitte wählen</option>
														{rooms.map((rooms:any, key:any) => 
															<option value={rooms.id} key={key}  selected={ticketsData.roomID === rooms.id ? true : false}> {rooms.name_DE}</option>
														)}
														</select>
														<ErrorMessage
														errors={errors}
														name="roomID"
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
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Type </label>
					                              <div className="form-group">
												  <select  className="form-control custom-select" name="typeID" ref={register({valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
												  	<option value="">Bitte wählen</option>
													{ticketType.map((ttype:any, key:any) => 
														<option value={ttype.id} key={key} selected={ticketsData.typeID === ttype.id ? true : false}> {ttype.name_DE}</option>
													)}
					                                </select>
													<ErrorMessage
														errors={errors}
														name="typeID"
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
											  <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              	<label>Projekt </label>
					                              	<div className="form-group">
													  	<input type="text" className="form-control"  name="pro" readOnly/>
					                              	</div>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label className="label-red">Status </label>
					                              <div className="form-group">
													  {/* <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" /> */}
					                                <select  className="form-control custom-select" name="status" ref={register()}>
					                                   <option value="Open"  selected={ticketsData.status === "Open" ? true : false}>Offen</option>
					                                  <option value="In_Progress"  selected={ticketsData.status === "In_Progress" ? true : false}>In Arbeit</option>
					                                  <option value="Closed"  selected={ticketsData.status === "Closed"  ? true : false}>Geschlossen</option>
					                                  <option value="Charged"  selected={ticketsData.status === "Charged" ? true : false}>Verrechnet</option> 
													</select>
												   <ErrorMessage
														errors={errors}
														name="status"
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
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Ticket Besitzer</label>
					                              <div className="form-group">
					                                <select  className="form-control custom-select" name="userAssignedID" ref={register({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
					                                	<option value="">Bitte wählen</option>
														{userList.map((userList: any, key: any) =>
														<option value={userList.id} key={key}  selected={ticketsData.userAssignedID === userList.id ? true : false}>
															{userList.firstname != "" && userList.firstname != "" && userList.firstname != "" ? userList.firstname : ''}
															{userList.lastname != "" && userList.lastname != "" && userList.lastname != "" ? userList.lastname : ''}</option>
														)}
					                                  
					                                </select>
													<ErrorMessage
														errors={errors}
														name="userAssignedID"
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
					                        <div className="row">
					                          <div className="col-lg-12 col-md-12 mt-4">
					                            <div className="form-group">
					                              <h2>ZusätzlicheInformationen</h2>
					                            </div>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Fälligkeitsdatum </label><br></br>
					                              {/* <DatePicker selected={date}  className="form-control" onChange={(date)=>handledateChange(date)} name="dueDate" ref={register}/>  */}
												  <Controller
													name="followUpDate"
													control={control}
													defaultValue={tdate.selectedDate}
													render={({ onChange, value }) => (
														<DatePicker locale={de} selected={tdate.selectedDate}  dateFormat="dd.MM.yyyy" className="form-control" onChange={(date)=>handledateChange(date)} />
													)}
												/>
													{/* render={({onChange}:any) =>  <DatePicker selected={date}  className="form-control" onChange={(date)=>handledateChange(date)} /> }
												/> */}
					                            </div>
												<ErrorMessage
												errors={errors}
												name="followUpDate"
												render={({ messages }) => {
													return messages
													? Object.entries(messages).map(([type, message]) => (
														<span className="text-danger error" key={type}>{message}</span>
													))
													: null;
												}}
												/>
					                          </div>
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Priorität </label>
					                              <div className="form-group">
					                                <select  className="form-control custom-select" name="urgencyID" ref={register({valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
					                                	<option value="">Bitte wählen</option>
														{turgency.map((turgency:any, key:any) => 
														<option value={turgency.id} key={key}  selected={ticketsData.urgencyID === turgency.id ? true : false} > {turgency.name_DE}</option>
														)}
					                                </select>
													<ErrorMessage
														errors={errors}
														name="urgencyID"
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
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Kanal </label>
					                              <div className="form-group">
					                             <select  className="form-control custom-select" name="orderOrigin" ref={register({ required: "Diese Eingabe ist erforderlich." })}>
					                             	<option value="">Bitte wählen</option>
													{channel.map((channel:any, key:any) => 
														<option value={channel.name_DE}  selected={ticketsData.orderOrigin === channel.name_DE ? true : false} > {channel.name_DE}</option>
													)}
                                        			</select>

													<ErrorMessage
														errors={errors}
														name="orderOrigin"
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
					                          <div className="col-lg-6 col-md-6">
					                            <div className="form-group">
					                              <label>Abteilung </label>
					                              <div className="form-group">
													<select  className="form-control custom-select" name="departmentID" ref={register({valueAsNumber: true,  required: "Diese Eingabe ist erforderlich." })}>
														<option value="">Bitte wählen</option>
														{dep.map((dep:any, key:any) => 
														<option value={dep.id} key={key}  selected={ticketsData.departmentID === dep.id ? true : false} 
														 > {dep.name_DE}</option>
														)}
					                                </select>
													<ErrorMessage
														errors={errors}
														name="departmentID"
														render={({ messages }) => {
														  return messages
															? Object.entries(messages).map(([type, message]) => (
															  <span className="text-danger error" key={type}>{message}</span>
															))
															: null;
														}}
													  />
													  <input type="hidden"  name="userCreatedID"  defaultValue={uid} ref={register({valueAsNumber: true,})}/>
													  <input type="hidden"  name="id"  defaultValue={ticketsData.id} ref={register({valueAsNumber: true,})}/>
					                              </div>
					                            </div>
					                          </div>
					                          {/* <div className="col-lg-6 col-md-6 mt-4 mb-5">
					                            <div className="form-group">
					                                <p>
					                                  <div className="link-blue mr-3 rndbtn rndInput">
					                                    <input type="file" id="file" name="ticketfile" onChange={handleUpload} ref={register()}/>
														
					                                    <i className="fa fa-paperclip" />
					                                  </div> <span className="ahange"><span className="link-blue">Anhänge</span> (pdf, word, excel, jpeg, jpg, png)</span>
													</p>
													<p>Filename: </p>
      												<p>File type: </p>
      												<p>File size:  bytes</p>
					                              </div>
					                          </div> */}
					                        </div>
					                      </div>
					                    </div>
					                  </div>
					                  <div className="btnFooter addTicketFoterBtns">
					                    <div className="row">
					                      <div className="col-lg-12 col-md-12 ">
					                      	<div className="btn-groups">
						                        <button className="btn-theme btn-md" type="submit" >Erstellen</button>
												<a href="/tickets" className="btn-theme-white btn-md">Abbrechen</a>
												
						                    </div>
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
					                  <div className="card-header" id="headingOne">
					                    <h5 className="mb-0">
					                       <Link to="#" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					                        Kontakt Information
					                      </Link>
					                    </h5>
					                  </div>
					                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
					                    <div className="card-body">
										<div className="media">
					                        <div className="mediaImg font13">{contactFullData.firstName == "" || contactFullData.firstName == null || contactFullData.firstName == undefined ? " " :contactFullData.firstName.charAt(0).toUpperCase() }{contactFullData.lastName == "" || contactFullData.lastName == null ||contactFullData.lastName == undefined ? " " :contactFullData.lastName.charAt(0).toUpperCase() }  </div>
					                        <div className="media-body">
					                          <h4 className="mt-2 mb-2"> { contactFullData.firstName == "" || contactFullData.firstName == null || contactFullData.firstName== undefined ? " " : contactFullData.firstName}</h4><h4>{contactFullData.lastName == "" || contactFullData.lastName == null || contactFullData.lastName == undefined ? " " : contactFullData.lastName}</h4>
					                          <p>{contactFullData.company == "" || contactFullData.company == null || contactFullData.company == undefined ? " " : contactFullData.company}</p>
					                        </div>
					                      </div>
					                      <div className="contactInfoList">
										  <ul>
					                          <li><i className="lnr lnr-envelope" />{contactFullData.EMAIL?contactFullData.EMAIL:null}</li>
					                          <li><i className="lnr lnr-phone" />{contactFullData.TEL?contactFullData.TEL:null}</li>
					                          <li><i className="lnr lnr-phone-handset" />{contactFullData.MOBILE?contactFullData.MOBILE:null}</li>
					                          <li><i className="lnr lnr-map-marker" />{contactFullData.street == "" || contactFullData.street == null || contactFullData.street == undefined ? " " : contactFullData.street}</li>

					                          <li><i className="lnr lnr-list" /> {contactFullData.zip == "" || contactFullData.zip == null || contactFullData.zip == undefined ? " " : contactFullData.zip}
											  {contactFullData.city == "" || contactFullData.city == null || contactFullData.city == undefined ? " " : contactFullData.city}</li>
					                          <li><i className="lnr lnr-earth" />{contactFullData.HP?contactFullData.HP:null}</li>
					                        </ul>
					                      </div>
					                      <div className="contactInfoListTxt">
					                        <p>Besitzer <span>{uname}</span></p>
					                        { /*<p>Kontakt-Erstellungszeit <span>28.09.2020 08:36 AM</span></p>*/ }
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
					  )}
					  </div>
                
            </div>
        )
    }
//export default EditTicket
EditTicket.propTypes = {
	onChange: PropTypes.func,
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
  )(EditTicket)
