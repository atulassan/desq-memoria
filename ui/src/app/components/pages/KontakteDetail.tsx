import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getData, postData } from 'app/services/main-service';
import { format } from 'date-fns';
import { connect } from "react-redux";
import queryString from 'query-string';
import { base64ToFile, convertBase64, getType } from "../../utils";
import { SET_MESSAGE } from "../../redux/types";

//console.log(getType('Logo Blitz Storen.png'));

export function KontakteDetail(props: any) {

  console.log("Current", props);

  /* let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack()
  }*/

  const { match } = props;
  const userId = match.params.id;
  let params:any = queryString.parse(props.location.search);

  //console.log("parameters++++++++++++++++++++++++++", params);

  const [toEditCnt, setToEditCnt] = useState<boolean>(false);
  const [toEditCntPopup, setToEditCntPopup] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  //const [groups, setGroups] = useState<[]>([]);
  const [opentkts, setOpentkts] = useState<[]>([]);
  const [allTkts, setAllTkts] = useState<[]>([]);
  const [inprogresstkts, setInprogresstkts] = useState<[]>([]);
  const [closedtkts, setClosedtkts] = useState<[]>([]);
  const [chargedtkts, setChargedtkts] = useState<[]>([]);``
  const [totalTkts, setTotalTkts] = useState(0);
  const [deliverAddresses, setDeliverAddresses] = useState<[]>([]);
  const [contactPersons, setContactPersons] = useState<[]>([]);
  const [kundenList, setKundenList] = useState<[]>([]);
  const [kundenLoading, setKundenLoading] = useState<boolean>(true);
  const [uberFallige, setUberFallige] = useState(0);
  //let groupName:string='';

  const handleToEditComment = async () => {
		console.log('handle Comments edit');
		setToEditCnt(!toEditCnt ? true : false);
		console.log(toEditCnt);
	}

  const handleToEditCommentPopup = async () => {
		console.log('handle Comments Popup edit');
		setToEditCntPopup(!toEditCntPopup ? true : false);
		console.log(toEditCntPopup);
	}

  const trigerFileUpload = useRef(null) as React.RefObject<HTMLInputElement>;
  
  useEffect(() => {
    
    async function getCustomerGroup() {

      let uData:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressByID&ID=${userId}&Fields=Firstname&Fields=Lastname&Fields=Street&Fields=ZIP&Fields=city&Fields=AddressGroup&Fields=AdditionalAddressInfo&Fields=Comments&Fields=CommentsPopup&IncludeDetails=true`
      );
      console.log("User Data", uData);
      if(uData.status === 200 && uData.hasOwnProperty('data') && uData['data'].hasOwnProperty('contactFields')) {
        uData['data'].contactFields.forEach((field:any, inx:any) => {
          uData['data'][`${field.code}`] =  field.hasOwnProperty('value') ? field.value : ""; 
        });
      }
      if(uData.status === 200 && uData.hasOwnProperty('data') && uData['data'].hasOwnProperty('fields')) {
        uData['data'].fields.forEach((field:any, inx:any) => {
          uData['data'][`${field.field}`] =  field.hasOwnProperty('value') ? field.value : ""; 
        });
      }
      //console.log("Cotact Fields+++++++++++++++", uData['data']);
      setUserData(uData.status === 200 ? uData.data: []);          
      
      /*getData(`/memoria/getMethod?url=/Addresses/getAddressByID&ID=${userId}&Fields=Firstname&Fields=Lastname&Fields=Street&Fields=ZIP&Fields=city&Fields=AddressGroup&Fields=AdditionalAddressInfo&IncludeDetails=true`
      ).then((res: any) => {
        console.log("User Data", res);
        if (res.status === 200) {
          setUserData(res.data);          
        }
      });*/

      /*getData(`/memoria/getMethod?url=/AddressGroups/getAddressGroupsAll`).then((res: any) => {
        console.log('address group res', res);
        if (res.status === 200) {
          setGroups(res.data);
        }
      });*/

      //let tkts:any = 12;

      /*let splTktsInfo:any = {
        open: [
          { status:"Open", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden" },
          { status:"Open", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden" }
        ], 
        inprogress: [{status:"In_Progress", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"}], 
        closed: [{status:"Closed", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"}], 
        charged: [{status:"Charged", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"}], 
      };*/
      //let splTktsInfo:any = {};
      /*let openTkts:any = [
        { status:"Open", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden" },
        { status:"Open", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden" },
        { status:"Open", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden" },
        { status:"Open", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden" }
      ];
      let inProdgressTkts:any = [{status:"In_Progress", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"},
      {status:"In_Progress", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"},
      {status:"In_Progress", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"}];
      let closedTkts:any = [{status:"Closed", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"},
      {status:"Closed", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"}];
      let chargedTkts:any = [{status:"Charged", id: 1731, name: "oneix", date: "Sep 28 2020 08:36 AM", description_DE: "Verspätet um 7 Tage 3 Stunden"}];*/

      //[ Open, In_Progress, Closed, Charged ]
      
      /*setOpentkts(openTkts);
      setInprogresstkts(inProdgressTkts);
      setClosedtkts(closedTkts);
      setChargedtkts(chargedTkts);
      setTotalTkts(tkts);*/

      let tktInfo:any = await getData(`/memoria/getMethod?url=/Tickets/getTicketsByAddressID&AddressID=${userId}`);

      let splTktInfo:any = {all:[],charged: [], inprogress: [], open: [], closed: []};
      let cntTkts:any = 0;
      let uberFallige:any = 0;

      if(tktInfo['status'] === 200 && tktInfo['data'].objects.length > 0) {

        console.log('Ticketes', tktInfo);
        
        let crntDate:any = new Date();
        cntTkts = tktInfo.data.totalObjects;
        tktInfo['data'].objects.forEach((ticket:any, idx:any)=> {

          let tktDate:any = new Date(ticket['dateCreated']);
          splTktInfo['all'].push(ticket);
            if(ticket['status'] === "Charged") {
              splTktInfo['charged'].push(ticket);
            }
            if(ticket['status'] === "In_Progress") {
              splTktInfo['inprogress'].push(ticket);
              if(crntDate > tktDate) {
                uberFallige += 1;
              }
            }
            if(ticket['status'] === "Open") {
              splTktInfo['open'].push(ticket);
              if(crntDate > tktDate) {
                uberFallige += 1;
              }
            }
            if(ticket['status'] === "Closed") {
              splTktInfo['closed'].push(ticket);
            }
            //console.log('Ticketes +++++++++++++++++', ticket);
        });
      }
      
      setUberFallige(uberFallige);
      setTotalTkts(cntTkts);
      setAllTkts(splTktInfo['all'])
      if(splTktInfo['charged'].length > 0) {
        setChargedtkts(splTktInfo['charged']);
      } else {
        setChargedtkts([]);
      }
      if(splTktInfo['inprogress'].length > 0) {
        setInprogresstkts(splTktInfo['inprogress']);
      } else {
        setInprogresstkts([]);
      }
      if(splTktInfo['open'].length > 0) {
        setOpentkts(splTktInfo['open']);
      } else {
        setOpentkts([]);
      }
      if(splTktInfo['closed'].length > 0) {
        setClosedtkts(splTktInfo['closed']);
      } else {
        setClosedtkts([]);
      }

      //console.log('Tickets', splTktInfo);
      //console.log("Count Ticketes", cntTkts);

      let deliveryAddress:any = await getData(`/memoria/getMethod?url=/DeliveryAddresses/getDeliveryAddressesByAddressID&AddressID=${userId}`);
      console.log("D addresses", deliveryAddress);
      setDeliverAddresses(deliveryAddress.status === 200 ? deliveryAddress.data : []);
      let cpersons:any = await getData(`/memoria/getMethod?url=/ContactPersons/getContactPersonsByAddressID&AddressID=${userId}&IncludeDetails=true`);
      console.log("Contact Persons++++++++++", cpersons);
      setContactPersons(cpersons.status === 200 ? cpersons.data : []);
      //setKundenList( common.kundenlist );
      setLoading(false);
      
      //if(params.hasOwnProperty('p')) {
        let commonListing:any = await getData(`/memoria/getMethod?url=/Addresses/getAddressesPaging&PageNumber=${params.page-1<0?0:params.page-1}&PageSize=20&Fields=Firstname&Fields=Lastname&Fields=Street&Fields=ZIP&Fields=city&Fields=AddressGroup&IncludeDetails=true`); 
        console.log("Common Listing data", commonListing);
        let listItems:any = [];
        if(commonListing['status'] === 200 && commonListing['data']['objects'].length > 0) {
          commonListing['data']['objects'].forEach((kunden:any, idx:any)=> {
            if(parseInt(kunden.id) !== parseInt(userId)) {
              listItems.push(kunden);
            } else {
              listItems[0] = kunden;
            }
          });
          setKundenList( listItems.length > 0 ? listItems : [] );
        }
        
      //}
      setKundenLoading(false);
    
    }
    getCustomerGroup();
    
  }, [userId]);

  /* if (userData?.hasOwnProperty('groupID') && groups.length > 0) {
    let groupNamefromArr:any= groups.filter((item: any) => item.id === userData.groupID)
    groupName=groupNamefromArr[0]?.description_DE;
  } */

  // let upField:any=userData?.fields.length>0&&userData.fields.reduce((a:any,item:any):any=>
  // {
  //   let field=item.feld;
  //   a.field=item?.value
  //   return a;
  // },{});

//console.log('Delivery Addresess', deliverAddresses);
//console.log('contact persions++++++++++', contactPersons);      

//console.log('Kunden List++++++++++', kundenList);      

 const handleChangeAll = async (e:any) => {
   let uData:any = userData;
   let {name, value} = e.target;
   uData[name] = value;
   //console.log(name, value, uData);
  await setUserData(uData);
   console.log(uData);
 }

 const handleUpdComments= async () => {
    console.log('Comments Update');

    let uData:any = userData;

    let fData:any = [{
      "id": parseInt(userId),
      "masterID": 0,
      'fields': [{field: "Comments", value: uData['Comments'].toString()}],
      "inactive": false,
      "dateCreated": format(new Date(), 'yyyy-MM-dd'),
      "dateLastModified": format(new Date(), 'yyyy-MM-dd'),
      "priceLevel": 0,
    }];

    console.log("Submit Build Data", fData);

    let updComments:any = await postData(`/memoria/putMethod?url=/Addresses/setAddresses`, fData); 

    console.log("UPD UPdate", updComments);

    if(updComments.hasOwnProperty('status') && updComments.status === 200) {
      props.dispatch({
        type: SET_MESSAGE,
        payload: { message: "Comments Updated", variant: 'success' },
        });
    } else {
      props.dispatch({
        type: SET_MESSAGE,
        payload: { message: "Error", variant: 'Error' },
        });
    }

 }

 const handleUpdCommentsPopup= async () => {
    
    console.log('Comments Update');

    let uData:any = userData;

    let fData:any = [{
      "id": parseInt(userId),
      "masterID": 0,
      'fields': [{field: "CommentsPopup", value: uData['CommentsPopup'].toString()}],
      "inactive": false,
      "dateCreated": format(new Date(), 'yyyy-MM-dd'),
      "dateLastModified": format(new Date(), 'yyyy-MM-dd'),
      "priceLevel": 0,
    }];

    console.log("Submit Build Data", fData);

    let updCommentsPopup:any = await postData(`/memoria/putMethod?url=/Addresses/setAddresses`, fData); 

    console.log("UPD UPdate", updCommentsPopup);

    if(updCommentsPopup.hasOwnProperty('status') && updCommentsPopup.status === 200) {
      props.dispatch({
        type: SET_MESSAGE,
        payload: { message: "Popup Meldung Updated", variant: 'success' },
        });
    } else {
      props.dispatch({
        type: SET_MESSAGE,
        payload: { message: "Error", variant: 'Error' },
        });
    }

 }

 const downloadFile=async (fileId:any)=>{
  let fileDetails:any = await getData(`/memoria/getMethod?url=/Files/getFileByID&FileID=${fileId}`);
  fileDetails=fileDetails.data;
  console.log('fileDetailsfileDetails',fileDetails)
  base64ToFile(fileDetails.data,fileDetails.filename);
}

const handleFileRead=async (e:any)=>{
		
  const file = e.target.files[0]
  const base64:any = await convertBase64(file);
  let fileBase64= base64.toString().split('base64,');
  if(fileBase64[1]){
    let fileData:any ={
      filename:file.name,
      description_DE: file.name,
      data:fileBase64[1],
      dateCreated:new Date().toISOString(),
      dateLastModified:new Date().toISOString()
    }
    let result:any =await postData('/memoria/putMethod?url=/Files/setFiles', [fileData]);
    //console.log('rr',result);
    fileData['id']=result.data;
    delete fileData['data'];
    let ticketData=userData;
    ticketData.files.push(fileData);
    for(let i=0;i<ticketData.fields.length;i++){
      if(ticketData.fields[i].field=='AddressGroup')
        ticketData.fields.splice(i,1);
    }
    //console.log('ticketData',ticketData)
    let tRes:any =await postData('/memoria/putMethod?url=/Addresses/setAddresses', [ticketData]);
    console.log('tt',tRes)

  }
  //console.log('base64',base64,fileBase64,e.target,e.target.files)
  }
const showFileUpload= ()=>{
  console.log('showFileUpload',userData)
  trigerFileUpload.current?.click()
}
  return (
    <div>
      <Header linkPage={`/addkontakte`} />
      <div>{loading && <p>Loading...</p>}</div>
      <div className="mainWrapper pl-0">
        <div className="mainWrapperBody">
          <div className="ticketcolum left">
            <div className="ticketcolumBackBtn p10">
              <Link to={`/kunden?page=${params.page}`}>
                  <i style={{ position: 'relative', top: '2px', paddingRight: '10px' }} className="fa fa-arrow-left" />{' '}
                  Alle Kontakte
              </Link>
              {/* <span onClick={()=>goToPreviousPath()}><i style={{ position: 'relative', top: '2px', paddingRight: '10px' }} className="fa fa-arrow-left" />{' '}Alle Kontakte</span> */}
            
            </div>
            <div className="TicketDetailLeftScroll">
              <div className="recentTicketList p10">
                <ul>

                  {/* <li className="active">
                    <div className="profile-info adminBenutzerOpen">
                      <h6 className="primary-val">{ userData?.Firstname || "" } { userData?.Lastname || ''}</h6>
                    </div>
                    <div className="recentTicketSmList">
                      <p><span className="recent-sm-list">
                        <Link to="#">{userData?.EMAIL}</Link>
                      </span></p>
                      <p><span className="recent-sm-list">
                        <Link to="#">{userData?.TEL}</Link>
                      </span></p>
                    </div>
                    </li> */ }

                { kundenLoading ? <div>loading...</div> 
                  :
                  kundenList.length>0 ? 
                  kundenList.map((kunden:any, idx:any) =>
                    <React.Fragment key={idx}>
                    <li key={idx} className={kunden.id == userId ? "active" : ""}>
                      <Link to={`/kontakte-detail/${kunden.id}?page=${params.page}`}>
                        <div className="profile-info adminBenutzerOpen">
                          <h6 className="primary-val">{ kunden['fields'][0]['value'] || "" } { kunden['fields'][1]['value'] || ''}</h6>
                        </div>
                        <div className="recentTicketSmList">
                          <p>
                            <span className="recent-sm-list">
                              <a href={`tel:${(kunden['contactFields'].length>0?kunden['contactFields'][0]['value']:'') || ""}`}>{(kunden['contactFields'].length>0?kunden['contactFields'][0]['value']:'') }</a>
                            </span>
                          </p>
                        </div>
                      </Link>
                    </li>
                    </React.Fragment>
                  ):null
                }
                </ul>
              </div>
            </div>
          </div>
          <div className="ticketcolum center">
            <div className="TicketcolumCenterScroll">
              <div className="form-page">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="media Kontakte_company_logo">
                        <div className="mediaImg font13">AS </div>
                        <div className="media-body">
                          <h5 className="mt-1 mb-0">
                            { userData?.Firstname || "" } { userData?.Lastname || ''}
                          </h5>
                          <p>{userData?.AddressGroup}</p>
                        </div>
                      </div>

                      <div className="contactInfoListTxt mt-3 pt-3" style={{ borderTop: '1px solid #eee' }}>
                        <p>
                          Telefon <span>{userData?.TEL || "-"}</span>
                        </p>
                        <p>
                          Mobile <span>{userData?.MOBILE || "-"}</span>
                        </p>
                        <p>
                          E-Mail <span>{userData?.EMAIL || "-"}</span>
                        </p>
                        <p>
                          Web <span>{userData?.HP || "-"}</span>
                        </p>
                        <p>
                          Fax <span>{userData?.fax || "-"}</span>
                        </p>
                        <p>
                          Zusatz <span>-</span>
                        </p>
                        <p>
                          Strasse Nr <span>{userData?.Street || '-'}</span>
                        </p>
                        <p>
                          PLZ <span>{userData?.ZIP || '-'}</span>
                        </p>
                        <p>
                          Ort <span>{userData?.City || '-'}</span>
                        </p>
                        <p>
                          Postfach <span>-</span>
                        </p>
                        <p>
                          Land <span>Schweiz</span>
                        </p>
                        {/*<p>
                          Kontakt-Besitzer
                          <span>{ userData?.Firstname || "" } { userData?.Lastname || ''} </span>
                        </p>*/}
                        <p>
                          Kontakt-Erstellungsdatum
                          <span>
                            { userData?.hasOwnProperty('dateCreated') ? format(new Date(userData?.dateCreated), 'dd.MM.yyyy') : '-' }
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="ticketcolum right">
            <div className="mainWrapperBody">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <Tabs>
                    <TabList>
                      <Tab>Übersicht</Tab>
                      <Tab>Kontaktpersonen</Tab>
                      <Tab>Weitere Adressen</Tab>
                      {/* <Tab>Zeit Eintrag</Tab> */}
                      {/* <Tab>Produkte</Tab>*/ } 
                      <Tab>Anhänge</Tab>
                      <Tab>Bemerkung</Tab>

                      {/*<span className="tabRightdrop dropdown active">
                        <Link
                          to="#"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <i className="r90 fa fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <Link to="" className="dropdown-item">
                            <i className="fa fa-pencil mr-2" /> Editieren
                          </Link>
                          <Link to="" className="dropdown-item">
                            <i className="fa fa-arrows mr-2" />
                            Als Endnutzer hinzufügen
                          </Link>
                          <Link to="" className="dropdown-item">
                            <i className="fa fa-clock-o mr-2" />
                            Folgen
                          </Link>
                          <Link to="" className="dropdown-item">
                            <i className="fa fa-ban mr-2" />
                            Spam markieren
                          </Link>
                          <Link to="" className="dropdown-item">
                            <i className="fa fa-trash mr-2" />
                            Löschen
                          </Link>
                          <Link to="" className="dropdown-item">
                            <i className="fa fa-ban mr-2" />
                            Spam markieren
                          </Link>
                        </div>
                      </span>*/}

                    </TabList>

                    <TabPanel>
                      <div className="ticket_contact_info_scroll">
                        <div className="overAllRslt">
                          <ul>
                            <li>
                              <div className="tktBase">
                                <p>
                                  {totalTkts} <span>Alle Tickets</span>
                                </p>
                              </div>
                              <div className="tktBase">
                                <p>
                                  {uberFallige} <span>Überfällige Tickets</span>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <Tabs>
                          <div className="uershit-active-tab">
                            <TabList>
                              <Tab>{allTkts.length} Alle</Tab>
                              <Tab>{loading ? null : 
                                opentkts.length
                              } Offen</Tab>
                              <Tab>{loading ? null : 
                                inprogresstkts.length
                              } In Arbeit</Tab>
                              <Tab>{loading ? null : 
                                closedtkts.length
                              } Geschlossen</Tab>
                              <Tab>{ loading ? null : 
                                chargedtkts.length
                              } Verrechnet</Tab>
                            </TabList>
                          </div>
                          <TabPanel>
                            <div className="activity_timeline uershit p20">
                              <ul>
                              { loading ? null : 
                                allTkts.length>0 ? 
                                allTkts.map((tkt:any, idx:any) =>
                                <React.Fragment key={idx}>
                                <li>
                                <div className="Htline_item ml-3">
                                  <div className="Htline_item_cont">
                                    <i className="lnr lnr-clock" />
                                  </div>
                                  <div className="H_timeline_cont">
                                    <h5 className="font15 mb-1">
                                      <Link to={`/tickets-detail/${ tkt.id }`}>#{ tkt.id } - { tkt.title }</Link>
                                    </h5>
                                    <p>
                                      Oneix <span className="dotSep">.</span> { format(new Date(tkt.dateCreated), 'dd.MM.yyyy')}
                                      <span className="dotSep">.</span> { tkt.text }
                                    </p>
                                  </div>
                                  <div className="profile-info">
                                    <h6 className="primary-val">
                                      <span className="ph_container">AS</span>
                                    </h6>
                                  </div>
                                </div>
                            </li>
                            </React.Fragment>
                                )
                                : null
                              } 
                              
                              </ul>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="activity_timeline uershit p20">
                              <ul>
                              { loading ? null : 
                                opentkts.length>0 ? 
                                opentkts.map((tkt:any, idx:any) =>
                                <React.Fragment key={idx}>
                                <li>
                                <div className="Htline_item ml-3">
                                  <div className="Htline_item_cont">
                                    <i className="lnr lnr-clock" />
                                  </div>
                                  <div className="H_timeline_cont">
                                    <h5 className="font15 mb-1">
                                      <Link to={`/tickets-detail/${ tkt.id }`}>#{ tkt.id } - { tkt.title }</Link>
                                    </h5>
                                    <p>
                                      Oneix <span className="dotSep">.</span> { format(new Date(tkt.dateCreated), 'dd.MM.yyyy')}
                                      <span className="dotSep">.</span> { tkt.text }
                                    </p>
                                  </div>
                                  <div className="profile-info">
                                    <h6 className="primary-val">
                                      <span className="ph_container">AS</span>
                                    </h6>
                                  </div>
                                </div>
                            </li>
                            </React.Fragment>
                                )
                                : null
                              } 
                              </ul>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="activity_timeline uershit p20">
                              <ul>
                              { loading ? null : 
                                inprogresstkts.length>0 ? 
                                inprogresstkts.map((tkt:any, idx:any) =>
                                  <React.Fragment key={idx}>
                                      <li>
                                        <div className="Htline_item ml-3">
                                          <div className="Htline_item_cont">
                                            <i className="lnr lnr-clock" />
                                          </div>
                                          <div className="H_timeline_cont">
                                            <h5 className="font15 mb-1">
                                              <Link to={`/tickets-detail/${ tkt.id }`}>#{ tkt.id } - { tkt.title }</Link>
                                            </h5>
                                            <p>
                                              Oneix <span className="dotSep">.</span> { format(new Date(tkt.dateCreated), 'dd.MM.yyyy')}
                                              <span className="dotSep">.</span> { tkt.text }
                                            </p>
                                          </div>
                                          <div className="profile-info">
                                            <h6 className="primary-val">
                                              <span className="ph_container">AS</span>
                                            </h6>
                                          </div>
                                        </div>
                                    </li>
                                    </React.Fragment>
                                )
                                : null
                              }
                              </ul>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="activity_timeline uershit p20">
                              <ul>
                              { loading ? null : 
                               Array.isArray(closedtkts) ? 
                                closedtkts.map((tkt:any, idx:any) =>
                                <li key={idx}>
                                <div className="Htline_item ml-3">
                                  <div className="Htline_item_cont">
                                    <i className="lnr lnr-clock" />
                                  </div>
                                  <div className="H_timeline_cont">
                                    <h5 className="font15 mb-1">
                                      <Link to={`/tickets-detail/${ tkt.id }`}>#{ tkt.id } - { tkt.title }</Link>
                                    </h5>
                                    <p>
                                      Oneix <span className="dotSep">.</span> { format(new Date(tkt.dateCreated), 'dd.MM.yyyy')}
                                      <span className="dotSep">.</span> { tkt.text }
                                    </p>
                                  </div>
                                  <div className="profile-info">
                                    <h6 className="primary-val">
                                      <span className="ph_container">AS</span>
                                    </h6>
                                  </div>
                                </div>
                            </li>
                                )
                                : null
                              }
                              </ul>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="activity_timeline uershit p20">
                              <ul>
                              { loading ? null : 
                                Array.isArray(chargedtkts) ? 
                                chargedtkts.map((tkt:any, idx:any) =>
                                <li key={idx}>
                                <div className="Htline_item ml-3">
                                  <div className="Htline_item_cont">
                                    <i className="lnr lnr-clock" />
                                  </div>
                                  <div className="H_timeline_cont">
                                    <h5 className="font15 mb-1">
                                      <Link to={`/tickets-detail/${ tkt.id }`}>#{ tkt.id } - { tkt.title }</Link>
                                    </h5>
                                    <p>
                                      Oneix <span className="dotSep">.</span> { format(new Date(tkt.dateCreated), 'dd.MM.yyyy') }
                                      <span className="dotSep">.</span> { tkt.text }
                                    </p>
                                  </div>
                                  <div className="profile-info">
                                    <h6 className="primary-val">
                                      <span className="ph_container">AS</span>
                                    </h6>
                                  </div>
                                </div>
                            </li>
                                )
                                : null
                              }
                              </ul>
                            </div>
                          </TabPanel>
                        </Tabs>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="ticketcolum_right_scroll">
                        <div className="p20">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="oraganizationInfo">
                                <ul>
                                  <li>
                                    <div className="profile-info">
                                      <span>
                                        <Link to={`/addKontaktePerson?tid=${userId}`} className="rndbtn float-left mr-3">
                                          +
                                        </Link>
                                      </span>
                                      <span className="profile-info">
                                        <h6 className="primary-val pl-3 pt-2">Kontaktpersonen</h6>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p20">
                          <div className="row">
                            <div className="col-lg-12">
                              <ul className="KontaktePersonListingScroll">
                                <li>
                                  <table className="table m-0">
                                    <tbody>
                                      
                                        {/* stt Contact Persons */}
                                        { loading ? null :
                                            Array.isArray(contactPersons)?
                                            contactPersons.map((cnt:any) =>
                                            <>
                                            <tr>
                                        <td width="5%">
                                          <div className="mediaIcon">
                                            {/* <span>{cnt['firstName'].charAt(0).toUpperCase()}{cnt['lastName'].charAt(0).toUpperCase()}</span>*/ }
                                            {cnt.firstname?.charAt(0).toUpperCase()}{cnt.lastname?.charAt(0).toUpperCase()}
                                          </div>
                                        </td>
                                        <td width="80%">
                                            <div className="custom_item">
                                              <h5>
                                                <Link to={`/UpdKontaktePerson/${cnt.id}`} className="mr-3">#{cnt.id}</Link>
                                                { cnt.salutation && <span className="font13 mr-3 fontNormal">{cnt.salutation}</span> }
                                                { cnt.title && 
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
                                                      cnt['contactFields'].length>0 ?
                                                      cnt['contactFields'].map((contact:any) => 
                                                        <li>
                                                          <Link to="#">{contact.value}</Link>
                                                        </li>
                                                      ) : null
                                                    }
                                                { cnt.default && 
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
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="ticket_contact_info_scroll">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="p20">
                              <div className="oraganizationInfo">
                                <ul>
                                  <li>
                                    <div className="profile-info">
                                      <span>
                                        <Link to={`/AddAusfuhrungsort?vid=${userId}`} className="rndbtn float-left mr-3">+</Link>
                                      </span>
                                      <span className="profile-info">
                                        <h6 className="primary-val pl-3 pt-2">Weitere Adressen</h6>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        <div className="col-lg-12">
                            <div className="p20">
                              <ul className="KontaktePersonListingScroll">
                                { loading ? null :
                                    Array.isArray(deliverAddresses) ? 
                                    deliverAddresses.map((delivery:any, idx:any) =>
                                    <>
                                <li>
                                  <table className="table m-0">
                                    <tbody>
                                      <tr>
                                        <td width="5%">
                                          <div className="mediaIcon">
                                            <span>{delivery.firstname?.charAt(0).toUpperCase()}{delivery.lastname?.charAt(0).toUpperCase()}</span>
                                          </div>
                                        </td>
                                        <td width="85%">
                                            <div className="custom_item">
                                              <h5>
                                                <Link to={`/UpdAusfuhrungsort/${delivery.id}`} className="mr-3">#{delivery.id}</Link>
                                                <span className="font13 mr-3 fontNormal">{delivery.addressLine}</span>
                                              </h5>
                                              <ul className="custom_breadcrumb">
                                              {delivery.city && <li>{delivery.city}</li> }
                                              {delivery.inactive && <li>inaktiv</li> }
                                              {delivery.firstname && <li>{delivery.firstname}</li> }
                                              {delivery.lastname && <li>{delivery.lastname}</li> }
                                              {delivery.street && <li>{delivery.street}</li> }
                                              {delivery.zip && <li>{delivery.zip}</li> }
                                              </ul>
                                            </div>
                                        </td>
                                        <td className="text-center" width="5%">
                                          <div className="mediaIcon">
                                            <Link to={`/UpdAusfuhrungsort/${delivery.id}`}>
                                              <span>
                                                <i className="fa fa-pencil" />
                                              </span>
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </li>

                                </>
                                    ) : null
                                  }   
                              </ul>
                              { /*
                              <div className="no-feeds">
                                <h1>Weitere Adressen</h1>
                              </div>
                              */ }
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>

                   {/* <TabPanel>
                      <div className="ticket_contact_info_scroll">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="no-feeds">
                              <h1>Keine Eintrag in die Zeitplanung in Kontakt</h1>
                              <p>
                                <span className="line80" />
                              </p>
                              <p>
                                Wenn Sie mehr erfahren möchten,{' '}
                                <Link to="" className="link pl-2">
                                  klicken Sie hier
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                            </div> 
                   </TabPanel> */}

                   {/* <TabPanel>
                      <div className="ticket_contact_info_scroll">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="no-feeds">
                              <h1>Keine Produkt mit Kontakt verknüpft</h1>
                              <p>
                                Zur Produkt-Neuverknüpfung klicken Sie bitte auf{' '}
                                <Link to="" className="link-blue mr-3 ml-3 rndbtn">
                                  +
                                </Link>{' '}
                                Symbol
                              </p>
                              <p>
                                <span className="line80" />
                              </p>
                              <p>
                                Wenn Sie mehr erfahren möchten,{' '}
                                <Link to="" className="link pl-2">
                                  klicken Sie hier
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
*/ }
                    <TabPanel>
                      <div className="ticket_contact_info_scroll">
                        <div className="row no-gutters">
                          <div className="col-lg-12">
                            <div className="p20">
                              <div className="oraganizationInfo">
                                <ul>
                                  <li style={{marginBottom:'0px;'}}>
                                    <div className="profile-info">
                                      <span>
                                        {/* <Link to="/addKontaktePerson" className="rndbtn float-left mr-3">
                                          +
                                        </Link> */}
                                      <a href="javascript:void(0)"  onClick={()=>{showFileUpload()}}  className="rndbtn float-left mr-3">
                                          +
                                        </a>
                                        
                                      </span>
                                      <span className="profile-info">
                                        <h6 className="primary-val pl-3 pt-2">Anhänge</h6>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-page product-form p20">
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
                                                      <th style={{width:'9%'}} className="text-left">Icon/Thumbnail </th>
                                                      <th style={{width:'9%'}} className="text-left">Name</th>
                                                      <th style={{width:'9%'}} className="text-right">Erstellungsdatum</th>
                                                      <th style={{width:'9%'}} className="text-left">Aktion</th>
                                                    </tr>
                                                </thead>
                                                  <tbody>
                                                    { loading ? null :  
                                                      Array.isArray(userData['files']) ?
                                                        userData['files'].map((file:any, idx:any) => 
                                                        <tr>
                                                        <td width="9%" className="text-left">
                                                          <div className="docImg">
                                                            { ['png','jpg','jepg','gif','eps','svg','tif','tiff'].indexOf(getType(file.filename))>-1 && <img src="/assets/images/image.png" alt="" /> }
                                                            { getType(file.filename) === 'pdf' && <img src="/assets/images/pdf.png" alt="" /> }
                                                            { getType(file.filename) === 'xlsx' && <img src="/assets/images/excel.png" alt="" /> }
                                                            { getType(file.filename) === 'docx' && <img src="/assets/images/word.png" alt="" /> }
                                                          </div>
                                                        </td>
                                                        <td width="9%" className="text-left">
                                                          { file.description_DE }
                                                        </td>
                                                        <td width="9%" className="text-right">
                                                        {file.dateCreated?format(new Date(file.dateCreated),'dd.MM.yyyy'):''}
                                                        </td>
                                                        <td width="9%" className="text-left">
                                                          {/* <a href={`/${file.filename}`} target="_blank" className="btn-theme-white btn-sm mr-2">
                                                            <i className="lnr lnr-eye" />
                                                          </a> */}
                                                          <button onClick={()=>downloadFile(file.id)} className="btn-theme-white btn-sm">
																                        	<i className="lnr lnr-download" />
																                    	</button>
                                                          {/* <a href={`/${file.filename}`} download={`/${file.filename}`} className="btn-theme-white btn-sm">
                                                            <i className="lnr lnr-download" />
                                                        </a> */}
                                                        </td>
                                                      </tr>
                                                        ) : null
                                                     }
                                                  </tbody>
                                              </table>
                                          </div>
                                          </li>
                                      </ul>
                                  </div>
                            </div>
                          </div>
                        </div>

                        {/*
                        <div className="no-feeds">
                          <h1>KeinGenehmigungen für ticket!</h1>
                          <p>
                            Genehmigungen neu hinzufügen – Klick auf{' '}
                            <Link to="" className="link-blue mr-3 ml-3 rndbtn">
                              +
                            </Link>{' '}
                            Symbol
                          </p>
                          <p>
                            <span className="line80" />
                          </p>
                          <p>
                            Wenn Sie mehr erfahren möchten,{' '}
                            <Link to="" className="link pl-2">
                              klicken Sie hier
                            </Link>
                          </p>
                        </div>

                        */}
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="ticket_contact_info_scroll">

                        <div className="row">
                          <div className="col-lg-12">
                            <div className="media p20">
                              <div className="mediaImg font13">AS</div>
                              <div className="media-body ">
                                { loading ? <div>loading...</div> 
                                : <textarea disabled={!toEditCnt ? true : false} name="Comments" onChange={(e)=>handleChangeAll(e)} className="form-control ticketcolumTxtarea" defaultValue={userData.Comments} />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ticketcolum_right_nr_btns bt0">
                          <div className="row">
                            <div className="col-lg-12 text-right ">
                              { toEditCnt ?
                                <span className="btn-theme btn-sm mr-2" onClick={()=>handleUpdComments()}>Speichern</span>
                                : 
														    <span onClick={()=>handleToEditComment()} style={{cursor: 'pointer'}} className="btn-white btn-sm">bearbeiten</span>
													    }
                              {/* <span onClick={()=>handleToEdit()} style={{cursor: 'pointer'}} className="btn-white btn-sm">Abbrechen</span> */ }
                            </div>
                          </div>
                        </div>
                        <div className="p20"><h5>Popup Meldung</h5></div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="media p20">
                              <div className="mediaImg font13">AS</div>
                              <div className="media-body ">
                              { loading ? <div>loading...</div> 
                                : <textarea disabled={!toEditCntPopup ? true : false} name="CommentsPopup" onChange={(e)=>handleChangeAll(e)} className="form-control ticketcolumTxtarea" defaultValue={userData.CommentsPopup} />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ticketcolum_right_nr_btns bt0">
                          <div className="row">
                            <div className="col-lg-12 text-right">
                              { toEditCntPopup ?
                                <span className="btn-theme btn-sm mr-2" onClick={()=>handleUpdCommentsPopup()}>Speichern</span>
                              : 
                                <span onClick={()=>handleToEditCommentPopup()} style={{cursor: 'pointer'}} className="btn-white btn-sm">bearbeiten</span>
                              }
                              {/* <span onClick={()=>handleToEdit()} style={{cursor: 'pointer'}} className="btn-white btn-sm">Abbrechen</span> */}
                            </div>
                          </div>
                        </div>

                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//export default KontakteDetail;

function mapStateToProps(state: any) {
  console.log('State', state);
  const { common, messages } = state;
  return { common, messages };
}
export default connect(mapStateToProps)(KontakteDetail);
