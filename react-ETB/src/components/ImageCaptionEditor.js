import React from 'react';
import Select from 'react-select';
import Style from './StylePanel';
import ImageCaptionContentItem from './ImageCaptionContentItem';

import { translate } from 'react-i18next';



let captionPosOption = [
  {value: "left", label: "Left"},
  {value: "top", label: "Top"},
  {value: "right", label: "Right"},
  {value: "bottom", label: "Bottom"}
];
let imageAlignOptions = [
  {value: "left", label: "Left"},
  {value: "center", label: "Center"},
  {value: "right", label: "Right"}
];
let imagesNumbOptions = [
  {value: "1", label: "1"},
  {value: "2", label: "2"}
]
let captionWidthOptions = [
  {value: '176px', label: 'One-third'},
  {value: '264px', label: 'Half'},
  {value: '352px', label: 'Two-thirds'},
  {value: '396px', label: 'Three-quarters'},
]

class ImageCaptionEditor extends React.Component{
  constructor(props){
    super(props);
    let imagesNumb = document.getElementById(this.props.clickedTemplate.id).children.length === 1 ? '2' : '1';
    let captionWidth = document.querySelector('[data-caption-block="1"]').width || '264px';
    this.state = {
      tab: "content-tab",
      imagesNumb: imagesNumb,
      captionPos: this.props.clickedTemplate.captionPos || 'bottom',
      leftCaptionWidth: '',
      rightCaptionWidth: '',
      imageAlign: this.props.clickedTemplate.imageAlign,
      captionWidth: captionWidth || '264px',
      captionShown: '1'
    }
    this.onChangeTextHandler = this.onChangeTextHandler.bind(this);
    this.onChangeImageCaptionPosHandler = this.onChangeImageCaptionPosHandler.bind(this);
    this.onChangeCaptionNumbHandler = this.onChangeCaptionNumbHandler.bind(this);
    this.renderOneImageCaption = this.renderOneImageCaption.bind(this);
    this.renderTwoImageCaption = this.renderTwoImageCaption.bind(this);
    this.changeCaption = this.changeCaption.bind(this);
  }
    onClick(event){
      this.setState({
        tab: event.currentTarget.id,
      });
      event.currentTarget.classList.add('active');
      let ul = event.currentTarget.parentNode;
      for(let i = 0; i<ul.childNodes.length; i++){
        if(ul.childNodes[i].id !== event.currentTarget.id){
          ul.childNodes[i].classList.remove('active')
        }
      }
    }
    onChangeImageAlignHandler(align){
      this.props.changeImageAlignHandler(align.value);
      this.setState({
        imageAlign: align.value
      }, ()=>{
        if(this.state.imagesNumb === '1'){
          this.renderOneImageCaption()
        }else{
          this.renderTwoImageCaption()
        }
      })
    }
    onChangeImageCaptionPosHandler(pos){
      this.props.changeImageCaptionPosHandler(pos.value);
      this.setState({
        captionPos: pos.value
      }, ()=>{
        if(this.state.imagesNumb === '1'){
          this.renderOneImageCaption()
        }else{
          this.renderTwoImageCaption()
        }
      })
    }
    onChangeCaptionWidthHandler(width){
      this.setState({
        captionWidth: width.value
      }, ()=>{
        if(this.state.imagesNumb === '1'){
          this.renderOneImageCaption()
        }else{
          this.renderTwoImageCaption()
        }
      })
    }

    renderOneImageCaption(){
      let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
      let newCaption = `<table data-image-block-container="1" style="width: 100%">
        <tbody>
          <tr>
            <td data-image-block="1" align=${this.state.imageAlign} style="background-color: rgb(247, 247, 247);">
              ${clickedTemplate.querySelector('[data-image-block="1"]').innerHTML}
            </td>
          </tr></tbody></table>
      <table data-caption-block-container="1" style="width: 100%">
      </tbody>
          <tr>
            <td data-caption-block="1" width=${this.state.captionWidth}>
              ${clickedTemplate.querySelector('[data-caption-block="1"]').innerHTML}
            </td>
          </tr>
        </tbody>
      </table>`;
      clickedTemplate.innerHTML = newCaption;
      this.props.changeTextHandler(newCaption);
      let imageTable = clickedTemplate.querySelector('[data-image-block-container="1"]');
      // let captionTable = clickedTemplate.querySelector('[data-caption-block-container="1"]');
      let imageBlock = clickedTemplate.querySelector('[data-image-block="1"]');
      let captionBlock = clickedTemplate.querySelector('[data-caption-block="1"]');
      if(this.state.captionPos === 'top'){
        clickedTemplate.appendChild(imageTable);
        this.props.changeTextHandler(clickedTemplate.innerHTML);
      }
      if(this.state.captionPos === 'left'){
        captionBlock.parentNode.appendChild(imageBlock);
        captionBlock.style.width = this.state.captionWidth;
        this.props.changeTextHandler(clickedTemplate.innerHTML);
      }
      if(this.state.captionPos === 'right'){
        imageBlock.parentNode.appendChild(captionBlock);
        captionBlock.style.width = this.state.captionWidth;
        this.props.changeTextHandler(clickedTemplate.innerHTML);
      }
    }

    renderTwoImageCaption(){
      let blockTemplate = document.getElementById(this.props.clickedTemplate.id);
      let newCaptionOne = `<table data-image-block-container="1" style="width: ${this.state.captionWidth}">
        <tbody>
          <tr>
            <td data-image-block="1" align=${this.state.imageAlign} style="background-color: rgb(247, 247, 247);">
              ${document.querySelector('[data-image-block="1"]').innerHTML}
            </td>
          </tr></tbody></table>
      <table data-caption-block-container="1" style="width: 100%">
      </tbody>
          <tr>
            <td data-caption-block="1">
              ${document.querySelector('[data-caption-block="1"]').innerHTML}
            </td>
          </tr>
        </tbody>
      </table>`;
      let newCaptionTwo = `<table data-image-block-container="2" style="width: ${this.state.captionWidth}">
        <tbody>
          <tr>
            <td data-image-block="2" align=${this.state.imageAlign} style="background-color: rgb(247, 247, 247);">
              ${document.querySelector('[data-image-block="2"]').innerHTML}
            </td>
          </tr></tbody></table>
      <table data-caption-block-container="2" style="width: 100%">
      </tbody>
          <tr>
            <td data-caption-block="2">
              ${document.querySelector('[data-caption-block="2"]').innerHTML}
            </td>
          </tr>
        </tbody>
      </table>`;
      blockTemplate.innerHtml = `<table style="width: 100%"><tbody><tr><td id="first-caption" width='50%'>${newCaptionOne}</td><td id="second-caption" width='50%'>${newCaptionTwo}</td></tr></tbody></table>`
      this.props.changeTextHandler(blockTemplate.innerHtml);
      let firstBlock = document.getElementById('first-caption');
      let secondBlock = document.getElementById('second-caption');
      let firstImageTable = blockTemplate.querySelector('[data-image-block-container="1"]');
      let firstCaptionTable = blockTemplate.querySelector('[data-caption-block-container="1"]');
      let firstImageBlock = blockTemplate.querySelector('[data-image-block="1"]');

      let secondImageTable = blockTemplate.querySelector('[data-image-block-container="2"]');
      let secondCaptionTable = blockTemplate.querySelector('[data-caption-block-container="2"]');
      let secondImageBlock = blockTemplate.querySelector('[data-image-block="2"]');
      if(this.state.captionPos === 'top'){
        firstBlock.appendChild(firstCaptionTable)
        firstBlock.appendChild(firstImageTable);
        secondBlock.appendChild(secondCaptionTable);
        secondBlock.appendChild(secondImageTable);
        firstImageBlock.align = this.state.imageAlign;
        secondImageBlock.align = this.state.imageAlign;
        firstCaptionTable.style.height = 'auto';
        secondCaptionTable.style.height = 'auto';
        this.props.changeTextHandler(`<table style="width: 100%"><tbody><tr><td id="first-caption" style="width:50%;">${firstBlock.innerHTML}</td><td id="second-caption" style="width:50%;">${secondBlock.innerHTML}</td></tr></tbody></table>`);
      }
      if(this.state.captionPos === 'left'){
        firstBlock.appendChild(firstCaptionTable)
        firstBlock.appendChild(secondCaptionTable);
        secondBlock.appendChild(firstImageTable);
        secondBlock.appendChild(secondImageTable);
        firstCaptionTable.style.height = firstImageTable.getElementsByTagName('IMG')[0].height + 'px';
        secondCaptionTable.style.height = secondImageTable.getElementsByTagName('IMG')[0].height + 'px';
        this.props.changeTextHandler(`<table style="width: 100%"><tbody><tr><td id="first-caption" style="width:${this.state.captionWidth}" >${firstBlock.innerHTML}</td><td id="second-caption">${secondBlock.innerHTML}</td></tr></tbody></table>`);

      }
      if(this.state.captionPos === 'right'){
        firstBlock.appendChild(secondImageTable);
        firstBlock.appendChild(firstImageTable);
        secondBlock.appendChild(secondCaptionTable);
        secondBlock.appendChild(firstCaptionTable);
        firstCaptionTable.style.height = firstImageTable.getElementsByTagName('IMG')[0].height + 'px';
        secondCaptionTable.style.height = secondImageTable.getElementsByTagName('IMG')[0].height + 'px';
        this.props.changeTextHandler(`<table style="width: 100%"><tbody><tr><td id="first-caption">${firstBlock.innerHTML}</td><td id="second-caption" style="width:${this.state.captionWidth}" >${secondBlock.innerHTML}</td></tr></tbody></table>`);

      }
      if(this.state.captionPos === 'bottom'){
        firstBlock.appendChild(firstImageTable)
        firstBlock.appendChild(firstCaptionTable);
        secondBlock.appendChild(secondImageTable);
        secondBlock.appendChild(secondCaptionTable);
        firstImageBlock.align = this.state.imageAlign;
        secondImageBlock.align = this.state.imageAlign;
        firstCaptionTable.style.height = 'auto';
        secondCaptionTable.style.height = 'auto';
        this.props.changeTextHandler(`<table style="width: 100%"><tbody><tr><td id="first-caption" style="width: 50%;">${firstBlock.innerHTML}</td><td id="second-caption" style="width: 50%;">${secondBlock.innerHTML}</td></tr></tbody></table>`);
      }
    }

    onChangeCaptionNumbHandler(numb){
      //current clicked template
      let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
      //block where we would be dublicate the column
      // let blockToManipulate = clickedTemplate.parentNode;
      //if we need two columns then we do it here
      if(numb.value === '2'){
        if(clickedTemplate.length === 1){
          return;
        }
        this.setState({
          imagesNumb: numb.value
        });
        let firstColumn = `<table data-image-block-container="1" style="width: 100%">
          <tbody>
            <tr>
              <td data-image-block="1" align=${this.state.imageAlign} style="background-color: rgb(247, 247, 247);">
                ${clickedTemplate.querySelector('[data-image-block="1"]').innerHTML}
              </td>
            </tr></tbody></table>
        <table data-caption-block-container="1" style="width: 100%">
        </tbody>
            <tr>
              <td data-caption-block="1" width=${this.state.captionWidth}>
                ${clickedTemplate.querySelector('[data-caption-block="1"]').innerHTML}
              </td>
            </tr>
          </tbody>
        </table>`;
        let secondColumn = `<table data-image-block-container="2" style="width: 100%">
          <tbody>
            <tr>
              <td data-image-block="2" align=${this.state.imageAlign} style="background-color: rgb(247, 247, 247);">
                ${document.querySelector('[data-image-block="1"]').innerHTML}
              </td>
            </tr></tbody></table>
        <table data-caption-block-container="2" style="width: 100%">
        </tbody>
            <tr>
              <td data-caption-block="2">
                ${document.querySelector('[data-caption-block="1"]').innerHTML}
              </td>
            </tr>
          </tbody>
        </table>`;
        clickedTemplate.innerHTML = `<table style="width:100%"><tbody><tr><td id="first-caption" style="width: 50%;">${firstColumn}</td><td id="second-caption" style="width: 50%;">${secondColumn}</td></tr><tbody></table>`;
        this.props.changeTextHandler(clickedTemplate.innerHTML);
        this.renderTwoImageCaption();
      }else if(numb.value === "1"){
        if(clickedTemplate.length === 2){
          return;
        }
        this.setState({
          imagesNumb: numb.value,
          captionShown: '1'
        });
        let firstBlockImage = document.querySelector('[data-image-block-container="1"]');
        let firstBlockText = document.querySelector('[data-caption-block-container="1"]');
        clickedTemplate.innerHTML = '';
        clickedTemplate.appendChild(firstBlockImage);
        clickedTemplate.appendChild(firstBlockText);
        this.props.changeTextHandler(clickedTemplate.innerHTML);
        this.renderOneImageCaption();
      }
    }

    componentDidMount(){
      if(this.state.imagesNumb === '1'){
        this.renderOneImageCaption();
      }else{
        this.renderTwoImageCaption();
      }
    }
    changeCaption(numb, event){
      event.target.parentNode.childNodes[0].classList.remove('active');
      event.target.parentNode.childNodes[1].classList.remove('active');
      event.target.classList.add('active');
      this.setState({
        captionShown: numb
      });
      this.props.hideEditTemplatePanel();
      this.props.showEditTemplatePanel();
    }
    onChangeTextHandler(html){
      if(this.state.imagesNumb === '1'){
        let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
        clickedTemplate.querySelector('[data-caption-block]').innerHTML = html;
        let htmlTemplateCaption = clickedTemplate.innerHTML;
        this.props.changeTextHandler(htmlTemplateCaption);
      }else{
        if(this.state.captionShown === '1'){
          let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
          clickedTemplate.querySelector('[data-caption-block="1"]').innerHTML = html;
          let htmlTemplateCaption = clickedTemplate.innerHTML;
          this.props.changeTextHandler(htmlTemplateCaption);
        }else if(this.state.captionShown === '2'){
          let clickedTemplate = document.getElementById(this.props.clickedTemplate.id);
          clickedTemplate.querySelector('[data-caption-block="2"]').innerHTML = html;
          let htmlTemplateCaption = clickedTemplate.innerHTML;
          this.props.changeTextHandler(htmlTemplateCaption);
        }
      }
    }
  render(){
      let contentTab = ()=>{
        if(this.state.imagesNumb === '1'){
          return (
            <ImageCaptionContentItem
            captionWidth={this.state.captionWidth}
            activeCaption={this.state.captionShown}
            onChangeTextHandler={this.onChangeTextHandler}
            clickedTemplate={this.props.clickedTemplate}
            changeTextHandler={this.props.changeTextHandler}
            mouseOveredTemplate={this.props.mouseOveredTemplate}
            managerUrl={this.props.managerUrl}
            mediaBaseUrl={this.props.mediaBaseUrl}
            editorConfig={this.props.editorConfig}
            editorScriptUrl={this.props.editorScriptUrl}
            /> )
        }else if(this.state.imagesNumb === '2'){
          return(<div>
                  <div className="check-content-item">
                    <span className={this.state.captionShown === '1' ? 'check-item active' : 'check-item'} onClick={(event)=>this.changeCaption('1',event)}>Caption 1</span>
                    <span className={this.state.captionShown === '2' ? 'check-item active' : 'check-item'} onClick={(event)=>this.changeCaption('2',event)}>Caption 2</span>
                  </div>
                  <ImageCaptionContentItem
                  captionWidth={this.state.captionWidth}
                  activeCaption={this.state.captionShown}
                  onChangeTextHandler={this.onChangeTextHandler}
                  clickedTemplate={this.props.clickedTemplate}
                  changeTextHandler={this.props.changeTextHandler}
                  mouseOveredTemplate={this.props.mouseOveredTemplate}
                  managerUrl={this.props.managerUrl}
                  mediaBaseUrl={this.props.mediaBaseUrl}
                  editorScriptUrl={this.props.editorScriptUrl}
                  />
                </div>)
        }
      }
      const { t } = this.props;

    return(
      <div className="divider-editor">
        <ul className="tabs-panel">
          <li id="content-tab" className="active" onClick={(e)=>{this.onClick(e)}}>{t("Content")}</li>
          <li id="style-tab" onClick={(e)=>{this.onClick(e)}}>{t('Style')}</li>
          <li id="settings-tab" onClick={(e)=>{this.onClick(e)}}>{t("Settings")}</li>
        </ul>
        {
          this.state.tab === 'content-tab' ? contentTab() : ""}

           {
             this.state.tab === 'settings-tab' ?

          <fieldset className="divider-style" >
            <h5 className="text-style-header">{t("Image + Caption Settings")}</h5>
              <div className="image-caption-settings-container">
                <label className="label-style" >{t("Caption position")}</label>
                <br/>
                <Select
                  className="image-caption-selector"
                  name="border-select"
                  value={this.state.captionPos ? this.state.captionPos : "bottom"}
                  options={captionPosOption}
                  onChange={this.onChangeImageCaptionPosHandler.bind(this)}
                  clearable={false}
                  />
              </div>
              {this.state.captionPos === 'top' || this.state.captionPos === 'bottom' ?
                <div className="image-caption-settings-container">
                <label className="label-style" >{t("Image alignment")}</label>
                <br/>
                <Select
                  className="image-caption-selector"
                  name="border-select"
                  value={this.state.imageAlign ? this.state.imageAlign : ""}
                  options={imageAlignOptions}
                  onChange={this.onChangeImageAlignHandler.bind(this)}
                  clearable={false}
                  />
              </div> :
              <div className="image-caption-settings-container">
              <label className="label-style" >{t("Caption width")}</label>
              <br/>
              <Select
                className="image-caption-selector"
                name="border-select"
                value={this.state.captionWidth ? this.state.captionWidth : "half"}
                options={captionWidthOptions}
                onChange={this.onChangeCaptionWidthHandler.bind(this)}
                clearable={false}
                />
            </div>
            }
              <div className="image-caption-settings-container">
                <label className="label-style" >{t("Number of images")}</label>
                <br/>
                <Select
                  className="image-caption-selector"
                  name="border-select"
                  value={this.state.imagesNumb ? this.state.imagesNumb : ''}
                  options={imagesNumbOptions}
                  onChange={this.onChangeCaptionNumbHandler.bind(this)}
                  clearable={false}
                  />
              </div>
          </fieldset> : ""
        }
        {
          this.state.tab === 'style-tab' ?
          <Style
          fieldsetText="Caption"
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
          mediaBaseUrl={this.props.mediaBaseUrl}
          /> : " "
        }
      </div>
    )
  }
}

export default translate("translations")(ImageCaptionEditor);
