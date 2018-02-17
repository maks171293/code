import React from 'react';
import ColumnWidthTempl from './columnWidthTempl';

import { translate } from 'react-i18next';


class Settings extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      valueNumb: 1,
      columnWidth1: 300,
      columnWidth2: 300
    }
    this.changeColumnWidth = this.changeColumnWidth.bind(this);
    this.onColumnsDivider = this.onColumnsDivider.bind(this);
    this.changeValueHandler = this.changeValueHandler.bind(this);
  }

  onColumnsDivider(numb){
    //current clicked template
    let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
    //block where we would be dublicate the column
    let blockToManipulate = clickedTemplate.parentNode;
    //template that we would be dublicate
    if(blockToManipulate.childNodes.length > 1){
      let tempToDublColumn = blockToManipulate.childNodes[1];
      tempToDublColumn.style.display = '';
      tempToDublColumn.style.textAlign = 'center';
      tempToDublColumn.style.width = 'inherit';
    }
    //if we need two columns then we do it here
    if(numb === 2){
      //if there is more than one column we return to the beginning
      if(blockToManipulate.childNodes.length > 2){
        return;
      }
      if( blockToManipulate.childNodes.length === 2 && blockToManipulate.children[0].hasAttribute('draggable')){
        return;
      }
      //we get current clicked template and make copy of it
      let copyOfColumn = clickedTemplate.cloneNode(true);
      //we get template from state that we will copy in future
      let templateFromState = this.props.templates.filter(templ=>{
        return templ.id === copyOfColumn.id
      })[0];
      //make new copy of the template to push it to the state
      let newCopyToColumn = {...templateFromState};
      // newCopyToColumn.bgc = this.props.clickedTemplate.bgc;
      //we give to our new column in clickedTemplate it own id
      copyOfColumn.id = `${clickedTemplate.id}-${Date.now()}`;
      //we give to our new column in templates state it own id
      newCopyToColumn.id = copyOfColumn.id;
      //events on our new template click
      copyOfColumn.onclick = (event) => {
        //get current color and backgroundColor of clicked copied column and transform it to hex from rgb
        if(clickedTemplate.style.color){let clickedElementStyleColor = window.getComputedStyle(copyOfColumn, null).color.toString();
        let clickedElementStyleBGC = window.getComputedStyle(copyOfColumn, null).backgroundColor.toString();
        function rgbToHex(num) {
            let rgb = num.slice(4,-1).split(',');
            return "#" + ((1 << 24) + (+rgb[0] << 16) + (+rgb[1] << 8) + +rgb[2]).toString(16).slice(1);
        };
        //add own bgc to it block
        // newCopyToColumn.bgc = rgbToHex(clickedElementStyleBGC);
        //add own color to it block
        newCopyToColumn.color = rgbToHex(clickedElementStyleColor);}
        //add own text to this block
        this.props.clickedTemplate.htmlTemplate = copyOfColumn.innerHTML;
        //make this block clicked in state when ot clicked
        this.props.clickedTemplateHanler(newCopyToColumn);
        //change shoen text in editor to be similar as in the current block
        this.props.changeTextHandler(this.props.clickedTemplate.htmlTemplate);
        this.props.hideEditTemplatePanel();
        this.props.showEditTemplatePanel();
      };
      copyOfColumn.ondragstart = (event)=>{
        event.dataTransfer.setData(copyOfColumn.id, copyOfColumn.id);
        this.props.draggableTemplateHandler(copyOfColumn.id);
      };
      this.props.onTemplateDublicateHandler(newCopyToColumn);
      blockToManipulate.appendChild(copyOfColumn);

      if(!blockToManipulate.classList.contains('divided-columns-text-block')){
        let columnOne = blockToManipulate.children[1];
        let columnTwo = blockToManipulate.children[2];

        let tr = document.createElement('TR');
        tr.classList.add('divided-columns-text-block')
        let tbody = document.createElement('TBODY');
        let table = document.createElement('TABLE');
        table.width = '100%';
        let td = document.createElement('TD');
        td.classList.add('divided-columns-text-block-wrapper');
        td.width = '600'
        blockToManipulate.appendChild(td);
        td.appendChild(table);
        table.appendChild(tbody);
        tbody.appendChild(tr);
        tr.appendChild(columnOne)
        tr.appendChild(columnTwo)
      }

    }else if(numb === 3){
      if(blockToManipulate.childNodes.length > 3){
        return;
      }
      let copyOfColumn1 = clickedTemplate.cloneNode(true);
      let copyOfColumn2 = clickedTemplate.cloneNode(true);
      blockToManipulate.appendChild(copyOfColumn2);
      blockToManipulate.appendChild(copyOfColumn1);
    }else if(numb === 1){
      // if(blockToManipulate.childNodes.length === 2){
      //   return;
      // }
      if(!blockToManipulate.childNodes[0].hasAttribute('draggable')){
        return;
      }
      if(blockToManipulate.childNodes[0].hasAttribute('draggable') && blockToManipulate.childNodes.length === 1){
        return;
      }
      if(blockToManipulate.childNodes.length === 2){
        let childToDelete1 = blockToManipulate.childNodes[1];
        if(childToDelete1 !== clickedTemplate){
          blockToManipulate.removeChild(childToDelete1);
          this.props.onTemplateDeleteHandler([childToDelete1.id]);
        }else{
          let childToDelete2 = blockToManipulate.childNodes[0];
          blockToManipulate.removeChild(childToDelete2);
          this.props.onTemplateDeleteHandler([childToDelete2.id]);
        }
      }
      this.changeColumnWidth(0);
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      if(this.clickedBlock){
        if(this.clickedBlock.childNodes.length === 2){
          this.clickedBlock.childNodes[1].style.width = 'inherit';
        }
      }
    }
  }

  componentWillMount(){
    let columnsParent = document.getElementById(this.props.clickedTemplate.id).parentNode;
    let columns;
    if(columnsParent.classList.contains('divided-columns-text-block') && columnsParent.childNodes.length === 2){
      columns = columnsParent.childNodes.length;
    }else {
      columns = 1;
    }

    if(columns === 1){
      this.setState({
        valueNumb: 1
      })
    }else{
      this.setState({
        valueNumb: 2
      })
    }
    console.log(columns)
  }

  changeValueHandler(event){
    this.setState({
      valueNumb: event.target.value,
    },
    this.onColumnsDivider(+event.target.value));
  }

  changeColumnWidth(typeOfColumnsLook){
    let clickedBlock = document.getElementById(this.props.clickedTemplate.id).parentNode;
    let firstColumn = clickedBlock.childNodes[0];
    let secondColumn = clickedBlock.childNodes[1];
    if(typeOfColumnsLook === 1){
      firstColumn.style.width = "200px";
      secondColumn.style.width = "450px";
      this.props.changeTemplWidthHandler(firstColumn.id, 200);
      this.props.changeTemplWidthHandler(secondColumn.id, 450);
    }else if(typeOfColumnsLook === 2){
      firstColumn.style.width = "inherit";
      secondColumn.style.width = "inherit";
      this.props.changeTemplWidthHandler(firstColumn.id, "inherit");
      this.props.changeTemplWidthHandler(secondColumn.id, "inherit");
    }else if(typeOfColumnsLook === 3){
      firstColumn.style.width = "450px";
      secondColumn.style.width = "200px";

      this.props.changeTemplWidthHandler(firstColumn.id, 450);
      this.props.changeTemplWidthHandler(secondColumn.id, 200);
    }else if(typeOfColumnsLook === 0){
      document.getElementById(this.props.clickedTemplate.id).style.width = 'inherit';
      this.props.changeTemplWidthHandler(this.props.clickedTemplate.id, 'inherit');
    }
  }


  render(){
    const { t } = this.props;

    let columnWidth = (
          <div>
            <label className="label-style">{t("Column Split")}</label>
            <br/>
            <ColumnWidthTempl changeColumnWidth={this.changeColumnWidth} columnType={1} width1={"28%"} width2={"58%"}/>
            <ColumnWidthTempl changeColumnWidth={this.changeColumnWidth} columnType={2} width1={"43%"} width2={"43%"}/>
            <ColumnWidthTempl changeColumnWidth={this.changeColumnWidth} columnType={3} width1={"58%"} width2={"28%"}/>
          </div>
      );
    return(
      <div className="settings-panel">
      <fieldset className='columns-settings' >
        <h5 className="text-style-header">{t("Block Settings")}</h5>
        <div className="widgets-in-settings" >
          <div className="columns-container">
            <label className="label-style">{t("Number of Columns")}</label>
            <br/>
            <div className="select-container">
            <select className="columns-select" defaultValue={this.state.valueNumb} onChange={this.changeValueHandler}>
              <option key="opt-1" >{t("Columns")} </option>
              <option key="opt-2" value="1" > 1 {t("Column")}</option>
              <option key="opt-3" value="2"> 2 {t("Columns")}</option>
            </select>
            </div>
            {
              this.state.valueNumb === '2' || this.state.valueNumb === 2 ? columnWidth : ""
            }
          </div>
        </div>
      </fieldset>
      </div>
    )
  }
}

export default translate('translations')(Settings);
