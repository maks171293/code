import React from 'react';
import ReactDOM from 'react-dom';
import { translate, Trans } from 'react-i18next';

class Nav extends React.Component{
  render(){

    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }
    return(
      <div className="nav">
        <ul style={{textDecoration: "none"}} >
          <li><a href="" >{t('Main Menu')}</a></li>
          <li><a href="" >{t('Template Builder')}</a></li>
          <li><a href="" >{t('Contacts')}</a></li>
          <a href="#" style={{color: 'white', float: 'right', marginRight: '20px'}}>ru</a>
          <a href="#" style={{color: 'white', float: 'right', marginRight: '20px'}}>en</a>
        </ul>
      </div>
    )
  }
}

export default translate('translations')(Nav);
