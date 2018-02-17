import React from 'react';
import ColorPicker from 'rc-color-picker';
import FontPicker from 'react-font-picker';
import Select from 'react-select';
import SelectValue from './SelectValue';
import SelectOption from './SelectOption';

import 'rc-color-picker/assets/index.css';
import 'react-select/dist/react-select.css';

let fontSizeOptions = [
  {value: "8px", label: "8px"},
  {value: "10px", label: "10px"},
  {value: "12px", label: "12px"},
  {value: "14px", label: "14px"},
  {value: "16px", label: "16px"},
  {value: "18px", label: "18px"},
  {value: "20px", label: "20px"},
  {value: "22px", label: "22px"},
  {value: "24px", label: "24px"},
  {value: "28px", label: "28px"},
  {value: "32px", label: "32px"},
  {value: "36px", label: "36px"},
  {value: "40px", label: "40px"},
  {value: "44px", label: "44px"},
  {value: "48px", label: "48px"},
  {value: "50px", label: "50px"},
]

let borderOptions = [
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

let lineHeightOptions = [
  {label: "Not Specifeid", value: "inherit"},
  {label: "Normal", value: "100%"},
  {label: "Slight", value: "125%"},
  {label: "1 1/2 spacing", value: "150%"},
  {label: "Double space", value: "200%"},
]

class Style extends React.Component{
  constructor(props){
    super(props);
    this.centerAlign = this.props.mediaBaseUrl + 'centerAlign.93792788.svg';
    this.leftAlign = this.props.mediaBaseUrl + 'leftAlign.f0cd17f7.svg';
    this.rightAlign = this.props.mediaBaseUrl + 'rightAlign.34a0ba44.svg';
    this.justifyAlign = this.props.mediaBaseUrl + 'justifyAlign.c933a069.svg';
    this.state = {
      sizeLabel: "",
      buttonBgc: this.props.clickedTemplate.buttonBgc,
      buttonColor: this.props.clickedTemplate.color ? this.props.clickedTemplate.color : '#fff',
      buttonBdStyle: '',
      buttonBdSize: '',
      buttonBdColor: '',
      lineHeightValue: 'Not Specifeid',
      blockFontStyle: ''
    }
    this.bgcPickerHandler = this.bgcPickerHandler.bind(this);
    this.colorPickerHandler = this.colorPickerHandler.bind(this);
    this.onChangeBgHandler = this.onChangeBgHandler.bind(this);
    this.onChangeColorHandler = this.onChangeColorHandler.bind(this);
    this.onChangeFontHanler = this.onChangeFontHanler.bind(this);
    this.onChangeSizeHandler = this.onChangeSizeHandler.bind(this);
    this.onChangeLineHeightHanler = this.onChangeLineHeightHanler.bind(this);
    this.onChangeBorderStyleHandler = this.onChangeBorderStyleHandler.bind(this);
    this.onChangeBorderSizeHandler = this.onChangeBorderSizeHandler.bind(this);
    this.onChangeBorderColorHandler = this.onChangeBorderColorHandler.bind(this);
    this.inputNumberValidation = this.inputNumberValidation.bind(this);
    this.onChangeButtonBgHandler = this.onChangeButtonBgHandler.bind(this);
    this.onChangeBorderRadiusHandler = this.onChangeBorderRadiusHandler.bind(this);
    this.onChangeButtonBorderStyle = this.onChangeButtonBorderStyle.bind(this);
    this.onChangeButtonBorderSize = this.onChangeButtonBorderSize.bind(this);
    this.onChangeButtonBorderColor = this.onChangeButtonBorderColor.bind(this);
  }
  bgcPickerHandler(){
    let bgc = this.bgcPicked.value;
    this.props.changeBgColorHandler(bgc);
    this.setState({
      bgc: bgc,
    })
  }
  colorPickerHandler(){
    let color = this.colorPicked.value;
    this.props.changeColorHandler(color);
  }
  onChangeBgHandler(colors) {
    this.props.changeBgColorHandler(colors.color);
  }
  onChangeColorHandler(colors) {
    this.props.changeColorHandler(colors.color);
    //Styles for button
    if(this.props.clickedTemplate.templateId === 'template-button'){
      this.setState({
        buttonColor: this.props.clickedTemplate.color
      }, ()=>{
        document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].style.color = colors.color;
        this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      })
    }
  }
  onChangeButtonBgHandler(colors){
    this.props.changeButtonBgHandler(colors.color);
    this.setState({
      buttonBgc: this.props.clickedTemplate.buttonBgc
    }, ()=>{
      if(this.props.clickedTemplate.templateId === 'template-button'){
      document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('TD')[0].style.backgroundColor = colors.color;
      document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('TD')[0].setAttribute('bgcolor', colors.color);
      this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
    }else if(this.props.clickedTemplate.templateId === 'template-soc'){
      if(this.props.clickedTemplate.socialLayout === 'horizontal'){
        [...document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('TR')[0].children].map(elem=>{
          elem.style.backgroundColor = colors.color
          return elem;
        });
        this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      }else if(this.props.clickedTemplate.socialLayout === 'vertical'){
        [...document.getElementById(this.props.clickedTemplate.id).children[0].children[0].children].map(elem=>{
          elem.children[0].style.backgroundColor = colors.color
          return elem;
        })
        this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      }
      }
    })
  }
  onChangeFontHanler(selectedFont) {
    this.props.changeBlockFontHandler(selectedFont.toString());
  }
  onChangeLineHeightHanler(lineHeight) {
    let lineHeightValue;
    switch(lineHeight){
      case "Not Specifeid":
        lineHeightValue = 'inherit';
        break;
      case "Normal":
        lineHeightValue = '100%';
        break;
      case "Slight":
        lineHeightValue = '125%'
        break;
      case "1 1/2 spacing":
        lineHeightValue = '150%';
        break;
      case "Double space":
        lineHeightValue = '200%';
        break;
      default:
        lineHeightValue = 'inherit';
        break;
    }
    this.setState({
      lineHeightValue: lineHeight
    })

    this.props.changeLineHeightHandler(lineHeightValue);
  }
  onChangeFontStyleHandler(style, event){
    if(this.props.clickedTemplate.blockFontStyle === "italic"){
      this.props.changeFontStyleHandler('normal');
      event.currentTarget.classList.remove('active');
    }else{
      this.props.changeFontStyleHandler(style);
      event.currentTarget.classList.add('active');
    }
  }
  onChangeFontWeightHandler(weight, event){
    if(this.props.clickedTemplate.blockFontWeight === "bold"){
      this.props.changeFontWeightHandler('normal');
      event.currentTarget.classList.remove('active');
    }else{
      this.props.changeFontWeightHandler(weight);
      event.currentTarget.classList.add('active');
    }
  }
  onChangeAlignHandler(align, event){
    if(align === "left"){
      this.props.changeFontAlignHandler(align);
      event.currentTarget.parentNode.childNodes.forEach(child=>child.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }else if(align === "right"){
      this.props.changeFontAlignHandler(align);
      event.currentTarget.parentNode.childNodes.forEach(child=>child.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }else if(align === "center"){
      this.props.changeFontAlignHandler(align);
      event.currentTarget.parentNode.childNodes.forEach(child=>child.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }else if(align === "justify"){
      this.props.changeFontAlignHandler(align);
      event.currentTarget.parentNode.childNodes.forEach(child=>child.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }
  }
  onChangeSizeHandler(val) {
    if(val){
      this.setState({
        sizeLabel: val.label
      });
      this.props.changeFontSizeHandler(val.value);
    }else{
      this.setState({
        sizeLabel: ""
      })
    }
  }
  onChangeBorderRadiusHandler(event){
    let value = event.target.value;
    this.props.changeBorderRadiusHandler(value);
    }

  onChangeButtonBorderStyle(val){
    this.setState({
      buttonBdStyle: val.value
    });
    if(val.value && this.state.buttonBdSize && this.state.buttonBdColor){
      this.props.changeButtonBorderHandler(`${val.value} ${this.state.buttonBdSize}px ${this.state.buttonBdColor}`)
    }
  }
  onChangeButtonBorderSize(event){
    let value = event.target.value;
    this.setState({
      buttonBdSize: value
    });
    if(this.state.buttonBdStyle && value && this.state.buttonBdColor){
      this.props.changeButtonBorderHandler(`${this.state.buttonBdStyle} ${value}px ${this.state.buttonBdColor}`)
    }
  }
  onChangeButtonBorderColor(val){
    this.setState({
      buttonBdColor: val.color
    });
    if(this.state.buttonBdStyle && this.state.buttonBdSize && val.color){
      this.props.changeButtonBorderHandler(`${this.state.buttonBdStyle} ${this.state.buttonBdSize}px ${val.color}`)
    }
  }

  onChangeBorderStyleHandler(val){
    this.props.changeBorderStyleHandler(val.value)
  }
  onChangeBorderSizeHandler(val){
    this.props.changeBorderSizeHandler(this.borderSize.value);
  }
  onChangeBorderColorHandler(val){
    this.props.changeBorderColorHandler(val.color)
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

  componentWillReceiveProps(nextProps, nextState){
    if(this.state !== nextState){

    }
  }

  componentWillMount(){
    if(this.props.clickedTemplate && this.props.clickedTemplate.blockLineHeight){
      let currentLineHeight = lineHeightOptions.find((item)=>{
          return item.value === this.props.clickedTemplate.blockLineHeight
      })
      this.setState({
        lineHeightValue: currentLineHeight.label
      })
    }
  }

  componentDidMount(){
    if(this.props.clickedTemplate && this.props.clickedTemplate.blockFontWeight){
      if(this.props.clickedTemplate.blockFontWeight === 'bold'){
          this.bStyle.classList.add('active')
      }
    }
    if(this.props.clickedTemplate && this.props.clickedTemplate.blockFontStyle){
      if(this.props.clickedTemplate.blockFontStyle === 'italic'){
        this.iStyle.classList.add('active')
      }
    }
    if(this.props.clickedTemplate && this.props.clickedTemplate.blockAlign){
      switch(this.props.clickedTemplate.blockAlign){
        case 'left':
        this.refLeftAlighn.classList.add('active')
        break;
        case 'right':
        this.refRightAlighn.classList.add('active')
        break;
        case 'center':
        this.refCenterAlighn.classList.add('active')
        break;
        case 'justify':
        this.refJustifyAlighn.classList.add('active')
        break;
      }
    }
    if(this.props.clickedTemplate && this.props.clickedTemplate.buttonBorder && this.props.clickedTemplate.buttonBorder !== 'none'){
      let buttonBdProps = this.props.clickedTemplate.buttonBorder.split(' ');
      this.setState({
        buttonBdStyle: buttonBdProps[0],
        buttonBdSize: (parseFloat(buttonBdProps[1]) + ''),
        buttonBdColor: buttonBdProps[2]
      }, ()=>{
        this.buttonBdSize.value = this.state.buttonBdSize
      })
    }
  }
  render(){
    let checkColorInputInBrowser = () =>{
        return (
          <ColorPicker
            className="color-style-color-picker"
            animation="slide-up"
            enableAlpha={false}
            defaultColor='#000'
            color={this.props.clickedTemplate.color}
            onChange={this.onChangeColorHandler}
          />)
    };
    let checkBgInputInBrowser = () =>{
        return (
          <ColorPicker
            className="bg-style-color-picker"
            animation="slide-up"
            enableAlpha={false}
            defaultColor={'#fff'}
            mode="HSB"
            color={this.props.clickedTemplate.bgc}
            onChange={this.onChangeBgHandler}
          />)
    };

    return(
      <div>
        <hr style={{backgroundColor: "#e2e2e2", border: "none", color: "#e2e2e2", height: "1px"}}/>
        {
          this.props.clickedTemplate.templateId === 'template-button' || this.props.clickedTemplate.templateId === 'template-soc' ?
          <fieldset className='button-style' >
            <h5 className="text-style-header">Button Style</h5>
            <div className="button-widgets-in-style" >
            <div className="button-border-container">
              <label className="label-style">Border</label>
              <br/>
              <div style={{display: "flex", flexWrap: 'wrap'}}>
              <Select
                className="button-border-style-select"
                name="button-border-select"
                value={this.state.buttonBdStyle ? this.state.buttonBdStyle : ""}
                options={borderOptions}
                onChange={this.onChangeButtonBorderStyle}
                clearable={false}
                optionComponent={SelectOption}
                valueComponent={SelectValue}
              />
              <br/>
              <input type='number' placeholder="0" ref={(input)=>this.buttonBdSize = input} defaultValue={this.state.buttonBdSize ? this.state.buttonBdSize : "" } onChange={this.onChangeButtonBorderSize} onBlur={this.inputNumberValidation} className="border-size-input button-border"/>
              <label style={{color:"#ccc", fontSize:"14px", marginTop: "15px"}}>px</label>
              <ColorPicker
                className="border-color-picker"
                animation="slide-up"
                enableAlpha={false}
                defaultColor="#000"
                color={this.state.buttonBdColor}
                onChange={this.onChangeButtonBorderColor}
              />
            </div>
            </div>
              <div className="border-radius-container">
                <label className="label-style">Border radius</label>
                <br/>
                <input type='number' placeholder="0" ref={(input)=>this.borderSize = input} defaultValue={this.props.clickedTemplate.buttonBorderRadius ? this.props.clickedTemplate.buttonBorderRadius: "" } onChange={this.onChangeBorderRadiusHandler} onBlur={this.inputNumberValidation} className="border-size-input button-border"/>
                <label style={{color:"#ccc", fontSize:"14px", marginTop: "15px"}}>px</label>
              </div>

              <div className="background-container">
                <label className="label-style">Background</label>
                {this.props.clickedTemplate.bgc ? (<span className="remove-color-button" onClick={()=>this.props.deleteBgColorHandler(this.props.clickedTemplate.id)}>Remove</span>) : ''}
                <br/>
                <ColorPicker
                  className="border-color-picker"
                  animation="slide-up"
                  enableAlpha={false}
                  defaultColor='#fff'
                  mode="HSB"
                  color={this.props.clickedTemplate.buttonBgc}
                  onChange={this.onChangeButtonBgHandler}
                />
              </div>
            </div>
          </fieldset> : ''
        }
          <fieldset className='text-style' >
            <h5 className="text-style-header">{this.props.fieldsetText ? this.props.fieldsetText : "Text style"}</h5>
            <div className="text-widgets-in-style" >
              <div className="family-container">
                <FontPicker
                  label="Font"
                  fonts={["Open Sans","Arial","Arial Narrow","Arial Black","Courier New","Georgia","Lucida Console","Lucida Sans Unicode","Tahoma","Times New Roman","Verdana"]}
                  previews={true}
                  activeColor="#64B5F6"
                  value={this.props.clickedTemplate.blockFontFamily ? this.props.clickedTemplate.blockFontFamily : ""}
                  onChange={this.onChangeFontHanler}
                />
              </div>
              <div className="size-color-container">
                <div className="size-container">
                  <label className="label-style">Size</label>
                  <Select
                    name="font-size-select"
                    value={this.props.clickedTemplate.blockFontSize ? this.props.clickedTemplate.blockFontSize : ""}
                    options={fontSizeOptions}
                    onChange={this.onChangeSizeHandler}
                    clearable={false}
                  />
                </div>
                <div className="color-container">
                <label className="label-style">Color</label>
                {this.props.clickedTemplate.color === '#000' || !this.props.clickedTemplate.color ? '' : (<span className="remove-color-button" onClick={()=>{this.props.changeColorHandler('#000'); this.setState({buttonColor: '#fff'})}} >Remove</span>)}
                <br/>
                  {checkColorInputInBrowser()}
                </div>
              </div>
              <div className="style-align-container">
                <div className="style-container">
                  <label className="label-style">Style</label><br/>
                  <div className="styles-items">
                    <span className="bold-style" ref={(b)=>this.bStyle = b}  onClick={this.onChangeFontWeightHandler.bind(this, 'bold')}>B</span>
                    <span className="i-style" ref={(i)=>this.iStyle = i} onClick={this.onChangeFontStyleHandler.bind(this, 'italic')}>I</span>
                  </div>
                </div>
                <div className="align-container">
                  <label className="label-style">Align</label><br/>
                  <div className="align-items">
                    <span className="center-align" ref={(item)=>this.refCenterAlighn = item} onClick={this.onChangeAlignHandler.bind(this, 'center')} ><img src={this.centerAlign} alt="centerAlign"/></span>
                    <span className="left-align" ref={(item)=>this.refLeftAlighn = item} onClick={this.onChangeAlignHandler.bind(this, 'left')}><img src={this.leftAlign} alt="leftAlign"/></span>
                    <span className="right-align" ref={(item)=>this.refRightAlighn = item} onClick={this.onChangeAlignHandler.bind(this, 'right')}><img src={this.rightAlign} alt="rightAlign"/></span>
                    <span className="justify-align" ref={(item)=>this.refJustifyAlighn = item} onClick={this.onChangeAlignHandler.bind(this, 'justify')}><img src={this.justifyAlign} alt="justifyAlign"/></span>
                  </div>
                </div>
              </div>
              </div>
              <div className="line-height-spasing-container">
                <FontPicker
                  label="Line Height"
                  fonts={["Not Specifeid", "Normal", "Slight", "1 1/2 spacing", "Double space"]}
                  previews={true}
                  activeColor="#64B5F6"
                  value={this.state.lineHeightValue}
                  onChange={this.onChangeLineHeightHanler}
                />
              </div>

          </fieldset>

          {this.props.clickedTemplate.blockType === 'Text Boxed Block' || this.props.clickedTemplate.templateId === 'template-soc' ?
          <fieldset className='container-style' >
            <h5 className="text-style-header">Container style</h5>
            <div className="container-widgets-in-style" >
              <div className="background-container">
                <label className="label-style">Background Color</label>
                {this.props.clickedTemplate.bgc ? (<span className="remove-color-button" onClick={()=>this.props.deleteBgColorHandler(this.props.clickedTemplate.id)}>Remove</span>) : ''}
                <br/>
                  {checkBgInputInBrowser()}
              </div>
              <div className="border-container">
                <label className="label-style">Border</label>
                <br/>
                <div style={{display: "flex"}}>
                <Select
                  className="border-style-select"
                  name="border-select"
                  value={this.props.clickedTemplate.blockBorderStyle ? this.props.clickedTemplate.blockBorderStyle : ""}
                  options={borderOptions}
                  onChange={this.onChangeBorderStyleHandler}
                  clearable={false}
                  optionComponent={SelectOption}
                  valueComponent={SelectValue}
                />
                <input type='number' pattern="[0-9.]+" placeholder="0" ref={(input)=>this.borderSize = input} defaultValue={this.props.clickedTemplate.blockBorderSize ? this.props.clickedTemplate.blockBorderSize : "" } onChange={this.onChangeBorderSizeHandler} onBlur={this.inputNumberValidation} className="border-size-input"/>
                <label style={{color:"#ccc", fontSize:"14px", marginTop: "15px"}}>px</label>
                <ColorPicker
                  className="border-color-picker"
                  animation="slide-up"
                  enableAlpha={false}
                  defaultColor={'#000'}
                  color={this.props.clickedTemplate.blockBorderColor}
                  onChange={this.onChangeBorderColorHandler}
                />
              </div>
              </div>
            </div>
          </fieldset> : ''}
      </div>
    )
  }
}

export default Style;
