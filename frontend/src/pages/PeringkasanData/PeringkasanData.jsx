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

export default function PeringkasanData() {
  // State untuk kalkulator SUMIF dan COUNTIF
  const [sumifCriteria, setSumifCriteria] = useState("");
  const [countifCriteria, setCountifCriteria] = useState("");
  const [sumifResult, setSumifResult] = useState("-");
  const [countifResult, setCountifResult] = useState("-");

  // Data siswa untuk kalkulator
  const data = [
    { name: "Aisyah", class: "8A", score: 80 },
    { name: "Budi", class: "8B", score: 65 },
    { name: "Citra", class: "8A", score: 90 },
    { name: "Dani", class: "8A", score: 70 },
    { name: "Eko", class: "8B", score: 85 },
  ];

  // Fungsi untuk menghitung SUMIF dan COUNTIF
  const calculate = () => {
    let sumifRes = "-";
    if (sumifCriteria) {
      sumifRes = data
        .filter((item) => item.class === sumifCriteria)
        .reduce((sum, item) => sum + item.score, 0);
      setSumifResult(sumifRes);
    } else {
      setSumifResult("-");
    }

    let countifRes = "-";
    if (countifCriteria) {
      if (countifCriteria.startsWith(">")) {
        const value = parseInt(countifCriteria.slice(1));
        countifRes = data.filter((item) => item.score > value).length;
        setCountifResult(countifRes);
      } else if (countifCriteria.startsWith("<")) {
        const value = parseInt(countifCriteria.slice(1));
        countifRes = data.filter((item) => item.score < value).length;
        setCountifResult(countifRes);
      } else {
        const value = parseInt(countifCriteria);
        countifRes = data.filter((item) => item.score === value).length;
        setCountifResult(countifRes);
      }
    } else {
      setCountifResult("-");
    }
  };

  // Fungsi untuk reset kalkulator
  const reset = () => {
    setSumifCriteria("");
    setCountifCriteria("");
    setSumifResult("-");
    setCountifResult("-");
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
        ? "Benar! Langkah yang tepat adalah menentukan tujuan dan memilih fungsi yang sesuai."
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
    const correctAnswer = "COUNTIF";
    setPolaFeedback(
      polaAnswer === correctAnswer
        ? "Benar! COUNTIF digunakan untuk menghitung jumlah siswa berdasarkan kriteria nilai."
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
        ? "Benar! Hanya kolom Nilai Ujian yang diperlukan untuk menghitung jumlah siswa lulus."
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
    const correctAnswer = "Langkah-langkah COUNTIFS";
    setAlgoritmaFeedback(
      algoritmaAnswer === correctAnswer
        ? "Benar! Langkah-langkah COUNTIFS melibatkan pemilihan rentang data, penentuan kriteria untuk kelas dan nilai, serta penerapan rumus untuk menghitung jumlah siswa yang memenuhi kedua kriteria."
        : "Jawaban salah, ayo coba lagi. Pastikan Anda memilih langkah yang mencakup semua aspek algoritma untuk COUNTIFS."
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
      question: "Fungsi apa yang digunakan untuk menjumlahkan data dengan satu syarat?",
      options: ["A. SUMIF", "B. COUNTIF", "C. SUMIFS", "D. COUNTIFS"],
      correctAnswer: "A. SUMIF",
      explanation: "SUMIF menjumlahkan data berdasarkan satu kriteria tertentu.",
    },
    {
      question: "Apa fungsi COUNTIF dalam peringkasan data?",
      options: [
        "A. Menjumlahkan data",
        "B. Menghitung jumlah data dengan syarat",
        "C. Memilih data berdasarkan indeks",
        "D. Mengurutkan data",
      ],
      correctAnswer: "B. Menghitung jumlah data dengan syarat",
      explanation: "COUNTIF menghitung jumlah data yang memenuhi satu kriteria.",
    },
    {
      question: "Apa yang dilakukan fungsi SUMIFS?",
      options: [
        "A. Menghitung data dengan satu syarat",
        "B. Menjumlahkan data dengan banyak syarat",
        "C. Mengambil data dari kolom",
        "D. Mencocokkan data dengan tabel",
      ],
      correctAnswer: "B. Menjumlahkan data dengan banyak syarat",
      explanation: "SUMIFS menjumlahkan data yang memenuhi beberapa kriteria.",
    },
    {
      question: "Langkah apa yang termasuk dalam dekomposisi peringkasan data?",
      options: [
        "A. Menentukan kriteria peringkasan",
        "B. Menggambar grafik",
        "C. Menghitung rata-rata",
        "D. Membuat presentasi",
      ],
      correctAnswer: "A. Menentukan kriteria peringkasan",
      explanation: "Dekomposisi melibatkan menentukan kriteria untuk memecah masalah peringkasan data.",
    },
    {
      question: "Dalam abstraksi, apa yang harus dilakukan?",
      options: [
        "A. Mengabaikan data yang tidak relevan",
        "B. Mengumpulkan semua data",
        "C. Membuat tabel baru",
        "D. Mengurutkan data",
      ],
      correctAnswer: "A. Mengabaikan data yang tidak relevan",
      explanation: "Abstraksi berfokus pada memilih data penting dan mengabaikan yang tidak diperlukan.",
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
        C. PERINGKASAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>
            Memahami konsep peringkasan data dan penggunaan fungsi dalam
            spreadsheet untuk menyajikan informasi secara singkat dan akurat
          </li>
          <li>
            Menggunakan pendekatan Computational Thinking (CT) untuk meringkas
            data dengan fungsi perhitungan otomatis.
          </li>
          <li>
            Menerapkan fungsi SUMIF, COUNTIF, SUMIFS, dan COUNTIFS dalam studi
            kasus peringkasan data di lembar kerja.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data
        yang perlu dianalisis dan diringkas agar lebih mudah dipahami.
        Peringkasan data adalah proses mengolah data yang besar dan kompleks
        menjadi lebih sederhana tanpa menghilangkan informasi penting.
      </p>

      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Peringkasan Data Penting?
      </div>
      <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Menghemat waktu</strong> dan tenaga → Dengan fungsi otomatis, kita tidak perlu menghitung satu per satu.
        </li>
        <li className="text-justify">
          <strong>Membantu dalam</strong> pengambilan keputusan → Data yang telah diringkas lebih mudah dianalisis.
        </li>
        <li className="text-justify">
          <strong>Menampilkan informasi</strong> lebih jelas → Menghindari tumpukan angka yang sulit dipahami.
        </li>
      </ul>

      <h2 className="font-bold text-[#255F38] mt-6 px-4">
        Contoh Peringkasan Data dalam Kehidupan Sehari-hari
      </h2>
      <ul className="list-decimal list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li className="text-justify">
          <strong>Seorang siswa</strong> ingin tahu berapa kali ia membeli makanan favorit di kantin dalam satu minggu → Dengan COUNTIF, ia bisa langsung mendapatkan jumlahnya.
        </li>
        <li className="text-justify">
          <strong>Seseorang mencatat</strong> pengeluarannya setiap bulan dan ingin tahu total pengeluaran untuk transportasi → Dengan SUMIF, ia bisa menjumlahkan hanya untuk kategori transportasi.
        </li>
        <li className="text-justify">
          <strong>Seorang guru</strong> ingin tahu berapa siswa yang mendapat nilai di atas 75 → Dengan COUNTIF, ia bisa langsung mengetahui jumlah siswa yang lulus.
        </li>
      </ul>

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum meringkas data, kita harus memahami apa yang perlu dihitung
          dan bagaimana cara menghitungnya.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Tentukan apa</strong> yang ingin diringkas → Apakah ingin menjumlahkan angka (penjualan, nilai, dll.) atau menghitung jumlah data (jumlah siswa, jumlah transaksi, dll.)?
          </li>
          <li className="text-justify">
            <strong>Tentukan kriteria</strong> peringkasan → Misalnya, hanya menjumlahkan nilai siswa yang lebih dari 75 atau hanya menghitung transaksi di bulan tertentu.
          </li>
          <li className="text-justify">
            <strong>Pilih fungsi</strong> yang sesuai:
            <div className="ml-4 mt-2 space-y-4">
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. SUMIF</h3>
                <p className="text-gray-700 mt-2">
                  <strong>SUMIF</strong> digunakan untuk menjumlahkan data dengan satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =SUMIF(range, criteria, sum_range)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>range:</strong> Rentang data yang akan diperiksa kriterianya.
                  </li>
                  <li>
                    <strong>criteria:</strong> Syarat yang harus dipenuhi agar nilainya dijumlahkan.
                  </li>
                  <li>
                    <strong>sum_range:</strong> Rentang angka yang akan dijumlahkan jika kriterianya terpenuhi.
                  </li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">2. SUMIFS</h3>
                <p className="text-gray-700 mt-2">
                  <strong>SUMIFS</strong> digunakan untuk menjumlahkan data dengan lebih dari satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>sum_range:</strong> Rentang data yang akan dijumlahkan.
                  </li>
                  <li>
                    <strong>criteria_range1:</strong> Rentang pertama yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.
                  </li>
                  <li>
                    <strong>criteria_range2:</strong> Rentang kedua yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.
                  </li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">3. COUNTIF</h3>
                <p className="text-gray-700 mt-2">
                  <strong>COUNTIF</strong> digunakan untuk menghitung jumlah data dengan satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =COUNTIF(range, criteria)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>range:</strong> Rentang data yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria:</strong> Kriteria yang harus dipenuhi agar data dihitung.
                  </li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">4. COUNTIFS</h3>
                <p className="text-gray-700 mt-2">
                  <strong>COUNTIFS</strong> digunakan untuk menghitung jumlah data dengan lebih dari satu syarat.
                </p>
                <pre className="bg-gray-200 p-2 rounded mt-2 text-gray-800">
                  =COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)
                </pre>
                <p className="text-gray-700 mt-2">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
                  <li>
                    <strong>criteria_range1:</strong> Rentang pertama yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.
                  </li>
                  <li>
                    <strong>criteria_range2:</strong> Rentang kedua yang akan diperiksa.
                  </li>
                  <li>
                    <strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.
                  </li>
                </ul>
              </section>
            </div>
          </li>
        </ul>
        {/* Latihan Pemahaman: Dekomposisi */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Memecah Masalah Peringkasan Data
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Seorang guru ingin menjumlahkan nilai siswa dari kelas 8A menggunakan SUMIF. Pilih langkah-langkah yang tepat:
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
                1. Tentukan tujuan: menjumlahkan nilai siswa kelas 8A.
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
                2. Pilih fungsi SUMIF untuk menjumlahkan berdasarkan kelas.
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
                3. Hitung rata-rata nilai siswa.
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
          Setelah memahami langkah-langkah kecilnya, kita harus mengenali pola
          dalam data agar tahu cara terbaik untuk meringkasnya.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
          📌 Beberapa pola umum dalam peringkasan data:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Menjumlahkan total</strong> penjualan berdasarkan kategori produk → Dengan SUMIF, kita bisa menjumlahkan total penjualan hanya untuk kategori tertentu.
          </li>
          <li className="text-justify">
            <strong>Menghitung jumlah</strong> siswa yang mendapat nilai di atas batas tertentu → Dengan COUNTIF, kita bisa menghitung berapa banyak siswa yang mendapat nilai lebih dari 75.
          </li>
          <li className="text-justify">
            <strong>Menjumlahkan total</strong> penjualan dengan beberapa syarat → Dengan SUMIFS, kita bisa menjumlahkan hanya transaksi yang memenuhi lebih dari satu kriteria, misalnya kategori produk tertentu dan periode tertentu.
          </li>
          <li className="text-justify">
            <strong>Menghitung jumlah</strong> data berdasarkan lebih dari satu kriteria → Dengan COUNTIFS, kita bisa menghitung berapa transaksi yang terjadi di bulan tertentu untuk produk tertentu.
          </li>
        </ul>
        {/* Latihan Pemahaman: Pengenalan Pola */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Memilih Fungsi yang Tepat
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Guru ingin menghitung jumlah siswa yang mendapat nilai di atas 75. Fungsi apa yang tepat?
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="SUMIF"
                  checked={polaAnswer === "SUMIF"}
                  onChange={() => handlePolaChange("SUMIF")}
                  className="mr-2"
                />
                1. SUMIF
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="COUNTIF"
                  checked={polaAnswer === "COUNTIF"}
                  onChange={() => handlePolaChange("COUNTIF")}
                  className="mr-2"
                />
                2. COUNTIF
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="SUMIFS"
                  checked={polaAnswer === "SUMIFS"}
                  onChange={() => handlePolaChange("SUMIFS")}
                  className="mr-2"
                />
                3. SUMIFS
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
          Agar lebih mudah dipahami, kita hanya fokus pada bagian penting dalam
          data dan mengabaikan informasi yang tidak diperlukan.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Hanya pilih</strong> data yang benar-benar diperlukan → Jika ingin menghitung jumlah siswa yang lulus, kita hanya perlu kolom "Nilai Ujian", tidak perlu melihat nama siswa.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> yang tepat → Jika hanya butuh jumlah siswa yang lulus, cukup gunakan COUNTIF tanpa perlu SUMIF.
          </li>
        </ul>
        {/* Latihan Pemahaman: Abstraksi */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Memilih Data Penting
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Guru ingin menghitung jumlah siswa dengan nilai di atas 75 dari tabel yang berisi nama, kelas, dan nilai. Pilih data yang diperlukan:
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
                1. Kolom Nilai Ujian.
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
                2. Kolom Nama Siswa.
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
                3. Kolom Kelas.
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
          Setelah kita memahami data dan menyederhanakannya, kita bisa membuat
          langkah-langkah sistematis untuk menerapkan peringkasan data dalam
          spreadsheet.
        </p>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 SUMIF untuk Menjumlahkan Data dengan Satu Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 7. Contoh Data SUMIF
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih range</strong> data yang akan diperiksa kriterianya → Misalnya, kolom "Kelas" untuk mencari siswa kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Tentukan kriteria</strong> → Misalnya, hanya siswa dari kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Pilih sum_range</strong> → Data yang akan dijumlahkan, yaitu kolom "Nilai Ujian".
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> SUMIF → Untuk menjumlahkan nilai siswa dari kelas 8A.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =SUMIF(B2:B6, "8A", C2:C6)
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 COUNTIF untuk Menghitung Data dengan Satu Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 8. Contoh Data COUNTIF
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih range</strong> data yang akan diperiksa kriterianya → Misalnya, kolom "Nilai Ujian".
          </li>
          <li className="text-justify">
            <strong>Tentukan kriteria</strong> → Misalnya, nilai lebih dari 75.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> COUNTIF → Untuk menghitung jumlah siswa yang memiliki nilai lebih dari 75.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =COUNTIF(B2:B6, ">75")
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 SUMIFS untuk Menjumlahkan Data dengan Banyak Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 9. Contoh Data SUMIFS
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Produk</th>
                <th className="border border-green-600 px-4 py-2">Kategori</th>
                <th className="border border-green-600 px-4 py-2">Pendapatan (Rp)</th>
                <th className="border border-green-600 px-4 py-2">Bulan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Laptop</td>
                <td className="border border-green-600 px-4 py-2">Elektronik</td>
                <td className="border border-green-600 px-4 py-2">8.500.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Printer</td>
                <td className="border border-green-600 px-4 py-2">Elektronik</td>
                <td className="border border-green-600 px-4 py-2">2.000.000</td>
                <td className="border border-green-600 px-4 py-2">Februari</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Roti</td>
                <td className="border border-green-600 px-4 py-2">Makanan</td>
                <td className="border border-green-600 px-4 py-2">500.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Mouse</td>
                <td className="border border-green-600 px-4 py-2">Elektronik</td>
                <td className="border border-green-600 px-4 py-2">150.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Susu</td>
                <td className="border border-green-600 px-4 py-2">Makanan</td>
                <td className="border border-green-600 px-4 py-2">800.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih sum_range</strong> → Data yang akan dijumlahkan, yaitu kolom "Pendapatan (Rp)".
          </li>
          <li className="text-justify">
            <strong>Pilih criteria_range1</strong> → Kolom "Kategori".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria1</strong> → Hanya menjumlahkan kategori Elektronik.
          </li>
          <li className="text-justify">
            <strong>Pilih criteria_range2</strong> → Kolom "Bulan".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria2</strong> → Hanya menjumlahkan transaksi di Januari.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> SUMIFS → Untuk menjumlahkan pendapatan yang memenuhi kedua kriteria.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =SUMIFS(C2:C6, B2:B6, "Elektronik", D2:D6, "Januari")
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 COUNTIFS untuk Menghitung Data dengan Banyak Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 10. Contoh Data COUNTIFS
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Pilih criteria_range1</strong> → Kolom "Kelas".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria1</strong> → Hanya menghitung siswa dari kelas 8A.
          </li>
          <li className="text-justify">
            <strong>Pilih criteria_range2</strong> → Kolom "Nilai Ujian".
          </li>
          <li className="text-justify">
            <strong>Tentukan criteria2</strong> → Hanya menghitung siswa yang nilainya lebih dari 75.
          </li>
          <li className="text-justify">
            <strong>Gunakan rumus</strong> COUNTIFS → Untuk menghitung jumlah siswa yang memenuhi kedua kriteria.
          </li>
        </ul>
        <pre className="bg-gray-200 p-2 rounded ml-12 mt-2 text-gray-800">
          =COUNTIFS(B2:B6, "8A", C2:C6, ">75")
        </pre>

        {/* Latihan Pemahaman: Algoritma */}
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-base mb-2">
            Latihan Pemahaman: Langkah Algoritmik untuk Peringkasan Data
          </h3>
          <p className="text-gray-700 text-base text-justify mb-2">
            Guru ingin menghitung jumlah siswa kelas 8A dengan nilai di atas 75 menggunakan COUNTIFS. Manakah langkah algoritmik yang benar?
          </p>
          <div className="ml-6 text-gray-700 space-y-2">
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Langkah-langkah COUNTIFS"
                  checked={algoritmaAnswer === "Langkah-langkah COUNTIFS"}
                  onChange={() => handleAlgoritmaChange("Langkah-langkah COUNTIFS")}
                  className="mr-2"
                />
                1. Pilih kolom Kelas dan Nilai Ujian sebagai rentang kriteria, tetapkan kriteria '8A' dan '>75', lalu gunakan COUNTIFS.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Langkah-langkah SUMIF"
                  checked={algoritmaAnswer === "Langkah-langkah SUMIF"}
                  onChange={() => handleAlgoritmaChange("Langkah-langkah SUMIF")}
                  className="mr-2"
                />
                2. Pilih kolom Nilai Ujian, tetapkan kriteria '>75', lalu gunakan SUMIF untuk menjumlahkan nilai.
              </label>
            </div>
            <div className="text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="algorithm"
                  value="Langkah-langkah COUNTIF"
                  checked={algoritmaAnswer === "Langkah-langkah COUNTIF"}
                  onChange={() => handleAlgoritmaChange("Langkah-langkah COUNTIF")}
                  className="mr-2"
                />
                3. Pilih kolom Nilai Ujian, tetapkan kriteria '>75', lalu gunakan COUNTIF tanpa memeriksa kelas.
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

        {/* Kalkulator SUMIF dan COUNTIF */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-lg mb-4">
            <CheckCircle className="w-5 h-5 mr-2" /> Kalkulator SUMIF dan COUNTIF
          </h3>
          <p className="text-gray-700 mb-4 text-justify">
            Gunakan kalkulator berikut untuk mencoba fungsi SUMIF dan COUNTIF pada data siswa di bawah ini. Masukkan kriteria untuk SUMIF (berdasarkan kelas) dan COUNTIF (berdasarkan nilai), lalu klik "Hitung" untuk melihat hasilnya, atau "Reset" untuk mengosongkan.
          </p>

          <div className="flex flex-col items-center mb-6">
            <p className="text-gray-600 text-sm text-center mb-2 italic">
              Data Siswa untuk Kalkulator
            </p>
            <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                  <th className="border border-green-600 px-4 py-2">Kelas</th>
                  <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                    <td className="border border-green-600 px-4 py-2">{item.name}</td>
                    <td className="border border-green-600 px-4 py-2">{item.class}</td>
                    <td className="border border-green-600 px-4 py-2">{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-start md:items-center mb-4">
            <div className="flex flex-col w-full md:w-auto">
              <label className="mb-1 text-[#255F38] font-semibold">
                SUMIF - Kelas (misal: "8A"):
              </label>
              <input
                type="text"
                value={sumifCriteria}
                onChange={(e) => setSumifCriteria(e.target.value)}
                placeholder="Masukkan kelas"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] w-full md:w-48"
              />
            </div>
            <div className="flex flex-col w-full md:w-auto">
              <label className="mb-1 text-[#255F38] font-semibold">
                COUNTIF - Nilai (misal: ">75"):
              </label>
              <input
                type="text"
                value={countifCriteria}
                onChange={(e) => setCountifCriteria(e.target.value)}
                placeholder="Masukkan kondisi nilai"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] w-full md:w-48"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={calculate}
                className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 shadow-md"
              >
                Hitung
              </button>
              <button
                onClick={reset}
                className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 shadow-md"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <p className="text-gray-700 mb-2">
              <strong>Total Nilai (SUMIF) untuk kelas {sumifCriteria || "-"}:</strong> {sumifResult}
            </p>
            <p className="text-gray-700">
              <strong>Jumlah Siswa (COUNTIF) dengan nilai {countifCriteria || "-"}:</strong> {countifResult}
            </p>
          </div>
        </div>
      </div>

      {/* Kuis Pemahaman */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12">
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Peringkasan Data</h3>
        <p className="text-gray-700 text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahamanmu tentang fungsi peringkasan data:
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
          href="/penerapan-peringkasan"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}
