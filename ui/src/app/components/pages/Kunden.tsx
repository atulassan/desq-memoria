import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getData, postData } from '../../services/main-service';
import { connect } from "react-redux";
import Header from '../shared/Header';
import { KUNDENLIST } from "../../redux/types";
// import Leftsidemenu from '../modules/Leftsidemenu';
import ReactPaginate from 'react-paginate';
import queryString from 'query-string';

export class Kunden extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      customer: true,
      customers: [],
      offset: 0,
      dataPerPage: [],
      totalItems: 0,
      pageCount: 0,
      perPage: 20,
      currentPage:location.search.slice(6) || 1,
      stype: '',
      showData: 'Alle Kontakte (All)',
      totalpages: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleChangepagesize = this.handleChangepagesize.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  async handleChangepagesize(event: any) {
    //alert();
    await console.log('customer----3');
    await this.setState({ perPage: event.target.value });
    await console.log(event.target.value);
    await console.log(this.state.perPage);
    let result: any = await getData(`/customer/all/?customerType=${this.state.stype}&perPage=${event.target.value}`);

    console.log('------------------------------customer3 data------------------');
    console.log(result);
    console.log(this.state.stype);
    console.log('------------------------------customer3 data------------------');
    this.setState({
      loading: false,
      customers: result.data.hasOwnProperty('response') ? result.data.response : [],
      totalItems: result.status == 200 ? result.data.response.totalItems : '',
      pageCount: result.status == 200 ? result.data.response.pageCount : '',
      perPage: result.status == 200 ? result.data.response.perPage : '',
      currentPage: result.status == 200 ? result.data.response.startPage : 0
    });
  }

  async handlePageClick(e: any) {

    let { history, match } = this.props;

    this.setState({ loading: true });
    let selectedPage = e.selected;

    history.push(`${match.path}?page=${selectedPage + 1}`);

    this.setState({ currentPage: selectedPage + 1 }, () => { this.fetchItems(); });
    
  }

  /*
   ** pagination data check Function
   */
  async filterList(type: string | number) {
    // await console.log('type ID');
    await this.setState({ stype: type });
    // await console.log(type);
    // await console.log('stype', this.state.stype);
    await this.setState({
      showData: this.state.stype == '' ? 'Alle Kontakte (All)' : this.state.stype == 1 ? 'aktiv' : 'inaktiv'
    });

    let result: any = await getData(`/customer/all/?customerType=${type}&perPage=${this.state.perPage}`);

    console.log('------------------------------customer2 data------------------');
    console.log(result);
    console.log(this.state.stype);
    console.log('------------------------------customer2 data------------------');
    //this.setState({loading: false, customers: (result.data.hasOwnProperty('response')) ?  result.data.response : [] });
    this.setState({
      loading: false,
      // customers: result.data.hasOwnProperty('response') ? result.data.response : [],
      customers: type === '' ? this.state.customers : type === 1 ? this.state.customers.filter((item: any) => item.inactive !== false) : this.state.customers.filter((item: any) => item.inactive === false),
      totalItems: result.status == 200 ? result.data.response.totalItems : '',
      pageCount: result.status == 200 ? result.data.response.pageCount : '',
      perPage: result.status == 200 ? result.data.response.perPage : '',
      currentPage: result.status == 200 ? result.data.response.startPage : 0
    });

    // const { dataPerPage } = this.state;
    // let tempData=dataPerPage.slice();
    // type === ''
    //   ? this.setState({dataPerPage:tempData})
    //   : type === 1
    //   ? this.setState({ tempData: tempData.filter((item: any) => item.inactive === false) })
    //   : this.setState({ tempData: tempData.filter((item: any) => item.inactive !== false) });
  }
  /*
   ** Customer Remove Function
   */
  async handleClick(event: any, customer: any) {
    console.log('customer ID');
    console.log(customer);
    if (customer != '' && customer != undefined && customer != null) {
      let result: any = await postData(`/customer/remove/${customer}`, []);
      console.log(result);
      if (result.status === 200) {
        console.log(result.data.message);
      } else {
        console.log(result.data.message);
      }
    } else {
      console.log('Invalid Id');
    }
  }

  async fetchItems() {
    let { perPage, currentPage } = this.state;
    let params:any = queryString.parse(this.props.location.search);
    console.log("Current Page++++++++++++++", currentPage);
    console.log("params+++++++++++", params);
    perPage = perPage ? perPage : 20;
    let result: any = await getData(`/memoria/getMethod?url=/Addresses/getAddressesPaging&PageNumber=
    ${currentPage - 1}&PageSize=${perPage}&Fields=Firstname&Fields=Lastname&Fields=Street&Fields=ZIP&Fields=city&Fields=AddressGroup&IncludeDetails=true`);

    const data = result.data;

    if(data.objects.length) {

      let { history, match } = this.props;
      history.push(`${match.path}?page=${currentPage}`);

       this.setState({
          loading: false,
          customers: data.objects,
          dataPerPage:  data.objects,
          totalItems: data.totalObjects,
          pageCount:data.totalObjects,
          totalPages: data.totalPages,
        });
        this.props.dispatch({
          type: KUNDENLIST,
          payload: { kundenlist: data.objects.slice(10, data['objects'].length) },
        });
      } else {
       this.setState({ loading: false });
      }
  }

  render() {
    let { loading, dataPerPage, totalPages, currentPage }: any = this.state;

    console.log( "Customers Listing+++++++++++", dataPerPage );

    return (
      <div>
        {/*<Leftsidemenu /> */}

        <Header linkPage={`/addkontakte`} />

        <div className="mainWrapper">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="mainWrapperBody ticketsListingScroll">
                <div className="requestqueuecontainer">
                  <div className="row no-gutters mt-2 mb-2">
                    <div className="col-lg-12">
                      <span className="dropdown">
                        <i
                          style={{ position: 'relative', top: '2px', paddingRight: '10px', color: '#f6b241' }}
                          className="fa fa-star"
                        />
                        <button
                          className="btn pl-0"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          {this.state.showData}{' '}
                          <i
                            style={{ position: 'relative', left: '5px', top: '1px' }}
                            className="lnr lnr-chevron-down"
                          />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          {/* <span className="dropSearch"><input type="text" placeholder="Suchen" /></span> */}
                          <div className="dropMinHeight">
                            {/* <Link to="#"  className="dropdown-item" onClick={() => this.props.stype('')}>alle</Link> */}
                            <Link to="#" className="dropdown-item" onClick={() => this.filterList('')}>
                              Alle Kontakte{' '}
                            </Link>
                            <Link to="#" className="dropdown-item" onClick={() => this.filterList(1)}>
                              aktiv Kontakte
                            </Link>
                            <Link to="#" className="dropdown-item" onClick={() => this.filterList(2)}>
                              inaktiv Kontakte
                            </Link>
                          </div>
                          {/* <Link to="#" className="link text-center drop-btn" ><i style={{position: 'relative', top: '1px', marginRight: '5px'}} className="lnr lnr-plus-circle" /> Spezifische Ansicht hinzufügen</Link> */}
                        </div>
                      </span>
                    </div>
                    <div className="col-lg-6 text-right" style={{ display: 'none' }}>
                      <ul className="helpFilterRight">
                        <li className="dropdown">
                          <button
                            className="btn "
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <i
                              className="fa fa-ellipsis-v"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Voreinstellungen Anzeigen"
                            />
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to="" className="dropdown-item mb-2" style={{ borderBottom: '1px solid #eee' }}>
                              <i
                                style={{
                                  position: 'relative',
                                  top: '1px',
                                  marginRight: '3px',
                                  fontSize: '12px !important'
                                }}
                                className="lnr lnr-book"
                              />{' '}
                              Kontakte von Duplikaten befreien
                            </Link>
                            <div className="helpFilterRightSelect">
                              <div className="form-group">
                                <label>Einträge pro Seite</label>
                                <select
                                  className="form-control chosen-select"
                                  onChange={(event) => {
                                    this.handleChangepagesize(event);
                                  }}
                                >
                                  <option value={10}>10</option>
                                  <option value={20}>20</option>
                                  <option value={30}>30</option>
                                  <option value={40}>40</option>
                                  <option value={50}>50</option>
                                  <option value={60}>60</option>
                                </select>
                              </div>
                              <div className="form-group">
                                {/* <Link to=""  className="btn-theme btn-sm">Übernehmen</Link> */}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tickets helpList">
                    <ul>
                      <li>
                        <table className="table m-0">
                          <tbody>
                            {loading ? (
                              <span>Loading...</span>
                            ) : dataPerPage.length > 0 ? (
                              dataPerPage.map((customer: any, i: number) => {
                                let { fields } = customer;

                                let firstName = fields[0]?.value || '';
                                let lastName = fields[1]?.value || '';
                                
                                return (
                                  <tr key={i}>
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
                                          <Link to={`/kontakte-detail/${customer?.id}?page=${currentPage}`}>{`${firstName} ${lastName}`}</Link>
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
                                            <Link to={`/kontakte-detail/${customer?.id}?page=${currentPage}`} className="link">
                                                #{customer?.id}
                                            </Link>
                                          </li>
                                          {/* <li>
                                            <Link to="#">{street}</Link>
                                          </li>
                                          <li>
                                            <Link to="#">{Zip}</Link>
                                          </li>
                                          <li>
                                            <Link to="#">{city}</Link>
                                          </li>
                                          <li>
                                            <Link to="#" className="link">
                                              E-Mail
                                            </Link>
                                          </li>
                                          <li>
                                            <Link to="#">Telefon</Link>
                                          </li>
                                          <li>
                                            <Link to="#">Mobile</Link>
                                          </li>
                                          <li>
                                            <Link to="#">Web</Link>
                                          </li>
                                          <li>
                                            <Link to="#">{AddressGroup}</Link>
                                          </li> */ }
                                          { customer['fields'] ?
                                            customer['fields'].map((field:any, idx:any) => 
                                              <li key={idx}>
                                                { field.hasOwnProperty('value') && field.value }   
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
                                        { /*<Link
                                          to="#"
                                          onClick={(event) => {
                                            this.handleClick(event, customer?.customerId);
                                          }}
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          data-original-title="löschen"
                                        >
                                          <i className="lnr-trash" />
                                        </Link>
                                        <Link
                                          to="/add-ticket"
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          data-original-title="Ticket hinzufügen"
                                        >
                                          <i className="lnr-file-add" /> 
                                        </Link>*/ }
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                              <p>Not Found</p>
                            )}
                          </tbody>
                        </table>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pagiNation">
                {/* Einträge gesamt <Link to="#"><i className="lnr lnr-chevron-left" /></Link> <span>1 - 1</span> <Link to="#"><i className="lnr lnr-chevron-right" /></Link> */}
                { totalPages && (
                  <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(event: any) => this.handlePageClick(event)}
                    containerClassName={'pagination pagination-sm'}
                    activeClassName={'active'} 
                    forcePage={currentPage - 1}
                  />
                )}
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
export default connect(mapStateToProps)(Kunden);
