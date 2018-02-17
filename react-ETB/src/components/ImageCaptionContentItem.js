import React from 'react';
import CkeEditor from './Editor';
import ImageInput from './ImageInput'

import { translate } from 'react-i18next';
class ImageCaptionContentItem extends React.Component{
  constructor(props){
    super(props);
    this.imageSrcAbs = this.props.mediaBaseUrl + 'empty-image.94de3673.svg';
    this.state = {
      showApply: false,
      imageSrc: this.imageSrcAbs,
      imageWidth: '',
      prevImageSrc: ''
    }
  }
  changeImageSrc(){
    let iframeWindow = window.open(window.location.origin + this.props.managerUrl, '', 'height=500,width=900');
    iframeWindow.imageSrc = "caption-image-" + this.props.activeCaption;
    this.timerId = setInterval(()=>{
      let currentImage = this.imgRefSrc.src;
      if(currentImage !== this.imageSrcAbs && currentImage !== this.state.prevImageSrc){
      let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
      let td;
      if(this.props.activeCaption === '1'){
        td = clickedTemplate.querySelector('[data-image-block="1"]');
      }else if(this.props.activeCaption === '2'){
        td = clickedTemplate.querySelector('[data-image-block="2"]')
      }
      td.style.backgroundColor = 'transparent';
      td.setAttribute('data-is-empty', 'false');
      td.innerHTML = `<img src=${document.getElementById("caption-image-" + this.props.activeCaption).src} width=${parseFloat(this.state.imageWidth)} alt="Image Caption"/>`;
      td.getElementsByTagName('IMG')[0].style.width = this.state.imageWidth;
      this.props.changeTextHandler(clickedTemplate.innerHTML);
      this.setState({
        imageSrc: document.getElementById("caption-image-" + this.props.activeCaption).src,
        prevImageSrc: document.getElementById("caption-image-" + this.props.activeCaption).src
      });
    clearInterval(this.timerId);}
    },1000)
    return false;
  }

  changeImageWithUrl = (newUrl) => {
    document.getElementById('caption-image-' + this.props.activeCaption)
    if(newUrl !== this.imageSrcAbs && newUrl !== this.state.prevImageSrc){
        let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
        let td;
        if(this.props.activeCaption === '1'){
          td = clickedTemplate.querySelector('[data-image-block="1"]');
        }else if(this.props.activeCaption === '2'){
          td = clickedTemplate.querySelector('[data-image-block="2"]')
        }
        td.style.backgroundColor = 'transparent';
        td.setAttribute('data-is-empty', 'false');
        td.innerHTML = `<img src=${newUrl} width=${parseFloat(this.state.imageWidth)} alt="Image Caption"/>`;
        td.getElementsByTagName('IMG')[0].style.width = this.state.imageWidth;
        this.props.changeTextHandler(clickedTemplate.innerHTML);
        this.setState({
          imageSrc: newUrl,
          prevImageSrc: newUrl
        });
    }
  }

  applyImageSrc(event){
    event.preventDefault();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.activeCaption !== nextProps.activeCaption){
      if(nextProps.activeCaption === '1'){
        this.setState({
          imageSrc: document.querySelector('[data-image-block="1"]').getElementsByTagName('IMG')[0].src,
          prevImageSrc: document.querySelector('[data-image-block="1"]').getElementsByTagName('IMG')[0].src
        })
      }
      if(nextProps.activeCaption === '2'){
        this.setState({
          imageSrc: document.querySelector('[data-image-block="2"]').getElementsByTagName('IMG')[0].src,
          prevImageSrc: document.querySelector('[data-image-block="2"]').getElementsByTagName('IMG')[0].src
        })
      }
    }
  }

  showFileFinder(event){
    clearInterval(this.timerId);
    if(event.target.tagName === 'A' && event.target.parentNode.getAttribute('data-image-block') === this.props.activeCaption){
      this.changeImageSrc();
    }
    document.getElementById(this.props.clickedTemplate.id).removeEventListener('click', this.showFileFinder);
  }

  componentDidMount(){
    if(document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0]){
      document.getElementById(this.props.clickedTemplate.id).addEventListener('click', this.showFileFinder.bind(this))
    }
    if(this.props.activeCaption === '1'){
      this.setState({
        imageSrc: document.querySelector('[data-image-block="1"]').getElementsByTagName('IMG')[0].src,
        prevImageSrc: document.querySelector('[data-image-block="1"]').getElementsByTagName('IMG')[0].src,
      })
    }
    if(this.props.activeCaption === '2'){
      this.setState({
        imageSrc: document.querySelector('[data-image-block="2"]').getElementsByTagName('IMG')[0].src,
        prevImageSrc: document.querySelector('[data-image-block="2"]').getElementsByTagName('IMG')[0].src
      })
    }
    let imageWidth = (528 - parseInt((this.props.captionWidth ? this.props.captionWidth : '264px'), 10)) + 'px';
    this.setState({
      imageWidth: imageWidth
    })
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  render(){
    const { t } = this.props;
    return(
      <div className="image-caption-content">
          <div className="image-browse-container">
            <div className="browse-image">
              <img id={'caption-image-' + this.props.activeCaption} ref={(img)=>this.imgRefSrc=img} src={this.state.imageSrc} alt="Browse" />
            </div>
            <div className="browse-body">
              <p>{t("Upload an image")}</p>
              <input type="file" name="imageUpload" style={{display: 'none'}} id='imageUpload' />
              <a href="javascript:;" id={"imageCaptionBrowse" + this.props.activeCaption} onClick={this.changeImageSrc.bind(this)}> {t("Browse")} </a>
              {this.props.activeCaption === '1' ?
              <ImageInput defaultImageUrl={this.imageSrcAbs} imagePreviewBlock={'caption-image-' + this.props.activeCaption} clickedTemplate={this.props.clickedTemplate} changeImageWithUrl={this.changeImageWithUrl}/>
                : null
              }
              {this.props.activeCaption === '2' ?
              <ImageInput defaultImageUrl={this.imageSrcAbs} imagePreviewBlock={'caption-image-' + this.props.activeCaption} clickedTemplate={this.props.clickedTemplate} changeImageWithUrl={this.changeImageWithUrl}/>
                : null
              }

              {
                this.state.showApply ?
                <a href="" onClick={(event)=>this.applyImageSrc(event)}><i style={{fontSize: '9px'}}>&#9679;</i> {t("Apply")}</a>
                : ''
              }
            </div>
          </div>
      <div className="content-panel">
        {this.props.activeCaption === '1' ?
          <CkeEditor editorConfig={this.props.editorConfig} editorScriptUrl={this.props.editorScriptUrl} activeCaption={this.props.activeCaption} onChangeTextHandler={this.props.onChangeTextHandler} clickedTemplate={this.props.clickedTemplate} changeTextHandler={this.props.changeTextHandler} mouseOveredTemplate={this.props.mouseOveredTemplate}/>
          : null
        }
        {this.props.activeCaption === '2' ?
          <CkeEditor editorConfig={this.props.editorConfig} editorScriptUrl={this.props.editorScriptUrl} activeCaption={this.props.activeCaption} onChangeTextHandler={this.props.onChangeTextHandler} clickedTemplate={this.props.clickedTemplate} changeTextHandler={this.props.changeTextHandler} mouseOveredTemplate={this.props.mouseOveredTemplate}/>
          : null
        }
      </div>
      </div>
    )
  }
}

export default translate("translations")(ImageCaptionContentItem);
