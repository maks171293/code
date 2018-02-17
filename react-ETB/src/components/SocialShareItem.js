import React from 'react';
import Select from 'react-select';

class SocialShareItem extends React.Component{
  constructor(props){
    super(props);
    this.removeImg = this.props.mediaBaseUrl + 'remove-circle.png';
    let forwardImg = this.props.mediaBaseUrl + 'color-forwardtofriend-128.png';
    let twitterImg = this.props.mediaBaseUrl + 'color-twitter-128.png';
    let facebookImg = this.props.mediaBaseUrl + 'color-facebook-128.png';
    let googleplusImg = this.props.mediaBaseUrl + 'color-googleplus-128.png';
    let instapaperImg = this.props.mediaBaseUrl + 'color-instapaper-128.png';
    let pinterestImg = this.props.mediaBaseUrl + 'color-pinterest-128.png';
    let linkedinImg = this.props.mediaBaseUrl + 'color-linkedin-128.png';
    this.images = {
      forwardImg,
      twitterImg,
      facebookImg,
      googleplusImg,
      instapaperImg,
      pinterestImg,
      linkedinImg
    }

    this.state = {
      socialService: {}
    }
    // this.setState({
    //   socialService: {...this.props.socialItem}
    // });
    this.onChangeSocialServiceHandler = this.onChangeSocialServiceHandler.bind(this);
    this.onChangeLinkText = this.onChangeLinkText.bind(this);
    this.onRemoveClickHandler = this.onRemoveClickHandler.bind(this);
  }

  onChangeSocialServiceHandler(social){
      this.setState({
        socialService: {...social, id: this.props.id}
      }, ()=>this.props.changeSocialService(this.state.socialService));

  }
  onChangeLinkText(event){
    let text = event.currentTarget.value;
    this.setState({
      socialService: {...this.state.socialService, label: text}
    }, ()=>this.props.changeSocialService(this.state.socialService))
  }
  componentWillMount(){
    this.setState({
      socialService: {...this.props.socialItem, id: this.props.id}
    })
  }

  onRemoveClickHandler(){
    this.props.removeServiceFromSocial(this.state.socialService);
  }

  componentWillUnmount(){
    this.setState({
      socialService: null
    })
  }


  render(){
    return(
      <div className="social-item-container">
        <div className="social-item">
          <div style={{}} className="social-item-image">
            <img style={{display: 'inline-block'}} src={this.images[`${this.state.socialService.value}Img`]} alt={this.state.socialService.label} />
          </div>
          <Select
            className="socia-item-selector"
            name="social-item"
            value={this.state.socialService.value ? this.state.socialService.value : ""}
            options={this.props.socialsOptions}
            onChange={this.onChangeSocialServiceHandler.bind(this)}
            clearable={false}
            />
            {this.props.socialsServices.length > 1 ?
              <div className="remove-social-item">
                <img src={this.removeImg} onClick={this.onRemoveClickHandler} alt="Remove Service" />
              </div> : ""
            }
        </div>
        <div className="social-item-label">
          <label className="label-style">Link text</label><br/>
          <input className="social-item-text" type="text" defaultValue={this.state.socialService.label} onChange={this.onChangeLinkText.bind(this)} />
        </div>
        <hr style={{paddingLeft:'10px', paddingRight: '10px', marginLeft: '-15px', marginTop: '25px', marginRight: '-15px', border: 'none', borderBottom: '1px solid #ccc'}}/>
      </div>
    )
  }
}

export default SocialShareItem;
