import React from 'react';
import { translate } from 'react-i18next';
import ImageInput from './ImageInput'


class ImageGroupItem extends React.Component{
  constructor(props){
    super(props);
    this.imageSrcAbs = this.props.mediaBaseUrl + 'empty-image.94de3673.svg';
    this.state = {
      showApply: false,
      imageSrc: this.imageSrcAbs,
      prevImageSrc: ""
    }
    this.applyImageSrc = this.applyImageSrc.bind(this);
    this.changeImageSrc = this.changeImageSrc.bind(this);
    this.showFileFinder = this.showFileFinder.bind(this);
  }
  changeImageSrc(){
    let iframeWindow = window.open(window.location.origin + this.props.managerUrl, '', 'height=500,width=900');
    iframeWindow.imageSrc = this.props.id + 'image';
    this.timerId = setInterval(()=>{
      if(!this.imgRefSrc){
        return;
      }
      let currentImage = this.imgRefSrc.src;
      if(currentImage !== this.imageSrcAbs && currentImage !== this.state.prevImageSrc){
      let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
      let td = document.getElementById(this.props.id);
      td.style.backgroundColor = 'transparent';
      td.style.textAlign = 'center'
      td.setAttribute('data-is-empty', 'false')
      td.innerHTML = `<img src=${document.getElementById(this.props.id + 'image').src} alt="img"/>`;
      td.getElementsByTagName('IMG')[0].style.maxWidth = td.getAttribute('colspan') === '1' ? '294px' : '590px';
      td.getElementsByTagName('IMG')[0].setAttribute('width', td.getAttribute('colspan') === '1' ? '294' : '590');
      this.props.changeTextHandler(clickedTemplate.innerHTML);
      this.setState({
        imageSrc: document.getElementById(this.props.id + 'image').src,
        prevImageSrc: document.getElementById(this.props.id + 'image').src,
      });
      clearInterval(this.timerId);
    }
    },1000)
    return false;
  }
  changeImageWithUrl = (newUrl) => {
    document.getElementById(this.props.id + 'image').src = newUrl;
    if(newUrl !== this.imageSrcAbs && newUrl !== this.state.prevImageSrc){
      let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
      let td = document.getElementById(this.props.id);
      td.style.backgroundColor = 'transparent';
      td.setAttribute('data-is-empty', 'false');
      td.innerHTML = `<img src=${newUrl} alt="img"/>`;
      td.getElementsByTagName('IMG')[0].style.maxWidth = td.getAttribute('colspan') === '1' ? '294px' : '590px';
      td.getElementsByTagName('IMG')[0].setAttribute('width', td.getAttribute('colspan') === '1' ? '294' : '590');
      this.props.changeTextHandler(clickedTemplate.innerHTML);
      this.setState({
        imageSrc: newUrl,
        prevImageSrc: newUrl,
      })
    }
  }

  applyImageSrc(event){
    event.preventDefault();
    let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
    let td = document.getElementById(this.props.id);
    td.style.backgroundColor = 'transparent';
    td.setAttribute('data-is-empty', 'false')
    td.innerHTML = `<img src=${document.getElementById(this.props.id + 'image').src} alt="img"/>`;
    td.getElementsByTagName('IMG')[0].style.maxWidth = td.getAttribute('colspan') === '1' ? '294px' : '590px';
    this.props.changeTextHandler(clickedTemplate.innerHTML);
    this.setState({
      showApply: false,
      imageSrc: document.getElementById(this.props.id + 'image').src
    })
  }

  deleteImageFromGroup(event){
    event.preventDefault();
    clearInterval(this.timerId);
    // let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
    // this.props.changeTextHandler(clickedTemplate.innerHTML);
    this.props.onDeleteImageFromGroupHandler(this.props.id);
  }

  showFileFinder(event){
    if(event.target.tagName === 'A' && event.target.parentNode.id === this.props.id){
      this.changeImageSrc();
    }
    document.getElementById(this.props.clickedTemplate.id).removeEventListener('click', this.showFileFinder);
  }

  componentDidMount(){
    if(document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[1]){
      document.getElementById(this.props.clickedTemplate.id).addEventListener('click', this.showFileFinder.bind(this))
    }
    if(document.getElementById(this.props.id)){
      let newImage = document.getElementById(this.props.id).getElementsByTagName('IMG')[0].src
      let defaultImage = this.imageSrcAbs;
      if(newImage !== defaultImage){
        this.setState({
          imageSrc: newImage,
          prevImageSrc: newImage
        });
    }}else{
      this.setState({
        imageSrc: this.imageSrcAbs,
        prevImageSrc: this.imageSrcAbs
      })
    }
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  render(){
    const { t } = this.props;

    return(
      <div className="image-browse-container">
        <div className="browse-image">
          <img id={this.props.id + 'image'} ref={(img)=>this.imgRefSrc=img} src={this.props.newImgSrc !== this.imageSrcAbs ? this.props.newImgSrc : this.state.imageSrc} alt="Browse" />
        </div>
        <div className="browse-body">
          <p>{t("Upload an image")}</p>
          <input type="file" name="imageUpload" style={{display: 'none'}} id='imageUpload' />
          <a href="javascript:;" id="imageItemBrowse" onClick={this.changeImageSrc.bind(this)}> {t("Browse")} </a>
          <ImageInput defaultImageUrl={this.imageSrcAbs} imagePreviewBlock={this.props.id + 'image'} clickedTemplate={this.props.clickedTemplate} changeImageWithUrl={this.changeImageWithUrl}/>
          {
            this.state.showApply ?
            <a href="" onClick={(event)=>this.applyImageSrc(event)}><i style={{fontSize: '9px'}}>&#9679;</i> {t("Apply")}</a>
            : ''
          }
          { this.props.imageGroup.length > 2 ?
            <a href="" className="imageItemDelete" onClick={(event)=>this.deleteImageFromGroup(event)}><i style={{fontSize: '9px'}}>&#9679;</i> {t("Remove")} </a>
            : ''
          }

        </div>
        <hr style={{paddingLeft:'10px', paddingRight: '10px', marginLeft: '-15px', marginTop: '25px', marginRight: '-15px', border: 'none', borderBottom: '1px solid #ccc'}}/>
      </div>
    )
  }
}

export default translate('translations')(ImageGroupItem);
