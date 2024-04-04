import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game/Game.tsx";
import { Home } from "./pages/Home/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
