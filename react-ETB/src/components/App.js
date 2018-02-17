import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import defaultTemplates from '../templates';
import TemplateEditPanel from './TemplateEditPanel';
import SplitterLayout from 'react-splitter-layout';


// import i18n from '../i18n'; //translation
import { translate } from 'react-i18next';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showEditPanel: false,
      templates: [],
      clickedTemplate: null,
      draggableTemplate: null,
      mouseOveredTemplate: null,
      socialProfileId: null
    }

    this.showEditTemplatePanel = this.showEditTemplatePanel.bind(this);
    this.hideEditTemplatePanel = this.hideEditTemplatePanel.bind(this);
    this.getStateFromTable = this.getStateFromTable.bind(this);
    this.clickedTemplateHanler = this.clickedTemplateHanler.bind(this);
    this.changeBgColorHandler = this.changeBgColorHandler.bind(this);
    this.changeColorHandler = this.changeColorHandler.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.draggableTemplateHandler = this.draggableTemplateHandler.bind(this);
    this.mouseOveredTemplateHandler = this.mouseOveredTemplateHandler.bind(this);
    this.onTemplateDeleteHandler = this.onTemplateDeleteHandler.bind(this);
    this.onTemplateDublicateHandler = this.onTemplateDublicateHandler.bind(this);
    this.changeTemplWidthHandler = this.changeTemplWidthHandler.bind(this);
    this.changeBlockFontHandler = this.changeBlockFontHandler.bind(this);
    this.changeFontSizeHandler = this.changeFontSizeHandler.bind(this);
    this.changeFontStyleHandler = this.changeFontStyleHandler.bind(this);
    this.changeFontWeightHandler = this.changeFontWeightHandler.bind(this);
    this.changeFontAlignHandler = this.changeFontAlignHandler.bind(this);
    this.changeLineHeightHandler = this.changeLineHeightHandler.bind(this);
    this.changeBorderStyleHandler = this.changeBorderStyleHandler.bind(this);
    this.changeBorderSizeHandler = this.changeBorderSizeHandler.bind(this);
    this.changeBorderColorHandler = this.changeBorderColorHandler.bind(this);
    this.changeBorderBottomStyleHandler = this.changeBorderBottomStyleHandler.bind(this);
    this.changeBorderBottomSizeHandler = this.changeBorderBottomSizeHandler.bind(this);
    this.changeBorderBottomColorHandler = this.changeBorderBottomColorHandler.bind(this);
    this.changeDividerTopHandler = this.changeDividerTopHandler.bind(this);
    this.changeDividerBottomHandler = this.changeDividerBottomHandler.bind(this);
    this.changeImageAlignHandler = this.changeImageAlignHandler.bind(this);
    this.deleteBgColorHandler = this.deleteBgColorHandler.bind(this);
    this.applyChangesToAllBlocks = this.applyChangesToAllBlocks.bind(this);
    this.applyChangesToTemplates = this.applyChangesToTemplates.bind(this);
    this.changeElementWidthHandler = this.changeElementWidthHandler.bind(this);
    this.changeButtonBgHandler = this.changeButtonBgHandler.bind(this);
    this.changeBorderRadiusHandler = this.changeBorderRadiusHandler.bind(this);
    this.changeButtonBorderHandler = this.changeButtonBorderHandler.bind(this);
    this.changeSocialServiceLayout = this.changeSocialServiceLayout.bind(this);
    this.changeImageCaptionPosHandler = this.changeImageCaptionPosHandler.bind(this);
    this.changeTextCaptionHandler = this.changeTextCaptionHandler.bind(this);
  }
  //Show edit panel on clicked block in teh right panel
  showEditTemplatePanel(){
    this.setState({
      showEditPanel: true
    })
  };

  //Add width to the template
changeTemplWidthHandler(column, width){
  let changeClickedTemplate;
  if(this.state.clickedTemplate.id === column){
    changeClickedTemplate = this.state.templates.filter(templ=>{
      return templ.id === column
    })[0];
    changeClickedTemplate.width = width;
    this.setState({
      clickedTemplate: changeClickedTemplate
    })
  }
  let templatesChanged = this.state.templates.map(templ=>{
    if(templ.id === column){
      return {...templ, width: width}
    }else{
      return templ;
    }
  });

  this.setState({
    templates: templatesChanged,
  });

  window.templatesToImport = [...templatesChanged]
}
   //Add font family to the block template
   changeBlockFontHandler(font){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate}
       styledClickedTemplate.blockFontFamily = font;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockFontFamily: font}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
       })
       window.templatesToImport = [...templatesChanged]
     }
   }

   //Change font size of the block template
   changeFontSizeHandler(size){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockFontSize = size;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockFontSize: size}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }

   //Change border of the block template
   changeBorderStyleHandler(border){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockBorderStyle = border;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockBorderStyle: border}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change social layout of the block template
   changeSocialServiceLayout(layout){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.socialLayout = layout;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, socialLayout: layout}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change border of the block template
   changeBorderSizeHandler(border){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockBorderSize = border;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockBorderSize: border}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change border of the block template
   changeBorderColorHandler(border){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockBorderColor = border;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockBorderColor: border}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }

   //Change border radius of the button
   changeBorderRadiusHandler(radius){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.buttonBorderRadius = radius;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, buttonBorderRadius: radius}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }


   //Change border of the divider block
   changeBorderBottomStyleHandler(border){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.borderBottomStyle = border;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, borderBottomStyle: border}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change border of the divider block
   changeBorderBottomSizeHandler(border){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.borderBottomSize = border;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, borderBottomSize: border}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change border of the divider block
   changeBorderBottomColorHandler(border){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.borderBottomColor = border;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, borderBottomColor: border}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change paddingTop of the divider block
   changeDividerTopHandler(padding){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.paddingTop = padding;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, paddingTop: padding}
         }else{
           return templ;
         }
       });
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
     }
   }


   //Change paddingBottom of the divider block
   changeDividerBottomHandler(padding){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.paddingBottom = padding;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, paddingBottom: padding}
         }else{
           return templ;
         }
       });
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
     }
   }


   //Change font style of the block template
   changeFontStyleHandler(style){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockFontStyle = style;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockFontStyle: style}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }
   //Change font weight of the block template
   changeFontWeightHandler(weight){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockFontWeight = weight;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockFontWeight: weight}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }

   //Change font align of the block template
   changeFontAlignHandler(align){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockAlign = align;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockAlign: align}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }

   //Change line height of the block template
   changeLineHeightHandler(lineHeight){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.blockLineHeight = lineHeight;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, blockLineHeight: lineHeight}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }


   //Change caption align in image + caption block
   changeImageCaptionPosHandler(pos){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.captionPos = pos;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, captionPos: pos}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }


   //Delete backgroundColor in the block
   deleteBgColorHandler(id){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       delete styledClickedTemplate.bgc;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           delete templ.bgc;
           return {...templ}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
   }
   }

   //Change width in button and soc Panels
   changeElementWidthHandler(width){
     if(this.state.clickedTemplate){
       let styledClickedTemplate = {...this.state.clickedTemplate};
       styledClickedTemplate.elementWidth = width;
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.id === this.state.clickedTemplate.id){
           return {...templ, elementWidth: width}
         }else{
           return templ;
         }
       })
       this.setState({
         clickedTemplate: styledClickedTemplate,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
     }
   }
   //Apply all changes to the text blocks
   applyChangesToAllBlocks(){
     if(this.state.clickedTemplate){
       let clickedTemplateToCopyFrom = {...this.state.clickedTemplate};
       let templatesChanged = this.state.templates.map((templ)=>{
         if(templ.blockType === this.state.clickedTemplate.blockType){
           let newTempl = {...templ};
           if(this.state.clickedTemplate.bgc){
             newTempl.bgc = this.state.clickedTemplate.bgc;
           }
           if(this.state.clickedTemplate.color){
             newTempl.color = this.state.clickedTemplate.color;
           }
           if(this.state.clickedTemplate.blockFontFamily){
             newTempl.blockFontFamily = this.state.clickedTemplate.blockFontFamily;
           }
           if(this.state.clickedTemplate.blockFontSize){
             newTempl.blockFontSize = this.state.clickedTemplate.blockFontSize;
           }
           if(this.state.clickedTemplate.blockFontStyle){
             newTempl.blockFontStyle = this.state.clickedTemplate.blockFontStyle;
           }
           if(this.state.clickedTemplate.blockFontWeight){
             newTempl.blockFontWeight = this.state.clickedTemplate.blockFontWeight;
           }
           if(this.state.clickedTemplate.blockAlign){
             newTempl.blockAlign = this.state.clickedTemplate.blockAlign;
           }
           if(this.state.clickedTemplate.blockLineHeight){
             newTempl.blockLineHeight = this.state.clickedTemplate.blockLineHeight;
           }
           if(templ.id === this.state.clickedTemplate.id){
             return {...this.state.clickedTemplate}
           }
           return {...newTempl}
         }else{
           return templ;
         }
       });
       this.setState({
         clickedTemplate: clickedTemplateToCopyFrom,
         templates: templatesChanged
     })
     window.templatesToImport = [...templatesChanged]
     }
   }

   //applyChangesToTemplates
   applyChangesToTemplates(){
     let templatesChanged = this.state.templates.map((templ)=>{
       if(templ.blockType === this.state.clickedTemplate.blockType){
         let newTempl = {...templ};
         if(this.state.clickedTemplate.bgc){
           newTempl.bgc = this.state.clickedTemplate.bgc;
         }
         if(this.state.clickedTemplate.color){
           newTempl.color = this.state.clickedTemplate.color;
         }
         if(this.state.clickedTemplate.blockFontFamily){
           newTempl.blockFontFamily = this.state.clickedTemplate.blockFontFamily;
         }
         if(this.state.clickedTemplate.blockFontSize){
           newTempl.blockFontSize = this.state.clickedTemplate.blockFontSize;
         }
         if(this.state.clickedTemplate.blockFontStyle){
           newTempl.blockFontStyle = this.state.clickedTemplate.blockFontStyle;
         }
         if(this.state.clickedTemplate.blockFontWeight){
           newTempl.blockFontWeight = this.state.clickedTemplate.blockFontWeight;
         }
         if(this.state.clickedTemplate.blockAlign){
           newTempl.blockAlign = this.state.clickedTemplate.blockAlign;
         }
         if(this.state.clickedTemplate.blockLineHeight){
           newTempl.blockLineHeight = this.state.clickedTemplate.blockLineHeight;
         }
         if(templ.id === this.state.clickedTemplate.id){
           return {...this.state.clickedTemplate}
         }
         return {...newTempl}
       }else{
         return templ;
       }
     });
     this.setState({
       templates: templatesChanged
   });
   window.templatesToImport = [...templatesChanged]
   }



  //IMAGE EDITOR METHODS
  //Change align of image
  changeImageAlignHandler(align){
    if(this.state.clickedTemplate){
      let styledClickedTemplate = {...this.state.clickedTemplate};
      styledClickedTemplate.imageAlign = align;
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === this.state.clickedTemplate.id){
          return {...templ, imageAlign: align}
        }else{
          return templ;
        }
      })
      this.setState({
        clickedTemplate: styledClickedTemplate,
        templates: templatesChanged
      })
      window.templatesToImport = [...templatesChanged]
    }
  }

  //Add clicked template Object to the state with all properties
  clickedTemplateHanler(clickedTemplate){
    this.setState({
      clickedTemplate: clickedTemplate
    })
  }
  //Add dragable block id to the state
  draggableTemplateHandler(draggableTemplate){
    this.setState({
      draggableTemplate: draggableTemplate
    })
  }
  //Add id of the templated on which mouse at the moment
  mouseOveredTemplateHandler(mouseOveredTemplate){
    this.setState({
      mouseOveredTemplate: mouseOveredTemplate
    })
  }
  //Hide Template Panel
  hideEditTemplatePanel(){
    this.setState({
      showEditPanel: false
    })
  }
  //Add all the blocks existing blocks in the this.state.temlates
  getStateFromTable(templates){
    if(!templates){
      return;
    }
    let newTemplates = [...templates];
    this.setState({
      templates: newTemplates
    })
    window.templatesToImport = [...newTemplates];
  }

  //Delete templates from this.state when we delete it from dom
  onTemplateDeleteHandler(template){
    let newTemplates = [...this.state.templates];
    let filteredTemplates = newTemplates.filter(templ => {
        for(let i = 0; i<template.length; i++){
          if(templ.id !== template[i]){
            return true;
          }else{
            return false;
          }
        }
    });
    this.setState({
      templates: filteredTemplates
    })
    window.templatesToImport = [...filteredTemplates]
  }
  //Dublicate items to the state when clicked on dublicate button
  onTemplateDublicateHandler(template){
    let newTemplates = [...this.state.templates, template];
    this.setState({
      templates: newTemplates
    });
    window.templatesToImport = [...newTemplates]
  }


  //Change color in the block
  changeColorHandler(color){
    if(this.state.clickedTemplate){
      let styledClickedTemplate = {...this.state.clickedTemplate};
      styledClickedTemplate.color = color;
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === this.state.clickedTemplate.id){
          return {...templ, color: color}
        }else{
          return templ;
        }
      })
      this.setState({
        clickedTemplate: styledClickedTemplate,
        templates: templatesChanged
    })
    window.templatesToImport = [...templatesChanged]
  }
  }
  //Change bg color in the block
  changeBgColorHandler(color){
    if(this.state.clickedTemplate){
      let styledClickedTemplate = {...this.state.clickedTemplate};
      styledClickedTemplate.bgc = color;
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === this.state.clickedTemplate.id){
          return {...templ, bgc: color}
        }else{
          return templ;
        }
      });
      this.setState({
        clickedTemplate: styledClickedTemplate,
        templates: templatesChanged
    });
    window.templatesToImport = [...templatesChanged]
  }}
  changeButtonBgHandler(color){
    if(this.state.clickedTemplate){
      let styledClickedTemplate = {...this.state.clickedTemplate};
      styledClickedTemplate.buttonBgc = color;
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === this.state.clickedTemplate.id){
          return {...templ, buttonBgc: color}
        }else{
          return templ;
        }
      });
      this.setState({
        clickedTemplate: styledClickedTemplate,
        templates: templatesChanged
    });
    window.templatesToImport = [...templatesChanged]
  }}

  //Change button border handler
  changeButtonBorderHandler(border){
    if(this.state.clickedTemplate){
      let styledClickedTemplate = {...this.state.clickedTemplate};
      styledClickedTemplate.buttonBorder = border;
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === this.state.clickedTemplate.id){
          return {...templ, buttonBorder: border}
        }else{
          return templ;
        }
      });
      this.setState({
        clickedTemplate: styledClickedTemplate,
        templates: templatesChanged
    });
    window.templatesToImport = [...templatesChanged]
  }}
  //Change text on clicked block template
  changeTextHandler(content){
    if(this.state.clickedTemplate){
      // change the template in clicked element
      let htmledClickedTemplate = {...this.state.clickedTemplate};
      htmledClickedTemplate.htmlTemplate = content;
      //change the template in the state.templates clicked element
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === this.state.clickedTemplate.id){
          return {...templ, htmlTemplate: content}
        }else{
          return templ
        }
      });
      this.setState({
        clickedTemplate: htmledClickedTemplate,
        templates: templatesChanged
      });
      window.templatesToImport = [...templatesChanged]
    }
  }
  //Change second column text in caption image block on clickedTemplate
  changeTextCaptionHandler(content){
    if(this.state.clickedTemplate){
      let secondClickedTemplate = document.getElementById(this.state.clickedTemplate.id).nextSibling ? document.getElementById(this.state.clickedTemplate.id).nextSibling : document.getElementById(this.state.clickedTemplate.id).previousSibling;
      let templatesChanged = this.state.templates.map((templ)=>{
        if(templ.id === secondClickedTemplate.id){
          return {...templ, htmlTemplate: content}
        }else{
          return templ
        }
      });
      this.setState({
        templates: templatesChanged
      })
      window.templatesToImport = [...templatesChanged]
    }
  }
  componentDidMount(){

    const { i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    changeLanguage(this.props.lng);
    this.setState({
      socialProfileId: `etb-${Date.now()}`
    })
    // this.setState({
    //   socialProfileId: `id${Date.now()}`
    // })
    if(this.props.json.templates){
      window.templatesToImport = [...this.props.json.templates]
      this.setState({
        templates: this.props.json.templates
      })
    }
  }

  render(){
    var w = window.innerWidth;
    const width = ()=>{
      if(w < 1000){
        return 300;
      }else if(w > 1000 && w < 1100 ){
        return 400
      }else if(w > 1100 && w < 1150 ){
        return 450;
      }else if(w > 1150 && w < 1200){
        return 500;
      }else if( w > 1200 && w < 1400){
        return 580;
      }else{
        return 700;
      }
    }
    return(
      <div className='etb'>
        <SplitterLayout percentage={false} primaryIndex={0} secondaryMinSize={300} primaryMinSize={650} secondaryInitialSize={width()}>
        <LeftPanel
          getStateFromTable={this.getStateFromTable}
          defaultTemplates={defaultTemplates}
          templates={this.state.templates}
          showEditTemplatePanel={this.showEditTemplatePanel}
          hideEditTemplatePanel={this.hideEditTemplatePanel}
          clickedTemplateHanler={this.clickedTemplateHanler}
          clickedTemplate={this.state.clickedTemplate}
          changeTextHandler={this.changeTextHandler}
          draggableTemplate={this.state.draggableTemplate}
          draggableTemplateHandler={this.draggableTemplateHandler}
          mouseOveredTemplateHandler={this.mouseOveredTemplateHandler}
          mouseOveredTemplate={this.mouseOveredTemplate}
          onTemplateDeleteHandler={this.onTemplateDeleteHandler}
          onTemplateDublicateHandler={this.onTemplateDublicateHandler}
          managerUrl={this.props.managerUrl}
          mediaBaseUrl={this.props.mediaBaseUrl}
          json={this.props.json}
          showEditPanel={this.state.showEditPanel}
        />
        <div>
        <RightPanel
          defaultTemplates={defaultTemplates}
          draggableTemplateHandler={this.draggableTemplateHandler}
          mediaBaseUrl={this.props.mediaBaseUrl}
        />
        {this.state.showEditPanel ?
          <TemplateEditPanel
            templates={this.state.templates}
            changeBgColorHandler={this.changeBgColorHandler}
            changeColorHandler={this.changeColorHandler}
            hideEditTemplatePanel={this.hideEditTemplatePanel}
            changeTextHandler={this.changeTextHandler}
            clickedTemplate={this.state.clickedTemplate}
            mouseOveredTemplate={this.state.mouseOveredTemplate}
            draggableTemplateHandler={this.draggableTemplateHandler}
            onTemplateDublicateHandler={this.onTemplateDublicateHandler}
            showEditTemplatePanel={this.showEditTemplatePanel}
            clickedTemplateHanler={this.clickedTemplateHanler}
            onTemplateDeleteHandler={this.onTemplateDeleteHandler}
            changeTemplWidthHandler={this.changeTemplWidthHandler}
            changeBlockFontHandler={this.changeBlockFontHandler}
            changeFontSizeHandler={this.changeFontSizeHandler}
            changeFontStyleHandler={this.changeFontStyleHandler}
            changeFontWeightHandler={this.changeFontWeightHandler}
            changeFontAlignHandler={this.changeFontAlignHandler}
            changeLineHeightHandler={this.changeLineHeightHandler}
            changeBorderStyleHandler={this.changeBorderStyleHandler}
            changeBorderSizeHandler={this.changeBorderSizeHandler}
            changeBorderColorHandler={this.changeBorderColorHandler}
            changeBorderBottomStyleHandler={this.changeBorderBottomStyleHandler}
            changeBorderBottomSizeHandler={this.changeBorderBottomSizeHandler}
            changeBorderBottomColorHandler={this.changeBorderBottomColorHandler}
            changeDividerTopHandler={this.changeDividerTopHandler}
            changeDividerBottomHandler={this.changeDividerBottomHandler}
            changeImageAlignHandler={this.changeImageAlignHandler}
            deleteBgColorHandler={this.deleteBgColorHandler}
            applyChangesToAllBlocks={this.applyChangesToAllBlocks}
            getStateFromTable={this.getStateFromTable}
            applyChangesToTemplates={this.applyChangesToTemplates}
            socialProfileId={this.state.socialProfileId}
            changeElementWidthHandler={this.changeElementWidthHandler}
            changeButtonBgHandler={this.changeButtonBgHandler}
            changeBorderRadiusHandler={this.changeBorderRadiusHandler}
            changeButtonBorderHandler={this.changeButtonBorderHandler}
            changeSocialServiceLayout={this.changeSocialServiceLayout}
            changeImageCaptionPosHandler={this.changeImageCaptionPosHandler}
            changeTextCaptionHandler={this.changeTextCaptionHandler}
            managerUrl={this.props.managerUrl}
            mediaBaseUrl={this.props.mediaBaseUrl}
            editorConfig={this.props.editorConfig}
            editorScriptUrl={this.props.editorScriptUrl}
          /> : null}
          </div>
       </SplitterLayout>
      </div>
    )
  }
}

export default translate('translations')(App);
