import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {store} from '../redux/store';
import english from './en.json';
import vietnamese from './vi.json';

const language = store?.getState().app.language;
i18next.use(initReactI18next).init({
  lng: language,
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
