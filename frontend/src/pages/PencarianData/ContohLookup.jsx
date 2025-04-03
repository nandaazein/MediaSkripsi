import Layout from "../../components/Layout";
import { BookOpen, Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohLookup = () => {
  return (
    <Layout>

      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-12  p-4 bg-[#255F38] text-white ">
        Contoh Penerapan Fungsi Lookup
      </h1>

      {/* Paragraf Penjelasan di Luar Section */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Bu Rina adalah seorang guru yang ingin mengisi skor ujian siswanya berdasarkan nilai yang mereka peroleh. Ia memiliki Tabel 1, 
        yang berisi daftar nama siswa beserta nilai ujian mereka. Selain itu, ia juga memiliki Tabel 2, yang berisi kategori skor berdasarkan 
        rentang nilai. Bu Rina ingin mengisi kolom <span className="font-semibold">"Skor"</span> pada Tabel 1 secara otomatis dengan menggunakan fungsi <span className="font-semibold">VLOOKUP</span> agar tidak perlu
         mengisi skor satu per satu secara manual.
      </p>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 1. Daftar Nama Siswa</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Nama</th>
              <th className="border border-green-600 px-4 py-2">Nilai</th>
              <th className="border border-green-600 px-4 py-2">Skor</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Andi", 80, ""],
              [2, "Budi", 70, ""],
              [3, "Citra", 90, ""],
              [4, "Dina", 60, ""],
              [5, "Eko", 100, ""],
              [6, "Fira", 70, ""],
              [7, "Gita", 80, ""],
              [8, "Hendra", 90, ""],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-gray-600 text-sm text-center mb-2 italic mt-4">Tabel 2. Kategori Skor</p>
        <table className="border-collapse border border-green-800 w-full md:w-1/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Nilai</th>
              <th className="border border-green-600 px-4 py-2">Skor</th>
            </tr>
          </thead>
          <tbody>
            {[
              [60, "E"],
              [70, "D"],
              [80, "C"],
              [90, "B"],
              [100, "A"],
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

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span></p>


      {/* DEKOMPOSISI */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Bu Rina ingin mengisi kolom "Skor" berdasarkan "Nilai" siswa.</li>
          <li>Ada dua tabel: <span className="font-semibold">Tabel 1</span> berisi daftar siswa dan nilainya, sedangkan <span className="font-semibold">Tabel 2</span> berisi aturan untuk menentukan skor.</li>
          <li>Kita perlu mencocokkan nilai di Tabel 1 dengan daftar di Tabel 2 untuk mendapatkan skor yang benar.</li>
        </ul>
      </div>


      {/* Pengenalan Pola */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Setiap nilai di <span className="font-semibold">Tabel 1</span> bisa dicocokkan dengan skor yang tersedia di <span className="font-semibold">Tabel 2</span>.</li>
          <li>Misalnya, jika nilai siswa adalah <span className="font-semibold">80</span>, maka skornya adalah <span className="font-semibold">C</span>, karena di <span className="font-semibold">Tabel 2</span>, nilai <span className="font-semibold">80</span> punya skor <span className="font-semibold">C</span>.</li>
          <li>Polanya adalah mencari nilai dalam daftar dan mengambil skor yang sesuai.</li>
        </ul>   
      </div>


      {/* Abstraksi */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tidak perlu memperhatikan kolom <span className="font-semibold">Nama</span>, karena yang penting adalah mencocokkan <span className="font-semibold">Nilai</span> dengan <span className="font-semibold">Skor</span>.</li>
          <li>Fokus hanya pada dua kolom penting: <span className="font-semibold">Nilai</span> di <span className="font-semibold">Tabel 1</span> dan <span className="font-semibold">Skor</span> di <span className="font-semibold">Tabel 2</span>.</li>
          <li>Gunakan fungsi <span className="font-semibold">VLOOKUP</span> untuk menemukan skor yang sesuai tanpa harus mencarinya satu per satu.</li>
        </ul>
      </div>


      {/* Algoritma */}
      <div className="bg-white p-5  border-gray-300  space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> ALGORITMA
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li><span className="font-semibold">Pilih sel tempat memasukkan rumus</span><br />Klik sel <span className="font-semibold">D3</span> di kolom <span className="font-semibold">Skor</span> pada <span className="font-semibold">Tabel 1</span>.</li>
          
          <li><span className="font-semibold">Masukkan rumus VLOOKUP</span><br />
            <code className="bg-gray-200 px-2 py-1 rounded">=VLOOKUP(C3;$F$3:$G$7;<span className="font-semibold">2</span>;FALSE)</code>
            <ul className="list-disc pl-6 ml-6 space-y-1 mt-2">
              <li><span className="font-semibold">C3</span> → Nilai yang akan dicari.</li>
              <li><span className="font-semibold">$F$3:$G$7</span> → Tabel referensi yang berisi daftar nilai dan skor.</li>
              <li><span className="font-semibold">2</span> → Mengambil data dari kolom ke-<span className="font-semibold">2</span> dalam tabel referensi (kolom <span className="font-semibold">Skor</span>).</li>
              <li><span className="font-semibold">FALSE</span> → Hanya mencari nilai yang cocok persis.</li>
            </ul>
          </li>

          <li><span className="font-semibold">Tekan Enter</span><br />Skor untuk nilai pada <span className="font-semibold">C3</span> akan muncul di <span className="font-semibold">D3</span>.</li>

          <li><span className="font-semibold">Terapkan rumus ke seluruh tabel</span>
            <ul className="list-disc pl-6 ml-6 space-y-1 mt-2">
              <li>Klik sel <span className="font-semibold">D3</span>, arahkan kursor ke pojok kanan bawah hingga muncul tanda <span className="font-semibold">+</span>, lalu tarik ke bawah hingga <span className="font-semibold">D10</span>.</li>
              <li>Semua skor akan otomatis terisi sesuai dengan nilai masing-masing siswa.</li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center">
            <iframe 
              width="80%" 
              height="400" 
              style={{ border: '1px solid #e7e7e7' }} 
              frameBorder="0" 
              scrolling="no" 
              src="https://sheet.zohopublic.com/sheet/published/53s0x73b03c7cb4f842728d27be5a618794a1?mode=embed">
            </iframe>
        </div>       
      </div>

      {/* Kesimpulan dan Analisis */}
      <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> KESIMPULAN & ANALISIS
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-6">
          Dengan VLOOKUP, Bu Rina dapat mengisi skor siswa secara otomatis, lebih cepat, dan mengurangi kesalahan pencocokan data.
        </p>
        <p className="text-gray-600 text-sm font-semibold md:text-base">Analisis</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa VLOOKUP, pencocokan skor harus dilakukan manual, lebih lama, dan berisiko salah.</li>
          <li>Error bisa terjadi jika nilai tidak ada dalam tabel referensi.</li>
          <li>Gunakan absolute reference ($) agar rumus tetap bekerja saat disalin ke sel lain.</li>
        </ul>
      </div>


   

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <a href="/pencarian-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md">
          ← Sebelumnya
        </a>
        <a href="/aktivitas-lookup" className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default ContohLookup;
