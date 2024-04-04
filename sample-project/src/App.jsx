import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game/Game.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
