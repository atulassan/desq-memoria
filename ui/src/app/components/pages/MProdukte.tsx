import React ,{Component, Fragment}from 'react';
//import { Link } from 'react-router-dom';
//import Leftsidemenu from '../modules/Leftsidemenu';
import { getData } from "../../services/main-service";
import Header from '../shared/Header';
import { flatListToTreeViewData, priceFormat } from "../../utils"
import { format, parseISO } from 'date-fns';
import ModalPopup from '../modules/ModalPopup';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class MProdukte extends Component<any, any> {

	constructor(props: any) {
		super(props); 
		this.state = {
			loading: true, 
			categories: [],
			productVariants: [],
			productDesignation: "",
			productDescription: "",
			productLoading:false,
			id: "",
			showModal: false,
			//tempCats: categories
		}
		this.handleProductList = this.handleProductList.bind(this);
		this.handleReLoadProduct =  this.handleReLoadProduct.bind(this);
		this.handleLoadProduct =  this.handleLoadProduct.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}



	componentDidMount() {
		this.fetchItems();
		//window.addEventListener('load', this.handleLoad);
	}

	/*componentDidUpdate(prevProps:any, prevState:any) {
		if (this.props.id !== prevProps.id) {
			this.handleLoad();
		}
	}*/

	handleProductList(productID:any) {
		console.log(productID);
	}
	
	async handleReLoadProduct() {
		await this.setState({ productLoading: true});
		//this.fetchItems();
		let { categories } = this.state;
		console.log('Handle Listing', categories);
		await this.setState({ productLoading: false, categories: categories });
	}

	async fetchItems() {
		//let { products }=  this.state;
		let getCategories:any = await getData(`/memoria/getMethod?url=/Categories/getCategoriesAll`);
		let getCats:any = (getCategories.status === 200 && getCategories.data.length > 0) ? getCategories.data : [];
		console.log('Categories', getCategories);
		let nestedCats:any = await flatListToTreeViewData(getCats);
		console.log("Nested cats", nestedCats);
		//let getProducts:any = await getData(`/memoria/getMethod?url=/Products/getProductByCategoryID&CategoryID=102`);
		await nestedCats.forEach(async (category:any, idx:any) => {
			if(category.hasOwnProperty('children')) {
				//console.log(`${category} ->`, category.children);
			await category.children.forEach(async (childCat:any, idc:any) => {
					let childProducts:any = await getData(`/memoria/getMethod?url=/Products/getProductByCategoryID&CategoryID=${childCat.id}`);
					nestedCats[idx].children[idc]['products'] = (childProducts.status === 200 && childProducts.data.length > 0) ?  childProducts.data : [];
				});
			}
		});
		await this.setState( {categories: nestedCats } );
		console.log("Static Categories with Products", nestedCats);
		setTimeout(()=>this.setState( { loading: false } ),3000)
		//await this.setState( { loading: false } );
	}
	
	async handleLoadProduct(product:any) {
		console.log("Product Data", product);
		let {productDesignation, productDescription, productVariants, id } = this.state;
		productVariants = product.productVariants;
		productDesignation = product.name_DE;
		productDescription = product.description_DE;
		id = product.id;
		await this.setState({productVariants: productVariants, productDesignation: productDesignation, productDescription: productDescription, id: id});
	}	

	handleShowModal() {
		this.setState({showModal: true});		
	}

	handleClose(val:any) {
		console.log(val);
		this.setState({showModal: false});		
	}

	render() {

	let { categories, loading, productVariants, productDesignation, productDescription, id, showModal, handleReLoadProduct} = this.state;	

	//console.log('catgories', categories);	
	//console.log('product Variants', productVariants);
	//console.log('product Name', productDesignation);
	//console.log('product Descipt', productDescription);

  	return(
  		<div>
			<Header/>
			<div className="mainWrapper pl-0">
				<div className="mainWrapperBody">
				  	<div className="setting-left">
				  		<div className="setting-left-title">
		                      Produkte
	                    </div>
	                    <div className="setting-search psearch">
	                      <input type="text" placeholder="Suchen" className="form-control" />
	                    </div>
	                    <div className="setting-left-scroll productAccordionScroll">
							<Accordion className="productAccordion" allowZeroExpanded>
								{ loading ? <div>Loading...</div> :
								categories ? 
								(
									categories.map((category:any, ia:any) => 
									<Fragment key={ia}>
										<AccordionItem>
											<AccordionItemHeading>
												<AccordionItemButton>
													{category.name_DE}
												</AccordionItemButton>
											</AccordionItemHeading>
											{
												category.hasOwnProperty('children') ?
													<AccordionItemPanel>
														<Accordion allowZeroExpanded>
															{
																category.children.map((childCat:any, ib:any) =>
																<Fragment key={ib}>
																	<AccordionItem>
																	<AccordionItemHeading onClick={this.handleReLoadProduct}>
																		<AccordionItemButton>
																			{childCat.name_DE}
																			{/*console.log('Listing Products', childCat, childCat['products'])*/}
																		</AccordionItemButton>
																	</AccordionItemHeading>
																	{ handleReLoadProduct ? <div>Loading....</div> :
																		childCat['products'] &&
																		<AccordionItemPanel>
																			<Accordion>
																				{
																					childCat['products'].map((product:any, ic:any) => {
																						return (
																							<Fragment key={ic}>
																								<AccordionItem className="no-arrow">
																									<AccordionItemHeading onClick={(event)=>this.handleLoadProduct(product)}>
																										<AccordionItemButton>
																											{product.name_DE}
																										</AccordionItemButton>
																									</AccordionItemHeading>
																								</AccordionItem>
																							</Fragment>
																						)
																					}
																					)
																				}
																			</Accordion>
																		</AccordionItemPanel>
																	}
																	</AccordionItem>
																</Fragment>
																)
															}
														</Accordion>
										  			</AccordionItemPanel>
												 : null
											}
									</AccordionItem>
									</Fragment>
									)
								): null	
								}  
							</Accordion>
	                    </div>
	                </div>

		            <div className="setting-right">
						<div className="setting-right-title">
						    <div className="row">
							    <div className="col-lg-12">
								{ id && <><strong>#{id}</strong> - {productDesignation && productDesignation} </> }
							    </div>
						    </div>
						</div>
						<div className="Setting-right-content bt1px">
						    
						    	<Tabs>
							        <TabList className="TicketInfoTabs nav-tabs">
							            <Tab>Beschreibung</Tab>
							            <Tab>Verkaufs Varianten</Tab>
							        </TabList>
									<TabPanel>
										<div className="row no-gutters">
											<div className="col-lg-9 col-md-9">
												<div className="form-page product-form p20">
													<form>
													{ /* id && <div className="row mb-3">
												  			<div className="col-lg-2">
												  				<div className="form-group">
																  <label><strong>#{id}</strong></label>
																</div>
												  			</div>
												  			<div className="col-lg-10">
												  				<div className="form-group">
																  #{id}
																</div>
															</div>
												  		</div>
													*/ }
														<div className="row mb-3">
												  			<div className="col-lg-2">
												  				<div className="form-group">
																  <label>Bezeichnung</label>
																</div>
												  			</div>
												  			<div className="col-lg-10">
												  				<div className="form-group">
																  <input type="text" className="form-control" name="" value={productDesignation && productDesignation} defaultValue="" />
																</div>
												  			</div>
												  		</div>
												  		<div className="row mb-3">
												  			<div className="col-lg-2">
												  				<div className="form-group">
																  <label>Beschreibung</label>
																</div>
												  			</div>
												  			<div className="col-lg-10">
												  				<div className="form-group">
												  					<div className="detextbox">DE</div>
												  					<div className="ptextbox">
												  						<textarea disabled={true}>{productDescription && productDescription}</textarea>
												  					</div>
																</div>
												  			</div>
												  		</div>
													</form>
												</div>
											</div>
											<div className="col-lg-3 col-md-3">
												<div className="product-right">
													<div className="product-right-img">
														<img src="/assets/images/gear.png" alt="" />
													</div>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row no-gutters">
											<div className="col-lg-12 col-md-12">
												<div className="form-page product-form p20">
													<div className="product-table">
											            <ul>
											              	<li>
																{ productVariants.length > 0 &&
																	<table className="table m-0">
																		<thead>
																			<tr>
																				<th style={{width:'9%'}} className="text-center">Artikelnummer</th>
																				<th style={{width:'9%'}} className="text-center">A-Kunde (% berechnet von VP1)</th>
																				<th style={{width:'9%'}} className="text-center">Promotion (CHF)</th>
																				<th style={{width:'9%'}} className="text-center">B-Kunde (% berechnet von VP1)</th>
																				<th style={{width:'9%'}} className="text-center">Bezeichnung</th>
																				<th style={{width:'9%'}} className="text-center">Beschreibung</th>
																				<th style={{width:'10%'}} className="text-center">Anzahl von Masseinheit</th>
																				<th style={{width:'9%'}} className="text-center">Masseinheit</th>
																				<th style={{width:'9%'}} className="text-center">Preisart</th>
																				<th style={{width:'9%'}} className="text-center">Barcode</th>
																				<th style={{width:'9%'}} className="text-center">Verkaufspreis</th>
																				<th style={{width:'9%'}} className="text-center">Aktiv ab</th>
																				<th style={{width:'9%'}} className="text-center">Aktiv bis</th>
																			</tr>
																		</thead>
																		<tbody>
																			{
																				productVariants.map((product:any, pk:any) =>
																					<React.Fragment key={`${pk}`}>
																							<tr>
																								<td width="9%" className="text-center">{product.number}{/*item number*/}</td> 
																								<td width="9%" className="text-center">{priceFormat(product.price2)}{/*PRICE2*/}</td>
																								<td width="9%" className="text-center">{/*Promotion (CHF)*/}</td>
																								<td width="9%" className="text-center">{priceFormat(product.price3)}</td>
																								<td width="9%" className="text-center">{product.name_DE}{/*Designation*/}</td>
																								<td width="9%" className="text-center">
																									<button className="btn-theme-white btn-md" type="button" onClick={this.handleShowModal}>Anzeigen</button>{/*Description*/}</td>
																								<td width="9%" className="text-center">{/*Number Of Units Of Measure*/}</td>
																								<td width="9%" className="text-center">{product.unit}{/*Unit Of Mass*/}</td>
																								<td width="9%" className="text-center">{product.priceType}{/*Price Type*/}</td>
																								<td width="9%" className="text-center">{/*Barcodec*/}</td>
																								<td width="9%" className="text-center">{priceFormat(product.price1)}{/*Selling Price*/}</td>
																								<td width="9%" className="text-center">{format(new Date(parseISO(product.activeFrom)), 'dd.MM.yyyy')}{/*Active From*/}</td>
																								<td width="9%" className="text-center">{format(new Date(parseISO(product.activeUntil)), 'dd.MM.yyyy')}{/*Active Until*/}</td>
																							</tr>
																					</React.Fragment>
																				)
																			}																			
																		</tbody>
																	</table>
																}
											              	</li>
											            </ul>
											        </div>
												</div>
											</div>
										</div>
									</TabPanel>
								</Tabs>
								<ModalPopup showModal={showModal} productDesignation={productDesignation} productDescription={productDescription} handleClose={this.handleClose} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
	
	}
}
export default MProdukte
