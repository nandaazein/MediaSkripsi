import Layout from "../../components/Layout";
import { BookOpen, Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const PengenalanCT = () => {
  // State untuk interaktivitas kesimpulan (daftar belanja Rina)
  const [totalBelanja, setTotalBelanja] = useState("");
  const [feedback, setFeedback] = useState("");

  // State untuk interaktivitas pengenalan pola
  const [selectedPattern, setSelectedPattern] = useState("");
  const [polaFeedback, setPolaFeedback] = useState("");
  const correctPattern = "Harga barang selalu kecil dan mudah dijumlahkan";

  // State untuk interaktivitas abstraksi
  const [selectedOption, setSelectedOption] = useState("");
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const correctAnswerRadio = "1"; // Hanya satu jawaban benar

  // State untuk drag-and-drop dekomposisi (dianacakan)
  const [dekomposisiItems, setDekomposisiItems] = useState([
    "Tulis daftar barang yang akan dibeli.",
    "Cek harga masing-masing barang.",
    "Jumlahkan harga barang untuk memastikan sesuai anggaran.",
  ]);
  const [dropZoneItems, setDropZoneItems] = useState(["", "", ""]);
  const [dekomposisiFeedback, setDekomposisiFeedback] = useState("");

  // State untuk drag-and-drop algoritma (dianacakan)
  const [algorithmItems, setAlgorithmItems] = useState([
    "Tulis daftar barang: pensil, buku, penghapus.",
    "Jumlahkan harga: Rp2.000 + Rp5.000 + Rp1.000 = Rp8.000.",
    "Bandingkan dengan anggaran: Rp8.000 < Rp20.000, sehingga bisa beli semua.",
  ]);
  const [algorithmDropZone, setAlgorithmDropZone] = useState(["", "", ""]);
  const [algorithmFeedback, setAlgorithmFeedback] = useState("");

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Acak item saat komponen dimuat
  useEffect(() => {
    setDekomposisiItems(shuffleArray([
      "Tulis daftar barang yang akan dibeli.",
      "Cek harga masing-masing barang.",
      "Jumlahkan harga barang untuk memastikan sesuai anggaran.",
    ]));
    setAlgorithmItems(shuffleArray([
      "Tulis daftar barang: pensil, buku, penghapus.",
      "Jumlahkan harga: Rp2.000 + Rp5.000 + Rp1.000 = Rp8.000.",
      "Bandingkan dengan anggaran: Rp8.000 < Rp20.000, sehingga bisa beli semua.",
    ]));
  }, []);

  // Handler untuk interaktivitas kesimpulan
  const cekJawaban = () => {
    if (totalBelanja === "8000") {
      setFeedback(
        "Jawaban kamu benar! Total belanja Rina adalah Rp8.000, dan ini sesuai dengan anggaran Rp20.000."
      );
    } else {
      setFeedback("Jawaban salah, ayo coba lagi. Jumlahkan harga pensil (Rp2.000), buku (Rp5.000), dan penghapus (Rp1.000).");
    }
  };

  const handleHapus = () => {
    setTotalBelanja("");
    setFeedback("");
  };

  // Handler untuk interaktivitas pengenalan pola
  const handlePatternChange = (e) => {
    setSelectedPattern(e.target.value);
    setPolaFeedback("");
  };

  const checkPolaAnswers = () => {
    const isCorrect = selectedPattern === correctPattern;
    setPolaFeedback(
      isCorrect
        ? "Jawaban Anda benar! Harga barang kecil dan mudah dijumlahkan, sehingga membantu Rina menghitung total belanja."
        : "Jawaban salah, ayo coba lagi."
    );
  };

  const resetPolaAnswers = () => {
    setSelectedPattern("");
    setPolaFeedback("");
  };

  // Handler untuk interaktivitas abstraksi
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setAbstraksiFeedback("");
  };

  const checkAbstraksiAnswers = () => {
    const isCorrect = selectedOption === correctAnswerRadio;
    setAbstraksiFeedback(
      isCorrect
        ? "Jawaban Anda benar! Harga barang adalah informasi paling relevan untuk menghitung total belanja."
        : "Jawaban salah, ayo coba lagi."
    );
  };

  const resetAbstraksiAnswers = () => {
    setSelectedOption("");
    setAbstraksiFeedback("");
  };

  // Handler Drag and Drop untuk Dekomposisi
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("text/plain");
    const newDropZoneItems = [...dropZoneItems];
    newDropZoneItems[dropIndex] = dekomposisiItems[dragIndex];
    setDropZoneItems(newDropZoneItems);

    const newDekomposisiItems = dekomposisiItems.filter((_, i) => i !== parseInt(dragIndex));
    setDekomposisiItems(newDekomposisiItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const checkDekomposisiAnswers = () => {
    const correctOrder = [
      "Tulis daftar barang yang akan dibeli.",
      "Cek harga masing-masing barang.",
      "Jumlahkan harga barang untuk memastikan sesuai anggaran.",
    ];
    const isCorrect = dropZoneItems.every((item, index) => item === correctOrder[index]);
    setDekomposisiFeedback(
      isCorrect
        ? "Jawaban Anda benar! Urutan langkah dekomposisi sudah tepat."
        : "Jawaban salah, ayo coba susun ulang langkah-langkahnya."
    );
  };

  const resetDekomposisi = () => {
    setDekomposisiItems(shuffleArray([
      "Tulis daftar barang yang akan dibeli.",
      "Cek harga masing-masing barang.",
      "Jumlahkan harga barang untuk memastikan sesuai anggaran.",
    ]));
    setDropZoneItems(["", "", ""]);
    setDekomposisiFeedback("");
  };

  // Handler Drag and Drop untuk Algoritma
  const handleAlgorithmDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleAlgorithmDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData("text/plain");
    const newAlgorithmDropZone = [...algorithmDropZone];
    newAlgorithmDropZone[dropIndex] = algorithmItems[dragIndex];
    setAlgorithmDropZone(newAlgorithmDropZone);

    const newAlgorithmItems = algorithmItems.filter((_, i) => i !== parseInt(dragIndex));
    setAlgorithmItems(newAlgorithmItems);
  };

  const handleAlgorithmDragOver = (e) => {
    e.preventDefault();
  };

  const checkAlgorithmAnswers = () => {
    const correctOrder = [
      "Tulis daftar barang: pensil, buku, penghapus.",
      "Jumlahkan harga: Rp2.000 + Rp5.000 + Rp1.000 = Rp8.000.",
      "Bandingkan dengan anggaran: Rp8.000 < Rp20.000, sehingga bisa beli semua.",
    ];
    const isCorrect = algorithmDropZone.every((item, index) => item === correctOrder[index]);
    setAlgorithmFeedback(
      isCorrect
        ? "Jawaban Anda benar! Urutan algoritma sudah tepat."
        : "Jawaban salah, ayo coba susun ulang langkah-langkahnya."
    );
  };

  const resetAlgorithm = () => {
    setAlgorithmItems(shuffleArray([
      "Tulis daftar barang: pensil, buku, penghapus.",
      "Jumlahkan harga: Rp2.000 + Rp5.000 + Rp1.000 = Rp8.000.",
      "Bandingkan dengan anggaran: Rp8.000 < Rp20.000, sehingga bisa beli semua.",
    ]));
    setAlgorithmDropZone(["", "", ""]);
    setAlgorithmFeedback("");
  };

  // Keterangan untuk area penempatan Dekomposisi
  const dekomposisiHints = [
    "Langkah 1: Apa yang harus Rina lakukan pertama kali? ",
    "Langkah 2: Apa langkah berikutnya? ",
    "Langkah 3: Apa langkah terakhir? ",
  ];

  // Keterangan untuk area penempatan Algoritma
  const algorithmHints = [
    "Langkah 1: Apa langkah pertama? (Petunjuk: Tulis daftar barang)",
    "Langkah 2: Apa langkah kedua? (Petunjuk: Hitung total harga)",
    "Langkah 3: Apa langkah terakhir? (Petunjuk: Bandingkan dengan anggaran)",
  ];

  return (
    <Layout>
      {/* Header */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Pengenalan Computational Thinking
      </h1>

      {/* Tujuan Pembelajaran */}
      <section className="bg-green-100 rounded shadow-md p-4 mt-4">
        <h2 className="font-bold text-[#255F38] flex items-center">Tujuan Pembelajaran</h2>
        <p className="text-gray-700 text-sm md:text-base">
          Memahami konsep dasar <i>Computational Thinking</i> (CT) dan menerapkannya dalam menyelesaikan masalah sederhana melalui studi kasus.
        </p>
      </section>

      {/* Pengenalan Computational Thinking */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Apa Itu Computational Thinking?</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          <span className="font-bold">Computational Thinking (CT)</span> adalah cara berpikir untuk memecahkan masalah dengan langkah-langkah yang jelas dan sederhana, seperti yang dilakukan komputer. CT membantu kita menyelesaikan masalah sehari-hari, seperti berbelanja atau mengatur waktu.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          CT terdiri dari empat langkah: <b>Dekomposisi</b>, <b>Pengenalan Pola</b>, <b>Abstraksi</b>, dan <b>Algoritma</b>. Mari kita coba terapkan pada studi kasus berikut.
        </p>
      </div>

      {/* Studi Kasus */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-5">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" /> Studi Kasus
        </h2>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed">
          Mari kita gunakan Computational Thinking untuk membantu Rina berbelanja dengan cerdas.
        </p>
        <p className="text-gray-600 text-sm md:text-base text-justify">
          Rina ingin membeli 3 barang: <b>pensil</b>, <b>buku</b>, dan <b>penghapus</b>. Dia punya uang Rp20.000. Harga barang-barang tersebut adalah: pensil Rp2.000, buku Rp5.000, dan penghapus Rp1.000. Rina ingin memastikan dia bisa membeli semua barang tanpa melebihi anggaran. Bagaimana langkah-langkahnya?
        </p>
        {/* Tabel Sederhana untuk Item */}
        <div className="mt-4 overflow-x-auto text-center">
          <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-2 py-1">Barang</th>
                <th className="border border-green-600 px-2 py-1">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-2 py-1">Pensil</td>
                <td className="border border-green-600 px-2 py-1">Rp2.000</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-2 py-1">Buku</td>
                <td className="border border-green-600 px-2 py-1">Rp5.000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-2 py-1">Penghapus</td>
                <td className="border border-green-600 px-2 py-1">Rp1.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base text-justify font-semibold mt-4">
          Penjelasan: Dekomposisi adalah memecah masalah besar menjadi langkah-langkah kecil yang lebih mudah.
        </p>
        <p className="text-gray-700 text-sm md:text-base text-justify mt-4">
          Rina memecah masalah berbelanja menjadi langkah-langkah sederhana. Susun langkah-langkah berikut dengan menyeret ke area yang tepat!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Item yang Bisa Digerakkan</h3>
            {dekomposisiItems.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                className="bg-white p-2 mb-2 border border-gray-300 rounded cursor-move"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Area Penempatan</h3>
            {dropZoneItems.map((item, index) => (
              <div
                key={index}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
                className="bg-white p-2 mb-2 border-2 border-dashed border-green-500 rounded min-h-[80px] flex flex-col items-center justify-center"
              >
                {item ? (
                  <span>{item}</span>
                ) : (
                  <>
                    <span className="text-gray-500 text-sm italic">{dekomposisiHints[index]}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={checkDekomposisiAnswers}
            className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
          >
            Periksa 
          </button>
          <button
            onClick={resetDekomposisi}
            className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
          >
            Hapus
          </button>
        </div>
        {dekomposisiFeedback && (
          <p
            className={`text-sm mt-2 font-bold ${
              dekomposisiFeedback.includes("benar") ? "text-green-700" : "text-red-700"
            }`}
          >
            {dekomposisiFeedback}
          </p>
        )}
      </div>

      {/* Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base text-justify font-semibold mt-4">
          Penjelasan: Pengenalan Pola adalah mencari kesamaan atau pola dalam data untuk mempermudah penyelesaian.
        </p>
        <p className="text-gray-700 text-sm md:text-base text-justify mt-4">
          Rina melihat harga barang: pensil Rp2.000, buku Rp5.000, penghapus Rp1.000. Apa pola yang membantu Rina menghitung total belanja dengan mudah?
        </p>
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded-lg shadow-md space-y-3 mt-4">
          <h3 className="text-[#2E7D32] font-bold text-sm md:text-base">Mengenali Pola Harga</h3>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            Pilih pola yang benar berdasarkan harga barang!
          </p>
          <div className="space-y-2">
            {[
              "Harga barang selalu kecil dan mudah dijumlahkan",
              "Harga barang selalu sama",
              "Harga barang sangat besar",
            ].map((pattern, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="pattern"
                  value={pattern}
                  checked={selectedPattern === pattern}
                  onChange={handlePatternChange}
                  className="form-radio"
                />
                <span>{pattern}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2 mt-4">
            <button
              onClick={checkPolaAnswers}
              className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa 
            </button>
            <button
              onClick={resetPolaAnswers}
              className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {polaFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                polaFeedback.includes("benar") ? "text-green-700" : "text-red-700"
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
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base text-justify font-semibold mt-4">
          Penjelasan: Abstraksi adalah mengabaikan informasi yang tidak penting dan fokus pada yang relevan.
        </p>
        <p className="text-gray-700 text-sm md:text-base text-justify mt-4">
          Rina tidak perlu memikirkan warna barang atau lokasi toko. Yang penting adalah harga barang dan anggaran. Apa informasi yang paling relevan?
        </p>
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded-lg shadow-md space-y-3 mt-4">
          <h3 className="text-[#2E7D32] font-bold text-sm md:text-base">Memilih Informasi Penting</h3>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            Pilih informasi yang paling relevan untuk membantu Rina berbelanja!
          </p>
          <div className="space-y-2">
            {[
              { value: "1", label: "Harga barang" },
              { value: "2", label: "Warna barang" },
              { value: "3", label: "Lokasi toko" },
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="abstraction"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleRadioChange}
                  className="form-radio"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2 mt-4">
            <button
              onClick={checkAbstraksiAnswers}
              className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa 
            </button>
            <button
              onClick={resetAbstraksiAnswers}
              className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {abstraksiFeedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                abstraksiFeedback.includes("benar") ? "text-green-700" : "text-red-700"
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
        <p className="text-gray-700 text-sm md:text-base text-justify font-semibold mt-4">
          Penjelasan: Algoritma adalah langkah-langkah berurutan untuk menyelesaikan masalah.
        </p>
        <p className="text-gray-700 text-sm md:text-base text-justify mt-4">
          Rina menyusun langkah-langkah untuk berbelanja. Susun langkah-langkah berikut dengan menyeret ke area yang tepat!
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Item yang Bisa Digerakkan</h3>
            {algorithmItems.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleAlgorithmDragStart(e, index)}
                className="bg-white p-2 mb-2 border border-gray-300 rounded cursor-move"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Area Penempatan</h3>
            {algorithmDropZone.map((item, index) => (
              <div
                key={index}
                onDrop={(e) => handleAlgorithmDrop(e, index)}
                onDragOver={handleAlgorithmDragOver}
                className="bg-white p-2 mb-2 border-2 border-dashed border-green-500 rounded min-h-[80px] flex flex-col items-center justify-center"
              >
                {item ? (
                  <span>{item}</span>
                ) : (
                  <>
                    <span className="text-gray-500 text-sm italic">{algorithmHints[index]}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={checkAlgorithmAnswers}
            className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
          >
            Periksa 
          </button>
          <button
            onClick={resetAlgorithm}
            className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
          >
            Hapus
          </button>
        </div>
        {algorithmFeedback && (
          <p
            className={`text-sm mt-2 font-bold ${
              algorithmFeedback.includes("benar") ? "text-green-700" : "text-red-700"
            }`}
          >
            {algorithmFeedback}
          </p>
        )}
      </div>

      {/* Kesimpulan */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan
        </h2>
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded-lg shadow-md space-y-3">
          <p className="text-gray-600 text-sm md:text-base font-semibold">
            Coba hitung total belanja Rina:
          </p>
          <p className="text-gray-600 text-sm md:text-base text-justify">
            Berapa total harga barang yang dibeli Rina? (Isi dalam rupiah, tanpa tanda Rp atau titik, misal: 10000)
          </p>
          <input
            type="text"
            placeholder="Total belanja (misal: 10000)"
            value={totalBelanja}
            onChange={(e) => setTotalBelanja(e.target.value)}
            className="w-full border px-3 py-1 text-sm rounded mt-2"
          />
          <div className="flex space-x-2 mt-3">
            <button
              onClick={cekJawaban}
              className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa 
            </button>
            <button
              onClick={handleHapus}
              className="bg-[#D32F2F] text-white px-4 py-2 rounded hover:bg-[#B71C1C] transition duration-300"
            >
              Hapus
            </button>
          </div>
          {feedback && (
            <p
              className={`text-sm mt-2 font-bold ${
                feedback.includes("benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {feedback}
            </p>
          )}
        </div>
        {feedback ===
          "Jawaban kamu benar! Total belanja Rina adalah Rp8.000, dan ini sesuai dengan anggaran Rp20.000." && (
          <div>
            <p className="text-gray-600 text-sm md:text-base mt-4 font-semibold">Kesimpulan:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-2 space-y-2">
              <li>Dengan CT, Rina bisa berbelanja dengan langkah-langkah yang jelas dan tidak melebihi anggaran.</li>
              <li>Memecah masalah, mencari pola, mengabaikan yang tidak penting, dan menyusun langkah-langkah membantu Rina berbelanja dengan efisien.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a
          href="/mengenal-analisis"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md"
        >
          ← Sebelumnya
        </a>
        <a
          href="/pencarian-lookup"
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default PengenalanCT;