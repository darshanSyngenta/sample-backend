import locale_en from 'antd/es/locale/en_US';
import locale_pt from 'antd/es/locale/pt_BR';
import locale_es from 'antd/es/locale/es_ES';
// import locale_hi from 'antd/es/locale/hi_IN';
import moment from 'moment';
import 'moment/locale/pt-br';
// import 'moment/locale/es';
// import 'moment/locale/hi';

let languageCode = {
  pt: 'pt-BR',
  es: 'es',
  en: 'en'
  // hi: 'hi'
};

export const getLocale = () => {
  let selectedLanguage = localStorage.getItem('i18nextLng') || 'en';
  let locale = {};
  moment.locale(languageCode[selectedLanguage]);
  switch (selectedLanguage) {
    case 'pt':
      locale = locale_pt;
      break;
    case 'es':
      locale = locale_es;
      break;
    // case 'hi':
    //   locale = locale_hi;
    //   break;
    default:
      locale = locale_en;
  }
  return locale;
};
