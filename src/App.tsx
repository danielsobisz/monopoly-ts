import { Routes, Route, BrowserRouter } from "react-router-dom";

import { StartPage } from "pages/Start";
import { GamePage } from "pages/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />

          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
