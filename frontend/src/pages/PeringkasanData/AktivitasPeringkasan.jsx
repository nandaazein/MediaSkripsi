// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout";

// const langkahSUMIF = [
//   "Gunakan rumus SUMIF untuk menjumlahkan total penjualan berdasarkan kategori 'Makanan'",
//   "Pilih range kriteria, yaitu kolom Kategori (C2:C9)",
//   "Tentukan kriteria, yaitu hanya menjumlahkan transaksi dengan kategori 'Makanan'",
//   "Pilih sum_range, yaitu kolom Total Penjualan (F2:F9) yang akan dijumlahkan",
// ];

// const langkahCOUNTIFS = [
//   "Gunakan rumus COUNTIFS untuk menghitung jumlah transaksi yang memenuhi kedua kriteria",
//   "Pilih criteria_range1, yaitu kolom kategori (C2:C9)",
//   "Tentukan criteria1, yaitu hanya menghitung transaksi dengan kategori 'Makanan'",
//   "Pilih criteria_range2, yaitu kolom jumlah terjual (E2:E9)",
//   "Tentukan criteria2, yaitu hanya menghitung transaksi dengan jumlah terjual lebih dari 3"
// ];

// const shuffleArray = (array) => {
//   return [...array].sort(() => Math.random() - 0.5);
// };

// const AktivitasPeringkasan = () => {
//   const [jawaban1, setJawaban1] = useState("");
//   const [feedback1, setFeedback1] = useState("");
//   const [jawaban2, setJawaban2] = useState("");
//   const [feedback2, setFeedback2] = useState("");
//   const [jawaban3a, setJawaban3a] = useState("");
//   const [jawaban3b, setJawaban3b] = useState("");
//   const [jawaban3c, setJawaban3c] = useState("");
//   const [feedback3, setFeedback3] = useState("");
//   const [feedback4, setFeedback4] = useState("");
//   const [feedback5, setFeedback5] = useState("");
//   const [urutan4, setUrutan4] = useState([]);
//   const [urutan5, setUrutan5] = useState([]);
//   const [bank4, setBank4] = useState([]);
//   const [bank5, setBank5] = useState([]);

//   useEffect(() => {
//     setBank4(shuffleArray(langkahCOUNTIFS));
//     setBank5(shuffleArray(langkahSUMIF));
//   }, []);

//   const cekJawaban1 = () => {
//     setFeedback1(jawaban1.trim().toLowerCase() === "susu kotak" ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
//   };

//   const resetJawaban1 = () => {
//     setJawaban1("");
//     setFeedback1("");
//   };

//   const cekJawaban2 = () => {
//     setFeedback2(jawaban2.trim().toUpperCase() === "COUNTIF" ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
//   };

//   const resetJawaban2 = () => {
//     setJawaban2("");
//     setFeedback2("");
//   };

//   const cekJawaban3 = () => {
//     const benar =
//       jawaban3a.trim().toUpperCase() === "C2:C9" &&
//       jawaban3b.trim().toLowerCase() === "'alat tulis'" &&
//       jawaban3c.trim() === "4";
//     setFeedback3(benar ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
//   };

//   const resetJawaban3 = () => {
//     setJawaban3a("");
//     setJawaban3b("");
//     setJawaban3c("");
//     setFeedback3("");
//   };

//   const cekJawaban4 = () => {
//     const benar = JSON.stringify(urutan4) === JSON.stringify(langkahCOUNTIFS);
//     setFeedback4(benar ? "✅ Urutan benar! Anda berhasil!" : "❌ Urutan masih salah, coba lagi!");
//   };

//   const resetJawaban4 = () => {
//     setUrutan4([]);
//     setFeedback4("");
//     setBank4(shuffleArray(langkahCOUNTIFS));
//   };

//   const cekJawaban5 = () => {
//     const benar = JSON.stringify(urutan5) === JSON.stringify(langkahSUMIF);
//     setFeedback5(benar ? "✅ Urutan benar! Anda berhasil!" : "❌ Urutan masih salah, coba lagi!");
//   };

//   const resetJawaban5 = () => {
//     setUrutan5([]);
//     setFeedback5("");
//     setBank5(shuffleArray(langkahSUMIF));
//   };

//   const semuaBenar = [feedback1, feedback2, feedback3, feedback4, feedback5].every((f) => f.startsWith("✅"));

//   const handleDrag = (event, item) => {
//     event.dataTransfer.setData("text/plain", item);
//   };

//   const handleDrop = (event, setUrutan) => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData("text/plain");
//     setUrutan((prev) => {
//       if (!prev.includes(data)) {
//         return [...prev, data];
//       }
//       return prev;
//     });
//   };

//   const allowDrop = (event) => {
//     event.preventDefault();
//   };

//   const renderDraggableItems = (items, urutan) => {
//     return items.filter((item) => !urutan.includes(item)).map((item, index) => (
//       <div key={index} draggable onDragStart={(e) => handleDrag(e, item)} className="border border-gray-400 p-2 rounded bg-white shadow-sm mb-2 cursor-move">
//         {item}
//       </div>
//     ));
//   };

//   return (
//     <Layout>
//       <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
//         Aktivitas Peringkasan Data
//       </h1>

//       <div className="flex justify-center px-4 mb-6">
//         <iframe
//           width="100%"
//           height="400"
//           className="border border-gray-300"
//           frameBorder="0"
//           scrolling="no"
//           src="https://sheet.zohopublic.com/sheet/published/2vh20a58be89169c94b9397a979024073156d?mode=embed"
//         ></iframe>
//       </div>

//       <div className="bg-green-100 text-green-900 border border-green-400 p-4 rounded mx-4 mb-6">
//         <p className="text-sm md:text-base">
//           🎯 <b>Petunjuk:</b> Kerjakan semua soal di bawah ini dengan mencermati tabel data di atas. Jika semua jawabanmu benar, maka tombol "Mulai Kuis" di bawah akan aktif.
//         </p>
//       </div>

//       {/* Soal 1 */}
//       <div className="px-4 mb-6">
//         <p className="text-gray-700 text-sm md:text-base mb-2">1. Produk apa yang memiliki total penjualan tertinggi?</p>
//         <input type="text" className="border p-2 rounded w-full" value={jawaban1} onChange={(e) => setJawaban1(e.target.value)} />
//         <div className="flex gap-2 mt-2">
//           <button onClick={cekJawaban1} className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">Periksa</button>
//           <button onClick={resetJawaban1} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Hapus</button>
//         </div>
//         {feedback1 && <p className="mt-2 font-semibold">{feedback1}</p>}
//       </div>

//       {/* Soal 2 */}
//       <div className="px-4 mb-6">
//         <p className="text-gray-700 text-sm md:text-base mb-2">2. Fungsi apa yang digunakan untuk menghitung jumlah data berdasarkan satu kriteria?</p>
//         <input type="text" className="border p-2 rounded w-full" value={jawaban2} onChange={(e) => setJawaban2(e.target.value)} />
//         <div className="flex gap-2 mt-2">
//           <button onClick={cekJawaban2} className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">Periksa</button>
//           <button onClick={resetJawaban2} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Hapus</button>
//         </div>
//         {feedback2 && <p className="mt-2 font-semibold">{feedback2}</p>}
//       </div>

//       {/* Soal 3 */}
//       <div className="px-4 mb-6">
//         <p className="text-gray-700 text-sm md:text-base mb-2">3. Isi bagian-bagian dari fungsi COUNTIF berikut untuk menghitung jumlah produk kategori "Alat Tulis":</p>
//         <div className="space-y-2">
//           <input type="text" placeholder="Range (misal: A2:A9)" className="border p-2 rounded w-full" value={jawaban3a} onChange={(e) => setJawaban3a(e.target.value)} />
//           <input type="text" placeholder="Kriteria (misal: 'Makanan')" className="border p-2 rounded w-full" value={jawaban3b} onChange={(e) => setJawaban3b(e.target.value)} />
//           <input type="text" placeholder="Hasil (misal: 4)" className="border p-2 rounded w-full" value={jawaban3c} onChange={(e) => setJawaban3c(e.target.value)} />
//         </div>
//         <div className="flex gap-2 mt-2">
//           <button onClick={cekJawaban3} className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">Periksa</button>
//           <button onClick={resetJawaban3} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Hapus</button>
//         </div>
//         {feedback3 && <p className="mt-2 font-semibold">{feedback3}</p>}
//       </div>

//       {/* Soal 4 */}
//       <div className="px-4 mb-6">
//         <p className="text-gray-700 text-sm md:text-base mb-2">
//           4. Seret langkah-langkah berikut ke dalam urutan yang benar untuk menghitung <b>jumlah transaksi kategori "Makanan" dengan jumlah terjual lebih dari 3</b>:
//         </p>
//         <div className="mb-2">{renderDraggableItems(bank4, urutan4)}</div>
//         <div className="border border-gray-400 p-4 rounded mb-2 min-h-[100px] bg-gray-50" onDrop={(e) => handleDrop(e, setUrutan4)} onDragOver={allowDrop}>
//           {urutan4.map((item, index) => (
//             <div key={index} className="border border-gray-400 p-2 rounded bg-white shadow-sm mb-2">
//               {index + 1}. {item}
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-2">
//           <button onClick={cekJawaban4} className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">Periksa</button>
//           <button onClick={resetJawaban4} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Hapus</button>
//         </div>
//         {feedback4 && <p className="mt-2 font-semibold">{feedback4}</p>}
//       </div>

//       {/* Soal 5 */}
//       <div className="px-4 mb-6">
//         <p className="text-gray-700 text-sm md:text-base mb-2">
//           5. Susun kembali langkah-langkah berikut agar urut untuk menghitung <b>total penjualan kategori "Makanan" menggunakan SUMIF</b>:
//         </p>
//         <div className="mb-2">{renderDraggableItems(bank5, urutan5)}</div>
//         <div className="border border-gray-400 p-4 rounded mb-2 min-h-[100px] bg-gray-50" onDrop={(e) => handleDrop(e, setUrutan5)} onDragOver={allowDrop}>
//           {urutan5.map((item, index) => (
//             <div key={index} className="border border-gray-400 p-2 rounded bg-white shadow-sm mb-2">
//               {index + 1}. {item}
//             </div>
//           ))}
//         </div>
//         <div className="flex gap-2">
//           <button onClick={cekJawaban5} className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700">Periksa</button>
//           <button onClick={resetJawaban5} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Hapus</button>
//         </div>
//         {feedback5 && <p className="mt-2 font-semibold">{feedback5}</p>}
//       </div>

//       <div className="flex justify-between mt-10 px-4">
//         <a href="/aktivitas-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
//           ← Sebelumnya
//         </a>
//         <a
//           href={semuaBenar ? "/petunjuk-kuis1" : "#"}
//           className={`px-5 py-2 rounded-lg text-white ${semuaBenar ? "bg-[#255F38] hover:bg-[#1E4D2E]" : "bg-gray-400 cursor-not-allowed"}`}
//           onClick={(e) => { if (!semuaBenar) e.preventDefault(); }}
//         >
//           Mulai Kuis →
//         </a>
//       </div>
//     </Layout>
//   );
// };

// export default AktivitasPeringkasan;

import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const langkahSUMIF = [
  "Gunakan rumus SUMIF untuk menjumlahkan total penjualan berdasarkan kategori 'Makanan'",
  "Pilih range kriteria, yaitu kolom Kategori (C2:C9)",
  "Tentukan kriteria, yaitu hanya menjumlahkan transaksi dengan kategori 'Makanan'",
  "Pilih sum_range, yaitu kolom Total Penjualan (F2:F9) yang akan dijumlahkan",
];

const langkahCOUNTIFS = [
  "Gunakan rumus COUNTIFS untuk menghitung jumlah transaksi yang memenuhi kedua kriteria",
  "Pilih criteria_range1, yaitu kolom kategori (C2:C9)",
  "Tentukan criteria1, yaitu hanya menghitung transaksi dengan kategori 'Makanan'",
  "Pilih criteria_range2, yaitu kolom jumlah terjual (E2:E9)",
  "Tentukan criteria2, yaitu hanya menghitung transaksi dengan jumlah terjual lebih dari 3",
];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const AktivitasPeringkasan = () => {
  const [jawaban1, setJawaban1] = useState("");
  const [feedback1, setFeedback1] = useState("");
  const [jawaban2, setJawaban2] = useState("");
  const [feedback2, setFeedback2] = useState("");
  const [jawaban3a, setJawaban3a] = useState("");
  const [jawaban3b, setJawaban3b] = useState("");
  const [jawaban3c, setJawaban3c] = useState("");
  const [feedback3, setFeedback3] = useState("");
  const [feedback4, setFeedback4] = useState("");
  const [feedback5, setFeedback5] = useState("");
  const [urutan4, setUrutan4] = useState([]);
  const [urutan5, setUrutan5] = useState([]);
  const [bank4, setBank4] = useState([]);
  const [bank5, setBank5] = useState([]);

  useEffect(() => {
    setBank4(shuffleArray(langkahCOUNTIFS));
    setBank5(shuffleArray(langkahSUMIF));
  }, []);

  const cekJawaban1 = () => {
    setFeedback1(jawaban1.trim().toLowerCase() === "susu kotak" ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
  };

  const resetJawaban1 = () => {
    setJawaban1("");
    setFeedback1("");
  };

  const cekJawaban2 = () => {
    setFeedback2(jawaban2.trim().toUpperCase() === "COUNTIF" ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
  };

  const resetJawaban2 = () => {
    setJawaban2("");
    setFeedback2("");
  };

  const cekJawaban3 = () => {
    const benar =
      jawaban3a.trim().toUpperCase() === "C2:C9" &&
      jawaban3b.trim().toLowerCase() === "'alat tulis'" &&
      jawaban3c.trim() === "4";
    setFeedback3(benar ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
  };

  const resetJawaban3 = () => {
    setJawaban3a("");
    setJawaban3b("");
    setJawaban3c("");
    setFeedback3("");
  };

  const cekJawaban4 = () => {
    const benar = JSON.stringify(urutan4) === JSON.stringify(langkahCOUNTIFS);
    setFeedback4(benar ? "✅ Urutan benar! Anda berhasil!" : "❌ Urutan masih salah, coba lagi!");
  };

  const resetJawaban4 = () => {
    setUrutan4([]);
    setFeedback4("");
    setBank4(shuffleArray(langkahCOUNTIFS));
  };

  const cekJawaban5 = () => {
    const benar = JSON.stringify(urutan5) === JSON.stringify(langkahSUMIF);
    setFeedback5(benar ? "✅ Urutan benar! Anda berhasil!" : "❌ Urutan masih salah, coba lagi!");
  };

  const resetJawaban5 = () => {
    setUrutan5([]);
    setFeedback5("");
    setBank5(shuffleArray(langkahSUMIF));
  };

  const semuaBenar = [feedback1, feedback2, feedback3, feedback4, feedback5].every((f) => f.startsWith("✅"));

  const handleDrag = (event, item) => {
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (event, setUrutan) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    setUrutan((prev) => {
      if (!prev.includes(data)) {
        return [...prev, data];
      }
      return prev;
    });
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const renderDraggableItems = (items, urutan) => {
    return items.filter((item) => !urutan.includes(item)).map((item, index) => (
      <div
        key={index}
        draggable
        onDragStart={(e) => handleDrag(e, item)}
        className="border border-gray-400 p-3 rounded bg-white shadow-sm mb-2 cursor-move text-sm md:text-base text-gray-700"
      >
        {item}
      </div>
    ));
  };

  return (
    <Layout>
      <div className="p-6 bg-white">
        <h1 className="text-xl md:text-2xl text-center font-bold mb-8 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
          Aktivitas Peringkasan Data
        </h1>

        <div className="flex justify-center px-4 mb-6">
          <iframe
            width="100%"
            height="400"
            className="border border-gray-300 rounded-lg shadow-md"
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/2vh20a58be89169c94b9397a979024073156d?mode=embed"
          ></iframe>
        </div>

        <div className="bg-green-100 text-green-900 border border-green-200 p-4 rounded mx-4 mb-6 shadow-md">
          <p className="text-sm md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">🎯</span>
            <b>Petunjuk:</b> Kerjakan semua soal di bawah ini dengan mencermati tabel data di atas. Jika semua jawabanmu benar, maka tombol "Mulai Kuis" di bawah akan aktif.
          </p>
        </div>

        {/* Soal 1 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">1️⃣</span>
            Produk apa yang memiliki total penjualan tertinggi?
          </p>
          <div className="px-4">
            <input
              type="text"
              className="border-2 p-2 rounded-xl w-full text-sm md:text-base text-gray-700"
              value={jawaban1}
              onChange={(e) => setJawaban1(e.target.value)}
              placeholder="Ketik jawaban Anda..."
            />
            <div className="mt-2 text-center">
              <button
                onClick={cekJawaban1}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={resetJawaban1}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {feedback1 && (
              <div className={`mt-2 text-sm font-medium ${feedback1.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {feedback1}
              </div>
            )}
          </div>
        </div>

        {/* Soal 2 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">2️⃣</span>
            Fungsi apa yang digunakan untuk menghitung jumlah data berdasarkan satu kriteria?
          </p>
          <div className="px-4">
            <input
              type="text"
              className="border-2 p-2 rounded-xl w-full text-sm md:text-base text-gray-700"
              value={jawaban2}
              onChange={(e) => setJawaban2(e.target.value)}
              placeholder="Ketik jawaban Anda..."
            />
            <div className="mt-2 text-center">
              <button
                onClick={cekJawaban2}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={resetJawaban2}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {feedback2 && (
              <div className={`mt-2 text-sm font-medium ${feedback2.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {feedback2}
              </div>
            )}
          </div>
        </div>

        {/* Soal 3 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">3️⃣</span>
            Isi bagian-bagian dari fungsi COUNTIF berikut untuk menghitung jumlah produk kategori "Alat Tulis":
          </p>
          <div className="px-4 space-y-3">
            <input
              type="text"
              placeholder="Range (misal: A2:A9)"
              className="border-2 p-2 rounded-xl w-full text-sm md:text-base text-gray-700"
              value={jawaban3a}
              onChange={(e) => setJawaban3a(e.target.value)}
            />
            <input
              type="text"
              placeholder="Kriteria (misal: 'Makanan')"
              className="border-2 p-2 rounded-xl w-full text-sm md:text-base text-gray-700"
              value={jawaban3b}
              onChange={(e) => setJawaban3b(e.target.value)}
            />
            <input
              type="text"
              placeholder="Hasil (misal: 4)"
              className="border-2 p-2 rounded-xl w-full text-sm md:text-base text-gray-700"
              value={jawaban3c}
              onChange={(e) => setJawaban3c(e.target.value)}
            />
            <div className="mt-2 text-center">
              <button
                onClick={cekJawaban3}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={resetJawaban3}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {feedback3 && (
              <div className={`mt-2 text-sm font-medium ${feedback3.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {feedback3}
              </div>
            )}
          </div>
        </div>

        {/* Soal 4 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">4️⃣</span>
            Seret langkah-langkah berikut ke dalam urutan yang benar untuk menghitung jumlah transaksi kategori "Makanan" dengan jumlah terjual lebih dari 3:
          </p>
          <div className="px-4">
            <div className="mb-4">{renderDraggableItems(bank4, urutan4)}</div>
            <div
              className="border border-gray-400 p-4 rounded mb-4 min-h-[150px] bg-gray-50"
              onDrop={(e) => handleDrop(e, setUrutan4)}
              onDragOver={allowDrop}
            >
              {urutan4.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-400 p-3 rounded bg-white shadow-sm mb-2 text-sm md:text-base text-gray-700"
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <button
                onClick={cekJawaban4}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={resetJawaban4}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {feedback4 && (
              <div className={`mt-2 text-sm font-medium ${feedback4.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {feedback4}
              </div>
            )}
          </div>
        </div>

        {/* Soal 5 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">5️⃣</span>
            Susun kembali langkah-langkah berikut agar urut untuk menghitung total penjualan kategori "Makanan" menggunakan SUMIF:
          </p>
          <div className="px-4">
            <div className="mb-4">{renderDraggableItems(bank5, urutan5)}</div>
            <div
              className="border border-gray-400 p-4 rounded mb-4 min-h-[150px] bg-gray-50"
              onDrop={(e) => handleDrop(e, setUrutan5)}
              onDragOver={allowDrop}
            >
              {urutan5.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-400 p-3 rounded bg-white shadow-sm mb-2 text-sm md:text-base text-gray-700"
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
            <div className="mt-2 text-center">
              <button
                onClick={cekJawaban5}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={resetJawaban5}
                className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {feedback5 && (
              <div className={`mt-2 text-sm font-medium ${feedback5.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {feedback5}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-8 px-4">
          <a
            href="/aktivitas-lookup"
            className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
          >
            ← Sebelumnya
          </a>
          <a
            href={semuaBenar ? "/petunjuk-kuis1" : "#"}
            className={`px-5 py-2 text-base text-white transition duration-300 rounded-lg shadow-md ${
              semuaBenar ? "bg-[#255F38] hover:bg-[#1E4D2E]" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!semuaBenar) e.preventDefault();
            }}
          >
            Mulai Kuis →
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasPeringkasan;