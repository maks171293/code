import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: window.en.en,
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


export default i18n;




// var xhr = new XMLHttpRequest();
// // 2. Конфигурируем его: GET-запрос на URL 'translations.json'
// xhr.open('GET', 'translations.json', false);
// // 3. Отсылаем запрос
// xhr.send();
// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//   // обработать ошибку
//   console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
//   // вывести результат
//   lang = JSON.parse(xhr.responseText); // responseText -- текст ответа.
// }
