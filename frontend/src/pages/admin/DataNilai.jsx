import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/admin/Layout";
import jsPDF from "jspdf";
import { autoTable } from "jspdf-autotable";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";

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
      console.log("Mengambil data nilai dengan token:", token);
      const response = await axios.get(
        "http://localhost:5000/api/students/scores",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Respon data nilai:", response.data);
      setScores(response.data || []);
      setError("");
    } catch (err) {
      console.error("Error mengambil data nilai:", err);
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
      console.log("Mengambil daftar kelas dengan token:", token);
      const response = await axios.get(
        "http://localhost:5000/api/students/classes",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Respon daftar kelas:", response.data);
      setClasses(["Semua kelas", ...response.data]);
      setError("");
    } catch (err) {
      console.error("Error mengambil daftar kelas:", err);
      setError(
        err.response?.data?.message ||
          "Gagal mengambil daftar kelas. Pastikan server backend berjalan di http://localhost:5000, Anda login sebagai guru, dan tabel students berisi data."
      );
      setClasses(["Semua kelas"]);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Pengguna saat ini:", user);
    if (!user || user.role !== "teacher") {
      console.log(
        "Mengalihkan ke /masuk karena pengguna atau peran tidak valid"
      );
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
      console.log(
        "Memperbarui nilai untuk NIS:",
        selectedScore.nis,
        updatedData
      );

      const response = await axios.post(
        `http://localhost:5000/api/students/scores/${selectedScore.nis}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Respon pembaruan nilai:", response.data);

      Swal.fire({
        title: "Berhasil",
        text: "Nilai siswa berhasil diperbarui.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });

      fetchScores();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error pembaruan nilai:", err);
      Swal.fire({
        title: "Gagal",
        text: err.response?.data?.message || "Gagal memperbarui nilai.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
    }
  };

  // Ekspor ke PDF
  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.text("Data Nilai Siswa", 14, 20);
    doc.text(`Kelas: ${classFilter}`, 14, 30);

    const tableColumn = [
      "NIS",
      "Nama",
      "Kelas",
      "Latihan 1",
      "Latihan 2",
      "Latihan 3",
      "Latihan 4",
      "Kuis 1",
      "Kuis 2",
      "Kuis 3",
      "Kuis 4",
      "Evaluasi Akhir",
    ];
    const tableRows = filteredScores.map((score) => [
      score.nis,
      score.full_name,
      score.class?.toUpperCase() ?? "-",
      score.latihan1 ?? "-",
      score.latihan2 ?? "-",
      score.latihan3 ?? "-",
      score.latihan4 ?? "-",
      score.kuis1 ?? "-",
      score.kuis2 ?? "-",
      score.kuis3 ?? "-",
      score.kuis4 ?? "-",
      score.evaluasi_akhir ?? "-",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: "grid",
      headStyles: { fillColor: [37, 95, 56], textColor: [255, 255, 255] },
      styles: { fontSize: 8, cellPadding: 2 },
    });

    doc.save(`Data_Nilai_${classFilter}.pdf`);

    Swal.fire({
      title: "Berhasil",
      text: `Data nilai untuk kelas ${classFilter} telah diekspor ke PDF.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#255F38",
    });
  };

  // Ekspor ke Excel
  const exportToExcel = () => {
    const worksheetData = filteredScores.map((score) => ({
      NIS: score.nis,
      Nama: score.full_name,
      Kelas: score.class?.toUpperCase() ?? "-",
      "Latihan 1": score.latihan1 ?? "-",
      "Latihan 2": score.latihan2 ?? "-",
      "Latihan 3": score.latihan3 ?? "-",
      "Latihan 4": score.latihan4 ?? "-",
      "Kuis 1": score.kuis1 ?? "-",
      "Kuis 2": score.kuis2 ?? "-",
      "Kuis 3": score.kuis3 ?? "-",
      "Kuis 4": score.kuis4 ?? "-",
      "Evaluasi Akhir": score.evaluasi_akhir ?? "-",
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data Nilai");
    XLSX.writeFile(workbook, `Data_Nilai_${classFilter}.xlsx`);

    Swal.fire({
      title: "Berhasil",
      text: `Data nilai untuk kelas ${classFilter} telah diekspor ke Excel.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#255F38",
    });
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
      <section className="p-4 mt-6 mb-6 text-center bg-gray-100 rounded shadow-md sm:p-6">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">
          Data Nilai
        </h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <div className="flex items-center justify-between mb-6">
          <select
            className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
            value={classFilter}
            onChange={(e) => {
              setClassFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            {classes.map((cls, index) => (
              <option key={index} value={cls} className="text-sm bg-white">
                {cls === "Semua kelas" ? cls : cls.toUpperCase()}
              </option>
            ))}
          </select>
          <div className="space-x-2">
            <button
              onClick={exportToPDF}
              className="px-3 py-1 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
            >
              Ekspor PDF
            </button>
            <button
              onClick={exportToExcel}
              className="px-3 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
            >
              Ekspor Excel
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 border-collapse table-auto">
            <thead className="text-white bg-[#255f38]">
              <tr>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  NIS
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Nama
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Kelas
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Latihan 1
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Latihan 2
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Latihan 3
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Latihan 4
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Kuis 1 (KKM: {scores[0]?.kkm?.kuis1 ?? 75})
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Kuis 2 (KKM: {scores[0]?.kkm?.kuis2 ?? 75})
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Kuis 3 (KKM: {scores[0]?.kkm?.kuis3 ?? 75})
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Kuis 4 (KKM: {scores[0]?.kkm?.kuis4 ?? 75})
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Evaluasi Akhir
                </th>
                <th className="px-2 py-2 text-sm text-center border-b-2 border-gray-300">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentScores.map((score) => (
                <tr
                  key={score.nis}
                  className="transition-colors duration-200 hover:bg-gray-100 even:bg-gray-50"
                >
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.nis}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.full_name}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.class?.toUpperCase() ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.latihan1 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.latihan2 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.latihan3 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.latihan4 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.kuis1 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.kuis2 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.kuis3 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.kuis4 ?? "-"}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {score.evaluasi_akhir ?? "-"}
                  </td>
                  <td className="flex justify-center p-2 space-x-2 border-b border-gray-200">
                    <button
                      onClick={() => {
                        console.log("Membuka modal untuk nilai:", score);
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
                      className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
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
          <p className="mt-4 text-sm text-gray-500">
            Tidak ada data nilai yang ditemukan untuk filter ini. Silakan
            tambahkan skor untuk siswa.
          </p>
        )}

        {/* Kontrol Pagination */}
        {filteredScores.length > 0 && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 disabled:opacity-50"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg text-sm cursor-pointer ${
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
              className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </section>

      {isModalOpen && selectedScore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
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
            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={() => {
                  console.log("Menutup modal");
                  setIsModalOpen(false);
                }}
                className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={handleUpdateScore}
                className="px-3 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
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
