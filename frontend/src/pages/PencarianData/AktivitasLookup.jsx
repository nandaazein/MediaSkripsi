import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const AktivitasLookup = () => {
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [formulaFeedback, setFormulaFeedback] = useState("");
  const [stepOrder, setStepOrder] = useState("");
  const [stepFeedback, setStepFeedback] = useState("");
  const [isFormulaCorrect, setIsFormulaCorrect] = useState(false);
  const [isOrderCorrect, setIsOrderCorrect] = useState(false);

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
    setIsFormulaCorrect(false);
  };

  const checkFormula = () => {
    const isCorrect = selectedFormula === correctFormula;
    setFormulaFeedback(isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
    setIsFormulaCorrect(isCorrect);
  };

  const checkStepOrder = () => {
    const trimmedOrder = stepOrder.trim();
    const isValidInput = /^\d(,\d)*$/.test(trimmedOrder);

    if (!isValidInput) {
      setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
      setIsOrderCorrect(false);
      return;
    }

    const isCorrect = trimmedOrder === correctOrder;
    setStepFeedback(isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
    setIsOrderCorrect(isCorrect);
  };

  const semuaBenar = isFormulaCorrect && isOrderCorrect;


  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
        Aktivitas Siswa
      </h1>

      {/* Aktivitas 1 */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
        1. Cocokkan formula yang tepat untuk mencari nilai Tunjangan berdasarkan data pada tabel.
      </p>
      <div className="flex justify-center px-4">
        <iframe
          width="100%"
          height="400"
          className="border border-gray-300"
          frameBorder="0"
          scrolling="no"
          src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed"
        ></iframe>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 px-4">
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
        className="w-80 h-16 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-2 mt-4 mx-auto text-center"
      >
        {selectedFormula || <span className="text-gray-400">Drop formula here</span>}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={checkFormula}
          className="px-4 py-2 bg-[#255F38] text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Periksa
        </button>
      </div>
      {formulaFeedback && (
        <p className="mt-2 text-lg font-semibold text-center">{formulaFeedback}</p>
      )}

      {/* Aktivitas 2 */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-12 mb-4">
        2. Urutkan langkah-langkah berikut untuk menggunakan fungsi Lookup dengan benar.
      </p>
      <div className="overflow-x-auto px-4">
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
              <td className="border border-gray-400 p-2">
                Tentukan tabel data yang berisi nilai referensi (<b>table array</b>).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">2</td>
              <td className="border border-gray-400 p-2">
                Tentukan apakah pencarian dilakukan secara tepat (<b>FALSE</b>) atau mendekati (<b>TRUE</b>).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">3</td>
              <td className="border border-gray-400 p-2">
                Tentukan nomor kolom yang berisi nilai yang dicari.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 text-center">4</td>
              <td className="border border-gray-400 p-2">
                Tentukan nilai pencarian (<b>lookup value</b>).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-4 mt-4 flex items-center">
        <input
          type="text"
          value={stepOrder}
          onChange={(e) => setStepOrder(e.target.value)}
          className="border border-gray-500 p-2 rounded w-40 text-center"
          placeholder="Masukkan urutan"
        />
        <button
          onClick={checkStepOrder}
          className="ml-4 px-4 py-2 bg-[#255F38] text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Periksa
        </button>
      </div>
      {stepFeedback && (
        <p className="mt-2 text-lg font-semibold text-center">{stepFeedback}</p>
      )}

      {/* Tombol Navigasi */}
      <div className="mt-6 text-center">
        <button
          className={`px-6 py-2 text-white rounded font-semibold ${
            semuaBenar ? "bg-[#255F38] hover:bg-[#1E4D2E]" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!semuaBenar}
          onClick={() => {
            window.location.href = "/berlatih-lookup"; 
          }}
        >
          Selanjutnya
        </button>
      </div>

    </Layout>
  );
};

export default AktivitasLookup;

// import { useState } from "react";
// import Layout from "../../components/Layout";

// const AktivitasLookup = () => {
//   const [selectedFormula, setSelectedFormula] = useState(null);
//   const [formulaFeedback, setFormulaFeedback] = useState("");
//   const [stepOrder, setStepOrder] = useState("");
//   const [stepFeedback, setStepFeedback] = useState("");
//   const [isFormulaCorrect, setIsFormulaCorrect] = useState(false);
//   const [isOrderCorrect, setIsOrderCorrect] = useState(false);
//   const [indexAnswer, setIndexAnswer] = useState(null);
//   const [matchAnswer, setMatchAnswer] = useState("");
//   const [choosePairs, setChoosePairs] = useState({});
//   const [indexFeedback, setIndexFeedback] = useState("");
//   const [matchFeedback, setMatchFeedback] = useState("");
//   const [chooseFeedback, setChooseFeedback] = useState("");

//   const correctFormula = "=HLOOKUP(E3;$A$10:$D$11;2;FALSE)";
//   const correctOrder = "4,1,3,2";
//   const correctIndex = "Nilai siswa berdasarkan baris dan kolom";
//   const correctMatch = "3";
//   const correctChoose = { A: "Januari", B: "Februari", C: "Maret" };

//   const semuaBenar =
//     isFormulaCorrect &&
//     isOrderCorrect &&
//     indexAnswer === correctIndex &&
//     matchAnswer === correctMatch &&
//     JSON.stringify(choosePairs) === JSON.stringify(correctChoose);

//   const formulas = [
//     "=VLOOKUP(E3;$A$10:$D$11;1;TRUE)",
//     "=VLOOKUP(E3;$A$10:$D$11;1;FALSE)",
//     "=HLOOKUP(E3;$A$10:$D$11;2;TRUE)",
//     "=HLOOKUP(E3;$A$10:$D$11;2;FALSE)"
//   ];

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setSelectedFormula(e.dataTransfer.getData("text/plain"));
//     setFormulaFeedback("");
//     setIsFormulaCorrect(false);
//   };

//   const checkFormula = () => {
//     const isCorrect = selectedFormula === correctFormula;
//     setFormulaFeedback(isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
//     setIsFormulaCorrect(isCorrect);
//   };

//   const checkStepOrder = () => {
//     const trimmedOrder = stepOrder.trim();
//     const isValidInput = /^\d(,\d)*$/.test(trimmedOrder);

//     if (!isValidInput) {
//       setStepFeedback("⚠️ Format tidak valid! Gunakan angka dan koma saja.");
//       setIsOrderCorrect(false);
//       return;
//     }

//     const isCorrect = trimmedOrder === correctOrder;
//     setStepFeedback(isCorrect ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
//     setIsOrderCorrect(isCorrect);
//   };

//   const checkIndexAnswer = () => {
//     setIndexFeedback(
//       indexAnswer === correctIndex ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!"
//     );
//   };

//   const checkMatchAnswer = () => {
//     setMatchFeedback(
//       matchAnswer === correctMatch ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!"
//     );
//   };

//   const checkChoosePairs = () => {
//     setChooseFeedback(
//       JSON.stringify(choosePairs) === JSON.stringify(correctChoose)
//         ? "✅ Jawaban benar!"
//         : "❌ Pasangan belum tepat. Coba lagi!"
//     );
//   };

//   return (
//     <Layout>
//       <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
//         Aktivitas Siswa
//       </h1>

//       {/* Aktivitas 1: Drag formula */}
//       <p className="text-gray-700 text-sm md:text-base px-4 mb-4">
//         1. Drag formula yang tepat untuk mencari nilai Tunjangan dari tabel.
//       </p>
//       <div className="flex flex-wrap justify-center gap-2 px-4">
//         {formulas.map((formula, idx) => (
//           <div
//             key={idx}
//             draggable
//             onDragStart={(e) => e.dataTransfer.setData("text/plain", formula)}
//             className="p-2 bg-green-100 border border-green-500 rounded cursor-pointer hover:bg-green-200"
//           >
//             {formula}
//           </div>
//         ))}
//       </div>
//       <div
//         onDrop={handleDrop}
//         onDragOver={(e) => e.preventDefault()}
//         className="w-80 h-16 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-2 mt-4 mx-auto"
//       >
//         {selectedFormula || <span className="text-gray-400">Drop formula di sini</span>}
//       </div>
//       <div className="text-center mt-2">
//         <button onClick={checkFormula} className="bg-[#255F38] text-white px-4 py-2 rounded">
//           Periksa
//         </button>
//         <p className="mt-2">{formulaFeedback}</p>
//       </div>

//       {/* Aktivitas 2: Urutan langkah */}
//       <p className="text-gray-700 text-sm md:text-base px-4 mt-10 mb-2">
//         2. Urutkan langkah menggunakan fungsi Lookup (contoh: 4,1,3,2).
//       </p>
//       <input
//         value={stepOrder}
//         onChange={(e) => setStepOrder(e.target.value)}
//         className="border p-2 rounded w-40 text-center mx-4"
//         placeholder="Masukkan urutan"
//       />
//       <button onClick={checkStepOrder} className="bg-[#255F38] text-white px-4 py-2 rounded ml-2">
//         Periksa
//       </button>
//       <p className="text-center mt-2">{stepFeedback}</p>

//       {/* Aktivitas 3: Drag jawaban INDEX */}
//       <p className="text-gray-700 text-sm md:text-base px-4 mt-10 mb-2">
//         3. Drag jawaban yang paling tepat untuk fungsi INDEX.
//       </p>
//       <div className="flex gap-2 px-4">
//         {["Nilai siswa berdasarkan baris dan kolom", "Menjumlahkan nilai", "Mengurutkan data"].map(
//           (item) => (
//             <div
//               key={item}
//               draggable
//               onDragStart={(e) => e.dataTransfer.setData("text/plain", item)}
//               className="bg-yellow-100 border border-yellow-500 p-2 rounded cursor-pointer"
//             >
//               {item}
//             </div>
//           )
//         )}
//       </div>
//       <div
//         onDrop={(e) => {
//           e.preventDefault();
//           setIndexAnswer(e.dataTransfer.getData("text/plain"));
//         }}
//         onDragOver={(e) => e.preventDefault()}
//         className="w-80 h-16 border-2 border-dashed border-gray-500 rounded-lg p-2 mt-2 mx-auto flex items-center justify-center"
//       >
//         {indexAnswer || <span className="text-gray-400">Drop jawaban INDEX di sini</span>}
//       </div>
//       <div className="text-center mt-2">
//         <button onClick={checkIndexAnswer} className="bg-[#255F38] text-white px-4 py-2 rounded">
//           Periksa
//         </button>
//         <p className="mt-2">{indexFeedback}</p>
//       </div>

//       {/* Aktivitas 4: Pilihan ganda MATCH */}
//       <p className="text-gray-700 text-sm md:text-base px-4 mt-10 mb-2">
//         4. Berapa hasil dari =MATCH(25; A1:A5; 0) jika A1:A5 berisi [10, 15, 25, 30, 35]?
//       </p>
//       <div className="flex gap-2 px-4">
//         {["1", "2", "3", "4"].map((opt) => (
//           <button
//             key={opt}
//             onClick={() => setMatchAnswer(opt)}
//             className={`px-4 py-2 rounded border ${matchAnswer === opt ? "bg-[#255F38] text-white" : "bg-white"}`}
//           >
//             {opt}
//           </button>
//         ))}
//       </div>
//       <div className="text-center mt-2">
//         <button onClick={checkMatchAnswer} className="bg-[#255F38] text-white px-4 py-2 rounded">
//           Periksa
//         </button>
//         <p className="mt-2">{matchFeedback}</p>
//       </div>

//       {/* Aktivitas 5: Mencocokkan CHOOSE */}
//       <p className="text-gray-700 text-sm md:text-base px-4 mt-10 mb-2">
//         5. Cocokkan huruf berikut dengan nama bulan yang sesuai.
//       </p>
//       <div className="grid grid-cols-2 gap-4 px-4">
//         {["A", "B", "C"].map((key) => (
//           <div key={key}>
//             <p>{key}</p>
//             <select
//               value={choosePairs[key] || ""}
//               onChange={(e) => setChoosePairs({ ...choosePairs, [key]: e.target.value })}
//               className="border p-1 rounded"
//             >
//               <option value="">Pilih</option>
//               {Object.values(correctChoose).map((val) => (
//                 <option key={val} value={val}>
//                   {val}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-2">
//         <button onClick={checkChoosePairs} className="bg-[#255F38] text-white px-4 py-2 rounded">
//           Periksa
//         </button>
//         <p className="mt-2">{chooseFeedback}</p>
//       </div>

//       {/* Navigasi */}
//       <div className="mt-10 text-center">
//         <button
//           className="bg-gray-500 text-white px-6 py-2 rounded mr-2"
//           onClick={() => window.history.back()}
//         >
//           Sebelumnya
//         </button>
//         <button
//           className={`px-6 py-2 text-white rounded font-semibold ${
//             semuaBenar ? "bg-[#255F38] hover:bg-[#1E4D2E]" : "bg-gray-400 cursor-not-allowed"
//           }`}
//           disabled={!semuaBenar}
//           onClick={() => (window.location.href = "/berlatih-lookup")}
//         >
//           Selanjutnya
//         </button>
//       </div>
//     </Layout>
//   );
// };

// export default AktivitasLookup;