import Layout from "../../components/Layout";

export default function RangkumanPengelolaanData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN PENGELOLAAN DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas cara mengelola data menggunakan fitur <strong>Sorting</strong> dan <strong>Filtering</strong> dalam aplikasi spreadsheet. Pendekatan <strong>Computational Thinking</strong> digunakan agar proses pengelolaan data menjadi lebih efisien, akurat, dan mudah dipahami.
        </p>

        <div className="space-y-6 px-4">
          {/* Pengelolaan Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Pengelolaan Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Pengelolaan data adalah proses menyusun, mengurutkan, dan menyaring data agar terstruktur dan mudah dianalisis. Fitur sorting dan filtering membantu menghemat waktu dan mengurangi kesalahan.
            </p>
          </div>

          {/* Teknik Pengelolaan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Teknik Pengelolaan Data</h3>

            <p className="mt-2 text-gray-700 font-semibold">a. Sorting (Pengurutan)</p>
            <ul className="list-disc ml-6 text-gray-700 mt-1 text-sm md:text-base space-y-1">
              <li><strong>Tujuan:</strong> Mengurutkan data berdasarkan kolom tertentu.</li>
              <li><strong>Jenis:</strong> Ascending (A-Z), Descending (Z-A).</li>
              <li><strong>Manfaat:</strong> Memudahkan analisis, seperti menentukan peringkat.</li>
              <li><strong>Contoh:</strong> Mengurutkan skor lomba pidato dari tertinggi ke terendah.</li>
            </ul>

            <p className="mt-4 text-gray-700 font-semibold">b. Filtering (Penyaringan)</p>
            <ul className="list-disc ml-6 text-gray-700 mt-1 text-sm md:text-base space-y-1">
              <li><strong>Tujuan:</strong> Menyaring data sesuai kriteria tertentu.</li>
              <li><strong>Cara Kerja:</strong> Memilih nilai tertentu pada kolom data.</li>
              <li><strong>Manfaat:</strong> Fokus pada informasi penting.</li>
              <li><strong>Contoh:</strong> Menampilkan hanya siswa yang mengikuti ekstrakurikuler Basket.</li>
            </ul>
          </div>

          {/* CT */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Pendekatan Computational Thinking</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Pendekatan ini membantu mengelola data secara sistematis:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Dekomposisi:</strong> Memecah tugas menjadi langkah kecil (pilih kolom, tentukan tujuan, terapkan teknik).</li>
              <li><strong>Pengenalan Pola:</strong> Mengenali pola seperti data terbesar di atas setelah sorting.</li>
              <li><strong>Abstraksi:</strong> Fokus pada data penting seperti kolom Skor.</li>
              <li><strong>Algoritma:</strong> Menyusun langkah sistematis seperti blok data → Sort Z-A → selesai.</li>
            </ul>
          </div>


          {/* Kesimpulan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">4. Kesimpulan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Sorting digunakan untuk mengurutkan data berdasarkan urutan tertentu, sedangkan Filtering digunakan untuk menampilkan data yang relevan. Keduanya membantu proses analisis data menjadi lebih mudah dan efisien. Pastikan data memiliki header, data tertata rapi, dan selalu periksa hasil akhir untuk memastikan keakuratan.
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
          ← Kembali ke Beranda
        </button>
        <button
          onClick={() => (window.location.href = "/petunjuk-quiz-pengelolaan")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis → 
        </button>
      </div>
    </Layout>
  );
}
