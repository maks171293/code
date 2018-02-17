import React from 'react';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import { translate } from 'react-i18next';

class HoverBlockInstrPanel extends React.Component{
  constructor(props){
    super(props);
    this.bgImgAbs = this.props.mediaBaseUrl + 'image-swap.b5f8492d.svg';
    this.imageTrashAbs = this.props.mediaBaseUrl + 'image-trash.7c466571.svg';
    this.imageCoverAbs = this.props.mediaBaseUrl + 'image-cover.7bf332e8.svg';
    this.imageContainAbs = this.props.mediaBaseUrl + 'image-contain.55db5b89.svg';
    this.imageRepeatAbs = this.props.mediaBaseUrl + 'image-repeat.94d29178.svg';
    this.state = {
      bgImage: this.bgImgAbs,
      showInstr: false,
      imagePos: 'Fill',
      imageCover: this.imageCoverAbs
    }
    this.onChangeBgHandler = this.onChangeBgHandler.bind(this);
  }
  onChangeBgHandler(colors){
    this.props.blockColorHandler(colors.color);
  }
  changeImageSrc(){
    let iframeWindow = window.open(window.location.origin + this.props.managerUrl, '', 'height=500,width=900');
    iframeWindow.imageSrc = this.props.tableClass + '-image';
    iframeWindow.imageBgc = this.props.tableClass;
    this.setState({
      showInstr: true
    })
    return false;
  }
  changeImagePos(){
    let currentTable = document.querySelector('.'+this.props.tableClass)
    if(this.state.imagePos === 'Fill'){
      this.setState({
        imagePos: 'Fit',
        imageCover: this.imageContainAbs
      },()=>{
        currentTable.setAttribute('data-bg-size', 'contain')
        currentTable.style.backgroundSize = 'auto';
        currentTable.style.backgroundRepeat = 'no-repeat';
        currentTable.style.backgroundPosition = 'center';
      })
    }else if(this.state.imagePos === 'Tile'){
      this.setState({
        imagePos: 'Fill',
        imageCover: this.imageCoverAbs
      }, ()=>{
        currentTable.setAttribute('data-bg-size', 'cover');
        currentTable.style.backgroundSize = 'cover';
        currentTable.style.backgroundRepeat = 'no-repeat';
        currentTable.style.backgroundPosition = 'center';
      })
    }else if(this.state.imagePos === 'Fit'){
      this.setState({
        imagePos: 'Tile',
        imageCover: this.imageRepeatAbs
      },()=>{
        currentTable.setAttribute('data-bg-size', 'repeat');
        currentTable.style.backgroundSize = 'auto';
        currentTable.style.backgroundRepeat = 'repeat'
        currentTable.style.backgroundPosition = 'center'
      })
    }
  }
  deleteBgImage(){
    this.setState({
      showInstr: false,
      bgImage: this.bgImgAbs
    });
    let currentTablePos = document.querySelector('.'+this.props.tableClass);
    currentTablePos.style.backgroundImage = 'none';
    document.getElementById(this.props.tableClass + '-image').src = this.bgImgAbs;
  }
  componentDidMount(){
    let currentTablePos = document.querySelector('.'+this.props.tableClass).getAttribute('data-bg-size');
    if(currentTablePos === 'cover'){
      this.setState({
        imagePos: 'Fill',
        imageCover: this.imageCoverAbs
      })
    }else if(currentTablePos === 'contain'){
      this.setState({
        imagePos: 'Fit',
        imageCover: this.imageContainAbs
      })
    }else if(currentTablePos === 'repeat'){
      this.setState({
        imagePos: 'Tile',
        imageCover: this.imageRepeatAbs
      })
    }
  }

  render(){
    const { t } = this.props;
    return(
      <div className="bg-table-block-intruments hide">
      <div>
        <span className="bg-table-block-color">
          <ColorPicker
            animation="slide-up"
            enableAlpha={false}
            color={this.props.blockColor}
            onChange={this.onChangeBgHandler}
            />
            <span>{t("Color")}</span>
        </span>
        <span style={{textAlign: 'center'}} className="bg-table-block-image" onClick={this.changeImageSrc.bind(this)}>
          <img style={{width: '21px', height: '21px'}} src={this.state.bgImage} id={this.props.tableClass + '-image'} alt="BG IMG" />
          <span>{t("Image")}</span>
        </span>
        {
          this.state.showInstr ?   <span style={{textAlign: 'center'}} className="bg-table-block-image" onClick={this.changeImagePos.bind(this)}>
              <img style={{width: '21px', height: '21px'}} src={this.state.imageCover} alt="BG IMG" />
              <span>{this.state.imagePos}</span>
            </span> : ''
        }
        {
          this.state.showInstr ? <span style={{textAlign: 'center'}} className="bg-table-block-image" onClick={this.deleteBgImage.bind(this)}>
            <img style={{width: '21px', height: '21px'}} src={this.imageTrashAbs} alt="BG IMG" />
            <span>{t("Clear")}</span>
          </span> : ''
        }

        </div>
      </div>
    )
  }
}

export default translate("translations")(HoverBlockInstrPanel);
