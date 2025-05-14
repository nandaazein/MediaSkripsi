import Layout from "../../components/Layout";
import { BookOpen, Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useState } from "react";

const ComputationalThinking = () => {
  const [siap, setSiap] = useState("");
  const [berangkat, setBerangkat] = useState("");
  const [feedback, setFeedback] = useState("");

  const cekJawaban = () => {
    if (siap === "06.10" && berangkat === "06.30") {
      setFeedback("✅ Jawaban kamu benar!");
    } else {
      setFeedback("❌ Jawaban belum tepat, coba lagi ya.");
    }
  };

  const handleHapus = () => {
    setSiap("");
    setBerangkat("");
    setFeedback("");
  };

  return (
    <Layout>

      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-12  p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Contoh Penerapan Computational Thinking
      </h1>
   
      {/* Studi Kasus */}
      <div className="bg-white p-5  border-gray-300  space-y-4 mt-5 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BookOpen className="w-5 h-5 mr-2" /> STUDI KASUS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6 text-justify">
          Aldi ingin berangkat ke sekolah tepat waktu. Ia harus tiba di sekolah pukul 07.00. Rumahnya cukup jauh, sehingga ia naik sepeda 
          untuk pergi ke sekolah. Biasanya, perjalanan dari rumah ke sekolah membutuhkan waktu sekitar 30 menit.
        </p>
        <p className="text-gray-600 text-sm md:text-base mt-6 text-justify">
          Namun, Aldi juga perlu bersiap-siap sebelum berangkat, seperti mandi, sarapan, dan memakai seragam. Biasanya, ia membutuhkan waktu 20 menit untuk bersiap-siap.
          Aldi ingin tahu pukul berapa ia harus mulai bersiap dan pukul berapa ia harus berangkat agar tidak terlambat ke sekolah.
        </p>
      </div>

      {/* Dekomposisi */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6 font-semibold">
          Memecah masalah menjadi bagian kecil:
        </p>

        <p className="text-gray-600 text-sm md:text-base mt-4 font-medium">Apa yang perlu dilakukan Aldi?</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">• Bersiap-siap sebelum berangkat (20 menit).</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">• Bersepeda ke sekolah (30 menit).</p>

        <p className="text-gray-600 text-sm md:text-base mt-4 font-medium">Apa yang ingin diketahui?</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">• Pukul berapa harus mulai bersiap?</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">• Pukul berapa harus berangkat?</p>
      </div>

      {/* Pengenalan Pola */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 font-medium">Menemukan pola yang berlaku.</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">• Aldi selalu memerlukan 20 menit untuk bersiap-siap</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">• Perjalanan ke sekolah memerlukan waktu 30 menit.</p>
      </div>

      {/* Abstraksi */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 font-medium">Menyederhanakan dengan mengabaikan detail yang tidak pentin.</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">•  Tidak perlu memikirkan hal lain seperti cuaca atau kondisi jalan.</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">•  Fokus pada waktu yang dibutuhkan untuk bersiap-siap dan perjalanan ke sekolah.</p>
      </div>

      {/* Algoritma */}
      <div className="bg-white p-5  border-gray-300  space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 font-medium">Langkah-langkah penyelesaian.</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">(1) Tentukan jam masuk sekolah (07.00).</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">(2) Kurangi waktu perjalanan (30 menit sebelumnya => Aldi harus berangkat pukul 06.30).</p>
        <p className="text-gray-600 text-sm md:text-base pl-6">(3) Kurangi lagi waktu untuk bersiap-siap (20 menit sebelumnya => Aldi harus mulai bersiap pukul 06.10).</p>
      </div>

      {/* Kesimpulan dan Analisis */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <div className="mt-6">
          <p className="text-gray-600 text-sm md:text-base font-semibold">Coba isikan waktu yang sesuai untuk Aldi:</p>
          <p className="text-gray-600 text-sm md:text-base mt-2">Isikan jam Aldi mulai bersiap dan berangkat agar tidak terlambat ke sekolah.</p>
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
          <button
            onClick={cekJawaban}
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 mt-3"
          >
            Periksa Jawaban
          </button>
          <button
            onClick={handleHapus}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-3 ml-2"
          >
            Hapus
          </button>
          {feedback && <p className="text-sm font-medium text-gray-700 mt-3">{feedback}</p>}
        </div>

        {/* Menampilkan daftar hanya jika jawaban benar */}
        {feedback === "✅ Jawaban kamu benar!" && (
          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
            <li>Jika Aldi terlambat bersiap atau berangkat, ia bisa terlambat ke sekolah.</li>
            <li>Ia bisa berangkat lebih awal atau mengurangi waktu bersiap untuk menghindari keterlambatan.</li>
          </ul>
        )}
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <a href="/pengenalan-ct" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md">
          ← Sebelumnya
        </a>
        <a href="/pencarian-lookup" className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ComputationalThinking;