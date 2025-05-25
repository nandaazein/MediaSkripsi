import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code } from "lucide-react";
import { useState } from "react";

export default function PencarianLookup() {
  // State untuk Aktivitas Dekomposisi
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
        ? "Benar! Langkah-langkah yang tepat adalah mengidentifikasi data dan menentukan tabel referensi."
        : "Jawaban salah, ayo coba lagi."
    );
    setDekomposisiAnswered(true);
  };

  const resetDekomposisiAnswers = () => {
    setDekomposisiAnswers({ step1: false, step2: false, step3: false });
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
    const correctAnswer = "Kode unik untuk setiap barang";
    setPolaFeedback(
      polaAnswer === correctAnswer
        ? "Benar! Kode unik memastikan pencarian data akurat tanpa duplikat."
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
  const [abstraksiAnswers, setAbstraksiAnswers] = useState({
    info1: false,
    info2: false,
    info3: false,
    info4: false,
  });
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (info) => {
    setAbstraksiAnswers((prev) => ({ ...prev, [info]: !prev[info] }));
  };

  const checkAbstraksiAnswers = () => {
    const correctAnswers = { info1: true, info2: true, info3: false, info4: false };
    const isCorrect =
      abstraksiAnswers.info1 === correctAnswers.info1 &&
      abstraksiAnswers.info2 === correctAnswers.info2 &&
      abstraksiAnswers.info3 === correctAnswers.info3 &&
      abstraksiAnswers.info4 === correctAnswers.info4;
    setAbstraksiFeedback(
      isCorrect
        ? "Benar! Hanya kode dan nama buku yang relevan untuk pencarian ini."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswers({ info1: false, info2: false, info3: false, info4: false });
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
    const correctAnswers = { step1: true, step2: true, step3: true, step4: true };
    const isCorrect =
      algoritmaAnswers.step1 === correctAnswers.step1 &&
      algoritmaAnswers.step2 === correctAnswers.step2 &&
      algoritmaAnswers.step3 === correctAnswers.step3 &&
      algoritmaAnswers.step4 === correctAnswers.step4;
    setAlgoritmaFeedback(
      isCorrect
        ? "Benar! Langkah-langkah ini adalah urutan yang tepat untuk VLOOKUP."
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
      question: "Jika tabel referensi tidak terurut, apa yang dilakukan oleh parameter range_lookup bernilai FALSE pada fungsi VLOOKUP?",
      options: [
        "A. Mencari nilai terdekat",
        "B. Mencari kecocokan persis",
        "C. Mengurutkan tabel terlebih dahulu",
        "D. Mengabaikan nilai referensi",
      ],
      correctAnswer: "B. Mencari kecocokan persis",
      explanation: "Parameter range_lookup FALSE memastikan VLOOKUP hanya mencari kecocokan yang persis, bukan nilai terdekat.",
    },
    {
      question: "Apa tujuan utama dari langkah abstraksi dalam proses pencarian data menggunakan fungsi Lookup?",
      options: [
        "A. Menghitung total data",
        "B. Mengurutkan tabel referensi",
        "C. Mengabaikan informasi yang tidak perlu",
        "D. Membuat tabel baru",
      ],
      correctAnswer: "C. Mengabaikan informasi yang tidak perlu",
      explanation: "Abstraksi membantu menyederhanakan masalah dengan fokus pada data penting dan mengabaikan yang tidak relevan.",
    },
    {
      question: "Langkah pertama dalam dekomposisi pencarian data adalah?",
      options: [
        "A. Menentukan tabel referensi",
        "B. Identifikasi data yang akan dicari",
        "C. Menentukan jenis fungsi lookup",
        "D. Mengambil informasi",
      ],
      correctAnswer: "B. Identifikasi data yang akan dicari",
      explanation: "Dekomposisi dimulai dengan mengidentifikasi data yang akan dicari, seperti kode barang atau nilai unik lainnya.",
    },
    {
      question: "Apa pola yang umum digunakan dalam pencarian data dengan fungsi Lookup?",
      options: [
        "A. Harga selalu di kolom pertama",
        "B. Nilai referensi bersifat unik",
        "C. Tabel tidak perlu terurut",
        "D. Pencarian dilakukan tanpa referensi",
      ],
      correctAnswer: "B. Nilai referensi bersifat unik",
      explanation: "Nilai referensi yang unik memastikan pencarian data akurat dan tidak ada duplikat dalam tabel referensi.",
    },
    {
      question: "Apa yang harus dilakukan jika tabel terurut pada fungsi VLOOKUP dengan range_lookup bernilai TRUE?",
      options: [
        "A. Mencari kecocokan persis",
        "B. Mencari nilai terdekat",
        "C. Mengabaikan urutan tabel",
        "D. Menggunakan referensi absolut",
      ],
      correctAnswer: "B. Mencari nilai terdekat",
      explanation: "Jika tabel terurut dan range_lookup TRUE, VLOOKUP akan mencari nilai terdekat yang kurang dari atau sama dengan lookup_value.",
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
        A. PENCARIAN DATA
      </div>

      <section className="bg-green-100 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6 mb-2 sm:mb-6">
        <h2 className="font-bold text-[#255F38] text-lg">Tujuan Pembelajaran:</h2>
        <div className="ml-4 sm:ml-6 space-y-1 sm:space-y-2 mt-2 text-gray-700">
          <div className="text-sm md:text-base">1. Memahami konsep pencarian data menggunakan fungsi Lookup.</div>
          <div className="text-sm md:text-base">2. Menerapkan pendekatan Computational Thinking untuk menyelesaikan masalah pencarian data.</div>
          <div className="text-sm md:text-base">3. Menggunakan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</div>
        </div>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6">
        Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian: Lookup dan Reference. Fungsi Lookup digunakan untuk mencari nilai tertentu dalam tabel atau array dan mengembalikan hasil yang sesuai berdasarkan kunci pencarian. Fungsi ini sering diterapkan dalam spreadsheet untuk menemukan data terkait dengan nilai tertentu. Sementara itu, fungsi Reference digunakan untuk mengambil nilai berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel saat posisi data berubah. Dengan kedua metode ini, pencarian data menjadi lebih cepat dan akurat dibandingkan pencarian manual. Hasil pencarian memiliki dua kemungkinan:
      </p>
      <div className="mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <div className="text-sm md:text-base text-justify">
          <strong>1. Data ditemukan</strong> → Data yang dicari sesuai dengan data dalam tabel.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>2. Data tidak ditemukan</strong> → Data yang dicari tidak ada dalam tabel.
        </div>
      </div>

      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg mt-2 sm:mt-6">
        1. Pencarian Lookup
      </div>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-2 sm:mt-4">
        Dalam kehidupan sehari-hari, kita sering melakukan pencarian data, seperti mencari nomor telepon di kontak ponsel atau informasi barang di daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan lebih cepat dan efisien dengan menggunakan fungsi Lookup di aplikasi lembar kerja.
      </p>
      <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-2 sm:px-6">Fungsi Lookup digunakan untuk:</p>
      <div className="mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <div className="text-sm md:text-base text-justify">
          <strong>1. Mencari data</strong> dalam tabel → Membantu menemukan informasi di daftar besar.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>2. Mengambil informasi</strong> berdasarkan referensi → Memungkinkan pencarian dengan kunci tertentu.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>3. Mempermudah pengolahan</strong> data → Efektif untuk menangani data dalam jumlah banyak.
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan membaginya menjadi <span className="font-semibold">bagian-bagian kecil</span>. Pencarian data dalam tabel lembar kerja dapat diuraikan menjadi langkah-langkah berikut:
        </p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. Identifikasi data</strong> yang akan dicari → Data harus memiliki nilai unik sebagai referensi, seperti kode barang atau kode siswa.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. Menentukan tabel</strong> referensi → Data harus tersedia dalam tabel dengan format yang sesuai.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang tepat sesuai kebutuhan.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Memecah Masalah Pencarian Kode Barang
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Bantulah toko untuk memecah masalah pencarian data barang berdasarkan kode. Daftar barang memiliki kolom kode, nama, dan harga. Tentukan langkah-langkah yang tepat untuk memecah masalah ini:
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
                1. Identifikasi data yang akan dicari (misalnya kode barang "B001").
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
                2. Tentukan tabel referensi yang berisi data barang.
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
                3. Hitung total harga barang secara manual.
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

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> PENGENALAN POLA
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah memecah permasalahan, kita perlu mengidentifikasi <span className="font-bold">pola dalam data</span> untuk memastikan pencarian dilakukan secara efisien.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Pola umum dalam pencarian data menggunakan Lookup meliputi:</p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. Nilai referensi</strong> bersifat unik dalam tabel referensi.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. Data dalam tabel</strong> referensi harus tersusun dengan benar sesuai urutan pencarian.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. Pencarian dilakukan</strong> dengan mencocokkan nilai referensi dengan baris atau kolom pertama dalam tabel referensi.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>4. Jika tabel tidak terurut</strong> maka parameter range_lookup harus bernilai FALSE untuk mencari kecocokan persis.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>5. Jika tabel terurut</strong> maka range_lookup bisa bernilai TRUE untuk pencarian nilai terdekat.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Mengidentifikasi Pola dalam Tabel Harga
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Perhatikan tabel berikut dan pilih pola yang benar untuk pencarian data menggunakan Lookup:
          </p>
          <div className="mt-2 overflow-x-auto text-center">
            <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Kode</th>
                  <th className="border border-green-600 px-2 py-1">Nama</th>
                  <th className="border border-green-600 px-2 py-1">Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">C001</td>
                  <td className="border border-green-600 px-2 py-1">Buku</td>
                  <td className="border border-green-600 px-2 py-1">5000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-600 px-2 py-1">C002</td>
                  <td className="border border-green-600 px-2 py-1">Pensil</td>
                  <td className="border border-green-600 px-2 py-1">2000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2 mt-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Kode unik untuk setiap barang"
                  checked={polaAnswer === "Kode unik untuk setiap barang"}
                  onChange={() => handlePolaChange("Kode unik untuk setiap barang")}
                  className="mr-2"
                />
                1. Kode unik untuk setiap barang.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Harga selalu di kolom pertama"
                  checked={polaAnswer === "Harga selalu di kolom pertama"}
                  onChange={() => handlePolaChange("Harga selalu di kolom pertama")}
                  className="mr-2"
                />
                2. Harga selalu di kolom pertama.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="Tabel tidak perlu terurut"
                  checked={polaAnswer === "Tabel tidak perlu terurut"}
                  onChange={() => handlePolaChange("Tabel tidak perlu terurut")}
                  className="mr-2"
                />
                3. Tabel tidak perlu terurut.
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
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ABSTRAKSI
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah mengidentifikasi pola, kita dapat <span className="font-semibold">menyederhanakan masalah</span> dengan <span className="font-semibold">mengabaikan</span> informasi yang tidak perlu dan fokus pada elemen penting untuk pencarian.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Bagian yang harus diperhatikan:</p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. Kolom atau baris pertama</strong> dalam tabel referensi harus berisi nilai referensi (lookup_value).
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. Posisi kolom atau baris</strong> tempat data yang akan diambil harus diketahui.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. Gunakan tanda dolar</strong> atau absolute reference ($) untuk membuat referensi tabel tetap saat menyalin rumus.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Memilih Informasi Penting untuk Pencarian
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Aldi ingin mencari data buku berdasarkan kode "B001" dengan tabel yang mencakup kode, nama, harga, dan stok. Pilih informasi yang relevan untuk pencarian nama buku:
          </p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info1}
                  onChange={() => handleAbstraksiChange("info1")}
                  className="mr-2"
                />
                1. Kode buku (B001).
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info2}
                  onChange={() => handleAbstraksiChange("info2")}
                  className="mr-2"
                />
                2. Nama buku.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info3}
                  onChange={() => handleAbstraksiChange("info3")}
                  className="mr-2"
                />
                3. Harga buku.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abstraksiAnswers.info4}
                  onChange={() => handleAbstraksiChange("info4")}
                  className="mr-2"
                />
                4. Stok buku.
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
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ALGORITMA
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah memahami dan menyederhanakan masalah, kita dapat menyusun langkah-langkah sistematis untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Langkah-langkah penggunaan fungsi Lookup:</p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            1. Tentukan nilai referensi (lookup_value) yang akan dicari.
          </div>
          <div className="text-sm md:text-base text-justify">
            2. Pilih tabel referensi (table_array) yang berisi data pencarian.
          </div>
          <div className="text-sm md:text-base text-justify">
            3. Tentukan nomor kolom yang berisi data yang ingin diambil.
          </div>
          <div className="text-sm md:text-base text-justify">
            4. Pilih metode pencarian:
            <div className="ml-4 sm:ml-6 mt-1">
              <div className="text-sm md:text-base">a. Jika tabel tidak terurut, kita harus menggunakan FALSE agar VLOOKUP mencari kecocokan yang persis.</div>
              <div className="text-sm md:text-base">b. Jika tabel terurut, kita bisa menggunakan TRUE untuk mencari nilai terdekat atau mendekati.</div>
            </div>
          </div>
          <div className="text-sm md:text-base text-justify">
            5. Gunakan rumus VLOOKUP atau HLOOKUP dengan format yang benar.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Menyusun Langkah Pencarian dengan VLOOKUP
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Urutkan langkah-langkah yang benar untuk menggunakan VLOOKUP mencari nama barang berdasarkan kode "B002":
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
                1. Tentukan nilai referensi (kode "B002").
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
                2. Pilih tabel referensi yang berisi data.
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
                3. Tentukan nomor kolom untuk data yang diambil (misalnya kolom nama).
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
                4. Gunakan rumus VLOOKUP dengan parameter yang sesuai.
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
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Pencarian Data dengan Fungsi Lookup</h3>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep pencarian data menggunakan fungsi Lookup:
        </p>
        <div className="bg-yellow-50 p-3 sm:p-4 border border-yellow-300 rounded mt-4 shadow-md">
          <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-yellow-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> Soal {currentQuestion} dari 5
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

      <div className="flex justify-between items-center px-2 sm:px-6 py-2 mt-4">
        <a href="/penerapan-ct" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px]">
          ← Sebelumnya
        </a>
        <a href="/contoh-lookup" className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}