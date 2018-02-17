import React from 'react';
import Select from 'react-select';
import SocialShareItem from './SocialShareItem';
import Style from './StylePanel';
import SocialItemsLayout from './SocialItemsLayout';
import IconStyleBlock from './IconStyleBlock';
// Images



let contentToShareOptions = [
  {value: "campaign", label: "Campaign page URL"},
  {value: "custom", label: "Custom URL"}
];



let SocialIconTypeOptions = [
  {value: 'solid', label: 'Solid'},
  {value: 'outlined', label: 'Outlined'},
]

let SocialAlignOptions = [
  {value: 'left', label: 'Left'},
  {value: 'center', label: 'Center'},
  {value: 'right', label: 'Right'},
]

let SocialWidthOptions = [
  {value: 'fitToSize', label: 'Fit to size'},
  {value: 'fullWidth', label: 'Full width'}
]
class SocialShareEditor extends React.Component{
  constructor(props){
    super(props);
    this.facebookBlackImg = this.props.mediaBaseUrl + 'outline-dark-facebook.png';
    this.twitterBlackImg = this.props.mediaBaseUrl + 'outline-dark-twitter-96.png';
    this.forwardBlackImg = this.props.mediaBaseUrl + 'outline-dark-forwardtofriend-96.png';
    this.googleplusBlackImg = this.props.mediaBaseUrl + 'outline-dark-googleplus-48.png';
    this.linkedinBlackImg = this.props.mediaBaseUrl + 'outline-dark-linkedin-48.png';
    this.instapaperBlackImg = this.props.mediaBaseUrl + 'outline-dark-instapaper-48.png';
    this.pinterestBlackImg = this.props.mediaBaseUrl + 'outline-dark-pinterest-48.png';
    this.forwardImg = this.props.mediaBaseUrl + 'color-forwardtofriend-128.png';
    this.twitterImg = this.props.mediaBaseUrl + 'color-twitter-128.png';
    this.facebookImg = this.props.mediaBaseUrl + 'color-facebook-128.png';
    this.googleplusImg = this.props.mediaBaseUrl + 'color-googleplus-128.png';
    this.instapaperImg = this.props.mediaBaseUrl + 'color-instapaper-128.png';
    this.pinterestImg = this.props.mediaBaseUrl + 'color-pinterest-128.png';
    this.linkedinImg = this.props.mediaBaseUrl + 'color-linkedin-128.png';
    this.forwardLightImg = this.props.mediaBaseUrl + 'light-forwardtofriend-96.png';
    this.twitterLightImg = this.props.mediaBaseUrl + 'light-twitter-96.png';
    this.facebookLightImg = this.props.mediaBaseUrl + 'light-facebook-96.png';
    this.googleplusLightImg = this.props.mediaBaseUrl + 'light-googleplus-96.png';
    this.instapaperLightImg = this.props.mediaBaseUrl + 'light-instapaper-96.png';
    this.pinterestLightImg = this.props.mediaBaseUrl + 'light-pinterest-96.png';
    this.linkedinLightImg = this.props.mediaBaseUrl + 'light-linkedin-96.png';
    this.forwardGrayImg = this.props.mediaBaseUrl + 'gray-forwardtofriend-96.png';
    this.twitterGrayImg = this.props.mediaBaseUrl + 'gray-twitter-96.png';
    this.facebookGrayImg = this.props.mediaBaseUrl + 'gray-facebook-96.png';
    this.googleplusGrayImg = this.props.mediaBaseUrl + 'gray-googleplus-96.png';
    this.instapaperGrayImg = this.props.mediaBaseUrl + 'gray-instapaper-96.png';
    this.pinterestGrayImg = this.props.mediaBaseUrl + 'gray-pinterest-96.png';
    this.linkedinGrayImg = this.props.mediaBaseUrl + 'gray-linkedin-96.png';
    this.forwardOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-forwardtofriend-96.png';
    this.twitterOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-twitter-96.png';
    this.facebookOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-facebook-96.png';
    this.googleplusOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-googleplus-96.png';
    this.instapaperOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-instapaper-96.png';
    this.pinterestOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-pinterest-96.png';
    this.linkedinOutlineGrayImg = this.props.mediaBaseUrl + 'outline-gray-linkedin-96.png';
    this.forwardOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-forwardtofriend-96.png';
    this.twitterOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-twitter-96.png';
    this.facebookOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-facebook-96.png';
    this.googleplusOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-googleplus-96.png';
    this.instapaperOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-instapaper-96.png';
    this.pinterestOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-pinterest-96.png';
    this.linkedinOutlineLightImg = this.props.mediaBaseUrl + 'outline-light-linkedin-96.png';
    this.forwardOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-forwardtofriend-96.png';
    this.twitterOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-twitter-96.png';
    this.facebookOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-facebook-96.png';
    this.googleplusOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-googleplus-96.png';
    this.instapaperOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-instapaper-96.png';
    this.pinterestOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-pinterest-96.png';
    this.linkedinOutlineColorImg = this.props.mediaBaseUrl + 'outline-color-linkedin-96.png';
    this.forwardDarkImg = this.props.mediaBaseUrl + 'dark-forwardtofriend-96.png';
    this.twitterDarkImg = this.props.mediaBaseUrl + 'dark-twitter-96.png';
    this.facebookDarkImg = this.props.mediaBaseUrl + 'dark-facebook-96.png';
    this.googleplusDarkImg = this.props.mediaBaseUrl + 'dark-googleplus-96.png';
    this.instapaperDarkImg = this.props.mediaBaseUrl + 'dark-instapaper-96.png';
    this.pinterestDarkImg = this.props.mediaBaseUrl + 'dark-pinterest-96.png';
    this.linkedinDarkImg = this.props.mediaBaseUrl + 'dark-linkedin-96.png';
    this.socialItemOutlineDarkIcon = {
      facebookImg: this.facebookBlackImg,
      twitterImg: this.twitterBlackImg,
      forwardImg: this.forwardBlackImg,
      googleplusImg: this.googleplusBlackImg,
      linkedinImg: this.linkedinBlackImg,
      instapaperImg: this.instapaperBlackImg,
      pinterestImg: this.pinterestBlackImg,
    }
    this.socialItemColorIcon = {
      forwardImg: this.forwardImg,
      twitterImg: this.twitterImg,
      facebookImg: this.facebookImg,
      googleplusImg: this.googleplusImg,
      instapaperImg: this.instapaperImg,
      pinterestImg: this.pinterestImg,
      linkedinImg: this.linkedinImg,
    }
    this.socialItemDarkIcon = {
      forwardImg: this.forwardDarkImg,
      twitterImg: this.twitterDarkImg,
      facebookImg: this.facebookDarkImg,
      googleplusImg: this.googleplusDarkImg,
      instapaperImg: this.instapaperDarkImg,
      pinterestImg: this.pinterestDarkImg,
      linkedinImg: this.linkedinDarkImg,
    }
    this.socialItemLightIcon = {
      forwardImg: this.forwardLightImg,
      twitterImg: this.twitterLightImg,
      facebookImg: this.facebookLightImg,
      googleplusImg: this.googleplusLightImg,
      instapaperImg: this.instapaperLightImg,
      pinterestImg: this.pinterestLightImg,
      linkedinImg: this.linkedinLightImg,
    }
    this.socialItemGrayIcon = {
      forwardImg: this.forwardGrayImg,
      twitterImg: this.twitterGrayImg,
      facebookImg: this.facebookGrayImg,
      googleplusImg: this.googleplusGrayImg,
      instapaperImg: this.instapaperGrayImg,
      pinterestImg: this.pinterestGrayImg,
      linkedinImg: this.linkedinGrayImg,
    }
    this.socialItemOutlineLightIcon = {
      forwardImg: this.forwardOutlineLightImg,
      twitterImg: this.twitterOutlineLightImg,
      facebookImg: this.facebookOutlineLightImg,
      googleplusImg: this.googleplusOutlineLightImg,
      instapaperImg: this.instapaperOutlineLightImg,
      pinterestImg: this.pinterestOutlineLightImg,
      linkedinImg: this.linkedinOutlineLightImg,
    }
    this.socialItemOutlineGrayIcon = {
      forwardImg: this.forwardOutlineGrayImg,
      twitterImg: this.twitterOutlineGrayImg,
      facebookImg: this.facebookOutlineGrayImg,
      googleplusImg: this.googleplusOutlineGrayImg,
      instapaperImg: this.instapaperOutlineGrayImg,
      pinterestImg: this.pinterestOutlineGrayImg,
      linkedinImg: this.linkedinOutlineGrayImg,
    }
    this.socialItemOutlineColorIcon = {
      forwardImg: this.forwardOutlineColorImg,
      twitterImg: this.twitterOutlineColorImg,
      facebookImg: this.facebookOutlineColorImg,
      googleplusImg: this.googleplusOutlineColorImg,
      instapaperImg: this.instapaperOutlineColorImg,
      pinterestImg: this.pinterestOutlineColorImg,
      linkedinImg: this.linkedinOutlineColorImg,
    }
    this.socialItemIconStyle = {
      socialItemOutlineDarkIcon: this.socialItemOutlineDarkIcon,
      socialItemColorIcon: this.socialItemColorIcon,
      socialItemDarkIcon: this.socialItemDarkIcon,
      socialItemLightIcon: this.socialItemLightIcon,
      socialItemGrayIcon: this.socialItemGrayIcon,
      socialItemOutlineLightIcon: this.socialItemOutlineLightIcon,
      socialItemOutlineGrayIcon: this.socialItemOutlineGrayIcon,
      socialItemOutlineColorIcon: this.socialItemOutlineColorIcon,
    };
    this.socialsOptions = [
      {value: 'facebook', label: 'Facebook', image: this.facebookImg,  },
      {value: 'twitter', label: 'Twitter', image: this.twitterImg,  },
      {value: 'linkedin', label: 'LinkedIn', image: this.linkedinImg,  },
      {value: 'pinterest', label: 'Pinterest', image: this.pinterestImg,  },
      {value: 'instapaper', label: 'Instapaper', image: this.instapaperImg,  },
      {value: 'googleplus', label: 'Google+', image: this.googleplusImg,  },
      {value: 'forward', label: 'Forward to friend', image: this.forwardImg,  }
    ]
    let socialsServicesTop;
    let socialsServicesBottom;
    let socialsServices;
    if(this.props.clickedTemplate.socialLayout === 'horizontal'){
        socialsServicesTop = [...document.getElementById(this.props.clickedTemplate.id).children[0].children[0].children[0].children].map(item=>{
        return{
          value: item.getAttribute('data-soc-type'),
          id: item.id,
          label: item.getElementsByTagName('TD')[1].children[0].textContent,
          image: item.getElementsByTagName('IMG')[0].src
        }
      });
      socialsServicesBottom = document.getElementById(this.props.clickedTemplate.id).children[0].children[0].children[1] ? [...document.getElementById(this.props.clickedTemplate.id).children[0].children[0].children[1].children].map(item=>{
        return{
          value: item.getAttribute('data-soc-type'),
          id: item.id,
          label: item.getElementsByTagName('TD')[1].children[0].textContent,
          image: item.getElementsByTagName('IMG')[0].src
        }
      }) : [];
    }else{
      socialsServices = document.getElementById(this.props.clickedTemplate.id).children[0].children[0] ? [...document.getElementById(this.props.clickedTemplate.id).children[0].children[0].children].map(item=>{
      return{
        value: item.children[0].getAttribute('data-soc-type'),
        id: item.children[0].id,
        label: item.children[0].getElementsByTagName('TD')[1].children[0].textContent,
        image: item.children[0].getElementsByTagName('IMG')[0].src
      }
    }) : '';
    }
    let iconStyle = document.getElementById(this.props.clickedTemplate.id).getAttribute('iconStyle') ? document.getElementById(this.props.clickedTemplate.id).getAttribute('iconStyle') : 'socialItemOutlineDarkIcon';
    this.state = {
      layout: this.props.clickedTemplate.socialLayout ? this.props.clickedTemplate.socialLayout : 'horizontal',
      tab: 'content-tab',
      contentToShare: 'campaign',
      customURL: null,
      customDescription: '',
      campaignURL: '[WEB_VERSION_URL]',
      socialTitle: '[CAMPAIGN_NAME]',
      socialsServices: this.props.clickedTemplate.socialLayout === 'horizontal' ? [...socialsServicesTop.concat(socialsServicesBottom)] : [...socialsServices],
      socialWidth: this.props.clickedTemplate.elementWidth,
      socialIconType: 'solid',
      socialItemIconStyle: this.socialItemIconStyle[`${iconStyle}`]
    }
    this.onChangeContenToShareHandler = this.onChangeContenToShareHandler.bind(this);
    this.addSocialHandler = this.addSocialHandler.bind(this);
    this.changeSocialService = this.changeSocialService.bind(this);
    this.removeServiceFromSocial = this.removeServiceFromSocial.bind(this);
    this.renderSocialShare = this.renderSocialShare.bind(this);
    this.changeSocialLayout = this.changeSocialLayout.bind(this);
    this.onChangeSocialIconTypeHandler = this.onChangeSocialIconTypeHandler.bind(this);
    this.changeIconStyle = this.changeIconStyle.bind(this);
    this.onChangeCustomUrl = this.onChangeCustomUrl.bind(this);
    this.onChangeCustomDescription = this.onChangeCustomDescription.bind(this);
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

  onChangeContenToShareHandler(value){
    this.setState({
      contentToShare: value.value,
    },()=>{
    this.renderSocialShare(this.props.clickedTemplate.socialLayout)})
    if(value === 'campaign'){
      this.setState({
        customURL: null
      },()=>{
      this.renderSocialShare(this.props.clickedTemplate.socialLayout)})
     }
  }
  onChangeSocialAlignHandler(value){
    this.props.changeFontAlignHandler(value.value);
  }

  onChangeSocialWidthHandler(value){
    this.setState({
      socialWidth: value.value
    },()=>this.props.changeElementWidthHandler(value.value))
  }
  changeSocialLayout(layout){
    this.setState({
      layout
    }, ()=>{
      this.renderSocialShare(layout)
    })

  }
  onChangeSocialIconTypeHandler(type){
    this.setState({
      socialIconType: type.value
    })
    let clickedElement = document.getElementById(this.props.clickedTemplate.id);
    let currentIconStyle = clickedElement.getAttribute('iconStyle');
    if(currentIconStyle === null){
      return;
    }
    let newIconStyle;
    if(type.value === 'solid'){
      if(currentIconStyle.indexOf('Outline') === -1){return
      }else{
        newIconStyle = currentIconStyle.substr(0,10) + currentIconStyle.substr(17);
        this.setState({socialItemIconStyle: this.socialItemIconStyle[newIconStyle]},()=>this.renderSocialShare(this.props.clickedTemplate.socialLayout));
        clickedElement.setAttribute('iconStyle', newIconStyle);
      }
    }else if(type.value === 'outlined'){
      if(currentIconStyle.indexOf('Outline') !== -1){
        return;
      }else{
        newIconStyle = currentIconStyle.substr(0,10) + 'Outline' + currentIconStyle.substr(10);
        this.setState({socialItemIconStyle: this.socialItemIconStyle[newIconStyle]},()=>this.renderSocialShare(this.props.clickedTemplate.socialLayout));
        clickedElement.setAttribute('iconStyle', newIconStyle);
      }
    }
  }

  addSocialHandler(){
    let newSocials = {value: 'facebook', label: 'Facebook', image: this.facebookImg, id: `soc-${Date.now()}` };
    this.setState({
      socialsServices: [...this.state.socialsServices, {...newSocials}]
    }, ()=>this.renderSocialShare(this.props.clickedTemplate.socialLayout));
  }

  changeSocialService(service){
    let newSocialsServices = this.state.socialsServices.map(item=>{
      if(item.id === service.id){
        return service
      }else{
        return item
      }
    });
    this.setState({
      socialsServices: [...newSocialsServices,]
    }, ()=>this.renderSocialShare(this.props.clickedTemplate.socialLayout))
  }

  removeServiceFromSocial(service){
    let newSocialsServices = this.state.socialsServices.filter(item=>{
      return item.id !== service.id
    });

    this.setState({
      socialsServices: [...newSocialsServices]
    },()=>this.renderSocialShare(this.props.clickedTemplate.socialLayout));
  }

  componentDidMount(){
    this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
    let currentHref = document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('A')[0].href;
    let currentUrl = decodeURI(currentHref.slice(currentHref.indexOf('url=') + 4, currentHref.indexOf('%2F&pubid=')))
    let currentDescription = decodeURI(currentHref.slice(currentHref.indexOf('&title=') + 7, currentHref.indexOf('&ct=1')))
    if(this.state.campaignURL !== currentUrl){
      this.setState({
        contentToShare: 'custom',
        customURL: currentUrl,
        customDescription: currentDescription
      })
    }
  }
  changeIconStyle(iconStyle){
    this.setState({socialItemIconStyle: this.socialItemIconStyle[iconStyle]},()=>this.renderSocialShare(this.props.clickedTemplate.socialLayout));
    let clickedElement = document.getElementById(this.props.clickedTemplate.id);
    clickedElement.setAttribute('iconStyle', iconStyle);
    // this.props.changeTextHandler(clickedElement.innerHTML);
  }
  onChangeCustomUrl(event){
    let text = event.target.value;
    this.setState({
      customURL: text,
    },()=>{
      this.renderSocialShare(this.props.clickedTemplate.socialLayout)
    });
  }
  onChangeCustomDescription(event){
    let text = event.target.value;
    this.setState({
      customDescription: text},()=>{
        this.renderSocialShare(this.props.clickedTemplate.socialLayout)
      });
  }

  renderSocialShare(layout){
    let blockToRenderIn = document.getElementById(this.props.clickedTemplate.id).children[0].children[0].children[0];
    let renderedSocials;
    let renderedSocialsNewRow;
    let campaignURL = this.state.customURL ? encodeURI(this.state.customURL) : encodeURI(this.state.campaignURL);
    let socialTitle = this.state.customDescription ? encodeURI(this.state.customDescription) : encodeURI(this.state.socialTitle);
    let urls = {
    instapaper: `https://api.addthis.com/oexchange/0.8/forward/instapaper/offer?url=${campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${socialTitle}&ct=1`,
    pinterest: `https://api.addthis.com/oexchange/0.8/forward/pinterest_share/offer?url=${campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${socialTitle}&ct=1`,
    forward: `[FORWARD_FRIEND_URL]`,
    facebook: `https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=${campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${socialTitle}&ct=1`,
    googleplus: `https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?url=${campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${socialTitle}&ct=1`,
    twitter: `https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=${campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${socialTitle}&ct=1`,
    linkedin: `https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=${campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${socialTitle}&ct=1`
    }
    if(layout === 'horizontal'){
      const socialItemHtml = (id, img, label, value, colspan=1, color='transparent') =>{
        let image = this.state.socialItemIconStyle[`${value}Img`];
        return `<td id=${id} colspan=${colspan} data-soc-type=${value} style="background-color: ${this.props.clickedTemplate.buttonBgc}">
        <table style="font-size: inherit">
        <tr>
        <td width="24">
        <a style="text-decoration: none;" href=${urls[value]} target="_blank"><img width="20" style="width: 20px; margin-top: 5px;" src=${image} alt=${label}/></a>
        </td>
        <td style="word-break: break-all; min-width: 70px;">
        <p style="margin-left: 10px;">${label}</p>
        </td>
        </tr>
        </table>
        </td>`
      }
      if(this.state.socialsServices.length < 5){
        renderedSocials = this.state.socialsServices.map(item=>{
          return(
            socialItemHtml(item.id, item.image, item.label, item.value, 1, this.props.clickedTemplate.buttonBgc)
          )
        }).join('')
        blockToRenderIn.innerHTML = renderedSocials;
        this.props.changeTextHandler(`<table style="padding: 9px; font-size: inherit"><tbody><tr>${renderedSocials}</tr></tbody></table>`);
      }else{
        renderedSocials = this.state.socialsServices.map((item,index)=>{
          if(index < 4){
            return socialItemHtml(item.id, item.image, item.label, item.value, 1, this.props.clickedTemplate.buttonBgc)
          }else{
            return ''
          }
        }).join('');
        renderedSocialsNewRow = this.state.socialsServices.map((item,index)=>{
          if(index === 4){
            let colspan;
            if(this.state.socialsServices.length === 5){
              colspan = 4;
            }else if(this.state.socialsServices.length === 6){
              colspan = 2;
            }else if(this.state.socialsServices.length === 7){
              colspan = 1;
            }
            return socialItemHtml(item.id, item.image, item.label, item.value, colspan, this.props.clickedTemplate.buttonBgc)
          }else if(index === 5){
              let colspan;
              if(this.state.socialsServices.length === 6){
                colspan = 2;
              }else if(this.state.socialsServices.length === 7){
                colspan = 2;
              }
              return socialItemHtml(item.id, item.image, item.label, item.value, colspan, this.props.clickedTemplate.buttonBgc)
          }else if(index === 6){
              let colspan;
              if(this.state.socialsServices.length === 7){
                colspan = 1;
              }
              return socialItemHtml(item.id, item.image, item.label, item.value, colspan, this.props.clickedTemplate.buttonBgc)
          }else{
            return ''
          }
        }).join('');

        blockToRenderIn.parentNode.innerHTML = `<tr>${renderedSocials}</tr><tr>${renderedSocialsNewRow}</tr>`;
        this.props.changeTextHandler(`<table style="padding: 9px; font-size: inherit"><tbody><tr>${renderedSocials}</tr><tr align='center'>${renderedSocialsNewRow}</tr></tbody></table>`);
      }
    }else if(layout === 'vertical'){
      const socialItemHtml = (id, img, label, value, colspan=1, color='transparent') =>{
        let image = this.state.socialItemIconStyle[`${value}Img`];
        return `<td id=${id} colspan=${colspan} data-soc-type=${value} style="background-color: ${this.props.clickedTemplate.buttonBgc}">
        <table style="font-size: inherit">
        <tr>
        <td width="24">
        <a style="text-decoration: none;" href=${urls[value]} target="_blank"><img width="20" style="width: 20px; margin-top: 5px;" src=${image} alt=${label}/></a>
        </td>
        <td style="word-break: break-all; ">
        <p style="margin-left: 10px;">${label}</p>
        </td>
        </tr>
        </table>
        </td>`
      }
      renderedSocials = this.state.socialsServices.map(item=>{
        return(
          `<tr>${socialItemHtml(item.id, item.image, item.label, item.value, this.props.clickedTemplate.buttonBgc)}</tr>`
        )
      }).join('')
      blockToRenderIn.innerHTML = renderedSocials;
      this.props.changeTextHandler(`<table style="padding: 9px; font-size: inherit"><tbody>${renderedSocials}</tbody></table>`);
    }
  }


  render(){
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/instapaper/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/instapaper.png" alt="Instapaper"/></a>
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/pinterest_share/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/pinterest_share.png" alt="Pinterest"/></a>
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/email/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/email.png" alt="Email"/></a>
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/facebook.png" alt="Facebook"/></a>
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/google_plusone_share/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/google_plusone_share.png" alt="Google+"/></a>
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/twitter.png" alt="Twitter"/></a>
    // <a href={`https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=http%3A%2F%2F${this.state.campaignURL}%2F&pubid=${this.props.socialProfileId}&title=${this.state.socialTitle}&ct=1`} target="_blank"><img src="https://cache.addthiscdn.com/icons/v3/thumbs/32x32/linkedin.png" alt="LinkedIn"/></a>
    return(
      <div className="divider-editor">
        <ul className="tabs-panel">
          <li id="content-tab" className="active" onClick={(e)=>{this.onClick(e)}}>Content</li>
          <li id="style-tab" onClick={(e)=>{this.onClick(e)}}>Style</li>
          <li id="settings-tab" onClick={(e)=>{this.onClick(e)}}>Settings</li>
        </ul>
        {
          this.state.tab === 'content-tab' ?
          <div className="social-content">
            <div className="content-share-container">
              <label className="label-style" >Content to share</label>
              <br/>
              <Select
                className="content-to-share-selector"
                name="content-to-share"
                value={this.state.contentToShare ? this.state.contentToShare : ""}
                options={contentToShareOptions}
                onChange={this.onChangeContenToShareHandler.bind(this)}
                clearable={false}
                />
                {
                  this.state.contentToShare === 'custom' ?
                  <div className="custom-url-fields">
                    <div className="custom-url-label">
                      <label className="label-style">Custom URL to share</label><br/>
                      <input className="social-item-text" type="text" defaultValue={this.state.customURL} onChange={this.onChangeCustomUrl.bind(this)} />
                    </div>
                    <div className="custom-descr-label">
                      <label className="label-style">Short description</label><br/>
                      <input className="social-item-text" type="text" defaultValue={this.state.customDescription} onChange={this.onChangeCustomDescription.bind(this)} />
                    </div>
                  </div> : ''
                }
            </div>
            <hr style={{paddingLeft:'10px', paddingRight: '10px', marginLeft: '-15px', marginTop: '-10px', marginRight: '-15px', border: 'none', borderBottom: '1px solid #ccc'}}/>

            <div className="social-items-container">
              <div className="social-share-list">
                {
                  this.state.socialsServices.map((item, key)=>{
                    return <SocialShareItem
                    addSocialHandler={this.addSocialHandler}
                    socialItem={item}
                    key={item.id}
                    id={item.id}
                    socialsServices={this.state.socialsServices}
                    socialsOptions={this.socialsOptions}
                    removeServiceFromSocial={this.removeServiceFromSocial}
                    changeSocialService={this.changeSocialService}
                    mediaBaseUrl={this.props.mediaBaseUrl} />
                  })
                }
              </div>
            </div>
            { this.state.socialsServices.length < 7 ?
              <div style={{textAlign: 'center'}}>
              <span onClick={this.addSocialHandler} className="add-image-button" >Add another Service</span>
            </div> : ''}
            <span className="span-descr"><p>Choose a layout in the Settings tab.</p></span>
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
               <h5 className="text-style-header">Social Share Settings</h5>
                 <div className="social-share-settings-container">
                   <label className="label-style" >Align</label>
                   <br/>
                   <Select
                     className="content-to-share-selector"
                     name="social-share-align"
                     value={this.props.clickedTemplate.blockAlign ? this.props.clickedTemplate.blockAlign : "center"}
                     options={SocialAlignOptions}
                     onChange={this.onChangeSocialAlignHandler.bind(this)}
                     clearable={false}
                     />
                 </div>
                 <div className="social-share-settings-container">
                   <label className="label-style" >Width</label>
                   <br/>
                   <Select
                     className="content-to-share-selector"
                     name="social-share-width"
                     value={this.state.socialWidth ? this.state.socialWidth : ""}
                     options={SocialWidthOptions}
                     onChange={this.onChangeSocialWidthHandler.bind(this)}
                     clearable={false}
                     />
                 </div>
                 <SocialItemsLayout
                  clickedTemplate={this.props.clickedTemplate}
                  changeTextHandler={this.props.changeTextHandler}
                  renderSocialShare={this.renderSocialShare}
                  changeSocialLayout={this.changeSocialLayout}
                  changeSocialServiceLayout={this.props.changeSocialServiceLayout}
                 />
                 <label className="label-style" >Icon Style</label>
                 <br/>
                 <Select
                   className="content-to-share-selector"
                   name="social-icons-type"
                   value={this.state.socialIconType ? this.state.socialIconType : ""}
                   options={SocialIconTypeOptions}
                   onChange={this.onChangeSocialIconTypeHandler.bind(this)}
                   clearable={false}
                   />
                  <div className="icon-style-container">
                    <IconStyleBlock
                    onClick={this.changeIconStyle}
                    iconStyle='socialItemColorIcon'
                    iconOutlineStyle='socialItemOutlineColorIcon'
                    iconType={this.state.socialIconType}
                    images={this.socialItemColorIcon}
                    imagesOutline={this.socialItemOutlineColorIcon}
                    />
                    <IconStyleBlock
                    iconStyle='socialItemDarkIcon'
                    iconOutlineStyle='socialItemOutlineDarkIcon'
                    iconType={this.state.socialIconType}
                    onClick={this.changeIconStyle}
                    images={this.socialItemDarkIcon}
                    imagesOutline={this.socialItemOutlineDarkIcon}
                    />
                    <IconStyleBlock
                    onClick={this.changeIconStyle}
                    iconStyle='socialItemLightIcon'
                    iconType={this.state.socialIconType}
                    iconOutlineStyle='socialItemOutlineLightIcon'
                    images={this.socialItemLightIcon}
                    imagesOutline={this.socialItemOutlineLightIcon}
                    />
                    <IconStyleBlock
                    onClick={this.changeIconStyle}
                    iconStyle='socialItemGrayIcon'
                    iconOutlineStyle='socialItemOutlineGrayIcon'
                    iconType={this.state.socialIconType}
                    images={this.socialItemGrayIcon}
                    imagesOutline={this.socialItemOutlineGrayIcon}
                    />

                  </div>
             </fieldset>
             : ''
           }


      </div>
    )
  }
}

export default SocialShareEditor;
