import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContohPeringkasan = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Header utama */}
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN PERINGKASAN DATA
      </div>

      {/* Studi Kasus 1: SUMIF & SUMIFS */}
      <h2 className="text-lg md:text-xl font-bold mt-8 mb-4 px-4 text-gray-800">
        Studi Kasus 1: Menjumlahkan dengan SUMIF & SUMIFS
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Sebagai bendahara kelas, kamu mencatat iuran dan pengeluaran bulanan. Gunakan <span className="font-semibold">SUMIF</span> untuk menjumlahkan iuran berdasarkan kategori seperti "Kebersihan" di semua bulan. Gunakan <span className="font-semibold">SUMIFS</span> untuk menjumlahkan pengeluaran seperti "Alat Kebersihan" pada bulan tertentu, misalnya "Maret".
      </p>

      {/* Tabel 1: Iuran & Pengeluaran */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 1. Data Iuran & Pengeluaran</p>
        <table className="border-collapse border border-green-800 w-full md:w-3/4 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Kategori</th>
              <th className="border border-green-600 px-4 py-2">Bulan</th>
              <th className="border border-green-600 px-4 py-2">Jumlah (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Kebersihan", "Januari", 5000],
              ["Kas", "Januari", 10000],
              ["Kebersihan", "Februari", 5000],
              ["Alat Kebersihan", "Januari", 30000],
              ["Alat Kebersihan", "Maret", 40000],
              ["Alat Kebersihan", "Maret", 35000],
              ["Dekorasi", "Maret", 25000],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">
                    {i === 2 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cell) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tentukan tujuan: Menjumlahkan iuran "Kebersihan" (SUMIF) dan pengeluaran "Alat Kebersihan" di "Maret" (SUMIFS).</li>
          <li>Tentukan kriteria: "Kebersihan" untuk SUMIF, "Alat Kebersihan" dan "Maret" untuk SUMIFS.</li>
          <li>Data: Tabel dengan kolom Kategori, Bulan, dan Jumlah.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pola SUMIF: Iuran berulang untuk kategori yang sama (Kebersihan) di berbagai bulan.</li>
          <li>Pola SUMIFS: Pengeluaran berulang berdasarkan Kategori dan Bulan (Alat Kebersihan di Maret).</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>SUMIF: Abaikan "Bulan", fokus pada "Kategori" dan "Jumlah".</li>
          <li>SUMIFS: Fokus pada "Kategori", "Bulan", dan "Jumlah".</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Berikut adalah langkah-langkah umum untuk menggunakan fungsi SUMIF dan SUMIFS:
        </p>
        <p className="text-gray-700 font-semibold mt-6">Contoh Penerapan SUMIF:</p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-2">
          <li>Pilih range "Kategori" (A2:A8), kriteria "Kebersihan".</li>
          <li>Pilih sum_range "Jumlah" (C2:C8).</li>
          <li>Rumus: <code className="bg-gray-200 px-2 py-1 rounded">=SUMIF(A2:A8;"Kebersihan";C2:C8)</code></li>
          <li>Hasil: Total iuran "Kebersihan" adalah Rp10.000.</li>
        </ul>
        <p className="text-gray-700 font-semibold mt-4">Contoh Penerapan SUMIFS:</p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-2">
          <li>Pilih sum_range "Jumlah" (C2:C8).</li>
          <li>Kriteria 1: "Kategori" (A2:A8) = "Alat Kebersihan".</li>
          <li>Kriteria 2: "Bulan" (B2:B8) = "Maret".</li>
          <li>Rumus: <code className="bg-gray-200 px-2 py-1 rounded">=SUMIFS(C2:C8;A2:A8;"Alat Kebersihan";B2:B8;"Maret")</code></li>
          <li>Hasil: Total "Alat Kebersihan" di Maret adalah Rp75.000.</li>
        </ul>
        <div className="flex justify-center mt-4">
          <iframe
            width="80%"
            height="400"
            style={{ border: '1px solid #e7e7e7' }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb13af0506b3624931b03051e9daf94597?mode=embed"
          ></iframe>
        </div>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          SUMIF cocok untuk menjumlahkan data dengan satu kriteria (kategori), sedangkan SUMIFS untuk beberapa kriteria (kategori dan bulan), menghemat waktu dan akurat.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Cepat dibandingkan hitung manual.</li>
          <li>Pastikan ejaan kriteria (misalnya, "Maret") tepat untuk hasil akurat.</li>
        </ul>
      </div>

      {/* Studi Kasus 2: COUNTIF & COUNTIFS */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: Menghitung dengan COUNTIF & COUNTIFS
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Sebagai guru, kamu mencatat partisipasi siswa dalam kegiatan ekstrakurikuler. Gunakan <span className="font-semibold">COUNTIF</span> untuk menghitung jumlah kegiatan "Olahraga". Gunakan <span className="font-semibold">COUNTIFS</span> untuk menghitung siswa perempuan kelas 8A yang berpartisipasi.
      </p>

      <div className="flex flex-col items-center mt-4">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 2. Data Partisipasi Ekstrakurikuler</p>
        <table className="border-collapse border border-green-800 w-full md:w-3/4 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Jenis Kegiatan</th>
              <th className="border border-green-600 px-4 py-2">Kelas</th>
              <th className="border border-green-600 px-4 py-2">Jenis Kelamin</th>
              <th className="border border-green-600 px-4 py-2">Partisipasi</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Olahraga", "8A", "Perempuan", "Ya"],
              ["Seni", "8A", "Laki-laki", "Ya"],
              ["Olahraga", "8A", "Perempuan", "Ya"],
              ["Klub Sains", "8A", "Laki-laki", "Tidak"],
              ["Olahraga", "8B", "Perempuan", "Ya"],
              ["Seni", "8A", "Perempuan", "Tidak"],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tentukan tujuan: Menghitung jumlah kegiatan "Olahraga" (COUNTIF) dan siswa perempuan 8A yang berpartisipasi (COUNTIFS).</li>
          <li>Tentukan kriteria: "Olahraga" untuk COUNTIF, "8A", "Perempuan", dan "Ya" untuk COUNTIFS.</li>
          <li>Data: Tabel dengan kolom Jenis Kegiatan, Kelas, Jenis Kelamin, dan Partisipasi.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pola COUNTIF: Kegiatan berulang untuk jenis yang sama (Olahraga).</li>
          <li>Pola COUNTIFS: Partisipasi siswa berulang berdasarkan Kelas, Jenis Kelamin, dan Partisipasi.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>COUNTIF: Abaikan "Kelas", "Jenis Kelamin", dan "Partisipasi", fokus pada "Jenis Kegiatan".</li>
          <li>COUNTIFS: Fokus pada "Kelas", "Jenis Kelamin", dan "Partisipasi".</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Berikut adalah langkah-langkah umum untuk menggunakan fungsi COUNTIF dan COUNTIFS:
        </p>
        <p className="text-gray-700 font-semibold mt-6">Contoh Penerapan COUNTIF:</p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-2">
          <li>Pilih range "Jenis Kegiatan" (A2:A7), kriteria "Olahraga".</li>
          <li>Rumus: <code className="bg-gray-200 px-2 py-1 rounded">=COUNTIF(A2:A7;"Olahraga")</code></li>
          <li>Hasil: Jumlah kegiatan "Olahraga" adalah 3.</li>
        </ul>
        <p className="text-gray-700 font-semibold mt-4">Contoh Penerapan COUNTIFS:</p>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-2">
          <li>Kriteria 1: "Kelas" (B2:B7) = "8A".</li>
          <li>Kriteria 2: "Jenis Kelamin" (C2:C7) = "Perempuan".</li>
          <li>Kriteria 3: "Partisipasi" (D2:D7) = "Ya".</li>
          <li>Rumus: <code className="bg-gray-200 px-2 py-1 rounded">=COUNTIFS(B2:B7;"8A";C2:C7;"Perempuan";D2:D7;"Ya")</code></li>
          <li>Hasil: Jumlah siswa perempuan 8A yang berpartisipasi adalah 2.</li>
        </ul>
        <div className="flex justify-center mt-4">
          <iframe
            width="80%"
            height="400"
            style={{ border: '1px solid #e7e7e7' }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/4yfvb546e313018d74fba81dbe3f53d0a88e4?mode=embed"
          ></iframe>
        </div>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          COUNTIF menghitung data dengan satu kriteria, COUNTIFS untuk beberapa kriteria, membantu analisis cepat.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Mengurangi kesalahan hitung manual.</li>
          <li>Pastikan ejaan kriteria tepat untuk hasil akurat.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => navigate("/pencarian-lookup")}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => navigate("/aktivitas-lookup")}
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
    </Layout>
  );
};

export default ContohPeringkasan;