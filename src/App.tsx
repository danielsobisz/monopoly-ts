import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { GameProvider } from 'contexts';

import { GlobalStyle } from 'themes/globalStyles';
import { theme } from 'themes/theme';

import { ConfigPage } from 'pages/Config';
import { GamePage } from 'pages/Game';
import { StartPage } from 'pages/Start';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <script
            src="https://kit.fontawesome.com/3f6db4959a.js"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />

            <Routes>
              <Route index element={<StartPage />} />

              <Route path="/config" element={<ConfigPage />} />

              <Route
                path="/game"
                element={
                  <GameProvider>
                    <GamePage />
                  </GameProvider>
                }
              />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>

        <div id="portalContext" />

        <Toaster
          toastOptions={{
            style: {
              zIndex: 99999999999,
              fontSize: 16,
            },
          }}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;
