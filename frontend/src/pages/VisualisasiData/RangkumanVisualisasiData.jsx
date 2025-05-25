import Layout from "../../components/Layout";

export default function RangkumanVisualisasiData() {
  return (
    <Layout>
       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN VISUALISASI DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep visualisasi data menggunakan grafik, tabel, dan diagram dalam aplikasi lembar kerja, dengan pendekatan <strong>Computational Thinking</strong> untuk menyajikan informasi secara efektif.
        </p>

        <div className="space-y-6 px-4">
          {/* Visualisasi Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Visualisasi Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              <strong>Tujuan:</strong> Menyajikan informasi dalam bentuk grafik, tabel, atau diagram agar mudah dipahami, menggunakan fitur seperti <strong>Insert Chart</strong> pada spreadsheet.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Diagram Garis:</strong> Menampilkan tren perubahan data dari waktu ke waktu.</li>
              <li><strong>Diagram Batang/Kolom:</strong> Membandingkan jumlah antar kategori.</li>
              <li><strong>Diagram Lingkaran:</strong> Menunjukkan proporsi atau persentase.</li>
              <li><strong>Manfaat:</strong> Mengidentifikasi pola, mendukung pengambilan keputusan, menyajikan data secara ringkas, meningkatkan komunikasi, dan mendeteksi kesalahan.</li>
              <li><strong>Contoh:</strong> Membuat diagram garis untuk tren nilai ujian siswa selama satu semester.</li>
            </ul>
          </div>

          {/* Jenis Visualisasi */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Jenis Visualisasi</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              <strong>Tujuan:</strong> Memilih jenis grafik yang sesuai berdasarkan karakteristik data dan tujuan visualisasi.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Diagram Garis/Area:</strong> Cocok untuk data waktu (contoh: kehadiran siswa harian).</li>
              <li><strong>Diagram Batang/Kolom:</strong> Ideal untuk perbandingan kategori (contoh: penjualan jajanan).</li>
              <li><strong>Diagram Lingkaran:</strong> Digunakan untuk distribusi persentase (contoh: preferensi ekstrakurikuler).</li>
              <li><strong>Contoh:</strong> Menampilkan distribusi pengeluaran bulanan dengan diagram lingkaran.</li>
            </ul>
          </div>

          {/* Pendekatan Computational Thinking */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Pendekatan Computational Thinking</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Pendekatan ini membantu memecah proses visualisasi data menjadi langkah-langkah sistematis:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Dekomposisi:</strong> Memecah proses menjadi langkah kecil, seperti menentukan tujuan, mengumpulkan data, dan memilih grafik.</li>
              <li><strong>Pengenalan Pola:</strong> Mengenali pola data, seperti tren waktu atau perbandingan kategori, untuk memilih grafik yang tepat.</li>
              <li><strong>Abstraksi:</strong> Fokus pada data relevan, mengabaikan informasi tidak penting.</li>
              <li><strong>Algoritma:</strong> Menyusun langkah pembuatan grafik, seperti menyiapkan tabel, memilih data, dan menggunakan <strong>Insert Chart</strong>.</li>
            </ul>
          </div>

          {/* Kesimpulan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">4. Kesimpulan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Visualisasi data (diagram garis, batang, lingkaran) ideal untuk menyajikan informasi secara jelas dan menarik, sedangkan pendekatan <strong>Computational Thinking</strong> memastikan prosesnya sistematis dan efisien. Pastikan data terstruktur dalam tabel yang rapi, pilih jenis grafik sesuai tujuan, dan periksa grafik untuk kejelasan. Dengan visualisasi yang tepat, pola dan tren data dapat diidentifikasi dengan cepat, mendukung komunikasi dan pengambilan keputusan yang lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* Navigasi */}
      <div className="flex justify-between mt-10 px-4">
        <button
          onClick={() => (window.location.href = "/home")}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 cursor-pointer transition duration-300"
        >
          Sebelumnya
        </button>
        <button
          onClick={() => (window.location.href = "/petunjuk-pengerjaan-visualisasi")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis →
        </button>
      </div>
    </Layout>
  );
}