import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { getData } from '../../services/main-service';
import { postData } from "../../services/main-service";
//import Alert from '../shared/Alert'
import PropTypes from 'prop-types';
import { format,parseISO } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SET_MESSAGE } from "../../redux/types";
import { connect } from 'react-redux';
import de from 'date-fns/locale/de';
import { getTimeShow, getHoursTime, getMinTime } from "../../utils"


function SubTask(props: any) {
    console.log(props, 'this is from sub task');
    const { setSubTask, subTask, cid, timeEntry, setTimeEntry,setAufgaben } = props;
    const [taskShow, setTaskShow] = useState(true);
    const [subTaskList, setSubTaskList] = useState<any | []>([]);
    const [date, setDate] = useState(new Date());
    const [taskData, setTaskData] = useState<any | {}>({});
    const [userList, setUserList] = useState<any | []>([]);
    const [edate, setEdate] = useState(new Date());
    const [ticketsData, setTickets] = useState<any | []>([]);
const [showtabicon, setshowtabicon] = useState(2);
  


    useEffect(() => {
        async function fetchData() {
            await setTaskShow(subTask);
            console.log(taskShow);
            console.log(timeEntry);
            let resultTicket:any = await getData(`/memoria/getMethod?url=/Tickets/getTicketByID&Fields=Firstname&Fields=Lastname&IncludeDetails=true&ID=${cid}`);
			await setTickets(resultTicket.data);
            //console.log(ttime);
            let resultTask: any = await getData(`/memoria/getMethod?url=/TicketSteps/getTicketSteps&OrderBy=ID DESC&TicketID=${cid}`);
            console.log(resultTask.data);
            let subTaskFullData: any = [];
            for (let i = 0; i < resultTask.data.length; i++) {
                let resultUser1: any = await getData(`/memoria/getMethod?url=/Users/getUsersByID&Fields=Firstname&Fields=Lastname&ID=${resultTask.data[i].userID}`);
                resultTask.data[i]['user'] = await resultUser1.data;
                subTaskFullData.push(resultTask.data[i]);
            }
            setSubTaskList(resultTask.data);
            let resultuser: any = await getData(`/memoria/getMethod?url=/Users/getUsersAll&Fields=Firstname&Fields=Lastname`);
            setUserList(resultuser.data.objects);
           


        }
        fetchData();
        // if(timeEntry===false || cid!==undefined)
        // {
        //     fetchData();
        // }
    }, [cid,timeEntry]);
    
     console.log("subTask User   list------->", userList);
    /* DEATEPICKER SETUP*/

    const handledateChange: Function = (date: any) => {
        setDate(date);
        

    }
    const handledateChange1: Function = (date: any) => {
        setEdate(date);
        

    }
    function taskAll(e: any) {
        let taskdata = taskData;
        let { name, value } = e.target;
        taskdata[name] = value;
        setTaskData(taskdata);

    }
    function dateCheck(d1:any,d2:any)
    {
    
    let diffDays =0;
    if (new Date(d1) < new Date(d2)) 
    {
        diffDays=1;
    }
    return diffDays;
    }
    async function taskSubmit() {
         let sData = taskData;
        // let data1 = [];
        let d1 = await format(new Date(parseISO(ticketsData.followUpDate)), 'MM/dd/yyyy');
        let d2 = await format(new Date(date), 'MM/dd/yyyy');
        let diffDays:any = await dateCheck(d1,d2);
        //console.log(diffDays + " final data");
        if (!sData.hasOwnProperty('userID') || sData["userID"] === '') {
            // sData["userID"] = 1;
            await props.dispatch({
                type: SET_MESSAGE,
                payload: { message: "Mitarbeiter wählen", variant: 'Error' },
              });
        }
        else if (!sData.hasOwnProperty('text') || sData["text"] === '') {
            await props.dispatch({
                type: SET_MESSAGE,
                payload: { message: "Text eingeben", variant: 'Error' },
              });
        }
        else{
            if(diffDays===1)
            {
                setshowtabicon(1);
            }
            else
            {
                subTaskSubmit("noupdate");
            }
        }
     }
     async function subTaskSubmit(condtionData: any) {
        await setshowtabicon(2);
        //console.log("setshowtabicon++++++++++++++++++++++++++++++++",showtabicon);
            let sData = taskData;
            let data1 = [];
                if (!sData.hasOwnProperty('etime') || sData["etime"] === '') {
                sData["etime"] = "00:00";
                }
                if (!sData.hasOwnProperty('status') || sData["status"] === '') {
                    sData["status"] = "Open";
                }
                if (!sData.hasOwnProperty('estHours') || sData["estHours"] === '') {
                    sData["estHours"] = 0;
                }
                if (!sData.hasOwnProperty('estMinutes') || sData["estMinutes"] === '') {
                     sData["estMinutes"] = 0;
                }
               
                //let selectEdate:any = await format(new Date(edate), 'dd.MM.yyyy')+' '+sData.etime+':00';
               let newDt=new Date(edate);
                newDt.setHours(sData.etime.split(":")[0]);
                newDt.setMinutes(sData.etime.split(":")[1]);
                newDt.setSeconds(0);
                //console.log("selectEdate++++++++++++",newDt);
               //console.log("selectEdate++++++++++++",new Date(newDt).toISOString());
               await delete sData.etime;
               sData["executionDate"]=new Date(newDt).toISOString() ;
               sData["id"] = 0;
               sData["ticketID"] = parseInt(cid);
               sData["charged"] = false;
               sData["date"] = new Date().toISOString();
               sData["followUp"] = true
               sData["followUpDate"] =new Date(date).toISOString();
               sData["goodwill"] = 0;
               sData["surcharge"] = 0;
               sData["userID"]=parseInt(sData["userID"]);
               sData["workDuration"] = 0;
               sData["estimadedWorkDuration"] = (sData.estHours *3600)+(sData.estMinutes*60);
               sData["note"] = "Note Test1";
             
                await data1.push(sData)
                console.log("taskData----final-------->", data1);
                await setSubTask(true);
                let result: any = await postData('/memoria/putMethod?url=/TicketSteps/setTicketSteps', data1);
                console.log("Sub task post result is ", result);
                if (result.status === 200) {
                    await setSubTask(true);
                    if (condtionData === "update") {
                        let uData =ticketsData;
                        uData["followUpDate"] = await new Date(date).toISOString();
                        let ccfData = [];
                        await ccfData.push(uData);
                       // console.log("ticket final data----ccfData-------->",ccfData);
                        let resultcc:any =await postData('/memoria/putMethod?url=/Tickets/setTickets', ccfData);
                        console.log("Ticket post result is",resultcc);
                        }
                        await props.dispatch({
                            type: SET_MESSAGE,
                            payload: { message: "Added successfully", variant: 'success' },
                          });
                    let gettaskList: any = await getData(`/memoria/getMethod?url=/TicketSteps/getTicketSteps&OrderBy=ID DESC&TicketID=${cid}`);
                    let subTaskFullData: any = [];
                    for (let i = 0; i < gettaskList.data.length; i++) {
                        let resultUser1: any = await getData(`/memoria/getMethod?url=/Users/getUsersByID&Fields=Firstname&Fields=Lastname&ID=${gettaskList.data[i].userID}`);
                        gettaskList.data[i]['user'] = await resultUser1.data;
                        subTaskFullData.push(gettaskList.data[i]);
                    }
                    setSubTaskList(subTaskFullData);
                    setTaskData({});
    
                }
               
       }
  return(
    <div>
        {subTask==false?(
        
        <div className="AufgabenCommentBox">
           {/* <Alert variant={alertMsg.variant} show={alertMsg.show} message={alertMsg.message}/> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ZeitEintragStatus">
                                <ul>
                                    <li>
                                        <label>Mitarbeiter wählen</label>
                                        <select  className="form-control custom-select"  name="userID" onChange={(e)=>taskAll(e)} >
                                        <option value=" "  >wählen</option>
                                            {userList.map((userList: any, key: any) =>
                                                <option value={userList.id} key={key} >
                                                    {userList.firstname != "" && userList.firstname != "" && userList.firstname != "" ? userList.firstname : ''} {userList.lastname != "" && userList.lastname != "" && userList.lastname != "" ? userList.lastname : ''}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>
                                        <label>Nachfassungsdatum</label>
                                        {/* <input type="text" className="form-control" defaultValue="12.01.2021" placeholder="" /> */}
                                        <DatePicker locale={de} selected={date} dateFormat="dd.MM.yyyy"  className="form-control" onChange={(date) => handledateChange(date)} />
                                    </li>
                                    <li>
                                        <label>Status</label>
                                        <select className="form-control custom-select" name="status" onChange={(e) => taskAll(e)}>
                                            <option value="Open"> Offen</option>
                                            <option value="In_Progress"> In Arbeit</option>
                                            <option value="Closed"> Geschlossen</option>
                                            <option value="Charged"> Verrechnet</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label>Ausführungsdatum</label>
                                        <DatePicker locale={de} selected={edate} dateFormat="dd.MM.yyyy" className="form-control" onChange={(date) => handledateChange1(date)} />
                                    </li>
                                    <li>
                                        <label>Ausführunszeit</label>
                                        <select className="form-control custom-select" name="etime" onChange={(e) => taskAll(e)}>
                                            
                                        {getTimeShow().map((timeshow: any, key: any) =>
														<option value={timeshow} key={key}  >{timeshow}</option>
													)}
                                            
                                        </select>
                                        {/* <input type="text" className="form-control" defaultValue="" placeholder="Ausführungsdatum" /> */}
                                        
                                    </li>
                                    <li> 
                                    <div className="col-lg-12">
                                        <label>Geschätztezeit</label>
                                            <div className="row">
                                                <div className="col-lg-6 pr-0">
                                                    <select className="form-control custom-select" name="estHours" >
                                                    {getHoursTime().map((gtimeShow: any, key: any) =>
														<option value={gtimeShow} key={key} >{gtimeShow}</option>
														)}
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 pr-0">
                                                    <select className="form-control custom-select" name="estHours" >
                                                    {getMinTime().map((mintimeShow: any, key: any) =>
														<option value={mintimeShow} key={key}>{mintimeShow}</option>
														)}
                                                    </select>
                                                </div>
                                            </div>
                                            </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="media p20">
                                <div className="mediaImg font13">AS</div>
                                <div className="media-body ">
                                    <textarea className="form-control ticketcolumTxtarea" name="text" placeholder="Text eingeben" onChange={(e) => taskAll(e)} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="ticketcolum_right_nr_btns">
                        <div className="row">
                            <div className="col-lg-12 text-right selectBtns">

                                <a href="javascript:void(0)" onClick={() => { taskSubmit() }} className="btn-theme mr-2 ">
                                    <span className="ml-2">Speichern</span>
                                </a>
                                <a href="javascript:void(0)" onClick={() => {
                                    setSubTask(!subTask);
                                }} className="btn-theme ">Abbrechen</a>
                            </div>
                        </div>
                    </div>
                </div>) : null}
            <div className="replySectionList rightContentScroll">
                <div className="subTaskScroll">
                {subTaskList.length > 0 ? subTaskList.map((el: any, key: any) =>
                
               
                    <div className="media p20 AgunenList">
                         {/* {console.log("el++++++++++++++++++++++++++++++++++++++++++++++",el)} */}
                        <div className="mediaImg font13">
                        {el.user.firstname?el.user.firstname?.slice(0, 1).toUpperCase():null} {el.user.lastname?.slice(0, 1).toUpperCase()}
                    <span className="indicateIcon green">
                                <i className="fa fa-reply" />
                            </span>
                        </div>
                        <div className="media-body">
                            <h5 className="mt-0 hint-title smTitle mt-2">
                                #{el.id}
                                {/*<span className="ml-3 mr-3">{el.date != "" && el.date != null && el.date != undefined ? format(new Date(el.date), 'dd.MM.yyyy') : ''}</span>*/}
                               
                                <span className="ml-3 mr-3">{el.followUpDate != "" && el.followUpDate != null && el.followUpDate != undefined ? <span>Nachfassungsdatum: <span className="font-dark">{format(new Date(el.followUpDate), 'dd.MM.yyyy')}</span></span> : ''}
                                </span>
                                <span className="mr-3">
                                    {el.status == 'Open' ? <span>Status: <span className="font-dark">Offen</span></span>:
                                    el.status == 'In_Progress' ? <span>Status : <span className="font-dark">In Arbeit</span></span>:
                                    el.status == 'Closed' ?<span>Status : <span className="font-dark">Geschlossen</span></span>:
                                    el.status == 'Charged' ?<span>Status : <span className="font-dark">Verrechnet</span></span> : ''}
                                    </span>
                                <span className="mr-3">{el.executionDate != "" && el.executionDate != null && el.executionDate != undefined ? <span>Ausführungsdatum: <span className="font-dark">{format(new Date(el.executionDate), 'dd.MM.yyyy')}</span></span> : ''}</span>
                                <span className="mr-3">{el.executionDate != "" && el.executionDate != null && el.executionDate != undefined ? <span>Ausführunszeit: <span className="font-dark">{format(new Date(el.executionDate), 'kk:mm')}</span></span>  : ''}</span>
                            </h5>
                            {el.text}
                            {/* {ticketsData.status != "Closed" && ticketsData.status != "Charged" ?
                            <div className="ZeitEintragEdit "> 
                            <a href="javascript:void(0)" onClick={() => {setAufgaben(el)
                                    setTimeEntry(!timeEntry);
                                }}>
                                <i className="lnr-pencil" />
                                </a>
                            </div>:null} */}
                            {ticketsData.status != "Closed" && ticketsData.status != "Charged" ?
                            <div className="ZeitEintrag ">
                                <a href="javascript:void(0)" onClick={() => {setAufgaben(el)
                                    setTimeEntry(!timeEntry);
                                }}>
                                    <i className="lnr-clock" />
                                </a>
                            </div>:null}
                        </div>
                    </div>
                ) : null}
                </div>
            </div>


            <div className="subtask-alert-popup" style={{display: showtabicon==1 ? 'block' : 'none' }}>
                        <div className="subtask-alert-popup-base">
                            <div className="notifoHeader">Achtung</div>
                            <div className="form-page">
                                <form>
                                    <div className="subtaskAlertContent">
                                        <p>Nachfassungsdatum liegt ausserhalb der Fälligkeit.</p>
                                    </div>
                                    <div className="subtaskAlertFooter">
                                        <div className="row">
                                            <div className="col-md-6">
                                            <a href="javascript:void(0)" onClick={() => {
										subTaskSubmit("update");}} className="btn-theme btn-md">Ja, überschreiben</a>
                                            </div>
                                            <div className="col-md-6 text-right">
                                            <a href="javascript:void(0)" onClick={() => {
										setshowtabicon(2);}} className="btn-theme btn-md">Abbrechen</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </div>


    )


}
SubTask.propTypes = {
    cid: PropTypes.string,
    subTask: PropTypes.bool,
    setSubTask: PropTypes.func,
    setTimeEntry: PropTypes.func,
    timeEntry: PropTypes.bool,
    setAufgaben:PropTypes.func
};
//export default SubTask;
const mapStateToProps = (state: any) => {
	console.log('loggedin', state)
	return {
	  isAuthenticated: state.client.isLoggedIn,
	//   user: state.client,
	  messages: state.messages
	}
  };
  
export default connect(
	mapStateToProps
  )(SubTask)