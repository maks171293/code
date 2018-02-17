import React from 'react';
import { translate } from 'react-i18next';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import Confirm


class ImageInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      imageUrl: '',
      confirmedImageUrl: ''
    }
  }
    onImageChange = (event) => {
      let url = event.target.value;
      this.setState({
        imageUrl: url
      })
    }

    componentWillMount(){
        let currentUrl = document.getElementById(this.props.imagePreviewBlock || 'image-block-image').src;
        if(this.props.defaultImageUrl !== currentUrl){
          this.setState({
            imageUrl: currentUrl,
            confirmedImageUrl: currentUrl
          })
        }
    }

    changeToTheNewImage = ()=>{
      let templateBlock = document.getElementById(this.props.clickedTemplate.id);
    }

    inputAddressHandler = () => {
        let currentUrl = document.getElementById(this.props.imagePreviewBlock || 'image-block-image').src;
        if(this.props.defaultImageUrl !== currentUrl){
          this.setState({
            imageUrl: currentUrl,
            confirmedImageUrl: currentUrl
          })
        }
      }
    openInputHandler = (event) => {
      event.preventDefault();
        this.inputAddressHandler();
        confirmAlert({
        title: '',                        // Title dialog
        message: '',               // Message dialog
        childrenElement: () => {
        return(
          <div>
          <input type="text" placeholder="http://" name="imageUrl" defaultValue={this.state.imageUrl} onChange={this.onImageChange} style={{width: "100%", color: "#333", paddingTop: '5px', paddingBottom: '5px'}} />
          </div>
        )},
        confirmLabel: 'Confirm',                           // Text button confirm
        cancelLabel: 'Cancel',                             // Text button cancel
        onConfirm: () => {
          this.setState({
            confirmedImageUrl: this.state.imageUrl
          });
          this.changeToTheNewImage();
          this.props.changeImageWithUrl(this.state.imageUrl)
        },    // Action after Confirm
        onCancel: () => {
          if(this.state.imageSrc === this.state.confirmedImageUrl){
            return;
          }else{
            return;
          }
        },      // Action after Cancel
      })
    }

  render(){
    const { t } = this.props;
    return(
      <div style={{display: 'inline-block'}}>
        <a href="" onClick={(event)=>this.openInputHandler(event)}><i style={{fontSize: '9px'}}>&#9679;</i> {t("Paste Url")}</a>
      </div>
    )
  }
}

export default translate("translations")(ImageInput)
