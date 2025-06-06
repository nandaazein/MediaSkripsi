import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code } from "lucide-react";
import { useState } from "react";
import ilustrasi1 from "../../assets/PencarianData/ilustrasi1.png";
import ilustrasi2 from "../../assets/PencarianData/ilustrasi2.png";

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

  // State untuk Aktivitas Algoritma (Visualisasi Interaktif)
  const [lookupStep, setLookupStep] = useState(0);
  const [isLookupStarted, setIsLookupStarted] = useState(false);
  const lookupValue = "C002"; // Nilai referensi yang dicari
  const tableData = [
    { kode: "C001", nama: "Buku", harga: 5000 },
    { kode: "C002", nama: "Pensil", harga: "" }, // Harga C002 kosong
    { kode: "C003", nama: "Pen", harga: 3000 },
  ]; // Tabel data dengan harga C002 kosong
  const tableReference = [
    { kode: "C001", nama: "Buku", harga: 5000 },
    { kode: "C002", nama: "Pensil", harga: 2000 },
    { kode: "C003", nama: "Pen", harga: 3000 },
  ]; // Tabel referensi
  const colIndexNum = 3; // Kolom harga (indeks 3, karena dimulai dari 1)

  // Langkah-langkah visualisasi untuk LOOKUP dengan penyorotan warna
  const lookupSteps = [
    {
      description: "Pilih range kriteria: Kolom 'Kode' pada tabel data.",
      highlightedRows: [], // Tidak ada penyorotan di langkah awal
      highlightedColumn: null,
      result: null,
      colorData: null, // Warna untuk tabel data
      colorReference: null, // Warna untuk tabel referensi
    },
    {
      description: "Tetapkan nilai referensi: 'C002'.",
      highlightedRows: [1], // Baris dengan kode "C002" di tableData (indeks 1)
      highlightedColumn: 1, // Kolom 'Kode' di-highlight kuning
      result: null,
      colorData: "bg-yellow-200", // Highlight kuning untuk lookup value di tabel data
      colorReference: null,
    },
    {
      description: "Cari 'C002' pada kolom 'Kode' di tabel referensi.",
      highlightedRows: [1], // Baris dengan kode "C002" di tableReference (indeks 1)
      highlightedColumn: 1, // Kolom 'Kode' di-highlight
      result: null,
      colorData: null,
      colorReference: "bg-green-200", // Highlight hijau untuk baris cocok di tabel referensi
    },
    {
      description: "Tentukan kolom harga (indeks 3) untuk mengambil nilai.",
      highlightedRows: [1], // Sorot baris "C002" di tableReference
      highlightedColumn: 3, // Kolom 'Harga' di-highlight biru
      result: null,
      colorData: null,
      colorReference: "bg-blue-200", // Highlight biru untuk kolom harga
    },
    {
      description: "Pilih metode pencarian: Gunakan FALSE untuk kecocokan persis.",
      highlightedRows: [], // Tidak menyorot baris, fokus pada metode
      highlightedColumn: null,
      result: null,
      colorData: null,
      colorReference: null,
    },
    {
      description: "Hasil ditemukan: Harga untuk 'C002' adalah 2000.",
      highlightedRows: [1], // Sorot baris di tableData untuk menunjukkan hasil
      highlightedColumn: 3, // Kolom 'Harga' di-highlight
      result: 2000,
      colorData: "bg-orange-200", // Highlight oranye untuk harga di tabel data
      colorReference: "bg-orange-200", // Highlight oranye untuk harga di tabel referensi
    },
  ];

  // Fungsi navigasi generik
  const nextStep = (currentStep, setStep, maxSteps, setIsStarted) => {
    if (currentStep < maxSteps - 1) {
      setStep(currentStep + 1);
      setIsStarted(true);
    }
  };

  const resetStep = (setStep, setIsStarted) => {
    setStep(0);
    setIsStarted(false);
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
      question: "Jika tabel referensi tidak terurut, parameter range_lookup bernilai FALSE pada fungsi VLOOKUP akan ....",
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
      question: "Tujuan utama dari langkah abstraksi dalam proses pencarian data menggunakan fungsi Lookup adalah ....",
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
      question: "Langkah pertama dalam dekomposisi proses pencarian data menggunakan fungsi Lookup adalah ....",
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
      question: "Pola yang umum digunakan dalam pencarian data dengan fungsi Lookup adalah ....",
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
      question: "Jika tabel referensi terurut, pada fungsi VLOOKUP dengan range_lookup bernilai TRUE, maka yang harus dilakukan adalah ....",
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
          <div className="text-sm md:text-base">1. Peserta didik mampu menggunakan fungsi Lookup dan Reference untuk melakukan pencarian data secara tepat.</div>
          <div className="text-sm md:text-base">2. Peserta didik mampu menerapkan pendekatan Computational Thinking dalam menyelesaikan permasalahan yang berkaitan dengan pencarian data.</div>
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

      <div className="flex justify-center mt-4">
        <img 
          src={ilustrasi1} 
          alt="Siswa Mengelola Data" 
          className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto"
        />
      </div>
      <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 2. Pencarian dengan VLOOKUP</p>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-4"> Pada gambar 2, fungsi <strong>VLOOKUP</strong> digunakan untuk mencari sebuah nilai tertentu, misalnya simbol <code>*</code> yang ada di sel G5, dalam sebuah tabel di rentang <strong>B5 sampai E9</strong>. Fungsi ini akan mencari simbol tersebut di <strong>kolom pertama tabel</strong> (kolom B). Jika simbol <code>*</code> ditemukan, maka fungsi akan mengambil <strong>nilai dari kolom ke-3</strong> (yaitu kolom D) yang sejajar atau sebaris dengan simbol tersebut. Angka 3 ini disebut <em>col index num</em>, yaitu posisi kolom yang diambil datanya. Karena menggunakan <code>FALSE</code>, artinya hanya akan cocok jika simbol yang dicari benar-benar sama persis. Jadi, jika simbol <code>*</code> ada di kolom B, maka nilai yang diambil dari kolom D adalah <code>@</code>. </p>

      <div className="flex justify-center mt-4">
        <img 
          src={ilustrasi2} 
          alt="Siswa Mengelola Data" 
          className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto"
        />
      </div>
      <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 3. Pencarian dengan HLOOKUP</p>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-4"> Pada Gambar 3, fungsi <strong>HLOOKUP</strong> digunakan untuk mencari sebuah nilai tertentu, misalnya simbol <code>*</code> yang ada di sel G5, dalam tabel pada rentang <strong>B5 sampai E9</strong>. Fungsi ini akan mencari simbol tersebut di <strong>baris pertama tabel</strong> (yaitu baris 5). Jika simbol <code>*</code> ditemukan, maka fungsi akan mengambil <strong>nilai dari baris ke-4</strong> dalam tabel (yaitu baris 8), di kolom yang sama. Angka 4 ini disebut <em>row index num</em>, yaitu posisi baris yang datanya ingin diambil. Karena kita memakai <code>FALSE</code>, maka pencarian hanya akan berhasil jika simbol yang dicari benar-benar sama. Jadi, jika simbol <code>*</code> ditemukan di baris 5, maka nilai dari baris 8 di kolom yang sama akan diambil, misalnya <code>@</code>. </p>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan memecahnya menjadi <span className="font-semibold">bagian-bagian kecil</span>. 
          Pencarian data dalam tabel lembar kerja dapat dipecah menjadi beberapa langkah berikut: 
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Identifikasi data</strong> yang akan dicari → Data harus memiliki nilai unik sebagai referensi (misalnya, kode barang atau kode siswa).
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menentukan tabel</strong> referensi → Data harus tersedia dalam tabel dengan format yang benar.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang sesuai dengan kebutuhan:
            <div className="ml-2 sm:ml-4 mt-1 sm:mt-2 space-y-2">
              <section className="bg-gray-100 rounded p-2 sm:p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38] text-sm md:text-base">1. VLOOKUP</h3>
                <p className="text-gray-700 text-sm md:text-base">Fungsi VLOOKUP (Vertical Lookup) dalam spreadsheet digunakan untuk mencari nilai tertentu dalam kolom pertama dari sebuah tabel atau rentang data secara vertical (dari atas ke bawah).</p>
                <pre className="bg-gray-200 p-1 sm:p-2 rounded text-gray-800 overflow-x-auto whitespace-normal break-words text-xs sm:text-sm">
                  =VLOOKUP(<span className="italic">lookup_value;table_array;col_index_num;[range_lookup]</span>)
                </pre>
                <p className="text-gray-700 text-sm md:text-base">Keterangan:</p>
                <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700">
                  <li className="text-sm md:text-base"><strong>lookup_value:</strong> Nilai yang akan dicari dalam kolom pertama tabel.</li>
                  <li className="text-sm md:text-base"><strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.</li>
                  <li className="text-sm md:text-base"><strong>col_index_num:</strong> Nomor kolom dari mana nilai yang ingin diambil.</li>
                  <li className="text-sm md:text-base"><strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.</li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-2 sm:p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38] text-sm md:text-base">2. HLOOKUP</h3>
                <p className="text-gray-700 text-sm md:text-base">Fungsi HLOOKUP (Horizontal Lookup) dalam spreadsheet digunakan untuk mencari nilai tertentu dalam baris pertama dari sebuah tabel atau rentang data secara horizontal (dari kiri ke kanan).</p>
                <pre className="bg-gray-200 p-1 sm:p-2 rounded text-gray-800 overflow-x-auto whitespace-normal break-words text-xs sm:text-sm">
                  =HLOOKUP(<span className="italic">lookup_value;table_array;row_index_num;[range_lookup]</span>)
                </pre>
                <p className="text-gray-700 text-sm md:text-base">Keterangan:</p>
                <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700">
                  <li className="text-sm md:text-base"><strong>lookup_value:</strong> Nilai yang akan dicari dalam baris pertama tabel.</li>
                  <li className="text-sm md:text-base"><strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.</li>
                  <li className="text-sm md:text-base"><strong>row_index_num:</strong> Nomor baris dari mana nilai yang ingin diambil.</li>
                  <li className="text-sm md:text-base"><strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.</li>
                </ul>
              </section>
            </div>
          </li>
        </ul>

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
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetDekomposisiAnswers}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {dekomposisiFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                dekomposisiFeedback.includes("Benar") ? "text-[#255F38]" : "text-red-600"
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
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center">
          <Filter className="mr-2 w-4 h-4 md:w-5 md:h-5" /> ABSTRAKSI
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-2 sm:mt-4 text-justify">
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
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center">
          <Code className="mr-2 w-4 h-4 md:w-5 md:h-5" /> ALGORITMA
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah memahami dan menyederhanakan masalah, kita dapat <span className="font-semibold">menyusun langkah-langkah sistematis</span> untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
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
            3. Tentukan nomor kolom atau baris yang berisi data yang ingin diambil.
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
          <h3 className="text-lg font-bold text-[#255F38] mb-2">MARI MENGAMATI</h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
           Perhatikan tabel data yang berisi kolom kode barang dan harga, di mana harga untuk kode C002 masih kosong. Gunakan fungsi LOOKUP untuk mencari harga C002 pada tabel referensi yang memuat daftar kode barang dan harganya, lalu isi harga yang sesuai di tabel data.
          </p>
          <div className="flex justify-center gap-6 mt-2">
            <div>
              <p className="text-gray-700 text-sm md:text-base text-center mb-2">Tabel Data</p>
              <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-2 py-1">Kode</th>
                    <th className="border border-green-600 px-2 py-1">Nama</th>
                    <th className="border border-green-600 px-2 py-1">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        isLookupStarted && lookupSteps[lookupStep].highlightedRows.includes(index)
                          ? lookupSteps[lookupStep].colorData || ""
                          : ""
                      }
                    >
                      <td
                        className={`border border-green-600 px-2 py-1 ${
                          isLookupStarted &&
                          lookupSteps[lookupStep].highlightedColumn === 1 &&
                          index === 1
                            ? "bg-yellow-200"
                            : ""
                        }`}
                      >
                        {row.kode}
                      </td>
                      <td className="border border-green-600 px-2 py-1">{row.nama}</td>
                      <td
                        className={`border border-green-600 px-2 py-1 ${
                          isLookupStarted &&
                          lookupSteps[lookupStep].highlightedColumn === 3 &&
                          index === 1 &&
                          lookupStep === lookupSteps.length - 1
                            ? "bg-orange-200"
                            : ""
                        }`}
                      >
                        {isLookupStarted &&
                        lookupStep === lookupSteps.length - 1 &&
                        row.kode === lookupValue
                          ? lookupSteps[lookupStep].result
                          : row.harga}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-gray-700 text-sm md:text-base text-center mb-2">Tabel Referensi</p>
              <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-2 py-1">Kode</th>
                    <th className="border border-green-600 px-2 py-1">Nama</th>
                    <th className="border border-green-600 px-2 py-1">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {tableReference.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        isLookupStarted && lookupSteps[lookupStep].highlightedRows.includes(index)
                          ? lookupSteps[lookupStep].colorReference || ""
                          : ""
                      }
                    >
                      <td
                        className={`border border-green-600 px-2 py-1 ${
                          isLookupStarted &&
                          lookupSteps[lookupStep].highlightedColumn === 1 &&
                          index === 1
                            ? "bg-green-200"
                            : ""
                        }`}
                      >
                        {row.kode}
                      </td>
                      <td className="border border-green-600 px-2 py-1">{row.nama}</td>
                      <td
                        className={`border border-green-600 px-2 py-1 ${
                          isLookupStarted &&
                          lookupSteps[lookupStep].highlightedColumn === 3 &&
                          index === 1 &&
                          lookupStep >= 3
                            ? "bg-blue-200"
                            : lookupSteps[lookupStep].colorReference === "bg-orange-200" &&
                              index === 1
                            ? "bg-orange-200"
                            : ""
                        }`}
                      >
                        {row.harga}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base text-center mt-2">
            Langkah saat ini: <strong>{isLookupStarted ? lookupSteps[lookupStep].description : "Tekan 'Mulai' untuk memulai visualisasi"}</strong>
          </p>
          {isLookupStarted && lookupSteps[lookupStep].result && (
            <p className="text-gray-700 text-sm md:text-base text-center mt-2">
              Hasil: <strong>{lookupSteps[lookupStep].result}</strong>
            </p>
          )}
          <div className="mt-4 flex space-x-2 justify-center">
            {!isLookupStarted ? (
              <button
                onClick={() => {
                  setIsLookupStarted(true);
                  setLookupStep(0);
                }}
                className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
              >
                Mulai
              </button>
            ) : (
              <>
                <button
                  onClick={() => nextStep(lookupStep, setLookupStep, lookupSteps.length, setIsLookupStarted)}
                  className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
                >
                  Langkah Selanjutnya
                </button>
                <button
                  onClick={() => resetStep(setLookupStep, setIsLookupStarted)}
                  className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
                >
                  Ulangi
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12">
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Pencarian Data dengan Fungsi Lookup</h3>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahaman Anda tentang konsep pencarian data menggunakan fungsi Lookup:
        </p>
        <div className="bg-yellow-50 p-3 sm:p-4 border border-yellow-300 rounded mt-4 shadow-md">
          <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-yellow-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center">
            <Lightbulb className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Soal {currentQuestion} dari 5
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
                  feedback[currentQuestion].includes("Benar") ? "text-[#255F38]" : "text-red-600"
                }`}
              >
                {feedback[currentQuestion]}
              </p>
            )}
            <div className="mt-4 flex justify-between">
              <div className="flex space-x-2">
                <button
                  onClick={goToPrevious}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px] cursor-pointer"
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
                  className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px] cursor-pointer"
                  disabled={currentQuestion === 5 && !isAnswered[currentQuestion]}
                >
                  {currentQuestion === 5 ? "Selesai" : "Soal Selanjutnya"}
                </button>
              )}
            </div>
            {currentQuestion === 5 && isAnswered[currentQuestion] && (
              <p className="mt-4 text-center text-[#255F38] font-bold text-base">
                Anda telah menyelesaikan semua soal! Klik "Sebelumnya" untuk meninjau.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-2 sm:px-6 py-2 mt-4">
        <button
          onClick={() => window.location.href = "/penerapan-ct"}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px] cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => window.location.href = "/contoh-lookup"}
          className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px] cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
}