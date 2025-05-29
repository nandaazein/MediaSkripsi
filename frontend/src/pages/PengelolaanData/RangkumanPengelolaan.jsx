import Layout from "../../components/Layout";

export default function RangkumanPengelolaanData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN PENGELOLAAN DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep pengelolaan data menggunakan teknik <strong>Sorting</strong> dan <strong>Filtering</strong> dalam aplikasi lembar kerja untuk menyusun dan menyaring data agar lebih terstruktur, mudah dianalisis, dan mendukung pengambilan keputusan.
        </p>

        <div className="space-y-6 px-4">
          {/* Teknik Pengelolaan Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Teknik Pengelolaan Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Teknik pengelolaan data membantu menyusun dan menyaring data besar agar lebih mudah dipahami dan digunakan.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Sorting:</strong> Mengurutkan data berdasarkan kriteria tertentu, seperti nilai tertinggi ke terendah (descending) atau alfabet A-Z (ascending).</li>
              <li><strong>Filtering:</strong> Menyaring data untuk menampilkan hanya informasi yang memenuhi kriteria tertentu, seperti siswa dari kelas tertentu.</li>
              <li><strong>Manfaat:</strong> Mempercepat pencarian informasi, meningkatkan efisiensi, mendukung pengambilan keputusan, dan mengurangi kesalahan analisis.</li>
            </ul>
          </div>

          {/* Langkah Pengelolaan Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Langkah Pengelolaan Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Langkah-langkah untuk menerapkan pengelolaan data menggunakan pendekatan Computational Thinking:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Dekomposisi:</strong> Pecah masalah menjadi langkah kecil, seperti menentukan tujuan pengurutan atau penyaringan dan memilih kolom yang relevan.</li>
              <li><strong>Pengenalan Pola:</strong> Identifikasi pola dalam data, seperti urutan nilai atau kategori berulang, untuk mempermudah analisis.</li>
              <li><strong>Abstraksi:</strong> Fokus pada data penting, seperti kolom skor untuk sorting atau kolom kelas untuk filtering, dan abaikan informasi yang tidak relevan.</li>
              <li><strong>Algoritma:</strong> Terapkan langkah sistematis, seperti memblok data, memilih opsi Sort (A-Z/Z-A) atau Filter, dan menentukan kriteria.</li>
            </ul>
          </div>

          {/* Contoh Penerapan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Contoh Penerapan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Teknik sorting dan filtering dapat diterapkan dalam situasi sehari-hari:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Sorting:</strong> Mengurutkan data lomba pidato berdasarkan skor tertinggi (contoh: Rani 92, Fani 90, Dedi 88).</li>
              <li><strong>Filtering:</strong> Menyaring siswa yang mengikuti ekstrakurikuler Basket (contoh: Bima, Tono, Rina, Sari).</li>
            </ul>
          </div>

          {/* Kesimpulan */}
          <div>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Teknik sorting membantu mengurutkan data untuk memudahkan analisis, seperti menentukan peringkat berdasarkan skor. Filtering memungkinkan penyaringan data berdasarkan kriteria spesifik, seperti menampilkan siswa dari kelas atau ekstrakurikuler tertentu. Dengan pendekatan Computational Thinking, pengelolaan data menjadi lebih sistematis, efisien, dan akurat.
            </p>
          </div>
        </div>
      </section>

      {/* Navigasi */}
      <div className="flex justify-between mt-10 px-4">
        <button
          onClick={() => (window.location.href = "/berlatih-pengelolaan")}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 cursor-pointer transition duration-300"
        >
          Sebelumnya→
        </button>
        <button
          onClick={() => (window.location.href = "/petunjuk-pengerjaan-pengelolaan")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis →
        </button>
      </div>
    </Layout>
  );
}