import Layout from "../../components/Layout";

export default function RangkumanPeringkasanData() {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white rounded-lg shadow-md">
        Rangkuman Peringkasan Data
      </h1>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep peringkasan data menggunakan fungsi dalam aplikasi lembar kerja untuk menyajikan informasi secara singkat dan akurat, dengan pendekatan <strong>Computational Thinking</strong> untuk meringkas data secara efisien.
        </p>

        <div className="space-y-6 px-4">
          {/* Peringkasan Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Peringkasan Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              <strong>Tujuan:</strong> Mengolah data besar dan kompleks menjadi sederhana tanpa menghilangkan informasi penting menggunakan fungsi seperti <strong>SUMIF</strong>, <strong>COUNTIF</strong>, <strong>SUMIFS</strong>, dan <strong>COUNTIFS</strong>.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Manfaat:</strong> Menghemat waktu, membantu pengambilan keputusan, dan menampilkan informasi lebih jelas.</li>
              <li><strong>Contoh:</strong> Menghitung jumlah pembelian makanan favorit di kantin atau total pengeluaran transportasi.</li>
            </ul>
          </div>

          {/* Fungsi Peringkasan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Fungsi Peringkasan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              <strong>Tujuan:</strong> Menggunakan fungsi spreadsheet untuk menjumlahkan atau menghitung data berdasarkan kriteria tertentu.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>SUMIF:</strong> Menjumlahkan data dengan satu syarat (contoh: total pengeluaran untuk kategori makanan).</li>
              <li><strong>SUMIFS:</strong> Menjumlahkan data dengan beberapa syarat (contoh: pengeluaran alat kebersihan di bulan Maret).</li>
              <li><strong>COUNTIF:</strong> Menghitung jumlah data dengan satu syarat (contoh: jumlah film bergenre petualangan).</li>
              <li><strong>COUNTIFS:</strong> Menghitung jumlah data dengan beberapa syarat (contoh: siswa perempuan kelas 8A yang hadir).</li>
            </ul>
          </div>

          {/* Pendekatan Computational Thinking */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Pendekatan Computational Thinking</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Pendekatan ini membantu memecah proses peringkasan data menjadi langkah-langkah sistematis:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Dekomposisi:</strong> Memecah masalah menjadi langkah kecil, seperti mengidentifikasi tujuan dan kriteria peringkasan.</li>
              <li><strong>Pengenalan Pola:</strong> Mengenali pola data, seperti pengelompokan berdasarkan kategori atau kriteria tertentu.</li>
              <li><strong>Abstraksi:</strong> Fokus pada data relevan, mengabaikan informasi yang tidak diperlukan.</li>
              <li><strong>Algoritma:</strong> Menyusun langkah peringkasan dengan rumus, seperti SUMIF atau COUNTIFS.</li>
            </ul>
          </div>

          {/* Kesimpulan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">4. Kesimpulan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi peringkasan (<strong>SUMIF</strong>, <strong>COUNTIF</strong>, <strong>SUMIFS</strong>, <strong>COUNTIFS</strong>) ideal untuk mengolah data besar menjadi informasi yang singkat dan jelas. Dengan pendekatan <strong>Computational Thinking</strong>, proses peringkasan menjadi lebih efisien dan akurat. Pastikan data terstruktur, gunakan kriteria yang konsisten, dan pilih fungsi sesuai kebutuhan untuk menghindari kesalahan dan mempercepat analisis.
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
          onClick={() => (window.location.href = "/petunjuk-quiz-peringkasan")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis →
        </button>
      </div>
    </Layout>
  );
}