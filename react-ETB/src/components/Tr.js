import React from 'react';

class Tr extends React.Component{

  render(){
    let {onDropHandler, onDragOver, onDragLeave} = this.props;
    const typeOfTable = () => {
      if(this.props.type === "header"){
        return "start-header-tr"
      }else if(this.props.type === "footer"){
        return "start-footer-tr"
      }else{
        return "start-style-tr"
      }
    }
    let copyImg = this.props.mediaBaseUrl + 'copy.png';
    let deleteImg = this.props.mediaBaseUrl + 'delete.png';
    let moveImg = this.props.mediaBaseUrl + 'move.svg';
    let editImg = this.props.mediaBaseUrl + 'edit.png';
    return(
      <tr style={{minHeight: "5px", display: "block", textAlign: "center", padding: '10px 0px', width: "600px"}}
        onDrop={(event) => onDropHandler(event)}
        onDragOver={(event)=>onDragOver(event)}
        onDragLeave={(event)=> onDragLeave(event)}
        onMouseEnter={(event)=>this.props.onMouseEnter(event)}
        onMouseLeave={(event)=>this.props.onMouseLeave(event)}
        className={typeOfTable()}
      >
      <td>
      <div className="template-block-controls" >
        <span
            className="block-controls control-drag"
            title="Move Block"
            draggable={true}
            onDragStart={()=>this.props.onMoveHandler()}
            >
            <img src={moveImg} alt="Move" />
          </span>
        <span title="Edit Block"
          className="block-controls control-edit"
          onClick={event=>this.props.onEditHandler(event)}
          >
          <img src={editImg} alt="Edit" />
        </span>
        <span title="Copy Block"
          className="block-controls control-copy"
          onClick={event=>this.props.onDublicateHandler(event)}
          ><img src={copyImg} alt="Copy" />
        </span>
        <span
          title="Delete Block"
          className="block-controls control-delete"
          onClick={event=>this.props.onDeleteHandler(event)}
          >
          <img src={deleteImg} alt="Delete" />
        </span>
      </div>
      </td>
      </tr>
    )
  }
}

export default Tr;
