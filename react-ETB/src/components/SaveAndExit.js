import React from 'react';

import { translate, Trans } from 'react-i18next';


class SaveAndExit extends React.Component{
  constructor(props){
    super(props);
    this.saveEmailTemplate = this.saveEmailTemplate.bind(this);
  }
  saveEmailTemplate(){
    let tableWrapper = document.querySelector('.table-wrapper');
    let tableWrapperToExport = tableWrapper.cloneNode(true);
    let headerTable = tableWrapperToExport.childNodes[0];
    let contentTable = tableWrapperToExport.childNodes[1];
    let footerTable = tableWrapperToExport.childNodes[2];
    let tableRoot = document.createElement('table');
    let tableTbody = document.createElement('tbody');
    let tableTr = document.createElement('tr');
    tableRoot.appendChild(tableTbody);
    tableTbody.appendChild(tableTr);
    let headerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
    headerContainer.appendChild(headerTable);
    let containerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
    containerContainer.appendChild(contentTable);
    let footerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
    footerContainer.appendChild(footerTable);
    let emailTitle = 'Your Mail';
    let html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>${emailTitle}</title></head><body></body></html>`;
    let fragmentFromString = function (strHTML) {
      return document.createRange().createContextualFragment(strHTML);
    }
    let fragment = fragmentFromString(html);
    let htmlToExport = document.createElement('html');
    let htmlHead = document.createElement('head');
    let htmlBody = document.createElement('body');
    let htmlTable = document.createElement('table');
    let htmlTr = document.createElement('tr');
    let htmlTd = document.createElement('td');
    htmlBody.appendChild(tableRoot);
    htmlHead.appendChild(fragment);
    htmlToExport.appendChild(htmlHead);
    htmlToExport.appendChild(htmlBody);
    return htmlToExport;
  }

  render(){

    return(
      <div className="exit">
        <button className="exit-button" onClick={this.saveEmailTemplate}>Export to HTML &#8674;</button>
      </div>
    )
  }
}

export default translate('translations')(SaveAndExit);
