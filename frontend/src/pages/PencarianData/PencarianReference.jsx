import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import ilustrasi3 from "../../assets/PencarianData/ilustrasi3.png";
import ilustrasi4 from "../../assets/PencarianData/ilustrasi4.png";
import ilustrasi5 from "../../assets/PencarianData/ilustrasi5.png";

export default function PencarianReference() {
  // State untuk Pengenalan Pola (tidak diubah)
  const [patternItems, setPatternItems] = useState([
    "Ingin menampilkan harga barang pada baris 2 dan kolom 3",
    "Ingin mencari posisi peserta lomba bernama Andi",
    "Ingin memilih hadiah Trophy untuk pemenang pertama",
  ]);
  const [patternDropZone, setPatternDropZone] = useState(["", "", ""]);
  const [patternFeedback, setPatternFeedback] = useState("");

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setPatternItems(shuffleArray([
      "Ingin menampilkan harga barang pada baris 2 dan kolom 3",
      "Ingin mencari posisi peserta lomba bernama Andi",
      "Ingin memilih hadiah Trophy untuk pemenang pertama",
    ]));
  }, []);

  const handlePatternDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handlePatternDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("text/plain");
    const newPatternDropZone = [...patternDropZone];
    newPatternDropZone[dropIndex] = patternItems[dragIndex];
    setPatternDropZone(newPatternDropZone);

    const newPatternItems = patternItems.filter((_, i) => i !== parseInt(dragIndex));
    setPatternItems(newPatternItems);
  };

  const handlePatternDragOver = (e) => {
    e.preventDefault();
  };

  const checkPatternAnswers = () => {
    const correctOrder = [
      "Ingin menampilkan harga barang pada baris 2 dan kolom 3",
      "Ingin mencari posisi peserta lomba bernama Andi",
      "Ingin memilih hadiah Trophy untuk pemenang pertama",
    ];
    const isCorrect = patternDropZone.every((item, index) => item === correctOrder[index]);
    setPatternFeedback(
      isCorrect
        ? "Benar! Anda telah mencocokkan contoh dengan fungsi yang tepat."
        : "Jawaban salah, ayo coba lagi."
    );
  };

  const resetPattern = () => {
    setPatternItems(shuffleArray([
      "Ingin menampilkan harga barang pada baris 2 dan kolom 3",
      "Ingin mencari posisi peserta lomba bernama Andi",
      "Ingin memilih hadiah Trophy untuk pemenang pertama",
    ]));
    setPatternDropZone(["", "", ""]);
    setPatternFeedback("");
  };

  const patternHints = [
    "Fungsi INDEX",
    "Fungsi MATCH",
    "Fungsi CHOOSE",
  ];

  // State untuk Abstraksi (tidak diubah)
  const [abstraksiAnswers, setAbstraksiAnswers] = useState("");
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const [abstraksiAnswered, setAbstraksiAnswered] = useState(false);

  const handleAbstraksiChange = (value) => {
    setAbstraksiAnswers(value);
    setAbstraksiFeedback("");
  };

  const checkAbstraksiAnswers = () => {
    const correctAnswer = "info2";
    const isCorrect = abstraksiAnswers === correctAnswer;
    setAbstraksiFeedback(
      isCorrect
        ? "Benar! Hanya nomor absen dan nama siswa yang relevan untuk pencarian."
        : "Jawaban salah, ayo coba lagi."
    );
    setAbstraksiAnswered(true);
  };

  const resetAbstraksiAnswers = () => {
    setAbstraksiAnswers("");
    setAbstraksiFeedback("");
    setAbstraksiAnswered(false);
  };

  // State untuk Kuis Pemahaman (tidak diubah)
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
      question: "Fungsi yang digunakan untuk mengambil data berdasarkan baris dan kolom adalah ....",
      options: ["A. INDEX", "B. MATCH", "C. CHOOSE", "D. VLOOKUP"],
      correctAnswer: "A. INDEX",
      explanation: "INDEX digunakan untuk mengambil data dari tabel berdasarkan nomor baris dan kolom.",
    },
    {
      question: "Fungsi MATCH dalam pencarian data berfungsi untuk ....",
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
      question: "Fungsi CHOOSE bertugas untuk ....",
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
      question: "Langkah-langkah yang termasuk dalam dekomposisi pencarian data adalah ....",
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
      question: "Dalam proses abstraksi, yang harus dilakukan adalah ....",
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

  // Fungsi untuk navigasi tombol
  const navigateToPrevious = () => {
    window.location.href = "/penerapan-lookup";
  };

  const navigateToNext = () => {
    window.location.href = "/contoh-reference";
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

      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg mt-2 sm:mt-6">
        2. Pencarian Reference
      </div>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-2 sm:mt-4">
        Dalam kehidupan sehari-hari, kita sering mencari informasi, seperti nama siswa dari nomor absen atau hadiah dari peringkat lomba. Dalam dunia digital, kita bisa menggunakan <strong>Fungsi Reference</strong> di aplikasi lembar kerja untuk mencari data dengan cepat dan mudah. Fungsi Reference membantu kita mengambil data berdasarkan posisi, mencari posisi suatu nilai, atau memilih nilai tertentu dari daftar.
      </p>

      <div className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6">
        <p className="font-semibold">Fungsi Reference dalam Lembar Kerja:</p>
        <ul className="mt-1 sm:mt-2 ml-6 space-y-1 sm:space-y-2 list-disc">
          <li><strong>INDEX</strong>: Mengambil data dari tabel berdasarkan nomor baris dan kolom.</li>
          <li><strong>MATCH</strong>: Mencari posisi suatu nilai dalam daftar.</li>
          <li><strong>CHOOSE</strong>: Memilih satu nilai dari daftar berdasarkan nomor tertentu.</li>
        </ul>
      </div>

      {/* INDEX */}
      <div className="flex justify-center mt-4">
        <img
          src={ilustrasi3}
          alt="Siswa Mengelola Data"
          className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto"
        />
      </div>
      <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 4. Pencarian dengan INDEX</p>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-4">
        Pada gambar 4, fungsi <strong>INDEX</strong> digunakan untuk mengambil sebuah nilai dari tabel berdasarkan posisi baris dan kolom. Misalnya, ditentukan bahwa data yang diambil berada di <strong>baris ke-4 dan kolom ke-2</strong>. Maka, fungsi akan mencari titik temu antara baris dan kolom tersebut, lalu mengambil nilai yang ada pada posisi tersebut. Pada gambar terlihat panah menunjukkan alur pencarian menuju nilai <code>@</code>, yang merupakan hasil dari fungsi INDEX. Nilai ini diperoleh karena berada pada posisi baris dan kolom yang telah ditentukan sebelumnya.
      </p>

      {/* MATCH */}
      <div className="flex justify-center mt-4">
        <img
          src={ilustrasi4}
          alt="Siswa Mengelola Data"
          className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto"
        />
      </div>
      <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 5. Pencarian dengan MATCH</p>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-4">
        Pada gambar 5, fungsi <strong>MATCH</strong> digunakan untuk mencari <strong>posisi dari suatu data</strong> dalam sebuah daftar. Misalnya, ingin dicari di urutan keberapa simbol <code>@</code> berada. Fungsi ini akan memeriksa satu per satu data dari atas, sampai menemukan simbol yang dicari. Jika simbol <code>@</code> ditemukan di baris ke-5, maka fungsi MATCH akan menghasilkan angka <strong>5</strong> sebagai posisi data tersebut dalam daftar. Jadi, hasil dari fungsi MATCH bukanlah nilainya, melainkan <strong>nomor urutan</strong> tempat data itu ditemukan.
      </p>

      {/* CHOOSE */}
      <div className="flex justify-center mt-4">
        <img
          src={ilustrasi5}
          alt="Siswa Mengelola Data"
          className="w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-md h-auto"
        />
      </div>
      <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 6. Pencarian dengan CHOOSE</p>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-4">
        Pada gambar 6, fungsi <strong>CHOOSE</strong> digunakan untuk mengambil <strong>satu nilai dari beberapa pilihan</strong> berdasarkan nomor indeks. Misalnya, jika dipilih indeks ke-3, maka fungsi akan melihat daftar data yang tersedia, lalu mengambil data yang berada di <strong>urutan ke-3</strong>. Pada gambar, indeks ke-3 mengarah pada nilai <code>@</code>, sehingga nilai inilah yang menjadi <strong>hasil dari fungsi CHOOSE</strong>. Fungsi ini cocok digunakan saat kita memiliki beberapa opsi dan ingin memilih salah satu berdasarkan posisi angkanya.
      </p>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Sebelum menggunakan fungsi Reference, kita perlu <span className="font-semibold">memecah masalah pencarian </span>data menjadi langkah-langkah kecil agar lebih mudah dipahami.
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
            <div className="ml-4 mt-2 space-y-4">
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. INDEX</h3>
                <p>Digunakan untuk mengambil data berdasarkan baris dan kolom.</p>
                <pre className="bg-gray-200 p-2 rounded text-gray-800">
                  =INDEX(<span className="italic">array;row_num;column_num</span>)
                </pre>
                <p className="text-gray-700">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700">
                  <li><strong>Array:</strong> Tabel yang berisi data yang dicari.</li>
                  <li><strong>Row_num:</strong> Nomor baris posisi data yang dicari.</li>
                  <li><strong>Column_num:</strong> Nomor kolom posisi data yang dicari.</li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38] mb-2">2. MATCH</h3>
                <p className="text-gray-800 mb-2">Digunakan untuk mencari posisi suatu nilai dalam daftar.</p>
                <pre className="bg-gray-200 p-2 rounded text-gray-800 mb-2">
                  =MATCH(<span className="italic">lookup_value;lookup_array;match_type</span>)
                </pre>
                <p className="text-gray-700 font-medium mb-1">Keterangan:</p>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>
                    <span className="font-semibold">lookup_value:</span> Nilai yang ingin dicari di dalam tabel.
                    <ol className="list-[lower-alpha] ml-8 mt-1 space-y-1">
                      <li>Jika nilai berupa <span className="font-semibold">angka</span> (contoh: 5 atau 123), tulis langsung tanpa tanda kutip, misalnya: <code>123</code>.</li>
                      <li>Jika nilai berupa <span className="font-semibold">teks</span> atau kode (contoh: "P01" atau "Sita"), harus menggunakan tanda kutip, misalnya: <code>"P01"</code>.</li>
                    </ol>
                  </li>
                  <li><span className="font-semibold">lookup_array:</span> Tabel atau kolom yang berisi data yang dicari.</li>
                  <li>
                    <span className="font-semibold">match_type:</span> Menentukan metode pencarian:
                    <ol className="list-[lower-alpha] ml-8 mt-1 space-y-1">
                      <li>1 → mencari nilai yang mendekati lebih besar atau sama (data harus diurutkan naik).</li>
                      <li>0 → mencari nilai yang sama persis (paling sering digunakan).</li>
                      <li>-1 → mencari nilai yang mendekati lebih kecil atau sama (data harus diurutkan turun).</li>
                    </ol>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">3. CHOOSE</h3>
                <p>Digunakan untuk memilih satu nilai dari beberapa pilihan.</p>
                <pre className="bg-gray-200 p-2 rounded text-gray-800">
                  =CHOOSE(<span className="italic">index_num;value1;value2, ...</span>)
                </pre>
                <p className="text-gray-700">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700">
                  <li><strong>index_num:</strong> Argumen wajib berupa angka untuk menunjukkan posisi data dalam daftar.</li>
                  <li><strong>value1:</strong> Nilai yang dapat berupa angka, teks, rumus, atau referensi sel.</li>
                  <li><strong>value2 ...:</strong> Nilai-nilai selanjutnya dengan format sama seperti value1.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* PENGENALAN POLA */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold shadow-lg">
          Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah memecah masalah, kita perlu <span className="font-semibold">menemukan pola</span> dalam data untuk memilih fungsi Reference yang tepat.
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
          <h3 className="text-lg font-bold text-[#255F38] mb-2">MARI MENGAMATI POLA</h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
            Perhatikan contoh penggunaan fungsi INDEX, MATCH, dan CHOOSE dalam situasi nyata. Amati bagaimana setiap fungsi bekerja dan pola apa yang muncul dari cara kerjanya. Setelah itu, seret setiap contoh ke kotak fungsi yang paling sesuai. Aktivitas ini akan membantumu mengenali perbedaan dan kegunaan masing-masing fungsi secara lebih mudah dan menyenangkan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Item yang Bisa Digerakkan</h3>
              {patternItems.map((item, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handlePatternDragStart(e, index)}
                  className="bg-white p-2 mb-2 border border-gray-300 rounded cursor-move"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="w-full sm:w-1/2 bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Area Penempatan</h3>
              {patternDropZone.map((item, index) => (
                <div
                  key={index}
                  onDrop={(e) => handlePatternDrop(e, index)}
                  onDragOver={handlePatternDragOver}
                  className="bg-white p-2 mb-2 border-2 border-dashed border-green-500 rounded min-h-[80px] flex flex-col items-center justify-center"
                >
                  {item ? (
                    <span>{item}</span>
                  ) : (
                    <span className="text-gray-500 text-sm italic">{patternHints[index]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkPatternAnswers}
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetPattern}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {patternFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                patternFeedback.includes("Benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {patternFeedback}
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
          Abstraksi adalah kemampuan untuk menyaring informasi dan hanya <span className="font-semibold">fokus pada hal-hal yang penting saja</span>. Dengan melakukan abstraksi, kita bisa lebih mudah memahami inti permasalahan, membuat tabel lebih rapi, dan menghindari kebingungan akibat data yang tidak relevan.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify"> Hal yang perlu diperhatikan saat melakukan abstraksi:</p>
        <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <div className="text-sm md:text-base text-justify">
            <strong>1. Pilih data penting</strong> → Gunakan hanya data yang dibutuhkan untuk menjawab pertanyaan, misalnya hanya kolom “Nomor Absen” dan “Nama”.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>2. Abaikan data yang tidak relevan</strong> → Hindari menggunakan informasi yang tidak berpengaruh terhadap analisis, seperti nilai ujian atau jadwal pelajaran.
          </div>
          <div className="text-sm md:text-base text-justify">
            <strong>3. Pastikan data mudah dibaca</strong> → Atur data dalam tabel agar rapi dan jelas sehingga memudahkan saat mengambil informasi.
          </div>
        </div>

        <div className="bg-[#F0FFF4] p-3 sm:p-4 border border-[#81C784] rounded mt-4 shadow-md">
          <h3 className="font-semibold text-[#2E7D32] text-sm md:text-base mb-2">
            Latihan Pemahaman: Memilih Data Penting
          </h3>
          <p className="text-gray-700 text-sm md:text-base text-justify mb-2">
           Pak Guru ingin menentukan nama siswa berdasarkan nomor absen menggunakan tabel yang berisi data nomor absen, nama siswa, dan nilai matematika. Pilih kolom data yang relevan untuk melakukan pencarian ini.
          </p>
          <div className="ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="info1"
                  checked={abstraksiAnswers === "info1"}
                  onChange={() => handleAbstraksiChange("info1")}
                  className="mr-2"
                />
                1. Nilai matematika siswa.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="info2"
                  checked={abstraksiAnswers === "info2"}
                  onChange={() => handleAbstraksiChange("info2")}
                  className="mr-2"
                />
                2. Nomor absen dan nama siswa.
              </label>
            </div>
            <div className="text-sm md:text-base">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="abstraksi"
                  value="info3"
                  checked={abstraksiAnswers === "info3"}
                  onChange={() => handleAbstraksiChange("info3")}
                  className="mr-2"
                />
                3. Jadwal pelajaran siswa.
              </label>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={checkAbstraksiAnswers}
              className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300 cursor-pointer"
            >
              Periksa
            </button>
            <button
              onClick={resetAbstraksiAnswers}
              className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300 cursor-pointer"
            >
              Hapus
            </button>
          </div>
          {abstraksiFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                abstraksiFeedback.includes("Benar") ? "bg-[#1B5E20]" : "text-red-700"
              }`}
            >
              {abstraksiFeedback}
            </p>
          )}
        </div>
      </div>


      {/* ALGORITMA */}
      <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-lg shadow-md space-y-4 sm:space-y-6 mt-6 sm:mt-8 relative">
      <div className="absolute -top-5 sm:-top-7 left-3 sm:left-5 bg-green-800 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-t-lg text-lg sm:text-xl font-bold shadow-lg">
        Algoritma
      </div>
      <p className="text-gray-700 text-sm md:text-base mt-6 sm:mt-8 text-justify">
        Setelah memahami dan menyederhanakan masalah melalui proses abstraksi, kita dapat fokus pada elemen-elemen kunci dari data dan tujuan pencarian. Abstraksi membantu kita mengidentifikasi pola dan hubungan penting tanpa terjebak pada detail yang kompleks. Berikut adalah <span className="font-semibold">angkah-langkah sistematis</span>luntuk menggunakan fungsi INDEX, MATCH, dan CHOOSE secara efektif:
      </p>

      <div className="space-y-4 sm:space-y-5">
        <div>
          <p className="text-gray-700 text-sm md:text-base font-semibold">
            Langkah-langkah menggunakan fungsi <span className="font-bold">INDEX</span>:
          </p>
          <ol className="ml-6 sm:ml-8 text-gray-700 text-sm md:text-base list-decimal space-y-1 sm:space-y-2 mt-2">
            <li>Pilih tabel data yang akan digunakan.</li>
            <li>Tentukan nomor baris dan kolom dari data yang ingin diambil.</li>
            <li>Tulis rumus <code>=INDEX(tabel; baris; kolom)</code> dengan benar.</li>
          </ol>
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base font-semibold">
            Langkah-langkah menggunakan fungsi <span className="font-bold">MATCH</span>:
          </p>
          <ol className="ml-6 sm:ml-8 text-gray-700 text-sm md:text-base list-decimal space-y-1 sm:space-y-2 mt-2">
            <li>Tentukan nilai yang ingin dicari.</li>
            <li>Pilih daftar atau rentang tempat mencari nilai.</li>
            <li>Tulis rumus <code>=MATCH(nilai; rentang; match_type)</code> dengan benar.</li>
          </ol>
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base font-semibold">
            Langkah-langkah menggunakan fungsi <span className="font-bold">CHOOSE</span>:
          </p>
          <ol className="ml-6 sm:ml-8 text-gray-700 text-sm md:text-base list-decimal space-y-1 sm:space-y-2 mt-2">
            <li>Tentukan nomor urut (indeks) yang akan dipilih.</li>
            <li>Tulis daftar nilai yang tersedia dalam urutan tertentu.</li>
            <li>Tulis rumus <code>=CHOOSE(indeks; nilai1; nilai2; ...)</code> dengan benar.</li>
          </ol>
        </div>
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
                  className="bg-[#B0BEC5] text-white px-4 py-2 rounded-lg hover:bg-[#90A4AE] transition duration-300 disabled:opacity-50 cursor-pointer"
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

      {/* Navigasi dengan tombol */}
      <div className="flex justify-between items-center px-2 sm:px-6 py-2 mt-4">
        <button
          onClick={navigateToPrevious}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px] cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={navigateToNext}
          className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px] cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
}