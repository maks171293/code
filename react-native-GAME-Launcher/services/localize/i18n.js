import i18n from 'i18next';
import Expo from 'expo';
import en from './langs/en.json';
import de from './langs/en.json';
// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: (cb) => {
    return Expo.Util.getCurrentLocaleAsync()
      .then(lng => { cb(lng); })
  },
  init: () => {},
  cacheUserLanguage: () => {}
}
i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    // the translations
    // realworld load that via xhr or bundle those using webpack    
    resources: {
      en: en,
      de: de,
      // have a initial namespace
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false // not needed for react
      }
  }});
export default i18n;