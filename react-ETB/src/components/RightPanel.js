import React from 'react';
import TemplateItem from './TemplateItem';

import { translate } from 'react-i18next';


class RightPanel extends React.Component{
  render(){
    let textImgAbs = this.props.mediaBaseUrl + 'text.983ae4e9.svg';
    let boxedTextImgAbs = this.props.mediaBaseUrl + 'boxedText.cd98f74e.svg';
    let dividerImgAbs = this.props.mediaBaseUrl + 'divider.c91153d3.svg';
    let imageImgAbs = this.props.mediaBaseUrl + 'image.a9ec86f2.svg';
    let imageGroupImgAbs = this.props.mediaBaseUrl + 'imageGroup.214cacb7.svg';
    let imageCaptionImgAbs = this.props.mediaBaseUrl + 'imageCaption.56cba7d3.svg';
    let socialShareImgAbs = this.props.mediaBaseUrl + 'socialShare.fce18f2f.svg';
    let buttonImgAbs = this.props.mediaBaseUrl + 'button.0c4bf13e.svg';
    let footerImgAbs = this.props.mediaBaseUrl + 'footer.e4c75581.svg';
    let headerImgAbs = this.props.mediaBaseUrl + 'header.e6031451.svg';
    const { t } = this.props;
    return(
      <div className="column split-right">
        <div className="colbody right-column">
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-text" img={textImgAbs} text={t("Text Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-text-boxed" img={boxedTextImgAbs} text={t("Boxed Text Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-divider" img={dividerImgAbs} text={t("Divider Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-img" img={imageImgAbs} text={t("Image Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-img-group" img={imageGroupImgAbs} text={t("Image Group Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-img-caption" img={imageCaptionImgAbs} text={t("Image + Caption Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-soc" img={socialShareImgAbs} text={t("Social Share Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-button" img={buttonImgAbs} text={t("Button Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-footer" img={footerImgAbs} text={t("Footer Block")}/>
            <TemplateItem dragableTemplateHandler={this.props.draggableTemplateHandler} id="template-header" img={headerImgAbs} text={t("Header Block")}/>
        </div>
      </div>
    )
  }
}

export default translate('translations')(RightPanel);
