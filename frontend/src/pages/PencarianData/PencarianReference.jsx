import Layout from "../../components/Layout";
import { BookOpen, Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

export default function PencarianLookup() {
  return (
    <Layout>
    
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center">
        A. PENCARIAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>Memahami konsep pencarian data dengan menggunakan fungsi Lookup.</li>
          <li>Menggunakan pendekatan Computational Thinking untuk menyelesaikan permasalahan pencarian data.</li>
          <li>Menerapkan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</li>
        </ol>
      </section>

    {/* Pencarian Reference */}
    <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        2. Pencarian Reference
    </div>
    <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-4">
      Dalam kehidupan sehari-hari, kita sering mencari informasi dengan cara melihat posisi suatu data dalam daftar atau memilih nilai tertentu berdasarkan indeks tertentu. Dalam dunia digital, pencarian ini dapat dilakukan dengan lebih cepat dan efisien menggunakan <strong>Fungsi Reference</strong> dalam aplikasi lembar kerja.
    </p>

    <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
      Fungsi <strong>Reference</strong> digunakan untuk:
    </p>
    <ul className="list-decimal list-inside mt-2 ml-8 text-gray-700 px-4 space-y-2">
      <li>Mengambil data dari tabel berdasarkan posisi baris dan kolom tertentu.</li>
      <li>Mencari posisi suatu nilai dalam daftar tanpa harus mencarinya secara manual.</li>
      <li>Memilih salah satu nilai dari beberapa pilihan yang telah ditentukan.</li>
    </ul>

    <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-4 mt-4">
      Dalam lembar kerja, terdapat tiga fungsi utama dalam kategori <strong>Fungsi Reference</strong>, yaitu:
    </p>
    <ul className="list-decimal list-inside mt-2 ml-8 text-gray-700 px-4 space-y-2">
      <li><strong>INDEX</strong> → Mengambil data dari tabel berdasarkan nomor baris dan kolom tertentu.</li>
      <li><strong>MATCH</strong> → Mencari posisi suatu nilai dalam daftar (baris atau kolom).</li>
      <li><strong>CHOOSE</strong> → Memilih satu nilai dari daftar berdasarkan indeks tertentu.</li>
    </ul>

    {/* DEKOMPOSISI */}
    <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
      </div>
      <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
        Sebelum menggunakan fungsi <strong>reference</strong>, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan memecahnya menjadi <span className="font-semibold">langkah-langkah kecil</span> agar lebih mudah diselesaikan. Pencarian data dengan fungsi reference dapat dilakukan melalui langkah-langkah berikut:
      </p>

      {/* Langkah 1 */}
      <p className="text-gray-700 text-sm md:text-base font-semibold pl-6 mb-1">1. Menentukan tujuan pencarian data</p>
      <p className="text-gray-700 pl-10 mt-0">Apakah ingin mengambil data berdasarkan posisi (<span className="font-bold">INDEX</span>), mencari posisi suatu data (<span className="font-bold">MATCH</span>), atau memilih nilai tertentu dari daftar (<span className="font-bold">CHOOSE</span>)?</p>

      {/* Langkah 2 */}
      <p className="text-gray-700 text-sm md:text-base font-semibold pl-6 mb-1">2. Menyiapkan data dalam tabel referensi</p>
      <p className="text-gray-700 pl-10 mt-0">Pastikan data telah tersusun dalam format yang benar dan sesuai untuk fungsi yang digunakan.</p>

      {/* Langkah 3 */}
      <p className="text-gray-700 text-sm md:text-base font-semibold pl-6 mb-1">3. Menentukan fungsi reference yang tepat</p>

      {/* INDEX */}
      <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
        <h3 className="font-semibold text-[#255F38]">1. INDEX</h3>
        <p>Digunakan untuk mengambil data berdasarkan baris dan kolom.</p>
        <pre className="bg-gray-200 p-2 rounded text-gray-800">
          =INDEX(<span className="italic">array, row_num, column_num</span>)
        </pre>
        <p className="text-gray-700">Keterangan:</p>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          <li><strong>Array:</strong> Tabel yang berisi data yang dicari.</li>
          <li><strong>Row_num:</strong> Nomor baris posisi data yang dicari.</li>
          <li><strong>Column_num:</strong> Nomor kolom posisi data yang dicari.</li>
        </ul>
      </section>

      {/* MATCH */}
      <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
        <h3 className="font-semibold text-[#255F38]">2. MATCH</h3>
        <p>Digunakan untuk mencari posisi suatu nilai dalam daftar.</p>
        <pre className="bg-gray-200 p-2 rounded text-gray-800">
          =MATCH(<span className="italic">lookup_value, lookup_array, match_type</span>)
        </pre>
        <p className="text-gray-700">Keterangan:</p>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          <li><strong>lookup_value:</strong> Nilai yang akan dicari di dalam tabel.</li>
          <li><strong>lookup_array:</strong> Tabel yang berisi data yang dicari.</li>
          <li><strong>match_type:</strong> Menentukan metode pencarian:
            <ul className="list-disc list-inside ml-6">
              <li>1 → mencari nilai yang mendekati lebih besar atau sama</li>
              <li>0 → mencari nilai yang sama persis</li>
              <li>-1 → mencari nilai yang mendekati lebih kecil atau sama</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* CHOOSE */}
      <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
        <h3 className="font-semibold text-[#255F38]">3. CHOOSE</h3>
        <p>Digunakan untuk memilih satu nilai dari beberapa pilihan.</p>
        <pre className="bg-gray-200 p-2 rounded text-gray-800">
          =CHOOSE(<span className="italic">index_num, value1, value2, ...</span>)
        </pre>
        <p className="text-gray-700">Keterangan:</p>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          <li><strong>index_num:</strong> Argumen wajib berupa angka untuk menunjukkan posisi data dalam daftar.</li>
          <li><strong>value1:</strong> Nilai yang dapat berupa angka, teks, rumus, atau referensi sel.</li>
          <li><strong>value2 ...:</strong> Nilai-nilai selanjutnya dengan format sama seperti value1.</li>
        </ul>
      </section>

      {/* Langkah 4 */}
      <p className="text-gray-700 text-sm md:text-base font-semibold pl-6 mb-1">4. Menentukan parameter dalam rumus</p>
      <p className="text-gray-700 pl-10 mt-0">Pastikan posisi data dalam tabel (nomor baris/kolom untuk INDEX, urutan dalam daftar untuk CHOOSE) sudah sesuai.</p>

      {/* Langkah 5 */}
      <p className="text-gray-700 text-sm md:text-base font-semibold pl-6 mb-1">5. Menggunakan fungsi reference dalam rumus lembar kerja</p>
      <p className="text-gray-700 pl-10 mt-0">Gunakan sintaks yang benar untuk memastikan pencarian data berjalan dengan baik.</p>
    </div>


    {/* PENGENALAN POLA */}
    <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
      </div>

      {/* Paragraf pengantar */}
      <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
        Pengenalan pola membantu memahami <span className="font-semibold">kesesuaian data dalam tabel</span> terstruktur sehingga kita bisa memilih <span className="italic">metode</span> pencarian yang tepat.
      </p>

      {/* Pola umum penggunaan fungsi */}
      <p className="text-gray-700 text-sm md:text-base font-semibold">📌 Pola umum dalam penggunaan fungsi <span className="italic">reference</span>:</p>
      <ul className="text-gray-700 list-decimal ml-6 space-y-1 text-sm md:text-base">
        <li><span className="font-semibold">INDEX</span> bekerja berdasarkan koordinat (<span className="italic">baris, kolom</span>) dalam tabel.</li>
        <li><span className="font-semibold">MATCH</span> mencari posisi suatu nilai <span className="italic">dalam satu kolom atau baris</span>.</li>
        <li><span className="font-semibold">CHOOSE</span> memilih nilai berdasarkan <span className="italic">indeks yang diberikan</span>.</li>
      </ul>

      {/* Contoh pola dalam tabel */}
      <p className="text-gray-700 text-sm md:text-base font-semibold">📌 Contoh pola dalam tabel:</p>
      <div className="flex flex-col items-center mt-2">
        <p className="text-gray-600 text-sm italic mb-2">Table 2. Pengenalan Pola Reference</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Kode Barang</th>
              <th className="border border-green-600 px-4 py-2">Nama Barang</th>
              <th className="border border-green-600 px-4 py-2">Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-green-50">
              <td className="border border-green-600 px-4 py-2">P001</td>
              <td className="border border-green-600 px-4 py-2">Laptop</td>
              <td className="border border-green-600 px-4 py-2">8.500.000</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-green-600 px-4 py-2">P002</td>
              <td className="border border-green-600 px-4 py-2">Printer</td>
              <td className="border border-green-600 px-4 py-2">2.000.000</td>
            </tr>
            <tr className="bg-green-50">
              <td className="border border-green-600 px-4 py-2">P003</td>
              <td className="border border-green-600 px-4 py-2">Mouse</td>
              <td className="border border-green-600 px-4 py-2">150.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pola yang ditemukan */}
      <p className="text-gray-700 text-sm md:text-base font-semibold mt-4">📌 Pola yang ditemukan dalam tabel:</p>
      <ul className="text-gray-700 list-decimal ml-6 space-y-1 text-sm md:text-base">
        <li><span className="font-semibold">INDEX</span> dapat mengambil harga Laptop jika kita mengetahui baris dan kolom yang sesuai.</li>
        <li><span className="font-semibold">MATCH</span> dapat mencari posisi kode produk tertentu dalam daftar.</li>
        <li><span className="font-semibold">CHOOSE</span> dapat memilih nama produk dari daftar berdasarkan nomor urut yang diberikan.</li>
      </ul>
    </div>

   {/* ABSTRAKSI */}
    <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
      </div>

      {/* Paragraf pembuka */}
      <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
        Setelah pola ditemukan, kita bisa <span className="font-semibold">mengabaikan informasi yang tidak relevan</span> dan hanya fokus pada <span className="font-semibold">bagian penting</span> yang diperlukan dalam pencarian.
      </p>

      {/* Langkah-langkah menyederhanakan pencarian */}
      <p className="text-gray-700 text-sm md:text-base font-semibold">📌 Langkah-langkah menyederhanakan pencarian:</p>
      <ul className="text-gray-700 list-decimal ml-6 space-y-1 text-sm md:text-base">
        <li><span className="font-semibold">Hilangkan</span> data yang tidak diperlukan untuk pencarian.</li>
        <li><span className="font-semibold">Gunakan</span> hanya data yang relevan.</li>
        <li><span className="font-semibold">Fokus</span> pada hubungan antara <span className="italic">indeks, posisi,</span> dan <span className="italic">nilai dalam tabel</span>.</li>
      </ul>
    </div>

    <div className="bg-white p-5 border-gray-300 space-y-6 mt-10 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <Code className="w-5 h-5 mr-2" /> Algoritma
      </div>

      {/* INDEX */}
      <div>
        <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
          📌 Langkah-langkah penggunaan <strong>INDEX</strong>:
        </p>
        <ul className="list-decimal pl-6 text-gray-700 text-sm md:text-base space-y-1 mt-2">
          <li>Tentukan array data yang akan digunakan.</li>
          <li>Tentukan nomor baris dan kolom dari data yang ingin diambil.</li>
          <li>Gunakan rumus INDEX dalam lembar kerja.</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded mt-4 text-sm md:text-base leading-relaxed">
          =INDEX(A2:C4, 2, 3){"\n"}
          Keterangan: Mengambil harga produk di baris ke-2 dan kolom ke-3 dalam tabel.
        </pre>
      </div>

      {/* MATCH */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          📌 Langkah-langkah penggunaan <strong>MATCH</strong>:
        </p>
        <ul className="list-decimal pl-6 text-gray-700 text-sm md:text-base space-y-1 mt-2">
          <li>Tentukan nilai yang dicari.</li>
          <li>Pilih rentang data tempat pencarian dilakukan.</li>
          <li>Gunakan rumus MATCH dalam lembar kerja.</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded mt-4 text-sm md:text-base leading-relaxed">
          =MATCH("P002", A2:A4, 0){"\n"}
          Keterangan: Menampilkan posisi kode produk "P002" dalam daftar.
        </pre>
      </div>

      {/* CHOOSE */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify">
          📌 Langkah-langkah penggunaan <strong>CHOOSE</strong>:
        </p>
        <ul className="list-decimal pl-6 text-gray-700 text-sm md:text-base space-y-1 mt-2">
          <li>Tentukan nomor indeks yang akan digunakan.</li>
          <li>Masukkan daftar nilai yang tersedia.</li>
          <li>Gunakan rumus CHOOSE dalam lembar kerja.</li>
        </ul>
        <pre className="bg-gray-200 p-4 rounded mt-4 text-sm md:text-base leading-relaxed">
          =CHOOSE(2, "Laptop", "Printer", "Mouse"){"\n"}
          Keterangan: Memilih elemen ke-2 dari daftar, yaitu "Printer".
        </pre>
      </div>
    </div>


      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/penerapan-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/contoh-reference" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya →
        </a>
      </div>
    
    </Layout>
  );
}

