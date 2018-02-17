import React from 'react';

class IconStyleBlock extends React.Component{
  constructor(props){
    super(props);
    this.changeIconStyle = this.changeIconStyle.bind(this);
  }
  changeIconStyle(){
    if(this.props.iconType === 'solid'){
      this.props.onClick(this.props.iconStyle);
    }else if(this.props.iconType === 'outlined'){
      this.props.onClick(this.props.iconOutlineStyle)
    }
  }
  // componentWillReceiveProps(nextProps){
  //   if(this.props.iconType !== nextProps.iconType){
  //     if(this.props.iconType === 'solid'){
  //       this.props.onClick(this.props.iconStyle);
  //     }else if(this.props.iconType === 'outlined'){
  //       this.props.onClick(this.props.iconOutlineStyle)
  //     }
  //   }
  // }
  render(){
    let renderSocStyleBlock = ()=>{
      if(this.props.iconType === 'solid'){
        return (
          <div onClick={this.changeIconStyle} className="icon-color icon-style-block">
            <img src={this.props.images.facebookImg} alt="icon style"/>
            <img src={this.props.images.twitterImg} alt="icon style"/>
            <img src={this.props.images.forwardImg} alt="icon style"/>
          </div>
        )
      }else if(this.props.iconType === 'outlined'){
        return (
          <div onClick={this.changeIconStyle} className="icon-color icon-style-block">
            <img src={this.props.imagesOutline.facebookImg} alt="icon style"/>
            <img src={this.props.imagesOutline.twitterImg} alt="icon style"/>
            <img src={this.props.imagesOutline.forwardImg} alt="icon style"/>
          </div>
        )
      }
    }
    return (
      <div style={{display: 'inline-block'}}>
        {
          renderSocStyleBlock()
        }
      </div>
    )
  }
}

export default IconStyleBlock;
