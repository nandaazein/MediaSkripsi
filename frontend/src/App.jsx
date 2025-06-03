import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Main Landing
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Materi from "./pages/Materi";
import Informasi from "./pages/Informasi";
import LoginSiswa from "./pages/LoginSiswa";
import LoginGuru from "./pages/LoginGuru";
import RegisterSiswa from "./pages/RegisterSiswa";
import RegisterGuru from "./pages/RegisterGuru";
import DashboardSiswa from "./pages/DashboardSiswa";

// Pendahuluan
import PengantarBab from "./pages/Pendahuluan/PengantarBab";
import Pendahuluan from "./pages/Pendahuluan/Pendahuluan";
import MengenalAnalisisData from "./pages/Pendahuluan/MengenalAnalisis";
import PengenalanCT from "./pages/Pendahuluan/PengenalanCT";

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

import PetunjukPengerjaanEvaluasi from "./pages/Evaluasi/PetunjukPengerjaanEvaluasi";
import EvaluasiAkhir from "./pages/Evaluasi/KuisEvaluasiAkhir";
import FeedbackEvaluasiAkhir from "./pages/Evaluasi/FeedbackEvaluasi";

// Admin
import Dashboard from "./pages/admin/Dashboard";
import Progres from "./pages/admin/Progres";
import DataSiswa from "./pages/admin/DataSiswa";
import DataNilai from "./pages/admin/DataNilai";
import DataEvaluasi from "./pages/admin/DataEvaluasi";
import KelolaSoal from "./pages/admin/KelolaSoal";
import KKM from "./pages/admin/Pengaturan";

// Protected Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Verify token with backend
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/verify-token`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsAuthenticated(true);
        setUserRole(response.data.role); // Assuming backend returns role
      } catch (error) {
        setIsAuthenticated(false);
        localStorage.removeItem("token"); // Clear invalid token
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading while verifying token
  }

  if (!isAuthenticated) {
    return <Navigate to="/login-siswa" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect based on user role
    return (
      <Navigate to={userRole === "teacher" ? "/dashboard" : "/home"} replace />
    );
  }

  return element;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute element={<HomePage />} allowedRoles={["student"]} />
          }
        />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/login-siswa" element={<LoginSiswa />} />
        <Route path="/login-guru" element={<LoginGuru />} />
        <Route path="/register-siswa" element={<RegisterSiswa />} />
        <Route path="/register-guru" element={<RegisterGuru />} />

        {/* Protected Routes for Authenticated Users (Students and Teachers) */}
        <Route
          path="/materi"
          element={
            <ProtectedRoute element={<Materi />} allowedRoles={["student"]} />
          }
        />
        <Route
          path="/dashboard-siswa"
          element={
            <ProtectedRoute
              element={<DashboardSiswa />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/pengantar-bab"
          element={
            <ProtectedRoute
              element={<PengantarBab />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/pendahuluan"
          element={
            <ProtectedRoute
              element={<Pendahuluan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/mengenal-analisis"
          element={
            <ProtectedRoute
              element={<MengenalAnalisisData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/pengenalan-ct"
          element={
            <ProtectedRoute
              element={<PengenalanCT />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/pencarian-lookup"
          element={
            <ProtectedRoute
              element={<PencarianLookup />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/contoh-lookup"
          element={
            <ProtectedRoute
              element={<ContohLookup />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/pencarian-reference"
          element={
            <ProtectedRoute
              element={<PencarianReference />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/contoh-reference"
          element={
            <ProtectedRoute
              element={<ContohReference />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/aktivitas-lookup"
          element={
            <ProtectedRoute
              element={<AktivitasLookup />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/berlatih-lookup"
          element={
            <ProtectedRoute
              element={<BerlatihLookup />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/rangkuman-pencarian"
          element={
            <ProtectedRoute
              element={<RangkumanPencarianData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/petunjuk-pengerjaan-pencarian"
          element={
            <ProtectedRoute
              element={<PetunjukQuizPencarian />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/kuis-pencarian"
          element={
            <ProtectedRoute
              element={<KuisPencarianData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/feedback1"
          element={
            <ProtectedRoute
              element={<FeedbackPencarianData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/visualisasi-data"
          element={
            <ProtectedRoute
              element={<VisualisasiData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/contoh-penerapan-visualisasi-data"
          element={
            <ProtectedRoute
              element={<ContohPenerapan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/aktivitas-visualisasi"
          element={
            <ProtectedRoute
              element={<AktivitasSiswaVisualisasi />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/berlatih-visualisasi"
          element={
            <ProtectedRoute
              element={<BerlatihVisualisasi />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/rangkuman-visualisasi"
          element={
            <ProtectedRoute
              element={<RangkumanVisualisasiData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/petunjuk-pengerjaan-visualisasi"
          element={
            <ProtectedRoute
              element={<PetunjukQuizVisualisasi />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/kuis-visualisasi"
          element={
            <ProtectedRoute
              element={<KuisVisualisasiData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/feedback2"
          element={
            <ProtectedRoute
              element={<FeedbackVisualisasiData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/peringkasan-data"
          element={
            <ProtectedRoute
              element={<PeringkasanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/penerapan-peringkasan"
          element={
            <ProtectedRoute
              element={<ContohPenerapanPeringkasan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/aktivitas-peringkasan"
          element={
            <ProtectedRoute
              element={<AktivitasPeringkasan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/berlatih-peringkasan"
          element={
            <ProtectedRoute
              element={<BerlatihPeringkasan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/rangkuman-peringkasan"
          element={
            <ProtectedRoute
              element={<RangkumanPeringkasanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/petunjuk-pengerjaan-peringkasan"
          element={
            <ProtectedRoute
              element={<PetunjukQuizPeringkasan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/kuis-peringkasan"
          element={
            <ProtectedRoute
              element={<KuisPeringkasanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/feedback3"
          element={
            <ProtectedRoute
              element={<FeedbackPeringkasanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/pengelolaan-data"
          element={
            <ProtectedRoute
              element={<PengelolaanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/contoh-pengelolaan"
          element={
            <ProtectedRoute
              element={<ContohPengelolaan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/aktivitas-pengelolaan"
          element={
            <ProtectedRoute
              element={<AktivitasSiswaPengelolaan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/berlatih-pengelolaan"
          element={
            <ProtectedRoute
              element={<MariBerlatihPengelolaan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/rangkuman-pengelolaan"
          element={
            <ProtectedRoute
              element={<RangkumanPengelolaanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/petunjuk-pengerjaan-pengelolaan"
          element={
            <ProtectedRoute
              element={<PetunjukQuizPengelolaan />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/kuis-pengelolaan"
          element={
            <ProtectedRoute
              element={<KuisPengelolaanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/feedback4"
          element={
            <ProtectedRoute
              element={<FeedbackPengelolaanData />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/petunjuk-pengerjaan-evaluasi"
          element={
            <ProtectedRoute
              element={<PetunjukPengerjaanEvaluasi />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/kuis-evaluasi"
          element={
            <ProtectedRoute
              element={<EvaluasiAkhir />}
              allowedRoles={["student"]}
            />
          }
        />
        <Route
          path="/feedback-evaluasi"
          element={
            <ProtectedRoute
              element={<FeedbackEvaluasiAkhir />}
              allowedRoles={["student"]}
            />
          }
        />

        {/* Protected Routes for Teachers Only */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={<Dashboard />}
              allowedRoles={["teacher"]}
            />
          }
        />
        <Route
          path="/progres"
          element={
            <ProtectedRoute element={<Progres />} allowedRoles={["teacher"]} />
          }
        />
        <Route
          path="/data-siswa"
          element={
            <ProtectedRoute
              element={<DataSiswa />}
              allowedRoles={["teacher"]}
            />
          }
        />
        <Route
          path="/data-nilai"
          element={
            <ProtectedRoute
              element={<DataNilai />}
              allowedRoles={["teacher"]}
            />
          }
        />
        <Route
          path="/data-evaluasi"
          element={
            <ProtectedRoute
              element={<DataEvaluasi />}
              allowedRoles={["teacher"]}
            />
          }
        />
        <Route
          path="/kelola-soal"
          element={
            <ProtectedRoute
              element={<KelolaSoal />}
              allowedRoles={["teacher"]}
            />
          }
        />
        <Route
          path="/pengaturan-kkm"
          element={
            <ProtectedRoute element={<KKM />} allowedRoles={["teacher"]} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
