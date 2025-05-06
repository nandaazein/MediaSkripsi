import Layout from "../../components/Layout";
import { useState } from "react";
import {
  BookOpen,
  Lightbulb,
  BarChart,
  Filter,
  Code,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import pustakawan from "../../assets/Pendahuluan/pustakawan.jpg";

export default function VisualisasiData() {
  // State for Dekomposisi steps
  const [dekomposisiSteps, setDekomposisiSteps] = useState([false, false, false, false]);

  // State for Pengenalan Pola steps
  const [polaSteps, setPolaSteps] = useState([false, false, false]);

  // State for Abstraksi steps
  const [abstraksiSteps, setAbstraksiSteps] = useState([false, false]);

  // State for Algoritma steps
  const [algoritmaSteps, setAlgoritmaSteps] = useState([false, false, false, false]);

  // Toggle Dekomposisi steps
  const toggleDekomposisiStep = (index) => {
    const newSteps = [...dekomposisiSteps];
    newSteps[index] = !newSteps[index];
    setDekomposisiSteps(newSteps);
  };

  // Toggle Pengenalan Pola steps
  const togglePolaStep = (index) => {
    const newSteps = [...polaSteps];
    newSteps[index] = !newSteps[index];
    setPolaSteps(newSteps);
  };

  // Toggle Abstraksi steps
  const toggleAbstraksiStep = (index) => {
    const newSteps = [...abstraksiSteps];
    newSteps[index] = !newSteps[index];
    setAbstraksiSteps(newSteps);
  };

  // Toggle Algoritma steps
  const toggleAlgoritmaStep = (index) => {
    const newSteps = [...algoritmaSteps];
    newSteps[index] = !newSteps[index];
    setAlgoritmaSteps(newSteps);
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center">
        B. VISUALISASI DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside space-y-2 mt-4 text-gray-700">
          <li>
            Memahami konsep visualisasi data dan bagaimana cara menyajikan
            informasi dalam bentuk grafik, tabel, atau diagram.
          </li>
          <li>
            Menggunakan pendekatan Computational Thinking untuk
            memvisualisasikan data secara efektif.
          </li>
          <li>
            Menerapkan berbagai jenis visualisasi dalam studi kasus visualisasi
            data di lembar kerja.
          </li>
        </ol>
      </section>

      {/* Paragraf Penjelasan */}
      <p className="text-gray-700 text-base text-justify leading-relaxed px-4">
        <strong>Visualisasi data</strong> adalah teknik menyajikan informasi
        dalam bentuk <strong>grafik, tabel, atau diagram</strong> agar lebih
        mudah dipahami. Dibandingkan dengan membaca angka atau teks panjang,
        visualisasi data memungkinkan kita melihat <strong>pola</strong> dan{" "}
        <strong>tren</strong> dengan lebih cepat. Dalam era digital saat ini,
        kita sering menggunakan <strong>spreadsheet</strong> untuk membuat
        grafik yang membantu dalam pengambilan keputusan. Untuk membuat
        visualisasi data yang efektif, kita bisa menerapkan{" "}
        <strong>pendekatan Computational Thinking (CT)</strong> agar prosesnya
        lebih sistematis dan efisien.
      </p>

      {/* Peran Visualisasi Data */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          Peran Visualisasi Data
        </div>
        <p className="text-gray-700 text-base text-justify leading-relaxed mt-6">
          Visualisasi data memiliki banyak manfaat yang membantu kita dalam
          memahami informasi dengan lebih mudah. Dengan menyajikan data dalam
          bentuk grafik, tabel, atau diagram, kita bisa melihat pola dan tren
          yang mungkin sulit ditemukan jika hanya melihat angka atau teks biasa.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Mengidentifikasi pola dan tren</strong> → Dengan melihat grafik, kita bisa lebih mudah memahami bagaimana suatu data berubah dari waktu ke waktu, seperti tren nilai ujian siswa selama satu semester.
          </li>
          <li className="text-justify">
            <strong>Membantu membuat keputusan</strong> → Data dalam bentuk grafik atau diagram lebih mudah dipahami, sehingga kita bisa mengambil keputusan lebih cepat, misalnya menentukan strategi belajar.
          </li>
          <li className="text-justify">
            <strong>Menyajikan data</strong> lebih ringkas dan jelas → Informasi dapat disajikan dalam bentuk grafik yang sederhana dan mudah dibaca.
          </li>
          <li className="text-justify">
            <strong>Meningkatkan komunikasi data</strong> → Grafik dan diagram membuat penjelasan lebih menarik dan mudah dimengerti, misalnya saat presentasi di kelas.
          </li>
          <li className="text-justify">
            <strong>Mendeteksi kesalahan</strong> → Grafik membantu menemukan data yang tidak sesuai, seperti nilai ujian yang tiba-tiba terlalu tinggi atau rendah.
          </li>
        </ul>
      </div>

      {/* Contoh dalam Kehidupan Sehari-hari */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative text-justify">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          Contoh dalam Kehidupan Sehari-hari
        </div>
        <p className="text-gray-700 text-base text-justify leading-relaxed mt-6">
          Visualisasi data banyak digunakan dalam kehidupan sehari-hari untuk
          menyajikan informasi secara lebih jelas dan menarik.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Diagram garis</strong> untuk tren nilai siswa → Dapat digunakan untuk melihat perubahan nilai siswa selama satu semester, apakah meningkat atau menurun.
          </li>
          <li className="text-justify">
            <strong>Diagram batang</strong> untuk perbandingan jumlah pelanggan → Membantu membandingkan jumlah pelanggan di beberapa cabang toko dengan mudah.
          </li>
          <li className="text-justify">
            <strong>Diagram lingkaran</strong> untuk distribusi pengeluaran → Menunjukkan persentase pengeluaran dalam berbagai kategori seperti makanan, transportasi, dan hiburan.
          </li>
        </ul>
        <p className="text-gray-700 text-base text-justify leading-relaxed mt-4">
          Dengan memahami peran visualisasi data, kita dapat memilih metode yang
          paling efektif untuk menyajikan informasi dengan lebih jelas dan
          menarik.
        </p>
      </div>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative text-justify">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Membuat grafik tidaklah sulit jika kita{" "}
          <span className="font-semibold">
            membagi prosesnya menjadi langkah-langkah kecil.
          </span>{" "}
          Dengan menggunakan teknik dekomposisi, kita dapat memahami setiap
          tahap dengan lebih mudah.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Menentukan tujuan</strong> visualisasi → Sebelum membuat grafik, tentukan tujuan Anda, misalnya melihat pola perubahan nilai ulangan atau membandingkan jumlah siswa yang membeli jajanan.
          </li>
          <li className="text-justify">
            <strong>Mengumpulkan data</strong> yang relevan → Kumpulkan data yang sesuai, seperti nilai ulangan Matematika selama lima bulan atau jumlah siswa yang memilih es teh atau jus jeruk di kantin.
          </li>
          <li className="text-justify">
            <strong>Memilih jenis grafik</strong> yang tepat → Pilih jenis grafik yang sesuai dengan data dan tujuan, seperti diagram garis untuk tren atau diagram batang untuk perbandingan.
          </li>
          <li className="text-justify">
            <strong>Menggunakan fitur</strong> spreadsheet → Manfaatkan tools seperti Insert Chart untuk membuat grafik otomatis.
          </li>
        </ul>

        {/* Interactive Case Study for Dekomposisi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Latihan Dekomposisi: Membuat Diagram Batang Penjualan Jajanan
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu diminta membuat diagram batang untuk membandingkan penjualan jajanan di kantin sekolah: bakpao (50 porsi), siomay (30 porsi), dan cilok (20 porsi). Mari kita pecah proses ini menjadi langkah-langkah kecil. Klik tombol berikut untuk melihat langkah-langkahnya:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleDekomposisiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Tentukan Tujuan
            </button>
            {dekomposisiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Tujuannya adalah <strong>membandingkan penjualan</strong> bakpao, siomay, dan cilok dalam bentuk diagram batang.
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Kumpulkan Data
            </button>
            {dekomposisiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Data penjualan: bakpao (50 porsi), siomay (30 porsi), cilok (20 porsi).
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Pilih Jenis Grafik
            </button>
            {dekomposisiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Untuk membandingkan jumlah antar kategori, kita pilih <strong>Diagram Batang</strong>.
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(3)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 4: Buat Grafik
            </button>
            {dekomposisiSteps[3] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Gunakan spreadsheet untuk memasukkan data dan buat diagram batang menggunakan fitur <strong>Insert Chart</strong>.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* PENGENALAN POLA */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative text-justify">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah data terkumpul, langkah berikutnya adalah mengenali pola dalam
          data tersebut. Dengan{" "}
          <span className="font-semibold">memahami pola</span>, kita dapat
          memilih jenis grafik yang paling sesuai agar informasi lebih mudah
          dipahami.
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
  <li className="text-justify">
    <strong>Data yang menunjukkan perubahan</strong> dari waktu ke waktu → Gunakan Diagram Garis (Line Chart) atau Diagram Area (Area Chart):
    <ol className="list-decimal pl-10 text-gray-700 space-y-2">
      <li>
        Diagram Garis lebih fokus pada perubahan individu dari satu titik ke titik lainnya, misalnya tren nilai ulangan selama satu semester.
        <div className="flex justify-center mt-4">
          <img
            src={pustakawan}
            alt="Diagram Garis"
            className="w-3/4 md:w-1/2 max-w-xs rounded-lg shadow-md"
          />
        </div>
      </li>
      <li>
        Diagram Area menekankan total nilai yang berubah, cocok untuk menunjukkan akumulasi data, seperti jumlah siswa yang mengumpulkan tugas setiap minggu.
        <div className="flex justify-center mt-4">
          <img
            src={pustakawan}
            alt="Diagram Area"
            className="w-3/4 md:w-1/2 max-w-xs rounded-lg shadow-md"
          />
        </div>
      </li>
    </ol>
  </li>
  <li className="text-justify">
    <strong>Data untuk membandingkan jumlah</strong> antar kategori → Gunakan Diagram Batang (Bar Chart) atau Diagram Kolom (Column Chart):
    <ol className="list-decimal pl-10 text-gray-700 space-y-2">
      <li>
        Diagram Batang sering digunakan untuk membandingkan data kategori dalam posisi horizontal, misalnya jumlah siswa yang memilih berbagai ekstrakurikuler.
        <div className="flex justify-center mt-4">
          <img
            src={pustakawan}
            alt="Diagram Batang"
            className="w-3/4 md:w-1/2 max-w-xs rounded-lg shadow-md"
          />
        </div>
      </li>
      <li>
        Diagram Kolom berbentuk vertikal dan sering dipakai untuk membandingkan nilai ulangan antar mata pelajaran.
        <div className="flex justify-center mt-4">
          <img
            src={pustakawan}
            alt="Diagram Kolom"
            className="w-3/4 md:w-1/2 max-w-xs rounded-lg shadow-md"
          />
        </div>
      </li>
    </ol>
  </li>
  <li className="text-justify">
    <strong>Data yang menunjukkan proporsi</strong> atau persentase → Gunakan Diagram Lingkaran (Pie Chart), misalnya untuk menunjukkan persentase pengeluaran bulanan untuk makanan, transportasi, dan hiburan.
  </li>
</ul>

        {/* Interactive Case Study for Pengenalan Pola */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Latihan Pengenalan Pola: Memilih Grafik untuk Data Kehadiran Siswa
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu memiliki data kehadiran siswa selama satu minggu: Senin (90 siswa hadir), Selasa (85 siswa), Rabu (88 siswa), Kamis (92 siswa), Jumat (80 siswa). Mari kita identifikasi pola untuk memilih jenis grafik yang tepat. Klik tombol berikut untuk melihat pola yang ditemukan:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => togglePolaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Pola 1: Perubahan Waktu
            </button>
            {polaSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Data kehadiran menunjukkan <strong>perubahan harian</strong> dari Senin hingga Jumat.
              </p>
            )}
            <button
              onClick={() => togglePolaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Pola 2: Perubahan Kehadiran
            </button>
            {polaSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Kehadiran menurun dari Senin (90) ke Selasa (85), naik lagi pada Kamis (92), lalu turun tajam pada Jumat (80).
              </p>
            )}
            <button
              onClick={() => togglePolaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Pola 3: Jenis Grafik yang Cocok
            </button>
            {polaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Untuk melihat fluktuasi kehadiran harian, <strong>Diagram Garis</strong> adalah pilihan yang tepat.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ABSTRAKSI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
          Agar grafik mudah dipahami, kita harus menyaring informasi penting dan
          menghilangkan hal-hal yang tidak relevan.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">
          📌 Beberapa hal yang perlu diperhatikan:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Fokus hanya pada data utama</strong> → Misalnya, hanya menampilkan rata-rata nilai ujian, bukan semua nilai detail.
          </li>
          <li className="text-justify">
            <strong>Hindari terlalu banyak kategori</strong> dalam satu grafik → Jika terlalu banyak, data akan sulit dianalisis.
          </li>
        </ul>

        {/* Interactive Case Study for Abstraksi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Latihan Abstraksi: Membuat Diagram Lingkaran Preferensi Ekstrakurikuler
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu ingin membuat diagram lingkaran untuk menunjukkan preferensi siswa terhadap ekstrakurikuler: Pramuka (40 siswa), Seni Tari (30 siswa), Bola Voli (20 siswa). Kamu juga memiliki data tambahan seperti nama siswa, kelas, dan jadwal kegiatan. Mari kita saring data yang relevan. Klik tombol berikut untuk melihat proses abstraksi:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleAbstraksiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Identifikasi Data Relevan
            </button>
            {abstraksiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Data yang relevan adalah <strong>jumlah siswa per ekstrakurikuler</strong>: Pramuka (40), Seni Tari (30), Bola Voli (20).
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Abaikan Data Tidak Relevan
            </button>
            {abstraksiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Data seperti nama siswa, kelas, dan jadwal kegiatan <strong>tidak relevan</strong> untuk diagram lingkaran ini, karena tidak memengaruhi distribusi preferensi.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ALGORITMA */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
          Untuk membuat grafik di spreadsheet, langkah-langkahnya adalah:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Siapkan data</strong> dalam bentuk tabel → Masukkan data ke dalam kolom dan baris yang rapi.
          </li>
          <li className="text-justify">
            <strong>Pilih data</strong> yang akan divisualisasikan → Blok data yang ingin dibuat grafik.
          </li>
          <li className="text-justify">
            <strong>Klik menu Insert Chart</strong> dan pilih jenis grafik yang sesuai → Pilih jenis grafik seperti garis, batang, atau lingkaran.
          </li>
          <li className="text-justify">
            <strong>Periksa kembali grafik</strong> dan lakukan modifikasi jika diperlukan → Pastikan grafik jelas dan sesuai dengan tujuan.
          </li>
        </ul>

        {/* Interactive Case Study for Algoritma */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Latihan Algoritma: Membuat Grafik Nilai Ujian Bulanan
          </h3>
          <p className="text-gray-700 mt-2">
            Kamu ingin membuat grafik garis untuk menunjukkan nilai ujian bulanan seorang siswa: Januari (80), Februari (85), Maret (90), April (88), Mei (92), Juni (87). Mari kita buat langkah-langkah sistematis untuk membuat grafik ini di spreadsheet. Klik tombol berikut untuk melihat langkah-langkahnya:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleAlgoritmaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Siapkan Data
            </button>
            {algoritmaSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Buat tabel di spreadsheet: kolom pertama untuk bulan (Januari-Juni), kolom kedua untuk nilai (80, 85, 90, dst.).
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Pilih Data
            </button>
            {algoritmaSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Blok data di tabel, termasuk bulan dan nilai ujian.
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Insert Chart
            </button>
            {algoritmaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Klik menu <strong>"Insert Chart"</strong> di spreadsheet, lalu pilih <strong>Diagram Garis</strong>.
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(3)}
              className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full md:w-1/2 shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 4: Periksa Grafik
            </button>
            {algoritmaSteps[3] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                Periksa grafik, pastikan label bulan dan nilai terlihat jelas, lalu simpan.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a
          href="/contoh-lookup"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href="/contoh-penerapan-visualisasi-data"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}