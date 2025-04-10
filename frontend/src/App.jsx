import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Main Landing
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Materi from "./pages/Materi";
import Informasi from "./pages/Informasi";
import Spreadsheet from "./pages/Spreadsheet";

// Pendahuluan
import PengantarBab from "./pages/Pendahuluan/PengantarBab";
import Pendahuluan from "./pages/Pendahuluan/Pendahuluan";
import MengenalAnalisisData from "./pages/Pendahuluan/MengenalAnalisis";
import PengenalanCT from "./pages/Pendahuluan/PengenalanCT";
import PenerapanCT from "./pages/Pendahuluan/PenerapanCT";

// Sub 1
import PencarianLookup from "./pages/PencarianData/PencarianLookup";
import ContohLookup from "./pages/PencarianData/ContohLookup";
import AktivitasLookup from "./pages/PencarianData/AktivitasLookup";
import BerlatihLookup from "./pages/PencarianData/BerlatihLookup";
import PetunjukQuiz1 from "./pages/PencarianData/PetunjukQuiz1";
import Quiz from "./pages/PencarianData/Quiz1";
import Feedback1 from "./pages/PencarianData/Feedback1";

// Sub 2
import VisualisasiData from "./pages/VisualisasiData/VisualisasiData";
import ContohPenerapan from "./pages/VisualisasiData/ContohPenerapanVisualisasiData";
import AktivitasSiswaVisualisasi from "./pages/VisualisasiData/AktivitasSiswaVisualisasi";
import BerlatihVisualisasi from "./pages/VisualisasiData/BerlatihVisualisasi";
import PetunjukKuis2 from "./pages/VisualisasiData/PetunjukKuis2";
import Kuis2 from "./pages/VisualisasiData/Kuis2";
import Feedback2 from "./pages/VisualisasiData/Feedback2";

// Sub 3
import PeringkasanData from "./pages/PeringkasanData/PeringkasanData";
import ContohPenerapanPeringkasan from "./pages/PeringkasanData/ContohPenerapanPeringkasan";
import AktivitasPeringkasan from "./pages/PeringkasanData/AktivitasPeringkasan";
// Sub 4
import PengelolaanData from "./pages/PengelolaanData/PengelolaanData";


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
        <Route
          path="/contoh-penerapan-visualisasi-data" element={<ContohPenerapan />}/>
        <Route path="/aktivitas-visualisasi" element={<AktivitasSiswaVisualisasi />}/>
        <Route path="/mari-berlatih-visualisasi" element={<BerlatihVisualisasi />}/>
        <Route path="/petunjuk-kuis2" element={<PetunjukKuis2 />} />
        <Route path="/kuis2" element={<Kuis2 />} />
        <Route path="/feedback2" element={<Feedback2 />} />

        {/* PERINGKASAN DATA SUB 3  */}
        <Route path="/peringkasan-data" element={<PeringkasanData />} />
        <Route path="/penerapan-peringkasan" element={<ContohPenerapanPeringkasan />}/>
        <Route path="/aktivitas-peringkasan" element={<AktivitasPeringkasan />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />

        {/* PENGELOLAAN DATA SUB 4 */}
        <Route path="/pengelolaan-data" element={<PengelolaanData />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
