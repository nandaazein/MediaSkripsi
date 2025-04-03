import Layout from "../../components/Layout";
import {
  BookOpen,
  Lightbulb,
  BarChart,
  Filter,
  Code,
  CheckCircle,
} from "lucide-react";

export default function PeringkasanData() {
  return (
    <Layout>
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center">
        C. PERINGKASAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>
            Memahami konsep peringkasan data dan penggunaan fungsi dalam
            spreadsheet untuk menyajikan informasi secara singkat dan akurat
          </li>
          <li>
            Menggunakan pendekatan Computational Thinking (CT) untuk meringkas
            data dengan fungsi perhitungan otomatis.
          </li>
          <li>
            Menerapkan fungsi SUMIF, COUNTIF, SUMIFS, dan COUNTIFS dalam studi
            kasus peringkasan data di lembar kerja.
          </li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Dalam kehidupan sehari-hari, kita sering berhadapan dengan banyak data
        yang perlu dianalisis dan diringkas agar lebih mudah dipahami.
        Peringkasan data adalah proses mengolah data yang besar dan kompleks
        menjadi lebih sederhana tanpa menghilangkan informasi penting.
      </p>

      {/* Pentingnya Peringkasan Data */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        Mengapa Peringkasan Data Penting?
      </div>
      <ul className="list-disc list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li>
          Menghemat waktu dan tenaga → Dengan fungsi otomatis, kita tidak perlu
          menghitung satu per satu.
        </li>
        <li>
          Membantu dalam pengambilan keputusan → Data yang telah diringkas lebih
          mudah dianalisis.
        </li>
        <li>
          Menampilkan informasi lebih jelas → Menghindari tumpukan angka yang
          sulit dipahami.
        </li>
      </ul>

      {/* Contoh Peringkasan Data */}
      <h2 className="font-bold text-[#255F38] mt-6">
        Contoh Peringkasan Data dalam Kehidupan Sehari-hari
      </h2>
      <ul className="list-decimal list-inside mt-4 ml-6 text-gray-700 px-4 space-y-2">
        <li
          className="text-justify"
          style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
        >
          Seorang siswa ingin tahu berapa kali ia membeli makanan favorit di
          kantin dalam satu minggu. Dengan COUNTIF, ia bisa langsung mendapatkan
          jumlahnya.
        </li>
        <li
          className="text-justify"
          style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
        >
          Seseorang mencatat pengeluarannya setiap bulan dan ingin tahu total
          pengeluaran untuk transportasi. Dengan SUMIF, ia bisa menjumlahkan
          hanya untuk kategori transportasi.
        </li>
        <li
          className="text-justify"
          style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
        >
          Seorang guru ingin tahu berapa siswa yang mendapat nilai di atas 75.
          Dengan COUNTIF, ia bisa langsung mengetahui jumlah siswa yang lulus.
        </li>
      </ul>

      {/* Dekomposisi */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum meringkas data, kita harus memahami apa yang perlu dihitung
          dan bagaimana cara menghitungnya.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1 -ml-5">
          1. Tentukan apa yang ingin diringkas
        </p>
        <p className="text-gray-700 pl-10 mt-0 -ml-3">
          Apakah ingin menjumlahkan angka (penjualan, nilai, dll.) atau
          menghitung jumlah data (jumlah siswa, jumlah transaksi, dll.)?
        </p>

        <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1 -ml-5">
          2. Tentukan kriteria peringkasan
        </p>
        <p className="text-gray-700 pl-10 mt-0 -ml-3">
          Misalnya, hanya menjumlahkan nilai siswa yang lebih dari 75 atau hanya
          menghitung transaksi di bulan tertentu.
        </p>

        <p className="text-gray-700 text-sm md:text-base pl-6 font-semibold mb-1 -ml-5">
          3. Pilih fungsi yang sesuai
        </p>

        {/* Materi Fungsi Peringkasan Data */}
        <div className="">
          <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
            <h3 className="font-semibold text-[#255F38]">1. SUMIF</h3>
            <p>Menjumlahkan data dengan satu syarat.</p>
            <pre className="bg-gray-200 p-2 rounded">
              =SUMIF(range, criteria, sum_range)
            </pre>
            <p>
              <strong>Keterangan:</strong>
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-700">
              <li>
                <strong>range:</strong> Rentang data yang akan diperiksa
                kriterianya.
              </li>
              <li>
                <strong>criteria:</strong> Syarat yang harus dipenuhi agar
                nilainya dijumlahkan.
              </li>
              <li>
                <strong>sum_range:</strong> Rentang angka yang akan dijumlahkan
                jika kriterianya terpenuhi.
              </li>
            </ul>
          </section>

          <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
            <h3 className="font-semibold text-[#255F38]">2. SUMIFS</h3>
            <p>Menjumlahkan data dengan lebih dari satu syarat.</p>
            <pre className="bg-gray-200 p-2 rounded">
              =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2,
              criteria2)
            </pre>
            <p>
              <strong>Keterangan:</strong>
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-700">
              <li>
                <strong>sum_range:</strong> Rentang data yang akan dijumlahkan.
              </li>
              <li>
                <strong>criteria_range1:</strong> Rentang pertama yang akan
                diperiksa.
              </li>
              <li>
                <strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.
              </li>
              <li>
                <strong>criteria_range2:</strong> Rentang kedua yang akan
                diperiksa.
              </li>
              <li>
                <strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.
              </li>
            </ul>
          </section>

          <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
            <h3 className="font-semibold text-[#255F38]">3. COUNTIF</h3>
            <p>Menghitung jumlah data dengan satu syarat.</p>
            <pre className="bg-gray-200 p-2 rounded">
              =COUNTIF(range, criteria)
            </pre>
            <p>
              <strong>Keterangan:</strong>
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-700">
              <li>
                <strong>range:</strong> Rentang data yang akan diperiksa.
              </li>
              <li>
                <strong>criteria:</strong> Kriteria yang harus dipenuhi agar
                data dihitung.
              </li>
            </ul>
          </section>

          <section className="bg-gray-100 rounded p-4 mt-4 shadow-lg">
            <h3 className="font-semibold text-[#255F38]">4. COUNTIFS</h3>
            <p>Menghitung jumlah data dengan lebih dari satu syarat.</p>
            <pre className="bg-gray-200 p-2 rounded">
              =COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)
            </pre>
            <p>
              <strong>Keterangan:</strong>
            </p>
            <ul className="list-disc list-inside ml-6 text-gray-700">
              <li>
                <strong>criteria_range1:</strong> Rentang pertama yang akan
                diperiksa.
              </li>
              <li>
                <strong>criteria1:</strong> Syarat pertama yang harus dipenuhi.
              </li>
              <li>
                <strong>criteria_range2:</strong> Rentang kedua yang akan
                diperiksa.
              </li>
              <li>
                <strong>criteria2:</strong> Syarat kedua yang harus dipenuhi.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah memahami langkah-langkah kecilnya, kita harus mengenali pola
          dalam data agar tahu cara terbaik untuk meringkasnya.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
          📌 Beberapa pola umum dalam peringkasan data:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Menjumlahkan total penjualan berdasarkan kategori produk → Dengan
            SUMIF, kita bisa menjumlahkan total penjualan hanya untuk kategori
            tertentu.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Menghitung jumlah siswa yang mendapat nilai di atas batas tertentu →
            Dengan COUNTIF, kita bisa menghitung berapa banyak siswa yang
            mendapat nilai lebih dari 75.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Menjumlahkan total penjualan dengan beberapa syarat → Dengan SUMIFS,
            kita bisa menjumlahkan hanya transaksi yang memenuhi lebih dari satu
            kriteria, misalnya kategori produk tertentu dan periode tertentu.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Menghitung jumlah data berdasarkan lebih dari satu kriteria → Dengan
            COUNTIFS, kita bisa menghitung berapa transaksi yang terjadi di
            bulan tertentu untuk produk tertentu.
          </li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-2 w-5 h-5" /> Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
          Agar lebih mudah dipahami, kita hanya fokus pada bagian penting dalam
          data dan mengabaikan informasi yang tidak diperlukan.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 mt-2">
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Hanya pilih data yang benar-benar diperlukan → Jika ingin menghitung
            jumlah siswa yang lulus, kita hanya perlu kolom "Nilai Ujian", tidak
            perlu melihat nama siswa.
          </li>
          <li
            className="text-justify"
            style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
          >
            Gunakan rumus yang tepat → Jika hanya butuh jumlah siswa yang lulus,
            cukup gunakan COUNTIF tanpa perlu SUMIF.
          </li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Setelah kita memahami data dan menyederhanakannya, kita bisa membuat
          langkah-langkah sistematis untuk menerapkan peringkasan data dalam
          spreadsheet.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
          📌 SUMIF untuk Menjumlahkan Data dengan Satu Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Table 7. Contoh Data SUMIF
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">
                  Nama Siswa
                </th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">
                  Nilai Ujian
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          1. Pilih range data yang akan diperiksa kriterianya (misalnya, kolom
          "Kelas" untuk mencari siswa kelas 8A).
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          2. Tentukan kriteria (misalnya, hanya siswa dari kelas 8A).
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          3. Pilih sum_range, yaitu data yang akan dijumlahkan (kolom "Nilai
          Ujian").
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          4. Gunakan rumus SUMIF untuk menjumlahkan nilai siswa dari kelas 8A.
        </p>
        <pre className="bg-gray-200 p-6 rounded ml-12">
          =SUMIF(B2:B6;"8A"; C2:C6)
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 COUNTIF untuk Menghitung Data dengan Satu Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Table 8. Contoh Data COUNTIF
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">
                  Nama Siswa
                </th>
                <th className="border border-green-600 px-4 py-2">
                  Nilai Ujian
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-sm md:text-base pl-6">
          1. Pilih range data yang akan diperiksa kriterianya (misalnya, kolom
          "Nilai Ujian").
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          2. Tentukan kriteria (misalnya, nilai lebih dari 75).
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          3. Gunakan rumus COUNTIF untuk menghitung jumlah siswa yang memiliki
          nilai lebih dari 75.
        </p>
        <pre className="bg-gray-200 p-6 rounded ml-12">
          =COUNTIF(B2:B6, ">75")
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 SUMIFS untuk Menjumlahkan Data dengan Banyak Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Table 9. Contoh Data SUMIFS
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">
                  Nama Produk
                </th>
                <th className="border border-green-600 px-4 py-2">Kategori</th>
                <th className="border border-green-600 px-4 py-2">
                  Pendapatan (Rp)
                </th>
                <th className="border border-green-600 px-4 py-2">Bulan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Laptop</td>
                <td className="border border-green-600 px-4 py-2">
                  Elektronik
                </td>
                <td className="border border-green-600 px-4 py-2">8.500.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Printer</td>
                <td className="border border-green-600 px-4 py-2">
                  Elektronik
                </td>
                <td className="border border-green-600 px-4 py-2">2.000.000</td>
                <td className="border border-green-600 px-4 py-2">Februari</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Roti</td>
                <td className="border border-green-600 px-4 py-2">Makanan</td>
                <td className="border border-green-600 px-4 py-2">500.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Mouse</td>
                <td className="border border-green-600 px-4 py-2">
                  Elektronik
                </td>
                <td className="border border-green-600 px-4 py-2">150.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Susu</td>
                <td className="border border-green-600 px-4 py-2">Makanan</td>
                <td className="border border-green-600 px-4 py-2">800.000</td>
                <td className="border border-green-600 px-4 py-2">Januari</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 text-sm md:text-base pl-6">
          1. Pilih sum_range, yaitu data yang akan dijumlahkan (kolom
          "Pendapatan (Rp)").
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          2. Pilih criteria_range1, yaitu kolom "Kategori".
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          3. Tentukan criteria1, yaitu hanya menjumlahkan kategori Elektronik.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          4. Pilih criteria_range2, yaitu kolom "Bulan".
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          5. Tentukan criteria2, yaitu hanya menjumlahkan transaksi di Januari.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          6. Gunakan rumus SUMIFS untuk menjumlahkan pendapatan yang memenuhi
          kedua kriteria.
        </p>
        <pre className="bg-gray-200 p-6 rounded ml-12">
          =SUMIFS(C2:C6, B2:B6, "Elektronik", D2:D6, "Januari")
        </pre>

        <p className="text-gray-700 text-sm md:text-base mt-4">
          📌 COUNTIFS untuk Menghitung Data dengan Banyak Kriteria:
        </p>
        <div className="flex flex-col items-center mt-4">
          <p className="text-gray-600 text-sm text-center mb-2 italic">
            Table 10. Contoh Data COUNTIFS
          </p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">
                  Nama Siswa
                </th>
                <th className="border border-green-600 px-4 py-2">Kelas</th>
                <th className="border border-green-600 px-4 py-2">
                  Nilai Ujian
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Aisyah</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">80</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Budi</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">65</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Citra</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">90</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">Dani</td>
                <td className="border border-green-600 px-4 py-2">8A</td>
                <td className="border border-green-600 px-4 py-2">70</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">Eko</td>
                <td className="border border-green-600 px-4 py-2">8B</td>
                <td className="border border-green-600 px-4 py-2">85</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          1. Pilih criteria_range1, yaitu kolom "Kelas".
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          2. Tentukan criteria1, yaitu hanya menghitung siswa dari kelas 8A.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          3. Pilih criteria_range2, yaitu kolom "Nilai Ujian".
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          4. Tentukan criteria2, yaitu hanya menghitung siswa yang nilainya
          lebih dari 75.
        </p>
        <p className="text-gray-700 text-sm md:text-base pl-6">
          5. Gunakan rumus COUNTIFS untuk menghitung jumlah siswa yang memenuhi
          kedua kriteria.
        </p>
        <pre className="bg-gray-200 p-6 rounded ml-12">
          =COUNTIFS(B2:B6, "8A", C2:C6, ">75")
        </pre>
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
