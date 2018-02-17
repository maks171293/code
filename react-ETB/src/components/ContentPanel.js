import React from 'react';

// import CKEditor from "react-ckeditor-component";
import CkeEditor from './Editor';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numbOfColumns: 1,
      currentColumnNumb: 1,
      activeColumnTemplate: {},
    }
  }

  componentWillMount(){
    this.checkColumnNumbers();
  }

  checkColumnNumbers = ()=>{
    let blockWithColumns = document.getElementById(this.props.clickedTemplate.id).parentNode;
    let blockWithColumnsLength = blockWithColumns.children.length;
    if(blockWithColumns && blockWithColumns.classList.contains('divided-columns-text-block')){
      this.setState({
        numbOfColumns: (blockWithColumnsLength)
      }, ()=>{
        if(this.state.numbOfColumns > 1){
          this.checkActiveColumn()
        }
      })
    }else{
      this.setState({
        numbOfColumns: (blockWithColumnsLength - 1)
      }, ()=>{
        if(this.state.numbOfColumns > 1){
          this.checkActiveColumn()
        }
      })
    }
  }

  checkActiveColumn = () =>{
      let activeTemplate = {...this.props.clickedTemplate};
      let blockWithColumns = [...document.getElementById(activeTemplate.id).parentNode.children];
      blockWithColumns.forEach((item, index)=>{
        if(item.id === activeTemplate.id){
          document.getElementById('columnCheckHandler').children[index].classList.add('active');
          this.setState({
            currentColumnNumb: index + 1
          })
        }
      })
  }



  changeActiveTemplate = (activeTemplateNumb, event) => {
    let checkedColumn = document.getElementById(this.props.clickedTemplate.id).parentNode.children[activeTemplateNumb - 1];
    let newActiveColumn = this.props.templates.find((column)=>{
      return column.id === checkedColumn.id
    });
    if(this.state.numbOfColumns === 2){
      [...document.getElementById('columnCheckHandler').children].forEach(item=>{item.classList.remove('active')})
      event.target.classList.add('active')
    }
    this.props.clickedTemplateHanler(newActiveColumn);
    this.props.hideEditTemplatePanel();
    this.props.showEditTemplatePanel();
    this.setState({
      activeColumnTemplate: newActiveColumn,
      currentColumnNumb: activeTemplateNumb
    });
  }

  render(){
    return(
      <div className="content-panel">
        {this.state.numbOfColumns === 2 ?
          <div className="check-content-item" id="columnCheckHandler">
            <span className="check-item" onClick={(event)=>{this.changeActiveTemplate(1, event)}}>Column 1</span>
            <span className="check-item" onClick={(event)=>{this.changeActiveTemplate(2, event)}}> Column 2 </span>
          </div> : <div/>
         }
         {this.state.currentColumnNumb === 1 ?
           <CkeEditor editorConfig={this.props.editorConfig}
           hideEditTemplatePanel={this.props.hideEditTemplatePanel}
           showEditTemplatePanel={this.props.showEditTemplatePanel}
           currentColumnNumb={this.state.currentColumnNumb}
           editorScriptUrl={this.props.editorScriptUrl}
           activeCaption={this.props.activeCaption}
           onChangeTextHandler={this.props.onChangeTextHandler}
           clickedTemplate={this.props.clickedTemplate}
           changeTextHandler={this.props.changeTextHandler}
           mouseOveredTemplate={this.props.mouseOveredTemplate}/> :

           <div>
           </div>
         }
         {this.state.currentColumnNumb === 2 ?
           <CkeEditor editorConfig={this.props.editorConfig}
           hideEditTemplatePanel={this.props.hideEditTemplatePanel}
           showEditTemplatePanel={this.props.showEditTemplatePanel}
           currentColumnNumb={this.state.currentColumnNumb}
           editorScriptUrl={this.props.editorScriptUrl}
           activeCaption={this.props.activeCaption}
           onChangeTextHandler={this.props.onChangeTextHandler}
           clickedTemplate={this.props.clickedTemplate}
           changeTextHandler={this.props.changeTextHandler}
           mouseOveredTemplate={this.props.mouseOveredTemplate}/> :

           <div>
           </div>
         }

      </div>
    )
  }
}

export default Content;
