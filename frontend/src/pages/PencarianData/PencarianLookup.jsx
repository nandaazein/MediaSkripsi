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

      {/* Paragraf Penjelasan di Luar Section */}
    <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian, yaitu Lookup dan Reference. Lookup digunakan untuk mencari 
        nilai tertentu dalam suatu tabel atau array dan mengembalikan hasil yang sesuai berdasarkan kunci pencarian. Fungsi ini sering digunakan 
        dalam spreadsheet untuk menemukan data yang terkait dengan suatu nilai tertentu. Sementara itu, Reference digunakan untuk mengambil 
        nilai berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel dalam menyesuaikan pencarian dengan posisi data yang 
        berubah-ubah. Dengan kedua metode ini, pencarian data dapat dilakukan lebih cepat dan akurat dibandingkan dengan pencarian manual.
        Hasil pencarian memiliki dua kemungkinan:
    </p>
    <ol className="list-decimal list-inside mt-2 ml-8 text-gray-700 px-4 space-y-2">
        <li><span className="font-semibold">Data ditemukan</span> → Data yang dicari cocok dengan data dalam tabel.</li>
        <li><span className="font-semibold">Data tidak ditemukan</span> → Data yang dicari tidak ada dalam tabel.</li>
    </ol>

    {/* Pencarian Lookup */}
    <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        1. Pencarian Lookup
    </div>
    <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-4">
        Dalam kehidupan sehari-hari, kita sering melakukan pencarian data, seperti mencari nomor telepon di kontak ponsel atau mencari 
        informasi barang di daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan dengan lebih cepat dan efisien menggunakan 
        fungsi Lookup pada aplikasi lembar kerja.
    </p>
    <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-4">Fungsi Lookup digunakan untuk:</p>
    <ul className="list-decimal list-inside mt-2 ml-8 text-gray-700 px-4 space-y-2">
        <li>Mencari data dalam suatu tabel atau daftar besar.</li>
        <li>Mengambil informasi berdasarkan referensi tertentu.</li>
        <li>Mempermudah pengolahan data yang jumlahnya banyak.</li>
    </ul>

    {/* DEKOMPOSISI */}
    <div className="bg-white p-5  border-gray-300 space-y-4 mt-12 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
      </div>
      <p className="text-gray-700 text-sm md:text-base mt-6 text-justify ">
        Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan memecahnya menjadi <span className="font-semibold">bagian-bagian  kecil</span>. 
        Pencarian data dalam tabel lembar kerja dapat dipecah menjadi beberapa langkah berikut: 
      </p>
      <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1">1.	Identifikasi data yang akan dicari</p>
        <p className=" text-gray-700 pl-10 mt-0">Data yang dicari memiliki nilai unik sebagai referensi pencarian (misalnya, kode barang atau kode siswa).</p>

      <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1">2.	Menentukan tabel referensi tempat pencarian dilakukan</p>
         <p className=" text-gray-700 pl-10 mt-0">Data yang digunakan untuk pencarian harus tersedia dalam tabel dengan format yang benar.</p>

      <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1">3.	Menentukan jenis fungsi lookup yang digunakan</p>

      <div className="">
        <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
          <h3 className="font-semibold text-[#255F38]">1. VLOOKUP</h3>
          <p>Mencari nilai dalam kolom pertama tabel dan mengembalikan nilai dari kolom yang ditentukan.</p>
          <pre className="bg-gray-200 p-2 rounded text-gray-800">
            =VLOOKUP(<span className="italic">lookup_value, table_array, col_index_num, [range_lookup]</span>)
          </pre>
          <p className="text-gray-700">Keterangan:</p>
          <ul className="list-disc list-inside ml-6 text-gray-700">
            <li>
              <strong>lookup_value:</strong> Nilai yang akan dicari dalam kolom pertama tabel.
            </li>
            <li>
              <strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.
            </li>
            <li>
              <strong>col_index_num:</strong> Nomor kolom dari mana nilai yang ingin diambil.
            </li>
            <li>
              <strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
          <h3 className="font-semibold text-[#255F38]">2. HLOOKUP</h3>
          <p>Mencari nilai dalam baris pertama tabel dan mengembalikan nilai dari baris yang ditentukan.</p>
          <pre className="bg-gray-200 p-2 rounded text-gray-800">
            =HLOOKUP(<span className="italic">lookup_value, table_array, row_index_num, [range_lookup]</span>)
          </pre>
          <p className="text-gray-700">Keterangan:</p>
          <ul className="list-disc list-inside ml-6 text-gray-700">
            <li>
              <strong>lookup_value:</strong> Nilai yang akan dicari dalam baris pertama tabel.
            </li>
            <li>
              <strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.
            </li>
            <li>
              <strong>row_index_num:</strong> Nomor baris dari mana nilai yang ingin diambil.
            </li>
            <li>
              <strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.
            </li>
          </ul>
        </section>
      </div>
    </div>

    {/* Pengenalan Pola */}
    <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
      </div>
      <p className="text-gray-700 text-sm md:text-base mt-6 text-justify ">
        Setelah memecah permasalahan, kita perlu mengenali <span className="font-bold">pola yang terdapat dalam data</span> untuk menentukan bagaimana pencarian dilakukan secara efisien.
      </p>
      <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Beberapa pola umum dalam pencarian data dengan Lookup:</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">1.	Setiap nilai referensi bersifat unik dalam tabel referensi.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">2.	Data dalam tabel referensi harus tersusun dengan benar sesuai urutan pencarian.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">3.	Pencarian dilakukan dengan mencocokkan nilai referensi dengan baris atau kolom pertama dalam tabel referensi.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">4.	Jika tabel tidak terurut, maka parameter range_lookup harus bernilai FALSE untuk mencari kecocokan persis.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">5.	Jika tabel terurut, maka range_lookup bisa bernilai TRUE untuk pencarian nilai terdekat.</p>
      
      <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Contoh pola dalam tabel</p>
      <div className="flex flex-col items-center mt-4">
        <p className="text-gray-600 text-sm text-center mb-2 italic">
          Table 1. Pengenalan Pola Lookup
        </p>
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
              <td className="border border-green-600 px-4 py-2">A0001</td>
              <td className="border border-green-600 px-4 py-2">Laptop</td>
              <td className="border border-green-600 px-4 py-2">8.500.000</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-green-600 px-4 py-2">A0002</td>
              <td className="border border-green-600 px-4 py-2">Printer</td>
              <td className="border border-green-600 px-4 py-2">2.000.000</td>
            </tr>
            <tr className="bg-green-50">
              <td className="border border-green-600 px-4 py-2">A0003</td>
              <td className="border border-green-600 px-4 py-2">Mouse</td>
              <td className="border border-green-600 px-4 py-2">150.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Pola yang dapat dikenali dalam tabel</p>
      <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1">
        <li><span className="font-semibold">Kode Barang</span> selalu unik.</li>
        <li><span className="font-semibold">Nama Barang dan Harga</span>selalu berada dalam kolom tetap (misalnya, kolom ke-2 dan ke-3).</li>
        <li>Kita dapat menggunakan <span className="font-semibold">VLOOKUP</span> untuk mengambil informasi berdasarkan Kode Barang.</li>
      </ul>
    </div>

    {/* Abstraksi */}
    <div className="bg-white p-5  border-gray-300 space-y-4 mt-10 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
      </div>
      <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">Setelah mengenali pola, kita dapat <span className="font-semibold">menyederhanakan permasalahan</span> dengan <span className="font-semibold">mengabaikan</span> informasi yang tidak relevan dan hanya fokus pada bagian penting untuk pencarian.</p>
      <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Bagian yang harus diperhatikan:</p>
      <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1">
        <li>Kolom/baris pertama dalam tabel referensi harus berisi nilai referensi (lookup_value).</li>
        <li>Posisi kolom/baris tempat data yang akan diambil harus diketahui.</li>
        <li>Gunakan tanda dolar atau absolute reference ($) untuk membuat referensi tabel tetap saat menyalin rumus.</li>
      </ul>
    </div>


    {/* Algoritma */}
    <div className="bg-white p-5  border-gray-300  space-y-4 mt-10 relative">
      <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
        <Code className="w-5 h-5 mr-2" /> ALGORITMA
      </div>
      <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">Setelah masalah dipahami dan disederhanakan, kita dapat menyusun langkah-langkah sistematis untuk pencarian menggunakan VLOOKUP atau HLOOKUP.</p>
      <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Langkah-langkah penggunaan fungsi Lookup:</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">1.	Tentukan nilai referensi (lookup_value) yang akan dicari.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">2.	Pilih tabel referensi (table_array) yang berisi data pencarian.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">3.	Tentukan nomor baris/kolom yang berisi data yang ingin diambil.</p>
      <p className="text-gray-700 text-sm md:text-base pl-6 ">4.	Pilih metode pencarian:</p>
      <div className="text-gray-700 pl-10">
        <ul className="list-disc pl-6 space-y-1">
          <li>Jika tabel tidak terurut, kita harus menggunakan <span className="font-semibold">FALSE</span> agar VLOOKUP mencari kecocokan yang persis.</li>
          <li>Jika tabel terurut, kita bisa menggunakan <span className="font-semibold">TRUE</span> untuk mencari nilai terdekat atau mendekati.</li>
        </ul>
      </div>


      <p className="text-gray-700 text-sm md:text-base pl-6 ">5.	Gunakan rumus VLOOKUP atau HLOOKUP dengan format yang benar.</p>

    </div>


      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/penerapan-ct" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/contoh-lookup" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya →
        </a>
      </div>
    
    </Layout>
  );
}
