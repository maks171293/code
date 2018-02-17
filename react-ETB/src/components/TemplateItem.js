import React from 'react';

class TemplateItem extends React.Component{
  render(){
    return(
      <div
        className="template-item"
        id={this.props.id}
        draggable={true}
        onDragStart={(event)=>{
          event.dataTransfer.setData(this.props.id , event.currentTarget.id);
          this.props.dragableTemplateHandler(this.props.id);
        }}>
        <img src={this.props.img} alt={this.props.text}/>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default TemplateItem
