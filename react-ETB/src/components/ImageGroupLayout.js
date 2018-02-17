import React from 'react';

class ImageGroupLayout extends React.Component{
  render(){
    return(
      <div onClick={()=>this.props.onChangeImageGroupLayout(this.props.layoutType)} className={`image-group-layout ${this.props.className}`} >
      <span className='firstColumn'>
      </span>
      <span className="secondColumn">
      </span>
      <span className="thirdColumn">
      </span>
      <span className="fourthColumn">
      </span>
      <span className="fifthColumn">
      </span>
      </div>
    )
  }
}

export default ImageGroupLayout;
