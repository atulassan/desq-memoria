import React, { Component } from 'react';
//import   ReactFormBuilder from 'react-form-builder2';
var FormBuilder = require('react-form-builder2');
//var ElementStore = require('react-form-builder2');
//import 'react-form-builder2/dist/app.css';
import Leftsidemenu from '../modules/Leftsidemenu';
import { getData } from "../../services/main-service";

let formBuildData:any = [{"id":"B047411F-C078-4F0D-87FF-3596C8EE1503","element":"TextInput","text":"Text Input","required":true,"canHaveAnswer":true,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"text_input_C1EDAB5D-612A-4A3E-8082-9CA69BB059FF","label":"E-mail ","dirty":false},{"id":"BF0AD2A5-46F4-40D4-8AEB-7511A6C86061","element":"Dropdown","text":"Dropdown","required":true,"canHaveAnswer":true,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"dropdown_E36FF800-60E8-438B-B3F7-C83AC94FDC99","label":"Country ","options":[{"value":"91","text":"India","key":"dropdown_option_1064C908-494E-4C7B-8C62-91E042582724"},{"value":"41","text":"Swiss","key":"dropdown_option_AC46FE78-B067-45FC-B93D-77AEC52C9C8E"},{"value":"65","text":"usa","key":"dropdown_option_D424CE39-A0A2-4513-B363-E5FF3C8112A3"}],"dirty":false},{"id":"534441F0-92BE-4CA9-9E1B-1698CFB02E41","element":"Checkboxes","text":"Checkboxes","required":true,"canHaveAnswer":true,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"checkboxes_4062A4AA-8CDF-4ACD-AF0A-5D37DE8040BF","label":"Country ","options":[{"value":"91","text":"India","key":"checkboxes_option_11E4A1FE-74EB-4F4F-AADA-1363E77898E4"},{"value":"41","text":"Swiss","key":"checkboxes_option_1D311FE6-0C16-4FE2-87ED-3575124F112A"},{"value":"65","text":"Usa","key":"checkboxes_option_E3B2CA0F-D269-4E79-82B8-1BAFB0EA14F1"}],"dirty":false},{"id":"E4FC51AC-DFF9-44BF-AC2A-AA466F5FCFCB","element":"RadioButtons","text":"Multiple Choice","required":true,"canHaveAnswer":true,"canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true,"field_name":"radiobuttons_E6B8D264-20ED-4897-9801-E43CB75FB2D0","label":"Country ","options":[{"value":"91","text":"India","key":"radiobuttons_option_FAFA361B-6ED1-466A-9DBD-90327FC09768"},{"value":"41","text":"Swiss","key":"radiobuttons_option_9E2E5C65-7E61-4968-93B7-4BD09921DCF5"},{"value":"65","text":"Usa","key":"radiobuttons_option_2E8338E5-1BE9-4108-8E96-C61FD872E8C6"}],"dirty":false}];

class FormGenerate extends Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = {
      data: [],
      formBuildData: formBuildData,
      formInfo: [],
    }
    
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    const update:any = this._onChange.bind(this);
    FormBuilder.ElementStore.subscribe((state:any) => update(state.data));
    this.handleDetails = this.handleDetails.bind(this);
  }

  componentDidMount(){
    this.fetchItems();
  }

  async fetchItems() {
    console.log('params', this.props)
    let { slug } = this.props.match.params;
    let formResult:any = await getData(`/fields/${slug}`);
    console.log('Form Result', formResult);
    this.setState({loading: false, formInfo: (formResult.status==200) ? formResult.data : []});
  }


  handleOnSubmit(data:any) {
    console.log('onSubmit', data);
    return false;
  }

  _onChange(data:any) {
    this.setState({
      data,
    });
  }

  handleDetails(data:any) {
    console.log(data);
  }

    render() {

      console.log(this.state.data);

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
                                 { /* <FormBuilder.ReactFormBuilder data={ this.state.data } />  */ }
                                  {
                                    <FormBuilder.ReactFormGenerator
                                      download_path=""
                                      answer_data={{}}
                                      action_name="Save"
                                      form_action="/"
                                      form_method="POST"
                                      onSubmit={this.handleOnSubmit}
                                      variables={this.props.variables}
                                      data={this.state.formBuildData} />
                                  }
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

export default FormGenerate
