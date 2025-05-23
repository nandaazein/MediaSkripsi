import Layout from "../../components/Layout";
import { BookOpen, Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

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
        Rina adalah seorang guru di SMP yang ingin membuat laporan nilai ujian siswa menggunakan spreadsheet. Ia memiliki Tabel 1, 
        yang berisi daftar nama siswa dan nomor induk siswa (NIS). Selain itu, ia juga memiliki Tabel 2, yang berisi daftar NIS 
        beserta nilai ujian siswa. Rina ingin mengisi kolom <span className="font-semibold">"Nilai Ujian"</span> pada Tabel 1 secara otomatis dengan menggunakan fungsi <span className="font-semibold">VLOOKUP</span> agar tidak perlu mencocokkan nilai satu per satu secara manual.
      </p>
      <div className="flex flex-col items-center mt-2">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 4. Daftar Siswa VLOOKUP</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Nama</th>
              <th className="border border-green-600 px-4 py-2">NIS</th>
              <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Budi", "1001", ""],
              [2, "Clara", "1002", ""],
              [3, "Dani", "1003", ""],
              [4, "Eka", "1004", ""],
              [5, "Fira", "1005", ""],
              [6, "Gita", "1006", ""],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-gray-600 text-sm text-center mb-2 italic mt-4">Tabel 5. Daftar Nilai Ujian VLOOKUP</p>
        <table className="border-collapse border border-green-800 w-full md:w-1/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">NIS</th>
              <th className="border border-green-600 px-4 py-2">Nilai Ujian</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1001", "85"],
              ["1002", "78"],
              ["1003", "92"],
              ["1004", "88"],
              ["1005", "76"],
              ["1006", "90"],
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
          <li>Rina ingin mengisi kolom "Nilai Ujian" berdasarkan "NIS" siswa.</li>
          <li>Ada dua tabel: <span className="font-semibold">Tabel 4</span> berisi daftar siswa dan NIS mereka, sedangkan <span className="font-semibold">Tabel 5</span> berisi daftar NIS dan nilai ujian.</li>
          <li>Kita perlu mencocokkan NIS di Tabel 4 dengan daftar di Tabel 5 untuk mendapatkan nilai ujian yang benar.</li>
        </ul>
      </div>

      {/* PENGENALAN POLA VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Setiap NIS di <span className="font-semibold">Tabel 4</span> bisa dicocokkan dengan nilai ujian yang tersedia di <span className="font-semibold">Tabel 5</span>.</li>
          <li>Misalnya, jika NIS adalah <span className="font-semibold">1002</span>, maka nilai ujiannya adalah <span className="font-semibold">78</span>, karena di <span className="font-semibold">Tabel 5</span>, NIS <span className="font-semibold">1002</span> punya nilai <span className="font-semibold">78</span>.</li>
          <li>Polanya adalah mencari NIS dalam daftar dan mengambil nilai ujian yang sesuai.</li>
          <li><span className="font-semibold">Tabel 5 tidak diurutkan</span>, sehingga kita harus menggunakan pencarian persis dengan parameter <span className="font-semibold">FALSE</span> untuk memastikan NIS cocok.</li>
        </ul>
      </div>

      {/* ABSTRAKSI VLOOKUP */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">NIS</span> dengan <span className="font-semibold">Nilai Ujian</span>.</li>
          <li>Fokus hanya pada dua kolom penting: <span className="font-semibold">NIS</span> di <span className="font-semibold">Tabel 4</span> dan <span className="font-semibold">Nilai Ujian</span> di <span className="font-semibold">Tabel 5</span>.</li>
          <li>Gunakan fungsi <span className="font-semibold">VLOOKUP</span> untuk menemukan nilai ujian yang sesuai tanpa harus mencarinya satu per satu.</li>
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
            Pilih sel <span className="font-semibold">C3</span> (NIS) di Tabel 4.
          </li>
          <li>
            <span className="font-semibold">Pilih tabel referensi</span><br />
            Gunakan rentang <span className="font-semibold">$F$2:$G$8</span> (NIS di F2:F8, Nilai Ujian di G2:G8).
          </li>
          <li>
            <span className="font-semibold">Tentukan nomor kolom</span><br />
            Pilih <span className="font-semibold">2</span> (kolom Nilai Ujian).
          </li>
          <li>
            <span className="font-semibold">Pilih metode pencarian</span><br />
            Gunakan <span className="font-semibold">FALSE</span> untuk kecocokan persis.
          </li>
          <li>
            <span className="font-semibold">Masukkan rumus VLOOKUP</span><br />
            Klik sel <span className="font-semibold">D3</span>, masukkan:
            <code className="bg-gray-200 px-2 py-1 rounded">=VLOOKUP(C3;$F$2:$G$8;2;FALSE)</code><br />
            Tekan <span className="font-semibold">Enter</span> untuk menampilkan nilai ujian.
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
          Dengan VLOOKUP, Rina dapat mengisi nilai ujian siswa secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">Analisis</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa VLOOKUP, pencocokan nilai ujian harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Error bisa terjadi jika NIS tidak ada dalam tabel referensi.</li>
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
            <span className="font-semibold">Pilih sel tempat memasukkan rumus</span>
            <br />
            Klik sel <span className="font-semibold">D3</span> di kolom <span className="font-semibold">Poin</span> pada <span className="font-semibold">Tabel 3</span>.
          </li>
          <li>
            <span className="font-semibold">Masukkan rumus HLOOKUP</span>
            <br />
            <code className="bg-gray-200 px-2 py-1 rounded">
              =HLOOKUP(C2;$F$1:$I$2;<span className="font-semibold">2</span>;FALSE)
            </code>
            <ul className="list-disc pl-6 ml-6 space-y-1 mt-2">
              <li>
                <span className="font-semibold">C2</span> → Hari lomba yang akan dicari.
              </li>
              <li>
                <span className="font-semibold">$F$1:$I$2</span> → Tabel referensi yang berisi daftar hari lomba dan poin.
              </li>
              <li>
                <span className="font-semibold">2</span> → Mengambil data dari baris ke-<span className="font-semibold">2</span> dalam tabel referensi (baris <span className="font-semibold">Poin</span>).
              </li>
              <li>
                <span className="font-semibold">FALSE</span> → Hanya mencari hari yang cocok persis.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Tekan Enter</span>
            <br />
            Poin untuk hari lomba pada <span className="font-semibold">C2</span> akan muncul di <span className="font-semibold">D2</span>.
          </li>
          <li>
            <span className="font-semibold">Terapkan rumus ke seluruh tabel</span>
            <ul className="list-disc pl-6 ml-6 space-y-1 mt-2">
              <li>
                Klik sel <span className="font-semibold">D3</span>, arahkan kursor ke pojok kanan bawah hingga muncul tanda <span className="font-semibold">+</span>, lalu tarik ke bawah hingga <span className="font-semibold">D8</span>.
              </li>
              <li>
                Semua poin akan otomatis terisi sesuai dengan hari lomba masing-masing siswa.
              </li>
            </ul>
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
          <li>Error bisa terjadi jika hari lomba tidak ada dalam tabel referensi.</li>
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