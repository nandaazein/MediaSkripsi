import React from "react";
import Layout from "../../components/Admin/Layout";

const DataEvaluasi = () => {
  // Dummy data to simulate database fetch
  const dummyData = [
    { no: 1, bab: "Kuis 1", soal: "Apa ibu kota Indonesia?", a: "Jakarta", b: "Bandung", c: "Surabaya", d: "Medan", e: "Makassar", jawaban: "A" },
    { no: 2, bab: "Kuis 1", soal: "Coba", a: "Jakarta", b: "Bandung", c: "Surabaya", d: "Medan", e: "Makassar", jawaban: "A" },
    { no: 3, bab: "Kuis 1", soal: "Coba", a: "a", b: "a1a", c: "a", d: "a", e: "a", jawaban: "D" },
  ];

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        Data Evaluasi
      </div>

      <section className="bg-gray-100 p-6 rounded shadow-md mt-1 mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#255F38] mb-4">Data Evaluasi</h2>
        <div className="flex justify-between mb-4 items-center space-x-4">
          <div className="flex items-center space-x-4">
            <select className="p-2 border rounded" defaultValue="5 data">
              <option value="5 data">Menampilkan 5 data</option>
              <option value="10 data">Menampilkan 10 data</option>
              <option value="20 data">Menampilkan 20 data</option>
            </select>
            <select className="p-2 border rounded" defaultValue="Kuis 1">
              <option value="Kuis 1">Kuis 1</option>
              <option value="Kuis 2">Kuis 2</option>
              <option value="Kuis 3">Kuis 3</option>
              <option value="Kuis 4">Kuis 4</option>
              <option value="Evaluasi Akhir">Evaluasi Akhir</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari soal..."
              className="p-2 border rounded w-64"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
              Tambah Soal
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-gray-700">
            <thead>
              <tr>
                <th className="p-1 border">No</th>
                <th className="p-1 border">Bab</th>
                <th className="p-1 border">Soal</th>
                <th className="p-1 border">A</th>
                <th className="p-1 border">B</th>
                <th className="p-1 border">C</th>
                <th className="p-1 border">D</th>
                <th className="p-1 border">E</th>
                <th className="p-1 border">Jawaban</th>
                <th className="p-1 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-1 border">{item.no}</td>
                  <td className="p-1 border">{item.bab}</td>
                  <td className="p-1 border">{item.soal}</td>
                  <td className="p-1 border">{item.a}</td>
                  <td className="p-1 border">{item.b}</td>
                  <td className="p-1 border">{item.c}</td>
                  <td className="p-1 border">{item.d}</td>
                  <td className="p-1 border">{item.e}</td>
                  <td className="p-1 border">{item.jawaban}</td>
                  <td className="p-1 flex space-x-2 justify-center border">
                    <button className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer">Perbarui</button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer">Hapus</button>
                  </td>
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

export default DataEvaluasi;