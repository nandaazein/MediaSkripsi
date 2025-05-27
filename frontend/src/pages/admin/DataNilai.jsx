import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/admin/Layout";

const DataNilai = () => {
  const [scores, setScores] = useState([]);
  const [classes, setClasses] = useState([]);
  const [classFilter, setClassFilter] = useState("Semua kelas");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScore, setSelectedScore] = useState(null);
  const [formData, setFormData] = useState({
    latihan1: "",
    latihan2: "",
    latihan3: "",
    latihan4: "",
    kuis1: "",
    kuis2: "",
    kuis3: "",
    kuis4: "",
    evaluasi_akhir: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const scoresPerPage = 10;

  const fetchScores = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }
      console.log("Fetching scores with token:", token);
      const response = await axios.get(
        "http://localhost:5000/api/students/scores",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Scores response:", response.data);
      setScores(response.data || []);
      setError("");
    } catch (err) {
      console.error("Fetch scores error:", err);
      setError(
        err.response?.data?.message ||
          "Gagal mengambil data nilai. Pastikan server backend berjalan di http://localhost:5000 dan Anda login sebagai guru."
      );
      setScores([]);
    }
  };

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }
      console.log("Fetching classes with token:", token);
      const response = await axios.get(
        "http://localhost:5000/api/students/classes",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Classes response:", response.data);
      setClasses(["Semua kelas", ...response.data]);
      setError("");
    } catch (err) {
      console.error("Fetch classes error:", err);
      setError(
        err.response?.data?.message ||
          "Gagal mengambil daftar kelas. Pastikan server backend berjalan di http://localhost:5000, Anda login sebagai guru, dan tabel students berisi data."
      );
      setClasses(["Semua kelas"]);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Current user:", user);
    if (!user || user.role !== "teacher") {
      console.log("Redirecting to /masuk due to invalid user or role");
      window.location.href = "/masuk";
    } else {
      fetchScores();
      fetchClasses();
    }
  }, []);

  const handleUpdateScore = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan. Silakan login kembali.");
      }
      const updatedData = {
        latihan1: formData.latihan1 ? parseFloat(formData.latihan1) : null,
        latihan2: formData.latihan2 ? parseFloat(formData.latihan2) : null,
        latihan3: formData.latihan3 ? parseFloat(formData.latihan3) : null,
        latihan4: formData.latihan4 ? parseFloat(formData.latihan4) : null,
        kuis1: formData.kuis1 ? parseFloat(formData.kuis1) : null,
        kuis2: formData.kuis2 ? parseFloat(formData.kuis2) : null,
        kuis3: formData.kuis3 ? parseFloat(formData.kuis3) : null,
        kuis4: formData.kuis4 ? parseFloat(formData.kuis4) : null,
        evaluasi_akhir: formData.evaluasi_akhir
          ? parseFloat(formData.evaluasi_akhir)
          : null,
      };
      console.log("Updating score for NIS:", selectedScore.nis, updatedData);

      const response = await axios.post(
        `http://localhost:5000/api/students/scores/${selectedScore.nis}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Update score response:", response.data);
      fetchScores();
      setIsModalOpen(false);
      alert("Nilai siswa berhasil diperbarui");
    } catch (err) {
      console.error("Update score error:", err);
      alert(err.response?.data?.message || "Gagal memperbarui nilai");
    }
  };

  // Filter dan pagination
  const filteredScores = scores.filter(
    (score) => classFilter === "Semua kelas" || score.class === classFilter
  );
  const totalPages = Math.ceil(filteredScores.length / scoresPerPage);
  const indexOfLastScore = currentPage * scoresPerPage;
  const indexOfFirstScore = indexOfLastScore - scoresPerPage;
  const currentScores = filteredScores.slice(
    indexOfFirstScore,
    indexOfLastScore
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="bg-gray-100 p-4 sm:p-6 rounded shadow-md mt-6 mb-6 text-center">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">
          Data Nilai
        </h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="flex justify-start mb-6 items-center">
          <select
            className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
            value={classFilter}
            onChange={(e) => {
              setClassFilter(e.target.value);
              setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
            }}
          >
            {classes.map((cls, index) => (
              <option key={index} value={cls} className="bg-white text-sm">
                {cls === "Semua kelas" ? cls : cls.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-700">
            <thead className="bg-[#255F38] text-white">
              <tr>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  NIS
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Nama
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Kelas
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Latihan 1
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Latihan 2
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Latihan 3
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Latihan 4
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Kuis 1 (KKM: {scores[0]?.kkm?.kuis1 ?? 75})
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Kuis 2 (KKM: {scores[0]?.kkm?.kuis2 ?? 75})
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Kuis 3 (KKM: {scores[0]?.kkm?.kuis3 ?? 75})
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Kuis 4 (KKM: {scores[0]?.kkm?.kuis4 ?? 75})
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Evaluasi Akhir
                </th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentScores.map((score) => (
                <tr
                  key={score.nis}
                  className="hover:bg-gray-100 transition-colors duration-200 even:bg-gray-50"
                >
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.nis}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.full_name}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.class?.toUpperCase() ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.latihan1 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.latihan2 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.latihan3 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.latihan4 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.kuis1 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.kuis2 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.kuis3 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.kuis4 ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {score.evaluasi_akhir ?? "-"}
                  </td>
                  <td className="p-2 border-b border-gray-200 flex space-x-2 justify-center">
                    <button
                      onClick={() => {
                        console.log("Opening modal for score:", score);
                        setSelectedScore(score);
                        setFormData({
                          latihan1: score.latihan1?.toString() || "",
                          latihan2: score.latihan2?.toString() || "",
                          latihan3: score.latihan3?.toString() || "",
                          latihan4: score.latihan4?.toString() || "",
                          kuis1: score.kuis1?.toString() || "",
                          kuis2: score.kuis2?.toString() || "",
                          kuis3: score.kuis3?.toString() || "",
                          kuis4: score.kuis4?.toString() || "",
                          evaluasi_akhir:
                            score.evaluasi_akhir?.toString() || "",
                        });
                        setIsModalOpen(true);
                      }}
                      className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
                    >
                      Perbarui
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentScores.length === 0 && !error && (
          <p className="text-gray-500 mt-4 text-sm">
            Tidak ada data nilai yang ditemukan untuk filter ini. Silakan
            tambahkan skor untuk siswa.
          </p>
        )}

        {/* Pagination Controls */}
        {filteredScores.length > 0 && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm disabled:opacity-50"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  currentPage === page
                    ? "bg-[#255F38] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors duration-200`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </section>

      {isModalOpen && selectedScore && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-base font-medium text-[#255F38] mb-4">
              Edit Nilai Siswa
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                value={formData.latihan1}
                onChange={(e) =>
                  setFormData({ ...formData, latihan1: e.target.value })
                }
                placeholder="Latihan 1"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.latihan2}
                onChange={(e) =>
                  setFormData({ ...formData, latihan2: e.target.value })
                }
                placeholder="Latihan 2"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.latihan3}
                onChange={(e) =>
                  setFormData({ ...formData, latihan3: e.target.value })
                }
                placeholder="Latihan 3"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.latihan4}
                onChange={(e) =>
                  setFormData({ ...formData, latihan4: e.target.value })
                }
                placeholder="Latihan 4"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.kuis1}
                onChange={(e) =>
                  setFormData({ ...formData, kuis1: e.target.value })
                }
                placeholder="Kuis 1"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.kuis2}
                onChange={(e) =>
                  setFormData({ ...formData, kuis2: e.target.value })
                }
                placeholder="Kuis 2"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.kuis3}
                onChange={(e) =>
                  setFormData({ ...formData, kuis3: e.target.value })
                }
                placeholder="Kuis 3"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.kuis4}
                onChange={(e) =>
                  setFormData({ ...formData, kuis4: e.target.value })
                }
                placeholder="Kuis 4"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="number"
                value={formData.evaluasi_akhir}
                onChange={(e) =>
                  setFormData({ ...formData, evaluasi_akhir: e.target.value })
                }
                placeholder="Evaluasi Akhir"
                className="col-span-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => {
                  console.log("Closing modal");
                  setIsModalOpen(false);
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleUpdateScore}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DataNilai;
