import Layout from "../../components/Layout";
import { useState, useEffect } from "react";

export default function PencarianReference() {
  // State untuk Dekomposisi
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
        ? "Benar! Langkah yang tepat adalah menentukan tujuan dan menyiapkan data dalam tabel."
        : "Jawaban salah, ayo coba lagi."
    );
    setDekomposisiAnswered(true);
  };

  const resetDekomposisiAnswers = () => {
    setDekomposisiAnswers({ step1: false, step2: false, step3: false });
    setDekomposisiFeedback("");
    setDekomposisiAnswered(false);
  };

  // State untuk Pengenalan Pola
  const [polaAnswer, setPolaAnswer] = useState("");
  const [polaFeedback, setPolaFeedback] = useState("");
  const [polaAnswered, setPolaAnswered] = useState(false);

  const handlePolaChange = (value) => {
    setPolaAnswer(value);
  };

  const checkPolaAnswer = () => {
    const correctAnswer = "INDEX";
    setPolaFeedback(
      polaAnswer === correctAnswer
        ? "Benar! INDEX digunakan untuk mengambil data berdasarkan baris dan kolom."
        : "Jawaban salah, ayo coba lagi."
    );
    setPolaAnswered(true);
  };

  const resetPolaAnswer = () => {
    setPolaAnswer("");
    setPolaFeedback("");
    setPolaAnswered(false);
  };

  // State untuk Abstraksi
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
        ? "Benar! Hanya nomor absen dan nama siswa yang diperlukan untuk pencarian."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswers({ info1: false, info2: false, info3: false });
    setAbstraksiFeedback("");
    setAbstraksiAnswered(false);
  };

  // State untuk Algoritma INDEX
  const [algoritmaIndexAnswers, setAlgoritmaIndexAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [algoritmaIndexFeedback, setAlgoritmaIndexFeedback] = useState("");
  const [algoritmaIndexAnswered, setAlgoritmaIndexAnswered] = useState(false);

  const handleAlgoritmaIndexChange = (step) => {
    setAlgoritmaIndexAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkAlgoritmaIndexAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: false };
    const isCorrect =
      algoritmaIndexAnswers.step1 === correctAnswers.step1 &&
      algoritmaIndexAnswers.step2 === correctAnswers.step2 &&
      algoritmaIndexAnswers.step3 === correctAnswers.step3;
    setAlgoritmaIndexFeedback(
      isCorrect
        ? "Benar! Langkah yang tepat adalah memilih tabel dan menentukan posisi baris/kolom."
        : "Jawaban salah, ayo coba lagi."
    );
    setAlgoritmaIndexAnswered(true);
  };

  const resetAlgoritmaIndexAnswers = () => {
    setAlgoritmaIndexAnswers({ step1: false, step2: false, step3: false });
    setAlgoritmaIndexFeedback("");
    setAlgoritmaIndexAnswered(false);
  };

  // State untuk Algoritma MATCH
  const [algoritmaMatchAnswers, setAlgoritmaMatchAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [algoritmaMatchFeedback, setAlgoritmaMatchFeedback] = useState("");
  const [algoritmaMatchAnswered, setAlgoritmaMatchAnswered] = useState(false);

  const handleAlgoritmaMatchChange = (step) => {
    setAlgoritmaMatchAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkAlgoritmaMatchAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: false };
    const isCorrect =
      algoritmaMatchAnswers.step1 === correctAnswers.step1 &&
      algoritmaMatchAnswers.step2 === correctAnswers.step2 &&
      algoritmaMatchAnswers.step3 === correctAnswers.step3;
    setAlgoritmaMatchFeedback(
      isCorrect
        ? "Benar! Langkah yang tepat adalah memilih kode dan daftar pencarian."
        : "Jawaban salah, ayo coba lagi."
    );
    setAlgoritmaMatchAnswered(true);
  };

  const resetAlgoritmaMatchAnswers = () => {
    setAlgoritmaMatchAnswers({ step1: false, step2: false, step3: false });
    setAlgoritmaMatchFeedback("");
    setAlgoritmaMatchAnswered(false);
  };

  // State untuk Algoritma CHOOSE
  const [algoritmaChooseAnswers, setAlgoritmaChooseAnswers] = useState({
    step1: false,
    step2: false,
    step3: false,
  });
  const [algoritmaChooseFeedback, setAlgoritmaChooseFeedback] = useState("");
  const [algoritmaChooseAnswered, setAlgoritmaChooseAnswered] = useState(false);

  const handleAlgoritmaChooseChange = (step) => {
    setAlgoritmaChooseAnswers((prev) => ({ ...prev, [step]: !prev[step] }));
  };

  const checkAlgoritmaChooseAnswers = () => {
    const correctAnswers = { step1: true, step2: true, step3: false };
    const isCorrect =
      algoritmaChooseAnswers.step1 === correctAnswers.step1 &&
      algoritmaChooseAnswers.step2 === correctAnswers.step2 &&
      algoritmaChooseAnswers.step3 === correctAnswers.step3;
    setAlgoritmaChooseFeedback(
      isCorrect
        ? "Benar! Langkah yang tepat adalah memilih peringkat dan daftar hadiah."
        : "Jawaban salah, ayo coba lagi."
    );
    setAlgoritmaChooseAnswered(true);
  };

  const resetAlgoritmaChooseAnswers = () => {
    setAlgoritmaChooseAnswers({ step1: false, step2: false, step3: false });
    setAlgoritmaChooseFeedback("");
    setAlgoritmaChooseAnswered(false);
  };

  // State untuk Visualisasi INDEX
  const [indexRow, setIndexRow] = useState("");
  const [indexCol, setIndexCol] = useState("");
  const [indexResult, setIndexResult] = useState("");
  const [indexStepExplanation, setIndexStepExplanation] = useState("");
  const [indexSearching, setIndexSearching] = useState(false);
  const indexReferenceData = [
    { Kode: "P001", Nama: "Buku", Harga: "5000" },
    { Kode: "P002", Nama: "Pensil", Harga: "2000" },
    { Kode: "P003", Nama: "Penghapus", Harga: "1000" },
  ];

  const startIndexSearch = () => {
    const row = parseInt(indexRow);
    const col = parseInt(indexCol);
    if (isNaN(row) || isNaN(col) || row < 1 || row > 3 || col < 1 || col > 3) {
      setIndexStepExplanation("Masukkan nomor baris dan kolom antara 1 sampai 3.");
      return;
    }
    setIndexSearching(true);
    setIndexStepExplanation(`Mencari data pada baris ${row} dan kolom ${col}...`);
    setTimeout(() => {
      const keys = Object.keys(indexReferenceData[0]);
      const value = indexReferenceData[row - 1][keys[col - 1]];
      setIndexResult(`Ditemukan: ${value}`);
      setIndexStepExplanation(`Data ditemukan pada baris ${row}, kolom ${col}: ${value}`);
      setIndexSearching(false);
    }, 1500);
  };

  const resetIndexSearch = () => {
    setIndexRow("");
    setIndexCol("");
    setIndexResult("");
    setIndexStepExplanation("");
    setIndexSearching(false);
  };

  // State untuk Visualisasi MATCH
  const [matchLookupValue, setMatchLookupValue] = useState("");
  const [matchCurrentIndex, setMatchCurrentIndex] = useState(-1);
  const [matchResult, setMatchResult] = useState("");
  const [matchStepExplanation, setMatchStepExplanation] = useState("");
  const [matchSearching, setMatchSearching] = useState(false);
  const matchReferenceData = ["T01", "T02", "T03"];
  const [matchResultTable, setMatchResultTable] = useState([
    { value: "T01", position: "-" },
    { value: "T02", position: "-" },
    { value: "T03", position: "-" },
  ]);

  const startMatchSearch = () => {
    if (!matchLookupValue) {
      setMatchStepExplanation("Masukkan kode tim (contoh: T02).");
      return;
    }
    setMatchSearching(true);
    setMatchCurrentIndex(0);
    setMatchStepExplanation("");
    setMatchResult("");
    setMatchResultTable([
      { value: "T01", position: "-" },
      { value: "T02", position: "-" },
      { value: "T03", position: "-" },
    ]);
  };

  const resetMatchSearch = () => {
    setMatchLookupValue("");
    setMatchCurrentIndex(-1);
    setMatchResult("");
    setMatchStepExplanation("");
    setMatchSearching(false);
    setMatchResultTable([
      { value: "T01", position: "-" },
      { value: "T02", position: "-" },
      { value: "T03", position: "-" },
    ]);
  };

  useEffect(() => {
    let interval;
    if (matchSearching && matchCurrentIndex >= 0 && matchCurrentIndex < matchReferenceData.length) {
      interval = setInterval(() => {
        const currentValue = matchReferenceData[matchCurrentIndex];
        setMatchStepExplanation(`Mencocokkan kode ${matchLookupValue} dengan ${currentValue} di baris ${matchCurrentIndex + 1}...`);

        if (currentValue === matchLookupValue) {
          setMatchResultTable((prev) =>
            prev.map((row, index) =>
              index === matchCurrentIndex ? { ...row, position: matchCurrentIndex + 1 } : row
            )
          );
          setMatchResult(`Ditemukan: Posisi ${matchCurrentIndex + 1}`);
          setMatchStepExplanation(`Kode ${matchLookupValue} ditemukan di posisi ${matchCurrentIndex + 1}!`);
          setMatchSearching(false);
          clearInterval(interval);
        } else if (matchCurrentIndex === matchReferenceData.length - 1) {
          setMatchResult("Tidak ditemukan");
          setMatchStepExplanation(`Kode ${matchLookupValue} tidak ditemukan dalam daftar.`);
          setMatchSearching(false);
          clearInterval(interval);
        } else {
          setMatchCurrentIndex((prev) => prev + 1);
        }
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [matchSearching, matchCurrentIndex, matchLookupValue]);

  // State untuk Visualisasi CHOOSE
  const [chooseIndex, setChooseIndex] = useState("");
  const [chooseResult, setChooseResult] = useState("");
  const [chooseStepExplanation, setChooseStepExplanation] = useState("");
  const [chooseSearching, setChooseSearching] = useState(false);
  const chooseReferenceData = ["Buku", "Pensil", "Penghapus"];
  const [chooseResultTable, setChooseResultTable] = useState([
    { value: "Buku", selected: "-" },
    { value: "Pensil", selected: "-" },
    { value: "Penghapus", selected: "-" },
  ]);

  const startChooseSearch = () => {
    const idx = parseInt(chooseIndex);
    if (isNaN(idx) || idx < 1 || idx > 3) {
      setChooseStepExplanation("Masukkan nomor peringkat antara 1 sampai 3.");
      return;
    }
    setChooseSearching(true);
    setChooseStepExplanation(`Memilih hadiah untuk peringkat ${idx}...`);
    setChooseResultTable((prev) =>
      prev.map((row) => ({ ...row, selected: "-" }))
    );
    setTimeout(() => {
      const value = chooseReferenceData[idx - 1];
      setChooseResultTable((prev) =>
        prev.map((row, index) =>
          index === idx - 1 ? { ...row, selected: value } : row
        )
      );
      setChooseResult(`Ditemukan: ${value}`);
      setChooseStepExplanation(`Peringkat ${idx} mendapatkan hadiah: ${value}`);
      setChooseSearching(false);
    }, 1500);
  };

  const resetChooseSearch = () => {
    setChooseIndex("");
    setChooseResult("");
    setChooseStepExplanation("");
    setChooseSearching(false);
    setChooseResultTable([
      { value: "Buku", selected: "-" },
      { value: "Pensil", selected: "-" },
      { value: "Penghapus", selected: "-" },
    ]);
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
      question: "Fungsi apa yang digunakan untuk mengambil data berdasarkan baris dan kolom?",
      options: ["A. INDEX", "B. MATCH", "C. CHOOSE", "D. VLOOKUP"],
      correctAnswer: "A. INDEX",
      explanation: "INDEX digunakan untuk mengambil data dari tabel berdasarkan nomor baris dan kolom.",
    },
    {
      question: "Apa fungsi MATCH dalam pencarian data?",
      options: [
        "A. Mengambil data dari tabel",
        "B. Mencari posisi suatu nilai",
        "C. Memilih nilai berdasarkan indeks",
        "D. Mengurutkan data",
      ],
      correctAnswer: "B. Mencari posisi suatu nilai",
      explanation: "MATCH digunakan untuk menemukan posisi suatu nilai dalam daftar.",
    },
    {
      question: "Apa yang dilakukan fungsi CHOOSE?",
      options: [
        "A. Mencari data berdasarkan kode",
        "B. Memilih nilai berdasarkan indeks",
        "C. Mengambil data dari kolom",
        "D. Mencocokkan data dengan tabel",
      ],
      correctAnswer: "B. Memilih nilai berdasarkan indeks",
      explanation: "CHOOSE memilih satu nilai dari daftar berdasarkan nomor indeks yang diberikan.",
    },
    {
      question: "Langkah apa yang termasuk dalam dekomposisi pencarian data?",
      options: [
        "A. Menentukan tujuan pencarian",
        "B. Menggambar grafik",
        "C. Menghitung rata-rata",
        "D. Membuat presentasi",
      ],
      correctAnswer: "A. Menentukan tujuan pencarian",
      explanation: "Dekomposisi melibatkan menentukan tujuan pencarian untuk memecah masalah menjadi langkah-langkah kecil.",
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
      explanation: "Abstraksi berfokus pada mengambil data yang penting dan mengabaikan informasi yang tidak diperlukan.",
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
          <div className="text-sm md:text-base">1. Memahami konsep pencarian data menggunakan fungsi Reference.</div>
          <div className="text-sm md:text-base">2. Menggunakan pendekatan Computational Thinking untuk menyelesaikan masalah pencarian data.</div>
          <div className="text-sm md:text-base">3. Menerapkan fungsi Reference dalam studi kasus pencarian data di lembar kerja.</div>
        </div>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6">
        Dalam kehidupan sehari-hari, kita sering mencari informasi, seperti nama siswa dari nomor absen atau hadiah dari peringkat lomba. Dalam dunia digital, kita bisa menggunakan <strong>Fungsi Reference</strong> di aplikasi lembar kerja untuk mencari data dengan cepat dan mudah. Fungsi Reference membantu kita mengambil data berdasarkan posisi, mencari posisi suatu nilai, atau memilih nilai tertentu dari daftar.
      </p>

      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg mt-2 sm:mt-6">
        2. Pencarian Reference
      </div>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-2 sm:mt-4">
        Fungsi Reference digunakan untuk:
      </p>
      <div className="mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <div className="text-sm md:text-base text-justify">
          <strong>1. Mengambil data</strong> dari tabel → Berdasarkan posisi baris dan kolom tertentu.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>2. Mencari posisi</strong> suatu nilai → Menemukan letak data dalam daftar.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>3. Memilih salah satu nilai</strong> → Dari beberapa pilihan yang sudah ditentukan.
        </div>
      </div>
      <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-2 sm:px-6 mt-2">
        Fungsi Reference utama dalam lembar kerja adalah:
      </p>
      <div className="mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <div className="text-sm md:text-base text-justify">
          <strong>INDEX</strong> → Mengambil data dari tabel berdasarkan nomor baris dan kolom.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>MATCH</strong> → Mencari posisi suatu nilai dalam daftar.
        </div>
        <div className="text-sm md:text-base text-justify">
          <strong>CHOOSE</strong> → Memilih satu nilai dari daftar berdasarkan nomor tertentu.
        </div>
      </div>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Sebelum menggunakan fungsi Reference, kita perlu memecah masalah pencarian data menjadi langkah-langkah kecil agar lebih mudah dipahami.
        </p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. Menentukan tujuan</strong> pencarian → Apa yang ingin dicari, seperti nama siswa atau hadiah lomba.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. Menyiapkan data</strong> → Mengatur data dalam tabel yang rapi.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. Memilih fungsi</strong> → Memilih fungsi Reference yang sesuai, seperti INDEX, MATCH, atau CHOOSE.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Memecah Masalah Pencarian Nama Siswa
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Ibu Guru ingin mencari nama siswa berdasarkan nomor absen dari daftar absen. Pilih langkah-langkah yang tepat:
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
                1. Tentukan tujuan: cari nama siswa dari nomor absen.
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
                2. Siapkan tabel berisi nomor absen dan nama siswa.
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
                3. Hitung jumlah siswa yang hadir.
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

      {/* PENGENALAN POLA */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah memecah masalah, kita perlu menemukan pola dalam data untuk memilih fungsi Reference yang tepat.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Pola umum dalam pencarian Reference:</p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. INDEX</strong> → Mengambil data berdasarkan posisi baris dan kolom dalam tabel.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. MATCH</strong> → Mencari posisi data dalam daftar.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. CHOOSE</strong> → Memilih satu nilai dari daftar berdasarkan nomor urut.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Memilih Fungsi yang Tepat
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Rudi ingin tahu nama barang di baris ke-2, kolom ke-2 dari tabel berikut. Fungsi apa yang tepat?
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
                  <td className="border border-green-600 px-2 py-1">P001</td>
                  <td className="border border-green-600 px-2 py-1">Buku</td>
                  <td className="border border-green-600 px-2 py-1">5000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-600 px-2 py-1">P002</td>
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
                  value="INDEX"
                  checked={polaAnswer === "INDEX"}
                  onChange={() => handlePolaChange("INDEX")}
                  className="mr-2"
                />
                1. INDEX
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="MATCH"
                  checked={polaAnswer === "MATCH"}
                  onChange={() => handlePolaChange("MATCH")}
                  className="mr-2"
                />
                2. MATCH
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="pattern"
                  value="CHOOSE"
                  checked={polaAnswer === "CHOOSE"}
                  onChange={() => handlePolaChange("CHOOSE")}
                  className="mr-2"
                />
                3. CHOOSE
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

      {/* ABSTRAKSI */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah menemukan pola, kita hanya perlu fokus pada data yang penting dan mengabaikan informasi yang tidak diperlukan.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Hal yang perlu diperhatikan:</p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. Pilih data penting</strong> → Hanya gunakan data yang dibutuhkan, seperti nomor absen dan nama.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. Abaikan data lain</strong> → Jangan gunakan informasi yang tidak relevan, seperti nilai ujian.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. Pastikan data jelas</strong> → Tabel harus rapi dan mudah dibaca.
          </div>
        </div>
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Memilih Data Penting
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Pak Guru ingin mencari nama siswa berdasarkan nomor absen dari tabel yang berisi nomor absen, nama, dan nilai matematika. Pilih data yang diperlukan:
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
                1. Nomor absen dan nama siswa.
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
                2. Nilai matematika.
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
                3. Jadwal ujian.
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

      {/* ALGORITMA */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Algoritma
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah memahami data yang penting, kita bisa membuat langkah-langkah untuk menggunakan fungsi Reference.
        </p>

        <div>
          <p className="text-gray-700 text-sm md:text-base text-justify">📌 Langkah-langkah menggunakan <strong>INDEX</strong>:</p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base text-justify">1. Pilih tabel data yang akan digunakan.</div>
            <div className="text-sm md:text-base text-justify">2. Tentukan nomor baris dan kolom data yang ingin diambil.</div>
            <div className="text-sm md:text-base text-justify">3. Tulis rumus INDEX dengan benar.</div>
          </div>
          <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
            <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
              Latihan Pemahaman: Langkah Menggunakan INDEX
            </h3>
            <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
              Ani ingin mencari nama barang dari tabel berdasarkan baris ke-2 dan kolom ke-2. Pilih langkah yang tepat:
            </p>
            <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaIndexAnswers.step1}
                    onChange={() => handleAlgoritmaIndexChange("step1")}
                    className="mr-2"
                  />
                  1. Pilih tabel yang berisi data barang.
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaIndexAnswers.step2}
                    onChange={() => handleAlgoritmaIndexChange("step2")}
                    className="mr-2"
                  />
                  2. Tentukan posisi: baris ke-2, kolom ke-2.
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaIndexAnswers.step3}
                    onChange={() => handleAlgoritmaIndexChange("step3")}
                    className="mr-2"
                  />
                  3. Hitung jumlah barang.
                </label>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={checkAlgoritmaIndexAnswers}
                className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
              >
                Periksa
              </button>
              <button
                onClick={resetAlgoritmaIndexAnswers}
                className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
              >
                Hapus
              </button>
            </div>
            {algoritmaIndexFeedback && (
              <p
                className={`text-sm mt-2 font-bold ${
                  algoritmaIndexFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {algoritmaIndexFeedback}
              </p>
            )}
          </div>
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base text-justify mt-4">📌 Langkah-langkah menggunakan <strong>MATCH</strong>:</p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base text-justify">1. Tentukan nilai yang ingin dicari.</div>
            <div className="text-sm md:text-base text-justify">2. Pilih daftar tempat mencari nilai.</div>
            <div className="text-sm md:text-base text-justify">3. Tulis rumus MATCH dengan benar.</div>
          </div>
          <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
            <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
              Latihan Pemahaman: Langkah Menggunakan MATCH
            </h3>
            <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
              Budi ingin tahu posisi kode "T02" dalam daftar kode tim: "T01", "T02", "T03". Pilih langkah yang tepat:
            </p>
            <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaMatchAnswers.step1}
                    onChange={() => handleAlgoritmaMatchChange("step1")}
                    className="mr-2"
                  />
                  1. Tentukan kode: cari posisi "T02".
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaMatchAnswers.step2}
                    onChange={() => handleAlgoritmaMatchChange("step2")}
                    className="mr-2"
                  />
                  2. Pilih daftar kode tim: "T01", "T02", "T03".
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaMatchAnswers.step3}
                    onChange={() => handleAlgoritmaMatchChange("step3")}
                    className="mr-2"
                  />
                  3. Urutkan daftar kode tim.
                </label>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={checkAlgoritmaMatchAnswers}
                className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
              >
                Periksa
              </button>
              <button
                onClick={resetAlgoritmaMatchAnswers}
                className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
              >
                Hapus
              </button>
            </div>
            {algoritmaMatchFeedback && (
              <p
                className={`text-sm mt-2 font-bold ${
                  algoritmaMatchFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {algoritmaMatchFeedback}
              </p>
            )}
          </div>
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base text-justify mt-4">📌 Langkah-langkah menggunakan <strong>CHOOSE</strong>:</p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base text-justify">1. Tentukan nomor urut (indeks) yang akan dipilih.</div>
            <div className="text-sm md:text-base text-justify">2. Tulis daftar nilai yang bisa dipilih.</div>
            <div className="text-sm md:text-base text-justify">3. Tulis rumus CHOOSE dengan benar.</div>
          </div>
          <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
            <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
              Latihan Pemahaman: Langkah Menggunakan CHOOSE
            </h3>
            <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
              Siti ingin tahu hadiah untuk peringkat ke-2 dari daftar: "Buku", "Pensil", "Penghapus". Pilih langkah yang tepat:
            </p>
            <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaChooseAnswers.step1}
                    onChange={() => handleAlgoritmaChooseChange("step1")}
                    className="mr-2"
                  />
                  1. Tentukan peringkat: peringkat ke-2.
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaChooseAnswers.step2}
                    onChange={() => handleAlgoritmaChooseChange("step2")}
                    className="mr-2"
                  />
                  2. Tulis daftar hadiah: "Buku", "Pensil", "Penghapus".
                </label>
              </div>
              <div className="text-sm md:text-base">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={algoritmaChooseAnswers.step3}
                    onChange={() => handleAlgoritmaChooseChange("step3")}
                    className="mr-2"
                  />
                  3. Hitung jumlah hadiah.
                </label>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={checkAlgoritmaChooseAnswers}
                className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
              >
                Periksa
              </button>
              <button
                onClick={resetAlgoritmaChooseAnswers}
                className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
              >
                Hapus
              </button>
            </div>
            {algoritmaChooseFeedback && (
              <p
                className={`text-sm mt-2 font-bold ${
                  algoritmaChooseFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {algoritmaChooseFeedback}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* VISUALISASI INTERAKTIF */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12">
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Visualisasi Interaktif: Cara Kerja Fungsi Reference</h3>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          Coba simulasi berikut untuk memahami cara kerja fungsi INDEX, MATCH, dan CHOOSE.
        </p>

        {/* Visualisasi INDEX */}
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h4 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">INDEX: Ambil Data Berdasarkan Baris dan Kolom</h4>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <input
              type="number"
              value={indexRow}
              onChange={(e) => setIndexRow(e.target.value)}
              placeholder="Nomor baris (1-3)"
              className="p-2 border rounded w-full sm:w-40"
            />
            <input
              type="number"
              value={indexCol}
              onChange={(e) => setIndexCol(e.target.value)}
              placeholder="Nomor kolom (1-3)"
              className="p-2 border rounded w-full sm:w-40"
            />
            <button
              onClick={startIndexSearch}
              className="bg-[#1B5E20] text-white p-2 rounded hover:bg-[#145A20] transition duration-300 w-full sm:w-auto"
            >
              Mulai
            </button>
            <button
              onClick={resetIndexSearch}
              className="bg-[#B0BEC5] text-white p-2 rounded hover:bg-[#90A4AE] transition duration-300 w-full sm:w-auto"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
            <span className="text-sm md:text-base font-bold">1. Masukkan Baris & Kolom</span>
            <span className="text-2xl hidden sm:inline">→</span>
            <span className="text-sm md:text-base font-bold">2. Cari di Tabel</span>
            <span className="text-2xl hidden sm:inline">→</span>
            <span className="text-sm md:text-base font-bold">3. Tampilkan Hasil</span>
          </div>

          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-gray-700 text-sm md:text-base">
              <strong>Langkah Pencarian:</strong>{" "}
              {indexStepExplanation || "Masukkan nomor baris dan kolom, lalu klik Mulai."}
            </p>
          </div>

          <h4 className="font-semibold text-[#2E7D32] mt-4 text-sm md:text-base">Tabel Data</h4>
          <div className="overflow-x-auto w-full">
            <table className="border-collapse border border-green-800 w-full mt-2">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Kode</th>
                  <th className="border border-green-600 px-2 py-1">Nama</th>
                  <th className="border border-green-600 px-2 py-1">Harga</th>
                </tr>
              </thead>
              <tbody>
                {indexReferenceData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                  >
                    {Object.values(row).map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className={`border border-green-600 px-2 py-1 ${
                          indexSearching &&
                          parseInt(indexRow) === rowIndex + 1 &&
                          parseInt(indexCol) === colIndex + 1
                            ? "bg-yellow-200 animate-pulse"
                            : ""
                        } ${
                          !indexSearching &&
                          indexResult &&
                          parseInt(indexRow) === rowIndex + 1 &&
                          parseInt(indexCol) === colIndex + 1
                            ? "bg-green-200"
                            : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-4 text-sm md:text-base">
            <strong>Hasil:</strong>{" "}
            {indexResult || (indexSearching ? "Mencari..." : "Masukkan baris dan kolom, lalu klik Mulai")}
          </p>
        </div>

        {/* Visualisasi MATCH */}
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h4 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">MATCH: Cari Posisi Nilai</h4>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <input
              type="text"
              value={matchLookupValue}
              onChange={(e) => setMatchLookupValue(e.target.value)}
              placeholder="Masukkan kode tim (contoh: T02)"
              className="p-2 border rounded w-full sm:w-64"
            />
            <button
              onClick={startMatchSearch}
              className="bg-[#1B5E20] text-white p-2 rounded hover:bg-[#145A20] transition duration-300 w-full sm:w-auto"
            >
              Mulai
            </button>
            <button
              onClick={resetMatchSearch}
              className="bg-[#B0BEC5] text-white p-2 rounded hover:bg-[#90A4AE] transition duration-300 w-full sm:w-auto"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
            <span className="text-sm md:text-base font-bold">1. Masukkan Kode Tim</span>
            <span className="text-2xl hidden sm:inline">→</span>
            <span className="text-sm md:text-base font-bold">2. Cari di Daftar</span>
            <span className="text-2xl hidden sm:inline">→</span>
            <span className="text-sm md:text-base font-bold">3. Tampilkan Hasil</span>
          </div>

          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-gray-700 text-sm md:text-base">
              <strong>Langkah Pencarian:</strong>{" "}
              {matchStepExplanation || "Masukkan kode tim dan klik Mulai."}
            </p>
          </div>

          <h4 className="font-semibold text-[#2E7D32] mt-4 text-sm md:text-base">Daftar Kode Tim</h4>
          <div className="overflow-x-auto w-full">
            <table className="border-collapse border border-green-800 w-full mt-2">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Kode</th>
                </tr>
              </thead>
              <tbody>
                {matchReferenceData.map((value, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                  >
                    <td
                      className={`border border-green-600 px-2 py-1 ${
                        matchSearching && matchCurrentIndex === rowIndex
                          ? "bg-yellow-200 animate-pulse"
                          : ""
                      } ${
                        !matchSearching &&
                        value === matchLookupValue &&
                        matchResult
                          ? "bg-green-200"
                          : ""
                      }`}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-[#2E7D32] mt-4 text-sm md:text-base">Hasil Pencarian</h4>
          <div className="overflow-x-auto w-full">
            <table className="border-collapse border border-green-800 w-full mt-2">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Kode</th>
                  <th className="border border-green-600 px-2 py-1">Posisi</th>
                </tr>
              </thead>
              <tbody>
                {matchResultTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-green-50" : "bg-white"
                    } ${
                      row.value === matchLookupValue && row.position !== "-"
                        ? "bg-green-200"
                        : ""
                    }`}
                  >
                    <td className="border border-green-600 px-2 py-1">{row.value}</td>
                    <td className="border border-green-600 px-2 py-1">{row.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-4 text-sm md:text-base">
            <strong>Hasil:</strong>{" "}
            {matchResult || (matchSearching ? "Mencari..." : "Masukkan kode tim dan klik Mulai")}
          </p>
        </div>

        {/* Visualisasi CHOOSE */}
        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h4 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">CHOOSE: Pilih Hadiah Berdasarkan Peringkat</h4>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <input
              type="number"
              value={chooseIndex}
              onChange={(e) => setChooseIndex(e.target.value)}
              placeholder="Masukkan peringkat (1-3)"
              className="p-2 border rounded w-full sm:w-64"
            />
            <button
              onClick={startChooseSearch}
              className="bg-[#1B5E20] text-white p-2 rounded hover:bg-[#145A20] transition duration-300 w-full sm:w-auto"
            >
              Mulai
            </button>
            <button
              onClick={resetChooseSearch}
              className="bg-[#B0BEC5] text-white p-2 rounded hover:bg-[#90A4AE] transition duration-300 w-full sm:w-auto"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
            <span className="text-sm md:text-base font-bold">1. Masukkan Peringkat</span>
            <span className="text-2xl hidden sm:inline">→</span>
            <span className="text-sm md:text-base font-bold">2. Pilih Hadiah</span>
            <span className="text-2xl hidden sm:inline">→</span>
            <span className="text-sm md:text-base font-bold">3. Tampilkan Hasil</span>
          </div>

          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-gray-700 text-sm md:text-base">
              <strong>Langkah Pencarian:</strong>{" "}
              {chooseStepExplanation || "Masukkan nomor peringkat dan klik Mulai."}
            </p>
          </div>

          <h4 className="font-semibold text-[#2E7D32] mt-4 text-sm md:text-base">Daftar Hadiah</h4>
          <div className="overflow-x-auto w-full">
            <table className="border-collapse border border-green-800 w-full mt-2">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Hadiah</th>
                </tr>
              </thead>
              <tbody>
                {chooseReferenceData.map((value, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                  >
                    <td
                      className={`border border-green-600 px-2 py-1 ${
                        chooseSearching && parseInt(chooseIndex) === rowIndex + 1
                          ? "bg-yellow-200 animate-pulse"
                          : ""
                      } ${
                        !chooseSearching &&
                        chooseResult &&
                        chooseReferenceData.indexOf(value) === parseInt(chooseIndex) - 1
                          ? "bg-green-200"
                          : ""
                      }`}
                    >
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-[#2E7D32] mt-4 text-sm md:text-base">Hasil Pilihan</h4>
          <div className="overflow-x-auto w-full">
            <table className="border-collapse border border-green-800 w-full mt-2">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Hadiah</th>
                  <th className="border border-green-600 px-2 py-1">Dipilih</th>
                </tr>
              </thead>
              <tbody>
                {chooseResultTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-green-50" : "bg-white"
                    } ${
                      row.value === chooseResult && row.selected !== "-"
                        ? "bg-green-200"
                        : ""
                    }`}
                  >
                    <td className="border border-green-600 px-2 py-1">{row.value}</td>
                    <td className="border border-green-600 px-2 py-1">{row.selected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-4 text-sm md:text-base">
            <strong>Hasil:</strong>{" "}
            {chooseResult || (chooseSearching ? "Memilih..." : "Masukkan peringkat dan klik Mulai")}
          </p>
        </div>
      </div>

      {/* KUIS PEMAHAMAN */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12">
        <h3 className="font-semibold text-[#255F38] text-lg mb-2">Kuis Pemahaman: Pencarian Reference</h3>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          Jawab pertanyaan berikut untuk menguji pemahamanmu tentang fungsi Reference:
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

      <div className="flex justify-between items-center px-2 sm:px-6 py-2 mt-4">
        <a href="/penerapan-lookup" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px]">
          ← Sebelumnya
        </a>
        <a href="/contoh-reference" className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}