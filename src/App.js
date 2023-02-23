import "./global.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";

import Home from "./pages/Home"
import RotaA from "./pages/RotaA"
import RotaB from "./pages/RotaB"
import RotaC from "./pages/RotaC"


function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/rotaa" element={<RotaA />} />
        <Route path="/rotab" element={<RotaB />} />
        <Route path="/rotab/:id" element={<RotaB />} />
        <Route path="/rotac" element={<RotaC />} />
        <Route path="*" element={<RotaC />} />
      </Routes>
    </Router>
  );
}

export default App;
