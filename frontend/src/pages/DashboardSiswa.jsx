import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react"; // Ikon pengguna

const DashboardSiswa = () => {
  const [siswa, setSiswa] = useState(null);
  const [scores, setScores] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!userData || !token) {
      navigate("/login-siswa");
      return;
    }

    try {
      const user = JSON.parse(userData);
      setSiswa(user);

      const fetchScores = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${user.nis}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            if (response.status === 401) {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login-siswa");
              return;
            }
            throw new Error("Gagal mengambil data skor");
          }

          const data = await response.json();
          setScores(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchScores();
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login-siswa");
    }
  }, [navigate]);

  if (loading) return <div className="p-6 text-center">Memuat data...</div>;
  if (error) return <div className="p-6 text-center text-red-700">Error: {error}</div>;
  if (!siswa || !scores) return <div className="p-6 text-center">Data tidak ditemukan</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-5xl p-6 mx-auto">
        {/* Judul Halaman */}
        <div className="p-4 bg-gradient-to-r from-[#255F38] to-[#2E8B57] mb-6 text-white font-bold text-lg text-center rounded-lg shadow-lg">
          INFORMASI SISWA
        </div>

        {/* Profil Siswa */}
        <div className="p-6 mb-6 border border-green-200 rounded-lg shadow-md bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-200 rounded-full">
              <UserCircle size={80} className="text-[#255F38] opacity-70" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#255F38] mb-3">Profil Siswa</h2>
              <div className="space-y-2">
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Nama:</span> {siswa.fullName}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">NIS:</span> {siswa.nis}
                </p>
                <p className="text-base text-gray-700">
                  <span className="font-semibold">Kelas:</span> {siswa.class}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nilai Kuis dan Evaluasi Akhir */}
        <div className="p-6 border border-green-200 rounded-lg shadow-md bg-green-50">
          <h2 className="text-xl font-bold text-[#255F38] mb-4">Hasil Penilaian</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Kuis 1: Pencarian Data */}
            <div className="p-4 bg-white border border-green-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Pencarian Data (Kuis 1)</h3>
              <p className="mt-2 text-xl font-bold text-gray-800">
                Nilai: <span className={scores.kuis1 >= (scores.kkm?.kuis1 || 75) ? "text-green-600" : "text-red-600"}>{scores.kuis1 || "Belum tersedia"}</span>
              </p>
              <p className="text-sm text-gray-500">KKM: {scores.kkm?.kuis1 || 75}</p>
            </div>

            {/* Kuis 2: Visualisasi Data */}
            <div className="p-4 bg-white border border-green-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Visualisasi Data (Kuis 2)</h3>
              <p className="mt-2 text-xl font-bold text-gray-800">
                Nilai: <span className={scores.kuis2 >= (scores.kkm?.kuis2 || 75) ? "text-green-600" : "text-red-600"}>{scores.kuis2 || "Belum tersedia"}</span>
              </p>
              <p className="text-sm text-gray-500">KKM: {scores.kkm?.kuis2 || 75}</p>
            </div>

            {/* Kuis 3: Peringkasan Data */}
            <div className="p-4 bg-white border border-green-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Peringkasan Data (Kuis 3)</h3>
              <p className="mt-2 text-xl font-bold text-gray-800">
                Nilai: <span className={scores.kuis3 >= (scores.kkm?.kuis3 || 75) ? "text-green-600" : "text-red-600"}>{scores.kuis3 || "Belum tersedia"}</span>
              </p>
              <p className="text-sm text-gray-500">KKM: {scores.kkm?.kuis3 || 75}</p>
            </div>

            {/* Kuis 4: Pengelolaan Data */}
            <div className="p-4 bg-white border border-green-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Pengelolaan Data (Kuis 4)</h3>
              <p className="mt-2 text-xl font-bold text-gray-800">
                Nilai: <span className={scores.kuis4 >= (scores.kkm?.kuis4 || 75) ? "text-green-600" : "text-red-600"}>{scores.kuis4 || "Belum tersedia"}</span>
              </p>
              <p className="text-sm text-gray-500">KKM: {scores.kkm?.kuis4 || 75}</p>
            </div>

            {/* Evaluasi Akhir */}
            <div className="p-4 bg-white border border-green-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700">Evaluasi Akhir</h3>
              <p className="mt-2 text-xl font-bold text-gray-800">
                Nilai: <span className={scores.evaluasi_akhir >= 75 ? "text-green-600" : "text-red-600"}>{scores.evaluasi_akhir || "Belum tersedia"}</span>
              </p>
              <p className="text-sm text-gray-500">KKM: 75</p>
            </div>
          </div>
        </div>

        {/* Tombol Kembali */}
        <div className="flex justify-end mt-6">
          <button
            onClick={() => navigate("/home")}
            className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md cursor-pointer hover:bg-gray-600"
          >
            Kembali
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className=" p-4 text-center text-[#1D6F35] w-full">
        <span className="font-bold">AnalyticsLearn</span> © 2025 PilkomMedia
      </footer>
    </div>
  );
};

export default DashboardSiswa;