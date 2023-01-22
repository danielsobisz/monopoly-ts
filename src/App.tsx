import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import { theme } from 'themes/theme';
import { GlobalStyle } from 'themes/globalStyles';

import { StartPage } from 'pages/Start';
import { GamePage } from 'pages/Game';
import { ConfigPage } from 'pages/Config';

function App() {
  return (
    <div className="app">
      <Helmet>
        <script src="https://kit.fontawesome.com/3f6db4959a.js" crossOrigin="anonymous" />
      </Helmet>

      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Routes>
            <Route index element={<StartPage />} />

            <Route path="/config" element={<ConfigPage />} />

            <Route path="/game" element={<GamePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>

      <div id="portalContext" />
    </div>
  );
}

export default App;
