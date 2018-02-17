import React from 'react';
import Select from 'react-select';
import ColorPicker from 'rc-color-picker';
import SelectValue from './SelectValue';
import SelectOption from './SelectOption';
import { translate } from 'react-i18next';

let borderBottomOptions = [
  {value: "none", label: "None", className: "select-image-none"},
  {value: "solid", label: "Solid", className: "select-image-solid"},
  {value: "dashed", label: "Dashed", className: "select-image-dashed"},
  {value: "dotted", label: "Dotted", className: "select-image-dotted"},
  {value: "double", label: "Double", className: "select-image-double"},
  {value: "groove", label: "Groove", className: "select-image-groove"},
  {value: "ridge", label: "Ridge", className: "select-image-ridge"},
  {value: "inset", label: "Inset", className: "select-image-inset"},
  {value: "outset", label: "Outset", className: "select-image-outset"},
]





class DividerEditor extends React.Component{
  constructor(props){
    super(props);

    this.onChangeBorderBottomStyleHandler= this.onChangeBorderBottomStyleHandler.bind(this);
    this.onChangeBorderBottomSizeHandler= this.onChangeBorderBottomSizeHandler.bind(this);
    this.onChangeBorderBottomColorHandler= this.onChangeBorderBottomColorHandler.bind(this);
    this.onPaddingTopChange= this.onPaddingTopChange.bind(this);
    this.onPaddingBottomChange= this.onPaddingBottomChange.bind(this);
    this.onChangeBgHandler= this.onChangeBgHandler.bind(this);
  }
  onChangeBorderBottomStyleHandler(val){
    this.props.changeBorderBottomStyleHandler(val.value)
  }
  onChangeBorderBottomSizeHandler(val){
    this.props.changeBorderBottomSizeHandler(this.borderBottomSize.value);
  }
  onChangeBorderBottomColorHandler(val){
    this.props.changeBorderBottomColorHandler(val.color)
  }
  onPaddingTopChange(num){
    this.props.changeDividerTopHandler(this.paddingTop.value);
  }
  onPaddingBottomChange(num){
    this.props.changeDividerBottomHandler(this.paddingBottom.value);
  }
  onChangeBgHandler(colors) {
    this.props.changeBgColorHandler(colors.color);
  }
  inputNumberValidation(event){
    if(!isNaN(parseFloat(event.currentTarget.value)) && isFinite(event.currentTarget.value)){
      return;
    }else{
      if(event.currentTarget.value === ''){
        event.currentTarget.value = 0;
      }else{
        event.currentTarget.value = (parseFloat(event.currentTarget.value));
      }
    }

  }
  render(){
    const { t } = this.props;
    return(
      <div className="divider-editor">
        <fieldset className="divider-style" >
          <h5 className="text-style-header">{t("Divider Style")}</h5>
            <div className="divider-widgets">
              <div className="padding-top-container">
                <label className="label-style" >{t("Padding top")}</label>
                <br/>
                <input type="text" className="divider-padding-input" defaultValue={this.props.clickedTemplate.paddingTop ? this.props.clickedTemplate.paddingTop : ''}  placeholder="0" ref={(input)=>this.paddingTop = input} onBlur={this.inputNumberValidation} onChange={this.onPaddingTopChange}/><label style={{color:"#888", fontSize:"14px"}} >px</label>
              </div>
              <div className="padding-bottom-container">
                <label className="label-style" >{t("Padding bottom")}</label>
                <br/>
                <input type="text" className="divider-padding-input" defaultValue={this.props.clickedTemplate.paddingBottom ? this.props.clickedTemplate.paddingBottom : ''}  placeholder="0" ref={(input)=>this.paddingBottom = input} onBlur={this.inputNumberValidation} onChange={this.onPaddingBottomChange}/><label style={{color:"#888", fontSize:"14px"}} >px</label>
              </div>
              <div className="border-bottom-container">
                <label className="label-style">{t("Border")}</label>
                <br/>
                <div style={{display: "flex", marginBottom: "20px"}}>
                <Select
                  className="border-bottom-style-select"
                  name="border-select"
                  value={this.props.clickedTemplate.borderBottomStyle ? this.props.clickedTemplate.borderBottomStyle : ""}
                  options={borderBottomOptions}
                  onChange={this.onChangeBorderBottomStyleHandler}
                  clearable={false}
                  optionComponent={SelectOption}
                  valueComponent={SelectValue}
                />
                <input type='text' placeholder="0" ref={(input)=>this.borderBottomSize = input} onBlur={this.inputNumberValidation} defaultValue={this.props.clickedTemplate.borderBottomSize ? this.props.clickedTemplate.borderBottomSize : "" } onChange={this.onChangeBorderBottomSizeHandler} className="border-size-input"/>
                <label style={{color:"#888", fontSize:"14px", marginTop: "15px"}}>px</label>
                <ColorPicker
                  className="border-bottom-color-picker"
                  animation="slide-up"
                  enableAlpha={false}
                  color={this.props.clickedTemplate.borderBottomColor}
                  onChange={this.onChangeBorderBottomColorHandler}
                />
              </div>
              <div className="bg-container" >
                <label className="label-style">{t("Background")}</label>
                {this.props.clickedTemplate.bgc ? (<span className="remove-color-button" onClick={()=>this.props.deleteBgColorHandler(this.props.clickedTemplate.id)} >Remove</span>) : ''}
                <br/>
                <ColorPicker
                  animation="slide-up"
                  className="background-divider-color-picker"
                  color={this.props.clickedTemplate.bgc}
                  defaultColor="#fff"
                  onChange={this.onChangeBgHandler}
                  enableAlpha={false}
                />
              </div>
              </div>
            </div>
        </fieldset>
      </div>
    )
  }
}

export default translate('translations')(DividerEditor);
