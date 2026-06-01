import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Trinity from "./pages/trinity";
import Harmonicstudios from "./pages/harmonicstudios";
import Abrsm from "./pages/abrsm";
import Rsl from "./pages/rsl";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trinity" element={<Trinity />} />
      <Route path="/harmonicstudios" element={<Harmonicstudios />} />
      <Route path="/abrsm" element={<Abrsm />} />
      <Route path="/rsl" element={<Rsl />} />
     
    </Routes>
  );
}



