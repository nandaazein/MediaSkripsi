import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function PetunjukPengerjaanEvaluasi() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch evaluation attempt history for Evaluasi Akhir only
  useEffect(() => {
    const fetchEvaluationHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Silakan login kembali.");
        }

        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.nis) {
          throw new Error("Data pengguna tidak ditemukan.");
        }

        // Fetch scores for the current student
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${
            user.nis
          }`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const scores = response.data;
        const kkm = scores.kkm || { evaluasi_akhir: 75 }; // Default KKM 75 untuk Evaluasi Akhir

        // Construct history array for Evaluasi Akhir only
        const historyData = [];

        // Add Evaluasi Akhir attempts only
        if (
          scores.evaluasi_akhir !== undefined &&
          scores.evaluasi_akhir !== null
        ) {
          historyData.push({
            date: scores.updated_at || scores.created_at,
            percentage: `${scores.evaluasi_akhir}%`,
            status:
              scores.evaluasi_akhir >= kkm.evaluasi_akhir
                ? "Lulus"
                : "Tidak Lulus",
          });
        }

        // Sort by date (newest first)
        historyData.sort((a, b) => new Date(b.date) - new Date(a.date));

        setHistory(historyData);
        setError("");
      } catch (err) {
        console.error("Error fetching evaluation history:", err);
        setError(
          err.response?.data?.message ||
            "Gagal memuat riwayat evaluasi. Pastikan Anda sudah login."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvaluationHistory();
  }, []);

  return (
    <Layout>
      <div className="flex items-start justify-center flex-1 p-6 bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#255f38] mb-2">
            EVALUASI AKHIR - PENGELOLAAN DATA
          </h1>
          <div className="p-6 text-left bg-gray-100 rounded-lg">
            <p className="mb-4 text-gray-600">
              Evaluasi ini bertujuan untuk menguji pengetahuan Anda tentang
              materi Pengelolaan Data dengan teknik Sorting dan Filtering dengan
              ketentuan sebagai berikut:
            </p>
            <ul className="ml-6 space-y-2 text-gray-600 list-disc list-outside">
              <li>
                Terdapat 20 soal pilihan ganda pada evaluasi ini. Untuk memulai,
                tekan tombol "MULAI".
              </li>
              <li>Waktu pengerjaan evaluasi selama 40 menit.</li>
              <li>
                Jika nilai belum mencapai KKM, maka evaluasi harus diulang.
                Namun jika nilai sudah mencapai atau melebihi KKM, peserta didik
                tidak perlu mengerjakan evaluasi lagi.
              </li>
              <li>Jika semua soal selesai, klik tombol "Selesai".</li>
            </ul>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => (window.location.href = "/kuis-evaluasi")}
              className="bg-[#255f38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
            >
              Mulai
            </button>
          </div>

          {/* History Table for Evaluasi Akhir */}
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-md shadow-md">
            <div className="px-4 py-2 border-b border-gray-300">
              <h2 className="font-semibold text-gray-900">
                Riwayat Evaluasi Akhir
              </h2>
            </div>
            {error && <p className="px-4 py-2 text-sm text-red-500">{error}</p>}
            {isLoading ? (
              <p className="px-4 py-2 text-sm text-gray-600">
                Memuat riwayat...
              </p>
            ) : history.length === 0 ? (
              <p className="px-4 py-2 text-sm text-gray-600">
                Belum ada riwayat pengerjaan Evaluasi Akhir.
              </p>
            ) : (
              <table className="w-full text-left text-gray-900">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 font-semibold">Tanggal</th>
                    <th className="px-4 py-3 font-semibold">Persentase</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((attempt, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-4 py-3 text-sm">
                        {new Date(attempt.date).toLocaleString("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        {attempt.percentage}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span
                          className={`inline-block text-xs font-semibold px-2 py-1 rounded ${
                            attempt.status === "Lulus"
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-700"
                          }`}
                        >
                          {attempt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
