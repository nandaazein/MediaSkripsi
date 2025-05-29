
import Layout from "../../components/Layout";
import { useState } from "react";
import SimpleChart from "../../components/SimpleChart";

export default function VisualisasiData() {
  // State untuk Aktivitas Dekomposisi
  const [dekomposisiAnswers, setDekomposisiAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });
  const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");
  const [dekomposisiAnswered, setDekomposisiAnswered] = useState(false);

  const handleDekomposisiChange = (step) => {
    setDekomposisiAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkDekomposisiAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: true, step4: false };
    const isCorrect =
      dekomposisiAnswers.step1 === correctAnswers.step1 &&
      dekomposisiAnswers.step2 === correctAnswers.step2 &&
      dekomposisiAnswers.step3 === correctAnswers.step3 &&
      dekomposisiAnswers.step4 === correctAnswers.step4;
    setDekomposisiFeedback(
      isCorrect
        ? "Benar! Langkah-langkah yang tepat adalah menentukan tujuan, mengumpulkan data, dan memilih jenis chart."
        : "Jawaban salah, ayo coba lagi."
    );
    setDekomposisiAnswered(true);
  };

  const resetDekomposisiAnswers = () => {
    setDekomposisiAnswers({ step1: false, step2: false, step3: false, step4: false });
    setDekomposisiFeedback("");
    setDekomposisiAnswered(false);
  };

  // State untuk Aktivitas Pengenalan Pola
  const [polaAnswer, setPolaAnswer] = useState("");
  const [polaFeedback, setPolaFeedback] = useState("");
  const [polaAnswered, setPolaAnswered] = useState(false);

  const handlePolaChange = (value) => {
    setPolaAnswer(value);
  };

  const checkPolaAnswer = () => {
    const correctAnswer = "Line Chart";
    setPolaFeedback(
      polaAnswer === correctAnswer
        ? "Benar! Line Chart cocok untuk menunjukkan perubahan kehadiran siswa seiring waktu."
        : "Jawaban salah, ayo coba lagi."
    );
    setPolaAnswered(true);
  };

  const resetPolaAnswer = () => {
    setPolaAnswer("");
    setPolaFeedback("");
    setPolaAnswered(false);
  };

  // State untuk Aktivitas Abstraksi
  const [abstraksiAnswer, setAbstraksiAnswer] = useState(""); // Mengubah state menjadi string untuk radio button
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (value) => {
    setAbstraksiAnswer(value);
  };

  const checkAbstraksiAnswers = () => {
    const correctAnswer = "Jumlah siswa di setiap ekstrakurikuler";
    setAbstraksiFeedback(
      abstraksiAnswer === correctAnswer
        ? "Benar! Hanya jumlah siswa di setiap ekstrakurikuler yang relevan untuk Pie Chart."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswer("");
    setAbstraksiFeedback("");
    setAbstraksiAnswered(false);
  };

  // State untuk Aktivitas Algoritma
  const [algoritmaAnswers, setAlgoritmaAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });
  const [algoritmaFeedback, setAlgoritmaFeedback] = useState("");
  const [algoritmaAnswered, setAlgoritmaAnswered] = useState(false);

  const handleAlgoritmaChange = (step) => {
    setAlgoritmaAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkAlgoritmaAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: true, step4: false };
    const isCorrect =
      algoritmaAnswers.step1 === correctAnswers.step1 &&
      algoritmaAnswers.step2 === correctAnswers.step2 &&
      algoritmaAnswers.step3 === correctAnswers.step3 &&
      algoritmaAnswers.step4 === correctAnswers.step4;
    setAlgoritmaFeedback(
      isCorrect
        ? "Benar! Langkah-langkah ini adalah urutan yang tepat untuk membuat chart di spreadsheet."
        : "Jawaban salah, ayo coba lagi."
    );
    setAlgoritmaAnswered(true);
  };

  const resetAlgoritmaAnswers = () => {
    setAlgoritmaAnswers({ step1: false, step2: false, step3: false, step4: false });
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
      question: "Apa manfaat utama visualisasi data?",
      options: [
        "A. Membantu melihat pola dengan cepat",
        "B. Membuat data lebih rumit",
        "C. Mengurangi jumlah data",
        "D. Menghapus data yang salah",
      ],
      correctAnswer: "A. Membantu melihat pola dengan cepat",
      explanation: "Visualisasi data membantu kita melihat pola dan tren dengan cepat melalui chart atau tabel.",
    },
    {
      question: "Langkah memecah masalah menjadi bagian kecil disebut?",
      options: [
        "A. Dekomposisi",
        "B. Abstraksi",
        "C. Pengenalan Pola",
        "D. Algoritma",
      ],
      correctAnswer: "A. Dekomposisi",
      explanation: "Dekomposisi adalah proses memecah masalah besar menjadi langkah-langkah kecil untuk memudahkan pemahaman dan penyelesaian.",
    },
    {
      question: "Chart apa yang cocok untuk menunjukkan persentase pengeluaran?",
      options: [
        "A. Pie Chart",
        "B. Line Chart",
        "C. Bar Chart",
        "D. Area Chart",
      ],
      correctAnswer: "A. Pie Chart",
      explanation: "Pie Chart cocok untuk menunjukkan persentase, seperti pembagian pengeluaran dalam kategori tertentu.",
    },
    {
      question: "Memilih data penting untuk chart disebut?",
      options: [
        "A. Abstraksi",
        "B. Dekomposisi",
        "C. Pengenalan Pola",
        "D. Algoritma",
      ],
      correctAnswer: "A. Abstraksi",
      explanation: "Abstraksi adalah proses memilih data yang relevan dan mengabaikan informasi yang tidak perlu untuk membuat chart yang jelas.",
    },
    {
      question: "Apa langkah pertama membuat chart di spreadsheet?",
      options: [
        "A. Siapkan data dalam tabel",
        "B. Pilih jenis chart",
        "C. Hitung rata-rata data",
        "D. Simpan chart",
      ],
      correctAnswer: "A. Siapkan data dalam tabel",
      explanation: "Langkah pertama dalam membuat chart adalah menyiapkan data dalam tabel yang rapi untuk memastikan chart akurat.",
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
      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        B. VISUALISASI DATA
      </div>

      <section className="bg-green-100 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6 mb-2 sm:mb-6">
        <h2 className="font-bold text-[#255F38] text-lg">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside space-y-1 sm:space-y-2 mt-2 sm:mt-4 text-gray-700">
          <li className="text-sm md:text-base">
            Memahami konsep visualisasi data serta manfaatnya dalam menyajikan informasi melalui chart, tabel, atau grafik agar lebih mudah dipahami.
          </li>
          <li className="text-sm md:text-base">
            Menerapkan pendekatan Computational Thinking untuk memvisualisasikan data secara efektif.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-4">
        <strong>Visualisasi data</strong> adalah cara menyajikan informasi dalam bentuk <strong>chart, tabel, atau grafik</strong> agar mudah dipahami. Dibandingkan membaca angka atau teks panjang, chart membantu kita melihat <strong>pola</strong> dan <strong>tren</strong> dengan cepat. Kita sering menggunakan <strong>spreadsheet</strong> untuk membuat chart yang membantu membuat keputusan. Dengan <strong>Computational Thinking (CT)</strong>, proses membuat chart jadi lebih mudah dan teratur.
      </p>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Peran Visualisasi Data
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Visualisasi data membantu kita memahami informasi dengan lebih mudah melalui chart, tabel, atau grafik.
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Mengidentifikasi pola dan tren</strong> → Chart membantu kita melihat perubahan data, seperti nilai ujian siswa selama satu semester.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Membantu membuat keputusan</strong> → Chart membuat data lebih jelas, sehingga kita bisa memilih strategi belajar.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menyajikan data</strong> lebih ringkas → Informasi jadi sederhana dan mudah dibaca.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Meningkatkan komunikasi data</strong> → Chart membuat presentasi lebih menarik dan mudah dipahami.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Mendeteksi kesalahan</strong> → Chart membantu menemukan data yang salah, seperti nilai ujian yang tidak wajar.
          </li>
        </ul>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-12 relative text-justify">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Contoh dalam Kehidupan Sehari-hari
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6">
          Visualisasi data sering digunakan untuk membuat informasi lebih jelas dan menarik.
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base">
            <strong>Line Chart</strong> → Menunjukkan perubahan nilai siswa selama satu semester.
          </li>
          <li className="text-sm md:text-base">
            <strong>Bar Chart</strong> → Membandingkan jumlah pelanggan di beberapa toko.
          </li>
          <li className="text-sm md:text-base">
            <strong>Pie Chart</strong> → Menunjukkan persentase pengeluaran untuk makanan, transportasi, dan hiburan.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base mt-2 sm:mt-4">
          Dengan memahami visualisasi data, kita bisa memilih cara terbaik untuk menyajikan informasi.
        </p>
      </div>

      <SimpleChart />

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-12 relative text-justify">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6">
          Membuat chart lebih mudah jika kita <span className="font-semibold">memecah prosesnya menjadi langkah kecil.</span> Dekomposisi membantu kita memahami setiap langkah.
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base">
            <strong>Menentukan tujuan</strong> → Tentukan apa yang ingin ditunjukkan, seperti membandingkan penjualan jajanan.
          </li>
          <li className="text-sm md:text-base">
            <strong>Mengumpulkan data</strong> → Kumpulkan data yang dibutuhkan, seperti jumlah jajanan yang terjual.
          </li>
          <li className="text-sm md:text-base">
            <strong>Memilih jenis chart</strong> → Pilih chart yang tepat, seperti Bar Chart untuk membandingkan.
          </li>
        </ul>

        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Pecah Langkah Membuat Chart
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Kamu ingin membuat chart untuk membandingkan penjualan jajanan: bakpao (50 porsi), siomay (30 porsi), cilok (20 porsi). Pilih langkah yang benar:
          </p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step1}
                  onChange={() => handleDekomposisiChange("step1")}
                  className="mr-2"
                />
                Tentukan tujuan: bandingkan penjualan jajanan.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step2}
                  onChange={() => handleDekomposisiChange("step2")}
                  className="mr-2"
                />
                Kumpulkan data: bakpao (50), siomay (30), cilok (20).
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step3}
                  onChange={() => handleDekomposisiChange("step3")}
                  className="mr-2"
                />
                Pilih Bar Chart untuk membandingkan.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={dekomposisiAnswers.step4}
                  onChange={() => handleDekomposisiChange("step4")}
                  className="mr-2"
                />
                Hitung total penjualan semua jajanan.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkDekomposisiAnswers}
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetDekomposisiAnswers}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {dekomposisiFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                dekomposisiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {dekomposisiFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative text-justify">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6">
          Setelah mengumpulkan data, kita perlu <span className="font-semibold">mengenali pola</span> untuk memilih chart yang tepat. Berikut adalah pola data yang dapat dikenali:
        </p>
        <ul className="list-none space-y-4 sm:space-y-5 text-gray-700">
          <li className="text-sm md:text-base">
            <strong className="text-gray-800">Data yang menunjukkan perubahan seiring waktu:</strong>
            <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-2">
              <li className="text-sm md:text-base">
                <span className="font-medium text-gray-700">Line Chart:</span> Digunakan untuk menunjukkan perkembangan data dari waktu ke waktu, seperti perubahan nilai ujian siswa per bulan.
              </li>
              <li className="text-sm md:text-base">
                <span className="font-medium text-gray-700">Area Chart:</span> Digunakan untuk menampilkan akumulasi total data seiring waktu, seperti jumlah siswa yang mengumpulkan tugas setiap minggu.
              </li>
            </ul>
          </li>
          <li className="text-sm md:text-base">
            <strong className="text-gray-800">Data yang membandingkan antar kategori:</strong>
            <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-2">
              <li className="text-sm md:text-base">
                <span className="font-medium text-gray-700">Bar Chart:</span> Cocok untuk membandingkan jumlah antar kategori secara vertikal, seperti jumlah siswa di setiap ekstrakurikuler.
              </li>
              <li className="text-sm md:text-base">
                <span className="font-medium text-gray-700">Column Chart:</span> Digunakan untuk membandingkan jumlah antar kategori secara horizontal, seperti nilai rata-rata antar mata pelajaran.
              </li>
            </ul>
          </li>
          <li className="text-sm md:text-base">
            <strong className="text-gray-800">Data yang menunjukkan proporsi:</strong>
            <ul className="list-disc ml-5 sm:ml-6 mt-2 space-y-2">
              <li className="text-sm md:text-base">
                <span className="font-medium text-gray-700">Pie Chart:</span> Digunakan untuk menunjukkan proporsi atau persentase masing-masing kategori terhadap keseluruhan, seperti proporsi pengeluaran bulanan.
              </li>
            </ul>
          </li>
        </ul>

        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Pilih Chart yang Tepat
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Kamu punya data kehadiran siswa: Senin (90 siswa), Selasa (85 siswa), Rabu (88 siswa), Kamis (92 siswa), Jumat (80 siswa). Pilih chart yang cocok untuk menunjukkan perubahan kehadiran:
          </p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Bar Chart"
                  checked={polaAnswer === "Bar Chart"}
                  onChange={() => handlePolaChange("Bar Chart")}
                  className="mr-2"
                />
                Bar Chart
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Line Chart"
                  checked={polaAnswer === "Line Chart"}
                  onChange={() => handlePolaChange("Line Chart")}
                  className="mr-2"
                />
                Line Chart
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Pie Chart"
                  checked={polaAnswer === "Pie Chart"}
                  onChange={() => handlePolaChange("Pie Chart")}
                  className="mr-2"
                />
                Pie Chart
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkPolaAnswer}
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetPolaAnswer}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {polaFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                polaFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {polaFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-4">
          Untuk membuat chart yang jelas, kita harus pilih data yang penting dan abaikan data yang tidak perlu.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2">
          📌 Yang perlu diperhatikan:
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base">
            <strong>Pilih data utama</strong> → Misalnya, hanya gunakan rata-rata nilai ujian, bukan semua nilai.
          </li>
          <li className="text-sm md:text-base">
            <strong>Jangan gunakan terlalu banyak kategori</strong> → Terlalu banyak kategori membuat chart sulit dipahami.
          </li>
        </ul>

        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Pilih Data yang Penting
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Kamu ingin membuat Pie Chart untuk menunjukkan pilihan ekstrakurikuler: Pramuka (40 siswa), Seni Tari (30 siswa), Bola Voli (20 siswa). Pilih data yang dibutuhkan:
          </p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Nama siswa"
                  checked={abstraksiAnswer === "Nama siswa"}
                  onChange={() => handleAbstraksiChange("Nama siswa")}
                  className="mr-2"
                />
                Nama siswa.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Jadwal ekstrakurikuler"
                  checked={abstraksiAnswer === "Jadwal ekstrakurikuler"}
                  onChange={() => handleAbstraksiChange("Jadwal ekstrakurikuler")}
                  className="mr-2"
                />
                Jadwal ekstrakurikuler.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="Jumlah siswa di setiap ekstrakurikuler"
                  checked={abstraksiAnswer === "Jumlah siswa di setiap ekstrakurikuler"}
                  onChange={() => handleAbstraksiChange("Jumlah siswa di setiap ekstrakurikuler")}
                  className="mr-2"
                />
                Jumlah siswa di setiap ekstrakurikuler.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAbstraksiAnswers}
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetAbstraksiAnswers}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {abstraksiFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                abstraksiFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {abstraksiFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 sm:mt-4">
          Untuk membuat chart di spreadsheet, ikuti langkah-langkah ini:
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base">
            <strong>Siapkan data</strong> → Masukkan data ke dalam tabel yang rapi.
          </li>
          <li className="text-sm md:text-base">
            <strong>Pilih data</strong> → Blok data yang akan dibuat chart.
          </li>
          <li className="text-sm md:text-base">
            <strong>Klik Insert Chart</strong> → Pilih jenis chart, seperti Line Chart atau Bar Chart.
          </li>
        </ul>

        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 sm:mt-6 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Urutkan Langkah Membuat Chart
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-2">
            Kamu ingin membuat Line Chart untuk nilai ujian: Januari (80), Februari (85), Maret (90). Pilih langkah yang benar:
          </p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={algoritmaAnswers.step1}
                  onChange={() => handleAlgoritmaChange("step1")}
                  className="mr-2"
                />
                Siapkan data dalam tabel.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={algoritmaAnswers.step4}
                  onChange={() => handleAlgoritmaChange("step4")}
                  className="mr-2"
                />
                Hitung rata-rata nilai ujian.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={algoritmaAnswers.step2}
                  onChange={() => handleAlgoritmaChange("step2")}
                  className="mr-2"
                />
                Blok data untuk chart.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={algoritmaAnswers.step3}
                  onChange={() => handleAlgoritmaChange("step3")}
                  className="mr-2"
                />
                Klik Insert Chart, pilih Line Chart.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAlgoritmaAnswers}
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa
            </button>
            <button
              onClick={resetAlgoritmaAnswers}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {algoritmaFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                algoritmaFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {algoritmaFeedback}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12">
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Visualisasi Data</h3>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep visualisasi data:
        </p>
        <div className="bg-yellow-50 p-3 sm:p-4 border border-yellow-300 rounded mt-4 shadow-md">
          <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-yellow-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
            Soal {currentQuestion} dari 5
          </div>
          <div className="mt-8">
            <h4 className="font-semibold text-yellow-800 text-sm md:text-base mb-2">
              {questions[currentQuestion - 1].question}
            </h4>
            <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
              {questions[currentQuestion - 1].options.map((option, index) => (
                <div key={index} className="text-sm md:text-base">
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
                className={`text-sm mt-2 font-bold ${
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

      <div className="flex justify-between items-center px-2 sm:px-4 py-2 mt-4 sm:mt-8">
        <a
          href="/contoh-lookup"
          className="bg-gray-500 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px]"
        >
          ← Sebelumnya
        </a>
        <a
          href="/contoh-penerapan-visualisasi-data"
          className="bg-[#255F38] text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}