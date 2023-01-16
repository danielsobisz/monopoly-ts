import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "themes/theme";

import { StartPage } from "pages/Start";
import { GamePage } from "pages/Game";
import { ConfigPage } from "pages/Config";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route index element={<StartPage />} />

            <Route path="/config" element={<ConfigPage />} />

            <Route path="/game" element={<GamePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
