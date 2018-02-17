import React from 'react';
import CKEditor from "react-ckeditor-component";



class CkeEditor extends React.Component{
  constructor(props) {
      super(props);
      let activeCaption = this.props.activeCaption === '1' ? '[data-caption-block="1"]' : '[data-caption-block="2"]';
      const html = this.props.clickedTemplate.templateId !== 'template-img-caption' ?
      `${document.getElementById(this.props.clickedTemplate.id).innerHTML }` :
      document.querySelector(activeCaption).innerHTML ;
      this.state = {
          model: html,
      }
      this.handleModelChange = this.handleModelChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.activeCaption !== nextProps.activeCaption){
      let activeCaption = nextProps.activeCaption === '1' ? '[data-caption-block="1"]' : '[data-caption-block="2"]';
      const htmlUpdate = this.props.clickedTemplate.templateId !== 'template-img-caption' ?
      `${document.getElementById(this.props.clickedTemplate.id).innerHTML }` :
      document.querySelector(activeCaption).innerHTML ;
      this.setState({
        model: htmlUpdate
      })
    }
  }

  handleModelChange(evt) {
    var model = evt.editor.getData();
    this.setState({
      model: model
    });
    if(this.props.clickedTemplate.templateId === 'template-img-caption'){
      this.props.onChangeTextHandler(model);
    }else{
      this.props.changeTextHandler(this.state.model);
    }
  }

  render(){
    let config={...this.props.editorConfig}
    config.allowedContent = true;
    config.extraAllowedContent = '*(*)';
    config.height = 300;
    config.startupShowBorders = false;
    config.enterMode = 2;
    config.basicEntities = false;
    config.entities = false;
    config.entities_greek = false;
    config.entities_latin = false;
    config.htmlEncodeOutput = false;
    config.entities_processNumerical = false;
    config.forceSimpleAmpersand = true;
    return(
      <div>
       <CKEditor
       config={config}
       scriptUrl={this.props.editorScriptUrl}
       activeClass="p10"
       content={this.state.model}
       events={{
               "change": this.handleModelChange
             }}/>
      </div>
    )
  }
}

export default CkeEditor;
