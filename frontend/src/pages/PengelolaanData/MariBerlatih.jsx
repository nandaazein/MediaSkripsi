// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// import axios from "axios";

// export default function SummaryLesson() {
//   const correctAnswers = {
//     sorting: "skor",
//     customSort: ["Adi dan Eka", "Adi", "Eka", "Adi Eka", "Adi,Eka", "Adi, Eka"],
//     filtering: "kelas",
//     filterCriteria: ["Sorting", "Sort", "Sort Z to A", "Descending"]
//   };

//   const [answers, setAnswers] = useState({
//     sorting: "",
//     customSort: "",
//     filtering: "",
//     filterCriteria: "",
//   });

//   useEffect(() => {
//     if (!document.querySelector('link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]')) {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
//       document.head.appendChild(link);
//     }

//     if (!document.querySelector('script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]')) {
//       const script = document.createElement("script");
//       script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
//       script.async = true;
//       script.onload = () => {
//         if (window.ej && window.ej.spreadsheet && document.getElementById("spreadsheet1") && !document.querySelector("#spreadsheet1 .e-spreadsheet")) {
//           new window.ej.spreadsheet.Spreadsheet({
//             sheets: [
//               {
//                 name: "Sheet1",
//                 columns: [{ width: 120 }, { width: 120 }, { width: 120 }],
//                 rows: [
//                   {
//                     cells: [
//                       { value: "Nama Siswa", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
//                       { value: "Kelas", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
//                       { value: "Skor", style: { fontWeight: "bold", color: "white", backgroundColor: "darkgreen", textAlign: "center" } },
//                     ],
//                   },
//                   { cells: [{ value: "Rani", style: { textAlign: "center" } }, { value: "8A", style: { textAlign: "center" } }, { value: 92, format: "#,##0", style: { textAlign: "center" } }] },
//                   { cells: [{ value: "Adi", style: { textAlign: "center" } }, { value: "8B", style: { textAlign: "center" } }, { value: 78, format: "#,##0", style: { textAlign: "center" } }] },
//                   { cells: [{ value: "Siti", style: { textAlign: "center" } }, { value: "8C", style: { textAlign: "center" } }, { value: 85, format: "#,##0", style: { textAlign: "center" } }] },
//                   { cells: [{ value: "Dedi", style: { textAlign: "center" } }, { value: "8A", style: { textAlign: "center" } }, { value: 88, format: "#,##0", style: { textAlign: "center" } }] },
//                   { cells: [{ value: "Eka", style: { textAlign: "center" } }, { value: "8B", style: { textAlign: "center" } }, { value: 75, format: "#,##0", style: { textAlign: "center" } }] },
//                   { cells: [{ value: "Fani", style: { textAlign: "center" } }, { value: "8C", style: { textAlign: "center" } }, { value: 90, format: "#,##0", style: { textAlign: "center" } }] },
//                 ],
//               },
//             ],
//           }).appendTo("#spreadsheet1");
//         }
//       };
//       document.body.appendChild(script);
//     }
//   }, []);

//   const handleChange = (field, value) => {
//     setAnswers((prev) => ({ ...prev, [field]: value }));
//   };

//   const submitLatihan = async () => {
//     const allAnswered = Object.values(answers).every((answer) => answer.trim() !== "");
//     if (!allAnswered) {
//       alert("Semua soal harus dijawab!");
//       return;
//     }

//     try {
//       let correctCount = 0;
//       Object.keys(correctAnswers).forEach((field) => {
//         let isCorrect = false;
//         if (Array.isArray(correctAnswers[field])) {
//           isCorrect = correctAnswers[field].some(
//             (correct) => answers[field].trim().toLowerCase() === correct.trim().toLowerCase()
//           );
//         } else {
//           isCorrect = answers[field].trim().toLowerCase() === correctAnswers[field].trim().toLowerCase();
//         }
//         if (isCorrect) correctCount++;
//       });
//       const score = (correctCount / 4) * 100;

//       const token = localStorage.getItem("token");
//       const user = localStorage.getItem("user");
//       if (!token || !user) {
//         alert("Silakan login kembali!");
//         return;
//       }
//       const nis = JSON.parse(user).nis;
//       if (!nis) {
//         alert("NIS tidak ditemukan!");
//         return;
//       }

//       await axios.post(
//         `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${nis}`,
//         {
//           latihan1: null,
//           latihan2: null,
//           latihan3: null,
//           latihan4: score,
//           kuis1: null,
//           kuis2: null,
//           kuis3: null,
//           kuis4: null,
//           evaluasi_akhir: null,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Latihan selesai!");
//       window.location.href = "/rangkuman-peringkasan";
//     } catch (error) {
//       console.error("Error saat mengirim latihan:", error);
//       if (error.response) {
//         alert(`Gagal mengirim skor: ${error.response.data.message || error.response.statusText}`);
//       } else if (error.request) {
//         alert("Server tidak merespons!");
//       } else {
//         alert(`Kesalahan: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <Layout>
//       <div className="p-4 bg-[darkgreen] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         BERLATIH PENGELOLAAN DATA
//       </div>

//       {/* Petunjuk Umum */}
//       <section className="p-4 mb-6 bg-green-100 rounded shadow-md">
//         <h3 className="text-lg font-semibold text-[#255F38] mb-2">Petunjuk Umum</h3>
//         <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside md:text-base">
//           <li>Bacalah studi kasus di bawah ini dengan saksama.</li>
//           <li>Jawab setiap pertanyaan pada bagian yang yang telah disediakan.</li>
//           <li>Setelah selesai menjawab semua pertanyaan, klik tombol <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.</li>
//         </ol>
//       </section>

//       <div className="p-6 mt-6 bg-white rounded shadow-lg">
//         <h3 className="font-semibold text-green-700 text-md">
//           Kasus: Kelola Data Lomba Pidato
//         </h3>
//         <p className="mt-3 leading-relaxed text-justify text-gray-700">
//           Kamu membantu Budi mengelola data lomba pidato. Gunakan <strong>sorting</strong> untuk mengurutkan skor dan <strong>filtering</strong> untuk menampilkan siswa kelas 8A.
//         </p>

//         <div className="flex justify-center w-full px-4">
//           <div id="spreadsheet1" className="w-full max-w-full md:max-w-screen-md" style={{ height: "400px" }}></div>
//         </div>
//       </div>

//       {[
//         {
//           key: "sorting",
//           title: "1. Memecah Masalah (Dekomposisi)",
//           question: "Kolom apa yang bisa diurutkan dari tertinggi ke terendah?",
//           points: [
//             "Lihat kolom yang dapat diurutkan.",
//             "Gunakan sorting descending (Z-A) untuk urutan tertinggi ke terendah.",
//           ],
//         },
//         {
//           key: "customSort",
//           title: "2. Mencari Pola (Pengenalan Pola)",
//           question: "Setelah diterapkan filter untuk kelas 8B, siapa saja yang muncul di tabel?",
//           points: [
//             "Lihat data yang muncul setelah filter kelas diubah menjadi 8B.",
//             "Perhatikan kolom nama dan skor.",
//             "Tulis nama-nama siswa yang tampil setelah filtering",
//           ],
//         },
//         {
//           key: "filtering",
//           title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
//           question: "Kolom apa yang bisa diterapkan filtering jika ingin menampilkan siswa berdasarkan kelasnya?",
//           points: [
//             "Pilih kolom yang dapat diterapkan filtering.",
//             "Abaikan kolom yang tidak relevan.",
//           ],
//         },
//         {
//           key: "filterCriteria",
//           title: "4. Membuat Langkah-langkah (Algoritma)",
//           question: "Jika ingin menampilkan siswa dari yang skor tertinggi ke terendah, apa yang harus digunakan?",
//           points: [
//             "Lihat kolom skor dan perhatikan apakah data perlu diurutkan atau disaring.",
//             "Data tidak dihilangkan, hanya diubah urutannya.",
//           ],
//         },
//       ].map(({ key, title, question, points }) => (
//         <section key={key} className="p-6 mt-6 bg-white rounded shadow-lg">
//           <h3 className="font-semibold text-green-700 text-md">{title}</h3>
//           <p className="mt-3 leading-relaxed text-gray-700">
//             <strong>Pertanyaan:</strong> {question}
//           </p>
//           <ul className="mt-2 ml-6 text-sm text-gray-700 list-disc md:text-base">
//             {points.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//           <input
//             className="w-full p-2 mt-3 border rounded"
//             placeholder="Jawaban Anda"
//             value={answers[key]}
//             onChange={(e) => handleChange(key, e.target.value)}
//           />
//         </section>
//       ))}

//       <div className="flex justify-center mt-8">
//         <button
//           onClick={submitLatihan}
//           className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md hover:bg-green-700"
//         >
//           Selesai Latihan
//         </button>
//       </div>
//     </Layout>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";

export default function SummaryLesson() {
  const navigate = useNavigate();

  const correctAnswers = {
    sorting: "skor",
    customSort: ["Adi dan Eka", "Adi", "Eka", "Adi Eka", "Adi,Eka", "Adi, Eka"],
    filtering: "kelas",
    filterCriteria: ["Sorting", "Sort", "Sort Z to A", "Descending"],
  };

  const [answers, setAnswers] = useState({
    sorting: "",
    customSort: "",
    filtering: "",
    filterCriteria: "",
  });

  useEffect(() => {
    if (
      !document.querySelector(
        'link[href="https://cdn.syncfusion.com/ej2/19.1.56/material.css"]'
      )
    ) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.syncfusion.com/ej2/19.1.56/material.css";
      document.head.appendChild(link);
    }

    if (
      !document.querySelector(
        'script[src="https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.syncfusion.com/ej2/19.1.56/dist/ej2.min.js";
      script.async = true;
      script.onload = () => {
        if (
          window.ej &&
          window.ej.spreadsheet &&
          document.getElementById("spreadsheet1") &&
          !document.querySelector("#spreadsheet1 .e-spreadsheet")
        ) {
          new window.ej.spreadsheet.Spreadsheet({
            sheets: [
              {
                name: "Sheet1",
                columns: [{ width: 120 }, { width: 120 }, { width: 120 }],
                rows: [
                  {
                    cells: [
                      {
                        value: "Nama Siswa",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Kelas",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                      {
                        value: "Skor",
                        style: {
                          fontWeight: "bold",
                          color: "white",
                          backgroundColor: "darkgreen",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Rani", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      {
                        value: 92,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Adi", style: { textAlign: "center" } },
                      { value: "8B", style: { textAlign: "center" } },
                      {
                        value: 78,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Siti", style: { textAlign: "center" } },
                      { value: "8C", style: { textAlign: "center" } },
                      {
                        value: 85,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Dedi", style: { textAlign: "center" } },
                      { value: "8A", style: { textAlign: "center" } },
                      {
                        value: 88,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Eka", style: { textAlign: "center" } },
                      { value: "8B", style: { textAlign: "center" } },
                      {
                        value: 75,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                  {
                    cells: [
                      { value: "Fani", style: { textAlign: "center" } },
                      { value: "8C", style: { textAlign: "center" } },
                      {
                        value: 90,
                        format: "#,##0",
                        style: { textAlign: "center" },
                      },
                    ],
                  },
                ],
              },
            ],
          }).appendTo("#spreadsheet1");
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const submitLatihan = async () => {
    const allAnswered = Object.values(answers).every(
      (answer) => answer.trim() !== ""
    );
    if (!allAnswered) {
      Swal.fire({
        title: "Belum Selesai",
        text: "Semua soal harus dijawab!",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
      return;
    }

    try {
      let correctCount = 0;
      Object.keys(correctAnswers).forEach((field) => {
        let isCorrect = false;
        if (Array.isArray(correctAnswers[field])) {
          isCorrect = correctAnswers[field].some(
            (correct) =>
              answers[field].trim().toLowerCase() ===
              correct.trim().toLowerCase()
          );
        } else {
          isCorrect =
            answers[field].trim().toLowerCase() ===
            correctAnswers[field].trim().toLowerCase();
        }
        if (isCorrect) correctCount++;
      });
      const score = (correctCount / 4) * 100;

      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        Swal.fire({
          title: "Autentikasi Gagal",
          text: "Silakan login kembali!",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }
      const nis = JSON.parse(user).nis;
      if (!nis) {
        Swal.fire({
          title: "Kesalahan",
          text: "NIS tidak ditemukan!",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/scores/${nis}`,
        {
          latihan1: null,
          latihan2: null,
          latihan3: null,
          latihan4: score,
          kuis1: null,
          kuis2: null,
          kuis3: null,
          kuis4: null,
          evaluasi_akhir: null,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      Swal.fire({
        title: "Berhasil",
        text: "Latihan selesai!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      }).then(() => {
        navigate("/rangkuman-peringkasan");
      });
    } catch (error) {
      console.error("Error saat mengirim latihan:", error);
      if (error.response) {
        Swal.fire({
          title: "Kesalahan",
          text: `Gagal mengirim skor: ${
            error.response.data.message || error.response.statusText
          }`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else if (error.request) {
        Swal.fire({
          title: "Kesalahan",
          text: "Server tidak merespons!",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else {
        Swal.fire({
          title: "Kesalahan",
          text: `Kesalahan: ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      }
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        BERLATIH PENGELOLAAN DATA
      </div>

      {/* Petunjuk Umum */}
      <section className="p-4 mb-6 bg-green-100 rounded shadow-md">
        <h3 className="text-lg font-semibold text-[#255F38] mb-2">
          Petunjuk Umum
        </h3>
        <ol className="space-y-1 text-sm text-gray-700 list-decimal list-inside md:text-base">
          <li>Bacalah studi kasus di bawah ini dengan saksama.</li>
          <li>
            Jawab setiap pertanyaan pada bagian yang yang telah disediakan.
          </li>
          <li>
            Setelah selesai menjawab semua pertanyaan, klik tombol{" "}
            <em>“Selesai Latihan”</em> untuk mengumpulkan jawabanmu.
          </li>
        </ol>
      </section>

      <div className="p-6 mt-6 bg-white rounded shadow-lg">
        <h3 className="font-semibold text-green-700 text-md">
          Kasus: Kelola Data Lomba Pidato
        </h3>
        <p className="mt-3 leading-relaxed text-justify text-gray-700">
          Kamu membantu Budi mengelola data lomba pidato. Gunakan{" "}
          <strong>sorting</strong> untuk mengurutkan skor dan{" "}
          <strong>filtering</strong> untuk menampilkan siswa kelas 8A.
        </p>

        <div className="flex justify-center w-full px-4">
          <div
            id="spreadsheet1"
            className="w-full max-w-full md:max-w-screen-md"
            style={{ height: "400px" }}
          ></div>
        </div>
      </div>

      {[
        {
          key: "sorting",
          title: "1. Memecah Masalah (Dekomposisi)",
          question: "Kolom apa yang bisa diurutkan dari tertinggi ke terendah?",
          points: [
            "Lihat kolom yang dapat diurutkan.",
            "Gunakan sorting descending (Z-A) untuk urutan tertinggi ke terendah.",
          ],
        },
        {
          key: "customSort",
          title: "2. Mencari Pola (Pengenalan Pola)",
          question:
            "Setelah diterapkan filter untuk kelas 8B, siapa saja yang muncul di tabel?",
          points: [
            "Lihat data yang muncul setelah filter kelas diubah menjadi 8B.",
            "Perhatikan kolom nama dan skor.",
            "Tulis nama-nama siswa yang tampil setelah filtering",
          ],
        },
        {
          key: "filtering",
          title: "3. Mengabaikan yang Tidak Penting (Abstraksi)",
          question:
            "Kolom apa yang dapat diterapkan filtering jika ingin menampilkan siswa berdasarkan informasi 8A, 8B dan 8c?",
          points: [
            "Pilih kolom yang dapat diterapkan filtering.",
            "Abaikan kolom yang tidak relevan.",
          ],
        },
        {
          key: "filterCriteria",
          title: "4. Membuat Langkah-langkah (Algoritma)",
          question:
            "Jika ingin menampilkan siswa dari yang skor tertinggi ke terendah, apa yang harus digunakan?",
          points: [
            "Lihat kolom skor dan perhatikan apakah data memerlukan sorting atau filtering.",
            "Data tidak dihilangkan, hanya diubah urutannya.",
          ],
        },
      ].map(({ key, title, question, points }) => (
        <section key={key} className="p-6 mt-6 bg-white rounded shadow-lg">
          <h3 className="font-semibold text-green-700 text-md">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-700">
            <strong>Pertanyaan:</strong> {question}
          </p>
          <ul className="mt-2 ml-6 text-sm text-gray-700 list-disc md:text-base">
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <input
            className="w-full p-2 mt-3 border rounded"
            placeholder="Jawaban Anda"
            value={answers[key]}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        </section>
      ))}

      <div className="flex justify-center mt-8">
        <button
          onClick={submitLatihan}
          className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md cursor-pointer hover:bg-green-700"
        >
          Selesai Latihan
        </button>
      </div>
    </Layout>
  );
}
