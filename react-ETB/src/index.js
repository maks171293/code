import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import jquery from 'jquery';
import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n.js';
import i18n from 'i18next';
import App from './components/App';

import LanguageDetector from 'i18next-browser-languagedetector';
// window.$ = window.jQuery = jquery;
window.jsonToImport = {
  headerTemplate: '',
  bodyTemplate: '',
  footerTemplate: '',
  headerCss: '',
  bodyCss: '',
  footerCss: '',
  templates: []
};


window.TemplateBuilder = function(options){
  this.mountBuilder = (json = {}, id = options.rootId, ln = options.lang)=>{
    i18n
      .use(LanguageDetector)
      .init({
        // we init with resources
        resources: window[options.lang],
        fallbackLng: 'en',
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
          escapeValue: false, // not needed for react!!
          formatSeparator: ','
        },
        react: {
          wait: true
        }
      });
    ReactDOM.render(<I18nextProvider i18n={i18n} ><App lng={ln} managerUrl={options.managerUrl}  json={json} mediaBaseUrl={options.mediaBaseUrl} editorScriptUrl={options.ckeditor.scriptUrl} editorConfig={options.ckeditor.config} /></I18nextProvider>, document.getElementById(id))
  };
  this.unmountBuilder = ()=>ReactDOM.unmountComponentAtNode(document.getElementById(options.rootId));
  this.getJson = function(){
      let tableWrapper = document.querySelector('.table-wrapper');
      let tableWrapperToExport = tableWrapper.cloneNode(true);
      let headerTable = tableWrapperToExport.children[0];
      let contentTable = tableWrapperToExport.children[1];
      let footerTable = tableWrapperToExport.children[2];
      let tableRoot = document.createElement('table');
      //Css of tables
      let headerCss = headerTable.style.cssText;
      let bodyCss = contentTable.style.cssText;
      let footerCss = footerTable.style.cssText;
      tableRoot.style.margin = '0 auto';
      tableRoot.style.width = '100%';
      let tableTbody = document.createElement('tbody');
      let tableTr = document.createElement('tr');
      let tableTd = document.createElement('td');
      tableRoot.appendChild(tableTbody);
      tableTbody.appendChild(tableTr);
      tableTr.appendChild(tableTd);
      // let headerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
      tableTd.appendChild(headerTable);
      // let containerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
      tableTd.appendChild(contentTable);
      // let footerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
      tableTd.appendChild(footerTable);
      let html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta property="og:title" content="[CAMPAIGN_SUBJECT]" /><meta property="og:title" content="website" /><title>[CAMPAIGN_SUBJECT]</title></head></html>`;
      let fragmentFromString = function (strHTML) {
        return document.createRange().createContextualFragment(strHTML);
      }
      let fragment = fragmentFromString(html);
      let htmlToExport = document.createElement('html');
      let htmlHead = document.createElement('head');
      let htmlBody = document.createElement('body');
      htmlBody.appendChild(tableRoot);
      htmlBody.style.textAlign = 'center';
      htmlBody.style.fontFamily = 'sans-serif';
      htmlHead.appendChild(fragment);
      htmlToExport.appendChild(htmlHead);
      htmlToExport.appendChild(htmlBody);
      [...htmlToExport.querySelectorAll('.template-block-controls')].forEach(item =>{
        item.parentNode.removeChild(item)
      });
      [...htmlToExport.querySelectorAll('.bg-table-block-intruments')].forEach(item =>{
        item.parentNode.removeChild(item)
      });
      window.headerHtml = document.getElementById('template-header').innerHTML;
      window.bodyHtml = document.getElementById('template-body').innerHTML;
      window.footerHtml = document.querySelector('.template-footer').innerHTML;
      // window.jsonToImport.html = htmlToExport.outerHTML;
      window.jsonToImport.headerTemplate = window.headerHtml;
      window.jsonToImport.bodyTemplate = window.bodyHtml;
      window.jsonToImport.footerTemplate = window.footerHtml;
      window.jsonToImport.templates = window.templatesToImport || [];
      window.jsonToImport.headerCss = headerCss;
      window.jsonToImport.bodyCss = bodyCss;
      window.jsonToImport.footerCss = footerCss;
      let readyJSONData = JSON.stringify(window.jsonToImport)
      return readyJSONData;
  };
  this.setJson = (json)=>{
    this.unmountBuilder();
    let parsedJson = JSON.parse(json)
    this.mountBuilder(parsedJson)
  };
  this.getHtml = ()=>{
    let tableWrapper = document.querySelector('.table-wrapper');
    let tableWrapperToExport = tableWrapper.cloneNode(true);
    let headerTable = tableWrapperToExport.children[0];
    let contentTable = tableWrapperToExport.children[1];
    let footerTable = tableWrapperToExport.children[2];
    let tableRoot = document.createElement('table');
    tableRoot.style.margin = '0 auto';
    tableRoot.setAttribute('width', '100%');
    let tableTbody = document.createElement('tbody');
    let tableTr = document.createElement('tr');
    let tableTd = document.createElement('td');
    tableRoot.appendChild(tableTbody);
    tableTbody.appendChild(tableTr);
    tableTr.appendChild(tableTd);
    // let headerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
    tableTd.appendChild(headerTable);
    // let containerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
    tableTd.appendChild(contentTable);
    // let footerContainer = tableTr.appendChild(document.createElement('tr').appendChild(document.createElement('td')));
    tableTd.appendChild(footerTable);
    let html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta property="og:title" content="[CAMPAIGN_SUBJECT]" /><meta property="og:title" content="website" /><style>td>p{margin: 0; padding-top: 1rem; padding-bottom: 1rem;}</style><title>[CAMPAIGN_SUBJECT]</title></head></html>`;
    let fragmentFromString = function (strHTML) {
      return document.createRange().createContextualFragment(strHTML);
    }
    let fragment = fragmentFromString(html);
    let htmlToExport = document.createElement('html');
    let htmlHead = document.createElement('head');
    let htmlBody = document.createElement('body');
    htmlBody.appendChild(tableRoot);
    htmlBody.style.textAlign = 'center';
    htmlBody.style.fontFamily = 'sans-serif';
    htmlHead.appendChild(fragment);
    htmlToExport.appendChild(htmlHead);
    htmlToExport.appendChild(htmlBody);
    [...htmlToExport.querySelectorAll('.template-block-controls')].forEach(item =>{
      let blockControls = item.parentNode;
      blockControls.parentNode.removeChild(blockControls)
    });
    [...htmlToExport.querySelectorAll('.bg-table-block-intruments')].forEach(item =>{
      item.parentNode.removeChild(item)
    });
    [...htmlToExport.querySelectorAll('#template-body')].forEach((item)=>{
      item.children[0].removeAttribute('cellspacing');
      item.children[0].removeAttribute('cellpadding');
    })
    return htmlToExport.outerHTML;
  }
}

// ReactDOM.render(<I18nextProvider i18n={i18n} ><App lng={'ru'} htmlFromJson={htmlFromJson} managerUrl={'/filemanager/filemanager.php'} templatesJSON={json} mediaBaseUrl='http://cl-etb.springs.pw/static/media/' editorScriptUrl="http://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.7.2/ckeditor.js" editorConfig={{}}/></I18nextProvider>, document.getElementById('root'))
//
window.builder = new window.TemplateBuilder({rootId: 'root', lang: 'en', managerUrl: '/filemanager/filemanager.php', mediaBaseUrl: 'http://cl-etb.springs.pw/static/media/', ckeditor: {scriptUrl: "https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.7.2/ckeditor.js", config: {
filebrowserBrowseUrl: '/filemanager/filemanager.php'
}}});
window.builder.mountBuilder();
