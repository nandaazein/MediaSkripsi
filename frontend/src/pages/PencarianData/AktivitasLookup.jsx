import { useState } from "react";
import Layout from "../../components/Layout";

const AktivitasPencarian = () => {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [formulaFeedback, setFormulaFeedback] = useState("");
  const [stepOrder, setStepOrder] = useState("");
  const [stepFeedback, setStepFeedback] = useState("");
  const [indexFormula, setIndexFormula] = useState("");
  const [matchFormula, setMatchFormula] = useState("");
  const [chooseFormula, setChooseFormula] = useState("");

  const [isFormulaCorrect, setIsFormulaCorrect] = useState(false);
  const [isOrderCorrect, setIsOrderCorrect] = useState(false);
  const [isIndexCorrect, setIsIndexCorrect] = useState(null);
  const [isMatchCorrect, setIsMatchCorrect] = useState(null);
  const [isChooseCorrect, setIsChooseCorrect] = useState(null);

  const correctFormula = "=HLOOKUP(E3;$A$10:$D$11;2;FALSE)";
  const correctOrder = "4,1,3,2";
  const correctIndex = "=INDEX(A2:C2;2;3)";
  const correctMatch = "=MATCH(92;B1:B2;0)";
  const correctChoose = "=CHOOSE(2;\"Ali\";\"Siti\";\"Budi\")";

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFormula(e.dataTransfer.getData("text/plain"));
    setFormulaFeedback("");
    setIsFormulaCorrect(false);
  };

  const checkFormula = () => {
    const isCorrect = selectedFormula === correctFormula;
    setFormulaFeedback(isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
    setIsFormulaCorrect(isCorrect);
  };

  const checkStepOrder = () => {
    const trimmedOrder = stepOrder.trim();
    const isValid = /^\d(,\d)*$/.test(trimmedOrder);
    if (!isValid) {
      setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
      setIsOrderCorrect(false);
      return;
    }
    const isCorrect = trimmedOrder === correctOrder;
    setStepFeedback(isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
    setIsOrderCorrect(isCorrect);
  };

  const clearInputsAndFeedback = (setInput, setFeedback, setCorrect) => {
    setInput(""); // Menghapus input yang dimasukkan
    setFeedback(""); // Menghapus feedback
    setCorrect(null); // Mengatur status soal ke null (belum terjawab)
  };

  const checkIndex = () => {
    const trimmed = indexFormula.trim().toLowerCase(); // Menggunakan toLowerCase
    const isCorrect = trimmed === correctIndex.toLowerCase(); // Menggunakan toLowerCase
    setIsIndexCorrect(isCorrect);
  };

  const checkMatch = () => {
    const trimmed = matchFormula.trim().toLowerCase(); // Menggunakan toLowerCase
    const isCorrect = trimmed === correctMatch.toLowerCase(); // Menggunakan toLowerCase
    setIsMatchCorrect(isCorrect);
  };

  const checkChoose = () => {
    const trimmed = chooseFormula.trim().toLowerCase(); // Menggunakan toLowerCase
    const isCorrect = trimmed === correctChoose.toLowerCase(); // Menggunakan toLowerCase
    setIsChooseCorrect(isCorrect);
  };

  const semuaBenar = isFormulaCorrect && isOrderCorrect && isIndexCorrect && isMatchCorrect && isChooseCorrect;

  const formulas = [
    "=VLOOKUP(E3;$A$10:$D$11;1;TRUE)",
    "=VLOOKUP(E3;$A$10:$D$11;1;FALSE)",
    "=HLOOKUP(E3;$A$10:$D$11;2;TRUE)",
    "=HLOOKUP(E3;$A$10:$D$11;2;FALSE)",
  ];

  return (
    <Layout>
      <div className="bg-white p-6">
        <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
          Aktivitas Pencarian Data
        </h1>

        {/* Soal 1 */}
        <p className="px-4 mb-2 text-gray-700 font-medium">1. Silakan seret dan jatuhkan formula HLOOKUP yang tepat di sini:</p>
        <iframe
          width="100%" height ="400" className ="border border-gray-300 mb-4"
          src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed"
        />
        <div className="grid grid-cols-2 gap-4 px-4">
          {formulas.map((f, i) => (
            <div key={i} draggable onDragStart={(e) => e.dataTransfer.setData("text/plain", f)}
              className="p-2 bg-green-100 border border-green-500 rounded hover:bg-green-200 text-center cursor-pointer">
              {f}
            </div>
          ))}
        </div>
        <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}
          className="w-80 h-16 mx-auto mt-4 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg">
          {selectedFormula || <span className="text-gray-400">Drop formula di sini</span>}
        </div>
        <div className="text-center mt-2">
          <button onClick={checkFormula} className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">
            Periksa
          </button>
          <button onClick={() => clearInputsAndFeedback(setSelectedFormula, setFormulaFeedback, setIsFormulaCorrect)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Hapus
          </button>
          {formulaFeedback && <p className="mt-2">{formulaFeedback}</p>}
        </div>

        {/* Soal 2 */}
        <p className="px-4 mt-8 text-gray-700 font-medium">
          2. Urutkan langkah-langkah penggunaan fungsi Lookup berikut ini:
        </p>
        <div className="overflow-x-auto px-4 mb-2">
          <table className="w-full border border-gray-400 text-sm text-gray-800 mt-2">
            <thead><tr className="bg-gray-200">
              <th className="border p-2">No</th><th className="border p-2">Langkah</th>
            </tr></thead>
            <tbody>
              <tr><td className="border p-2 text-center">1</td><td className="border p-2">Tentukan tabel referensi (<b>table array</b>).</td></tr>
              <tr><td className="border p-2 text-center">2</td><td className="border p-2">Tentukan tipe pencarian: tepat (<b>FALSE</b>) atau mendekati (<b>TRUE</b>).</td></tr>
              <tr><td className="border p-2 text-center">3</td><td className="border p-2">Tentukan kolom hasil pencarian.</td></tr>
              <tr><td className="border p-2 text-center">4</td><td className="border p-2">Tentukan nilai yang ingin dicari (<b>lookup value</b>).</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center px-4 mb-4">
          <input type="text" value={stepOrder} onChange={(e) => setStepOrder(e.target.value)}
            className="border p-2 w-40 rounded text-center" placeholder="Contoh: 4,1,3,2" />
          <button onClick={checkStepOrder} className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">
            Periksa
          </button>
          <button onClick={() => clearInputsAndFeedback(setStepOrder, setStepFeedback, setIsOrderCorrect)} className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Hapus
          </button>
        </div>
        {stepFeedback && <p className="text-center text-lg">{stepFeedback}</p>}

        {/* Soal 3 */}
        <p className="px-4 mt-8 text-gray-700 font-medium">
          3. Gunakan fungsi <b>INDEX</b> untuk menampilkan nilai dari baris ke-2 dan kolom ke-3 dari tabel berikut:
        </p>
        <div className="overflow-x-auto px-4 mt-2 mb-4">
          <table className="w-full border text-sm border-gray-400 text-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 w-8"></th>
                <th className="border p-2 text-center font-bold">A</th>
                <th className="border p-2 text-center font-bold">B</th>
                <th className="border p-2 text-center font-bold">C</th>
              </tr>
              <tr className="bg-gray-200">
                <th className="border p-2 text-center font-bold">No</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Matematika</th>
                <th className="border p-2">Bahasa Inggris</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border p-2 text-center font-bold">1</th>
                <td className="border p-2">Ali</td>
                <td className="border p-2">90</td>
                <td className="border p-2">88</td>
              </tr>
              <tr>
                <th className="border p-2 text-center font-bold">2</th>
                <td className="border p-2">Siti</td>
                <td className="border p-2">92</td>
                <td className="border p-2">{isIndexCorrect ? "85" : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center px-4 mb-2">
          <input type="text" value={indexFormula} onChange={(e) => setIndexFormula(e.target.value)}
            className="border p-2 rounded w-full max-w-md" placeholder="Misal: =INDEX(...)" />
          <button onClick={checkIndex} className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">
            Periksa
          </button>
          <button 
            onClick={() => clearInputsAndFeedback(setIndexFormula, setStepFeedback, setIsIndexCorrect)} 
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Hapus
          </button>
        </div>
        {isIndexCorrect !== null && (
          <p className="text-center mb-4">
            {isIndexCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!"}
          </p>
        )}

        {/* Soal 4 */}
        <p className="px-4 mt-8 text-gray-700 font-medium">
          4. Gunakan fungsi <b>MATCH</b> untuk menemukan posisi nilai 92 pada kolom Matematika berikut:
        </p>
        <div className="overflow-x-auto px-4 mt-2 mb-4">
          <table className="w-full border text-sm border-gray-400 text-gray-800">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 w-8"></th>
                <th className="border p-2 text-center font-bold">A</th>
                <th className="border p-2 text-center font-bold">B</th>
              </tr>
              <tr className="bg-gray-200">
                <th className="border p-2 text-center font-bold">No</th>
                <th className="border p-2">Nama</th>
                <th className="border p-2">Matematika</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border p-2 text-center font-bold">2</th>
                <td className="border p-2">Ali</td>
                <td className="border p-2">90</td>
              </tr>
              <tr>
                <th className="border p-2 text-center font-bold">3</th>
                <td className="border p-2">Siti</td>
                <td className="border p-2">
                  {isMatchCorrect ? "92 ✅ Posisi: 2" : "92"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center px-4 mb-2">
          <input type="text" value={matchFormula} onChange={(e) => setMatchFormula(e.target.value)}
            className="border p-2 rounded w-full max-w-md" placeholder="Misal: =MATCH(...)" />
          <button onClick={checkMatch} className=" ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">
            Periksa
          </button>
          <button 
            onClick={() => clearInputsAndFeedback(setMatchFormula, setStepFeedback, setIsMatchCorrect)} 
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Hapus
          </button>
        </div>
        {isMatchCorrect !== null && (
          <p className="text-center mb-4">
            {isMatchCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!"}
          </p>
        )}

        {/* Soal 5 */}
        <p className="px-4 mt-8 text-gray-700 font-medium">
          5. Gunakan fungsi <b>CHOOSE</b> untuk memilih siswa ke-2 dari daftar berikut: Ali, Siti, Budi.
        </p>
        <div className="flex items-center px-4 mb-2">
          <input type="text" value={chooseFormula} onChange={(e) => setChooseFormula(e.target.value)}
            className="border p-2 rounded w-full max-w-md" placeholder='Misal: =CHOOSE(...)' />
          <button onClick={checkChoose} className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">
            Periksa
          </button>
          <button 
            onClick={() => clearInputsAndFeedback(setChooseFormula, setStepFeedback, setIsChooseCorrect)} 
            className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
            Hapus
          </button>
        </div>
        {isChooseCorrect !== null && (
          <p className="text-center mb-4">
            {isChooseCorrect ? "✅ Jawaban benar! Pilihan ke-2 adalah: Siti" : "❌ Jawaban salah. Coba lagi!"}
          </p>
        )}

        {/* Tombol Lanjut */}
        <div className="flex justify-between mt-10 px-4">
          <a href="/contoh-reference" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
            ← Sebelumnya
          </a>
          <button
            disabled={!semuaBenar}
            onClick={() => window.location.href = "/berlatih-lookup"}
            className={`px-5 py-2 rounded-lg text-white ${
              semuaBenar ? "bg-[#255F38] hover:bg-[#1E4D2E]" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasPencarian;