import React from 'react';
import Select from 'react-select';
import Style from './StylePanel';

import { translate } from 'react-i18next';


let buttonLinkOptions = [
  {value: 'web', label: 'Web address'},
  {value: 'email', label: 'Email address'},
  {value: 'anchor', label: 'Anchor link'},
  {value: 'file', label: 'File'},
]

let buttonAnchorOptions = [
  {value: 'noAncor', label: 'You have no anchors in your email'}
]

let buttonAlignOption = [
  {value: 'left', label: 'Left'},
  {value: 'center', label: 'Center'},
  {value: 'right', label: 'Right'},
]

let buttonWidthOptions = [
  {value: 'fitToSize', label: 'Fit to size'},
  {value: 'fullWidth', label: 'Full width'}
]

class ButtonEditor extends React.Component{
  constructor(props){
    super(props);
    let button = {};
    let clickedElement = document.getElementById(this.props.clickedTemplate.id);
    let titleAttr = clickedElement.getElementsByTagName('A')[0].getAttribute('title');
    let cssAttr = clickedElement.getElementsByTagName('A')[0].getAttribute('class');
    let target = clickedElement.getElementsByTagName('A')[0].getAttribute('target') === '_blank' ? true : false;
    button.type = clickedElement.children[0].getAttribute('data-button-type');
    button.text = clickedElement.getElementsByTagName('A')[0].textContent;
    button.href = clickedElement.getElementsByTagName('A')[0].href.indexOf('mailto') === -1 ? clickedElement.getElementsByTagName('A')[0].href : 'http://www.example.com';
    button.mailTo = clickedElement.getElementsByTagName('A')[0].href.indexOf('mailto') !== -1 ? clickedElement.getElementsByTagName('A')[0].href : 'mailto:example@gmail.com?subject=Subject&body=Email%20text';
    button.emailTo = button.mailTo.slice(7, button.mailTo.indexOf('?', 7));
    button.messageSubject = decodeURIComponent(button.mailTo.slice(button.mailTo.indexOf('?subject=')+9, button.mailTo.indexOf('&body=')));
    button.messageBody = decodeURIComponent(button.mailTo.slice(button.mailTo.indexOf('&body=')+6));
    button.fileHref = clickedElement.getElementsByTagName('A')[0].href ? clickedElement.getElementsByTagName('A')[0].href : '';
    this.state = {
      tab: 'content-tab',
      buttonWidth: this.props.clickedTemplate.elementWidth,
      anchor: 'noAncor',
      showAdvanced: false,
      checked: target,
      titleAttr: titleAttr,
      cssAttr: cssAttr,
      button: {
        text: button.text,
        href: button.href,
        type: button.type,
        id: "",
        messageSubject: button.messageSubject,
        messageBody: button.messageBody,
        emailTo:button.emailTo,
        mailTo: button.mailTo,
        fileHref: button.fileHref
      }
    }
    this.onChangeButtonTypeHandler = this.onChangeButtonTypeHandler.bind(this);
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
    }

    onChangeButtonAlignHandler(value){
      clearInterval(this.timerId);
      this.props.changeFontAlignHandler(value.value);
    }

    onChangeButtonAnchorHandler(value){
      clearInterval(this.timerId);
      this.setState({
        anchor: value.value
      })
    }

    onChangeButtonText(event){
      clearInterval(this.timerId);
      let buttonText = event.target.value;
      let newButton = {...this.state.button};
      this.setState({
        button: {...newButton, text: buttonText}
      }, ()=>{
        document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].textContent = buttonText;
        this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      })
    }
    onChangeButtonHref(event){
      clearInterval(this.timerId);
      //For web Addresses
      if(this.state.button.type === 'web'){
        let buttonHref = event.currentTarget.value;
        let newButton = {...this.state.button};
        let validExpressURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        let regex = new RegExp(validExpressURL);
        if(buttonHref.match(regex)){
          this.setState({
            button: {...newButton, href: buttonHref }
          }, ()=>{
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = buttonHref;
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          });
          event.target.title = '';
          event.target.style.border = '2px solid #c9c9c9';
        }else{
          event.target.style.border = '2px solid rgb(210, 120, 109)';
          event.target.title = 'Wrong address';
        }
      }
      //For email addresses
      if(this.state.button.type === 'email'){
        let newButton = {...this.state.button};
          let emailTo;
          let messageSubject;
          let messageBody;
          let mailTo;
        if(event.target.name === 'emailAddrs'){
          emailTo = event.target.value;
          mailTo = `mailto:${emailTo}?subject=${this.state.button.messageSubject}&body=${this.state.button.messageBody}`
          this.setState({
            button: {...newButton, emailTo, mailTo}
          })
        }else if(event.target.name === 'messageSbjct'){
          messageSubject = encodeURIComponent(event.target.value);
          mailTo = `mailto:${this.state.button.emailTo}?subject=${messageSubject}&body=${this.state.button.messageBody}`
          this.setState({
            button: {...newButton, messageSubject, mailTo }
          })
        }else if(event.target.name === 'messageBd'){
          messageBody = encodeURIComponent(event.target.value);
          mailTo = `mailto:${this.state.button.emailTo}?subject=${this.state.button.messageSubject}&body=${messageBody}`
          this.setState({
            button: {...newButton, messageBody, mailTo}
          })
        }
        // let messageSubject = (this.state.button.mailTo.slice(this.state.button.mailTo.indexOf('?subject=')+9, this.state.button.mailTo.indexOf('&body=')));
        // let messageBody = (this.state.button.mailTo.slice(this.state.button.mailTo.indexOf('&body=')+6));
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = mailTo;
          this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      }

      if(this.state.button.type === 'file'){
        let newButton = {...this.state.button};
        let fileUrl = event.target.value;
        this.setState({
          button: {...newButton, href: fileUrl}
        })
        document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = fileUrl;
        this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      }
    }

    changeButtonTitle(event){
      clearInterval(this.timerId);
      let title = event.target.value;
      this.setState({
        titleAttr: title
      },()=>{
        document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].title = title;
        this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
      })
    }
    changeButtonCss(event){
      clearInterval(this.timerId);
      let css = event.target.value;
      this.setState({
        cssAttr: css
      });
      document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].className = css;
      this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
    }
    onChangeButtonWidthHandler(value){
      clearInterval(this.timerId);
      this.setState({
        buttonWidth: value.value
      },()=>this.props.changeElementWidthHandler(value.value))
    }

    onOpenAdvancedOptHandler(event){
      clearInterval(this.timerId);
      if(event.currentTarget.classList.contains('close')){
        event.currentTarget.classList.remove('close');
        this.setState({
          showAdvanced: false
        })
      }else{
        event.currentTarget.classList.add('close');
        this.setState({
          showAdvanced: true
        })
      }
    }

    changeCheckBoxValue(event){
      clearInterval(this.timerId);
      let element = event.currentTarget.nextSibling;
      this.setState({
        checked: !this.state.checked
      }, ()=>{
        if(this.state.checked){
          element.classList.add('checked');
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].setAttribute('target', '_blank');
          this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }else{
          element.classList.remove('checked');
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].setAttribute('target', '_self');
          this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }
      });

    }

    onChangeButtonTypeHandler(value){
      clearInterval(this.timerId);
      let currentHref = document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href;
      if(currentHref.indexOf('mailto') === -1){
        let newButton = {...this.state.button};
        this.setState({
          button: {...newButton, type: value.value, href: currentHref}
        }, ()=>{
          if(value.value === 'web'){
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = this.state.button.href;
            document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-button-type', 'web');
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          }else if(value.value === 'email'){
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = this.state.button.mailTo;
            document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-button-type', 'email');
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          }else if(value.value === 'file'){
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = this.state.button.href;
            document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-button-type', 'file');
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          }
        });
      }else{
        let newButton = {...this.state.button};
        this.setState({
          button: {...newButton, type: value.value, href: 'http://www.example.address.com'}
        }, ()=>{
          if(value.value === 'web'){
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = this.state.button.href;
            document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-button-type', 'web');
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          }else if(value.value === 'email'){
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = this.state.button.mailTo;
            document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-button-type', 'email');
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          }else if(value.value === 'file'){
            document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href = this.state.button.href;
            document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-button-type', 'file');
            this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
          }
        });
      }


    }

    componentDidMount(){
      let newButton = {...this.state.button};
      let href = document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href;
      this.setState({
        button: {...newButton, href: href }
      });
      this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
    }
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
    changeImageSrc(){
      let iframeWindow = window.open(window.location.origin + this.props.managerUrl, '', 'height=500,width=900');
      iframeWindow.fileSrc = 'fileButtonHref';
      iframeWindow.currentTemplate = this.props.clickedTemplate.id;

      this.timerId = setInterval(()=>{
        let href = document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href;
        if(href.indexOf('mailto') === -1){
          let newButton = {...this.state.button};
          this.setState({
            button: {...newButton, href: href }
          });
          this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }
      },1000)
      return false;
    }

    render(){
      const { t } = this.props;
      return(<div className="divider-editor">
        <ul className="tabs-panel">
          <li id="content-tab" className="active" onClick={(e)=>{this.onClick(e)}}>{t("Content")}</li>
          <li id="style-tab" onClick={(e)=>{this.onClick(e)}}>{t("Style")}</li>
          <li id="settings-tab" onClick={(e)=>{this.onClick(e)}}>{t("Settings")}</li>
        </ul>
        {
          this.state.tab === 'content-tab' ?
          <div className="button-content">
            <div className="button-text-container">
              <label className="label-style" >{t("Button text")}</label>
              <br/>
              <input type="text" defaultValue={this.state.button.text} onChange={this.onChangeButtonText.bind(this)} />
            </div>
            <div className="button-link-container">
              <label className="label-style">{t("Link to")}</label>
              <br/>
              <Select
                className="content-to-share-selector"
                name="button-link-type"
                value={this.state.button.type ? this.state.button.type : "center"}
                options={buttonLinkOptions}
                onChange={this.onChangeButtonTypeHandler.bind(this)}
                clearable={false}
                />
            </div>
            {
              this.state.button.type === 'web' ?
              <div className="button-text-container">
                <label className="label-style" >{t("Web address")}</label>
                <br/>
                <input type="text" placeholder="http://" name="webpage" defaultValue={this.state.button.href} onChange={this.onChangeButtonHref.bind(this)} />
              </div> : ''
            }
            {
              this.state.button.type === 'email' ?
              <div>
              <div className="button-text-container">
                <label className="label-style" >{t("Email address")}</label>
                <br/>
                <input type="email" placeholder="http://" name="emailAddrs" defaultValue={this.state.button.emailTo} onChange={this.onChangeButtonHref.bind(this)} />
              </div>
              <div className="button-text-container">
                <label className="label-style" >{t("Message subject")}</label>
                <br/>
                <input type="url" placeholder="http://" name="messageSbjct" defaultValue={this.state.button.messageSubject} onChange={this.onChangeButtonHref.bind(this)} />
              </div>
              <div className="button-text-container">
                <label className="label-style" >{t("Message body")}</label>
                <br/>
                <input type="url" placeholder="http://" name="messageBd" defaultValue={this.state.button.messageBody} onChange={this.onChangeButtonHref.bind(this)} />
              </div>
              </div> : ''
            }
            {
              this.state.button.type === 'anchor' ?
              <div className="button-link-container">
                <label className="label-style">{t("Select an anchor to link to")}</label>
                <br/>
                <Select
                  className="content-to-share-selector"
                  name="button-link-type"
                  value={this.state.anchor ? this.state.anchor : ""}
                  options={buttonAnchorOptions}
                  nChange={this.onChangeButtonAnchorHandler.bind(this)}
                  clearable={false}
                  />
              </div> : ''
            }
            {
              this.state.button.type === 'file' ?
              <div className="button-text-container">
                <label className="label-style" >File URL</label><a href="javascript:;" id="fileHrefBrowse" className="browse-file-url" onClick={this.changeImageSrc.bind(this)}> {t("Browse")} </a>
                <br/>
                <input type="text" placeholder="http://" id='fileButtonHref' name="fileUrl" defaultValue={this.state.button.href} onChange={this.onChangeButtonHref.bind(this)} />
              </div> : ''
            }
            <div className="advanced-but-opt" onClick={this.onOpenAdvancedOptHandler.bind(this)}>
              <a>{t("Advanced options")}</a>
            </div>
            {this.state.showAdvanced ?
            <div className="advanced-opt-container">
              <div className="open-in-new-window">
                <input type="checkbox" defaultValue={this.state.checked} onChange={this.changeCheckBoxValue.bind(this)} id="openInNewTab"/>
                <label className={this.state.checked ? "label-style checked" : "label-style"} htmlFor="openInNewTab" >{t("Open in a new window")}</label>
              </div>
              <div className="button-text-container">
                <label className="label-style" >{t("Title attribute")}</label>
                <br/>
                <input type="text" name="titleAttr" defaultValue={this.state.titleAttr} onChange={this.changeButtonTitle.bind(this)}/>
              </div>
              <div className="button-text-container">
                <label className="label-style" >{t("CSS class")}</label>
                <br/>
                <input type="text" name="cssClass" defaultValue={this.state.cssAttr} onChange={this.changeButtonCss.bind(this)}/>
              </div>
            </div>
          : ''}
          </div>
           : ""}
           {
             this.state.tab === 'style-tab' ?
             <Style
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
             changeTextHandler={this.props.changeTextHandler}
             changeButtonBgHandler={this.props.changeButtonBgHandler}
             changeBorderRadiusHandler={this.props.changeBorderRadiusHandler}
             changeButtonBorderHandler={this.props.changeButtonBorderHandler}
             mediaBaseUrl={this.props.mediaBaseUrl}
             /> : " "
           }
           {
             this.state.tab === 'settings-tab' ?
             <fieldset className="divider-style" >
               <h5 className="text-style-header">{t("Button Settings")}</h5>
                 <div className="social-share-settings-container">
                   <label className="label-style" >{t("Align")}</label>
                   <br/>
                   <Select
                     className="content-to-share-selector"
                     name="social-share-align"
                     value={this.props.clickedTemplate.blockAlign ? this.props.clickedTemplate.blockAlign : "center"}
                     options={buttonAlignOption}
                     onChange={this.onChangeButtonAlignHandler.bind(this)}
                     clearable={false}
                     />
                 </div>
                 <div className="social-share-settings-container">
                   <label className="label-style" >{t("Width")}</label>
                   <br/>
                   <Select
                     className="content-to-share-selector"
                     name="social-share-width"
                     value={this.state.buttonWidth ? this.state.buttonWidth : ""}
                     options={buttonWidthOptions}
                     onChange={this.onChangeButtonWidthHandler.bind(this)}
                     clearable={false}
                     />
                 </div>
             </fieldset>
             : ''
           }
      </div>)
    }
  }

export default translate('translations')(ButtonEditor);
