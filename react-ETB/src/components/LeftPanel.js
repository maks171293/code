import React from 'react';
import Tr from './Tr';
import HoverBlockInstrPanel from './HoverBlockInstrPanel';
import { confirmAlert } from 'react-confirm-alert'; // Import Confirm
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css for confirm
// import facebookImg from '../images/social/outline-dark-facebook.png';
// import twitterimg from '../images/social/outline-dark-twitter-96.png';
// import linkedinBlackImg from '../images/social/outline-dark-linkedin-48.png';
import { translate } from 'react-i18next';



class LeftPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      templates: [],
      headerBlockColor: "#f7f7f7",
      contentBlockColor: "#fff",
      footerBlockColor: "#333333",
    }

    this.imgBlockSrc = this.props.mediaBaseUrl + 'empty-image.svg';
    this.facebookImg = this.props.mediaBaseUrl + 'outline-dark-facebook.png';
    this.twitterimg = this.props.mediaBaseUrl + 'outline-dark-twitter-96.png';
    this.linkedinBlackImg = this.props.mediaBaseUrl + 'outline-dark-linkedin-48.png';

    this.onDropHandler = this.onDropHandler.bind(this);
    this.onDragOverHandler = this.onDragOverHandler.bind(this);
    this.onDragLeaveHandler = this.onDragLeaveHandler.bind(this);
    this.onTemplateClick = this.onTemplateClick.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onDublicateHandler = this.onDublicateHandler.bind(this);
    this.onColumnsHandler = this.onColumnsHandler.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
    this.headerBlockColorHandler = this.headerBlockColorHandler.bind(this);
    this.footerBlockColorHandler = this.footerBlockColorHandler.bind(this);
    this.contentBlockColorHandler = this.contentBlockColorHandler.bind(this);
    this.onTableLeave = this.onTableLeave.bind(this);
    this.renderFromHtml = this.renderFromHtml.bind(this);
  }
// Handlers to change bg color of the table block
headerBlockColorHandler(color){
  this.setState({
    headerBlockColor: color
  })
}
footerBlockColorHandler(color){
  this.setState({
    footerBlockColor: color
  })
}
contentBlockColorHandler(color){
  this.setState({
    contentBlockColor: color
  })
}




/**
Edit handler is running when user click on it edit icon of the block
**/
  onMoveHandler(event){
    event.dataTransfer.setData(event.currentTarget.parentNode.parentNode.nextSibling.id, event.currentTarget.parentNode.parentNode.nextSibling.id);
    this.props.draggableTemplateHandler(event.currentTarget.parentNode.parentNode.nextSibling.id);
    event.dataTransfer.setDragImage(event.currentTarget.parentNode.parentNode.nextSibling, 10, 100);
  }
  onEditHandler(event){
    //Click is on the span. Get the grandparent od the span and get it all childs
    let clickedBlockChilds = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
    let clickedBlock;
    if( clickedBlockChilds[1] && clickedBlockChilds[1].classList.contains('divided-columns-text-block-wrapper')){
      clickedBlockChilds = event.currentTarget.parentNode.parentNode.nextSibling.childNodes[0].childNodes[0].childNodes[0].childNodes;
    }
    //get the clicked block by id "exist-..."
    for(let i = 0; i<clickedBlockChilds.length; i++){
      if(clickedBlockChilds[i].id.indexOf('exist') !== -1){
        clickedBlock = clickedBlockChilds[i];
      }else{
        clickedBlock = this.props.clickedTemplate;
      }
    }

    //filter this template from the state templates
    let clickedTemplateItem = this.props.templates.filter((template) => {
      return template.id === clickedBlock.id;});
    //If it exist it becomes clicked block
    if(clickedTemplateItem[0] !== null){
      if(!this.props.clickedTemplate){
        this.props.clickedTemplateHanler(clickedTemplateItem[0]);
        this.props.changeTextHandler(clickedBlock.innerHTML);
        // this.props.hideEditTemplatePanel();
        this.props.showEditTemplatePanel();
        return;
      }
      if(this.props.clickedTemplate && this.props.clickedTemplate.id !== clickedBlock.id){
        this.props.clickedTemplateHanler(clickedTemplateItem[0]);
        this.props.changeTextHandler(clickedBlock.innerHTML);
        this.props.hideEditTemplatePanel();
        this.props.showEditTemplatePanel();
        return;
      }
      if(clickedBlock.id === clickedTemplateItem[0].id){
        // this.props.hideEditTemplatePanel();
        this.props.showEditTemplatePanel();
        return;
      }
    }
    //show panel editor

  }


  onColumnsHandler(event, numb){
    let blockToManipulate = event.currentTarget.parentNode;
    let tempToDublColumn = blockToManipulate.childNodes[1];
    if(numb === 2){
      if(blockToManipulate.childNodes.length > 2){
        return;
      }
      let copyOfColumn = tempToDublColumn.cloneNode(true);
      let templateFromState = this.props.templates.filter(templ=>{
        return templ.id === copyOfColumn.id
      })[0];
      let newCopyToColumn = {...templateFromState};
      copyOfColumn.id = `${tempToDublColumn.id}-${Date.now()}`;
      copyOfColumn.onclick = (event) => {this.onTemplateClick(event)};
      copyOfColumn.ondragstart = (event)=>{
        event.dataTransfer.setData(copyOfColumn.id, copyOfColumn.id);
        this.props.draggableTemplateHandler(copyOfColumn.id);
      };
      newCopyToColumn.id = copyOfColumn.id;
      this.props.onTemplateDublicateHandler(newCopyToColumn);
      blockToManipulate.appendChild(copyOfColumn);
    }else if(numb === 3){
      if(blockToManipulate.childNodes.length > 3){
        return;
      }
      let copyOfColumn1 = tempToDublColumn.cloneNode(true);
      let copyOfColumn2 = tempToDublColumn.cloneNode(true);
      blockToManipulate.appendChild(copyOfColumn2);
      blockToManipulate.appendChild(copyOfColumn1);
    }
  }

/* Delete handler is runnong when user click on delete icon on the block. It delete from dom and from state*/
  onDeleteHandler(event){
    let clickedBlockChilds = event.currentTarget.parentNode.parentNode.parentNode.childNodes;
    let clickedBlock = [];
    //get the clicked block by id "exist-..." and pushing all templates in it to the array "clicked Block"
    for(let i = 0; i<clickedBlockChilds.length; i++){
      if(clickedBlockChilds[i].id.indexOf('exist') !== -1){
        clickedBlock.push(clickedBlockChilds[i].id)
      }
    }

    let targetToDelete = event.currentTarget.parentNode.parentNode.parentNode.parentNode;
    // let clickedTemplate = event.currentTarget.parentNode.nextSibling;
      //Delete from the table
    let blockToDelete = event.currentTarget.parentNode.parentNode.parentNode;
    const { t } = this.props;
    let title = t("Confirm delete action");
    let message = t('Are you sure you want to delete this?');
    confirmAlert({
      title: title,                        // Title dialog
      message: message,       // Custom UI or Component
      confirmLabel: 'Delete',                           // Text button confirm
      cancelLabel: 'Cancel',                             // Text button cancel
      onConfirm: () => {
        if(this.props.clickedTemplate){
          this.props.clickedTemplateHanler(null);
          this.props.hideEditTemplatePanel();
        }
        //Delete from DOM
        blockToDelete.parentNode.removeChild(blockToDelete);
        //Delete from this.state.templates
        this.props.onTemplateDeleteHandler(clickedBlock);

        // this.props.clickedTemplateHanler(null);
        if(targetToDelete.childNodes.length < 2 ){
          targetToDelete.childNodes[0].classList.add("start-style-tr");}
      },    // Action after Confirm
      onCancel: () => { },      // Action after Cancel
    });
    //Add block to drop the content when everithing is deleted

  }


  onDublicateHandler(event){
    let clickedBlock = event.currentTarget.parentNode.parentNode.parentNode;
    let blockChild1;
    let blockChild2;
    let blockToCopy;
    if(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].classList.contains('divided-columns-text-block-wrapper')){
      clickedBlock = event.currentTarget.parentNode.parentNode.nextSibling.childNodes[0].childNodes[0].childNodes[0];
      if(clickedBlock.childNodes.length === 1){
        //Get all the childs form clicked Block
        blockChild1 = clickedBlock.childNodes[0];
        //Find this childs in state.templates
        let templateFromState = this.props.templates.filter(templ=>{
          return templ.id === blockChild1.id
        })[0];
        //Make the copy of this object in state
        let newBlockChild1toState = {...templateFromState};
        //Make copy of the block we need to dublicate
        blockToCopy = blockChild1.parentNode.parentNode.parentNode.parentNode.parentNode.cloneNode(true);
        //Make this child to have all methods as the original block childs
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].id = `${blockChild1.id}-${Date.now()}`;
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].draggable = false;
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].onclick = (event) => {this.onTemplateClick(event)};
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].ondragstart = (event)=>{
          return false;
          // event.dataTransfer.setData(blockToCopy.childNodes[1].id, blockToCopy.childNodes[1].id);
          // this.props.draggableTemplateHandler(blockToCopy.childNodes[1].id);
        };
        //Push this child to state
        newBlockChild1toState.id = blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].id
        this.props.onTemplateDublicateHandler(newBlockChild1toState);
      }else if(clickedBlock.childNodes.length === 2){
        blockChild1 = clickedBlock.childNodes[0];
        blockChild2 = clickedBlock.childNodes[1];
        blockToCopy = blockChild1.parentNode.parentNode.parentNode.parentNode.parentNode.cloneNode(true);
        let templateFromState1 = this.props.templates.filter(templ=>{
          return templ.id === blockChild1.id
        })[0];
        let templateFromState2 = this.props.templates.filter(templ=>{
          return templ.id === blockChild2.id
        })[0];
        let newBlockChild1toState = {...templateFromState1};
        let newBlockChild2toState = {...templateFromState2}


        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].id = `${blockChild1.id}-${Date.now()}`;
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].onclick = (event) => {this.onTemplateClick(event)};
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].ondragstart = (event)=>{
          return false;
          // event.dataTransfer.setData(blockToCopy.childNodes[1].id, blockToCopy.childNodes[1].id);
          // this.props.draggableTemplateHandler(blockToCopy.childNodes[1].id);
        };
        newBlockChild1toState.id = blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].id;
        this.props.onTemplateDublicateHandler(newBlockChild1toState);
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].id = `${blockChild1.id}-${Date.now()}`;
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].onclick = (event) => {this.onTemplateClick(event)};
        blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].ondragstart = (event)=>{
          return false;
          // event.dataTransfer.setData(blockToCopy.childNodes[1].id, blockToCopy.childNodes[1].id);
          // this.props.draggableTemplateHandler(blockToCopy.childNodes[1].id);
        };
        newBlockChild2toState.id = blockToCopy.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].id;
        this.props.onTemplateDublicateHandler(newBlockChild2toState);
      }
    }else{
      if(clickedBlock.childNodes.length === 2){
        //Get all the childs form clicked Block
        blockChild1 = clickedBlock.childNodes[1];
        //Find this childs in state.templates
        let templateFromState = this.props.templates.filter(templ=>{
          return templ.id === blockChild1.id
        })[0];
        //Make the copy of this object in state
        let newBlockChild1toState = {...templateFromState};
        //Make copy of the block we need to dublicate
        blockToCopy = blockChild1.parentNode.cloneNode(true);
        //Make this child to have all methods as the original block childs
        blockToCopy.childNodes[1].id = `${blockChild1.id}-${Date.now()}`;
        blockToCopy.childNodes[1].draggable = false;
        blockToCopy.childNodes[1].onclick = (event) => {this.onTemplateClick(event)};
        blockToCopy.childNodes[1].ondragstart = (event)=>{
          return false;
          // event.dataTransfer.setData(blockToCopy.childNodes[1].id, blockToCopy.childNodes[1].id);
          // this.props.draggableTemplateHandler(blockToCopy.childNodes[1].id);
        };
        //Push this child to state
        newBlockChild1toState.id = blockToCopy.childNodes[1].id
        this.props.onTemplateDublicateHandler(newBlockChild1toState);
      }else if(clickedBlock.childNodes.length === 3){
        blockChild1 = clickedBlock.childNodes[1];
        blockChild2 = clickedBlock.childNodes[2];
        blockToCopy = blockChild1.parentNode.cloneNode(true);
        let templateFromState1 = this.props.templates.filter(templ=>{
          return templ.id === blockChild1.id
        })[0];
        let templateFromState2 = this.props.templates.filter(templ=>{
          return templ.id === blockChild2.id
        })[0];
        let newBlockChild1toState = {...templateFromState1};
        let newBlockChild2toState = {...templateFromState2}


        blockToCopy.childNodes[1].id = `${blockChild1.id}-${Date.now()}`;
        blockToCopy.childNodes[1].onclick = (event) => {this.onTemplateClick(event)};
        blockToCopy.childNodes[1].ondragstart = (event)=>{
          return false;
          // event.dataTransfer.setData(blockToCopy.childNodes[1].id, blockToCopy.childNodes[1].id);
          // this.props.draggableTemplateHandler(blockToCopy.childNodes[1].id);
        };
        newBlockChild1toState.id = blockToCopy.childNodes[1].id;
        this.props.onTemplateDublicateHandler(newBlockChild1toState);
        blockToCopy.childNodes[2].id = `${blockChild1.id}-${Date.now()}`;
        blockToCopy.childNodes[2].onclick = (event) => {this.onTemplateClick(event)};
        blockToCopy.childNodes[2].ondragstart = (event)=>{
          return false;
          // event.dataTransfer.setData(blockToCopy.childNodes[1].id, blockToCopy.childNodes[1].id);
          // this.props.draggableTemplateHandler(blockToCopy.childNodes[1].id);
        };
        newBlockChild2toState.id = blockToCopy.childNodes[2].id;
        this.props.onTemplateDublicateHandler(newBlockChild2toState);
      }

    }

    //Add all methods to the copied block from original
    blockToCopy.querySelector('.control-delete').onclick = (event) => {
      this.onDeleteHandler(event);
    }
    blockToCopy.querySelector('.control-edit').onclick = (event) => {
      this.onEditHandler(event);
    }
    blockToCopy.querySelector('.control-copy').onclick = (event) => {
      this.onDublicateHandler(event);
    }
    blockToCopy.querySelector('.control-drag').ondragstart = (event) => {
      this.onMoveHandler(event);
    }
    blockToCopy.classList.remove('on-drag-over');
    blockToCopy.ondragleave = (event)=>{this.onDragLeaveHandler(event)};
    blockToCopy.ondragover = (event)=>{this.onDragOverHandler(event) };
    blockToCopy.ondrop = (event)=>{
      this.onDropHandler(event);
    };
    blockToCopy.onmouseenter = (event)=>{this.onMouseEnterHandler(event)};
    blockToCopy.onmouseleave = (event)=>{this.onMouseLeaveHandler(event)};
    if(!this.props.draggableTemplate){
      blockToCopy.classList.remove('hide-drop-content-lighting');
    }
    //Insert new block after mouse overed block
    if(event.currentTarget.parentNode.parentNode.parentNode.childNodes[1].classList.contains('divided-columns-text-block-wrapper')){
      clickedBlock.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(blockToCopy, clickedBlock.nextSibling);
    }else{
      clickedBlock.parentNode.insertBefore(blockToCopy, clickedBlock.nextSibling);
    }

  }


  onTemplateClick(event){
    if(this.props.templates.filter((template) => template.id === event.currentTarget.id)[0] !== undefined){
      let clickedTemplateItem = this.props.templates.filter((template) => {
        return template.id === event.currentTarget.id;
      });
      if(!this.props.clickedTemplate){
        this.props.clickedTemplateHanler(clickedTemplateItem[0]);
        this.props.changeTextHandler(event.currentTarget.innerHTML);
        this.props.showEditTemplatePanel();
        return;
      }
      if(this.props.clickedTemplate && this.props.clickedTemplate.id !== event.currentTarget.id){
        this.props.clickedTemplateHanler(clickedTemplateItem[0]);
        this.props.changeTextHandler(event.currentTarget.innerHTML);
        this.props.hideEditTemplatePanel();
        this.props.showEditTemplatePanel();
      }

    }
    if(event.currentTarget.id === this.props.clickedTemplate.id){
      // this.props.showEditTemplatePanel();
      this.props.showEditTemplatePanel();
      return;
    }
    // this.props.hideEditTemplatePanel();
    // this.props.showEditTemplatePanel();
  }

  componentWillReceiveProps(nextProps, nextState){
    if(this.props.showEditPanel !== nextProps.showEditPanel){
      if(nextProps.showEditPanel === true){
        document.querySelector('.right-column').style.display = 'none';
      }else{
        document.querySelector('.right-column').style.display = 'flex';
      }
    }
    if(this.props.clickedTemplate !== nextProps.clickedTemplate){
      if(nextProps.clickedTemplate){
        let {clickedTemplate} = nextProps;
        let clickedElement = document.getElementById(nextProps.clickedTemplate.id);
        if(!clickedElement){return}
        if(clickedTemplate.bgc && clickedTemplate.templateId !== 'template-button'){
          clickedElement.parentNode.style.backgroundColor = clickedTemplate.bgc;
        }
        if(clickedTemplate.imageAlign && clickedTemplate.templateId === "template-img"){
          if(clickedElement){
            clickedElement.style.textAlign = clickedTemplate.imageAlign;
          }
        }
        if(clickedTemplate.buttonBgc){
          if(clickedTemplate.templateId === 'template-button'){
            clickedElement.getElementsByTagName('TD')[0].style.backgroundColor = clickedTemplate.buttonBgc;
          }
          if(clickedTemplate.templateId === 'template-soc'){
            if(clickedTemplate.socialLayout === 'horizontal'){
              [...clickedElement.getElementsByTagName('TR')[0].children].map(elem=>{
                elem.style.backgroundColor = clickedTemplate.buttonBgc
                return elem;
              })
            }else if(clickedTemplate.socialLayout === 'vertical'){
              [...clickedElement.children[0].children[0].children].map(elem=>{
                elem.children[0].style.backgroundColor = clickedTemplate.buttonBgc
                return elem;
              })
            }
          }
        }
        if(!clickedTemplate.bgc && clickedTemplate.templateId !== 'template-img'){
          clickedElement.parentNode.style.backgroundColor = 'transparent';
        }
        if(!clickedTemplate.blockAlign){
          clickedElement.parentNode.style.textAlign = 'center';
        }
        clickedElement.style.color = clickedTemplate.color;
        if(clickedTemplate.color && clickedTemplate.templateId === 'template-button'){
          clickedElement.getElementsByTagName('A')[0].style.color = clickedTemplate.color;
        }
        clickedElement.innerHTML = clickedTemplate.htmlTemplate;
        if(clickedTemplate.color && clickedTemplate.templateId === 'template-button'){
          clickedElement.getElementsByTagName('A')[0].style.color = clickedTemplate.color;
        }
        if(clickedTemplate.width){
          clickedElement.style.width = clickedTemplate.width + "px";
        }
        if(clickedTemplate.blockFontFamily){
          clickedElement.parentNode.style.fontFamily = clickedTemplate.blockFontFamily;
        }
        if(clickedTemplate.blockFontSize){
          clickedElement.parentNode.style.fontSize = clickedTemplate.blockFontSize;
        }
        if(clickedTemplate.blockFontStyle){
          clickedElement.parentNode.style.fontStyle = clickedTemplate.blockFontStyle;
        }
        if(clickedTemplate.blockFontWeight){
          clickedElement.parentNode.style.fontWeight = clickedTemplate.blockFontWeight;
        }
        if(clickedTemplate.elementWidth){
          if(clickedTemplate.elementWidth === 'fullWidth'){
            clickedElement.children[0].style.width = '100%';
            if(clickedTemplate.templateId === "template-button"){
              clickedElement.style.width = '100%'
            }
          }else{
            clickedElement.children[0].style.width = 'initial';

          }
        }
        if(clickedTemplate.buttonBorder){
          if(clickedTemplate.socialLayout === 'horizontal'){
            [...clickedElement.getElementsByTagName('TR')[0].children].map(elem=>{
              elem.style.border = clickedTemplate.buttonBorder;
              return elem;
            })
          }else if(clickedTemplate.socialLayout === 'vertical'){
            [...clickedElement.children[0].children[0].children].map(elem=>{
              elem.children[0].style.border = clickedTemplate.buttonBorder;
              return elem;
            })
          }
          if(clickedTemplate.templateId === 'template-button'){
            clickedElement.getElementsByTagName('TD')[0].style.border = clickedTemplate.buttonBorder;
          }
        }
        if(clickedTemplate.blockAlign){
          clickedElement.style.textAlign = clickedTemplate.blockAlign;
          clickedElement.parentNode.style.textAlign = clickedTemplate.blockAlign;
          if(clickedTemplate.templateId === 'template-soc' && clickedTemplate.socialLayout === 'horizontal'){
            clickedElement.children[0].setAttribute('align', clickedTemplate.blockAlign);
            clickedElement.children[0].children[0].setAttribute('align', clickedTemplate.blockAlign);
            clickedElement.parentNode.style.display = 'inline-block';
            let socialShareBlock = clickedElement.children[0].children[0].children[1];
            if(socialShareBlock){
              socialShareBlock.setAttribute('align', clickedTemplate.blockAlign);
              if(socialShareBlock.children.length === 3 && clickedTemplate.blockAlign === 'right'){
                socialShareBlock.children[2].setAttribute('colspan', 1);
                socialShareBlock.children[1].setAttribute('colspan', 1);
                socialShareBlock.children[0].setAttribute('colspan', 2);
              }else if(socialShareBlock.children.length === 3 && clickedTemplate.blockAlign === 'center'){
                socialShareBlock.children[1].setAttribute('colspan', 2);
              }else if(socialShareBlock.children.length === 3 && clickedTemplate.blockAlign === 'left'){
                socialShareBlock.children[1].setAttribute('colspan', 1);
              }else if(socialShareBlock.children.length === 2 && clickedTemplate.blockAlign === 'left'){
                socialShareBlock.children[0].setAttribute('colspan', 1);
                socialShareBlock.children[1].setAttribute('colspan', 1);
              }else if(socialShareBlock.children.length === 2 && clickedTemplate.blockAlign === 'right'){
                socialShareBlock.children[0].setAttribute('colspan', 3);
                socialShareBlock.children[1].setAttribute('colspan', 1);
              }
            }
          }
          if(clickedTemplate.templateId === 'template-soc' && clickedTemplate.socialLayout === 'vertical'){
            clickedElement.children[0].setAttribute('align', clickedTemplate.blockAlign);
            if(clickedTemplate.elementWidth === 'fullWidth'){
              [...clickedElement.children[0].children[0].children].forEach(item=>{
                item.children[0].setAttribute('align', clickedTemplate.blockAlign);
              })
            };
          }
          if(clickedTemplate.templateId === 'template-button'){
            clickedElement.children[0].setAttribute('align', clickedTemplate.blockAlign)
          }
        }
        if(clickedTemplate.blockLineHeight){
          clickedElement.parentNode.style.lineHeight = clickedTemplate.blockLineHeight;
        }
        if(clickedTemplate.blockBorderColor && clickedTemplate.blockBorderSize && clickedTemplate.blockBorderStyle){
          if(clickedTemplate.templateId !== 'template-button'){
            clickedElement.parentNode.style.outline = `${clickedTemplate.blockBorderSize}px ${clickedTemplate.blockBorderStyle} ${clickedTemplate.blockBorderColor}`;
          }else{
            clickedElement.getElementsByTagName('TD')[0].style.border = `${clickedTemplate.blockBorderSize}px ${clickedTemplate.blockBorderStyle} ${clickedTemplate.blockBorderColor}`;
          }
        }
        if(clickedTemplate.blockType === "Divider Block"){
          if(clickedTemplate.borderBottomColor && clickedTemplate.borderBottomSize && clickedTemplate.borderBottomStyle){
            clickedElement.style.borderBottom = `${clickedTemplate.borderBottomColor} ${clickedTemplate.borderBottomSize}px ${clickedTemplate.borderBottomStyle}`
          }
          if(clickedTemplate.paddingBottom){
            clickedElement.parentNode.style.paddingBottom = clickedTemplate.paddingBottom + 'px';
            clickedElement.style.paddingBottom = '0px';
          }
          if(clickedTemplate.paddingTop){
            clickedElement.parentNode.style.paddingTop = clickedTemplate.paddingTop + 'px';
            clickedElement.style.paddingTop = '0px';
          }
        }
        if(clickedTemplate.buttonBorderRadius){
          if(clickedTemplate.templateId === 'template-button'){
            clickedElement.getElementsByTagName('TD')[0].style.borderRadius = clickedTemplate.buttonBorderRadius + 'px';
          }
          if(clickedTemplate.templateId === 'template-soc'){
            if(clickedTemplate.socialLayout === 'horizontal'){
              [...clickedElement.getElementsByTagName('TR')[0].children].map(elem=>{
                elem.style.borderRadius = clickedTemplate.buttonBorderRadius + 'px';
                return elem;
              })
            }else if(clickedTemplate.socialLayout === 'vertical'){
              [...clickedElement.children[0].children[0].children].map(elem=>{
                elem.children[0].style.borderRadius = clickedTemplate.buttonBorderRadius + 'px';
                return elem;
              })
            }
          }
        }
      }
    }
  }

  onDropHandler(event){
    event.preventDefault();
    var target = event.currentTarget;
    event.currentTarget.classList.remove('start-style-tr');
    event.currentTarget.classList.remove('start-header-tr');
    event.currentTarget.classList.remove('start-footer-tr');
    //Data is the object id that we drag at the moment;
    let data = event.dataTransfer.getData(this.props.draggableTemplate);
    //if no data return to the beginning
    if(!data){return};
    //if we dragged existing template block we dont copy it, and just move
    if(data.indexOf('exist') !== -1){
      if(target.tagName !== 'TR'){return};
      target.parentNode.insertBefore((document.getElementById(data).parentNode), target.nextSibling);
      target.classList.remove('on-drag-over');
      target.style.marginBottom = '0';
      this.props.draggableTemplateHandler(null);
      [...document.querySelectorAll('.template-block-controls')].forEach((item)=>{
        if(item.parentNode.parentNode.parentNode.children.length > 1){
          return;
        }else{
          item.parentNode.parentNode.classList.add("start-style-tr");
          return;
        }
      })
      return;
    };
    //Get the template Obj depending on block id from templates.js
    let templateObj = this.props.defaultTemplates.filter(templ=>templ.templateId===data)[0];
    //New Object that we create depending on block that we drag to the tr
    //Our TEMPLATE
    let template = document.createElement('td');
    template.style.display = 'block';
    if(!templateObj.htmlTemplate && templateObj.templateText){
      let element = document.createElement(templateObj.templateType);

      if(typeof templateObj.templateText === 'string'){
          element.textContent = templateObj.templateText;
        }
      template.appendChild(element);
    }
    if(templateObj.htmlTemplate){
      if(typeof templateObj.htmlTemplate === 'string'){
        template.innerHTML = templateObj.htmlTemplate;
      }
    }
    template.draggable = true;
    template.id = `exist-${data}-${Date.now()}`;
    template.style.textAlign = 'center';
    templateObj.id = template.id;

    if(templateObj.color){
      template.style.color = templateObj.color;
    }
    if(templateObj.blockType === 'Text Boxed Block'){
      template.style.paddingLeft = '8px';
      template.style.paddingRight = '8px';
    }
    //Divider render
    if(templateObj.blockType === "Divider Block"){
      template.classList.add(templateObj.className);
      template.style.border = templateObj.css.border;
      template.style.borderBottomColor = templateObj.borderBottomColor;
      template.style.borderBottomStyle = templateObj.borderBottomStyle;
      template.style.borderBottomWidth = templateObj.borderBottomSize + 'px';
      template.style.padding = '0px';
    }
    //Image Block render
    if(templateObj.templateId === "template-img"){
      let textAlign = this.props.clickedTemplate ? this.props.clickedTemplate.textAlign : 'center';
      templateObj.htmlTemplate = `<table className="image-block-wrap" style="width: 100%; text-align: ${textAlign};  border-spacing: 15px;" cellspacing="15"><tbody><tr><td style="background-color:rgb(247, 247, 247); padding:2px; padding-top: 0px;"><img style="width: 80px; height: 80px;" src=${this.props.mediaBaseUrl + 'empty-image.94de3673.svg'} alt='img' /><br><a style='cursor: pointer; display: inline-block; font-size: 13px; padding: 7px 17px; background-color: rgb(128, 128, 128); border-radius: 3px; border: 1px solid rgb(128, 128, 128); color: #fff;'>Browse</a></td></tr></tbody></table>`;
      template.innerHTML = templateObj.htmlTemplate;
      template.style.textAlign = 'center';
    }
    //Image Group Render
    if(templateObj.templateId === 'template-img-group'){
      templateObj.htmlTemplate = `
      <table style="width: 100%;">
        <tbody>
          <tr>
            <td data-is-empty="true" colspan='1' id="image-1111" style="background-color: rgb(247, 247, 247); text-align: center;">
              <img style="width: 80px; height: 80px;" src=${this.props.mediaBaseUrl + 'empty-image.94de3673.svg'} alt='img' /><br><a class="upload-image" style='font-size: 13px; display: inline-block; padding: 7px 17px; background-color: rgb(128, 128, 128); border-radius: 3px; border: 1px solid rgb(128, 128, 128); margin-bottom: 10px; color: #fff;'>Browse</a>
            </td>
            <td data-is-empty="true" colspan='1' id="image-2222" style="background-color: rgb(247, 247, 247); text-align: center;">
              <img style="width: 80px; height: 80px;" src=${this.props.mediaBaseUrl + 'empty-image.94de3673.svg'} alt='img' /><br><a class="upload-image" style='font-size: 13px; display: inline-block; padding: 7px 17px; background-color: rgb(128, 128, 128); border-radius: 3px; border: 1px solid rgb(128, 128, 128); margin-bottom: 10px; color: #fff;'>Browse</a>
            </td>
          </tr>
        </tbody>
      </table>`;
      template.innerHTML = templateObj.htmlTemplate;
      template.style.textAlign = 'center';
    }
    //Image Caption Render
    if(templateObj.templateId === 'template-img-caption'){
      templateObj.htmlTemplate = `
      <table data-image-block-container="1" style="width: 100%">
        <tbody>
          <tr>
            <td data-image-block="1" style="background-color: rgb(247, 247, 247);">
              <img style="width: 80px; height: 80px;" src=${this.props.mediaBaseUrl + 'empty-image.94de3673.svg'} alt='img' /><br><a style='font-size: 13px; display: inline-block; padding: 7px 17px; background-color: rgb(128, 128, 128); border-radius: 3px; border: 1px solid rgb(128, 128, 128); margin-bottom: 10px; color: #fff;'>Browse</a>
            </td
          </tr></tbody></table>
      <table data-caption-block-container="1" style="width: 100%; text-align: center">
      </tbody>
          <tr>
            <td data-caption-block="1">
              <p>This is a Boxed Text block. Use a contrasting background to draw attention to this content.</p>
            </td
          </tr>
        </tbody>
      </table>
      `;
      template.innerHTML = templateObj.htmlTemplate;
      template.style.textAlign = 'center';
      template.setAttribute('width', '600')
    }
    //Social Share Render
    if(templateObj.templateId === 'template-soc'){
      templateObj.htmlTemplate = `
      <table data-campaign-url='true' style="padding: 9px; font-size: inherit;">
        <tbody>
          <tr>
            <td id="soc-1111" align="center" data-soc-type="facebook">
              <table style="font-size: inherit">
                <tr>
                <td width="24">
                  <a style="text-decoration: none;" href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=[WEB_VERSION_URL]%2F&pubid=fffffffff&title=[CAMPAIGN_NAME]&ct=1" target="_blank"><img width="20" style="width: 20px; margin-top: 5px;" src=${this.facebookImg} alt="Facebook"/></a>
                </td>
                <td style="word-break: break-all;">
                  <p style="margin-left: 10px;">Facebook</p>
                </td>
                </tr>
              </table>
            </td>
            <td id="soc-222" align="center" data-soc-type="twitter">
              <table style="font-size: inherit">
                <tr>
                  <td width="24">
                    <a href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=[WEB_VERSION_URL]%2F&pubid=20394994848&title=[CAMPAIGN_NAME]&ct=1" target="_blank"><img width="20" style="width: 20px; margin-top: 5px;" src=${this.twitterimg} alt="Twitter"/></a>
                  </td>
                  <td style="word-break: break-all;">
                    <p style="margin-left: 10px;">Twitter</p>
                  </td>
                </tr>
              </table>
            </td>
            <td id="soc-333" align="center" data-soc-type="linkedin">
            <table style="font-size: inherit">
              <tr>
              <td width="24">
                <a href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=[WEB_VERSION_URL]%2F&pubid=ddddddddd&title=[CAMPAIGN_NAME]&ct=1" target="_blank"><img width="20" style="width: 20px; margin-top: 5px;" src=${this.linkedinBlackImg} alt="Linkedin"/></a>
              </td>
              <td style="word-break: break-all;">
                <p style="margin-left: 10px;">LinkedIn</p>
              </td>
              </tr>
            </table>
            </td>
          </tr>
        </tbody>
      </table>
      `
      template.innerHTML = templateObj.htmlTemplate;
      template.style.textAlign = '';
      template.setAttribute('align', 'center');
    }
    if(templateObj.templateId === 'template-button'){
      template.children[0].setAttribute('align', 'center');
      template.style.display = 'inline-block';
      template.getElementsByTagName('TD')[0].style.fontWeight = templateObj.blockFontWeight;
    }
    //Events on template click
    template.onclick = (event) => {this.onTemplateClick(event)};
    //Event on template dragg
    template.ondragstart = (event)=>{
      return false;
      // event.dataTransfer.setData(template.id, template.id);
      // this.props.draggableTemplateHandler(template.id);
    };
    //Protect from droping the template to another tr child
    while(target.tagName !== 'TABLE'){
      if(target.tagName === "TR"){
        //Drop new block to the left panel by coping first container to it
        let copyTR = target.cloneNode();
        //get control panel into the variable
        let copyTemplControls = document.querySelector('.template-block-controls').cloneNode(true);
        //Add onClick methods to all control panel
        copyTemplControls.querySelector('.control-delete').onclick = (event) => {
          this.onDeleteHandler(event);
        }
        copyTemplControls.querySelector('.control-edit').onclick = (event) => {
          this.onEditHandler(event);
        }
        copyTemplControls.querySelector('.control-copy').onclick = (event) => {
          this.onDublicateHandler(event);
        }
        copyTemplControls.querySelector('.control-drag').ondragstart = (event) => {
          this.onMoveHandler(event);
        }

        //insert control panel to the tr container
        let td = document.createElement('td');
        td.appendChild(copyTemplControls);
        copyTR.appendChild(td);
        copyTR.classList.remove('on-drag-over');
        copyTR.style.padding = '0';
        copyTR.style.marginBottom = '0';
        if(templateObj.templateId === 'template-soc'){
          copyTR.style.fontSize = '13px';
        }
        if(templateObj.templateId === 'template-divider'){
          copyTR.style.padding = '15px 0px 20px 0px';
        }
        if(templateObj.bgc){
          copyTR.style.backgroundColor = templateObj.bgc;
        }else{
          copyTR.style.backgroundColor = 'transparent';
        }
        copyTR.ondragleave = (event)=>{this.onDragLeaveHandler(event)};
        copyTR.ondragover = (event)=>{this.onDragOverHandler(event) };
        copyTR.ondrop = (event)=>{
          this.onDropHandler(event);
        };
        copyTR.onmouseenter = (event)=>{this.onMouseEnterHandler(event)};
        copyTR.onmouseleave = (event)=>{this.onMouseLeaveHandler(event)};
        //Insert new block after mouse overed block
        target.parentNode.insertBefore(copyTR, target.nextSibling);
        copyTR.appendChild(template);
        target.classList.remove('on-drag-over');
        target.style.marginBottom = '0px';
        break;
      }
      // target.classList.remove('on-drag-over-after');
      target.classList.remove('on-drag-over');
    }
    // this.setState({
    //   templates: [...this.state.templates, {...templateObj}]
    // })
    let newTemplates = [...this.props.templates, {...templateObj}];
    this.props.getStateFromTable(newTemplates);
    this.props.draggableTemplateHandler(null);
  }

  onDragOverHandler(event){
    event.preventDefault();
    let target = event.currentTarget;
    target.classList.add('on-drag-over');
    target.style.marginBottom = '50px';
    target.style.transition = 'all .2s ease';
    if(target.classList.contains('start-header-tr') ||
    target.classList.contains('start-style-tr') ||
    target.classList.contains('start-footer-tr')){
      target.style.marginBottom = '0px';
      target.style.top = '0';
    }
    // if(this.props.draggableTemplate === event.currentTarget.)
    // event.currentTarget.classList.add('on-drag-over');
  }

  onDragLeaveHandler(event){
    let target = event.target;
    if(target.tagName === "TD"){
      target = target.parentNode;
      target.classList.remove('on-drag-over');
      target.style.marginBottom = '0px';
    }

    if(event.target.tagName !== "TR" && event.target.tagName !== 'SPAN' && !event.target.classList.contains('template-block-controls')){
      event.target.style.pointerEvents = 'none';
      return;
    }
    event.target.classList.remove('on-drag-over');
    event.target.style.marginBottom = '0px';
    // event.currentTarget.classList.add('on-drag-over');
  }

  onMouseEnterHandler(event){
    if(event.currentTarget.childNodes.length > 1){
        event.currentTarget.classList.add('on-drag-over');
        event.target.style.marginBottom = '0px';
    }
    if(!this.props.draggableTemplate){
      event.currentTarget.classList.add('hide-drop-content-lighting');
    }
  }

  onMouseLeaveHandler(event){
    if(event.target.tagName !== "TR"){
      return;
    }
    if(!this.props.draggableTemplate){
      event.currentTarget.classList.remove('hide-drop-content-lighting');
    }
    event.target.classList.remove('on-drag-over');
    event.target.style.marginBottom = '0px';
    // event.currentTarget.classList.remove('on-drag-over');
    // event.target.classList.remove('on-drag-over')
    // event.target.style.marginBottom = '0';
    // // event.currentTarget.classList.remove('on-drag-over-after');
  }

  onTableHover(event){
    event.currentTarget.querySelector('.bg-table-block-intruments').classList.remove('hide');
  }
  onTableLeave(event){
    if(event.currentTarget.querySelector('.rc-color-picker-open')){
      return;
    }
    event.currentTarget.querySelector('.bg-table-block-intruments').classList.add('hide');
  }
  renderFromHtml(html, id, initialTrId){
    let templateHeader = document.querySelector(id);
    templateHeader.innerHTML = html;
    let array = [...templateHeader.querySelectorAll('td[draggable]')];
    array.map(template=>{
      template.onclick = (event) => {this.onTemplateClick(event)};
      let controls = template.previousSibling;
      if(template.parentNode.childNodes.length === 2 && template.parentNode.childNodes[0].hasAttribute('draggable') && template.parentNode.childNodes[1].hasAttribute('draggable')){
        controls = template.parentNode.parentNode.parentNode.parentNode.previousSibling;
      }
      if(controls.childNodes[0].className === 'template-block-controls'){
        controls.querySelector('.control-delete').onclick = (event) => {
          this.onDeleteHandler(event);
        }
        controls.querySelector('.control-edit').onclick = (event) => {
          this.onEditHandler(event);
        }
        controls.querySelector('.control-copy').onclick = (event) => {
          this.onDublicateHandler(event);
        }
        controls.querySelector('.control-drag').ondragstart = (event) => {
          this.onMoveHandler(event);
        }
      }
      let templateParent = template.parentNode;
      if(template.parentNode.childNodes.length === 2 && template.parentNode.childNodes[0].hasAttribute('draggable') && template.parentNode.childNodes[1].hasAttribute('draggable')){
        templateParent = template.parentNode.parentNode.parentNode.parentNode.parentNode;
      }
      templateParent.ondragover = (event)=>{this.onDragOverHandler(event) };
      templateParent.ondragleave = (event)=>{this.onDragLeaveHandler(event)};
      templateParent.ondrop = (event)=>{
        this.onDropHandler(event);
      };
      templateParent.onmouseenter = (event)=>{this.onMouseEnterHandler(event)};
      templateParent.onmouseleave = (event)=>{this.onMouseLeaveHandler(event)};
      return template;
  })
      let emptyTr = document.querySelector(id).getElementsByTagName("TR")[0];
      emptyTr.ondragover = (event)=>{this.onDragOverHandler(event) };
      emptyTr.ondragleave = (event)=>{this.onDragLeaveHandler(event)};
      emptyTr.ondrop = (event)=>{
        this.onDropHandler(event);
      };
      emptyTr.onmouseenter = (event)=>{this.onMouseEnterHandler(event)};
      emptyTr.onmouseleave = (event)=>{this.onMouseLeaveHandler(event)};
}
  componentDidMount(){
    if(this.props.json.headerTemplate){
      this.renderFromHtml(this.props.json.headerTemplate, '#template-header', '.start-header-tr');
      this.renderFromHtml(this.props.json.bodyTemplate, '#template-body', '.start-style-tr');
      this.renderFromHtml(this.props.json.footerTemplate, '.template-footer', '.start-footer-tr');
      this.props.clickedTemplateHanler(null);

      document.querySelector('.header-table').style.cssText = this.props.json.headerCss;
      document.querySelector('.preview-table').style.cssText = this.props.json.bodyCss;
      document.querySelector('.footer-table').style.cssText = this.props.json.footerCss;
    }
  }
  render(){
    // <Tr
    // onDropHandler={this.onDropHandler}
    // onDragOver={this.onDragOverHandler}
    // onDragLeave={this.onDragLeaveHandler}
    // onMouseEnter={this.onMouseEnterHandler}
    // onMouseLeave={this.onMouseLeaveHandler} />
    // if(this.spliLeft !== null && this.spliLeft !== undefined){
    //     let splitLeftWidth = this.spliLeft.parentNode.parentNode.parentNode.offsetWidth;
    //     console.log(splitLeftWidth);
    // }
    return(
      <div className="column split-left" >
        <div className="colbody">
          <div className="table-wrapper" onMouseDown={()=>false}>
            <table data-bg-size="cover" className="header-table" width="100%" height="90px"
              style={{backgroundColor: this.state.headerBlockColor}}
              onMouseOver={this.onTableHover}
              onMouseLeave={this.onTableLeave}>
              <tbody>
                <tr style={{textAlign: "center"}}>
                  <td id="template-header">
                    <table width="600" style={{margin: "auto"}}>
                      <tbody>
                          <Tr
                            type="header"
                            onDropHandler={this.onDropHandler}
                            onDragOver={this.onDragOverHandler}
                            onDragLeave={this.onDragLeaveHandler}
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                            onDublicateHandler={this.onDublicateHandler}
                            onEditHandler={this.onEditHandler}
                            onDeleteHandler={this.onDeleteHandler}
                            onMoveHandler={this.onMoveHandler}
                            dragableTemplateHandler={this.props.dragableTemplateHandler}
                            mediaBaseUrl={this.props.mediaBaseUrl}
                          />
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              <HoverBlockInstrPanel
                blockColorHandler={this.headerBlockColorHandler}
                blockColor={this.state.headerBlockColor}
                tableClass={'header-table'}
                managerUrl={this.props.managerUrl}
                mediaBaseUrl={this.props.mediaBaseUrl}
                />
            </table>
            <table data-bg-size="cover" className="preview-table" width="100%" height="150px"
              style={{backgroundColor: this.state.contentBlockColor}}
              onMouseOver={this.onTableHover}
              onMouseLeave={this.onTableLeave}>
              <tbody>
                <tr style={{textAlign: "center"}}>
                  <td id="template-body">
                    <table
                    style={{margin: "auto"}}
                    width="600"
                    cellSpacing="0"
                    cellPadding="0"
                    >
                    <tbody>
                      <Tr
                        type="content"
                        onDropHandler={this.onDropHandler}
                        onDragOver={this.onDragOverHandler}
                        onDragLeave={this.onDragLeaveHandler}
                        onMouseEnter={this.onMouseEnterHandler}
                        onMouseLeave={this.onMouseLeaveHandler}
                        onDublicateHandler={this.onDublicateHandler}
                        onEditHandler={this.onEditHandler}
                        onDeleteHandler={this.onDeleteHandler}
                        onMoveHandler={this.onMoveHandler}
                        mediaBaseUrl={this.props.mediaBaseUrl}
                      />
                      </tbody>
                    </table>
                  </td>
                </tr>
                </tbody>
              <HoverBlockInstrPanel
                mediaBaseUrl={this.props.mediaBaseUrl}
                blockColorHandler={this.contentBlockColorHandler}
                blockColor={this.state.contentBlockColor}
                tableClass={'preview-table'}
                managerUrl={this.props.managerUrl}
                />
            </table>
            <table data-bg-size="cover" className="footer-table" width="100%" height="150px"
              style={{backgroundColor: this.state.footerBlockColor}}
              onMouseOver={this.onTableHover}
              onMouseLeave={this.onTableLeave}>
              <tbody>
                <tr style={{textAlign: "center", margin: "auto"}}>
                  <td className="template-footer">
                    <table width="600" style={{margin: "auto"}} >
                      <tbody>
                          <Tr
                            type="footer"
                            onDropHandler={this.onDropHandler}
                            onDragOver={this.onDragOverHandler}
                            onDragLeave={this.onDragLeaveHandler}
                            onMouseEnter={this.onMouseEnterHandler}
                            onMouseLeave={this.onMouseLeaveHandler}
                            onDublicateHandler={this.onDublicateHandler}
                            onEditHandler={this.onEditHandler}
                            onDeleteHandler={this.onDeleteHandler}
                            onMoveHandler={this.onMoveHandler}
                            mediaBaseUrl={this.props.mediaBaseUrl}
                          />
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
              <HoverBlockInstrPanel
                mediaBaseUrl={this.props.mediaBaseUrl}
                blockColorHandler={this.footerBlockColorHandler}
                blockColor={this.state.footerBlockColor}
                tableClass={'footer-table'}
                managerUrl={this.props.managerUrl}
                />
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default translate("translations")(LeftPanel);
