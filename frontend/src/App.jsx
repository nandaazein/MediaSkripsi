import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Main Landing
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Materi from "./pages/Materi";
import Informasi from "./pages/Informasi";
import Spreadsheet from "./pages/Spreadsheet";
import LoginSiswa from "./pages/LoginSiswa";
import LoginGuru from "./pages/LoginGuru";
import RegisterSiswa from "./pages/RegisterSiswa";
import RegisterGuru from "./pages/RegisterGuru";

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
import RangkumanPencarianData from "./pages/PencarianData/RangkumanPencarianData";
import PetunjukQuizPencarian from "./pages/PencarianData/PetunjukQuizPencarian";
import KuisPencarianData from "./pages/PencarianData/KuisPencarianData";
import FeedbackPencarianData from "./pages/PencarianData/Feedback1";

// Sub 2
import VisualisasiData from "./pages/VisualisasiData/VisualisasiData";
import ContohPenerapan from "./pages/VisualisasiData/ContohPenerapanVisualisasiData";
import AktivitasSiswaVisualisasi from "./pages/VisualisasiData/AktivitasSiswaVisualisasi";
import BerlatihVisualisasi from "./pages/VisualisasiData/BerlatihVisualisasi";
import RangkumanVisualisasiData from "./pages/VisualisasiData/RangkumanVisualisasiData";
import PetunjukQuizVisualisasi from "./pages/VisualisasiData/PetunjukQuizVisualisasi";
import KuisVisualisasiData from "./pages/VisualisasiData/KuisVisualisasiData";
import FeedbackVisualisasiData from "./pages/VisualisasiData/Feedback2";

// Sub 3
import PeringkasanData from "./pages/PeringkasanData/PeringkasanData";
import ContohPenerapanPeringkasan from "./pages/PeringkasanData/ContohPenerapanPeringkasan";
import AktivitasPeringkasan from "./pages/PeringkasanData/AktivitasPeringkasan";
import BerlatihPeringkasan from "./pages/PeringkasanData/BerlatihPeringkasan";
import RangkumanPeringkasanData from "./pages/PeringkasanData/RangkumanPeringkasanData";
import PetunjukQuizPeringkasan from "./pages/PeringkasanData/PetunjukQuizPeringkasan";
import KuisPeringkasanData from "./pages/PeringkasanData/KuisPeringkasanData";
import FeedbackPeringkasanData from "./pages/PeringkasanData/Feedback3";

// Sub 4
import PengelolaanData from "./pages/PengelolaanData/PengelolaanData";
import ContohPengelolaan from "./pages/PengelolaanData/ContohPengelolaan";
import AktivitasSiswaPengelolaan from "./pages/PengelolaanData/AktivitasPengelolaan";
import MariBerlatihPengelolaan from "./pages/PengelolaanData/MariBerlatih";
import RangkumanPengelolaanData from "./pages/PengelolaanData/RangkumanPengelolaan";
import PetunjukQuizPengelolaan from "./pages/PengelolaanData/PetunjukQuizPengelolaan";
import KuisPengelolaanData from "./pages/PengelolaanData/KuisPengelolaanData";
import FeedbackPengelolaanData from "./pages/PengelolaanData/Feedback4";


// Admin
import Dashboard from "./pages/admin/Dashboard";
import Progres  from "./pages/admin/Progres";
import DataSiswa from "./pages/admin/DataSiswa";
import DataNilai from "./pages/admin/DataNilai";
import DataEvaluasi from "./pages/admin/DataEvaluasi";
import KelolaSoal from "./pages/admin/KelolaSoal";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/login-siswa" element={<LoginSiswa />} />
        <Route path="/login-guru" element={<LoginGuru />} />
        <Route path="/register-siswa" element={<RegisterSiswa />} />
        <Route path="/register-guru" element={<RegisterGuru />} />

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
        <Route path="/rangkuman-pencarian" element={<RangkumanPencarianData />} />
        <Route path="/petunjuk-quiz-pencarian" element={<PetunjukQuizPencarian />} />
        <Route path="/kuis-pencarian" element={<KuisPencarianData />} />
        <Route path="/feedback1" element={<FeedbackPencarianData />} />

        {/* VISUALISASI DATA */}
        <Route path="/visualisasi-data" element={<VisualisasiData />} />
        <Route path="/contoh-penerapan-visualisasi-data" element={<ContohPenerapan />}/>
        <Route path="/aktivitas-visualisasi" element={<AktivitasSiswaVisualisasi />} />
        <Route path="/mari-berlatih-visualisasi" element={<BerlatihVisualisasi />}/>
        <Route path="/rangkuman-visualisasi" element={<RangkumanVisualisasiData />} />
        <Route path="/petunjuk-quiz-visualisasi" element={<PetunjukQuizVisualisasi />} />
        <Route path="/kuis-visualisasi" element={<KuisVisualisasiData />} />
        <Route path="/feedback2" element={<FeedbackVisualisasiData />} />

        {/* PERINGKASAN DATA SUB 3  */}
        <Route path="/peringkasan-data" element={<PeringkasanData />} />
        <Route path="/penerapan-peringkasan" element={<ContohPenerapanPeringkasan />}/>
        <Route path="/aktivitas-peringkasan" element={<AktivitasPeringkasan />}/>
        <Route path="/berlatih-peringkasan" element={<BerlatihPeringkasan />} />
        <Route path="/rangkuman-peringkasan" element={<RangkumanPeringkasanData />} />
        <Route path="/petunjuk-quiz-peringkasan" element={<PetunjukQuizPeringkasan />} />
        <Route path="/kuis-peringkasan" element={<KuisPeringkasanData />} />
        <Route path="/feedback3" element={<FeedbackPeringkasanData />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />

        {/* PENGELOLAAN DATA SUB 4 */}
        <Route path="/pengelolaan-data" element={<PengelolaanData />} />
        <Route path="/contoh-pengelolaan" element={<ContohPengelolaan />}/>
        <Route path="/aktivitas-pengelolaan" element={<AktivitasSiswaPengelolaan />}/>
        <Route path="/berlatih-pengelolaan" element={<MariBerlatihPengelolaan />}/>    
        <Route path="/rangkuman-pengelolaan" element={<RangkumanPengelolaanData />} />
        <Route path="/petunjuk-quiz-pengelolaan" element={<PetunjukQuizPengelolaan />} />
        <Route path="/kuis-pengelolaan" element={<KuisPengelolaanData />} />
        <Route path="/feedback4" element={<FeedbackPengelolaanData />} />

        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/progres" element={<Progres />} />
        <Route path="/data-siswa" element={<DataSiswa />} />
        <Route path="/data-nilai" element={<DataNilai />} />
        <Route path="/data-evaluasi" element={<DataEvaluasi />} />
        <Route path="/kelola-soal" element={<KelolaSoal />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
