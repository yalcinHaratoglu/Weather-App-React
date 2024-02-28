import * as React from 'react';

import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import theme from '@/theme';

import App from './App.tsx';

import '@/types.d.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleSheetManager>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyleSheetManager>
    </BrowserRouter>
  </React.StrictMode>
);
