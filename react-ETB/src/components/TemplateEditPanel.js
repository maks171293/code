import React from 'react';
// import {Editor, EditorState, RichUtils} from 'draft-js';
// import RichEditorExample from './RichTextEditor';
import Content from './ContentPanel';
import Settings from './SettingsPanel';
import Style from './StylePanel';
import DividerEditor from './DividerEditor';
import ImageEditor from './ImageEditor';
import ImageGroupEditor from './ImageGroupEditor';
import ImageCaptionEditor from './ImageCaptionEditor';
import SocialShareEditor from './SocialShareEditor';
import ButtonEditor from './ButtonEditor';

class TemplateEditPanel extends React.Component{
constructor(props){
  super(props);
  this.state = {
    tab: "content-tab",
    templatesBackup: null,
    templatesToChange: null,
    checked: false
  }
  this.applyChangesHandler = this.applyChangesHandler.bind(this);
  this.applyChangesAllHandler = this.applyChangesAllHandler.bind(this);
}
  onClick(event){
    this.setState({
      tab: event.currentTarget.id
    });
    event.currentTarget.classList.add('active');
    let ul = event.currentTarget.parentNode;
    for(let i = 0; i<ul.childNodes.length; i++){
      if(ul.childNodes[i].id !== event.currentTarget.id){
        ul.childNodes[i].classList.remove('active')
      }
    }
  }margin
  applyChangesHandler(event){
    this.setState({
      checked: event.target.checked
    });

    if(event.target.checked){
      this.setState({
        templatesBackup: [...this.props.templates]
      });
      this.props.applyChangesToAllBlocks();
      // this.props.templates.props;
    }else{
      if(this.state.templatesBackup !== null){
        this.props.getStateFromTable(this.state.templatesBackup);
      }
    }
  }
  applyChangesAllHandler(event){
    if(this.state.checked){
      this.props.applyChangesToAllBlocks();
    }
  }
  componentWillMount() {
       document.addEventListener('click', this.applyChangesAllHandler, false);
   }

   componentDidMount(){
     if(document.querySelector('.checkbox-wrapper')){
       document.querySelector('.edit-panel').style.marginBottom = '180px';
     }else{
       document.querySelector('.edit-panel').style.marginBottom = '60px';

     }
   }

   componentWillUnmount() {
       document.removeEventListener('click', this.applyChangesAllHandler, false);
   }
  componentWillReceiveProps(nextProps, nextState){
    if(this.props !== nextProps){
      if(nextProps.templates){
        let {templates} = nextProps;
        templates.forEach((templ)=>{
          let currentTempl = document.getElementById(templ.id);
          if(currentTempl === null){return}
          if(templ.bgc){
            currentTempl.parentNode.style.backgroundColor = templ.bgc;
          }
          if(templ.blockType === 'Text Block' && !templ.bgc){
            currentTempl.parentNode.style.backgroundColor = 'transparent';
          }
          if(!templ.blockAlign){
            currentTempl.parentNode.style.textAlign = 'center';
          }
          if(templ.color){
            currentTempl.style.color = templ.color;
          }
          if(templ.blockFontFamily){
            currentTempl.parentNode.style.fontFamily = templ.blockFontFamily;
         }
         if(templ.blockFontSize){
           currentTempl.parentNode.style.fontSize = templ.blockFontSize;
         }
         if(templ.blockFontStyle){
           currentTempl.parentNode.style.fontStyle = templ.blockFontStyle;
         }
         if(templ.blockFontWeight){
           currentTempl.parentNode.style.fontWeight = templ.blockFontWeight;
         }
         if(!templ.blockFontWeight){
           currentTempl.parentNode.style.fontWeight = 'normal';
         }
         if(templ.blockAlign){
           currentTempl.style.textAlign = templ.blockAlign;
           currentTempl.parentNode.style.textAlign = templ.blockAlign;
         }
         if(!templ.blockFontStyle){
           currentTempl.parentNode.style.fontStyle = 'normal';
         }
         if(templ.blockLineHeight){
           currentTempl.parentNode.style.lineHeight = templ.blockLineHeight;
         }
         if(templ.blockBorderColor && templ.blockBorderSize && templ.blockBorderStyle && templ.templateId !== 'template-button'){
           currentTempl.parentNode.style.outline = `${templ.blockBorderSize}px ${templ.blockBorderStyle} ${templ.blockBorderColor}`;
         }
        })
      }
      if(nextProps.clickedTemplate && this.state.checked){
        let {clickedTemplate} = nextProps;
        let clickedElement = document.getElementById(nextProps.clickedTemplate.id);
        if(clickedTemplate.bgc && clickedTemplate.templateId !== 'template-button'){
          clickedElement.parentNode.style.backgroundColor = clickedTemplate.bgc;
        }
        if(!clickedTemplate.bgc){
          clickedElement.parentNode.style.backgroundColor = 'transparent';
        }
        if(!clickedTemplate.blockAlign){
          clickedElement.parentNode.style.textAlign = 'center';
        }
        clickedElement.style.color = clickedTemplate.color;
        clickedElement.innerHTML = clickedTemplate.htmlTemplate;
        if(clickedTemplate.width){
          clickedElement.style.width = clickedTemplate.width + "px";
        }
        if(clickedTemplate.blockFontFamily){
          clickedElement.parentNode.style.fontFamily = clickedTemplate.blockFontFamily;
        }
        if(clickedTemplate.blockFontSize){
          clickedElement.parentNode.style.fontSize = clickedTemplate.blockFontSize;
        }
        if(clickedTemplate.blockFontStyle){
          clickedElement.parentNode.style.fontStyle = clickedTemplate.blockFontStyle;
        }
        if(clickedTemplate.blockFontWeight){
          clickedElement.parentNode.style.fontWeight = clickedTemplate.blockFontWeight;
        }
        if(clickedTemplate.blockAlign){
          clickedElement.parentNode.style.textAlign = clickedTemplate.blockAlign;
        }
        if(clickedTemplate.blockLineHeight){
          clickedElement.parentNode.style.lineHeight = clickedTemplate.blockLineHeight;
        }
        if(clickedTemplate.blockBorderColor && clickedTemplate.blockBorderSize && clickedTemplate.blockBorderStyle && clickedTemplate.templateId !== 'template-button'){
          clickedElement.parentNode.style.outline = `${clickedTemplate.blockBorderSize}px ${clickedTemplate.blockBorderStyle} ${clickedTemplate.blockBorderColor}`;
        }
      }
    }
  }

  render(){
    return(
      <div className="edit-panel-wrapper">
      <div className="edit-panel">
      <h4 style={{color: "#444", margin: "auto", textAlign: "center", paddingTop: "20px"}}>{this.props.clickedTemplate.blockType}</h4>
        {this.props.clickedTemplate.blockType === 'Divider Block'
        ? <DividerEditor
           changeBorderBottomStyleHandler={this.props.changeBorderBottomStyleHandler}
           changeBorderBottomSizeHandler={this.props.changeBorderBottomSizeHandler}
           clickedTemplate={this.props.clickedTemplate}
           changeBorderBottomColorHandler={this.props.changeBorderBottomColorHandler}
           changeDividerTopHandler={this.props.changeDividerTopHandler}
           changeDividerBottomHandler={this.props.changeDividerBottomHandler}
           changeBgColorHandler={this.props.changeBgColorHandler}
           deleteBgColorHandler={this.props.deleteBgColorHandler}

          />
        : ""}
        {this.props.clickedTemplate.blockType === 'Text Block' ||
         this.props.clickedTemplate.blockType === 'Header Block' ||
         this.props.clickedTemplate.blockType === 'Footer Block' ||
         this.props.clickedTemplate.blockType === 'Text Boxed Block' ?
         <div>
           <ul className="tabs-panel">
             <li id="content-tab" className="active" onClick={(e)=>{this.onClick(e)}}>Content</li>
             <li id="style-tab" onClick={(e)=>{this.onClick(e)}}>Style</li>
             <li id="settings-tab" onClick={(e)=>{this.onClick(e)}}>Settings</li>
           </ul>
           {this.state.tab === 'style-tab' ? <Style
           changeColorHandler={this.props.changeColorHandler}
           changeBgColorHandler={this.props.changeBgColorHandler}
           colorPickerHandler={this.colorPickerHandler}
           bgcPickerHandler={this.bgcPickerHandler}
           clickedTemplate={this.props.clickedTemplate}
           changeBlockFontHandler={this.props.changeBlockFontHandler}
           changeFontSizeHandler={this.props.changeFontSizeHandler}
           changeFontStyleHandler={this.props.changeFontStyleHandler}
           changeFontWeightHandler={this.props.changeFontWeightHandler}
           changeFontAlignHandler={this.props.changeFontAlignHandler}
           changeLineHeightHandler={this.props.changeLineHeightHandler}
           changeBorderStyleHandler={this.props.changeBorderStyleHandler}
           changeBorderSizeHandler={this.props.changeBorderSizeHandler}
           changeBorderColorHandler={this.props.changeBorderColorHandler}
           deleteBgColorHandler={this.props.deleteBgColorHandler}
           applyChangesHandler={this.applyChangesHandler}
           checked={this.state.checked}
           mediaBaseUrl={this.props.mediaBaseUrl}
           /> : " "}

           {this.state.tab === 'content-tab' ? <Content
           changeTextHandler={this.props.changeTextHandler}
           clickedTemplate={this.props.clickedTemplate}
           mouseOveredTemplate={this.props.mouseOveredTemplate}
           clickedTemplateHanler={this.props.clickedTemplateHanler}
           changeFontAlignHandler={this.props.changeFontAlignHandler}
           hideEditTemplatePanel={this.props.hideEditTemplatePanel}
           showEditTemplatePanel={this.props.showEditTemplatePanel}
           editorConfig={this.props.editorConfig}
           templates={this.props.templates}
           editorScriptUrl={this.props.editorScriptUrl} /> : " "}

           {this.state.tab === 'settings-tab' ? <Settings
           clickedTemplate={this.props.clickedTemplate}
           templates={this.props.templates}
           draggableTemplateHandler={this.props.draggableTemplateHandler}
           onTemplateDublicateHandler={this.props.onTemplateDublicateHandler}
           showEditTemplatePanel={this.props.showEditTemplatePanel}
           clickedTemplateHanler={this.props.clickedTemplateHanler}
           hideEditTemplatePanel={this.props.hideEditTemplatePanel}
           changeTextHandler={this.props.changeTextHandler}
           onTemplateDeleteHandler={this.props.onTemplateDeleteHandler}
           changeTemplWidthHandler={this.props.changeTemplWidthHandler}
           changeBgColorHandler={this.props.changeBgColorHandler}
           changeColorHandler={this.props.changeColorHandler}
           /> : " "}
         </div> :
         ''
       }
       {
         this.props.clickedTemplate.blockType === 'Image Block' ?
         <ImageEditor
         clickedTemplate={this.props.clickedTemplate}
         changeImageAlignHandler={this.props.changeImageAlignHandler}
         changeTextHandler={this.props.changeTextHandler}
         managerUrl={this.props.managerUrl}
         mediaBaseUrl={this.props.mediaBaseUrl}
         /> : ''
       }
       {
         this.props.clickedTemplate.blockType === "Image Group Block" ?
         <ImageGroupEditor
          clickedTemplate={this.props.clickedTemplate}
          changeTextHandler={this.props.changeTextHandler}
          managerUrl={this.props.managerUrl}
          mediaBaseUrl={this.props.mediaBaseUrl}
         /> : ''
       }
       {
         this.props.clickedTemplate.blockType === "Image Caption Block" ?
         <ImageCaptionEditor
         clickedTemplate={this.props.clickedTemplate}
         changeImageAlignHandler={this.props.changeImageAlignHandler}
         changeTextHandler={this.props.changeTextHandler}
         changeColorHandler={this.props.changeColorHandler}
         changeBgColorHandler={this.props.changeBgColorHandler}
         colorPickerHandler={this.colorPickerHandler}
         bgcPickerHandler={this.bgcPickerHandler}
         changeBlockFontHandler={this.props.changeBlockFontHandler}
         changeFontSizeHandler={this.props.changeFontSizeHandler}
         changeFontStyleHandler={this.props.changeFontStyleHandler}
         changeFontWeightHandler={this.props.changeFontWeightHandler}
         changeFontAlignHandler={this.props.changeFontAlignHandler}
         changeLineHeightHandler={this.props.changeLineHeightHandler}
         changeBorderStyleHandler={this.props.changeBorderStyleHandler}
         changeBorderSizeHandler={this.props.changeBorderSizeHandler}
         changeBorderColorHandler={this.props.changeBorderColorHandler}
         deleteBgColorHandler={this.props.deleteBgColorHandler}
         applyChangesHandler={this.applyChangesHandler}
         checked={this.state.checked}
         draggableTemplateHandler={this.props.draggableTemplateHandler}
         onTemplateDublicateHandler={this.props.onTemplateDublicateHandler}
         templates={this.props.templates}
         showEditTemplatePanel={this.props.showEditTemplatePanel}
         hideEditTemplatePanel={this.props.hideEditTemplatePanel}
         onTemplateDeleteHandler={this.props.onTemplateDeleteHandler}
         clickedTemplateHanler={this.props.clickedTemplateHanler}
         changeImageCaptionPosHandler={this.props.changeImageCaptionPosHandler}
         changeTextCaptionHandler={this.props.changeTextCaptionHandler}
         managerUrl={this.props.managerUrl}
         mediaBaseUrl={this.props.mediaBaseUrl}
         editorConfig={this.props.editorConfig}
         editorScriptUrl={this.props.editorScriptUrl}
         /> : ''
       }
       {
         this.props.clickedTemplate.blockType === "Social Share Block" ?
         <SocialShareEditor
         clickedTemplate={this.props.clickedTemplate}
         changeTextHandler={this.props.changeTextHandler}
         changeColorHandler={this.props.changeColorHandler}
         changeBgColorHandler={this.props.changeBgColorHandler}
         colorPickerHandler={this.colorPickerHandler}
         bgcPickerHandler={this.bgcPickerHandler}
         changeBlockFontHandler={this.props.changeBlockFontHandler}
         changeFontSizeHandler={this.props.changeFontSizeHandler}
         changeFontStyleHandler={this.props.changeFontStyleHandler}
         changeFontWeightHandler={this.props.changeFontWeightHandler}
         changeFontAlignHandler={this.props.changeFontAlignHandler}
         changeLineHeightHandler={this.props.changeLineHeightHandler}
         changeBorderStyleHandler={this.props.changeBorderStyleHandler}
         changeBorderSizeHandler={this.props.changeBorderSizeHandler}
         changeBorderColorHandler={this.props.changeBorderColorHandler}
         deleteBgColorHandler={this.props.deleteBgColorHandler}
         applyChangesHandler={this.applyChangesHandler}
         draggableTemplateHandler={this.props.draggableTemplateHandler}
         onTemplateDublicateHandler={this.props.onTemplateDublicateHandler}
         templates={this.props.templates}
         showEditTemplatePanel={this.props.showEditTemplatePanel}
         hideEditTemplatePanel={this.props.hideEditTemplatePanel}
         onTemplateDeleteHandler={this.props.onTemplateDeleteHandler}
         clickedTemplateHanler={this.props.clickedTemplateHanler}
         socialProfileId={this.props.socialProfileId}
         changeElementWidthHandler={this.props.changeElementWidthHandler}
         changeButtonBgHandler={this.props.changeButtonBgHandler}
         changeBorderRadiusHandler={this.props.changeBorderRadiusHandler}
         changeButtonBorderHandler={this.props.changeButtonBorderHandler}
         changeSocialServiceLayout={this.props.changeSocialServiceLayout}
         mediaBaseUrl={this.props.mediaBaseUrl}
         /> : ''
       }
       {
         this.props.clickedTemplate.templateId === 'template-button' ?
          <ButtonEditor
          clickedTemplate={this.props.clickedTemplate}
          changeTextHandler={this.props.changeTextHandler}
          changeColorHandler={this.props.changeColorHandler}
          changeBgColorHandler={this.props.changeBgColorHandler}
          colorPickerHandler={this.colorPickerHandler}
          bgcPickerHandler={this.bgcPickerHandler}
          changeBlockFontHandler={this.props.changeBlockFontHandler}
          changeFontSizeHandler={this.props.changeFontSizeHandler}
          changeFontStyleHandler={this.props.changeFontStyleHandler}
          changeFontWeightHandler={this.props.changeFontWeightHandler}
          changeFontAlignHandler={this.props.changeFontAlignHandler}
          changeLineHeightHandler={this.props.changeLineHeightHandler}
          changeBorderStyleHandler={this.props.changeBorderStyleHandler}
          changeBorderSizeHandler={this.props.changeBorderSizeHandler}
          changeBorderColorHandler={this.props.changeBorderColorHandler}
          deleteBgColorHandler={this.props.deleteBgColorHandler}
          applyChangesHandler={this.applyChangesHandler}
          draggableTemplateHandler={this.props.draggableTemplateHandler}
          onTemplateDublicateHandler={this.props.onTemplateDublicateHandler}
          templates={this.props.templates}
          showEditTemplatePanel={this.props.showEditTemplatePanel}
          hideEditTemplatePanel={this.props.hideEditTemplatePanel}
          onTemplateDeleteHandler={this.props.onTemplateDeleteHandler}
          clickedTemplateHanler={this.props.clickedTemplateHanler}
          changeElementWidthHandler={this.props.changeElementWidthHandler}
          changeButtonBgHandler={this.props.changeButtonBgHandler}
          changeBorderRadiusHandler={this.props.changeBorderRadiusHandler}
          changeButtonBorderHandler={this.props.changeButtonBorderHandler}
          managerUrl={this.props.managerUrl}
          mediaBaseUrl={this.props.mediaBaseUrl}
          /> : ""
       }
         </div>
         { this.state.tab === 'style-tab' && (this.props.clickedTemplate.blockType === "Text Block" || this.props.clickedTemplate.blockType === "Text Boxed Block") ?
           <div className="checkbox-wrapper" >
             <input defaultChecked={this.state.checked} value={this.state.checked} onChange={this.applyChangesHandler} type='checkbox' id="applyAllCheckbox"/>
             <label className="" htmlFor="applyAllCheckbox">{`Apply to all existing ${this.props.clickedTemplate.blockType}s`}</label>
           </div> : ''
         }

         <div className="actionButtons">
            <span className="button" style={{cursor: "pointer"}} onClick={()=>{this.props.hideEditTemplatePanel()}} > Save & Close </span>
         </div>
      </div>
    )
  }
}

export default TemplateEditPanel;
