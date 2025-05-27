import React from "react";
import Layout from "../../components/admin/Layout";

const DataEvaluasi = () => {
  // Dummy data to simulate database fetch
  const dummyData = [
    {
      no: 1,
      bab: "Kuis 1",
      soal: "Apa ibu kota Indonesia?",
      a: "Jakarta",
      b: "Bandung",
      c: "Surabaya",
      d: "Medan",
      e: "Makassar",
      jawaban: "A",
    },
    {
      no: 2,
      bab: "Kuis 1",
      soal: "Coba",
      a: "Jakarta",
      b: "Bandung",
      c: "Surabaya",
      d: "Medan",
      e: "Makassar",
      jawaban: "A",
    },
    {
      no: 3,
      bab: "Kuis 1",
      soal: "Coba",
      a: "a",
      b: "a1a",
      c: "a",
      d: "a",
      e: "a",
      jawaban: "D",
    },
  ];

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        Data Evaluasi
      </div>

      <section className="p-6 mt-1 mb-6 text-center bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl font-bold text-[#255F38] mb-4">
          Data Evaluasi
        </h2>
        <div className="flex items-center justify-between mb-4 space-x-4">
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
              className="w-64 p-2 border rounded"
            />
            <button className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer">
              Tambah Soal
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-700 border-collapse">
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
                  <td className="flex justify-center p-1 space-x-2 border">
                    <button className="px-2 py-1 text-white bg-green-500 rounded cursor-pointer">
                      Perbarui
                    </button>
                    <button className="px-2 py-1 text-white bg-red-500 rounded cursor-pointer">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">
            «
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">
            1
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded cursor-pointer">
            »
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default DataEvaluasi;
