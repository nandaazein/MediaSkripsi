import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; 


import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import Materi from "./pages/Materi";
import Informasi from "./pages/Informasi";
import Spreadsheet from "./pages/Spreadsheet";
import Pendahuluan from "./pages/Pendahuluan/Pendahuluan";
import Berlatih from "./pages/VisualisasiData/BerlatihVisualisasi";
import BerlatihPeringkasan from "./pages/PeringkasanData/BerlatihPeringkasan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
        <Route path="/pendahuluan" element={<Pendahuluan />} />
        <Route path="/berlatih-visualisasi" element={<Berlatih />} />
        <Route path="/berlatih-peringkasan" element={<BerlatihPeringkasan />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
