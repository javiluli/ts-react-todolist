import { I18nextProvider } from 'react-i18next';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import global_en from './translations/en/translation.json';
import global_es from './translations/es/translation.json';
import ColorContextProvider from './context/toggleTheme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18next}>
    <CssBaseline />
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </I18nextProvider>,
);
