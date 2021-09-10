import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import Header from '../shared/Header';
// import Leftsidemenu from '../modules/Leftsidemenu';
import { getData, postData } from '../../services/main-service';
import { format } from 'date-fns';
import ReactPaginate from 'react-paginate';
import { getTypeIcon} from "../../utils"

export class Tickets extends Component<any, any>{
	constructor(props: any) {
		super(props);
		this.state = {
			loading: true,
			tickets: [],
			fullTickets: [],
			urgencyData: [],
			totalItems: "",
			totalPages: "",
			pageSize: "",
			currentPage:location.search.slice(6) || 1,
			orderList: "",
			datefilter: "",
			perPage: 20,
			showData: 'Alle Ticket(All)',
			statusChangesTicket:{}
		}
		this.handleClick = this.handleClick.bind(this);
		this.statusClick = this.statusClick.bind(this);
		this.handlePageClick = this.handlePageClick.bind(this);
		//this.handleChangeAll = this.handleChangeAll.bind(this);

	}
	componentDidMount() {
		this.fetchItems();
	}
	async fetchItems() {

		let { perPage, currentPage } = this.state;
		console.log('state inside fetch item ',this.state);
		
		//&pageSize=${this.state.perPage}&currentPage=${this.state.ccPage}
		let result: any = await getData(`/memoria/getMethod?url=/Tickets/getTicketsAll&OrderBy=ID DESC&PageSize=${perPage}&PageNumber=${
			currentPage - 1}`);
		let resultUrgency: any = await getData('/memoria/getMethod?url=/Tickets/getTicketUrgencies');
		let TicketFullData: any = [];
		// result.data.objects.map(async (result:any, i:any)=>{
		// 	let resultCustomer1:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&Fields=Firstname&Fields=Lastname&ID=${result.addressID}`);
		// 	let resultUser1:any = await getData(`/memoria/getMethod?url=/Users/getUsersByID&Fields=Firstname&Fields=Lastname&ID${result.userCreatedID}`);
		// 	result['customer']= await resultCustomer1.data;
		// 	result['user']= await resultUser1.data;
		// 	return TicketFullData.push(result);
		// 	}
		// );
		for (let i = 0; i < result.data.objects.length; i++) {
			// for (let i = result.data.objects.length; i > 1; i--) {

			let resultCustomer1: any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&Fields=Firstname&Fields=Lastname&ID=${result.data.objects[i].addressID}`);
			let resultUser1: any = await getData(`/memoria/getMethod?url=/Users/getUsersByID&Fields=Firstname&Fields=Lastname&ID=${result.data.objects[i].userCreatedID}`);
			result.data.objects[i]['customer'] = await resultCustomer1.data;
			result.data.objects[i]['user'] = await resultUser1.data;
			TicketFullData.push(result.data.objects[i]);
		}

		this.setState({ fullTickets: TicketFullData });
		await this.setState({
			loading: false,
			tickets: result != '' && result != undefined && result != null ? this.state.fullTickets : [],
			urgencyData: resultUrgency != '' || resultUrgency != undefined || resultUrgency != null ? resultUrgency.data : [],
			totalItems: (result.status == 200) ? result.data.totalObjects : "",
			totalPages: (result.status == 200) ? result.data.totalPages : "",
			pageSize: (result.status == 200) ? result.data.pageSize : "",
			currentPage: (result.status == 200) ? result.data.currentPage : 0,
		});
		await console.log(this.state.urgencyData);
		await console.log("fullTickets", this.state.fullTickets)
	}

	async handlePageClick(e: any) {
		let { history, match } = this.props;
		this.setState({ loading: true });
    	let selectedPage = e.selected;
		history.push(`${match.path}?page=${selectedPage + 1}`);
		this.setState({ currentPage: selectedPage + 1 }, () => {
      	this.fetchItems();
    });
	}
	/*
	** TICKET STATUS CHANGES
	*/
	async statusClick(ticketId:any,type:any) {
		console.log("Ticket ID status ---------",ticketId);
		console.log("Ticket ID status ---------",type);
		let { history, match } = this.props;
		let data:any ={};
		if(ticketId!="" && ticketId!=undefined && ticketId!=null)
		{
			let resultTicket:any = await getData(`/memoria/getMethod?url=/Tickets/getTicketByID&Fields=Firstname&Fields=Lastname&ID=${ticketId}`);
			await this.setState({statusChangesTicket:resultTicket.data});
			console.log("----------------------------",resultTicket.data);
			let data1 =[];
			//data =this.state.statusChangesTicket;
			 this.state.statusChangesTicket["status"]= await type;
			 data = this.state.statusChangesTicket;
			// console.log("---------finaldata-------------------",data);
			await data1.push(data);
			//console.log("---------lastdata-------------------",data1);
			let result:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', data1);
            console.log("Ticket  post result is ",result);
			//data["status"]=type;
			if(result.status === 200)
			{
				history.push(`${match.path}?page=${this.state.currentPage+1}`);
					this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      				this.fetchItems();
   			 }); 
			}
			else{
			console.log(result.data.message);
		   
		   }
		}
		else{
		  console.log("Invalid Id");
		   
		}
		
	  }

	/*
	** Ticket Remove Function
	*/
	async handleClick(event: any, ticketId: any) {
		console.log("Ticket ID");
		console.log(ticketId);
		if (ticketId != "" && ticketId != undefined && ticketId != null) {
			let result: any = await postData(`/ticket/remove/${ticketId}`, []);
			console.log(result);
			if (result.status === 200) {
				console.log(result.data.message);
				// this.props.dispatch({
				//   type: SET_MESSAGE,
				//   payload: {message:result.data.message,variant:'success'},
				// }); 
			}
			else {
				console.log(result.data.message);
				//   this.props.dispatch({
				//     type: SET_MESSAGE,
				//     payload: {message:result.data.message,variant:'Error'},
				//   }); 
			}
		}
		else {
			console.log("Invalid Id");
			// this.props.dispatch({
			//   type: SET_MESSAGE,
			//   payload: {message:"Invalid Id",variant:'Error'},
			// }); 
		}

	}

	listval(type:any){
		console.log(type);
	}
	
	render() {
		let { loading, tickets, totalItems, totalPages, urgencyData, userNameData }: any = this.state;

		console.log(loading);
		console.log("tickets tickets", tickets);
		console.log(urgencyData);
		console.log(userNameData);

		return (
			<div>

				{/*<Leftsidemenu />*/}

				<Header />

				<div className="mainWrapper">
				{loading? <div className="p-3">Loading...</div>:(
					<div className="row no-gutters">
						<div className="col-lg-12">
							<div className="mainWrapperBody ticketsListingScroll">
								<div className="requestqueuecontainer ">

									<div className="row no-gutters mt-2 mb-2">
										<div className="col-lg-12">
											<span className="dropdown">
												<i style={{ position: 'relative', top: '2px', paddingRight: '10px', color: '#f6b241' }} className="fa fa-star" />
												<button className="btn pl-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
													{this.state.showData} <i style={{ position: 'relative', left: '5px', top: '1px' }} className="lnr lnr-chevron-down" />
												</button>
												<div className="dropdown-menu posLeft" aria-labelledby="dropdownMenuButton">
													<Link to="#"  className="dropdown-item" onClick={() => this.listval('1')}>Alle Offene Tickets</Link>
                                      				<Link to="#"  className="dropdown-item" onClick={() => this.listval('2')} >Meine Offene Tickets</Link>
												</div>
											</span>
										</div>

									</div>
									<div className="tickets helpList">

										<ul>
											{this.state.tickets.length > 0
													? this.state.tickets.map((tickets: any, i: any) =>
														<li>
															{console.log("renderdata----->", i)}
															<table className="table m-0">
																<tbody>
																	<tr>
																		<td width="5%">
																			<div className="mediaIcon">
																				{/* {console.log("741===========",getTypeIcon(tickets.orderOrigin))} */}
																				<i className={` ${getTypeIcon(tickets.orderOrigin)}`} />
																				<label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark /></label>
																			</div>
																		</td>
																		<td width="20%" className="text-left">
																			<div className="custom_item">
																				
																				<p><Link to={`tickets-detail/${tickets.id}?page=${this.state.currentPage+1}`}>#{tickets.id} {tickets.title} </Link></p>
																				<ul className="custom_breadcrumb">
																					<li><Link to="#" className="link">{tickets.customer.fields[0].value} {tickets.customer.fields[1].value}</Link></li>
																				</ul>
																			</div>
																		</td>
																		<td width="40%" className="text-left">
																			<div className="custom_item">
																				<ul className="custom_breadcrumb" style={{ position: 'relative', top: '9px' }}>
																					<li><Link to="#">{format(new Date(tickets.dateCreated), 'dd.MM.yyyy')}</Link></li>
																					{/* <li><Link to="#"> {tickets.status == 1 ?format(new Date(tickets.openDatetime), 'HH:mm') : tickets.status == 2 ?format(new Date(tickets.onholdDatetime), 'HH:mm'): tickets.status == 3 ?format(new Date(tickets.escaltedDatetime), ' HH:mm'): tickets.status == 4 ?format(new Date(tickets.closedDatetime), ' HH:mm'): null  } </Link></li> */}
																					{/* <li><Link to="#">Normal</Link></li> */}
																					{urgencyData.map((urgencydata: any, key: any) => { tickets.urgencyID === urgencydata.id ? urgencydata.name_DE : '' }
																					)}
																					<li><Link to="#">00:00</Link></li>
																				</ul>
																			</div>
																		</td>

																		<td className="text-center" width="20%">
																			<div className="hlpcnt action-btns">
																				{/* <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Ticketvoransicht"><i className="lnr-enter-down" /></Link> */}
																				{tickets.status!=="Closed" && tickets.status!=="Charged"?
																				<Link to={`edit-ticket/${tickets.id}`} data-toggle="tooltip" data-placement="bottom" title="Editieren"><i className="lnr-pencil" /></Link>
																				:null}	
																				{ /*<Link to="#" onClick={(event) => { this.handleClick(event, tickets.id) }} data-toggle="tooltip" data-placement="bottom" title="löschen"><i className="lnr-trash" /></Link>*/ }
																			</div>
																		</td>
																		<td className="text-right" width="5%">
																		{tickets.status!=="Closed" && tickets.status!=="Charged"?
																			<span className="dropdown">
																				<Link to="#" className="btn link-red p-0" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
																					{tickets.status == 'Open' ? "Offen" : tickets.status == 'In_Progress' ? "In Arbeit" : tickets.status == 'Closed' ? "Geschlossen" : tickets.status == 'Charged' ? "Verrechnet" : null}<i style={{ position: 'relative', left: '5px', top: '1px' }} className="lnr lnr-chevron-down" />
																				</Link>
																				<div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
																					<Link to="#" onClick={() => { this.statusClick(tickets.id, "Open") }} className="dropdown-item" >Offen</Link>
																					{tickets.status == 'Open' ? <Link to="#" onClick={() => { this.statusClick(tickets.id, "In_Progress") }} className="dropdown-item" >In Arbeit</Link> : ''}
																					{tickets.status == 'Open' || tickets.status == 'In_Progress' ? <Link to="#" onClick={() => { this.statusClick(tickets.id, "Closed") }} className="dropdown-item">Geschlossen</Link> : ''}
																					{tickets.status == 'Open' || tickets.status == 'In_Progress' || tickets.status == 'Closed' ? <Link to="#" onClick={() => { this.statusClick(tickets.id, "Charged") }} className="dropdown-item">Verrechnet</Link> : ''}
																				</div>
																			</span>:
																			<span className="link-red">
																				
																			{tickets.status === "Open" ? "Offen" :tickets.status === "In_Progress" ? "In Arbeit" :tickets.status === "Closed"  ? "Geschlossen" :tickets.status === "Charged" ? "Verrechnet":null}
																			
																			</span>
																			}
																		</td>
																		<td className="text-center" width="5%">
																			{/* <Link to="#"  className="comtTrigger" data-toggle="tooltip" data-placement="bottom" title="Kommentar"><i className="lnr-bubble" /></Link> */}
																		</td>
																		<td className="text-center" width="5%">
																			<span className="custom_avatar float-right" data-toggle="tooltip" data-placement="bottom" data-original-title="Anita Sivakumar">
																				{/* {userNameData[i]?.slice(0,2).toUpperCase()} */}
																				{tickets.user.firstname?.slice(0, 1).toUpperCase()} {tickets.user.lastname?.slice(0, 1).toUpperCase()}

																			</span>
																		</td>
																	</tr>
																</tbody>
															</table>
														</li>
													):null
													
											}
										</ul>
									</div>

								</div>
							</div>
							<div className="pagiNation">
								{/* Einträge gesamt <Link to="#"><i className="lnr lnr-chevron-left" /></Link> <span>1 - 1</span> <Link to="#"><i className="lnr lnr-chevron-right" /></Link> */}
								{totalItems &&
									<ReactPaginate
										previousLabel={"<"}
										nextLabel={">"}
										breakLabel={"..."}
										breakClassName={"break-me"}
										pageCount={totalPages}
										marginPagesDisplayed={2}
										pageRangeDisplayed={5}
										onPageChange={(event) => this.handlePageClick(event)}
										containerClassName={"pagination pagination-sm"}
										activeClassName={"active"} />
								}
							</div>
						</div>
					</div>
				)}
				</div>


			</div>
		)
	}


}


export default Tickets
