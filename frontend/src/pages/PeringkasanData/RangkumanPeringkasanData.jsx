import Layout from "../../components/Layout";

export default function RangkumanPeringkasanData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        RANGKUMAN PERINGKASAN DATA
      </div>

      <section className="p-6 bg-white shadow-lg">
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mb-4">
          Materi ini membahas konsep peringkasan data menggunakan fungsi <strong>SUMIF, COUNTIF, SUMIFS,</strong> dan <strong>COUNTIFS</strong> dalam aplikasi lembar kerja untuk menyajikan informasi secara singkat, akurat, dan mudah dipahami.
        </p>

        <div className="space-y-6 px-4">
          {/* Fungsi Peringkasan Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">1. Fungsi Peringkasan Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi peringkasan digunakan untuk mengolah data besar menjadi ringkas berdasarkan kriteria tertentu.
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>SUMIF:</strong> Menjumlahkan data dengan satu syarat (contoh: total nilai siswa kelas "8A" dari tabel nilai).</li>
              <li><strong>COUNTIF:</strong> Menghitung jumlah data dengan satu syarat (contoh: jumlah siswa dengan nilai di atas 75).</li>
              <li><strong>SUMIFS:</strong> Menjumlahkan data dengan lebih dari satu syarat (contoh: total pendapatan kategori "Elektronik" di bulan "Januari").</li>
              <li><strong>COUNTIFS:</strong> Menghitung jumlah data dengan lebih dari satu syarat (contoh: jumlah siswa perempuan kelas "8A" yang hadir).</li>
              <li><strong>Manfaat:</strong> Menghemat waktu, membantu pengambilan keputusan, dan menyajikan informasi lebih jelas.</li>
            </ul>
          </div>

          {/* Langkah Peringkasan Data */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">2. Langkah Peringkasan Data</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Langkah-langkah untuk menerapkan peringkasan data menggunakan pendekatan Computational Thinking:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>Dekomposisi:</strong> Tentukan apa yang ingin diringkas (misalnya, total nilai atau jumlah siswa) dan identifikasi data yang relevan.</li>
              <li><strong>Pengenalan Pola:</strong> Kenali pola dalam data, seperti kategori berulang, untuk memilih kriteria yang tepat.</li>
              <li><strong>Abstraksi:</strong> Fokus pada data penting dan abaikan informasi yang tidak diperlukan.</li>
              <li><strong>Algoritma:</strong> Tulis rumus dengan benar, seperti =SUMIF(range, criteria, sum_range), dengan range dan kriteria yang sesuai.</li>
            </ul>
          </div>

          {/* Contoh Penerapan */}
          <div>
            <h3 className="text-lg font-semibold text-green-700">3. Contoh Penerapan</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Peringkasan data dapat diterapkan dalam berbagai situasi sehari-hari:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mt-3 text-sm md:text-base space-y-1">
              <li><strong>SUMIF:</strong> Menghitung total iuran "Kebersihan" (Rp20.000) dari tabel pembayaran siswa.</li>
              <li><strong>SUMIFS:</strong> Menjumlahkan pengeluaran "Alat Kebersihan" di bulan "Maret" (Rp75.000).</li>
              <li><strong>COUNTIF:</strong> Menghitung jumlah film bergenre "Petualangan" (6 film) dari daftar tontonan.</li>
              <li><strong>COUNTIFS:</strong> Menghitung jumlah siswa perempuan kelas "8A" yang hadir (4 siswa).</li>
            </ul>
          </div>

          {/* Kesimpulan */}
          <div>
            <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
              Fungsi SUMIF dan COUNTIF cocok untuk peringkasan dengan satu kriteria, seperti total nilai atau jumlah siswa tertentu. Fungsi SUMIFS dan COUNTIFS ideal untuk analisis dengan beberapa kriteria, seperti pengeluaran berdasarkan kategori dan bulan. Pastikan data konsisten, gunakan range dan kriteria yang tepat, dan terapkan pendekatan Computational Thinking untuk hasil yang akurat dan efisien.
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
          onClick={() => (window.location.href = "/petunjuk-pengerjaan-peringkasan")}
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
        >
          Lanjut ke Kuis →
        </button>
      </div>
    </Layout>
  );
}