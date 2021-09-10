import React, {useEffect,useRef,useState} from 'react';;
import { Link} from 'react-router-dom';
import { getData,postData} from "../../services/main-service";
//import { postData} from "../../services/main-service";
import Header from '../shared/Header';
import CommentDetails from '../shared/CommentDetails';
import SubTask from '../shared/SubTask';
import AddProduct from '../shared/AddProduct';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
//import 'react-toastify/dist/ReactToastify.css';
//import { ErrorMessage } from "@hookform/error-message";
//import { useForm} from "react-hook-form";
//import Alert from '../shared/Alert'
import { priceFormat, canvasImage } from "../../utils"


import { base64ToFile, convertBase64, getType, getTypeIcon } from "../../utils"
import { getQuantityNumberList, getHoursTime, getMinTime, secondsToTime, getTimeShow } from "../../utils"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {format, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';

import 'react-accessible-accordion/dist/fancy-example.css';
import { SET_MESSAGE } from 'app/redux/types';
import { connect } from 'react-redux';
import SignatureCanvas from 'react-signature-canvas'

type FormData = {
	hours: number,
	mins: number,
	id: number,
	ticketId: number,
	workDuration:number,
	executionDate:string,
	etime:string,
	followUpDate:string,
	estimadedWorkDuration:number,
	estHours:number,
	estMinutes:number,
	
};
type FormData2 = {
	rating: string,
	firstnameLastname :string,
	signature:string,
	status:string,
			
};
function TicketsDetail(props:any){
let {user}=props;
console.log("user",user);
const [alltickets, setAlltickets] = useState<any | []>([]);
const [currentTicket, setCurrentTicket] = useState<any | []>([]);
const [currentCustomer, setCurrentCustomer] = useState<any | {}>([]);
const [tdate, setTdate] = useState<any | []>([]);
const [dldate, setDldate] = useState<any | []>([]);
const [ticketCurrentId, setTicketCurrentId] = useState("");
//const [statusTicket, setStatusticket] = useState<any | []>([]);
const [dep, setDep] = useState<any | []>([]);
const [turgency, setTurgency] = useState<any | []>([]);
const [channel, setChannel] = useState<any | []>([]);
const [userName, setUserName] = useState<any | []>([]);
const [delivaryAddress, setDelivaryAddress] = useState<any | []>([]);
const [contactDetails, setContactDetails] = useState<any | []>([]);
const [showComments, setShowComments] = useState(true);
const [subTask, setSubTask] = useState<boolean>(true);
const [showtabicon, setshowtabicon] = useState(1);
const [currentPage, setCurrentPage] = useState(props.location.search.slice(6) || 1);
//const [contactField, setContactField] = useState<any | []>([]);
const [timeEntry, setTimeEntry] = useState<boolean>(true);
const [projectList, setProjectList] = useState<any | []>([]);
const [filesList, setFilesList] = useState<any | []>([]);
const [aufgaben, setAufgaben] = useState<any | []>([]);
const [product, setProduct] = useState<any | []>([]);
const [rooms, setRooms] = useState<any | []>([]);
const [userList, setUserList] = useState<any | []>([]);
const [ticketProductList, setTicketProduct] = useState<any | []>([]);
const [edate, setEdate] = useState<any | []>([]);
const [fdate, setFdate] = useState<any | []>([]);
//const [edateEtime, setEdateEtime] = useState<any | []>([]);

const [showProduct, setShowProduct] = useState(true);
const [filesLoad, setFilesLoad] =  useState(false);
const [ratingEntry, setRatingEntry] = useState<boolean>(true);
const [trimmedDataURL, settrimmedDataURL] = useState("");
const [sigPad, setSigPad] :any= useState({});
const [selectRate, setSelectRate] = useState(5);
const [loading, setLoading] = useState(true);
const [estData, setEstData] = useState(0);
const [wrkData, setWrkData] = useState(0);
const { register, handleSubmit,reset } = useForm<FormData>({
	criteriaMode: "all"
})
const { register: register2, reset:reset2, errors: errors2, handleSubmit: handleSubmit2 } = useForm<FormData2>({
	criteriaMode: "all"
})
//Status Changes
async function ticketStatusChanges() {
	let sData:any ={...currentTicket}
	if(sData.hasOwnProperty('rating'))
	{
		delete sData["rating"]
	}
	if(sData.hasOwnProperty('firstnameLastname'))
	{
		delete sData["firstnameLastname"]
	}
	if(sData.hasOwnProperty('signature'))
	{
		delete sData["signature"]
	}
	let data1:any = {
	  "status": "In_Progress",
	}
   let fData:any  = { ...sData, ...data1};
	console.log("ticket status changes----fdata-------->",fData);
	let result:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', [fData]);
	      console.log("Ticket  post result is ",result);
	await setCurrentTicket(fData);
	}
const trigerFileUpload = useRef(null) as React.RefObject<HTMLInputElement>;
//var sigPad:any = {}
const clear = () => {
	//console.log('clear Called')
	//console.log('sigPad',sigPad);
   sigPad.clear();
  settrimmedDataURL("");
  //setSelectRate(5);
   
 }

useEffect(() => {
	async function fetchData(){
		// GET TICKET ID
		setCurrentPage(props.location.search.slice(6)|| 1);
		//setTimeEntry(true);
		await setEdate({ edateshow:new Date(),edatevalue:new Date().toISOString()});
		await setFdate({ fdateshow:new Date(),fdatevalue:new Date().toISOString()});
		//await setEdateEtime("00:00");
		setShowComments(true);
		console.log(showComments);
		
		console.log(subTask);
		let { id } = props.match.params;
		console.log("main ID",id);
		await setTicketCurrentId(id);
		await WorkDurationShow(id);
		let allData:any = [];
		let resultticketall:any = await getData(`/memoria/getMethod?url=/Tickets/getTicketsAll&PageSize=20&OrderBy=ID DESC&PageNumber=${currentPage - 1}`);
		resultticketall.data.objects.map(async (result:any, i:any)=>{
			let resultCustomer:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&Fields=Firstname&Fields=Lastname&ID=${result.addressID}`);
			result['customer']= await resultCustomer.data;
			allData.push(result);
			
			}
		);
		await setAlltickets(allData);
		//console.log("allticketsalltickets==",alltickets);
		let getAllUser: any = await getData(`/memoria/getMethod?url=/Users/getUsersAll&Fields=Firstname&Fields=Lastname`);
		await setUserList(getAllUser.data.objects);
		// GET ALL Rooms
		let resultrooms:any = await getData('/memoria/getMethod?url=/Tickets/getTicketRooms');
		await setRooms(resultrooms.data);
		// GET ALL PRODUCTS
		let resultproduct:any = await getData('/memoria/getMethod?url=/Tickets/getTicketProducts');
		await setProduct(resultproduct.data);
		// GET ALL DEPARTMENT
		let resultdep:any = await getData('/memoria/getMethod?url=/Tickets/getTicketDepartments');
		await setDep(resultdep.data);
		// GET ALL  URGENCY
		let resultUrgency:any = await getData('/memoria/getMethod?url=/Tickets/getTicketUrgencies');
		await setTurgency(resultUrgency.data);
		// GET ALL  KANNAL
		let resultChannel:any = await getData('/memoria/getMethod?url=/MasterData/getOrderOrigins');
		await setChannel(resultChannel.data);
		
		// GET TICKET SEPARATE DETAILS
		console.log ("current ticket id",id);
		let resultTicket:any = await getData(`/memoria/getMethod?url=/Tickets/getTicketByID&Fields=Firstname&Fields=Lastname&ID=${id}`);
		await setCurrentTicket(resultTicket.data);
		await setFilesList(resultTicket.data.files);
		await setTdate({ selectedDate: (currentTicket.dateClosed?parseISO(currentTicket.dateClosed):'')});	
		await setDldate({ deadLineDate:(currentTicket.deadLine?parseISO(currentTicket.deadLine):new Date())});	
		let resultTicketProduct:any = await getData(`/memoria/getMethod?url=/TicketPositions/getTicketPositions&TicketID=${id}`);
		await setTicketProduct(resultTicketProduct.data);
		// GET CUSTOMER SEPARATE DETAILS
		let currentCustomer:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&Fields=Firstname&Fields=Lastname&Fields=Street&Fields=Zip&Fields=City&IncludeDetails=true&ID=${resultTicket.data.addressID}`);
		let  custData:any = await {firstName :currentCustomer.data.fields[0]?.value,
			
		};
		for(let i=0; i<currentCustomer.data.fields.length;i++){
			
			custData[currentCustomer.data.fields[i].field]=currentCustomer.data.fields[i].value;
		
		}
		for(let i=0; i<currentCustomer.data.contactFields.length;i++){
			
			custData[currentCustomer.data.contactFields[i].code]=currentCustomer.data.contactFields[i].value;
		
		}
	
		await setCurrentCustomer(custData);
		// GET USER SEPARATE DETAILS
		let resultuser:any = await getData(`/memoria/getMethod?url=/Users/getUsersByID&Fields=Firstname&Fields=Lastname&ID=${resultTicket.data.userCreatedID}`);
		//let delivaryAddress:any = await getData(`/memoria/getMethod?url=/DeliveryAddresses/getDeliveryAddressesByAddressID&addressID=${resultTicket.data.addressID}`);
		let delivaryAddress:any = await getData(`/memoria/getMethod?url=/DeliveryAddresses/getDeliveryAddressByID&IncludeDetails=true&ID=${resultTicket.data.deliveryAddressID}`);
		let  delData:any = await {firstName :delivaryAddress.data.firstname,
			lastName :delivaryAddress.data.lastname,
			street :delivaryAddress.data.street,
			zip :delivaryAddress.data.zip,
			city :delivaryAddress.data.city,
			
		};
		if(delivaryAddress.data.length>0)
		{
			for(let i=0; i<delivaryAddress.data.contactFields.length;i++){
			
				delData[delivaryAddress.data.contactFields[i].code]=delivaryAddress.data.contactFields[i].value;
			
			}
		}
		
		await setDelivaryAddress(delData);
		let contactDtails:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonByID&IncludeDetails=true&ID=${resultTicket.data.contactPersonID}`);
		let  contData:any = await {firstName :contactDtails.data.firstname,
			lastName :contactDtails.data.lastname,
			street :contactDtails.data.street,
			zip :contactDtails.data.zip,
			city :contactDtails.data.city,
			
		};
		if(contactDtails.data.length>0)
		{
			for(let i=0; i<contactDtails.data.contactFields.length;i++){
				
				contData[contactDtails.data.contactFields[i].code]=contactDtails.data.contactFields[i].value;
			
			}
		}
		await setContactDetails(contData);
		await setUserName({ firstName: resultuser.data.firstname, lastName: resultuser.data.lastname});
		// GET ALL  PROJECTS
		let resultProject:any = await getData(`/memoria/getMethod?url=/Projects/getProjectsByAddressID&AddressID=${resultTicket.data.addressID}`);
		await setProjectList(resultProject.data.objects);
		// console.log(resultuser);
		console.log(projectList);
		await setLoading(false);
		
	}
	fetchData()
	},[props.match.params.id]);
	
	async function WorkDurationShow(id:any) {
		var estTime=0;
		var workTime=0;
		let subtaskRecords: any = await getData(`/memoria/getMethod?url=/TicketSteps/getTicketSteps&OrderBy=ID DESC&TicketID=${id}`);
		console.log("subtaskRecords",subtaskRecords.data);		
		if(subtaskRecords.data.length>0)
					{
						for (let k = 0; k < subtaskRecords.data.length; k++) {
							console.log("abcd",subtaskRecords.data[k].id,"=======",subtaskRecords.data[k].estimadedWorkDuration);
							console.log("abcd",subtaskRecords.data[k].id,"=======",subtaskRecords.data[k].workDuration);
							if(subtaskRecords.data[k].estimadedWorkDuration)
							{
								estTime = estTime+parseInt(subtaskRecords.data[k].estimadedWorkDuration);
							}
							if(subtaskRecords.data[k].estimadedWorkDuration)
							{
								workTime = workTime+parseInt(subtaskRecords.data[k].workDuration);
							}
						}
							
					}
					else{
						console.log("nodata");
					}
					await setEstData(estTime);
					await setWrkData(workTime);
					// console.log("999abcd",estTime);
					// console.log("999abcd",workTime);
		}
	async function tabChange(tnumber:any) {
		
	   await setshowtabicon(tnumber);
	  
	  }
	  const handledateChange: Function = (date:any) => { 
		setDldate({deadLineDate:date});
		allUpdate({target:{name:"deadLine",value:new Date(date).toISOString()}});
	};
	const handledateChange1: Function = (date:any) => { 
		setEdate({ edateshow:date,edatevalue:new Date(date).toISOString(),});
		 //console.log(edate);
		
	};
	const handledateChangeFdate: Function = (date:any) => { 
		setFdate({ fdateshow:date,fdatevalue:new Date(date).toISOString(),});
		 //console.log(edate);
		
	};
	async function productReload() {
		let resultTicketProduct:any = await getData(`/memoria/getMethod?url=/TicketPositions/getTicketPositions&TicketID=${currentTicket.id}`);
		await setTicketProduct(resultTicketProduct.data);
		// console.log("function check data");
	}
	//TOTAL PRICE
	async function totalPrice(event:any,id:any) {
		console.log("value-",event.target.value)
		console.log("id-",id)
		if(event.target.value>0)
		{
			
			let upDateData=[...ticketProductList];
			//await setTicketProduct([]);
			upDateData[id].quantity=parseInt(event.target.value);
			await setTicketProduct(upDateData);
			console.log("get valye-",ticketProductList[id],parseInt(event.target.value));
			console.log("final price-",ticketProductList);
		}
		
	}
	// PRODUCT QUANTITY UPDATE
	async function productUpdate(event:any,product:any) {
		if((event.target.value)<1)
		{
			props.dispatch({
				type: SET_MESSAGE,
				payload: { message: "Enter Valid Number", variant: 'Error' },
			  });
		}
		else if(event.target.value!="" && event.target.value!=null && event.target.value!=undefined)
		{
			let data:any ={};
			let data1:any =[];
			data =await product;
			data["quantity"]=parseInt(event.target.value);
			await data1.push(data);
			// console.log("ticket final data----data-------->",data);
			// console.log("ticket final data----data1-------->",data1);
			let result:any =await postData('/memoria/putMethod?url=/TicketPositions/setTicketPositions', data1);
            console.log("Ticket  post result is ",result);
            if(result.status === 200)
            {
				let resultTicketProduct:any = await getData(`/memoria/getMethod?url=/TicketPositions/getTicketPositions&TicketID=${data.ticketID}`);
				await setTicketProduct(resultTicketProduct.data);
				 await props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Quantity Updated", variant: 'success' },
				  });
				  
			}
			else
			{
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Internal Server Error", variant: 'Error' },
				  });
			}
		}
		else{
			props.dispatch({
				type: SET_MESSAGE,
				payload: { message: "Internal Server Error", variant: 'Error' },
			  });

		}
	}
	// All Field Update 
	  async function allUpdate(event:any) {
		if(event.target.value!="" && event.target.value!=null && event.target.value!=undefined)
		{
			let data:any ={};
			data =await currentTicket;
			data[event.target.name]=event.target.value;
			let fData:any = [{
			"id": data.id,
			"addressID": data.addressID,
			"contactPersonID": data.contactPersonID,
			"dateCreated": data.dateCreated,
			"deliveryAddressID": data.deliveryAddressID,
			//"followUp": data.followUp,
			//"followUpDate": data.dateCreated,
			"orderOrigin": data.orderOrigin,
			"productID": parseInt(data.productID),
			"status": data.status,
			"text": data.text,
			"title": data.title,
			"typeID": parseInt(data.typeID),
			"departmentID":parseInt(data.departmentID),
			"urgencyID": parseInt(data.urgencyID),
			"userAssignedID":parseInt(data.userAssignedID),
			"userCreatedID":data.userCreatedID,
			
			}];
			if(data.hasOwnProperty('roomID'))
			{
				fData[0]["roomID"]=parseInt(data.roomID)
			}
			if(data.hasOwnProperty('deadLine'))
			{
				fData[0]["deadLine"]=data.deadLine;
			}
			console.log("ticket final data----fdata-------->",fData);
			let result:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', fData);
            console.log("Ticket  post result is ",result);
            if(result.status === 200)
            {
				 props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Changes Updated", variant: 'success' },
				  });
				  
			}
			else
			{
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Internal Server Error", variant: 'Error' },
				  });
			}
		}
		else{
			props.dispatch({
				type: SET_MESSAGE,
				payload: { message: "Internal Server Error", variant: 'Error' },
			  });

		}
		
	}
	  console.log('setAufgabensetAufgaben==',aufgaben)
	 
	console.log("tdate--->",tdate);
	
	

	//console.log("setContactFieldsetContactField--->",contactField[0].value);
	// console.log("---------------------------------------final Data Check-----------------------------------------");
	const onSubmit = async (data: FormData) => {
		console.log('fdata data',data);
		// let h = data.etime.split(":")[0];
		// let m = data.etime.split(":")[1];
		// console.log('h',h);
		// console.log("m",m);
		data.estimadedWorkDuration=(data.estHours *3600)+(data.estMinutes*60);
		data.workDuration=(data.hours *3600)+(data.mins*60);
		let newDt=await new Date(edate.edateshow);
		newDt.setHours(parseInt(data.etime.split(":")[0]));
		newDt.setMinutes(parseInt(data.etime.split(":")[1]));
			newDt.setSeconds(0);
			console.log("fdata selectEdate++++++++++++",format(new Date(newDt), 'dd.MM.yyyy kk:mm'));
			// console.log("selectEdate++++++++++++",new Date(newDt).toISOString());
			//await delete data.etime;
			data["executionDate"]= await new Date(newDt).toISOString() ;
			console.log('aufcabenUpdate   data',data)
			let fdata:any  = [{ ...aufgaben, ...data}];
			console.log('fdata  *********',fdata)
		let aufcabenUpdate:any = await postData(`/memoria/putMethod?url=/TicketSteps/setTicketSteps`,[{ ...aufgaben, ...data}]);
		console.log('fdata aufcabenUpdate',aufcabenUpdate)
		
		await reset()
		await setTimeEntry(!timeEntry);
		await WorkDurationShow(aufgaben.ticketID);
		await props.dispatch({
			type: SET_MESSAGE,
			payload: {message:"Aufgaben updated successfully",variant:'success'},
		  });
		  
		
		
	}
	console.log("currentTicket",currentTicket);
	const downloadFile=async (fileId:any)=>{
		let fileDetails:any = await getData(`/memoria/getMethod?url=/Files/getFileByID&FileID=${fileId}`);
		fileDetails=fileDetails.data;
		//console.log('fileDetailsfileDetails',fileDetails)
		base64ToFile(fileDetails.data,fileDetails.filename);
	}
	

	const loadDate=(executionDate:any)=>
	{
		
		if(executionDate!="" && executionDate!=undefined && executionDate!=null)
		{
			setEdate({ edateshow:executionDate?parseISO(executionDate):new Date().toISOString(),edatevalue:executionDate?new Date(executionDate).toISOString():new Date().toISOString(),});
		}
	}
	const loadDate1=(followUpDate:any)=>
	{
		if(followUpDate!="" && followUpDate!=undefined && followUpDate!=null)
		{
			setFdate({ fdateshow:followUpDate?parseISO(followUpDate):new Date().toISOString(),fdatevalue:followUpDate?new Date(followUpDate).toISOString():new Date().toISOString(),});
		}
		
		
	}
	useEffect(() => {
		loadDate(aufgaben.executionDate)
		loadDate1(aufgaben.followUpDate)
	},[aufgaben])
	const handleFileRead=async (e:any)=>{
		
		const file = e.target.files[0]
		const base64:any = await convertBase64(file);
		let fileBase64= base64.toString().split('base64,');
		//console.log("handleFileRead1",fileBase64);
		//console.log("handleFileRead2",fileBase64[1]);
		
		if(fileBase64[1]){
		await setFilesLoad(true);
		let fileData:any ={
			filename:file.name,
			description_DE: file.name,
			data:fileBase64[1],
			dateCreated:new Date().toISOString(),
			dateLastModified:new Date().toISOString()
		}
		console.log("741",fileData);
		let result:any =await postData('/memoria/putMethod?url=/Files/setFiles', [fileData]);
		console.log('741fileS',result);
		if(typeof(result.data) === 'number')
		{
			fileData['id']=result.data;
			delete fileData['data'];
			let ticketData=currentTicket;
			ticketData.files.push(fileData);
			let tRes:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', [ticketData]);
			console.log('742',tRes)
			await setFilesList(ticketData.files);
			await setFilesLoad(false);
			
		}
		else{
			await setFilesLoad(false);
			props.dispatch({
				type: SET_MESSAGE,
				payload: { message: "Internal Server Error", variant: 'Error' },
			  });

		}
	}
		//console.log('base64',base64,fileBase64,e.target,e.target.files)
	}
	const showFileUpload= ()=>{
		console.log('showFileUpload')
		trigerFileUpload.current?.click()
	}
	const onSubmitRating = async (data: FormData2) => {
		console.log("status",data);
		let sData:any = {...data};
		sData["rating"] = await parseInt(data.rating)
		let tData:any ={...currentTicket, ...sData}
		console.log("rate",tData);
		
		let tRes:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', [tData]);
		console.log("insert status",tRes);
		if(tRes.status === 200)
            {
				clear();
				//  sigPad.clear();
				await settrimmedDataURL("");
				await setCurrentTicket(tData);
				await reset2();
				//await sigPad.clear();
				await setRatingEntry(!ratingEntry);
				
				await props.dispatch({
					type: SET_MESSAGE,
					payload: { message: " Updated Successfully", variant: 'success' },
				  });
			}
			else
			{
				props.dispatch({
					type: SET_MESSAGE,
					payload: { message: "Internal Server Error", variant: 'Error' },
				  });
			}
	}
	// console.log("---------------------------------------final Data Check-----------------------------------------");
	return(
            <div>
                 <Header />
                  	<div className="mainWrapper pl-0">
					  {loading? <div className="p-3">Loading...</div>:(
						<div className="mainWrapperBody">
						    <div className="ticketcolum left">
							    <div className="ticketcolumBackBtn p10">
							        	<Link to={`/tickets?page=${currentPage}`}>
						          	<i style={{position: 'relative', top: '0px', paddingRight: '10px'}} className="fa fa-arrow-left" /> Alle Tickets
						        	</Link>
						      	</div>
						      	<div className="TicketDetailLeftScroll">
						        	<div className="recentTicketList p10">
										{/* count==={alltickets.lenght}
										{alltickets.length>0?JSON.stringify(alltickets,null,2):''} */}
								        <ul>
										
											{/* .slice(0).reverse() */}
											{alltickets.length>0?(alltickets.sort((a:any, b:any) => parseInt(b.id) - parseInt(a.id))).map((el:any, key:any) =>  
											<li key={key} className={ticketCurrentId == el.id?"active":""}>
												<h5><Link to={`${el.id}?page=${currentPage}`}><i className={`md-icon  ${getTypeIcon(el.orderOrigin)}`} />{el.customer.fields[0].value!="" && el.customer.fields[0].value!=undefined && el.customer.fields[0].value!=null  ?el.customer.fields[0].value:''} {el.customer.fields[1].value!="" && el.customer.fields[1].value!=undefined && el.customer.fields[1].value!=null  ?el.customer.fields[1].value:''}</Link></h5>
												<div className="recentTicketSmList">
											<span className="recent-sm-list"><Link to={`${el.id}?page=${currentPage}`}>#{el.id} </Link></span>
												  <span className="dotSep" />
												  <span className="recent-sm-list"><Link to={`${el.id}?page=${currentPage}`}>{el.title}</Link></span>
												</div>
											  </li>
											):""}
											
								        </ul>
						        	</div>
						      	</div>
						    </div>
						    <div className="ticketcolum center">
						      	<div className="TicketcolumCenterScroll">
								  	<div className="form-page">
									  <form >
									    <div className="row">
									      <div className="col-md-12">
									        <div className="form-group">
									          <h2 className="mb-0 pb-1">{contactDetails.firstName!="" && contactDetails.firstName!=null && contactDetails.firstName!=undefined?contactDetails.firstName:""}&nbsp;
														{contactDetails.lastName!="" && contactDetails.lastName!=null && contactDetails.lastName!=undefined?contactDetails.lastName:""}</h2>
									          
									          <div className="contactInfoList mt-2">
						                        <ul>
												<li><i className="lnr lnr-phone" />{contactDetails.TEL!="" && contactDetails.TEL!=null && contactDetails.TEL!=undefined?contactDetails.TEL:""}</li>
													<li><i className="lnr lnr-phone-handset" />{contactDetails.MOBILE!="" && contactDetails.MOBILE!=null && contactDetails.MOBILE!=undefined?contactDetails.MOBILE:""}</li>
							                        <li><i className="lnr lnr-envelope" />{contactDetails["EMAIL"]!="" && contactDetails["EMAIL"]!=null && contactDetails["EMAIL"]!=undefined?contactDetails["EMAIL"]:""}</li>
						                          	<li><i className="lnr lnr-map-marker" />{contactDetails.street!="" && contactDetails.street!=null && contactDetails.street!=undefined?contactDetails.street:""}</li>
							                        <li><i className="lnr lnr-list" />{contactDetails.zip!="" && contactDetails.zip!=null && contactDetails.zip!=undefined?contactDetails.zip:""}  {contactDetails.city!="" && contactDetails.city!=null && contactDetails.city!=undefined?contactDetails.city:""}
														</li>
							                        	
						                        </ul>
						                      </div>

									        </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <h2 className="mt-2 mb-0 pb-0">Ausführungsort 
									          	<span className="float-right">
										          	{/* <Link to="" className="rndbtn mr-2" href="#" style={{position:'relative', top:'-12px'}}>
										          		<span style={{fontSize:'14px'}}>A</span>
										          	</Link> */}
										          	<Link to={`/AddAusfuhrungsort?vid=${currentTicket.addressID}`} className="rndbtn" href="#" style={{position:'relative', top:'-12px'}}>+</Link>
										        </span>
									          </h2>
									        </div>
									      </div>

									      <div className="col-md-12">
									        <div className="form-group">
									     		<div className="contactInfoList">
												 {currentTicket.hasOwnProperty('deliveryAddressID')?
							                        <ul>
														
							                        	<li><i className="lnr lnr-user" />{delivaryAddress.firstName!="" && delivaryAddress.firstName!=null && delivaryAddress.firstName!=undefined?delivaryAddress.firstNam:""}
														{delivaryAddress.lastName!="" && delivaryAddress.lastName!=null && delivaryAddress.lastName!=undefined?delivaryAddress.lastName:""}</li>
							                        	<li><i className="lnr lnr-map-marker" />{delivaryAddress.street!="" && delivaryAddress.street!=null && delivaryAddress.street!=undefined?delivaryAddress.street:""}</li>
							                        	<li><i className="lnr lnr-list" />{delivaryAddress.zip!="" && delivaryAddress.zip!=null && delivaryAddress.zip!=undefined?delivaryAddress.zip:""} {delivaryAddress.city!="" && delivaryAddress.city!=null && delivaryAddress.city!=undefined?delivaryAddress.city:""}</li>
							                        	<li><i className="lnr lnr-phone" />{delivaryAddress.TEL!="" && delivaryAddress.TEL!=null && delivaryAddress.TEL!=undefined?delivaryAddress.TEL:""}</li>
							                        	<li><i className="lnr lnr-phone-handset" />{delivaryAddress.MOBILE!="" && delivaryAddress.MOBILE!=null && delivaryAddress.MOBILE!=undefined?delivaryAddress.MOBILE:""}</li>
							                          	<li><i className="lnr lnr-envelope" />{delivaryAddress["EMAIL"]!="" && delivaryAddress["EMAIL"]!=null && delivaryAddress["EMAIL"]!=undefined?delivaryAddress["EMAIL"]:""}</li>
							                          	<li><i className="lnr lnr-earth" />{delivaryAddress.HP!="" && delivaryAddress.HP!=null && delivaryAddress.HP!=undefined?delivaryAddress.HP:""}</li>
							                        </ul>
													:
													<ul>
														{console.log("111 contact Details")}
							                        	<li><i className="lnr lnr-user" />{currentCustomer.Firstname!="" && currentCustomer.Firstname!=null && currentCustomer.Firstname!=undefined?currentCustomer.Firstname:""}
														{currentCustomer.lastName!="" && currentCustomer.Lastname!=null && currentCustomer.Lastname!=undefined?currentCustomer.Lastname:""}</li>
							                        	<li><i className="lnr lnr-map-marker" />{currentCustomer.Street!="" && currentCustomer.Street!=null && currentCustomer.Street!=undefined?currentCustomer.Street:""}</li>
							                        	<li><i className="lnr lnr-list" />{currentCustomer.ZIP!="" && currentCustomer.ZIP!=null && currentCustomer.ZIP!=undefined?currentCustomer.ZIP:""} {currentCustomer.City!="" && currentCustomer.City!=null && currentCustomer.City!=undefined?currentCustomer.City:""}
														</li>
							                        	<li><i className="lnr lnr-phone" />{currentCustomer.TEL!="" && currentCustomer.TEL!=null && currentCustomer.TEL!=undefined?currentCustomer.TEL:""}</li>
							                        	<li><i className="lnr lnr-phone-handset" />{currentCustomer.MOBILE!="" && currentCustomer.MOBILE!=null && currentCustomer.MOBILE!=undefined?currentCustomer.MOBILE:""}</li>
							                          	<li><i className="lnr lnr-envelope" />{currentCustomer["EMAIL"]!="" && currentCustomer["EMAIL"]!=null && currentCustomer["EMAIL"]!=undefined?currentCustomer["EMAIL"]:""}</li>
							                          	<li><i className="lnr lnr-earth" />{currentCustomer.HP!="" && currentCustomer.HP!=null && currentCustomer.HP!=undefined?currentCustomer.HP:""}</li>
							                        </ul>
												}
						                     	</div>
						                 	</div>
						                  </div>
						                  <div className="col-md-12">
									        <div className="form-group">
									          <h2 className="mt-2 mb-0 pb-0">Hauptort</h2>
									        </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									     		<div className="contactInfoList">
							                        <ul>
							                        	<li><i className="lnr lnr-user" />{currentCustomer.Firstname!="" && currentCustomer.Firstname!=null && currentCustomer.Firstname!=undefined?currentCustomer.Firstname:""}
														{currentCustomer.lastName!="" && currentCustomer.Lastname!=null && currentCustomer.Lastname!=undefined?currentCustomer.Lastname:""}</li>
							                        	<li><i className="lnr lnr-map-marker" />{currentCustomer.Street!="" && currentCustomer.Street!=null && currentCustomer.Street!=undefined?currentCustomer.Street:""}</li>
							                        	<li><i className="lnr lnr-list" />{currentCustomer.ZIP!="" && currentCustomer.ZIP!=null && currentCustomer.ZIP!=undefined?currentCustomer.ZIP:""} {currentCustomer.City!="" && currentCustomer.City!=null && currentCustomer.City!=undefined?currentCustomer.City:""}
														</li>
							                        	<li><i className="lnr lnr-phone" />{currentCustomer.TEL!="" && currentCustomer.TEL!=null && currentCustomer.TEL!=undefined?currentCustomer.TEL:""}</li>
							                        	<li><i className="lnr lnr-phone-handset" />{currentCustomer.MOBILE!="" && currentCustomer.MOBILE!=null && currentCustomer.MOBILE!=undefined?currentCustomer.MOBILE:""}</li>
							                          	<li><i className="lnr lnr-envelope" />{currentCustomer["EMAIL"]!="" && currentCustomer["EMAIL"]!=null && currentCustomer["EMAIL"]!=undefined?currentCustomer["EMAIL"]:""}</li>
							                          	<li><i className="lnr lnr-earth" />{currentCustomer.HP!="" && currentCustomer.HP!=null && currentCustomer.HP!=undefined?currentCustomer.HP:""}</li>
							                        </ul>
						                     	</div>
						                 	</div>
						                  </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Ticket Besitzer </label>
									          <div className="profile-info adminBenutzerOpen">
									            <h6 className="primary-val"><span className="ph_container">{userName.firstName?.slice(0,1).toUpperCase()} {userName.lastName?.slice(0,1).toUpperCase()}</span> {userName.firstName} {userName.lastName}</h6>
									          </div>
									        </div>
									      </div>
										  <div className="col-md-12">
									        <div className="form-group">
									          <label>Ticket Besitzer</label>
											   <select  className="form-control custom-select" name="userAssignedID" onChange={(event)=>allUpdate(event)} > 
											  {/* {currentTicket.status === "Closed" || currentTicket.status === "Charged"?"readOnly":''} */}
											  {userList.map((userList: any, key: any) =>
														<option value={userList.id} key={key}  selected={currentTicket.userAssignedID === userList.id ? true : false}>
															{userList.firstname != "" && userList.firstname != "" && userList.firstname != "" ? userList.firstname : ''}
															{userList.lastname != "" && userList.lastname != "" && userList.lastname != "" ? userList.lastname : ''}</option>
													)}
				                              </select>
											</div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Status</label>
											  {currentTicket.status != "Closed" && currentTicket.status != "Charged" ?
											  <select  className="form-control custom-select" name="status" onChange={(event)=>allUpdate(event)} >
											  <option value="Open"  selected={currentTicket.status === "Open" ? true : false} >Offen</option>
					                                  <option value="In_Progress"  selected={currentTicket.status === "In_Progress" ? true : false}>In Arbeit</option>
					                                  <option value="Closed"  selected={currentTicket.status === "Closed"  ? true : false}>Geschlossen</option>
					                                  <option value="Charged"  selected={currentTicket.status === "Charged" ? true : false}>Verrechnet</option> 
											  </select>
											 
											  : <p className="form-control status-form-control"> {currentTicket.status === "Open" ? "Offen" :currentTicket.status === "In_Progress" ? "In Arbeit" :currentTicket.status === "Closed"  ? "Geschlossen" :currentTicket.status === "Charged" ? "Verrechnet":null} </p>
											}
											</div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Fälligkeitsdatum</label>
									        	<DatePicker  locale={de} selected={dldate.deadLineDate} dateFormat="dd.MM.yyyy" className="form-control" onChange={(date)=>handledateChange(date)} />
											</div>
									      </div>
									    </div>
									    <div className="row">
									      <div className="col-md-12">
									        <div className="form-group">
									          <h2 className="mt-2">Ticket Information</h2>
									        </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Kanal</label>
											  <select  className="form-control custom-select" name="orderOrigin" onChange={(event)=>allUpdate(event)}> 
											   {channel.map((channel:any, key:any) => 
													<option value={channel.name_DE} key={key} selected={currentTicket.orderOrigin === channel.name_DE ? true : false}> {channel.name_DE}</option>
												)}
				                              </select>
											</div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Abteilung</label>
											  <select  className="form-control custom-select" name="departmentID" onChange={(event)=>allUpdate(event)}>
											  {dep.map((dep:any, key:any) => 
													<option value={dep.id} key={key} selected={currentTicket.departmentID === dep.id ? true : false}> {dep.name_DE}</option>
												)}
				                              </select>
											  
											</div>
									      </div>
										  <div className="col-md-12">
									        <div className="form-group">
									          <label>Raum</label>
									          <select  className="form-control custom-select" name="roomID" onChange={(event)=>allUpdate(event)}>
											  	 {rooms.map((rooms:any, key:any) => 
													<option value={rooms.id} key={key} selected={currentTicket.roomID === rooms.id ? true : false} > {rooms.name_DE}</option>
												)}
				                                </select>
											</div>
									      </div>
									    </div>
									    <div className="row">
									      <div className="col-md-12">
									        <div className="form-group">
									          <h2 className="mt-2">ZusätzlicheInformationen</h2>
									        </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Priorität</label>
									          <select  className="form-control custom-select" name="urgencyID" onChange={(event)=>allUpdate(event)}>
											  	 {turgency.map((turgency:any, key:any) => 
													<option value={turgency.id} key={key} selected={currentTicket.urgencyID === turgency.id ? true : false}> {turgency.name_DE}</option>
												)}
				                                </select>
									         </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Produkt</label>
									          <select  className="form-control custom-select" name="productID" onChange={(event)=>allUpdate(event)}>
											  	 {product.map((product:any, key:any) => 
													<option value={product.id} key={key} selected={currentTicket.productID === product.id ? true : false}> {product.name_DE}</option>
												)}
				                                </select>
									        </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Projekt</label>
									          <input type="text" className="form-control" placeholder=""  readOnly/>
									        </div>
									      </div>
									      <div className="col-md-12">
									        <div className="form-group">
									          <label>Erstellungsdatum</label>
									          <input type="text" className="form-control" placeholder="" defaultValue={currentTicket.dateCreated?format(new Date(currentTicket.dateCreated), 'dd.MM.yyyy'):''} />
									        </div>
									      </div>
									    </div>
									  </form>
									</div>
						      </div>
						    </div>
						    <div className="ticketcolum right">
						      <div className="row">
						        <div className="col-lg-12 col-md-12">
						          <div className="media p20">
						            <div className="mediaImg"><i className={`${getTypeIcon(currentTicket.orderOrigin)}`} /> </div>
						            <div className="media-body">
									 <h5 className="mt-2 hint-title">#{currentTicket.id} {currentTicket.title} </h5> 
						              <div className="slideFormAppHeader">
						                <span><i className="fa fa-clock-o" />{currentTicket.dateCreated?format(new Date(currentTicket.dateCreated), 'dd.MM.yyyy'):''}</span>
										{/*<Link to="#"><i className="fa fa-play" /> 00:00:02 <i className="bl fa fa-refresh" /></Link>*/}
						                <span> Geschätztezeit: {secondsToTime(estData).h}:{secondsToTime(estData).m}</span>
										<span> Arbeitszeit: {secondsToTime(wrkData).h}:{secondsToTime(wrkData).m}</span>
						              </div>
						            </div>
						          </div>
						          <div className="ticket_actions active">
						            <ul>
						              {/* <li>
						                <span className="dropdown">
						                   <Link to="#" className="replyTrigger comd_txt active">
						                    <i className="r90 fa fa-reply-all" data-toggle="tooltip" data-placement="left" title="Alle antworten" />
						                  </Link>
						                </span>
						              </li> */}
									 {/*} {currentTicket.status === "Closed" || currentTicket.status === "Charged"?null:(*/}

									  {currentTicket.text=="" && currentTicket.status != "Closed" && currentTicket.status != "Charged" ?
						              <li style={{display: showtabicon==1 ? 'block' : 'none' }}>
									  <a href="javascript:void(0)" onClick={() => {
													setShowComments(!showComments);
                        					}}className={`comd_txt ${showComments?'':'active'}`}>
						                  <i className="fa fa-comment-o" />
						                </a>
						              </li>:null}
									  {currentTicket.status != "Closed" && currentTicket.status != "Charged" ?
						              <li style={{display: showtabicon==2 ? 'block' : 'none' }}>
										 <a href="javascript:void(0)" onClick={() => {
													setSubTask(!subTask);
                        					}}className={`comd_txt ${subTask?'':'active'}`}>
						                  <i className="fa fa-address-card-o" />
						                </a>
						              </li>:null}
									  {currentTicket.status != "Closed" && currentTicket.status != "Charged" ?	
									  <li style={{display: showtabicon==4 ? 'block' : 'none' }}>
									  <a href="javascript:void(0)" onClick={() => {
													setShowProduct(!showProduct);
                        					}}className="comd_txt">
						                  <i className="fa fa-plus" />
						                </a>
						              </li>:null}
									  {currentTicket.status != "Closed" && currentTicket.status != "Charged" ?
						              <li style={{display: showtabicon==3 ? 'block' : 'none' }} >
						                 <a href="javascript:void(0)"  onClick={()=>{showFileUpload()}} className="comd_txt">
						                  <i className="fa fa-paperclip" />
						                </a>
						              </li>:null}
			                      	 

						            </ul>
						          </div>
						        </div>
						      </div>
						      <div className="row">
						        <div className="col-lg-12 col-md-12">
						        	<Tabs>
							          	<TabList className="TicketInfoTabs nav-tabs">
								            <Tab onClick={() => {tabChange('1')}} >KONVERSATION</Tab>
								            <Tab onClick={() => {tabChange('2')}} >Aufgaben</Tab>
											<Tab onClick={() => {tabChange('4')}}>Produkte</Tab>
								            <Tab onClick={() => {tabChange('3')}}>Anhänge</Tab>
								            
							          	</TabList>
										<TabPanel>
											 <CommentDetails id={ticketCurrentId} showComments={showComments} setShowComments={setShowComments} setRatingEntry={setRatingEntry} ratingEntry={ratingEntry} ticketStatusChanges={ticketStatusChanges}/> 
										</TabPanel>
										<TabPanel>
											 <SubTask  key={ticketCurrentId} cid={ticketCurrentId} setAufgaben={setAufgaben} subTask={subTask} setSubTask={setSubTask}  timeEntry={timeEntry} setTimeEntry={setTimeEntry}/> 
										</TabPanel>
										<TabPanel>
							              <div className="ticketcolum_right_scroll">
							                <div className="row">
							                  	<div className="col-lg-12">
							                      	<div className="row no-gutters">
														<div className="col-lg-12 col-md-12">
															<div className="form-page product-form p20">
																<div className="product-table">
														            <ul>
														              	<li>
															                <table className="table m-0">
															                	<thead>
															                		<tr>
																                      <th style={{width:'5%'}} className="text-right">Nummer</th>
																                      <th style={{width:'10%', paddingLeft:'50px'}} className="text-left">Bezeichnung</th>
																                      <th style={{width:'10%'}} className="text-right">Menge</th>
																                      <th style={{width:'11%'}} className="text-right">Stückpreis</th>
																                      <th style={{width:'9%'}} className="text-right">Gesamtpreis </th>
																                      <th style={{width:'9%'}} className="text-right">Rabatt</th>
																                      <th style={{width:'9%'}} className="text-right">Datum</th>
																					  {/* <th style={{width:'9%'}} className="text-center">Aktion</th> */}
																                  	</tr>
															                	</thead>
															                  	<tbody>
																					 
																				{
																					ticketProductList.length>0 && ticketProductList.map((product:any,key:any)=>
																						<React.Fragment key={`${key}`}>
																							<tr>
																								<td width="5%" className="text-right">
																									#{product.id}
																								</td>
																								<td width="15%" className="text-left" style={{paddingLeft:'50px'}}>
																									{product.productName}
																								</td>
																								<td width="5%" className="text-right productEditInput">
																								{currentTicket.status != "Closed" && currentTicket.status != "Charged" ?
																									// <input type="number"  defaultValue={product.quantity} min="1" name="quantity"  onChange={(event:any)=>totalPrice(event,key)}  onBlur={(event)=>productUpdate(event,product)} />
																									<select  className="custom-select" name="quantity" onChange={(event:any)=>totalPrice(event,key)} onBlur={(event)=>productUpdate(event,product)}>
																									<option value="0" key={key}  >0</option>
																									{getQuantityNumberList().map((quantityShow: any, key: any) =>
																													<option value={quantityShow} key={key}  selected={product.quantity === quantityShow ? true : false}>{quantityShow}</option>
																												)}
																										</select>
																								: product.quantity
																								}
																								</td>
																								<td width="11%" className="text-right productEditInput">
																									{/* <input type="text"  defaultValue={priceFormat(product.unitPrice)}/> */}
																									{priceFormat(product.unitPrice)}
																								</td>
																								<td width="9%" className="text-right">
																									{/* {product.unitPrice*product.quantity} */}
																									{priceFormat((product.unitPrice*product.quantity))}
																								</td>
																								<td width="9%" className="text-right productEditInput">
																									{/* <input type="text"  defaultValue={product.discountPercent+'%'}/> */}
																									{product.discountPercent+'%'}
																								</td>
																								<td width="9%" className="text-right">
																								{format(new Date(product.date), 'dd.MM.yyyy')}
																								</td>
																								{/* <td width="9%" className="text-center">
																								{currentTicket.status != "Closed" && currentTicket.status != "Charged" ?
																									<a href="javascript:void(0);" className="btn-theme btn-sm mr-2" >
																										<i className="fa fa-trash"></i>
																									</a>:null}
																								</td> */}
																							</tr>
																						</React.Fragment>
																				 	)
																				}
																                    
															                  	</tbody>
															                </table>
														              	</li>
														            </ul>
														        </div>
															</div>
														</div>
													</div>
							                  	</div>
							                </div>
							              </div>
							            </TabPanel>

							            <TabPanel>
										
							              <div className="ticketcolum_right_scroll">
							                <div className="row">
							                  <div className="col-lg-12">
											 
							                  	<div className="row no-gutters">
													<div className="col-lg-12 col-md-12">
														<div className="form-page product-form p20">
														{filesLoad?<div className="mt-2 mb-2">Loading...</div>:null}
														<input          id="originalFileName"     style={{display: 'none'}}           type="file"              
                                            name="originalFileName"   ref={trigerFileUpload}    onChange={(e) => handleFileRead(e)}                            
              />
															<div className="product-table">
													            <ul>
													              	<li>
																		 
													              		<div className="table-responsive">
															                <table className="table m-0">
															                	<thead>
															                		<tr>
																                      <th style={{width:'5%'}} className="text-left">Icon/Thumbnail </th>
																                      <th style={{width:'9%'}} className="text-left">Name</th>
																                      <th style={{width:'9%'}} className="text-right">Erstellungsdatum</th>
																                      <th style={{width:'14%'}} className="text-center">Aktion</th>
																                  	</tr>
															                	</thead>
															                  	<tbody>
																				  {filesList.length>0?filesList.map((el:any, key:any) =>( 
																					  <tr key={key}>
																                      <td width="5%" className="text-left">
																                        <div className="docImg">
																						{/* {let filetype ={el.filename.substring(el.filename.lastIndexOf('.')+1)}} */}
																						
																						{/* <img src="/assets/images/word.png" alt="" /> */}
																					
                                                            { ['png','jpg','jepg','gif','eps','svg','tif','tiff'].indexOf(getType(el.filename))>-1 && <img src="/assets/images/image.png" alt="" /> }
                                                            { getType(el.filename) === 'pdf' && <img src="/assets/images/pdf.png" alt="" /> }
                                                            { getType(el.filename) === 'xlsx' && <img src="/assets/images/excel.png" alt="" /> }
                                                            { getType(el.filename) === 'docx' && <img src="/assets/images/word.png" alt="" /> }
                                                          
																                        </div>
																                      </td>
																                      <td width="9%" className="text-left">
																                        {el.description_DE}
																                      </td>
																                      <td width="9%" className="text-right">
																                       {el.dateCreated?format(new Date(el.dateCreated),'dd.MM.yyyy'):''}
																                      </td>
																                      <td width="14%" className="text-center">
																					 
																                        {/* <button onClick={()=>viewFile(el.id)} className="btn-theme-white btn-sm mr-2">
																                        	<i className="lnr lnr-eye" />
																                        </button> */}
																                        <button onClick={()=>downloadFile(el.id)} className="btn-theme-white btn-sm">
																                        	<i className="lnr lnr-download" />
																                    	</button>
																                      </td>
																                    </tr>)):""}
																                    
																                    
															                  	</tbody>
															                </table>
															            </div>
													              	</li>
													            </ul>
													        </div>
														</div>
													</div>
												</div>

							                    { /*<div className="no-feeds">
							                      <h1>Keinanhänge für Ticket!</h1>
							                      <p>anhänge neu hinzufügen – Klick auf  <span className="link-blue mr-3 ml-3 rndbtn">+</span> Symbol</p>
							                    </div>*/ }
							                  </div>
							                </div>
							              </div>
							            </TabPanel>

							           
							        </Tabs>
						        </div>
						      </div>
						    </div>
						</div>
					  )}
					  </div>

            		<div id="Eintrag" className="slide-form">
					  	<div id="EintragClose" className="slideFormClose">×</div>
					  	<div className="notifoHeader">Eintrag in die Zeitplanung hinzufügen</div>
				    	<div className="form-page form-popup-scroll">
				    		
							<form>
							    <div className="row">
								    <div className="col-md-12">
								        <div className="form-group">
								        	<label>Agent</label>
								           	<select  className="form-control chosen-select">
										  		<option  value={1}>Anita Sivakumar</option>
			                                </select>
								        </div>
								   	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								        	<label>Ticket-Berechnungtyp</label>
								           	<select  className="form-control chosen-select">
										  		<option  value={1}>Customer Service</option>
										  		<option  value={1}>Product Consultation</option>
										  		<option  value={1}>Service and Maintenance</option>
										  		<option  value={1}>Upgrade Request</option>
			                                </select>
								        </div>
							      	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								        	<label>Ausführungsdatum</label>
								           	<input type="text" className="form-control" placeholder="12.01.2021 07:13 AM" />
								        </div>
							      	</div>
							      	<div className="col-md-12">
							      		<label>Dauer</label>
							      		<div className="row">
							      			<div className="col-md-4">
							      				<div className="form-group">
										        	<label>&nbsp;</label>
										           	<input type="text" className="form-control" placeholder="Stunden" />
										        </div>
							      			</div>
							      			<div className="col-md-4">
							      				<div className="form-group">
										        	<label>&nbsp;</label>
										           	<input type="text" className="form-control" placeholder="Minuten" />
										        </div>
							      			</div>
							      			<div className="col-md-4">
							      				<div className="form-group">
										        	<label>&nbsp;</label>
										           	<input type="text" className="form-control" placeholder="Seconds" />
										        </div>
							      			</div>
							      		</div>
							      	</div>
							     	<div className="col-md-12">
								        <div className="form-group">
								          	<label>Beschreibung</label>
								          	<input type="text" className="form-control" placeholder="" />
								        </div>
							      	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								          	<label>Abrechnungstyp</label>
								          	<div className="row">
								      			<div className="col-md-6">
								      				<div className="form-group">
											        	<label className="ix-checkbox-label"><input type="radio" className="ix-checkbox" name="Abrechnungstyp" /><mark className="mr-1" /> Abrechnung</label>
											        </div>
								      			</div>
								      			<div className="col-md-6">
								      				<div className="form-group">
											        	<label className="ix-checkbox-label"><input type="radio" className="ix-checkbox" name="Abrechnungstyp" /><mark className="mr-1" /> Keine Berechnung</label>
											        </div>
								      			</div>
								      		</div>
								        </div>
							      	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								          	<label>Agentenkosten pro Stunde</label>
								          	<input type="text" className="form-control" placeholder="" />
								        </div>
							      	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								          	<label>Zusatzkosten</label>
								          	<input type="text" className="form-control" placeholder="" />
								        </div>
							      	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								          	<label>Gesamtkosten</label>
								          	<input type="text" className="form-control" placeholder="" />
								        </div>
							      	</div>
							      	<div className="col-md-12">
								        <div className="form-group">
								          	<button className="btn-theme btn-md mr-2" type="submit">Absenden</button>
								          	<button className="btn-theme-white btn-md">Abbrechen</button>
								        </div>
							      	</div>
							    </div>
							</form>
						</div>
					</div>

					<div id="ZeitEintrag" className={`slide-form ${timeEntry?'':'active'}`}>
						<a href="javascript:void(0)" onClick={() => {
							setTimeEntry(!timeEntry);}}><div className="slideFormClose">×</div>
							</a>
					  	<div className="notifoHeader">Zeit Eintrag hinzufügen</div>
				    	<div className="form-page form-popup-scroll">
							<form onSubmit={handleSubmit(onSubmit)}>
							
							    <div className="row">
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  <label>AufgabenID</label>
										  <input type="text" name="id"  ref={register({    valueAsNumber: true,   })} readOnly defaultValue={aufgaben.id} className="form-control text-right" />
										  <input type="hidden" name="ticketID"  ref={register({    valueAsNumber: true,   })} defaultValue={aufgaben.ticketID}/>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  <label>Status</label>
										  <select  ref={register()} name="status" className="form-control custom-select" defaultValue={aufgaben.status}>
											<option  value="Open">Offen</option>
											<option value="In_Progress">In Arbeit</option>
											<option value="Closed">Geschlossen</option>
											<option value="Charged">Verrechnet</option>
										  </select>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  <label>Nachfassungsdatum</label>
										  <DatePicker locale={de} selected={fdate.fdateshow}  dateFormat="dd.MM.yyyy" className="form-control" onChange={(date)=>handledateChangeFdate(date)} />
										<input ref={register()} name="followUpDate" type="hidden" className="form-control" defaultValue={fdate.fdatevalue} /> 
										 
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  <label>Benutzer</label>
										  <select  className="form-control custom-select" name="userID" ref={register({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })}>
													{userList.map((userList: any, key: any) =>
														<option value={userList.id} key={key}  selected={aufgaben.userID === userList.id ? true : false}>
															{userList.firstname != "" && userList.firstname != "" && userList.firstname != "" ? userList.firstname : ''}
															{userList.lastname != "" && userList.lastname != "" && userList.lastname != "" ? userList.lastname : ''}</option>
													)}
					                                  
					                                </select>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 ">
										<div className="form-group">
										  <label>Ausführungsdatum</label>
										  <DatePicker locale={de} selected={edate.edateshow}  dateFormat="dd.MM.yyyy" className="form-control" onChange={(date)=>handledateChange1(date)} />
												
										  <input ref={register()} name="executionDate" type="hidden" className="form-control" defaultValue={edate.edatevalue} /> 
										</div>
									</div>
									<div className="col-lg-6 col-md-6 ">
										<div className="form-group">
										<label>Ausführunszeit</label>
                                        <select className="form-control custom-select"  name="etime"  ref={register()} >
										{getTimeShow().map((timeshow: any, key: any) =>
														<option value={timeshow} key={key}   selected={(aufgaben.executionDate?format(new Date(aufgaben.executionDate), 'kk:mm'):"00:00") === timeshow ? true : false} >{timeshow}</option>
													)}
                                        </select>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  	<label>Geschätztezeit</label>
										  	<div className="row">
												  
											  	<div className="col-lg-6 col-md-6 ">
											  		<select className="form-control custom-select" name="estHours"  ref={register({    valueAsNumber: true,   })} >
													  {getHoursTime().map((gtimeShow: any, key: any) =>
														<option value={gtimeShow} key={key} selected={(gtimeShow == (aufgaben.estimadedWorkDuration && aufgaben.estimadedWorkDuration>0?(secondsToTime(aufgaben.estimadedWorkDuration).h):"00")) ? true : false}>{gtimeShow}</option>
														)}
													</select>
												  </div>
											  	<div className="col-lg-6 col-md-6 ">
													<select className="form-control custom-select" name="estMinutes"  ref={register({    valueAsNumber: true,   })} >
														{getMinTime().map((mintimeShow: any, key: any) =>
														<option value={mintimeShow} key={key} selected={(mintimeShow == (aufgaben.estimadedWorkDuration && aufgaben.estimadedWorkDuration>0?(secondsToTime(aufgaben.estimadedWorkDuration).m):"00")) ? true : false}>{mintimeShow}</option>
														)}
													</select>
												  </div>
										  	</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  	<label>Arbeitszeit</label>
										  	<div className="row">
												  
											  	<div className="col-lg-6 col-md-6 ">
											  		{/* <input ref={register({    valueAsNumber: true,   })} name="hours"  type="text" className="form-control text-right" defaultValue={aufgaben.workDuration>0?Math.floor(aufgaben.workDuration / 3600):0}/> */}
											  		<select className="form-control custom-select"  name="hours"  ref={register({    valueAsNumber: true,   })} >
														{getHoursTime().map((gtimeShow: any, key: any) =>
														<option value={gtimeShow} key={key}   selected={(gtimeShow == (aufgaben.workDuration && aufgaben.workDuration>0?(secondsToTime(aufgaben.workDuration).h):"00")) ? true : false} >{gtimeShow}</option>
														)}
													</select>
												  </div>
											  	<div className="col-lg-6 col-md-6 ">
											  		{/* <input  ref={register({    valueAsNumber: true,   })} name="mins"  type="text" className="form-control text-right" defaultValue={0} /> */}
													<select className="form-control custom-select"  name="mins"  ref={register({    valueAsNumber: true,   })} >
														{getMinTime().map((mintimeShow: any, key: any) =>
														<option value={mintimeShow} key={key}   selected={(mintimeShow == (aufgaben.workDuration && aufgaben.workDuration>0?(secondsToTime(aufgaben.workDuration).h):"00")) ? true : false}>{mintimeShow}</option>
														)}
													</select>
												  </div>
											  	
										  	</div>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
										  <label>Arbeit</label>
										  <textarea ref={register()} name="text"  defaultValue={aufgaben.text} className="form-control textAreaHeight"></textarea>
										  {/*<input  ref={register()} name="text"  type="text" defaultValue={aufgaben.text} className="form-control" />*/}
										</div>
									</div>
									<div className="col-lg-6 col-md-6 ">
										<div className="form-group">
										  <label>Kulanz in %</label>
										  <input readOnly ref={register({    valueAsNumber: true,   })} name="goodwill"  type="text" defaultValue={aufgaben.goodwill} className="form-control text-right" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 ">
										<div className="form-group">
										  <label>Pikettzuschlag in %</label>
										  <input readOnly ref={register({    valueAsNumber: true,   })} name="surcharge"  type="text" defaultValue={aufgaben.surcharge} className="form-control text-right" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 ">
										<div className="form-group">
											<button className="btn-theme btn-md mr-2" type="submit">Speichern</button>
											<a href="javascript:void(0)" onClick={() => {
										setTimeEntry(!timeEntry);}}
										className="btn-theme-white btn-md">Abbrechen</a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					{showProduct==false?
					(<div>
					<AddProduct tid={ticketCurrentId} setShowProduct={setShowProduct} showProduct={showProduct} productReload={productReload}/>	
					</div>)
					:null}
				<div id="Bewertungen"  className={`slide-form ${ratingEntry?'':'active'}`}>
					<a href="javascript:void(0)" onClick={() => {
						setRatingEntry(!ratingEntry); clear(); reset2(); setSelectRate(5);}}><div className="slideFormClose">×</div></a>
					  	<div className="notifoHeader">Bewertung</div>
				    	<div className="form-page form-popup-scroll">
							<form onSubmit={handleSubmit2(onSubmitRating)}>
								<div className="BewertungenContent">
									{/* <p>Sehr geehrte {user.user.firstname?user.user.firstname:null } {user.user.lastname?user.user.lastname:null }</p>
									<p>vielen Dank für die Nutzung des Service von [$Companyname]! Wir freuen uns über jeden Kunden, dem wir weiterhelfen können.</p>
									<p>Lassen Sie uns wissen, wie zufrieden Sie mit unseren Mitarbeitern waren. Dafür genügt ein Klick!</p> */}
								</div>
								<div className="BewertungenRatingIcons">
									<ul>
									<li className={`${selectRate===0?'active':''}`}>
											<label className="ix-checkbox-label">
												<input type="radio" name="rating" defaultValue={0} className="rating-checkbox" ref={register2({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })} onClick={() => setSelectRate(0)} /><mark />
											</label>
											<span className="selectedTick">
												<img src="/assets/images/selectedTick.png" alt="" />
											</span>
											<img className="selectedBgImg" src="/assets/images/rating-0.png" alt="" />
										</li>
										<li className={`${selectRate===1?'active':''}`}>
											<label className="ix-checkbox-label">
												<input type="radio" name="rating" defaultValue={1} className="rating-checkbox" ref={register2({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })} onClick={() => setSelectRate(1)}/><mark />
											</label>
											<span className="selectedTick">
												<img src="/assets/images/selectedTick.png" alt="" />
											</span>
											<img className="selectedBgImg" src="/assets/images/rating-1.png" alt="" />
										</li>
										<li className={`${selectRate===2?'active':''}`}>
											<label className="ix-checkbox-label">
												<input type="radio" name="rating" defaultValue={2} className="rating-checkbox" ref={register2({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })} onClick={() => setSelectRate(2)}/><mark />
											</label>
											<span className="selectedTick">
												<img src="/assets/images/selectedTick.png" alt="" />
											</span>
											<img className="selectedBgImg" src="/assets/images/rating-2.png" alt="" />
										</li>
										<li className={`${selectRate===3?'active':''}`}>
											<label className="ix-checkbox-label">
												<input type="radio" name="rating" defaultValue={3} className="rating-checkbox" ref={register2({ valueAsNumber: true, required: "Diese Eingabe ist erforderlich." })} onClick={() => setSelectRate(3)}/><mark />
											</label>
											<span className="selectedTick">
												<img src="/assets/images/selectedTick.png" alt="" />
											</span>
											<img className="selectedBgImg" src="/assets/images/rating-3.png" alt="" />
										</li>
									</ul>
									<ErrorMessage
									errors={errors2}
									name="rating"
									render={({ messages }) => {
										return messages
											? Object.entries(messages).map(([type, message]) => (
												<span className="errorMsg" key={type}>{message}</span>
											))
											: null;
									}}
									/>
								</div>
								<div>
									<div className="form-group">
										<p>Unterschrift <a href="javascript:void(0);" className="btn-theme btn-sm pull-right" onClick={clear}>Löschen</a></p>
									</div>
									<div className="BewertungenSign">
										<SignatureCanvas penColor='black'
										canvasProps={{width: 875, height: 150, className: 'sigCanvas'}} 
										ref={(ref:any) => { setSigPad(ref) }} 
										onEnd={() =>{
											let str = sigPad.getCanvas().toDataURL('image/png');
											if(str!==undefined && str!==null && str!=="" )
											{
												let res = str.split(",");
												if(canvasImage.whitePage!==res[1])
												{settrimmedDataURL(res[1]);}
												else{settrimmedDataURL("")}
											}
											else{settrimmedDataURL("")}
											}}
										/>
									</div>
									{/* <div>
										<img src={"data:image/gif;base64,"+trimmedDataURL} />
									</div> */}
									<div className="form-group">
										{/*<a href="javascript:void(0);" className="btn-theme btn-sm mr-2" onClick={clear}>klar</a>*/}
										{/* <a href="javascript:void(0);" className="btn-theme btn-sm" onClick={trim}>Bestätigen</a> */}
									</div>
									<div className="form-group">
											<input type="hidden" name="status" defaultValue="Closed"  ref={register2({ required: "Diese Eingabe ist erforderlich." })}/>
											<input type="hidden" name="signature" defaultValue={trimmedDataURL} className="form-control" ref={register2({ required: "Diese Eingabe ist erforderlich." })}/>
											<ErrorMessage
												errors={errors2}
												name="signature"
												render={({ messages }) => {
													return messages
														? Object.entries(messages).map(([type, message]) => (
															<span className="errorMsg" key={type}>{message}</span>
														))
														: null;
												}}
											/>
									</div>
									
							</div>
								<div className="BewertungenName">
									<div className="form-group mb-3">
										<label>Vorname Nachname | Blockschrift</label>
										<input type="text" name="firstnameLastname" className="form-control"  ref={register2({ required: "Diese Eingabe ist erforderlich." })}/>
									</div>
									<ErrorMessage
									errors={errors2}
									name="firstnameLastname"
									render={({ messages }) => {
										return messages
											? Object.entries(messages).map(([type, message]) => (
												<span className="errorMsg" key={type}>{message}</span>
											))
											: null;
									}}
									/>
								</div>
								<div className="ticketcolum_right_fxd_btns p-2">
							      <div className="row">
							        <div className="col-lg-12 text-right pr-4">
							          <button  className="btn-md btn-theme" type="submit">
							            Absenden
							          </button>
									 </div>
							        {/*<div className="col-lg-7 text-right pr-5">
										<a href="javascript:void(0)" onClick={() => {
											setRatingEntry(!ratingEntry);}} className="link-blue bg_light_blue">
							            	Abbrechen
							          	</a>
							        </div>*/}
							      </div>
							    </div>
							</form>
						</div>

					</div>

            </div>
        )
    
}

function mapStateToProps(state: any) {
	
	const { isLoggedIn } = state.client.isLoggedIn;
	const { message } = state.messages;
	const { user } = state.client;
// 	let user=null;
// 	if(typeof state.client !== 'undefined'){
// 	user=state.client;
// }
	
	//const { user } = state?.auth?.user;
	//console.log("mrtest",user);
	return {
		isLoggedIn,
		message,
		user
	};
}
export default connect(mapStateToProps)(TicketsDetail)
