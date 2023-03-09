import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Apropos from "./pages/Apropos";
import FicheLogement from "./pages/FicheLogement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/fiche-logement" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
