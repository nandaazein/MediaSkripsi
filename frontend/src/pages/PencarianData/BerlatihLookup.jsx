// import { useState } from "react";
// import Layout from "../../components/Layout";

// export default function VlookupLesson() {
//   const correctAnswers = {
//     tableReference: "status",
//     scoreStatus: "sangat baik",
//     unnecessaryColumn: "nama",
//     lookupFormula: "=VLOOKUP(B3;$E$2:$G$6;3;true)"
//   };

//   const [answers, setAnswers] = useState({
//     tableReference: "",
//     scoreStatus: "",
//     unnecessaryColumn: "",
//     lookupFormula: ""
//   });

//   const [feedback, setFeedback] = useState({
//     tableReference: null,
//     scoreStatus: null,
//     unnecessaryColumn: null,
//     lookupFormula: null
//   });

//   const handleChange = (field, value) => {
//     setAnswers((prev) => ({ ...prev, [field]: value }));
//   };

//   const checkAnswer = (field) => {
//     const isCorrect =
//       answers[field].trim().toLowerCase() === correctAnswers[field].trim().toLowerCase();
//     setFeedback((prev) => ({ ...prev, [field]: isCorrect }));
//   };

//   const clearAnswer = (field) => {
//     setAnswers((prev) => ({ ...prev, [field]: "" }));
//     setFeedback((prev) => ({ ...prev, [field]: null }));
//   };

//   const renderFeedback = (field) => {
//     if (feedback[field] === null) return null;
//     return (
//       <div className={`flex items-center gap-2 mt-2 text-base font-semibold ${feedback[field] ? "text-green-700" : "text-red-700"}`}>
//         {feedback[field] ? (
//           <>
//             <span>✅ Jawaban benar!</span>
//           </>
//         ) : (
//           <>
//             <span>❌ Jawaban salah. Coba lagi!</span>
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         MARI BERLATIH PENCARIAN DATA
//       </div>

//       <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-6">
//         <strong>Petunjuk:</strong> Baca studi kasus di bawah ini, lalu jawab pertanyaan pada setiap bagian yang mewakili langkah-langkah berpikir komputasional. Klik tombol <em>“Periksa”</em> untuk mengetahui apakah jawabanmu sudah tepat. Jangan khawatir, kamu bisa mencoba lagi jika belum benar!
//       </p>

//       {/* Studi Kasus */}
//       <section className="p-6 bg-white rounded shadow-lg">
//         <h2 className="text-lg font-semibold text-green-700">Studi Kasus</h2>
//         <p className="text-gray-700 text-sm md:text-base mt-2 text-justify leading-relaxed px-4">
//           Kamu adalah ketua kelas dan diminta oleh wali kelas untuk membantu dalam rekap nilai ujian siswa di kelasmu.
//           Wali kelas ingin mengetahui siapa saja yang <strong>lulus</strong> dan siapa yang <strong>belum lulus</strong> berdasarkan nilai ujian akhir.
//           Agar tidak perlu memeriksa satu per satu secara manual, kamu ingin menggunakan <strong>rumus VLOOKUP</strong> agar kolom status bisa terisi secara otomatis.
//           Kamu juga sudah diberi <strong>Tabel Referensi</strong> yang menunjukkan rentang nilai dan statusnya.
//         </p>

//         <div className="w-full flex justify-center px-4 mt-5">
//           <iframe 
//             width="80%" 
//             height="400" 
//             style={{ border: '1px solid #e7e7e7' }} 
//             frameBorder="0" 
//             scrolling="no" 
//             src="https://sheet.zohopublic.com/sheet/published/190uf9b625cb387f54e89be6b3df5fe95c4d7?mode=embed">
//           </iframe>
//         </div>
//       </section>

//       {/* Fungsi membuat section */}
//       {[
//         {
//           key: "tableReference",
//           title: "1. Dekomposisi",
//           question: "Apa yang dicari dalam tabel referensi?",
//           points: [
//             "Mengidentifikasi tabel referensi.",
//             "Menentukan nilai yang akan dicari.",
//             "Menemukan hasil berdasarkan tabel referensi."
//           ]
//         },
//         {
//           key: "scoreStatus",
//           title: "2. Pengenalan Pola",
//           question: "Status untuk nilai 85 adalah?",
//           points: [
//             "Nilai tertentu memiliki status tertentu.",
//             "Rentang nilai yang sama akan menghasilkan nilai yang sama."
//           ]
//         },
//         {
//           key: "unnecessaryColumn",
//           title: "3. Abstraksi",
//           question: "Kolom yang tidak diperlukan dalam pencocokan?",
//           points: [
//             "Fokus hanya pada kolom yang diperlukan.",
//             "Mengabaikan data yang tidak relevan."
//           ]
//         },
//         {
//           key: "lookupFormula",
//           title: "4. Algoritma",
//           question: "Tulis rumus VLOOKUP yang sesuai untuk membantu proses tersebut (rumus VLOOKUP untuk kolom pertama).",
//           points: [
//             "Bagaimana kamu bisa menentukan status kelulusan secara otomatis berdasarkan nilai siswa dan tabel referensi?",
//             "Pikirkan bagaimana kamu mencocokkan nilai dengan rentang tertentu dan mendapatkan hasil berupa status."
//           ]
//         }
//       ].map(({ key, title, question, points }) => (
//         <section key={key} className="p-6 bg-white rounded shadow-lg mt-6">
//           <h3 className="text-md font-semibold text-green-700">{title}</h3>
//           <p className="text-gray-700 mt-3 leading-relaxed">
//             <strong>Pertanyaan:</strong> {question}
//           </p>
//           <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
//             {points.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//           <input
//             className="border p-2 rounded w-full mt-3"
//             placeholder="Jawaban Anda"
//             value={answers[key]}
//             onChange={(e) => handleChange(key, e.target.value)}
//           />
//           <button
//             className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B] cursor-pointer"
//             onClick={() => checkAnswer(key)}
//           >
//             Periksa
//           </button>
//           <button
//             className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 cursor-pointer"
//             onClick={() => clearAnswer(key)}
//           >
//             Hapus
//           </button>
//           {renderFeedback(key)}
//         </section>
//       ))}

//       {/* Navigasi */}
//       <div className="flex justify-between mt-10 px-4">
//         <button
//           onClick={() => (window.location.href = "/aktivitas-lookup")}
//           className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
//         >
//           ← Sebelumnya
//         </button>
//         <button
//           onClick={() => (window.location.href = "/rangkuman-pencarian")}
//           className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer"
//         >
//           Selanjutnya →
//         </button>
//       </div>
//     </Layout>
//   );
// }

import { useState } from "react";
import Layout from "../../components/Layout";
import axios from 'axios';

export default function VlookupLesson() {
  const correctAnswers = {
    tableReference: "status",
    scoreStatus: "sangat baik",
    unnecessaryColumn: "nama",
    lookupFormula: "=VLOOKUP(B3;$E$2:$G$6;3;true)"
  };

  const [answers, setAnswers] = useState({
    tableReference: "",
    scoreStatus: "",
    unnecessaryColumn: "",
    lookupFormula: ""
  });

  const [feedback, setFeedback] = useState({
    tableReference: null,
    scoreStatus: null,
    unnecessaryColumn: null,
    lookupFormula: null
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const checkAnswer = (field) => {
    const isCorrect =
      answers[field].trim().toLowerCase() === correctAnswers[field].trim().toLowerCase();
    setFeedback((prev) => ({ ...prev, [field]: isCorrect }));
  };

  const clearAnswer = (field) => {
    setAnswers((prev) => ({ ...prev, [field]: "" }));
    setFeedback((prev) => ({ ...prev, [field]: null }));
  };

  const submitLatihan = async () => {
    try {
      let correctCount = 0;
      Object.values(feedback).forEach((isCorrect) => {
        if (isCorrect === true) correctCount++;
      });
      const score = (correctCount / 4) * 100; // Skor berdasarkan 4 bagian latihan
      const token = localStorage.getItem('token');
      const nis = JSON.parse(localStorage.getItem('user')).nis;

      await axios.post(
        'http://localhost:5000/api/students/scores',
        { latihan1: score, latihan2: null, latihan3: null, latihan4: null, kuis1: null, kuis2: null, kuis3: null, kuis4: null, evaluasiAkhir: null },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(`Latihan selesai! Skor Anda: ${score}`);
    } catch (error) {
      console.error("Error submitting latihan:", error);
      alert("Terjadi kesalahan saat mengirim skor latihan.");
    }
  };

  const renderFeedback = (field) => {
    if (feedback[field] === null) return null;
    return (
      <div className={`flex items-center gap-2 mt-2 text-base font-semibold ${feedback[field] ? "text-green-700" : "text-red-700"}`}>
        {feedback[field] ? (
          <>
            <span>✅ Jawaban benar!</span>
          </>
        ) : (
          <>
            <span>❌ Jawaban salah. Coba lagi!</span>
          </>
        )}
      </div>
    );
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        MARI BERLATIH PENCARIAN DATA
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-6">
        <strong>Petunjuk:</strong> Baca studi kasus di bawah ini, lalu jawab pertanyaan pada setiap bagian yang mewakili langkah-langkah berpikir komputasional. Klik tombol <em>“Periksa”</em> untuk mengetahui apakah jawabanmu sudah tepat. Jangan khawatir, kamu bisa mencoba lagi jika belum benar!
      </p>

      {/* Studi Kasus remain unchanged */}
      {/* ... (keep the existing JSX for Studi Kasus) ... */}

      {/* Fungsi membuat section remain unchanged */}
      {[
        {
          key: "tableReference",
          title: "1. Dekomposisi",
          question: "Apa yang dicari dalam tabel referensi?",
          points: ["Mengidentifikasi tabel referensi.", "Menentukan nilai yang akan dicari.", "Menemukan hasil berdasarkan tabel referensi."]
        },
        {
          key: "scoreStatus",
          title: "2. Pengenalan Pola",
          question: "Status untuk nilai 85 adalah?",
          points: ["Nilai tertentu memiliki status tertentu.", "Rentang nilai yang sama akan menghasilkan nilai yang sama."]
        },
        {
          key: "unnecessaryColumn",
          title: "3. Abstraksi",
          question: "Kolom yang tidak diperlukan dalam pencocokan?",
          points: ["Fokus hanya pada kolom yang diperlukan.", "Mengabaikan data yang tidak relevan."]
        },
        {
          key: "lookupFormula",
          title: "4. Algoritma",
          question: "Tulis rumus VLOOKUP yang sesuai untuk membantu proses tersebut (rumus VLOOKUP untuk kolom pertama).",
          points: ["Bagaimana kamu bisa menentukan status kelulusan secara otomatis berdasarkan nilai siswa dan tabel referensi?", "Pikirkan bagaimana kamu mencocokkan nilai dengan rentang tertentu dan mendapatkan hasil berupa status."]
        }
      ].map(({ key, title, question, points }) => (
        <section key={key} className="p-6 bg-white rounded shadow-lg mt-6">
          <h3 className="text-md font-semibold text-green-700">{title}</h3>
          <p className="text-gray-700 mt-3 leading-relaxed">
            <strong>Pertanyaan:</strong> {question}
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2 text-sm md:text-base">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <input
            className="border p-2 rounded w-full mt-3"
            placeholder="Jawaban Anda"
            value={answers[key]}
            onChange={(e) => handleChange(key, e.target.value)}
          />
          <button
            className="mt-2 bg-[#255F38] text-white px-4 py-1 rounded hover:bg-[#2E6B4B] cursor-pointer"
            onClick={() => checkAnswer(key)}
          >
            Periksa
          </button>
          <button
            className="mt-2 ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 cursor-pointer"
            onClick={() => clearAnswer(key)}
          >
            Hapus
          </button>
          {renderFeedback(key)}
        </section>
      ))}

      {/* Tambahkan tombol untuk submit latihan */}
      <div className="flex justify-center mt-8">
        <button
          onClick={submitLatihan}
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selesai Latihan
        </button>
      </div>

      {/* Navigasi remain unchanged */}
      {/* ... (keep the existing JSX for navigation) ... */}
    </Layout>
  );
}