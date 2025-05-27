import Layout from "../../components/Layout";

export default function RangkumanVisualisasiData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN VISUALISASI DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep visualisasi data dalam bentuk chart, tabel, atau grafik untuk menyajikan informasi secara jelas dan mudah dipahami menggunakan aplikasi lembar kerja, sehingga informasi lebih cepat dipahami dibandingkan hanya angka atau teks.
        </p>

        <div className="space-y-6 px-4">
          {/* Peran Visualisasi Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Peran Visualisasi Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Visualisasi data membantu menyajikan informasi dengan lebih mudah melalui chart, tabel, atau grafik.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li>Mengidentifikasi pola dan tren (contoh: nilai ujian siswa meningkat dari 75 ke 90 selama 5 bulan).</li>
              <li>Membantu membuat keputusan (contoh: strategi belajar berdasarkan tren nilai).</li>
              <li>Menyajikan data lebih ringkas (contoh: penjualan jajanan dalam bentuk Bar Chart).</li>
              <li>Meningkatkan komunikasi data (contoh: presentasi data menjadi lebih menarik).</li>
              <li>Mendeteksi kesalahan (contoh: menemukan nilai ujian yang tidak wajar).</li>
            </ul>
          </div>

          {/* Jenis Visualisasi Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Jenis Visualisasi Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Berbagai jenis chart digunakan untuk menyajikan data sesuai kebutuhan.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Line Chart:</strong> Menunjukkan perubahan data seiring waktu (contoh: nilai ujian Budi dari Januari 75, Februari 80, Maret 85, April 78, Mei 90).</li>
              <li><strong>Bar Chart:</strong> Membandingkan jumlah data (contoh: penjualan jajanan bakpao 50 porsi, siomay 30 porsi, cilok 20 porsi).</li>
              <li><strong>Pie Chart:</strong> Menunjukkan persentase (contoh: pilihan ekstrakurikuler Pramuka 40 siswa, Seni Tari 30 siswa, Bola Voli 20 siswa).</li>
              <li><strong>Area Chart:</strong> Menampilkan jumlah total atau tren (contoh: jumlah tugas yang dikumpulkan per bulan).</li>
              <li><strong>Column Chart:</strong> Membandingkan data antar kategori (contoh: kehadiran siswa Senin 90, Selasa 85, Rabu 88, Kamis 92, Jumat 80).</li>
            </ul>
          </div>

          {/* Langkah Membuat Visualisasi Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Langkah Membuat Visualisasi Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Langkah-langkah untuk membuat chart di spreadsheet agar data lebih mudah dipahami:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li>Tentukan tujuan visualisasi (contoh: membandingkan penjualan jajanan atau melihat tren nilai ujian).</li>
              <li>Kumpulkan data yang dibutuhkan (contoh: nilai ujian Budi dari Januari hingga Mei).</li>
              <li>Pilih jenis chart yang tepat (contoh: Line Chart untuk tren, Bar Chart untuk perbandingan).</li>
              <li>Siapkan data dalam tabel rapi, blok data, lalu klik "Insert Chart" untuk membuat visualisasi.</li>
            </ul>
          </div>

          {/* Modifikasi Chart */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">4. Modifikasi Chart</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Chart dapat dimodifikasi agar lebih informatif dan sesuai kebutuhan, seperti mengubah tipe chart, menukar susunan data, dan memilih data penting untuk ditampilkan.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li>Ubah tipe chart (contoh: dari Line Chart ke Area Chart untuk tren nilai Budi).</li>
              <li>Tukar susunan data (contoh: tukar Row ke Column jika ada beberapa seri data seperti nilai Budi dan teman).</li>
              <li>Fokus pada data penting (contoh: gunakan hanya bulan dan nilai rata-rata Budi, bukan jumlah ulangan).</li>
              <li>Analisis pola (contoh: nilai Budi naik dari 75 ke 90, meskipun turun di April, menunjukkan tren positif).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigasi */}
      <div className="flex justify-between mt-10 px-4">
        <button
          onClick={() => (window.location.href = "/pencarian-data")}
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