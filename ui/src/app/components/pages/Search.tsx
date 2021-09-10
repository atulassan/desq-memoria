import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getData, postData } from '../../services/main-service';
import { connect } from "react-redux";
import Header from '../shared/Header';
import { format } from 'date-fns';
import { postData } from 'app/services/main-service';
import { getTypeIcon} from "../../utils"
//getData,
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import { KUNDENLIST } from "../../redux/types";
// import Leftsidemenu from '../modules/Leftsidemenu';
// import queryString from 'query-string';

export class Search extends Component<any, any> {
  constructor(props: any) {
    super(props);

    let params = new URLSearchParams(this.props.location.search).get("pre");
    console.log('tttt', this.props.location.search, "==", params)
    this.state = {
      searchTo: new URLSearchParams(this.props.location.search).get("type") != null ? new URLSearchParams(this.props.location.search).get("type") : 'Alle Module',
      searchString: new URLSearchParams(this.props.location.search).get("q"),
      redirectTo: new URLSearchParams(this.props.location.search).get("pre") != null && new URLSearchParams(this.props.location.search).get("pre") != '/search' ? new URLSearchParams(this.props.location.search).get("pre") : '/',
      searchFor: {
        "Kunden": {
          apiURL: '/Addresses/getAddressesByFilter&Fields=Salutation&Fields=Title&Fields=Street&Fields=ZIP&Fields=Postbox&Fields=Lastname&Fields=Firstname&Fields=City&Fields=AdditionalAddressInfo&Fields=Country&Fields=LanguageCode&Fields=privatAddress&IncludeDetails=true',
          columns: 'addressLine,Firstname,Lastname'
        },
        "Tickets": {
          apiURL: '/Tickets/getTicketsByFilter&IncludeDetails=true&Fields=Firstname&Fields=Lastname',
          columns: 'title,text'
        },
        "Aufgaben": {
          apiURL: '/TicketSteps/getTicketStepsByFilter',
          columns: 'note,text'
        },
        "Kontakte": {
          apiURL: '/ContactPersons/getContactPersonsByFilter&IncludeDetails=true',
          columns: 'Firstname,Lastname'
        },
      },
      results: {},
      totalCount: 0,
      currentTab: 'allModule'
    }

  }
  componentWillMount() {
    this.fetchData();
    
  }
  onKeyPress = (e:any) => {
    console.log("116",e.which )
    if(e.which === 13) {
      this.fetchData();
    }
  }
  // componentDidUpdate(){
  //   this.fetchData();
  // }
  async fetchData() {
    let result: any = {};
    let totalCount = 0;
    // let fData = {
    //   "filters": [],
    //   "column": tableDetail.filterColumn,
    //   "filterValue": date.toISOString().split('T')[0],
    //   "filterOperator": "LARGER"
    // };

    let objKeys = Object.keys(this.state.searchFor);
    for (let i = 0; i < objKeys.length; i++) {
      if (this.state.searchTo == 'Alle Module' || this.state.searchTo == objKeys[i]) {
        console.log('test', objKeys[i]);
        let columns = this.state.searchFor[objKeys[i]].columns.split(',');
        let filters = [];
        for (let j = 0; j < columns.length; j++) {
          filters.push({ "column": columns[j], "filterValue": `%${this.state.searchString}%`, "filterOperator": "LIKE" })
        }
        let fData = { filters: filters, "filterLogic": "OR" }
        result[objKeys[i]] = await postData('/memoria/postMethod?url=' + this.state.searchFor[objKeys[i]].apiURL, fData);
        totalCount += result[objKeys[i]].data.totalObjects
      }
    }
    await this.setState({ results: result, totalCount });
    console.log('result', result)
    // }
    // else{

  }
  //   {
  //     "filters": [
  //         {
  //             "column": "lastname",
  //             "filterValue": "%test%",
  //             "filterOperator": "LIKE"

  //         },
  //         {
  //             "column": "groupID",
  //             "filterValue": 23,
  //             "filterOperator":"EQUAL"           

  //         }
  //     ],
  //     "filterLogic": "AND"
  // }
  loadTabHeader() {
    let objKey = typeof this.state.results === 'object' && this.state.results !== null ? Object.keys(this.state.results) : [];
    console.log('Header objKey', objKey)
    if (objKey.length > 0) {
      return (
        <ul>
          <li onClick={() => this.setState({ currentTab: 'allModule' })} className={this.state.currentTab === 'allModule' ? "active" : ''}>
            <a href={void (0)}>Alle <span>{this.state.totalCount}</span></a>
          </li>
          {objKey.map((val: any, inx: any) => {
            if (this.state.results[val].data.totalObjects <= 0)
              return null
            return (

              <li onClick={() => this.setState({ currentTab: val })} className={this.state.currentTab === val ? "active" : ''}>
                <a href={void (0)}>{val} <span>{this.state.results[val].data.totalObjects}</span></a>
              </li>

            )
          }
          )}
        </ul>
      );
    }
    return null;
  }
  loadTabContent() {
    let objKey = typeof this.state.results === 'object' && this.state.results !== null ? Object.keys(this.state.results) : [];
    return (
      <ul>
        {objKey.map((val: any, inx: any) =>
          <li>
            {this.state.results[val].data.totalObjects > 0 && (val === 'Kunden' || val == 'Alle Module') ? this.kundenList(this.state.results[val].data.objects) : null}
            {this.state.results[val].data.totalObjects > 0 && (val === 'Tickets' || val == 'Alle Module') ? this.ticketList(this.state.results[val].data.objects) : null}
            {this.state.results[val].data.totalObjects > 0 && (val === 'Aufgaben' || val == 'Alle Module') ? this.aufgabenList(this.state.results[val].data.objects) : null}
            {this.state.results[val].data.totalObjects > 0 && (val === 'Kontakte' || val == 'Alle Module') ? this.kontakteList(this.state.results[val].data.objects) : null}
          </li>
        )}
      </ul>
    );
  }
  kontakteList(datas: any = []) {
    return (
      <div className="Aufgaben allModule" style={{ display: this.state.currentTab === 'allModule' || this.state.currentTab === 'Kontakte' ? 'block' : 'none' }}>
        <h4>Kontakte</h4>


        <table className="table m-0">
          <tbody>

            {/* stt Contact Persons */}
            {datas.length <= 0 ? null :
              Array.isArray(datas) ?
                datas.map((cnt: any) =>
                  <>
                    <tr>
                      <td width="5%">
                        <div className="mediaIcon">
                          {/* <span>{cnt['firstName'].charAt(0).toUpperCase()}{cnt['lastName'].charAt(0).toUpperCase()}</span>*/}
                          {cnt.firstname?.charAt(0).toUpperCase()}{cnt.lastname?.charAt(0).toUpperCase()}
                        </div>
                      </td>
                      <td width="80%">
                        <div className="custom_item">
                          <h5>
                            <Link to={`/UpdKontaktePerson/${cnt.id}`} className="mr-3">#{cnt.id}</Link>
                            {cnt.salutation && <span className="font13 mr-3 fontNormal">{cnt.salutation}</span>}
                            {cnt.title &&
                              <span className="font13 mr-3 fontNormal">{cnt.title}</span>
                            }
                            <span className="font13 mr-3 fontNormal">{cnt.firstname} {cnt.lastname}</span>
                          </h5>
                          <ul className="custom_breadcrumb">
                            <li>
                              <Link to="#">Funktion</Link>
                            </li>
                            <li>
                              <Link to="#">Geburtstag</Link>
                            </li>
                            {
                              cnt['contactFields'].length > 0 ?
                                cnt['contactFields'].map((contact: any) =>
                                  <li>
                                    <Link to="#">{contact.value}</Link>
                                  </li>
                                ) : null
                            }
                            {cnt.default &&
                              <li>
                                <Link to="#">Standardkontakt</Link>
                              </li>
                            }
                          </ul>
                        </div>


                      </td>
                      <td className="text-center" width="5%">
                        <div className="mediaIcon">
                          <Link to={`/UpdKontaktePerson/${cnt.id}`}>
                            <span>
                              <i className="fa fa-pencil" />
                            </span>
                          </Link>
                        </div>
                      </td>

                      <td className="text-center" width="5%">
                        <div className="mediaIcon">
                          <span>
                            <i className="fa fa-ticket" />
                            <span className="KontaktPerTicketCount">1</span>
                          </span>
                        </div>
                      </td>
                      {/* <td className="text-center" width="5%">
                                          <div className="mediaIcon">
                                            <span>AS</span>
                                          </div>
                                          </td> */}
                    </tr>
                  </>
                ) : null
            }
            {/* End Contact Persons */}

          </tbody>
        </table>
      </div>
    );

  }
  aufgabenList(datas: any = []) {
    console.log('Aufgaben==', datas)
    return (
      <div className="Aufgaben allModule" style={{ display: this.state.currentTab === 'allModule' || this.state.currentTab === 'Aufgaben' ? 'block' : 'none' }}>
        <h4>Aufgaben</h4>

        {datas.length > 0 ? datas.map((el: any, key: any) =>


          <div key={key} className="media p20 AgunenList">
            {/* {console.log("el++++++++++++++++++++++++++++++++++++++++++++++",el)} */}
            <div className="mediaImg font13">
              {el.user?.firstname ? el.user?.firstname?.slice(0, 1).toUpperCase() : null} {el.user?.lastname?.slice(0, 1).toUpperCase()}
              <span className="indicateIcon green">
                <i className="fa fa-reply" />
              </span>
            </div>
            <div className="media-body">
              <h5 className="mt-0 hint-title smTitle mt-2">
                #{el.id}
                {/*<span className="ml-3 mr-3">{el.date != "" && el.date != null && el.date != undefined ? format(new Date(el.date), 'dd.MM.yyyy') : ''}</span>*/}

                <span className="ml-3 mr-3">{el.followUpDate != "" && el.followUpDate != null && el.followUpDate != undefined ? format(new Date(el.followUpDate), 'dd.MM.yyyy') : ''}
                </span>
                <span className="mr-3">
                  {el.status == 'Open' ? 'Offen' :
                    el.status == 'In_Progress' ? 'In Arbeit' :
                      el.status == 'Closed' ? 'Geschlossen' :
                        el.status == 'Charged' ? 'Verrechnet' : ''}
                </span>
                <span className="mr-3">{el.executionDate != "" && el.executionDate != null && el.executionDate != undefined ? format(new Date(el.executionDate), 'dd.MM.yyyy') : ''}</span>
                <span className="mr-3">{el.executionDate != "" && el.executionDate != null && el.executionDate != undefined ? format(new Date(el.executionDate), 'kk:mm') : ''}</span>
              </h5>
              {el.text}
              {/* <div className="ZeitEintragEdit "> 
              <a href="javascript:void(0)" onClick={() => {setAufgaben(el)
                      setTimeEntry(!timeEntry);
                  }}>
                  <i className="lnr-pencil" />
                  </a>
              </div>
              <div className="ZeitEintrag ">
                  <a href="javascript:void(0)" onClick={() => {setAufgaben(el)
                      setTimeEntry(!timeEntry);
                  }}>
                      <i className="lnr-clock" />
                  </a>
              </div> */}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
  ticketList(datas: any = []) {
    console.log('tickets==', datas)
    //  let resultUrgency: any = await getData('/memoria/getMethod?url=/Tickets/getTicketUrgencies');
    // let urgencyData = resultUrgency != '' || resultUrgency != undefined || resultUrgency != null ? resultUrgency.data : [];
    return (
      <div className="Tickets allModule" style={{ display: this.state.currentTab === 'allModule' || this.state.currentTab === 'Tickets' ? 'block' : 'none' }}>
        <h4>Tickets</h4>
        {
          datas.length > 0
            ? datas.map((tickets: any, i: any) => {

              return (

                <table key={i} className="table m-0">
                  <tbody>
                    <tr>
                      <td width="5%">
                        <div className="mediaIcon">
                          <i className={` ${getTypeIcon(tickets.orderOrigin)}`} />
                          <label className="ix-checkbox-label"><input type="checkbox" className="ix-checkbox" /><mark /></label>
                        </div>
                      </td>
                      <td width="20%" className="text-left">
                        <div className="custom_item">

                          <p><Link to={`tickets-detail/${tickets.id}?page=1`}>#{tickets.id} {tickets.title} </Link></p>
                          <ul className="custom_breadcrumb">
                            <li><Link to="#" className="link">{tickets.customer?.fields[0].value} {tickets.customer?.fields[1].value}</Link></li>
                          </ul>
                        </div>
                      </td>
                      <td width="40%" className="text-left">
                        <div className="custom_item">
                          <ul className="custom_breadcrumb" style={{ position: 'relative', top: '9px' }}>
                            {/* <li><Link to="#">{format(new Date(tickets.dateCreated), 'dd.MM.yyyy')}</Link></li> */}
                            {/* <li><Link to="#"> {tickets.status == 1 ?format(new Date(tickets.openDatetime), 'HH:mm') : tickets.status == 2 ?format(new Date(tickets.onholdDatetime), 'HH:mm'): tickets.status == 3 ?format(new Date(tickets.escaltedDatetime), ' HH:mm'): tickets.status == 4 ?format(new Date(tickets.closedDatetime), ' HH:mm'): null  } </Link></li> */}
                            {/* <li><Link to="#">Normal</Link></li> */}
                            {/* {urgencyData.map((urgencydata: any, key: any) => { tickets.urgencyID === urgencydata.id ? urgencydata.name_DE : '' }
                            )} */}
                            {/* <li><Link to="#">00:00</Link></li> */}
                          </ul>
                        </div>
                      </td>

                      <td className="text-center" width="20%">
                        <div className="hlpcnt action-btns">
                          {/* <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Ticketvoransicht"><i className="lnr-enter-down" /></Link> */}
                          <Link to={`edit-ticket/${tickets.id}`} data-toggle="tooltip" data-placement="bottom" title="Editieren"><i className="lnr-pencil" /></Link>
                          { /*<Link to="#" onClick={(event) => { this.handleClick(event, tickets.id) }} data-toggle="tooltip" data-placement="bottom" title="löschen"><i className="lnr-trash" /></Link>*/}
                        </div>
                      </td>
                      {/* <td className="text-right" width="5%">
                        <span className="dropdown">
                          <Link to="#" className="btn link-red" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            {tickets.status == 'Open' ? "Offen" : tickets.status == 'In_Progress' ? "In Arbeit" : tickets.status == 'Closed' ? "Geschlossen" : tickets.status == 'Charged' ? "Verrechnet" : null}<i style={{ position: 'relative', left: '5px', top: '1px' }} className="lnr lnr-chevron-down" />
                          </Link>
                          <div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
                            <Link to="#" onClick={() => { this.statusClick(tickets.id, "Open") }} className="dropdown-item" >Offen</Link>
                      {tickets.status == 'Open' ? <Link to="#" onClick={() => { this.statusClick(tickets.id, "In_Progress") }} className="dropdown-item" >In Arbeit</Link> : ''}
                      {tickets.status == 'Open' || tickets.status == 'In_Progress' ? <Link to="#" onClick={() => { this.statusClick(tickets.id, "Closed") }} className="dropdown-item">Geschlossen</Link> : ''}
                      {tickets.status == 'Open' || tickets.status == 'In_Progress' || tickets.status == 'Closed' ? <Link to="#" onClick={() => { this.statusClick(tickets.id, "Charged") }} className="dropdown-item">Verrechnet</Link> : ''}
                          </div>
                        </span>
                      </td> */}
                      <td className="text-center" width="5%">
                        {/* <Link to="#"  className="comtTrigger" data-toggle="tooltip" data-placement="bottom" title="Kommentar"><i className="lnr-bubble" /></Link> */}
                      </td>
                      {/* <td className="text-center" width="5%">
                        <span className="custom_avatar float-right" data-toggle="tooltip" data-placement="bottom" data-original-title="Anita Sivakumar">
                          
                          {tickets.user?.firstname?.slice(0, 1).toUpperCase()} {tickets.user?.lastname?.slice(0, 1).toUpperCase()}

                        </span>
                      </td> */}
                    </tr>
                  </tbody>
                </table>
              )
            }
            ) : null

        }</div>
    )
  }
  kundenList(datas: any = []) {

    console.log('datas', datas)
    return (
      <div className="Kunden allModule" style={{ display: this.state.currentTab === 'allModule' || this.state.currentTab === 'Kunden' ? 'block' : 'none' }}>
        <h4>Kunden</h4>
        {
          datas.map((customer: any, i: number) => {
            let { fields } = customer;

            let firstName = fields[0]?.value || '';
            let lastName = fields[1]?.value || '';

            return (
              <table key={i} className="table m-0">
                <tbody>
                  <tr >
                    <td width="5%">
                      <div className="mediaIcon">
                        <span>
                          {firstName?.charAt(0).toUpperCase()}
                          {lastName?.charAt(0).toUpperCase()}{' '}
                        </span>
                      </div>
                    </td>
                    <td width="60%">
                      <div className="custom_item">
                        <p>
                          <Link to={`/kontakte-detail/${customer?.id}?page=1`}>{`${firstName} ${lastName}`}</Link>
                        </p>
                        <ul className="custom_breadcrumb">
                          <li style={{ display: 'none' }}>
                            <Link to="#" className="link">
                              {customer?.account}
                            </Link>
                          </li>
                          <li style={{ display: 'none' }}>
                            <Link to="#">{customer?.email}</Link>
                          </li>
                          <li style={{ display: 'none' }}>
                            <Link to="#">{customer?.telephone}</Link>
                          </li>
                          <li>
                            <Link to={`/kontakte-detail/${customer?.id}?page=1`} className="link">
                              #{customer?.id}
                            </Link>
                          </li>

                          {customer['fields'] ?
                            customer['fields'].map((field: any, idx: any) =>
                              <li key={idx}>
                                {field.hasOwnProperty('value') && field.value}
                              </li>
                            ) : null
                          }

                        </ul>
                      </div>
                    </td>
                    <td className="text-center" width="20%">
                      <div className="hlpcnt action-btns">
                        <Link
                          to={`/kontakte-edit/${customer?.id}`}
                          data-toggle="tooltip"
                          data-placement="bottom"
                          data-original-title="Editieren"
                        >
                          <i className="lnr-pencil" />
                        </Link>

                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })
        }</div>
    )
  }
  render() {
    let { redirectTo } = this.state;
    return (

      <div>

        <Header linkPage={`/addkontakte`} />

        <div className="searchPage">
          <div className="row no-gutters">
            <div className="col-lg-2">
              <div className="input-group-prepend dropdown">
                <Link to="#" className="btn" id="dropdownMenuButton" data-toggle="dropdown" >
                  Alle Module <i style={{ marginLeft: '5px', fontSize: '10px' }} className="lnr lnr-chevron-down" />
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link to="#" onClick={() => this.setState({ searchTo: 'Alle Module' })} className="dropdown-item active">Alle Module</Link>
                  <Link to="#" onClick={() => this.setState({ searchTo: 'Tickets' })} className="dropdown-item">Tickets</Link>
                  <Link to="#" onClick={() => this.setState({ searchTo: 'Aufgaben' })} className="dropdown-item">Aufgaben</Link>
                  <Link to="#" onClick={() => this.setState({ searchTo: 'Kunden' })} className="dropdown-item">Kunden</Link>
                  <Link to="#" onClick={() => this.setState({ searchTo: 'Kontakte' })} className="dropdown-item">Kontakte</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-group">
                <div className="input-group-prepend dropdown ">
                  <input type="text" onChange={(e)=>{this.setState({searchString:e.target.value})}}  className="form-control" placeholder="Suche" aria-label="search" onKeyPress={this.onKeyPress}/>
                  <div className="searchSubmit"  onClick={()=>this.fetchData()}>
                    <Link to={`/search?q=${this.state.searchString}&type=${this.state.searchTo}&pre=${redirectTo}`} ><i className="lnr lnr-magnifier" /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" >
              <Link to={`${redirectTo}`}   id="searchPopupBoxClose" className="slideFormClose">×</Link>
            </div>
          </div>
        </div>

        <div className="mainWrapper">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="mainWrapperBody">
                <div className="p-2">

                  <div className="searchPageContent">
                    <div className="row no-gutters">
                      <div className="col-lg-2">
                        <div className="searchPageLeft">
                          <div className="searchPageTitle">
                            <h3>Results</h3>
                          </div>
                          <div className="subTextTitle">Modul</div>
                          {/* <Tabs > */}

                          <div className="searchLeftScroll">
                            {this.loadTabHeader()}
                            {/* <ul>

                              <li>
                                <Link to="">Tickets <span>2</span></Link>
                              </li>
                              <li>
                                <Link to="">Aufgaben <span>1</span></Link>
                              </li>
                              <li>
                                <Link to="">Kunden <span>1</span></Link>
                              </li>
                              <li>
                                <Link to="">Kontakte <span>1</span></Link>
                              </li>
                            </ul> */}
                          </div>
                          {/* </Tabs> */}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="searchPageRight">
                          <div className="searchPageTitle">
                            <h3>Suchergebnisse</h3>
                          </div>
                          <div className="searchRightScroll">
                            <div className="tickets">
                              {this.loadTabContent()}
                              {/* <ul>
                                <li>
                                  <table className="table m-0">
                                    <tbody>
                                      <tr>
                                        <td width="5%">
                                          <div className="mediaIcon">
                                            <i className="lnr-envelope" />
                                            <label className="ix-checkbox-label">
                                              <input type="checkbox" className="ix-checkbox" /><mark />
                                            </label>
                                          </div>
                                        </td>
                                        <td className="text-left" width="20%">
                                          <div className="custom_item">
                                            <p><a href="/tickets-detail/174?page=1">#174 Test IT </a></p>
                                            <ul className="custom_breadcrumb">
                                              <li><a className="link" href="/tickets"> one ix GmbH</a></li>
                                            </ul>
                                          </div>
                                        </td>
                                        <td className="text-left" width="40%">
                                          <div className="custom_item">
                                            <ul className="custom_breadcrumb" style={{ position: 'relative', top: '9px' }}>
                                              <li><a href="/tickets">10.03.2021</a></li>
                                              <li><a href="/tickets">00:00</a></li>
                                            </ul>
                                          </div>
                                        </td>
                                        <td className="text-center" width="20%">
                                          <div className="hlpcnt action-btns">
                                            <a href="/edit-ticket/174">
                                              <i className="lnr-pencil" />
                                            </a>
                                          </div>
                                        </td>
                                        <td className="text-right" width="5%">
                                          <span className="dropdown">
                                            <a className="btn link-red" id="dropdownMenuButton" data-toggle="dropdown" href="/tickets">In Arbeit<i style={{ position: 'relative', left: '5px', top: '1px' }} className="lnr lnr-chevron-down" />
                                            </a>
                                            <div className="dropdown-menu viewList" aria-labelledby="dropdownMenuButton">
                                              <a className="dropdown-item" href="/tickets">Offen</a>
                                              <a className="dropdown-item" href="/tickets">Geschlossen</a>
                                              <a className="dropdown-item" href="/tickets">Verrechnet</a>
                                            </div>
                                          </span>
                                        </td>
                                        <td className="text-center" width="5%" />
                                        <td className="text-center" width="5%">
                                          <span className="custom_avatar float-right">AT</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </li>



                              </ul> */}
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
    );
  }
}
//export default Kunden;
function mapStateToProps(state: any) {
  //console.log('State', state);
  const { messages } = state;
  return {
    messages
  };
}
export default connect(mapStateToProps)(Search);
