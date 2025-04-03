import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; 


import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Materi from "./pages/Materi";
import Informasi from "./pages/Informasi";

import PengantarBab from "./pages/Pendahuluan/PengantarBab";
import Pendahuluan from "./pages/Pendahuluan/Pendahuluan";
import MengenalAnalisisData from "./pages/Pendahuluan/MengenalAnalisis";
import PengenalanCT from "./pages/Pendahuluan/PengenalanCT";
import PenerapanCT from "./pages/Pendahuluan/PenerapanCT";

import PencarianLookup from "./pages/PencarianData/PencarianLookup";
import ContohLookup from "./pages/PencarianData/ContohLookup";
import AktivitasLookup from "./pages/PencarianData/AktivitasLookup";
import BerlatihLookup from "./pages/PencarianData/BerlatihLookup";
import PetunjukQuiz1 from "./pages/PencarianData/PetunjukQuiz1";
import Quiz from "./pages/PencarianData/Quiz1";
import Feedback1 from "./pages/PencarianData/Feedback1";

import VisualisasiData from "./pages/VisualisasiData/VisualisasiData";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/informasi" element={<Informasi />} />

        {/* PENDAHULUAN */}
        <Route path="/pengantar-bab" element={<PengantarBab />} />
        <Route path="/pendahuluan" element={<Pendahuluan />} />
        <Route path="/mengenal-analisis" element={<MengenalAnalisisData />} />
        <Route path="/pengenalan-ct" element={<PengenalanCT />} />
        <Route path="/penerapan-ct" element={<PenerapanCT />} />
        
        {/* PENCARIAN */}
        <Route path="/pencarian-lookup" element={<PencarianLookup />} />
        <Route path="/contoh-lookup" element={<ContohLookup />} />
        <Route path="/aktivitas-lookup" element={<AktivitasLookup />} />
        <Route path="/berlatih-lookup" element={<BerlatihLookup />} />
        <Route path="/petunjuk-kuis1" element={<PetunjukQuiz1 />} />
        <Route path="/quiz1" element={<Quiz />} />
        <Route path="/feedback1" element={<Feedback1 />} />

        {/* VISUALISASI DATA */}
        <Route path="/visualisasi-data" element={<VisualisasiData />} />

       


        
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
