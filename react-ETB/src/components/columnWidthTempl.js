import React from 'react';

class ColumnWidthTempl extends React.Component{
  render(){
    return(
      <div className={`${this.props.className} column-templ` }
      onClick={()=>this.props.changeColumnWidth(this.props.columnType)}>
        <span className="left-column-templ" style={{width: this.props.width1}}>

        </span>
        <span className="right-column-templ" style={{width: this.props.width2}}>

        </span>
      </div>
    )
  }
}

export default ColumnWidthTempl;
