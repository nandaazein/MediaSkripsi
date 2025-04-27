import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Main Landing
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Materi from "./pages/Materi";
import Informasi from "./pages/Informasi";
import Spreadsheet from "./pages/Spreadsheet";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Pendahuluan
import PengantarBab from "./pages/Pendahuluan/PengantarBab";
import Pendahuluan from "./pages/Pendahuluan/Pendahuluan";
import MengenalAnalisisData from "./pages/Pendahuluan/MengenalAnalisis";
import PengenalanCT from "./pages/Pendahuluan/PengenalanCT";
import PenerapanCT from "./pages/Pendahuluan/PenerapanCT";

// Sub 1
import PencarianLookup from "./pages/PencarianData/PencarianLookup";
import ContohLookup from "./pages/PencarianData/ContohLookup";
import PencarianReference from "./pages/PencarianData/PencarianReference";
import ContohReference from "./pages/PencarianData/ContohReference";
import AktivitasLookup from "./pages/PencarianData/AktivitasLookup";
import BerlatihLookup from "./pages/PencarianData/BerlatihLookup";
import PetunjukQuiz1 from "./pages/PencarianData/PetunjukQuiz1";
import QuizPencarianData from "./pages/PencarianData/Quiz1";
import FeedbackPencarianData from "./pages/PencarianData/Feedback1";

// Sub 2
import VisualisasiData from "./pages/VisualisasiData/VisualisasiData";
import ContohPenerapan from "./pages/VisualisasiData/ContohPenerapanVisualisasiData";
import AktivitasSiswaVisualisasi from "./pages/VisualisasiData/AktivitasSiswaVisualisasi";
import BerlatihVisualisasi from "./pages/VisualisasiData/BerlatihVisualisasi";
import PetunjukKuis2 from "./pages/VisualisasiData/PetunjukKuis2";
import QuizVisualisasiData from "./pages/VisualisasiData/Quiz2";
import FeedbackVisualisasiData from "./pages/VisualisasiData/Feedback2";

// Sub 3
import PeringkasanData from "./pages/PeringkasanData/PeringkasanData";
import ContohPenerapanPeringkasan from "./pages/PeringkasanData/ContohPenerapanPeringkasan";
import AktivitasPeringkasan from "./pages/PeringkasanData/AktivitasPeringkasan";
import BerlatihPeringkasan from "./pages/PeringkasanData/BerlatihPeringkasan";
import QuizPeringkasanData from "./pages/PeringkasanData/Quiz3";

// Sub 4
import PengelolaanData from "./pages/PengelolaanData/PengelolaanData";
import ContohPengelolaan from "./pages/PengelolaanData/ContohPengelolaan";
import AktivitasSiswaPengelolaan from "./pages/PengelolaanData/AktivitasSiswa";
import MariBerlatihPengelolaan from "./pages/PengelolaanData/MariBerlatih";
import Kuis4 from "./pages/PengelolaanData/Kuis4";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PENDAHULUAN */}
        <Route path="/pengantar-bab" element={<PengantarBab />} />
        <Route path="/pendahuluan" element={<Pendahuluan />} />
        <Route path="/mengenal-analisis" element={<MengenalAnalisisData />} />
        <Route path="/pengenalan-ct" element={<PengenalanCT />} />
        <Route path="/penerapan-ct" element={<PenerapanCT />} />

        {/* PENCARIAN */}
        <Route path="/pencarian-lookup" element={<PencarianLookup />} />
        <Route path="/contoh-lookup" element={<ContohLookup />} />
        <Route path="/pencarian-reference" element={<PencarianReference />} />
        <Route path="/contoh-reference" element={<ContohReference />} />
        <Route path="/aktivitas-lookup" element={<AktivitasLookup />} />
        <Route path="/berlatih-lookup" element={<BerlatihLookup />} />
        <Route path="/petunjuk-kuis1" element={<PetunjukQuiz1 />} />
        <Route path="/quiz1" element={<QuizPencarianData />} />
        <Route path="/feedback1" element={<FeedbackPencarianData />} />

        {/* VISUALISASI DATA */}
        <Route path="/visualisasi-data" element={<VisualisasiData />} />
        <Route path="/contoh-penerapan-visualisasi-data" element={<ContohPenerapan />}/>
        <Route path="/aktivitas-visualisasi" element={<AktivitasSiswaVisualisasi />} />
        <Route path="/mari-berlatih-visualisasi" element={<BerlatihVisualisasi />}/>
        <Route path="/petunjuk-kuis2" element={<PetunjukKuis2 />} />
        <Route path="/quiz2" element={<QuizVisualisasiData />} />
        <Route path="/feedback2" element={<FeedbackVisualisasiData />} />

        {/* PERINGKASAN DATA SUB 3  */}
        <Route path="/peringkasan-data" element={<PeringkasanData />} />
        <Route path="/penerapan-peringkasan" element={<ContohPenerapanPeringkasan />}/>
        <Route path="/aktivitas-peringkasan" element={<AktivitasPeringkasan />}/>
        <Route path="/berlatih-peringkasan" element={<BerlatihPeringkasan />} />
        <Route path="/quiz3" element={<QuizPeringkasanData />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />

        {/* PENGELOLAAN DATA SUB 4 */}
        <Route path="/pengelolaan-data" element={<PengelolaanData />} />
        <Route path="/contoh-pengelolaan" element={<ContohPengelolaan />}/>
        <Route path="/aktivitas-siswa" element={<AktivitasSiswaPengelolaan />}/>
        <Route path="/berlatih-pengelolaan" element={<MariBerlatihPengelolaan />}/>
        <Route path="/quiz4" element={<Kuis4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
