import Layout from "../../components/Layout";

export default function RangkumanPencarianData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN PENCARIAN DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep pencarian data menggunakan <strong>fungsi Lookup</strong> dan <strong>fungsi Reference</strong> dalam aplikasi lembar kerja untuk menemukan informasi secara cepat dan akurat.
        </p>

        <div className="space-y-6 px-4">
          {/* Pencarian Lookup */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Pencarian Lookup</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi Lookup digunakan untuk mencari data dalam tabel berdasarkan kunci tertentu.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>VLOOKUP:</strong> Mencari nilai di kolom pertama tabel, mengambil data dari kolom tertentu (contoh: mencari kode barang "B001" di kolom kode, mengambil nama barang "Buku" dari kolom nama).</li>
              <li><strong>HLOOKUP:</strong> Mencari nilai di baris pertama tabel, mengambil data dari baris tertentu (contoh: mencari hari "Senin" di baris hari, mengambil poin 50 dari baris poin).</li>
              <li><strong>Parameter:</strong> Gunakan TRUE untuk nilai terdekat (tabel harus terurut), FALSE untuk kecocokan persis.</li>
              <li><strong>Manfaat:</strong> Mempermudah pencarian data dalam jumlah besar, seperti kategori diskon berdasarkan jumlah pembelian.</li>
            </ul>
          </div>

          {/* Pencarian Reference */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Pencarian Reference</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi Reference digunakan untuk mengambil data berdasarkan posisi atau indeks dalam tabel.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>INDEX:</strong> Mengambil data dari posisi baris dan kolom tertentu (contoh: mengambil stok 10 dari baris 1, kolom stok pada tabel buku).</li>
              <li><strong>MATCH:</strong> Mencari posisi data dalam daftar (contoh: kode "B001" ada di baris ke-1 pada daftar kode barang).</li>
              <li><strong>CHOOSE:</strong> Memilih nilai dari daftar berdasarkan nomor indeks (contoh: indeks ke-3 menghasilkan kegiatan "Musik" dari daftar kegiatan seni).</li>
              <li><strong>Manfaat:</strong> Efektif untuk pencarian berbasis posisi, seperti menentukan stok buku atau jadwal kegiatan.</li>
            </ul>
          </div>

          {/* Langkah Pencarian Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Langkah Pencarian Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Langkah-langkah untuk melakukan pencarian data menggunakan fungsi Lookup dan Reference:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li>Identifikasi data yang dicari (misalnya, kode barang atau nomor absen).</li>
              <li>Siapkan tabel referensi yang rapi dan sesuai (kolom/baris pertama berisi nilai unik).</li>
              <li>Pilih fungsi yang tepat (VLOOKUP/HLOOKUP untuk pencarian kunci, INDEX/MATCH/CHOOSE untuk posisi).</li>
              <li>Tulis rumus dengan benar, gunakan absolute reference ($) agar rentang tabel tetap saat disalin.</li>
            </ul>
          </div>

          {/* Kesimpulan */}
          <div>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi Lookup (VLOOKUP, HLOOKUP) cocok untuk mencari data berdasarkan kunci dalam tabel vertikal atau horizontal, seperti kategori diskon atau poin lomba. Fungsi Reference (INDEX, MATCH, CHOOSE) digunakan untuk pencarian berbasis posisi, seperti stok buku atau jadwal kegiatan. Pastikan tabel terstruktur, gunakan parameter TRUE untuk data terurut, FALSE untuk kecocokan persis, dan absolute reference ($) agar rumus tetap akurat saat disalin.
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
          onClick={() => (window.location.href = "/petunjuk-pengerjaan-pencarian")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis →
        </button>
      </div>
    </Layout>
  );
}