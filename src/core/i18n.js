import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import 'moment/locale/pt-br';
import { initReactI18next } from 'react-i18next';
import phraseData from '../assets/locales/getLangData.json';

let languageCode = {
  ru: 'ru',
  en: 'en',
};

const lng = localStorage.getItem('i18nextLngTemp') || localStorage.getItem('i18nextLng') || 'ru';
moment.locale(languageCode[lng]);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: phraseData,
    lng: lng,
    fallbackLng: {
      en: ['en'],
      default: ['ru'],
    },
    debug: process.env.node_env !== 'production',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
