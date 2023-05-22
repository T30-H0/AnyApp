import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import vietnamese from './vi.json';

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    vi: vietnamese,
  },
  compatibilityJSON: 'v3',

  react: {
    useSuspense: false,
  },
});

export default i18next;
