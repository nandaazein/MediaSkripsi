import { useState } from "react";
import Layout from "../../components/Layout";

const AktivitasLookup = () => {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [formulaFeedback, setFormulaFeedback] = useState("");
  const [stepOrder, setStepOrder] = useState("");
  const [stepFeedback, setStepFeedback] = useState("");

  const correctFormula = "=HLOOKUP(E3;$A$10:$D$11;2;FALSE)";
  const correctOrder = "4,1,3,2";

  const formulas = [
    "=VLOOKUP(E3;$A$10:$D$11;1;TRUE)",
    "=VLOOKUP(E3;$A$10:$D$11;1;FALSE)",
    "=HLOOKUP(E3;$A$10:$D$11;2;TRUE)",
    "=HLOOKUP(E3;$A$10:$D$11;2;FALSE)"
  ];

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFormula(e.dataTransfer.getData("text/plain"));
    setFormulaFeedback("");
  };

  const checkFormula = () => {
    setFormulaFeedback(
      selectedFormula === correctFormula
        ? "✅ Jawaban benar!"
        : "❌ Jawaban salah. Coba lagi!"
    );
  };

  const checkStepOrder = () => {
    const trimmedOrder = stepOrder.trim();
    const isValidInput = /^\d(,\d)*$/.test(trimmedOrder);

    if (!isValidInput) {
      setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
      return;
    }

    setStepFeedback(
      trimmedOrder === correctOrder
        ? "✅ Jawaban benar!"
        : "❌ Jawaban salah. Coba lagi!"
    );
  };

  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
        Aktivitas Siswa
      </h1>

      {/* Aktivitas 1: Pilih Formula yang Benar */}
      <p className="text-gray-700 mb-4">
        1. Cocokkan formula yang tepat untuk mencari nilai Tunjangan berdasarkan data pada tabel.
      </p>
      <div className="flex justify-center">
        <iframe
          width="80%"
          height="400"
          className="border border-gray-300"
          frameBorder="0"
          scrolling="no"
          src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed"
        ></iframe>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {formulas.map((formula, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", formula)}
            className="p-2 bg-green-100 border border-green-500 rounded cursor-pointer hover:bg-green-200 text-center"
          >
            {formula}
          </div>
        ))}
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-80 h-16 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-2 mt-4 text-center"
      >
        {selectedFormula || <span className="text-gray-400">Drop formula here</span>}
      </div>
      <button
        onClick={checkFormula}
        className="mt-4 px-4 py-2 bg-[#255F38] text-white rounded-md hover:bg-green-700 transition duration-300"
      >
        Periksa
      </button>
      {formulaFeedback && <p className="mt-2 text-lg font-semibold text-center">{formulaFeedback}</p>}

      {/* Aktivitas 2: Urutkan Langkah Lookup */}
      <p className="text-gray-700 mt-12 mb-4">
        2. Urutkan langkah-langkah berikut untuk menggunakan fungsi Lookup dengan benar.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-400 text-gray-800">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-gray-400 p-2">No</th>
              <th className="border border-gray-400 p-2">Langkah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 text-center">1</td>
              <td className="border border-gray-400 p-2">Tentukan tabel data yang berisi nilai referensi (<b>table array</b>).</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">2</td>
              <td className="border border-gray-400 p-2">Tentukan apakah pencarian dilakukan secara tepat (<b>FALSE</b>) atau mendekati (<b>TRUE</b>).</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">Tentukan nomor kolom yang berisi nilai yang dicari.</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">4</td>
              <td className="border border-gray-400 p-2">Tentukan nilai pencarian (<b>lookup value</b>).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <input
        type="text"
        value={stepOrder}
        onChange={(e) => setStepOrder(e.target.value)}
        className="border border-gray-500 p-2 rounded w-40 mt-2 text-center"
        placeholder="Masukkan urutan"
      />
      <button
        onClick={checkStepOrder}
        className="ml-4 px-4 py-2 bg-[#255F38] text-white rounded-md hover:bg-green-700 transition duration-300"
      >
        Periksa
      </button>
      {stepFeedback && <p className="mt-2 text-lg font-semibold text-center">{stepFeedback}</p>}


       {/* Tombol Navigasi */}
       <div className="flex justify-between mt-8 px-4">
        <a href="/contoh-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/berlatih-lookup" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya  →
        </a>
      </div>
    </Layout>
  );
};

export default AktivitasLookup;
