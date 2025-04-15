import Layout from "../../components/Layout";
import {
  BookOpen,
  Lightbulb,
  BarChart,
  Filter,
  Code,
  CheckCircle,
} from "lucide-react";

export default function PengelolaanData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center">
        D. PENGELOLAAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>
            Memahami konsep pengelolaan data melalui teknik <i>Sorting</i> dan <i>Filtering</i> dalam <i>Spreadsheet</i>.
          </li>
          <li>
            Menggunakan pendekatan <i>Computational Thinking</i> untuk menyelesaikan permasalahan dalam pengelolaan data.
          </li>
          <li>
            Menerapkan teknik <i>Sorting</i> dan <i>Filtering</i> dalam studi kasus pengelolaan di lembar kerja.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data yang perlu dikelola agar lebih mudah dianalisis dan digunakan dalam pengambilan keputusan. Pengelolaan data adalah proses menyusun, mengurutkan, dan menyaring data agar lebih terstruktur serta dapat diakses dengan cepat. Jika dilakukan secara manual, pengelolaan data dapat memakan waktu yang lama dan rentan terhadap kesalahan. Oleh karena itu, kita dapat menggunakan fitur sorting (pengurutan) dan filtering (penyaringan) dalam spreadsheet untuk membantu proses ini secara lebih efisien.
      </p>


      {/* Pentingnya Peringkasan Data */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Pengelolaan Data Penting?
      </div>
          <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
      <li>
        Memudahkan pencarian informasi → Data yang tersusun rapi lebih mudah ditemukan.
      </li>
      <li>
        Meningkatkan efisiensi kerja → Sorting dan filtering menghemat waktu dalam analisis data.
      </li>
      <li>
        Membantu pengambilan keputusan → Data yang tersusun dengan baik memberikan informasi yang lebih akurat.
      </li>
      <li>
        Menghindari kesalahan dalam pengolahan data → Data yang tidak terorganisir dapat menyebabkan kesalahan dalam analisis dan pengambilan keputusan.
      </li>
    </ul>

    <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
      Pendekatan <i>Computational Thinking</i> (CT) membantu dalam mengelola data secara sistematis melalui beberapa langkah utama: <i>decomposition</i> (memecah masalah data yang kompleks menjadi bagian-bagian yang lebih kecil), <i>pattern recognition</i> (mengidentifikasi kesamaan atau pola dalam data), <i>abstraction</i> (memfokuskan pada informasi penting dan mengabaikan hal-hal yang
    </p>




      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum mengelola data, kita harus memahami langkah-langkah kecil yang perlu dilakukan:
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li>
            <strong>Tentukan tujuan pengelolaan data:</strong> Apakah ingin mengurutkan data agar lebih mudah dibaca atau menyaring data berdasarkan kriteria tertentu?
          </li>
          <li>
            <strong>Pilih teknik yang sesuai:</strong>
          </li>
        </ul>

        {/* Teknik: Sorting */}
        <section className="bg-gray-100 rounded p-4 mt-2 shadow-lg">
          <h3 className="font-semibold text-[#255F38]">1. Sorting</h3>
          <p className="text-gray-700 mt-2">
            <strong>Sorting</strong> digunakan untuk mengurutkan data agar lebih mudah dianalisis.
            Misalnya, jika kita ingin mengetahui siswa dengan nilai tertinggi, kita bisa mengurutkan data dari yang terbesar ke terkecil (<i>descending</i>).
          </p>
          <pre className="bg-gray-200 p-2 rounded mt-2">
            Pilih kolom → Klik menu Sort → Pilih A-Z (ascending) atau Z-A (descending)
          </pre>
        </section>

        {/* Teknik: Filtering */}
        <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
          <h3 className="font-semibold text-[#255F38]">2. Filtering</h3>
          <p className="text-gray-700 mt-2">
            <strong>Filtering</strong> digunakan untuk menampilkan hanya data yang memenuhi kriteria tertentu sementara data lainnya disembunyikan.
            Misalnya, hanya menampilkan siswa yang mendapatkan nilai 80.
          </p>
          <pre className="bg-gray-200 p-2 rounded mt-2">
            Pilih kolom → Klik menu Filter → Centang data yang ingin ditampilkan
          </pre>
        </section>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2 mt-4">
          <li>
            <strong>Tentukan langkah-langkah dalam menerapkan sorting dan filtering:</strong> Misalnya, memilih kolom yang digunakan sebagai acuan dan menentukan metode pengurutan atau penyaringan.
          </li>
        </ul>
      </div>


      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Pengenalan Pola
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah menentukan cara mengelola data, kita harus mengenali pola dalam data agar lebih efektif.
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Mengamati hasil <i>sorting</i>:</strong> Apakah setelah sorting data lebih mudah dibaca? Misalnya, apakah siswa dengan nilai tertinggi berada di posisi atas?
          </li>
          <li className="text-justify">
            <strong>Menganalisis hasil <i>filtering</i>:</strong> Setelah menyaring data, apakah informasi yang dihasilkan lebih relevan dan sesuai dengan kebutuhan?
          </li>
        </ul>
      </div>


      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-2 w-5 h-5" /> Abstraksi
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Agar data lebih mudah dipahami dan digunakan, kita hanya fokus pada bagian penting.
        </p>

        <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1 -ml-5">
          1. Mengabaikan informasi yang tidak diperlukan
        </p>
        <p className="text-gray-700 pl-10 mt-0 -ml-3 text-justify">
          Jika hanya ingin mengetahui siswa yang <span className="italic">lulus</span>, kita cukup melihat kolom <span className="italic">Nilai</span> tanpa memperhatikan detail lain seperti nama atau kelas.
        </p>

        <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1 -ml-5">
          2. Menyaring data untuk fokus pada informasi relevan
        </p>
        <p className="text-gray-700 pl-10 mt-0 -ml-3 text-justify">
          Misalnya, hanya menampilkan siswa dengan nilai lebih dari <span className="italic">80</span> agar bisa fokus pada siswa yang unggul.
        </p>

        <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1 -ml-5">
          3. Mewakili data dalam bentuk yang lebih sederhana
        </p>
        <p className="text-gray-700 pl-10 mt-0 -ml-3 text-justify">
          Kita bisa menampilkan jumlah siswa yang memiliki nilai tertentu tanpa perlu melihat data setiap siswa satu per satu — misalnya menggunakan rumus <span className="italic">COUNTIF</span>.
        </p>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>

        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Setelah kita memahami data yang tersedia dan menentukan informasi yang ingin kita cari, kita bisa membuat langkah-langkah sistematis untuk menerapkan sorting dan filtering di spreadsheet.
        </p>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 Sorting (Pengurutan) – Mengurutkan Data dari Nilai Tertinggi ke Terendah:
        </p>

        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 5. Contoh Data untuk Sorting
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Nilai Tugas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">95</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-sm md:text-base pl-6">
          1. Blok seluruh data termasuk header tabel (misalnya, kolom Nama Siswa dan Nilai Tugas).
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          2. Klik menu Data kemudian pilih Urutkan (Sort).
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          3. Pilih kolom yang ingin diurutkan, misalnya "Nilai Tugas".
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          4. Pilih Urutkan dari Z ke A untuk mendapatkan urutan dari nilai tertinggi ke terendah.
        </p>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 Filtering (Penyaringan) – Menampilkan Data Siswa dengan Nilai di Atas 80:
        </p>

        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Tabel 6. Contoh Data untuk Filtering
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
                <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">78</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">88</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Farah</td>
                <td className="border border-green-600 px-4 py-2">92</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-sm md:text-base pl-6">
          1. Blok seluruh data termasuk header kolom.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          2. Klik menu Data kemudian pilih Filter.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          3. Akan muncul ikon panah di bagian kanan header kolom.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          4. Klik ikon panah di kolom "Nilai Ujian", lalu pilih Filter Angka > Lebih besar dari.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          5. Masukkan nilai 80, lalu klik OK untuk menampilkan hanya siswa yang nilainya lebih dari 80.
        </p>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a
          href="/feedback2"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href="/penerapan-peringkasan"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}
