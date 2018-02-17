import React from 'react';
import Select from 'react-select';
import { translate } from 'react-i18next';
import ImageInput from './ImageInput'

let imageAlignOptions = [
  {value: "left", label: "Left"},
  {value: "center", label: "Center"},
  {value: "right", label: "Right"}
]

class ImageEditor extends React.Component{
  constructor(props){
    super(props);
    this.imageSrcAbs = this.props.mediaBaseUrl + 'empty-image.94de3673.svg';
    let marginsCheck = document.getElementById(this.props.clickedTemplate.id).children[0].getAttribute('cellspacing') === '0' ? true : false;
    let retinaCheck = document.getElementById(this.props.clickedTemplate.id).children[0].getAttribute('data-retina') === 'true' ? true : false;
    this.state = {
      tab: "content-tab",
      marginsChecked: marginsCheck,
      retinaImageChecked: retinaCheck,
      imageSrc: '',
      showApply: false,
      showDelete: false,
      prevImageSrc: ''
    }
    this.changeImageSrc = this.changeImageSrc.bind(this);
  }
    onClick(event){
      clearInterval(this.timerId);
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
    onChangeImageAlignHandler(align){
      clearInterval(this.timerId);
      this.props.changeImageAlignHandler(align.value);
      document.getElementById(this.props.clickedTemplate.id).children[0].style.textAlign = align.value;
      this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
    }
    changeCheckMarginValue(event){
      clearInterval(this.timerId);
      let element = event.currentTarget.nextSibling;
      this.setState({
        marginsChecked: !this.state.marginsChecked
      }, ()=>{
        if(this.state.marginsChecked){
          element.classList.add('checked');
          document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('cellspacing', '0');
          document.getElementById(this.props.clickedTemplate.id).children[0].style.borderSpacing = '0';
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('IMG')[0].style.maxWidth = '598px';
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('IMG')[0].setAttribute('width', '598');
          this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }else{
          element.classList.remove('checked');
          document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('cellspacing', '15');
          document.getElementById(this.props.clickedTemplate.id).children[0].style.borderSpacing = '15px';
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('IMG')[0].style.maxWidth = '560px';
          document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('IMG')[0].setAttribute('width', '560');
          this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }
      });
    }
    changeCheckRetinaValue(event){
      clearInterval(this.timerId);
      let element = event.currentTarget.nextSibling;
      this.setState({
        retinaImageChecked: !this.state.retinaImageChecked
      }, ()=>{
        if(this.state.retinaImageChecked){
          element.classList.add('checked');
          document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-retina', 'true')
          // document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].setAttribute('target', '_blank');
          // this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }else{
          element.classList.remove('checked');
          document.getElementById(this.props.clickedTemplate.id).children[0].setAttribute('data-retina', 'false')
          // document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].setAttribute('target', '_self');
          // this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
        }
      });
    }
    changeImageSrc(){
      let iframeWindow = window.open(window.location.origin + this.props.managerUrl, '', 'height=500,width=900');
      iframeWindow.imageSrc = "image-block-image";
      this.timerId = setInterval(()=>{
        let currentImage = document.getElementById('image-block-image').src;
        if(currentImage !== this.imageSrcAbs && currentImage !== this.state.prevImageSrc){
          let clickedElement = document.getElementById(this.props.clickedTemplate.id);
          let td = clickedElement.getElementsByTagName('TR')[0].children[0];
          td.style.backgroundColor = 'transparent';
          td.style.padding = '0px';
          td.innerHTML = `<img src=${document.getElementById('image-block-image').src} ${this.state.marginsChecked === true ? "style='max-width: 598px;' width='598'" : "style='max-width: 560px;' width='560'"}  alt="img"/>`;
          this.props.changeTextHandler(clickedElement.innerHTML);
          this.setState({
            showDelete: false,
            imageSrc: document.getElementById('image-block-image').src,
            prevImageSrc: document.getElementById('image-block-image').src
          })
          clearInterval(this.timerId);
        }
      },1000)
      return false;
    }

    changeImageWithUrl = (newUrl) => {
      document.getElementById('image-block-image').src = newUrl;
      if(newUrl !== this.imageSrcAbs && newUrl !== this.state.prevImageSrc){
        let clickedElement = document.getElementById(this.props.clickedTemplate.id);
        let td = clickedElement.getElementsByTagName('TR')[0].children[0];
        td.style.backgroundColor = 'transparent';
        td.style.padding = '0px';
        td.innerHTML = `<img src=${newUrl} ${this.state.marginsChecked === true ? "style='max-width: 598px;' width='598'" : "style='max-width: 560px;' width='560'"}  alt="img"/>`;
        this.props.changeTextHandler(clickedElement.innerHTML);
        this.setState({
          showDelete: false,
          imageSrc: newUrl,
          prevImageSrc: newUrl
        })
      }
    }
    applyImageSrc(event){
      event.preventDefault();
    }
    deleteImageSrc(event){
      event.preventDefault();
      let clickedElement = document.getElementById(this.props.clickedTemplate.id);
      let td = clickedElement.getElementsByTagName('TR')[0].children[0];
      this.setState({
        showApply: false,
        showDelete: false,
        imageSrc: this.imageSrcAbs
      }, ()=>{
        td.style.backgroundColor = 'rgb(247, 247, 247)';
        td.innerHTML = `<img style="width: 80px; height: 80px;" src=${this.state.imageSrc} alt='img' /><br><a style='display: inline-block; font-size: 13px; padding: 7px 17px; background-color: rgb(128, 128, 128); border-radius: 3px; border: 1px solid rgb(128, 128, 128); color: #fff;'>Browse</a>`
        this.props.changeTextHandler(clickedElement.innerHTML);
      })

    }
    componentDidMount(){
      if(document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0]){
        document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].addEventListener('click', this.changeImageSrc);
      }
      let newImage = document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('IMG')[0].src
      let defaultImage = this.imageSrcAbs;
      if(newImage !== defaultImage){
        this.setState({
          imageSrc: newImage,
          showDelete: false,
          prevImageSrc: newImage
        })
      }else{
        this.setState({
          imageSrc: this.imageSrcAbs
        })
      }
    }
    componentWillUnmount(){
      clearInterval(this.timerId);
    }

  render(){
    const { t } = this.props;

    return(
      <div className="divider-editor">
        <ul className="tabs-panel">
          <li id="content-tab" className="active" onClick={(e)=>{this.onClick(e)}}>{t("Content")}</li>
          <li id="settings-tab" onClick={(e)=>{this.onClick(e)}}>{t('Settings')}</li>
        </ul>
        {
          this.state.tab === 'content-tab' ?
          <fieldset className="divider-style" >
            <h5 className="text-style-header">{t("Image")}</h5>
              <div className="image-browse-container">
                <div className="browse-image">
                  <img src={this.state.imageSrc ? this.state.imageSrc : this.imageSrcAbs} alt="Browse" id="image-block-image"/>
                </div>
                <div className="browse-body">
                  <p>{t("Upload an image")}</p>
                  <input type="file" name="imageUpload" style={{display: 'none'}} id='imageUpload' />
                  <a href="javascript:;" id="imageBrowse" onClick={this.changeImageSrc.bind(this)}> {t("Browse")} </a>
                  <ImageInput defaultImageUrl={this.imageSrcAbs} clickedTemplate={this.props.clickedTemplate} changeImageWithUrl={this.changeImageWithUrl}/>
                  {
                    this.state.showApply ?
                    <a href="" onClick={(event)=>this.applyImageSrc(event)}><i style={{fontSize: '9px'}}>&#9679;</i> {t("Apply")}</a>
                    : ''
                  }
                  {
                    this.state.showDelete ?
                    <a href="" onClick={(event)=>this.deleteImageSrc(event)}><i style={{fontSize: '9px'}}>&#9679;</i> {t("Delete")}</a>
                    : ''
                  }
                </div>
              </div>
          </fieldset> :
          <fieldset className="divider-style" >
            <h5 className="text-style-header">{t("Image Settings")}</h5>
              <div className="image-settings-container">
                <div className="image-align-container">
                  <label className="label-style" >{t('Align')}</label>
                  <br/>
                  <Select
                    className="image-align-selector"
                    name="border-select"
                    value={this.props.clickedTemplate.imageAlign ? this.props.clickedTemplate.imageAlign : ""}
                    options={imageAlignOptions}
                    onChange={this.onChangeImageAlignHandler.bind(this)}
                    clearable={false}
                  />
                </div>
                <div style={{marginTop: '30px'}}>
                  <label className="label-style" >{t("Margins")}</label>
                  <br/>
                  <div className="open-in-new-window">
                    <input type="checkbox" defaultValue={this.state.marginsChecked} onChange={this.changeCheckMarginValue.bind(this)} id="marginsCheck"/>
                    <label className={this.state.marginsChecked ? "label-style checked" : "label-style"} htmlFor="marginsCheck" >{t("Edge to edge")}</label>
                  </div>
                </div>
                <div style={{marginTop: '30px'}}>
                  <label className="label-style" >{t("Retina Image support")}</label>
                  <br/>
                  <div className="open-in-new-window">
                    <input type="checkbox" defaultValue={this.state.retinaImageChecked} onChange={this.changeCheckRetinaValue.bind(this)} id="retinaImageChecked"/>
                    <label className={this.state.retinaImageChecked ? "label-style checked" : "label-style"} htmlFor="retinaImageChecked" >{t("Constrain image dimensions by 50% for high-resolution displays")}</label>
                  </div>
                </div>
              </div>
          </fieldset>
        }
      </div>
    )
  }
}

export default translate("translations")(ImageEditor);
