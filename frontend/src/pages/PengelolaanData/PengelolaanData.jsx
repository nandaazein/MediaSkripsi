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

export default function PengelolaanData() {
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
      sortedData.sort((a, b) => b.nilai - a.nilai); // Perbaikan: a.nilai - b.nilai diganti ke b.nilai - a.nilai untuk descending
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

  // State untuk Latihan Pemahaman: Dekomposisi
  const [dekomposisiAnswers, setDekomposisiAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");
  const [dekomposisiAnswered, setDekomposisiAnswered] = useState(false);

  const handleDekomposisiChange = (step) => {
    setDekomposisiAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkDekomposisiAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: false };
    const isCorrect =
      dekomposisiAnswers.step1 === correctAnswers.step1 &&
      dekomposisiAnswers.step2 === correctAnswers.step2 &&
      dekomposisiAnswers.step3 === correctAnswers.step3;
    setDekomposisiFeedback(
      isCorrect
        ? "Benar! Langkah yang tepat adalah menentukan tujuan dan memilih teknik sorting."
        : "Jawaban salah, ayo coba lagi."
    );
    setDekomposisiAnswered(true);
  };

  const resetDekomposisiAnswers = () => {
    setDekomposisiAnswers({ step1: false, step2: false, step3: false });
    setDekomposisiFeedback("");
    setDekomposisiAnswered(false);
  };

  // State untuk Latihan Pemahaman: Pengenalan Pola
  const [polaAnswer, setPolaAnswer] = useState("");
  const [polaFeedback, setPolaFeedback] = useState("");
  const [polaAnswered, setPolaAnswered] = useState(false);

  const handlePolaChange = (value) => {
    setPolaAnswer(value);
  };

  const checkPolaAnswer = () => {
    const correctAnswer = "Nilai tertinggi di atas";
    setPolaFeedback(
      polaAnswer === correctAnswer
        ? "Benar! Setelah sorting descending, nilai tertinggi berada di posisi atas."
        : "Jawaban salah, ayo coba lagi."
    );
    setPolaAnswered(true);
  };

  const resetPolaAnswer = () => {
    setPolaAnswer("");
    setPolaFeedback("");
    setPolaAnswered(false);
  };

  // State untuk Latihan Pemahaman: Abstraksi
  const [abstraksiAnswers, setAbstraksiAnswers] = useState({
    info1: false,
    info2: false,
    info3: false,
  });
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (info) => {
    setAbstraksiAnswers((prev) => ({ ...prev, [info]: !prev[info] }));
  };

  const checkAbstraksiAnswers = () => {
    const correctAnswers = { info1: true, info2: false, info3: false };
    const isCorrect =
      abstraksiAnswers.info1 === correctAnswers.info1 &&
      abstraksiAnswers.info2 === correctAnswers.info2 &&
      abstraksiAnswers.info3 === correctAnswers.info3;
    setAbstraksiFeedback(
      isCorrect
        ? "Benar! Hanya kolom Kelas yang diperlukan untuk menyaring siswa kelas 8A."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswers({ info1: false, info2: false, info3: false });
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
    const correctAnswer = "Langkah-langkah Filtering";
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
      question: "Apa fungsi utama dari sorting dalam pengelolaan data?",
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
      question: "Apa yang dilakukan oleh filtering dalam spreadsheet?",
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
      question: "Langkah apa yang termasuk dalam dekomposisi pengelolaan data?",
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
      question: "Dalam abstraksi, apa yang harus dilakukan?",
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
      question: "Apa langkah pertama dalam menerapkan filtering?",
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
            Memahami konsep pengelolaan data melalui teknik <i>Sorting</i> dan <i>Filtering</i> dalam <i>Spreadsheet</i>.
          </li>
          <li>
            Menggunakan pendekatan <i>Computational Thinking</i> untuk menyelesaikan permasalahan dalam pengelolaan data.
          </li>
          <li>
            Menerapkan teknik <i>Sorting</i> dan <i>Filtering</i> dalam studi kasus pengelolaan di lembar kerja.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data yang perlu dikelola agar lebih mudah dianalisis dan digunakan dalam pengambilan keputusan. Pengelolaan data adalah proses menyusun, mengurutkan, dan menyaring data agar lebih terstruktur serta dapat diakses dengan cepat. Jika dilakukan secara manual, pengelolaan data dapat memakan waktu yang lama dan rentan terhadap kesalahan. Oleh karena itu, kita dapat menggunakan fitur sorting (pengurutan) dan filtering (penyaringan) dalam spreadsheet untuk membantu proses ini secara lebih efisien.
      </p>

      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Pengelolaan Data Penting?
      </div>
      <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Memudahkan pencarian</strong> informasi → Data yang tersusun rapi lebih mudah ditemukan.
        </li>
        <li className="text-justify">
          <strong>Meningkatkan efisiensi</strong> kerja → Sorting dan filtering menghemat waktu dalam analisis data.
        </li>
        <li className="text-justify">
          <strong>Membantu pengambilan</strong> keputusan → Data yang tersusun dengan baik memberikan informasi yang lebih akurat.
        </li>
        <li className="text-justify">
          <strong>Menghindari kesalahan</strong> dalam pengolahan → Data yang tidak terorganisir dapat menyebabkan kesalahan dalam analisis.
        </li>
      </ul>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Pendekatan <i>Computational Thinking</i> (CT) membantu dalam mengelola data secara sistematis melalui beberapa langkah utama: <i>decomposition</i> (memecah masalah data yang kompleks menjadi bagian-bagian yang lebih kecil), <i>pattern recognition</i> (mengidentifikasi kesamaan atau pola dalam data), <i>abstraction</i> (memfokuskan pada informasi penting dan mengabaikan hal-hal yang tidak relevan).
      </p>

      {/* Visualisasi Interaktif: Simulasi Sorting */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md mt-6">
        <h3 className="font-semibold text-[#255F38] flex items-center text-lg mb-4">
          <CheckCircle className="w-5 h-5 mr-2" /> Simulasi Sorting
        </h3>
        <p className="text-gray-700 mb-4 text-justify">
          Coba urutkan data berdasarkan nilai siswa. Pilih opsi pengurutan, lalu klik "Reset" untuk mengembalikan data awal.
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
            className="bg-[#255F38] text-white px-4 py-2 rounded hover:bg-[#1E4D2E]"
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
          Coba saring data berdasarkan kelas siswa. Pilih kelas yang diinginkan, lalu klik "Reset" untuk mengembalikan data awal.
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
            className="bg-[#255F38] text-white px-4 py-2 rounded hover:bg-[#1E4D2E]"
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

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum mengelola data, kita harus memahami langkah-langkah kecil yang perlu dilakukan:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Tentukan tujuan</strong> pengelolaan data → Apakah ingin mengurutkan data agar lebih mudah dibaca atau menyaring data berdasarkan kriteria tertentu?
          </li>
          <li className="text-justify">
            <strong>Pilih teknik</strong> yang sesuai:
            <div className="ml-4 mt-2 space-y-4">
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. Sorting</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Sorting</strong> digunakan untuk mengurutkan data agar lebih mudah dianalisis. Misalnya, jika kita ingin mengetahui siswa dengan nilai tertinggi, kita bisa mengurutkan data dari yang terbesar ke terkecil (<i>descending</i>).
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  Blok kolom → Klik kanan → Pilih Sort → Pilih A-Z (ascending) atau Z-A (descending)
                </pre>
              </section>
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">2. Filtering</h3>
                <p className="text-gray-700 mt-2">
                  <strong>Filtering</strong> digunakan untuk menyaring atau menampilkan hanya data yang memenuhi kriteria tertentu sementara data lainnya disembunyikan. Misalnya, hanya menampilkan siswa dari kelas 8A.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  Blok kolom → Klik kanan → Pilih Filter → Centang data yang ingin ditampilkan (misalnya, "8A")
                </pre>
              </section>
            </div>
          </li>
          <li className="text-justify">
            <strong>Tentukan langkah-langkah</strong> dalam menerapkan sorting dan filtering → Misalnya, memilih kolom yang digunakan sebagai acuan dan menentukan metode pengurutan atau penyaringan.
          </li>
        </ul>
        {/* Latihan Pemahaman: Dekomposisi */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Memecah Masalah Pengelolaan Data
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Kamu ingin mengurutkan data penjualan berdasarkan harga dari tertinggi ke terendah. Pilih langkah-langkah yang tepat:
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step1}
                  onChange={() => handleDekomposisiChange("step1")}
                  className="mr-2"
                />
                1. Tentukan tujuan: mengurutkan data berdasarkan harga.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step2}
                  onChange={() => handleDekomposisiChange("step2")}
                  className="mr-2"
                />
                2. Pilih teknik sorting untuk mengurutkan data.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step3}
                  onChange={() => handleDekomposisiChange("step3")}
                  className="mr-2"
                />
                3. Hitung total penjualan.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkDekomposisiAnswers}
              className="bg-[#1B5E20] text-white px-5 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetDekomposisiAnswers}
              className="bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {dekomposisiFeedback && (
            <p
              className={`text-base mt-2 font-bold ${
                dekomposisiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {dekomposisiFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="mr-2 w-5 h-5" /> Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah menentukan cara mengelola data, kita harus mengenali pola dalam data agar lebih efektif.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Mengamati hasil</strong> <i>sorting</i> → Apakah setelah sorting data lebih mudah dibaca? Misalnya, apakah siswa dengan nilai tertinggi berada di posisi atas?
          </li>
          <li className="text-justify">
            <strong>Menganalisis hasil</strong> <i>filtering</i> → Setelah menyaring data, apakah informasi yang dihasilkan lebih relevan dan sesuai dengan kebutuhan?
          </li>
        </ul>
        {/* Latihan Pemahaman: Pengenalan Pola */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Mengenali Pola Sorting
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Data nilai siswa diurutkan dari tertinggi ke terendah: Citra (95), Aisyah (85), Budi (70). Apa pola yang terlihat?
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Nilai terendah di atas"
                  checked={polaAnswer === "Nilai terendah di atas"}
                  onChange={() => handlePolaChange("Nilai terendah di atas")}
                  className="mr-2"
                />
                1. Nilai terendah berada di posisi atas.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Nilai tertinggi di atas"
                  checked={polaAnswer === "Nilai tertinggi di atas"}
                  onChange={() => handlePolaChange("Nilai tertinggi di atas")}
                  className="mr-2"
                />
                2. Nilai tertinggi berada di posisi atas.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Urutan acak"
                  checked={polaAnswer === "Urutan acak"}
                  onChange={() => handlePolaChange("Urutan acak")}
                  className="mr-2"
                />
                3. Data diurutkan secara acak.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkPolaAnswer}
              className="bg-[#1B5E20] text-white px-5 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetPolaAnswer}
              className="bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {polaFeedback && (
            <p
              className={`text-base mt-2 font-bold ${
                polaFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {polaFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Abstraksi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-2 w-5 h-5" /> Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
          Agar data lebih mudah dipahami dan digunakan, kita hanya fokus pada bagian penting.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Mengabaikan informasi</strong> yang tidak diperlukan → Jika hanya ingin mengetahui siswa dari kelas 8A, kita cukup melihat kolom <span className="italic">Kelas</span> tanpa memperhatikan detail lain seperti nama atau nilai.
          </li>
          <li className="text-justify">
            <strong>Menyaring data</strong> untuk fokus pada informasi relevan → Misalnya, hanya menampilkan siswa dari kelas 8A agar bisa fokus pada data kelas tersebut.
          </li>
        </ul>
        {/* Latihan Pemahaman: Abstraksi */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Memilih Data Penting
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Kamu ingin menyaring siswa dari kelas 8A dari tabel yang berisi nama, kelas, nilai, dan alamat. Pilih data yang diperlukan:
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info1}
                  onChange={() => handleAbstraksiChange("info1")}
                  className="mr-2"
                />
                1. Kolom Kelas.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info2}
                  onChange={() => handleAbstraksiChange("info2")}
                  className="mr-2"
                />
                2. Kolom Nama.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info3}
                  onChange={() => handleAbstraksiChange("info3")}
                  className="mr-2"
                />
                3. Kolom Alamat.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAbstraksiAnswers}
              className="bg-[#1B5E20] text-white px-5 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetAbstraksiAnswers}
              className="bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {abstraksiFeedback && (
            <p
              className={`text-base mt-2 font-bold ${
                abstraksiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {abstraksiFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Algoritma */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Setelah kita memahami data yang tersedia dan menentukan informasi yang ingin kita cari, kita bisa membuat langkah-langkah sistematis untuk menerapkan sorting dan filtering di spreadsheet.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 Sorting (Pengurutan) – Mengurutkan Data dari Nilai Tertinggi ke Terendah:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 5. Contoh Data untuk Sorting
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Nilai Tugas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">95</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Blok seluruh data</strong>, termasuk judul kolom (header), misalnya kolom Nama Siswa dan Nilai Tugas.
          </li>
          <li className="text-justify">
            <strong>Klik kanan</strong> pada data yang sudah diblok.
          </li>
          <li className="text-justify">
            <strong>Pilih menu <em>Sort</em></strong> dari daftar yang muncul.
          </li>
          <li className="text-justify">
            <strong>Jika hanya ingin mengurutkan satu kolom</strong>, pilih <strong>Sort A to Z</strong> (dari kecil ke besar) atau <strong>Sort Z to A</strong> (dari besar ke kecil).
            <ul className="list-none ml-4 mt-1">
              <li>- <strong>Ascending (Sort A to Z)</strong>: Mengurutkan data dari yang terkecil atau terawal (misalnya A-Z untuk huruf atau angka kecil ke besar).</li>
              <li>- <strong>Descending (Sort Z to A)</strong>: Mengurutkan data dari yang terbesar atau terakhir (misalnya Z-A untuk huruf atau angka besar ke kecil).</li>
            </ul>
          </li>
          <li className="text-justify">
            <strong>Jika ingin mengurutkan berdasarkan lebih dari satu kolom</strong>, pilih <strong>Custom Sort</strong>.
          </li>
          <li className="text-justify">
            <strong>Misalnya</strong>, urutkan data berdasarkan kolom Nilai Tugas agar siswa dengan nilai tertinggi muncul di atas.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 Filtering (Penyaringan) – Menampilkan Data Siswa dari Kelas 8A:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 6. Contoh Data untuk Filtering
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Farah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Blok seluruh data</strong>, termasuk judul kolom (header), agar semua data bisa difilter dengan benar.
          </li>
          <li className="text-justify">
            <strong>Klik kanan</strong> pada kolom "Kelas", lalu pilih opsi <em>Filter</em>.
          </li>
          <li className="text-justify">
            <strong>Pilih kriteria filter</strong> → Misalnya, jika ingin menampilkan hanya siswa dari kelas 8A, centang <strong>"8A"</strong> saja.
          </li>
          <li className="text-justify">
            Jika ingin menampilkan semua kelas, centang <strong>"Select All"</strong>.
          </li>
        </ul>
        {/* Latihan Pemahaman: Algoritma */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Langkah Algoritmik untuk Filtering
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Kamu ingin menampilkan hanya kegiatan dengan kategori "Pramuka" dari tabel kegiatan. Manakah langkah algoritmik yang benar?
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Langkah-langkah Sorting"
                  checked={algoritmaAnswer === "Langkah-langkah Sorting"}
                  onChange={() => handleAlgoritmaChange("Langkah-langkah Sorting")}
                  className="mr-2"
                />
                1. Blok kolom Kategori, pilih Sort Z-A untuk mengurutkan data.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Langkah-langkah Filtering"
                  checked={algoritmaAnswer === "Langkah-langkah Filtering"}
                  onChange={() => handleAlgoritmaChange("Langkah-langkah Filtering")}
                  className="mr-2"
                />
                2. Blok kolom Kategori, pilih Filter, lalu centang "Pramuka".
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Langkah-langkah Manual"
                  checked={algoritmaAnswer === "Langkah-langkah Manual"}
                  onChange={() => handleAlgoritmaChange("Langkah-langkah Manual")}
                  className="mr-2"
                />
                3. Salin data dengan kategori Pramuka secara manual ke tabel baru.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAlgoritmaAnswer}
              className="bg-[#1B5E20] text-white px-5 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetAlgoritmaAnswer}
              className="bg-[#D32F2F] text-white px-5 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {algoritmaFeedback && (
            <p
              className={`text-base mt-2 font-bold ${
                algoritmaFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {algoritmaFeedback}
            </p>
          )}
        </div>
      </div>

      {/* Kuis Pemahaman */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12">
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
                className={`text-base mt-2 font-bold ${
                  feedback[currentQuestion].includes("Benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {feedback[currentQuestion]}
              </p>
            )}
            <div className="mt-4 flex justify-between">
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="bg-[#B0BEC5] text-white px-4 py-2 rounded-lg hover:bg-[#90A4AE] transition duration-300 disabled:opacity-50"
                  disabled={currentQuestion === 1}
                >
                  Sebelumnya
                </button>
                {feedback[currentQuestion] && (
                  <button
                    onClick={resetQuizAnswer}
                    className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
                  >
                    Hapus
                  </button>
                )}
              </div>
              {isAnswered[currentQuestion] && (
                <button
                  onClick={goToNext}
                  className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-yellow-900 transition duration-300"
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
        <a
          href="/feedback2"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href="/contoh-pengelolaan"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}