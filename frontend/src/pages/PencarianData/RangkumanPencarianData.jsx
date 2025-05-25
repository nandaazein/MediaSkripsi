import Layout from "../../components/Layout";

export default function RangkumanPencarianData() {
  return (
    <Layout>
       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN PENCARIAN DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep pencarian data menggunakan <strong>fungsi Lookup</strong> dan <strong>fungsi Reference</strong> dalam aplikasi lembar kerja, dengan pendekatan <strong>Computational Thinking</strong> untuk menyelesaikan masalah secara efisien.
        </p>

        <div className="space-y-6 px-4">
          {/* Pencarian Lookup */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Pencarian Lookup</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              <strong>Tujuan:</strong> Mencari data dalam tabel berdasarkan kunci tertentu menggunakan <strong>VLOOKUP</strong> dan <strong>HLOOKUP</strong>.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>VLOOKUP:</strong> Mencari nilai di kolom pertama, mengembalikan nilai dari kolom tertentu.</li>
              <li><strong>HLOOKUP:</strong> Mencari nilai di baris pertama, mengembalikan nilai dari baris tertentu.</li>
              <li><strong>Manfaat:</strong> Otomatisasi pencarian data besar, mengurangi kesalahan.</li>
              <li><strong>Contoh:</strong> Mencari harga makanan berdasarkan kode pesanan.</li>
            </ul>
          </div>

          {/* Pencarian Reference */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Pencarian Reference</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              <strong>Tujuan:</strong> Mengambil data berdasarkan posisi atau indeks menggunakan <strong>INDEX</strong>, <strong>MATCH</strong>, dan <strong>CHOOSE</strong>.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>INDEX:</strong> Mengambil data dari baris/kolom tertentu.</li>
              <li><strong>MATCH:</strong> Mencari posisi nilai dalam daftar.</li>
              <li><strong>CHOOSE:</strong> Memilih nilai dari daftar berdasarkan indeks.</li>
              <li><strong>Contoh:</strong> Menentukan jadwal ekstrakurikuler berdasarkan hari.</li>
            </ul>
          </div>

          {/* Pendekatan Computational Thinking */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Pendekatan Computational Thinking</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Pendekatan ini membantu memecah masalah pencarian data menjadi langkah-langkah sistematis:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Dekomposisi:</strong> Memecah masalah menjadi langkah kecil, seperti mengidentifikasi data dan tabel referensi.</li>
              <li><strong>Pengenalan Pola:</strong> Mengenali struktur data, seperti nilai unik atau tabel terurut.</li>
              <li><strong>Abstraksi:</strong> Fokus pada data relevan, mengabaikan yang tidak perlu.</li>
              <li><strong>Algoritma:</strong> Menyusun langkah pencarian dengan rumus, seperti VLOOKUP atau INDEX.</li>
            </ul>
          </div>

          {/* Kesimpulan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">4. Kesimpulan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi Lookup (VLOOKUP, HLOOKUP) ideal untuk pencarian berdasarkan kunci dalam tabel vertikal atau horizontal, sedangkan fungsi Reference (INDEX, MATCH, CHOOSE) cocok untuk pencarian berbasis posisi atau indeks. Dengan Computational Thinking, proses pencarian menjadi lebih efisien dan akurat. Pastikan tabel terstruktur, gunakan <strong>absolute reference ($)</strong> untuk rumus yang disalin, dan pilih pencarian persis (FALSE/0) untuk data tidak terurut.
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
          onClick={() => (window.location.href = "/petunjuk-pengerjaan")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis →
        </button>
      </div>
    </Layout>
  );
}