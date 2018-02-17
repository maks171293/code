import React from 'react';
import socVerImg from '../images/social/social-it-iv-r.png';
import socHorImg from '../images/social/social-it-ih-r.png';

class SocialItemsLayout extends React.Component{
  constructor(props){
    super(props);

    this.onChangeSocialLayout = this.onChangeSocialLayout.bind(this);
  }
  onChangeSocialLayout(event){
    let layout = event.currentTarget.dataset.layout;
    this.props.changeSocialLayout(layout);
    this.props.changeSocialServiceLayout(layout)
  }

  render(){
    return(
      <div className="social-share-settings-container">
        <label className="label-style" >Layout</label>
        <br/>
        <div className="social-layout-container" >
          <div className="social-vertical-layout" data-layout="vertical" onClick={this.onChangeSocialLayout}>
            <img src={socVerImg} alt="Vertical" />
          </div>
          <div className="social-horisontal-layout" data-layout="horizontal" onClick={this.onChangeSocialLayout}>
            <img src={socHorImg} alt="Horisontal" />
          </div>
        </div>

      </div>
    )
  }
}

export default SocialItemsLayout;
