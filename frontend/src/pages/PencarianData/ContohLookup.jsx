import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohLookup = () => {
  return (
    <Layout>
      {/* Header judul */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN FUNGSI LOOKUP
      </div>

      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 1: VLOOKUP 
      </h2>

      {/* Paragraf Penjelasan VLOOKUP */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Andi adalah seorang manajer toko yang ingin menentukan kategori diskon untuk pelanggan berdasarkan jumlah pembelian mereka menggunakan spreadsheet. Ia memiliki Tabel 1, 
        yang berisi daftar nama pelanggan dan jumlah pembelian mereka (dalam ribuan rupiah). Selain itu, ia juga memiliki Tabel 2, yang berisi rentang jumlah pembelian beserta kategori diskon yang sesuai. Andi ingin mengisi kolom <span className="font-semibold">"Kategori Diskon"</span> pada Tabel 1 secara otomatis dengan menggunakan fungsi <span className="font-semibold">VLOOKUP</span> dengan parameter <span className="font-semibold">TRUE</span> untuk pencarian perkiraan, karena tabel referensi sudah diurutkan.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 1. Daftar Pembelian Pelanggan</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Nama</th>
              <th className="border border-green-600 px-4 py-2">Jumlah Pembelian (Rp ribu)</th>
              <th className="border border-green-600 px-4 py-2">Kategori Diskon</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Budi", "150.000", ""],
              [2, "Clara", "450.000", ""],
              [3, "Dani", "800.000", ""],
              [4, "Eka", "300.000", ""],
              [5, "Fira", "600.000", ""],
              [6, "Gita", "100.000", ""],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-gray-600 text-sm text-center mb-2 italic mt-4">Tabel 2. Daftar Kategori Diskon</p>
        <table className="border-collapse border border-green-800 w-full md:w-1/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Jumlah Pembelian (Rp ribu)</th>
              <th className="border border-green-600 px-4 py-2">Kategori Diskon</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "Tidak Ada"],
              ["100.000", "Bronze"],
              ["300.000", "Silver"],
              ["500.000", "Gold"],
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

      {/* DEKOMPOSISI VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Andi ingin mengisi kolom "Kategori Diskon" berdasarkan jumlah pembelian pelanggan.</li>
          <li>Ada dua tabel: <span className="font-semibold">Tabel 1</span> berisi daftar pelanggan dan jumlah pembelian mereka, sedangkan <span className="font-semibold">Tabel 2</span> berisi rentang jumlah pembelian dan kategori diskon.</li>
          <li>Kita perlu mencocokkan jumlah pembelian di Tabel 1 dengan rentang di Tabel 2 untuk mendapatkan kategori diskon yang sesuai.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Setiap jumlah pembelian di <span className="font-semibold">Tabel 1</span> bisa dicocokkan dengan kategori diskon di <span className="font-semibold">Tabel 2</span> berdasarkan rentang yang sesuai.</li>
          <li>Misalnya, jika jumlah pembelian adalah <span className="font-semibold">450.000</span>, maka kategorinya adalah <span className="font-semibold">Silver</span>, karena 450.000 berada di antara 300.000 dan 500.000, dan <span className="font-semibold">VLOOKUP</span> dengan <span className="font-semibold">TRUE</span> akan memilih rentang terdekat di bawahnya (300.000).</li>
          <li>Polanya adalah mencari rentang terdekat di bawah jumlah pembelian dan mengambil kategori diskon yang sesuai.</li>
          <li><span className="font-semibold">Tabel 2 sudah diurutkan secara ascending</span>, sehingga kita bisa menggunakan pencarian perkiraan dengan parameter <span className="font-semibold">TRUE</span>.</li>
        </ul>
      </div>

      {/* ABSTRAKSI VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Jumlah Pembelian</span> dengan <span className="font-semibold">Kategori Diskon</span>.</li>
          <li>Fokus hanya pada dua kolom penting: <span className="font-semibold">Jumlah Pembelian</span> di <span className="font-semibold">Tabel 1</span> dan <span className="font-semibold">Kategori Diskon</span> di <span className="font-semibold">Tabel 2</span>.</li>
          <li>Gunakan fungsi <span className="font-semibold">VLOOKUP</span> untuk menemukan kategori diskon yang sesuai tanpa harus mencarinya satu per satu.</li>
          <li>Gunakan <span className="font-semibold">absolute reference ($)</span> pada tabel referensi agar referensi tetap saat rumus disalin ke sel lain.</li>
        </ul>
      </div>

      {/* ALGORITMA VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            <span className="font-semibold">Tentukan nilai referensi</span><br />
            Pilih sel <span className="font-semibold">C3</span> (Jumlah Pembelian) di Tabel 1.
          </li>
          <li>
            <span className="font-semibold">Pilih tabel referensi</span><br />
            Gunakan rentang <span className="font-semibold">$F$2:$G$6</span> (Jumlah Pembelian di F2:F6, Kategori Diskon di G2:G5).
          </li>
          <li>
            <span className="font-semibold">Tentukan nomor kolom</span><br />
            Pilih <span className="font-semibold">2</span> (kolom Kategori Diskon).
          </li>
          <li>
            <span className="font-semibold">Pilih metode pencarian</span><br />
            Gunakan <span className="font-semibold">TRUE</span> untuk pencarian perkiraan.
          </li>
          <li>
            <span className="font-semibold">Masukkan rumus VLOOKUP</span><br />
            Klik sel <span className="font-semibold">D3</span>, masukkan:
            <code className="bg-gray-200 px-2 py-1 rounded">=VLOOKUP(C3;$F$2:$G$6;2;TRUE)</code><br />
            Tekan <span className="font-semibold">Enter</span> untuk menampilkan kategori diskon.
          </li>
          <li>
            <span className="font-semibold">Terapkan ke seluruh tabel</span><br />
            Tarik sel <span className="font-semibold">D3</span> ke bawah hingga <span className="font-semibold">D8</span> menggunakan tanda <span className="font-semibold">+</span>.
          </li>
        </ul>

        <div className="flex justify-center">
          <iframe
            width="80%"
            height="400"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/53s0x73b03c7cb4f842728d27be5a618794a1?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* KESIMPULAN DAN ANALISIS VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6">
          Dengan VLOOKUP menggunakan parameter TRUE, Andi dapat menentukan kategori diskon pelanggan secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">Analisis</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa VLOOKUP, penentuan kategori diskon harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Error bisa terjadi jika tabel referensi tidak diurutkan secara ascending, karena parameter TRUE membutuhkan data yang terurut.</li>
          <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
        </ul>
      </div>

      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: HLOOKUP 
      </h2>

      {/* Paragraf Penjelasan HLOOKUP */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Budi adalah siswa SMP yang membantu panitia lomba sekolah untuk mencatat poin siswa berdasarkan hari lomba. Ia memiliki Tabel 3, 
        yang berisi daftar nama siswa dan hari lomba yang mereka ikuti. Selain itu, ia juga memiliki Tabel 4, yang berisi daftar poin 
        berdasarkan hari lomba. Budi ingin mengisi kolom <span className="font-semibold">"Poin"</span> pada Tabel 3 secara otomatis dengan menggunakan fungsi <span className="font-semibold">HLOOKUP</span> agar tidak perlu mencatat poin satu per satu secara manual.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 3. Daftar Peserta Lomba</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Nama</th>
              <th className="border border-green-600 px-4 py-2">Hari Lomba</th>
              <th className="border border-green-600 px-4 py-2">Poin</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Andi", "Senin", ""],
              [2, "Clara", "Selasa", ""],
              [3, "Dina", "Rabu", ""],
              [4, "Eko", "Senin", ""],
              [5, "Fira", "Rabu", ""],
              [6, "Gita", "Selasa", ""],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-gray-600 text-sm text-center mb-2 italic mt-4">Tabel 4. Daftar Poin Lomba</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Hari</th>
              <td className="border border-green-600 px-4 py-2 text-black bg-white">Senin</td>
              <td className="border border-green-600 px-4 py-2 text-black bg-white">Selasa</td>
              <td className="border border-green-600 px-4 py-2 text-black bg-white">Rabu</td>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-green-50">
              <th className="border border-green-600 px-4 py-2 bg-[#255F38] text-white">Poin</th>
              <td className="border border-green-600 px-4 py-2">50</td>
              <td className="border border-green-600 px-4 py-2">30</td>
              <td className="border border-green-600 px-4 py-2">20</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Budi ingin mengisi kolom "Poin" berdasarkan "Hari Lomba" yang diikuti siswa.</li>
          <li>Ada dua tabel: <span className="font-semibold">Tabel 3</span> berisi daftar siswa dan hari lomba mereka, sedangkan <span className="font-semibold">Tabel 4</span> berisi daftar poin berdasarkan hari lomba.</li>
          <li>Kita perlu mencocokkan hari lomba di Tabel 3 dengan daftar di Tabel 4 untuk mendapatkan poin yang benar.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Setiap hari lomba di <span className="font-semibold">Tabel 3</span> bisa dicocokkan dengan poin yang tersedia di <span className="font-semibold">Tabel 4</span>.</li>
          <li>Misalnya, jika hari lomba adalah <span className="font-semibold">Selasa</span>, maka poinnya adalah <span className="font-semibold">30</span>, karena di <span className="font-semibold">Tabel 4</span>, hari <span className="font-semibold">Selasa</span> punya poin <span className="font-semibold">30</span>.</li>
          <li>Polanya adalah mencari hari lomba dalam baris pertama dan mengambil poin yang sesuai di baris berikutnya.</li>
          <li><span className="font-semibold">Tabel 4 tidak diurutkan</span>, sehingga kita harus menggunakan pencarian persis dengan parameter <span className="font-semibold">FALSE</span> untuk memastikan hari lomba cocok.</li>
        </ul>
      </div>

      {/* ABSTRAKSI HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Hari Lomba</span> dengan <span className="font-semibold">Poin</span>.</li>
          <li>Fokus hanya pada dua elemen penting: <span className="font-semibold">Hari Lomba</span> di <span className="font-semibold">Tabel 3</span> dan <span className="font-semibold">Poin</span> di <span className="font-semibold">Tabel 4</span>.</li>
          <li>Gunakan fungsi <span className="font-semibold">HLOOKUP</span> untuk menemukan poin yang sesuai tanpa harus mencarinya satu per satu.</li>
          <li>Gunakan <span className="font-semibold">absolute reference ($)</span> pada tabel referensi agar referensi tetap saat rumus disalin ke sel lain.</li>
        </ul>
      </div>

      {/* ALGORITMA HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>
            <span className="font-semibold">Tentukan nilai referensi</span><br />
            Pilih sel <span className="font-semibold">C3</span> (Hari Lomba) di Tabel 3.
          </li>
          <li>
            <span className="font-semibold">Pilih tabel referensi</span><br />
            Gunakan rentang <span className="font-semibold">$F$1:$I$2</span> (Hari di F1:I2, Poin di F2:I2).
          </li>
          <li>
            <span className="font-semibold">Tentukan nomor baris</span><br />
            Pilih <span className="font-semibold">2</span> (baris Poin).
          </li>
          <li>
            <span className="font-semibold">Pilih metode pencarian</span><br />
            Gunakan <span className="font-semibold">FALSE</span> untuk kecocokan persis.
          </li>
          <li>
            <span className="font-semibold">Masukkan rumus HLOOKUP</span><br />
            Klik sel <span className="font-semibold">D3</span>, masukkan:
            <code className="bg-gray-200 px-2 py-1 rounded">=HLOOKUP(C2;$F$1:$I$2;2;FALSE)</code><br />
            Tekan <span className="font-semibold">Enter</span> untuk menampilkan poin.
          </li>
          <li>
            <span className="font-semibold">Terapkan ke seluruh tabel</span><br />
            Tarik sel <span className="font-semibold">D3</span> ke bawah hingga <span className="font-semibold">D8</span> menggunakan tanda <span className="font-semibold">+</span>.
          </li>
        </ul>

        <div className="flex justify-center">
          <iframe
            width="80%"
            height="400"
            style={{ border: "1px solid #e7e7e7" }}
            frameBorder="0"
            scrolling="no"
            src="https://sheet.zohopublic.com/sheet/published/9f67vf01e540b5d434a64b456d58eede7235b?mode=embed"
          ></iframe>
        </div>
      </div>

      {/* KESIMPULAN DAN ANALISIS HLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6">
          Dengan HLOOKUP, Budi dapat mengisi poin lomba siswa secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">Analisis</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa HLOOKUP, pencocokan poin harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Error bisa terjadi jika hari lomba tidak ada dalam Tabel 4.</li>
          <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <a
          href="/pencarian-lookup"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md"
        >
          ← Sebelumnya
        </a>
        <a
          href="/pencarian-reference"
          className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ContohLookup;