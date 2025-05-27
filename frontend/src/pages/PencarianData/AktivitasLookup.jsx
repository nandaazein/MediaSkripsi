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
  const [indexFeedback, setIndexFeedback] = useState(""); // State baru untuk feedback soal 3
  const [matchFeedback, setMatchFeedback] = useState(""); // State baru untuk feedback soal 4
  const [chooseFeedback, setChooseFeedback] = useState(""); // State baru untuk feedback soal 5

  const [isIndexCorrect, setIsIndexCorrect] = useState(null);
  const [isMatchCorrect, setIsMatchCorrect] = useState(null);
  const [isChooseCorrect, setIsChooseCorrect] = useState(null);

  const correctFormula = "=VLOOKUP(B3;$E$2:$G$6;3;TRUE)";
  const correctOrder = "4,1,3,2";
  const correctIndex = "=INDEX(A2:D3;2;3)";
  const correctMatch = "=MATCH(92;C2:C3;0)";
  const correctChoose = "=CHOOSE(2;\"Ali\";\"Siti\";\"Budi\")";

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFormula(e.dataTransfer.getData("text/plain"));
    setFormulaFeedback("");
  };

  const checkFormula = () => {
    const isCorrect = selectedFormula === correctFormula;
    setFormulaFeedback(
      isCorrect
        ? "Jawaban benar! Formula ini mengecek status kelulusan berdasarkan nilai dengan pencarian lookup yang tepat."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  const checkStepOrder = () => {
    const trimmedOrder = stepOrder.trim();
    const isValid = /^\d(,\d)*$/.test(trimmedOrder);
    if (!isValid) {
      setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
      return;
    }
    const isCorrect = trimmedOrder === correctOrder;
    setStepFeedback(
      isCorrect
        ? "Jawaban benar! Urutan ini mencerminkan langkah logis penggunaan fungsi Lookup."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  const clearInputsAndFeedback = (setInput, setFeedback, setCorrect) => {
    setInput("");
    setFeedback("");
    setCorrect(null);
  };

  const checkIndex = () => {
    const trimmed = indexFormula.trim().toLowerCase();
    const isCorrect = trimmed === correctIndex.toLowerCase();
    setIsIndexCorrect(isCorrect);
    setIndexFeedback(
      isCorrect
        ? "Jawaban benar! Nilai 85 diambil dari baris ke-2, kolom ke-3 (Bahasa Inggris)."
        : "❌ Jawaban salah. Ayo coba lagi!"
    );
    if (isCorrect) {
      setIndexFormula("85"); // Menampilkan nilai yang benar
    }
  };

  const checkMatch = () => {
    const trimmed = matchFormula.trim().toLowerCase();
    const isCorrect = trimmed === correctMatch.toLowerCase();
    setIsMatchCorrect(isCorrect);
    setMatchFeedback(
      isCorrect
        ? "Jawaban benar! Nilai 92 ada di posisi ke-2 dalam kolom Matematika."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  const checkChoose = () => {
    const trimmed = chooseFormula.trim().toLowerCase();
    const isCorrect = trimmed === correctChoose.toLowerCase();
    setIsChooseCorrect(isCorrect);
    setChooseFeedback(
      isCorrect
        ? "Jawaban benar! Pilihan ke-2 adalah Siti dari daftar."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  const formulas = [
    "=HLOOKUP(B3;$E$2:$G$6;2;FALSE)",
    "=HLOOKUP(B3;$E$2:$G$6;3;TRUE)",
    "=VLOOKUP(B3;$E$2:$G$6;2;FALSE)",
    "=VLOOKUP(B3;$E$2:$G$6;3;TRUE)",
  ];

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        AKTIVITAS PENCARIAN DATA
      </div>

      <div className="p-6 bg-white">
        {/* Soal 1 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">1.</span>
            Seret dan jatuhkan formula HLOOKUP yang tepat ke dalam kotak di bawah ini untuk mencari status kelulusan siswa Ani berdasarkan nilainya (85), lalu seret rumus tersebut ke bawah untuk secara otomatis mengisi status kelulusan siswa lainnya sesuai dengan nilai mereka menggunakan data dari Tabel 2.
          </p>
          <iframe
            width="100%"
            height="400"
            className="border border-gray-300 mb-4 rounded-lg"
            src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed"
          />
          <div className="grid grid-cols-2 gap-4 px-4">
            {formulas.map((f, i) => (
              <div
                key={i}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", f)}
                className="p-2 bg-green-100 border border-green-500 rounded-lg text-center cursor-pointer"
              >
                {f}
              </div>
            ))}
          </div>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="w-80 h-16 mx-auto mt-4 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg"
          >
            {selectedFormula || <span className="text-gray-400">Drop formula di sini</span>}
          </div>
          <div className="text-center mt-2">
            <button
              onClick={checkFormula}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => clearInputsAndFeedback(setSelectedFormula, setFormulaFeedback, setIsIndexCorrect)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
            {formulaFeedback && (
              <p className={`text-sm mt-2 font-bold ${selectedFormula === correctFormula ? "text-green-700" : "text-red-700"}`}>
                {formulaFeedback}
              </p>
            )}
          </div>
        </div>

        {/* Soal 2 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">2.</span>
            Urutkan langkah-langkah penggunaan fungsi Lookup berikut ini:
          </p>
          <div className="overflow-x-auto px-4 mb-2">
            <table className="w-full border border-gray-400 text-sm text-gray-800 mt-2 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="border p-2 w-8"></th>
                  <th className="border p-2 text-center font-bold">A</th>
                  <th className="border p-2 text-center font-bold">B</th>
                </tr>
                <tr className="bg-[#255F38] text-white">
                  <th className="border p-2 text-center font-bold bg-gray-200 text-black">1</th>
                  <th className="border p-2 text-center font-bold">No</th>
                  <th className="border p-2">Langkah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">2</td>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2">Tentukan tabel referensi (table array).</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">3</td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2">Tentukan tipe pencarian: tepat (FALSE) atau mendekati (TRUE).</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">4</td>
                  <td className="border p-2 text-center">3</td>
                  <td className="border p-2">Tentukan kolom hasil pencarian.</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">5</td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2">Tentukan nilai yang ingin dicari (lookup value).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center px-4 mb-4">
            <input
              type="text"
              value={stepOrder}
              onChange={(e) => setStepOrder(e.target.value)}
              className="border p-2 w-40 rounded-lg text-center"
              placeholder="Contoh: 1,2,3,4"
            />
            <button
              onClick={checkStepOrder}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => clearInputsAndFeedback(setStepOrder, setStepFeedback, setIsIndexCorrect)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {stepFeedback && (
            <p className={`text-sm mt-2 font-bold ${stepFeedback.includes("benar") ? "text-green-700" : "text-red-700"}`}>
              {stepFeedback}
            </p>
          )}
        </div>

        {/* Soal 3 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">3.</span>
            Gunakan fungsi INDEX untuk menampilkan nilai dari baris ke-2 dan kolom ke-3 dari tabel berikut:
          </p>
          <div className="overflow-x-auto px-4 mt-2 mb-4">
            <table className="w-full border text-sm border-gray-400 text-gray-800 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="border p-2 w-8"></th>
                  <th className="border p-2 text-center font-bold">A</th>
                  <th className="border p-2 text-center font-bold">B</th>
                  <th className="border p-2 text-center font-bold">C</th>
                  <th className="border p-2 text-center font-bold">D</th>
                </tr>
                <tr className="bg-[#255F38] text-white">
                  <th className="border p-2 text-center font-bold bg-gray-200 text-black">1</th>
                  <th className="border p-2 text-center font-bold">No</th>
                  <th className="border p-2">Nama</th>
                  <th className="border p-2">Matematika</th>
                  <th className="border p-2">Bahasa Inggris</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">2</td>
                  <th className="border p-2 text-center font-bold">1</th>
                  <td className="border p-2">Ali</td>
                  <td className="border p-2">90</td>
                  <td className="border p-2">88</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">3</td>
                  <th className="border p-2 text-center font-bold">2</th>
                  <td className="border p-2">Siti</td>
                  <td className="border p-2">92</td>
                  <td className="border p-2">{isIndexCorrect ? "85" : ""}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center px-4 mb-2">
            <input
              type="text"
              value={indexFormula}
              onChange={(e) => setIndexFormula(e.target.value)}
              className="border p-2 rounded-lg w-full max-w-md"
              placeholder="Misal: =INDEX(...)"
            />
            <button
              onClick={checkIndex}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => clearInputsAndFeedback(setIndexFormula, setIndexFeedback, setIsIndexCorrect)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {indexFeedback && (
            <p className={`text-sm mt-2 font-bold ${isIndexCorrect ? "text-green-700" : "text-red-700"}`}>
              {indexFeedback}
            </p>
          )}
        </div>

        {/* Soal 4 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">4.</span>
            Gunakan fungsi MATCH untuk menemukan posisi nilai 92 pada kolom Matematika berikut:
          </p>
          <div className="overflow-x-auto px-4 mt-2 mb-4">
            <table className="w-full border text-sm border-gray-400 text-gray-800 rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="border p-2 w-8"></th>
                  <th className="border p-2 text-center font-bold">A</th>
                  <th className="border p-2 text-center font-bold">B</th>
                  <th className="border p-2 text-center font-bold">C</th>
                </tr>
                <tr className="bg-[#255F38] text-white">
                  <th className="border p-2 text-center font-bold bg-gray-200 text-black">1</th>
                  <th className="border p-2 text-center font-bold">No</th>
                  <th className="border p-2">Nama</th>
                  <th className="border p-2">Matematika</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">2</td>
                  <th className="border p-2 text-center font-bold">2</th>
                  <td className="border p-2">Ali</td>
                  <td className="border p-2">90</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2 text-center bg-gray-200 font-bold text-black">3</td>
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
            <input
              type="text"
              value={matchFormula}
              onChange={(e) => setMatchFormula(e.target.value)}
              className="border p-2 rounded-lg w-full max-w-md"
              placeholder="Misal: =MATCH(...)"
            />
            <button
              onClick={checkMatch}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => clearInputsAndFeedback(setMatchFormula, setMatchFeedback, setIsMatchCorrect)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {matchFeedback && (
            <p className={`text-sm mt-2 font-bold ${isMatchCorrect ? "text-green-700" : "text-red-700"}`}>
              {matchFeedback}
            </p>
          )}
        </div>

        {/* Soal 5 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">5.</span>
            Gunakan fungsi CHOOSE untuk memilih siswa ke-2 dari daftar berikut: Ali, Siti, Budi.
          </p>
          <div className="flex items-center px-4 mb-2">
            <input
              type="text"
              value={chooseFormula}
              onChange={(e) => setChooseFormula(e.target.value)}
              className="border p-2 rounded-lg w-full max-w-md"
              placeholder="Misal: =CHOOSE(...)"
            />
            <button
              onClick={checkChoose}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => clearInputsAndFeedback(setChooseFormula, setChooseFeedback, setIsChooseCorrect)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {chooseFeedback && (
            <p className={`text-sm mt-2 font-bold ${isChooseCorrect ? "text-green-700" : "text-red-700"}`}>
              {chooseFeedback}
            </p>
          )}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-8 px-4">
          <button
            onClick={() => (window.location.href = "/contoh-reference")}
            className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
          >
            ← Sebelumnya
          </button>
          <button
            onClick={() => (window.location.href = "/berlatih-lookup")}
            className="px-5 py-2 text-base text-white transition duration-300 bg-[#255F38] rounded-lg shadow-md hover:bg-green-700 cursor-pointer"
          >
            Selanjutnya →
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasPencarian;