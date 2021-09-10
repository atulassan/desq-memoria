import React, { Component } from 'react';
//import   ReactFormBuilder from 'react-form-builder2';
var FormBuilder = require('react-form-builder2');
import { postData} from '../../services/main-service';
//var ElementStore = require('react-form-builder2');
//import 'react-form-builder2/dist/app.css';
import Leftsidemenu from '../modules/Leftsidemenu';

export class Aktivitäten extends Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = {
      data: [],
      formName: "",
      error:""
    }
   
    const update:any = this._onChange.bind(this);
    FormBuilder.ElementStore.subscribe((state:any) => update(state.data));
    this.handleChangeAll = this.handleChangeAll.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    this.fetchItems();
  }

  async fetchItems() {
    let formData:any = JSON.parse(localStorage.getItem("formData") || '[]');
    console.log('formdata', formData);
    if(formData.length > 0) {
      await this.setState({ data: formData});
    }
    console.log(formData);
  }

  handleValidation() {
    let isFormValid = true;
    let { error, formName, data  } = this.state;
    //let { error, data  } = this.state;
    if(formName === "") {
      isFormValid = false;
      error = "Form Can't be Empty";
    }
    if(data.length === 0) {
      isFormValid = false;
      error = "Form Can't be Empty";
    }
    this.setState({error: error});
    return isFormValid;       
  }

  _onChange(data:any) {
    /*let formData:any = JSON.parse(localStorage.getItem("formData")||'[]');
    if(formData.length > 0) {
      formData = [];
    }*/
    localStorage.setItem("formData", JSON.stringify(data));
    this.setState({
      data,
    });
  }

  async handleOnSubmit() {
    if(this.handleValidation()) {
      let { formName, data  } = this.state;
      let sendData = { formName: formName, formFields: data };
      let result:any = await postData("/form/add", sendData);
      console.log(result);
    }    
  }

  handleChangeAll(e:any) {
    let {value} = e.target;
    this.setState({ formName: value});
    console.log(this.state.formName);
  }

    render() {

      const {error, data} = this.state;

        return(
            <div>
                <Leftsidemenu />
                    <div className="mainWrapper">
                      <div className="row no-gutters">
                        <div className="col-lg-12">
                          <div className="mainWrapperBody">
                            <div className="requestqueuecontainer">
                              <div className="formbuilder" style={{marginTop:'30px'}}>
                                <h2>Form Builder</h2>
                                { data.length === 0 && error && <p className="label-red">Form Cant be empty</p> }
                                  <div className="form-group col-md-6">
                                    <label>Form Name</label>
                                    <input type="text" className="form-control" name="formName" onChange={this.handleChangeAll} placeholder="Form Name" />
                                  </div>                                
                                <br />
                                 <FormBuilder.ReactFormBuilder data={ this.state.data } />
                                 <p><span onClick={this.handleOnSubmit} className="btn btn-primary" style={{marginBottom:'50px'}}>Save Form</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
        )
    }


}
export default Aktivitäten
