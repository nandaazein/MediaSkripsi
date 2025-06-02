import React, { useState } from "react";
import Layout from "../../components/Layout";
import {
  BookOpen,
  Lightbulb,
  BarChart,
  Filter,
  Code,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PengelolaanData() {
  const navigate = useNavigate();

  // State untuk simulasi sorting dan filtering
  const initialData = [
    { id: 1, nama: "Aisyah", nilai: 85, kelas: "8A" },
    { id: 2, nama: "Budi", nilai: 70, kelas: "8B" },
    { id: 3, nama: "Citra", nilai: 95, kelas: "8A" },
    { id: 4, nama: "Dani", nilai: 60, kelas: "8B" },
  ];

  const [sortData, setSortData] = useState([...initialData]);
  const [sortOrder, setSortOrder] = useState("none");
  const [filterData, setFilterData] = useState([...initialData]);
  const [filterKelas, setFilterKelas] = useState("Semua");

  // Fungsi untuk sorting
  const handleSort = (order) => {
    setSortOrder(order);
    let sortedData = [...initialData];
    if (order === "ascending") {
      sortedData.sort((a, b) => a.nilai - b.nilai);
    } else if (order === "descending") {
      sortedData.sort((a, b) => b.nilai - b.nilai);
    }
    setSortData(sortedData);
  };

  // Fungsi untuk filtering
  const handleFilter = (kelas) => {
    setFilterKelas(kelas);
    if (kelas === "Semua") {
      setFilterData([...initialData]);
    } else {
      setFilterData(initialData.filter((item) => item.kelas === kelas));
    }
  };

  // State untuk Latihan Pemahaman: Abstraksi
  const [abstraksiAnswer, setAbstraksiAnswer] = useState("");
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (value) => {
    setAbstraksiAnswer(value);
  };

  const checkAbstraksiAnswers = () => {
    const correctAnswer = "Kelas";
    setAbstraksiFeedback(
      abstraksiAnswer === correctAnswer
        ? "Benar! Hanya kolom Kelas yang diperlukan untuk menyaring siswa kelas 8A."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswer("");
    setAbstraksiFeedback("");
    setAbstraksiAnswered(false);
  };

  // State untuk Latihan Pemahaman: Algoritma
  const [algoritmaAnswer, setAlgoritmaAnswer] = useState("");
  const [algoritmaFeedback, setAlgoritmaFeedback] = useState("");
  const [algoritmaAnswered, setAlgoritmaAnswered] = useState(false);

  const handleAlgoritmaChange = (value) => {
    setAlgoritmaAnswer(value);
  };

  const checkAlgoritmaAnswer = () => {
    const correctAnswer = "Filtering";
    setAlgoritmaFeedback(
      algoritmaAnswer === correctAnswer
        ? "Benar! Langkah-langkah filtering melibatkan memilih kolom Kategori, menetapkan kriteria 'Pramuka', dan menerapkan filter."
        : "Jawaban salah, ayo coba lagi. Pastikan Anda memilih langkah yang mencakup semua aspek algoritma untuk filtering."
    );
    setAlgoritmaAnswered(true);
  };

  const resetAlgoritmaAnswer = () => {
    setAlgoritmaAnswer("");
    setAlgoritmaFeedback("");
    setAlgoritmaAnswered(false);
  };

  // State untuk Kuis Pemahaman
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [feedback, setFeedback] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const [isAnswered, setIsAnswered] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const questions = [
  {
    question: "Fungsi utama dari sorting dalam pengelolaan data adalah ....",
    options: [
      "A. Menyaring data berdasarkan kriteria",
      "B. Mengurutkan data agar lebih mudah dianalisis",
      "C. Menjumlahkan data",
      "D. Menghapus data duplikat",
    ],
    correctAnswer: "B. Mengurutkan data agar lebih mudah dianalisis",
    explanation: "Sorting mengurutkan data untuk memudahkan analisis, seperti mengurutkan nilai dari tertinggi ke terendah.",
  },
  {
    question: "Filtering dalam spreadsheet digunakan untuk ....",
    options: [
      "A. Mengurutkan data dari kecil ke besar",
      "B. Menampilkan hanya data yang memenuhi kriteria tertentu",
      "C. Menghitung jumlah data",
      "D. Menggabungkan data dari beberapa kolom",
    ],
    correctAnswer: "B. Menampilkan hanya data yang memenuhi kriteria tertentu",
    explanation: "Filtering menyaring data berdasarkan kriteria, seperti menampilkan hanya siswa dari kelas 8A.",
  },
  {
    question: "Langkah yang termasuk dalam dekomposisi pengelolaan data adalah ....",
    options: [
      "A. Membuat grafik dari data",
      "B. Menentukan tujuan pengelolaan data",
      "C. Menghitung rata-rata data",
      "D. Membuat presentasi",
    ],
    correctAnswer: "B. Menentukan tujuan pengelolaan data",
    explanation: "Dekomposisi melibatkan menentukan tujuan, seperti apakah akan mengurutkan atau menyaring data.",
  },
  {
    question: "Dalam abstraksi, yang harus dilakukan adalah ....",
    options: [
      "A. Mengumpulkan semua data",
      "B. Mengabaikan data yang tidak relevan",
      "C. Mengurutkan data",
      "D. Membuat tabel baru",
    ],
    correctAnswer: "B. Mengabaikan data yang tidak relevan",
    explanation: "Abstraksi berfokus pada memilih data penting dan mengabaikan yang tidak diperlukan.",
  },
  {
    question: "Langkah pertama dalam menerapkan filtering adalah ....",
    options: [
      "A. Memilih kolom untuk diurutkan",
      "B. Memblok seluruh data termasuk header",
      "C. Menghitung jumlah data",
      "D. Mengklik tombol Sort",
    ],
    correctAnswer: "B. Memblok seluruh data termasuk header",
    explanation: "Filtering dimulai dengan memblok data untuk memastikan semua kolom dapat difilter dengan benar.",
  },
];



  const handleAnswerChange = (option) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    const currentCorrect = questions[currentQuestion - 1].correctAnswer;
    if (option === currentCorrect) {
      setFeedback((prev) => ({
        ...prev,
        [currentQuestion]: `Benar! ${currentCorrect}. ${questions[currentQuestion - 1].explanation}`,
      }));
    } else {
      setFeedback((prev) => ({
        ...prev,
        [currentQuestion]: "Jawaban salah, ayo coba lagi.",
      }));
    }
    setIsAnswered((prev) => ({ ...prev, [currentQuestion]: true }));
  };

  const resetQuizAnswer = () => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: "" }));
    setFeedback((prev) => ({ ...prev, [currentQuestion]: "" }));
    setIsAnswered((prev) => ({ ...prev, [currentQuestion]: false }));
  };

  const goToPrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setFeedback((prev) => ({ ...prev, [currentQuestion - 1]: "" }));
      if (isAnswered[currentQuestion - 1]) {
        alert("Soal ini telah dijawab. Silakan lanjut ke soal berikutnya atau hapus jawaban untuk memilih ulang.");
      }
    }
  };

  const goToNext = () => {
    if (!isAnswered[currentQuestion]) {
      alert("Silakan jawab soal ini terlebih dahulu.");
      return;
    }
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
      setFeedback((prev) => ({ ...prev, [currentQuestion + 1]: "" }));
    } else if (
      currentQuestion === 5 &&
      isAnswered[1] &&
      isAnswered[2] &&
      isAnswered[3] &&
      isAnswered[4] &&
      isAnswered[5] &&
      feedback[currentQuestion].includes("Benar")
    ) {
      alert("Kamu sudah selesai mengerjakan semua soal, kerja bagus!");
    }
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        D. PENGELOLAAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>
            Peserta didik mampu mengelola data menggunakan teknik Sorting dan Filtering.
          </li>
          <li>
            Peserta didik mampu menerapkan pendekatan Computational Thinking dalam menyelesaikan permasalahan yang berkaitan dengan pengelolaan data.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data yang perlu dikelola agar lebih mudah dianalisis dan digunakan dalam pengambilan keputusan. Pengelolaan data adalah proses menyusun, mengurutkan, dan menyaring data agar lebih terstruktur serta dapat diakses dengan cepat. Jika dilakukan secara manual, pengelolaan data dapat memakan waktu yang lama dan rentan terhadap kesalahan. Oleh karena itu, kita dapat menggunakan fitur sorting dan filtering dalam spreadsheet untuk proses yang lebih efisien.
      </p>

      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Pengelolaan Data Penting?
      </div>
      <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Memudahkan pencarian</strong> informasi → Data rapi lebih mudah ditemukan.
        </li>
        <li className="text-justify">
          <strong>Meningkatkan efisiensi</strong> kerja → Sorting dan filtering hemat waktu.
        </li>
        <li className="text-justify">
          <strong>Membantu pengambilan</strong> keputusan → Data terstruktur memberi informasi akurat.
        </li>
        <li className="text-justify">
          <strong>Menghindari kesalahan</strong> → Data tidak terorganisir bisa menyebabkan kesalahan analisis.
        </li>
      </ul>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-2">
        Pendekatan <i>Computational Thinking</i> (CT) membantu mengelola data secara sistematis melalui <i>decomposition</i> (memecah masalah), <i>pattern recognition</i> (mengidentifikasi pola), dan <i>abstraction</i> (fokus pada informasi penting).
      </p>

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum mengelola data, kita perlu pahami langkah-langkah kecil:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Tentukan tujuan</strong> → Ingin mengurutkan atau menyaring data?
          </li>
          <li className="text-justify">
            <strong>Pilih teknik</strong>:
            <div className="ml-4 mt-2 space-y-4">
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. Sorting</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Sorting</strong> mengurutkan data untuk analisis, misalnya nilai tertinggi ke terendah.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  Blok kolom → Klik kanan → Pilih Sort → Pilih A-Z atau Z-A
                </pre>
              </section>
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">2. Filtering</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Filtering</strong> menampilkan data tertentu, misalnya hanya kelas 8A.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  Blok kolom → Klik kanan → Pilih Filter → Centang "8A"
                </pre>
              </section>
            </div>
          </li>
          <li className="text-justify">
            <strong>Tentukan langkah</strong> → Pilih kolom dan metode pengurutan atau penyaringan.
          </li>
        </ul>
      </div>

      {/* Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="mr-2 w-5 h-5" /> Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah menentukan cara mengelola data, kenali pola dalam data melalui simulasi sorting dan filtering berikut.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Amati hasil sorting</strong> → Apakah data lebih mudah dibaca, misalnya nilai tertinggi di atas?
          </li>
          <li className="text-justify">
            <strong>Analisis hasil filtering</strong> → Apakah informasi sesuai kebutuhan?
          </li>
        </ul>
        {/* Visualisasi Interaktif: Simulasi Sorting */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-lg mb-4">
            <CheckCircle className="w-5 h-5 mr-2" /> Simulasi Sorting
          </h3>
          <p className="text-gray-700 mb-4 text-justify">
            Simulasi ini membantu memahami cara mengurutkan data siswa berdasarkan nilai. Pilih opsi pengurutan, lalu klik "Reset" untuk kembali ke data awal.
          </p>
          <div className="flex justify-between mb-4 items-center">
            <div>
              <label className="text-gray-700 mr-2">Urutkan berdasarkan nilai:</label>
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="p-2 border rounded w-full sm:w-auto"
              >
                <option value="none">Tanpa Urutan</option>
                <option value="ascending">Ascending (A-Z)</option>
                <option value="descending">Descending (Z-A)</option>
              </select>
            </div>
            <button
              onClick={() => {
                setSortData([...initialData]);
                setSortOrder("none");
              }}
              className="bg-[#255F38] text-white px-4 py-2 rounded hover:bg-[#1E4D2E] transition duration-300 cursor-pointer"
            >
              Reset
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-green-800 w-full text-center">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                  <th className="border border-green-600 px-4 py-2">Nilai</th>
                  <th className="border border-green-600 px-4 py-2">Kelas</th>
                </tr>
              </thead>
              <tbody>
                {sortData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="border border-green-600 px-4 py-2">{item.nama}</td>
                    <td className="border border-green-600 px-4 py-2">{item.nilai}</td>
                    <td className="border border-green-600 px-4 py-2">{item.kelas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Visualisasi Interaktif: Simulasi Filtering */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-lg mb-4">
            <CheckCircle className="w-5 h-5 mr-2" /> Simulasi Filtering
          </h3>
          <p className="text-gray-700 mb-4 text-justify">
            Simulasi ini membantu memahami cara menyaring data siswa berdasarkan kelas. Pilih kelas, lalu klik "Reset" untuk kembali ke data awal.
          </p>
          <div className="flex justify-between mb-4 items-center">
            <div>
              <label className="text-gray-700 mr-2">Filter berdasarkan kelas:</label>
              <select
                value={filterKelas}
                onChange={(e) => handleFilter(e.target.value)}
                className="p-2 border rounded w-full sm:w-auto"
              >
                <option value="Semua">Semua Kelas</option>
                <option value="8A">8A</option>
                <option value="8B">8B</option>
              </select>
            </div>
            <button
              onClick={() => {
                setFilterData([...initialData]);
                setFilterKelas("Semua");
              }}
              className="bg-[#255F38] text-white px-4 py-2 rounded hover:bg-[#1E4D2E] transition duration-300 cursor-pointer"
            >
              Reset
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-green-800 w-full text-center">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                  <th className="border border-green-600 px-4 py-2">Nilai</th>
                  <th className="border border-green-600 px-4 py-2">Kelas</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="border border-green-600 px-4 py-2">{item.nama}</td>
                    <td className="border border-green-600 px-4 py-2">{item.nilai}</td>
                    <td className="border border-green-600 px-4 py-2">{item.kelas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah mengamati hasil simulasi sorting dan filtering, kamu dapat melihat bagaimana data menjadi lebih terorganisir dan mudah dianalisis sesuai kebutuhan.
        </p>
      </div>

      {/* Abstraksi */}
      <div className="bg-white p-5 border border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-2 w-5 h-5" /> Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
          Abstraksi berarti fokus pada data yang penting dan mengabaikan informasi yang tidak relevan. Ini membantu agar data lebih mudah dibaca, dianalisis, dan digunakan sesuai kebutuhan.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Abaikan kolom yang tidak diperlukan</strong> → Misalnya kolom Alamat tidak perlu ditampilkan.
          </li>
          <li className="text-justify">
            <strong>Tampilkan hanya kolom yang relevan</strong> → Seperti Nama, Nilai, dan Kelas.
          </li>
          <li className="text-justify">
            <strong>Saring data sesuai kebutuhan</strong> → Gunakan filtering untuk menampilkan hanya siswa kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Gunakan sorting bila perlu</strong> → Urutkan nilai dari tertinggi ke terendah agar data penting mudah terlihat.
          </li>
        </ul>


        {/* Latihan Pemahaman: Abstraksi */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Memilih Data Penting
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Kamu ingin menyaring siswa dari kelas 8A dari tabel nama, kelas, nilai, dan alamat. Pilih kolom yang diperlukan:
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Kelas"
                  checked={abstraksiAnswer === "Kelas"}
                  onChange={() => handleAbstraksiChange("Kelas")}
                  className="mr-2"
                />
                1. Kolom Kelas
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Nama"
                  checked={abstraksiAnswer === "Nama"}
                  onChange={() => handleAbstraksiChange("Nama")}
                  className="mr-2"
                />
                2. Kolom Nama
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Alamat"
                  checked={abstraksiAnswer === "Alamat"}
                  onChange={() => handleAbstraksiChange("Alamat")}
                  className="mr-2"
                />
                3. Kolom Alamat
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAbstraksiAnswers}
              className="bg-[#1B5E20] text-white px-5 py-2 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetAbstraksiAnswers}
              className="bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {abstraksiFeedback && (
            <p
              className={
                abstraksiFeedback.includes("Benar")
                  ? "text-base mt-2 font-bold text-green-700"
                  : "text-base mt-2 font-bold text-red-700"
              }
            >
              {abstraksiFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Algoritma */}
      <div className="bg-white p-5 border border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="mr-2 w-5 h-5" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Setelah memahami data dan menentukan informasi yang dicari, kita membuat langkah-langkah sistematis untuk menerapkan sorting dan filtering di spreadsheet.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Sorting (Pengurutan):
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li>Blok semua data, termasuk header.</li>
          <li>Klik kanan, pilih <em>Sort</em>.</li>
          <li>Pilih <strong>Sort A to Z</strong> (kecil ke besar) atau <strong>Sort Z to A</strong> (besar ke kecil).</li>
          <li>Untuk beberapa kolom, gunakan <strong>Custom Sort</strong>.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Filtering (Penyaringan):
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li>Blok semua data, termasuk header.</li>
          <li>Klik kanan pada kolom tertentu, pilih <em>Filter</em>.</li>
          <li>Pilih kriteria, misalnya hanya kelas "8A".</li>
          <li>Untuk semua data, pilih <strong>"Select All"</strong>.</li>
        </ul>
        {/* Latihan Pemahaman: Algoritma */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Langkah Algoritmik untuk Filtering
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Kamu ingin menampilkan hanya kegiatan dengan kategori "Pramuka" dari tabel kegiatan. Manakah langkah-langkah algoritmik yang benar?
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Sorting"
                  checked={algoritmaAnswer === "Sorting"}
                  onChange={() => handleAlgoritmaChange("Sorting")}
                  className="mr-2"
                />
                1. Blok kolom Kategori, pilih Sort Z-A untuk mengurutkan data
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Filtering"
                  checked={algoritmaAnswer === "Filtering"}
                  onChange={() => handleAlgoritmaChange("Filtering")}
                  className="mr-2"
                />
                2. Blok kolom Kategori, pilih Filter, lalu centang "Pramuka"
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Manual"
                  checked={algoritmaAnswer === "Manual"}
                  onChange={() => handleAlgoritmaChange("Manual")}
                  className="mr-2"
                />
                3. Salin data dengan kategori Pramuka secara manual ke tabel baru
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAlgoritmaAnswer}
              className="bg-[#1B5E20] text-white px-5 py-2 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetAlgoritmaAnswer}
              className="bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {algoritmaFeedback && (
            <p
              className={
                algoritmaFeedback.includes("Benar")
                  ? "text-base mt-2 font-bold text-green-700"
                  : "text-base mt-2 font-bold text-red-700"
              }
            >
              {algoritmaFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Kuis Pemahaman */}
      <div className="bg-white p-5 border border-gray-300 space-y-4 mt-12">
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Pengelolaan Data</h3>
        <p className="text-gray-700 text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahamanmu tentang sorting dan filtering:
        </p>
        <div className="bg-yellow-50 p-4 border border-yellow-300 rounded mt-4 shadow-md">
          <div className="absolute -top-6 left-4 bg-yellow-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold shadow-lg">
            Soal {currentQuestion} dari 5
          </div>
          <div className="mt-8">
            <h4 className="font-semibold text-yellow-800 text-base mb-2">
              {questions[currentQuestion - 1].question}
            </h4>
            <div className="ml-6 text-gray-700 space-y-2">
              {questions[currentQuestion - 1].options.map((option, index) => (
                <div key={index} className="text-base">
                  <label className="flex items-center border border-gray-300 p-2 mb-2 rounded">
                    <input
                      type="radio"
                      name={`quiz${currentQuestion}`}
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={() => handleAnswerChange(option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {feedback[currentQuestion] && (
              <p
                className={
                  feedback[currentQuestion].includes("Benar")
                    ? "text-base mt-2 font-bold text-green-700"
                    : "text-base mt-2 font-bold text-red-700"
                }
              >
                {feedback[currentQuestion]}
              </p>
            )}
            <div className="mt-4 flex justify-between">
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="bg-[#B0BEC5] text-white px-4 py-2 rounded-lg hover:bg-[#90A4AE] transition duration-300 cursor-pointer disabled:opacity-50"
                  disabled={currentQuestion === 1}
                >
                  Sebelumnya
                </button>
                {feedback[currentQuestion] && (
                  <button
                    onClick={resetQuizAnswer}
                    className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
                  >
                    Hapus
                  </button>
                )}
              </div>
              {isAnswered[currentQuestion] && (
                <button
                  onClick={goToNext}
                  className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-yellow-900 transition duration-300 cursor-pointer"
                  disabled={currentQuestion === 5 && !isAnswered[currentQuestion]}
                >
                  {currentQuestion === 5 ? "Selesai" : "Soal Selanjutnya"}
                </button>
              )}
            </div>
            {currentQuestion === 5 && isAnswered[currentQuestion] && (
              <p className="mt-4 text-center text-yellow-800 font-bold text-base">
                Anda telah menyelesaikan semua soal! Klik "Sebelumnya" untuk meninjau.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <button
          onClick={() => navigate("/feedback2")}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => navigate("/contoh-pengelolaan")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
}