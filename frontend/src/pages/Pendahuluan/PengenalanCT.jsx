import Layout from "../../components/Layout";
import { BookOpen, Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useState } from "react";

const PengenalanCT = () => {
  // State for case study interactivity (Aldi's schedule)
  const [siap, setSiap] = useState("");
  const [berangkat, setBerangkat] = useState("");
  const [feedback, setFeedback] = useState("");

  // State for pattern recognition interactivity
  const [selectedColor, setSelectedColor] = useState("");
  const [polaFeedback, setPolaFeedback] = useState("");
  const correctColor = "06.30";

  // State for abstraction interactivity
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [abstraksiFeedback, setAbstraksiFeedback] = useState("");
  const correctAnswersCheckbox = ["1", "2"];

  // Handlers for case study interactivity
  const cekJawaban = () => {
    if (siap === "06.10" && berangkat === "06.30") {
      setFeedback(
        "Jawaban kamu benar! Aldi harus mulai bersiap pukul 06.10, dihitung dengan mengurangi 30 menit perjalanan dari 07.00 (menjadi 06.30) dan 20 menit bersiap-siap dari 06.30 (menjadi 06.10). "
      );
    } else {
      setFeedback("Jawaban salah, ayo coba lagi.");
    }
  };

  const handleHapus = () => {
    setSiap("");
    setBerangkat("");
    setFeedback("");
  };

  // Handlers for pattern recognition interactivity
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    setPolaFeedback("");
  };

  const checkPolaAnswers = () => {
    const isCorrect = selectedColor === correctColor;
    setPolaFeedback(
      isCorrect
        ? "Jawaban Anda benar! 06.30 sesuai dengan pola waktu berangkat Aldi."
        : "Jawaban salah, ayo coba lagi."
    );
  };

  const resetPolaAnswers = () => {
    setSelectedColor("");
    setPolaFeedback("");
  };

  // Handlers for abstraction interactivity
  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
    );
    setAbstraksiFeedback("");
  };

  const checkAbstraksiAnswers = () => {
    const isCorrect =
      selectedOptions.length === correctAnswersCheckbox.length &&
      selectedOptions.every((val) => correctAnswersCheckbox.includes(val));
    setAbstraksiFeedback(
      isCorrect
        ? "Jawaban Anda benar! 'Waktu bersiap-siap' dan 'Waktu perjalanan' adalah informasi relevan."
        : "Jawaban salah, ayo coba lagi."
    );
  };

  const resetAbstraksiAnswers = () => {
    setSelectedOptions([]);
    setAbstraksiFeedback("");
  };

  return (
    <Layout>
      {/* Header */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-12 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Pengenalan Computational Thinking
      </h1>

      {/* Learning Objectives */}
      <section className="bg-green-100 rounded shadow-md p-4 mt-4">
        <h2 className="font-bold text-[#255F38] flex items-center">
          Tujuan Pembelajaran
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Memahami konsep dasar <i>Computational Thinking</i> (CT) dan menerapkannya dalam menyelesaikan masalah melalui studi kasus.
        </p>
      </section>

      {/* Introduction to Computational Thinking */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Apa Itu Computational Thinking?</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          <span className="font-bold">Computational Thinking (CT)</span> adalah pendekatan berpikir terstruktur untuk memecahkan masalah secara efektif dan efisien. Menggunakan konsep ilmu komputer, CT membantu kita berpikir logis dan menyusun solusi sistematis, tidak hanya untuk pemrograman tetapi juga untuk kehidupan sehari-hari.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          CT terdiri dari empat fondasi: <b>Dekomposisi</b>, <b>Pengenalan Pola</b>, <b>Abstraksi</b>, dan <b>Algoritma</b>. Kita akan menerapkannya pada studi kasus berikut.
        </p>
      </div>

      {/* Case Study */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-5">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" /> Studi Kasus
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-justify">
          Aldi ingin tiba di sekolah tepat pukul 07.00. Ia naik sepeda, yang memakan waktu 30 menit dari rumah ke sekolah. Sebelum berangkat, Aldi perlu 20 menit untuk bersiap-siap (mandi, sarapan, memakai seragam). Pertanyaan: pukul berapa Aldi harus mulai bersiap dan berangkat?
        </p>
        {/* Timeline Graphic */}
        <div className="flex justify-center mt-4">
          <div className="relative w-full max-w-md">
            <div className="absolute w-full h-1 bg-green-300 top-6"></div>
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto"></div>
                <p className="text-sm text-gray-600 mt-2">Bersiap (20 menit)</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto"></div>
                <p className="text-sm text-gray-600 mt-2">Berangkat (30 menit)</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-600 rounded-full mx-auto"></div>
                <p className="text-sm text-gray-600 mt-2">Tiba 07.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* Decomposition */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Aldi ingin tiba di sekolah tepat pukul <span className="font-semibold">07.00</span>.</li>
          <li>Masalahnya dapat dipecah menjadi dua bagian: waktu untuk <span className="font-semibold">berangkat</span> dan waktu untuk <span className="font-semibold">bersiap-siap</span>.</li>
          <li>Kita perlu menghitung waktu berdasarkan <span className="font-semibold">30 menit perjalanan</span> dan <span className="font-semibold">20 menit bersiap-siap</span>.</li>
        </ul>
      </div>

      {/* Pattern Recognition */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Aldi mencatat waktu berangkatnya: <span className="font-semibold">Senin (06.30)</span>, <span className="font-semibold">Selasa (06.30)</span>, <span className="font-semibold">Rabu (06.30)</span>, <span className="font-semibold">Kamis (06.30)</span>, <span className="font-semibold">Jumat (06.30)</span>.</li>
          <li>Polanya adalah Aldi selalu berangkat pada waktu yang sama setiap hari, yaitu pukul <span className="font-semibold">06.30</span>.</li>
          <li>Untuk tiba tepat pukul <span className="font-semibold">07.00</span>, pola ini konsisten dengan waktu perjalanan <span className="font-semibold">30 menit</span>.</li>
        </ul>
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded-lg shadow-md space-y-3 mt-4">
          <h3 className="text-[#2E7D32] font-bold text-sm md:text-base">Mengenali Pola Waktu</h3>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            Pilih waktu yang sesuai untuk hari Sabtu berdasarkan pola yang ada!
          </p>
          <div className="space-y-2">
            {["06.00", "06.30", "07.00"].map((time) => (
              <label key={time} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="color"
                  value={time}
                  checked={selectedColor === time}
                  onChange={handleColorChange}
                  className="form-radio"
                />
                <span>{time}</span>
              </label>
            ))}
          </div>
          <div className="flex space-x-2 mt-4">
            <button
              onClick={checkPolaAnswers}
              className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa Jawaban
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

      {/* Abstraction */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tidak perlu mempertimbangkan hal-hal seperti <span className="font-semibold">menu sarapan</span> atau <span className="font-semibold">jenis sepeda</span>, karena tidak relevan untuk menghitung waktu.</li>
          <li>Fokus hanya pada informasi penting: <span className="font-semibold">waktu tiba (07.00)</span>, <span className="font-semibold">waktu perjalanan (30 menit)</span>, dan <span className="font-semibold">waktu bersiap-siap (20 menit)</span>.</li>
          <li>Informasi lain dapat diabaikan untuk menyederhanakan penyelesaian masalah.</li>
        </ul>
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded-lg shadow-md space-y-3 mt-4">
          <h3 className="text-[#2E7D32] font-bold text-sm md:text-base">Memilih Informasi Penting</h3>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            Pilih informasi yang relevan untuk membantu Aldi merencanakan jadwalnya!
          </p>
          <div className="space-y-2">
            {[
              { value: "1", label: "Waktu bersiap-siap" },
              { value: "2", label: "Waktu perjalanan" },
              { value: "3", label: "Jenis sepeda" },
              { value: "4", label: "Menu sarapan" },
            ].map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
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
              Periksa Jawaban
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

      {/* Algorithm */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            <span className="font-semibold">Tentukan waktu tiba</span><br />
            Aldi harus tiba di sekolah pukul <span className="font-semibold">07.00</span>.
          </li>
          <li>
            <span className="font-semibold">Hitung waktu berangkat</span><br />
            Kurangi waktu perjalanan <span className="font-semibold">30 menit</span> dari <span className="font-semibold">07.00</span>, sehingga Aldi harus berangkat pukul <span className="font-semibold">06.30</span>.
          </li>
          <li>
            <span className="font-semibold">Hitung waktu bersiap-siap</span><br />
            Kurangi waktu bersiap-siap <span className="font-semibold">20 menit</span> dari <span className="font-semibold">06.30</span>, sehingga Aldi harus mulai bersiap pukul <span className="font-semibold">06.10</span>.
          </li>
        </ul>
      </div>

      {/* Conclusion and Analysis */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10">
        <h2 className="text-xl font-bold text-green-800 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Saran
        </h2>
        <div className="bg-[#F0FFF4] p-4 border border-[#81C784] rounded-lg shadow-md space-y-3">
          <p className="text-gray-600 text-sm md:text-base font-semibold">
            Coba isikan waktu yang sesuai untuk Aldi:
          </p>
          <p className="text-gray-600 text-sm md:text-base text-justify">
            Isikan jam Aldi mulai bersiap dan berangkat agar tidak terlambat ke sekolah.
          </p>
          <input
            type="text"
            placeholder="Jam mulai bersiap (misal: 06.00)"
            value={siap}
            onChange={(e) => setSiap(e.target.value)}
            className="w-full border px-3 py-1 text-sm rounded mt-2"
          />
          <input
            type="text"
            placeholder="Jam berangkat (misal: 06.00)"
            value={berangkat}
            onChange={(e) => setBerangkat(e.target.value)}
            className="w-full border px-3 py-1 text-sm rounded mt-3"
          />
          <div className="flex space-x-2 mt-3">
            <button
              onClick={cekJawaban}
              className="bg-[#1B5E20] text-white px-4 py-2 rounded hover:bg-[#145A20] transition duration-300"
            >
              Periksa Jawaban
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
          "✅ Jawaban kamu benar! Aldi harus mulai bersiap pukul 06.10, dihitung dengan mengurangi 30 menit perjalanan dari 07.00 (menjadi 06.30) dan 20 menit bersiap-siap dari 06.30 (menjadi 06.10). Ini sesuai dengan langkah algoritma dalam Computational Thinking." && (
          <div>
            <p className="text-gray-600 text-sm md:text-base mt-4 font-semibold">Kesimpulan:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-2 space-y-2">
              <li>Dengan CT, Aldi dapat merencanakan jadwalnya secara sistematis untuk tiba tepat waktu.</li>
              <li>Memecah masalah, mengenali pola, menyederhanakan informasi, dan menyusun algoritma membantu menyelesaikan masalah secara efisien.</li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-4 font-semibold">Saran:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-2 space-y-2">
              <li>Aldi bisa berangkat lebih awal untuk mengantisipasi gangguan seperti cuaca.</li>
              <li>CT dapat diterapkan pada masalah lain, seperti mengatur tugas sekolah atau menganalisis pengeluaran harian.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
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