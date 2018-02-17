import React from 'react';
import ImageGroupItem from './ImageGroupItem';
import ImageGroupLayout from './ImageGroupLayout';
import { translate } from 'react-i18next';

class ImageEditor extends React.Component{
  constructor(props){
    super(props);
    this.imageSrcAbs = this.props.mediaBaseUrl + 'empty-image.94de3673.svg';
    let imageGroup = [...document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('td')].map(item=>{
      return {
        src: item.children[0].src,
        id: item.id,
        isEmpty: item.getAttribute('data-is-empty')
      }
    });
    this.state = {
      tab: "content-tab",
      imageGroup: [...imageGroup],
      layoutType: null
    }
    this.addImageHandler = this.addImageHandler.bind(this);
    this.onDeleteImageFromGroupHandler = this.onDeleteImageFromGroupHandler.bind(this);
    this.renderImageGroup = this.renderImageGroup.bind(this);
    this.onChangeImageGroupLayout = this.onChangeImageGroupLayout.bind(this);
    this.getCurrentImageGroup = this.getCurrentImageGroup.bind(this);
  }
    onClick(event){
      this.setState({
        tab: event.currentTarget.id
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
    }
    onDeleteImageFromGroupHandler(id){
      let imageGroup = [...document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('td')].map(item=>{
        return {
          src: item.children[0].src,
          id: item.id,
          isEmpty: item.getAttribute('data-is-empty')
        }
      });
      let newImageGroup = imageGroup.filter(item=>{
        return item.id !== id
      });
      this.setState({
        imageGroup: newImageGroup
      }, ()=>this.renderImageGroup());
    }


    onChangeImageGroupLayout(type){
      let clickedBlock = document.getElementById(this.props.clickedTemplate.id).children[0].children[0];
      let images = clickedBlock.getElementsByTagName('TD');
      let tr1 = clickedBlock.children[0];
      let tr2 = clickedBlock.children[1] ? clickedBlock.children[1] : document.createElement('tr');
      let tr3 = clickedBlock.children[2] ? clickedBlock.children[2] : document.createElement('tr');

      let firstColumn = images[0];
      let secondColumn = images[1];
      let thirdColumn = images[2] ? images[2] : null;
      let fourthColumn = images[3] ? images[3] : null;
      let fifthColumn = images[4] ? images[4] : null;

      this.setState({
        layoutType: type
      })
      if(type === 1){
        if(clickedBlock.children.length === 1){return}
        clickedBlock.children[0].appendChild(secondColumn);
        clickedBlock.removeChild(clickedBlock.children[1]);
        firstColumn.setAttribute('colspan', 1)
        secondColumn.setAttribute('colspan', 1)

      }else if(type === 2){
        if(clickedBlock.children.length === 2){return}
        let tr2 = document.createElement('tr');
        clickedBlock.appendChild(tr2);
        tr2.appendChild(secondColumn);
        firstColumn.setAttribute('colspan', 2)
        secondColumn.setAttribute('colspan', 2)
      }else if(type === 3){
        if(clickedBlock.children.length === 3){return};
        clickedBlock.appendChild(tr3);
        tr2.appendChild(secondColumn);
        tr3.appendChild(thirdColumn);
        firstColumn.setAttribute('colspan', 2);
        thirdColumn.setAttribute('colspan', 2);
        secondColumn.setAttribute('colspan', 2);
      }else if(type === 4){
        if(clickedBlock.children[0].children.length === 2){return};
        tr1.appendChild(secondColumn);
        tr2.appendChild(thirdColumn);
        if(clickedBlock.children[2]){
          clickedBlock.removeChild(clickedBlock.childNodes[2])
        }
        firstColumn.setAttribute('colspan', 1);
        secondColumn.setAttribute('colspan', 1);
        thirdColumn.setAttribute('colspan', 2);
      }else if(type === 5){
        if(clickedBlock.children[1].children.length === 3){return};
        tr2.appendChild(secondColumn);
        tr2.appendChild(thirdColumn);
        if(clickedBlock.children[2]){
          clickedBlock.removeChild(clickedBlock.childNodes[2])
        }
        firstColumn.setAttribute('colspan', 2);
        secondColumn.setAttribute('colspan', 1);
        thirdColumn.setAttribute('colspan', 1);
      }else if(type === 6){
        if(clickedBlock.children.length === 2){return}
        tr1.appendChild(secondColumn);
        tr2.appendChild(fourthColumn);
        if(clickedBlock.children[2]){
          clickedBlock.removeChild(clickedBlock.childNodes[2])
        }
        firstColumn.setAttribute('colspan', 1);
        secondColumn.setAttribute('colspan', 1)
        thirdColumn.setAttribute('colspan', 1)
        fourthColumn.setAttribute('colspan', 1)
      }else if(type === 7){
        tr2.insertBefore(secondColumn, thirdColumn);
        firstColumn.setAttribute('colspan', 2);
        clickedBlock.appendChild(tr3);
        tr3.appendChild(fourthColumn);
        fourthColumn.setAttribute('colspan', 2);
        thirdColumn.setAttribute('colspan', 1);
        secondColumn.setAttribute('colspan', 1);
      }else if(type === 8){
        tr2.insertBefore(secondColumn, thirdColumn);
        firstColumn.setAttribute('colspan', 2);
        secondColumn.setAttribute('colspan', 1);
        thirdColumn.setAttribute('colspan', 1);
        fourthColumn.setAttribute('colspan', 1);
        fifthColumn.setAttribute('colspan', 1);
        clickedBlock.appendChild(tr3);
        tr3.insertBefore(fourthColumn, fifthColumn);
      }else if(type === 9){
        tr1.appendChild(secondColumn);
        firstColumn.setAttribute('colspan', 1);
        secondColumn.setAttribute('colspan', 1);
        thirdColumn.setAttribute('colspan', 2);
        fourthColumn.setAttribute('colspan', 1);
        fifthColumn.setAttribute('colspan', 1);
        tr3.insertBefore(fourthColumn, fifthColumn);
      }else if(type === 10){
        tr1.appendChild(secondColumn);
        firstColumn.setAttribute('colspan', 1);
        secondColumn.setAttribute('colspan', 1);
        thirdColumn.setAttribute('colspan', 1);
        fourthColumn.setAttribute('colspan', 1);
        tr2.appendChild(fourthColumn);
        fifthColumn.setAttribute('colspan', 2);
      }

      [...document.querySelectorAll('[data-is-empty]')].forEach(item=>{
        if(item.children.length > 1){
          return;
        }else{
          item.getElementsByTagName('IMG')[0].style.maxWidth = item.getAttribute('colspan') === '1' ? '294px' : '590px';
          item.getElementsByTagName('IMG')[0].setAttribute('width', item.getAttribute('colspan') === '1' ? '294' : '590');
        }
      })

      this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);

    }

    componentDidMount(){
      this.props.changeTextHandler(document.getElementById(this.props.clickedTemplate.id).innerHTML);
    }
    getCurrentImageGroup(){
      let imageGroup = [...document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('td')].map(item=>{
        return {
          src: item.children[0].src,
          id: item.id,
          isEmpty: item.getAttribute('data-is-empty')
        }
      });
      this.setState({
        imageGroup: [...imageGroup]
      })
    }
    addImageHandler(){
      //Add image to state
      let imageGroup = [...document.getElementById(this.props.clickedTemplate.id).getElementsByTagName('td')].map(item=>{
        return {
          src: item.children[0].src,
          id: item.id,
          isEmpty: item.getAttribute('data-is-empty')
        }
      });
      let newImage = {src: this.imageSrcAbs, isEmpty: 'true', id: `image-${Date.now()}`}
      this.setState({
        imageGroup: [...imageGroup, {...newImage}]
      }, ()=>this.renderImageGroup());
      //Add image to template in html
    }
    renderImageGroup(){
      let blockToRenderIn = document.getElementById(this.props.clickedTemplate.id).children[0].children[0];
      let renderedImageGroup;
      let renderEmptyBlock = (id, src, colspan=1)=>{
        return `<td colspan=${colspan} data-is-empty="true" id=${id} style="background-color: rgb(247, 247, 247); text-align: center;">
          <img style="width: 80px; height: 80px;" src=${src} alt='img' /><br><a style='font-size: 13px; display: inline-block; padding: 7px 17px; margin-bottom: 10px; background-color: rgb(128, 128, 128); border-radius: 3px; border: 1px solid rgb(128, 128, 128); color: #fff;'>Browse</a>
        </td>`
      }

      let renderImageBlock = (id, src, colspan=1)=>{
        let width = colspan === 2 ? 'style="max-width: 590px" width="590"' : 'style="max-width: 294px" width="294"';
        return `<td colspan=${colspan} data-is-empty="false" id=${id} >
          <img src=${src} alt="img" ${width}/>
        </td>`
      }
      if(this.state.imageGroup.length === 2){
      renderedImageGroup = this.state.imageGroup.map(item=>{
         return (item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src))
      }).join('');
    }
      if(this.state.imageGroup.length === 3){
        renderedImageGroup = this.state.imageGroup.map((item, index)=>{
          if(index === 2){
            return (`<tr>${item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src, 2) : renderImageBlock(item.id, item.src, 2)}</tr>`)
          }
          return (item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src))
        }).join('');
      }
      if(this.state.imageGroup.length === 4){
        renderedImageGroup = this.state.imageGroup.map((item, index)=>{
          if(index === 2){
            return (
              `<tr>${item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src)}`
            )
          }
          if(index === 3){
            return(`${ item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src)}</tr>`)
          }
          return (item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src))
        }).join('');
      }
      if(this.state.imageGroup.length === 5){
        renderedImageGroup = this.state.imageGroup.map((item, index)=>{
          if(index === 2){
            return (
              `<tr>${item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src)}`
            )
          }else if(index === 3){
            return(`${item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src)}</tr>`)
          }else if(index === 4){
            return (

            `<tr>${item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src, 2) : renderImageBlock(item.id, item.src, 2)}</tr>`
          )
          }
          return (item.isEmpty === 'true' ? renderEmptyBlock(item.id, item.src) : renderImageBlock(item.id, item.src))
        }).join('');
      }

      blockToRenderIn.innerHTML = renderedImageGroup;
      this.props.changeTextHandler(`<table style="width: 100%;">${renderedImageGroup}</table>`);
    }
    render(){
      let layoutGroup2 = (
        <div>
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="two-image-layout-1" layoutType={1} />
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="two-image-layout-2" layoutType={2} />
        </div>
      )
      let layoutGroup3 = (
        <div>
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="three-image-layout-3" layoutType={3} />
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="three-image-layout-4" layoutType={4} />
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="three-image-layout-5" layoutType={5} />
        </div>
      )
      let layoutGroup4 = (
        <div>
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="four-image-layout-6" layoutType={6} />
          <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="four-image-layout-7" layoutType={7} />
        </div>
      )
      let layoutGroup5 = (
        <div>
        <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="fifth-image-layout-8" layoutType={8} />
        <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="fifth-image-layout-9" layoutType={9} />
        <ImageGroupLayout onChangeImageGroupLayout={this.onChangeImageGroupLayout} className="fifth-image-layout-10" layoutType={10} />
        </div>
      )
      const { t } = this.props;

    return(
      <div className="divider-editor">
        <ul className="tabs-panel">
          <li id="content-tab" className="active" onClick={(e)=>{this.onClick(e)}}>{t("Content")}</li>
          <li id="settings-tab" onClick={(e)=>{this.onClick(e)}}>{t("Settings")}</li>
        </ul>
        {
          this.state.tab === 'content-tab'
          ?
          <fieldset className="image-group-style" >
            <h5 className="text-style-header">{t("Image ")}</h5>
            <div className='image-group-container'>
              <div className="image-group-list">
              {
                this.state.imageGroup.map((item)=>{
                    return <ImageGroupItem key={item.id}
                    clickedTemplate={this.props.clickedTemplate}
                    renderImageGroup={this.renderImageGroup}
                    changeTextHandler={this.props.changeTextHandler}
                    newImgSrc={item.src} id={item.id}
                    imageGroup={this.state.imageGroup}
                    getCurrentImageGroup={this.getCurrentImageGroup}
                    onDeleteImageFromGroupHandler={this.onDeleteImageFromGroupHandler}
                    managerUrl={this.props.managerUrl}
                    mediaBaseUrl={this.props.mediaBaseUrl}/>
                })
              }
              </div>
              { this.state.imageGroup.length < 5 ?
                <div style={{textAlign: 'center'}}>
                <span onClick={this.addImageHandler} className="add-image-button" >{t("Add another Image")}</span>
              </div> : ''}
              <span className="span-descr"><p>{t("You can add up to 5 images per image group.")}</p> <p>{t("Choose a layout in the Settings tab.")}</p></span>
            </div>
          </fieldset>
           :
          <fieldset className="divider-style" >
            <h5 className="text-style-header">{t("Image Group Settings")}</h5>
              <div className="image-group-settings-container">
                <label className="label-style" >{t("Layout")}</label>
                <br/>
                {
                  this.state.imageGroup.length === 2 ?
                  layoutGroup2
                  : ''
                }
                {
                  this.state.imageGroup.length === 3 ?
                  layoutGroup3
                  : ''
                }
                {
                  this.state.imageGroup.length === 4 ?
                  layoutGroup4
                  : ''
                }
                {
                  this.state.imageGroup.length === 5 ?
                  layoutGroup5
                  : ''
                }
              </div>
          </fieldset>
        }
      </div>
    )
  }
}

export default translate("translations")(ImageEditor);
