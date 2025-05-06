import React from "react";
import Layout from "../../components/Admin/Layout";

const DataNilai = () => {
  // Dummy data to simulate database fetch
  const dummyData = [
    { nis: "1234", nama: "SISWA 1", kelas: "10A", latihan1: 70, latihan2: 90, latihan3: "-", latihan4: "-", kuis1: 20, kuis2: "-", kuis3: 0, kuis4: 10, evaluasiAkhir: 5 },
    { nis: "12345", nama: "SISWA 2", kelas: "10B", latihan1: 70, latihan2: 80, latihan3: 50, latihan4: 90, kuis1: 100, kuis2: 50, kuis3: 90, kuis4: 100, evaluasiAkhir: 100 },
    { nis: "SISWA2", nama: "SISWA 2", kelas: "10C", latihan1: "-", latihan2: "-", latihan3: "-", latihan4: "-", kuis1: "-", kuis2: "-", kuis3: "-", kuis4: "-", evaluasiAkhir: "-" },
  ];

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        Daftar Nilai Siswa
      </div>

      <section className="bg-gray-100 p-6 rounded shadow-md mt-6 mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#255F38] mb-4">Daftar Nilai Siswa</h2>
        <div className="flex justify-between mb-4 items-center space-x-4">
          <div className="flex items-center space-x-4">
            <select className="p-2 border rounded" defaultValue="20 data">
              <option value="20 data">Menampilkan 20 data</option>
              <option value="50 data">Menampilkan 50 data</option>
              <option value="100 data">Menampilkan 100 data</option>
            </select>
            <select className="p-2 border rounded" defaultValue="Semua kelas">
              <option value="Semua kelas">Semua kelas</option>
              <option value="Kelas A">Kelas A</option>
              <option value="Kelas B">Kelas B</option>
              <option value="Kelas C">Kelas C</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari nama atau kelas..."
              className="p-2 border rounded w-64"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-gray-700">
            <thead>
              <tr>
                <th className="p-1 border">NIS</th>
                <th className="p-1 border">Nama</th>
                <th className="p-1 border">Kelas</th>
                <th className="p-1 border">Latihan 1</th>
                <th className="p-1 border">Latihan 2</th>
                <th className="p-1 border">Latihan 3</th>
                <th className="p-1 border">Latihan 4</th>
                <th className="p-1 border">Kuis 1</th>
                <th className="p-1 border">Kuis 2</th>
                <th className="p-1 border">Kuis 3</th>
                <th className="p-1 border">Kuis 4</th>
                <th className="p-1 border">Evaluasi Akhir</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((student, index) => (
                <tr key={index} className="border">
                  <td className="p-1 border">{student.nis}</td>
                  <td className="p-1 border">{student.nama}</td>
                  <td className="p-1 border">{student.kelas}</td>
                  <td className="p-1 border">{student.latihan1}</td>
                  <td className="p-1 border">{student.latihan2}</td>
                  <td className="p-1 border">{student.latihan3}</td>
                  <td className="p-1 border">{student.latihan4}</td>
                  <td className="p-1 border">{student.kuis1}</td>
                  <td className="p-1 border">{student.kuis2}</td>
                  <td className="p-1 border">{student.kuis3}</td>
                  <td className="p-1 border">{student.kuis4}</td>
                  <td className="p-1 border">{student.evaluasiAkhir}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">«</button>
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">1</button>
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">»</button>
        </div>
      </section>
    </Layout>
  );
};

export default DataNilai;