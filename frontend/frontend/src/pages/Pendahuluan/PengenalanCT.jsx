import { useState } from "react";
import Layout from "../../components/Layout";
import "remixicon/fonts/remixicon.css";
import algoritma from "../../assets/Pendahuluan/algoritma.jpg";

const PengenalanCT = () => {
  // State untuk interaktivitas Pengenalan Pola
  const [answers, setAnswers] = useState({
    pola1: "",
    pola2: "",
    pola3: "",
    pola4: "",
  });

  const correctAnswersPola = {
    pola1: "210",
    pola2: "240",
    pola3: "60",
    pola4: "70",
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  // State untuk interaktivitas Abstraksi
  const [selectedOptions, setSelectedOptions] = useState([]);
  const correctAnswersCheckbox = ["1", "2"];

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((opt) => opt !== value) : [...prev, value]
    );
  };

  const isCorrect =
    selectedOptions.length === correctAnswersCheckbox.length &&
    selectedOptions.every((val) => correctAnswersCheckbox.includes(val));

  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white ">
        Pendekatan Computational Thinking
      </h1>

      {/* Tujuan Pembelajaran */}
      <section className="bg-green-100 rounded shadow-md p-4 mt-4">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <p className="text-gray-700">
          Memperkenalkan konsep dasar dari pendekatan <i>Computational Thinking</i> (CT). 
        </p>
      </section>

      {/* Pengertian Computational Thinking */}
      <div className="bg-white p-5  border-gray-300 mt-4 space-y-4">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Pengertian Computational Thinking</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          <span className="font-bold">Berpikir Komputasional <i>(Computational Thinking)</i></span> adalah cara berpikir yang
          terstruktur untuk memecahkan masalah dengan langkah-langkah yang efektif dan efisien. Pendekatan ini membantu kita 
          menemukan solusi terbaik dengan menggunakan konsep dari ilmu komputer, tetapi tidak hanya terbatas pada pemrograman.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Dalam dunia pendidikan, CT sangat berguna karena melatih siswa untuk berpikir logis, menganalisis masalah, dan menyusun strategi 
          penyelesaian yang dapat diterapkan baik oleh manusia maupun komputer. Dengan CT, siswa dapat belajar bagaimana menyelesaikan masalah dengan cara yang lebih sistematis dan terorganisir.
        </p>
      </div>

      {/* Fondasi Computational Thinking */}
      <div className="bg-white p-5  border-gray-300 mt-4 space-y-4">
        <h2 className="text-2xl font-bold text-green-800">Fondasi Computational Thinking</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          CT memiliki empat konsep utama: <b>Dekomposisi</b>, <b>Pengenalan Pola</b>, <b>Abstraksi</b>, dan <b>Algoritma</b>.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Dekomposisi adalah proses membagi suatu masalah menjadi bagian-bagian yang lebih kecil agar lebih mudah dipahami dan diselesaikan. 
          Dengan memecah masalah menjadi langkah-langkah yang terstruktur, setiap bagian dapat ditangani dengan lebih efektif. 
          Saat menganalisis suatu masalah, penting untuk mengidentifikasi bagian-bagian kecil yang membentuknya serta memahami bagaimana 
          setiap bagian saling berhubungan dalam menemukan solusi secara keseluruhan. Agar lebih memahami bagaimana dekomposisi diterapkan, 
          mari kita perhatikan contoh berikut.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Situasi: Bu Ani ingin mengetahui penyebab nilai ujian kelas mengalami penurunan dan mencari cara untuk meningkatkannya.
        </p> 
         {/* Langkah-langkah dekomposisi */}
         <div className="bg-green-100 border-l-4 border-green-800 p-4 rounded-lg shadow-md space-y-3">
          <h3 className="text-green-800 font-bold">Langkah Dekomposisi dalam <i>Computational Thinking</i></h3>

          <div>
            <h4 className="font-semibold">(1) Memecah Masalah Menjadi Bagian Kecil</h4>
            <div className="pl-6">
              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                <li>Data nilai dapat dibagi berdasarkan mata pelajaran (Matematika, IPA, Bahasa Indonesia, dan Bahasa Inggris).</li>
                <li>Setiap mata pelajaran bisa dikelompokkan lagi berdasarkan jenis ujian (ulangan harian, ujian tengah semester, ujian akhir semester).</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">(2) Menentukan Bagian Penting</h4>
            <div className="pl-6">
              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                <li>Cari data yang paling berpengaruh terhadap penurunan nilai, misalnya membandingkan nilai ulangan harian dengan nilai ujian akhir.</li>
                <li>Periksa apakah ada hubungan antara jumlah tugas yang dikumpulkan dengan nilai ujian.</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">(3) Mencari Informasi yang Diperlukan</h4>
            <div className="pl-6">
              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                <li>Setelah menemukan data yang penting, cari pola nilai siswa, misalnya apakah sebagian besar siswa mengalami penurunan nilai di mata pelajaran tertentu.</li>
                <li>Cari siswa yang nilai ujiannya di bawah KKM untuk diberikan bimbingan tambahan.</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">(4) Menganalisis Data</h4>
            <div className="pl-6">
              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2">
                <li>Urutkan (<i>sorting</i>) nilai siswa dari yang tertinggi hingga terendah untuk melihat siapa saja yang mengalami peningkatan atau penurunan nilai.</li>
                <li>Gunakan <i>filter</i> untuk melihat hanya data siswa yang mengalami penurunan nilai.</li>
                <li>Buat grafik atau tabel untuk melihat tren nilai ujian selama semester.</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Dengan membagi masalah besar menjadi bagian kecil (<i>dekomposisi</i>), kita bisa lebih mudah memahami penyebab turunnya nilai kelas. 
          Setelah menemukan pola dan menganalisis data, kita dapat menentukan solusi terbaik, seperti memberikan bimbingan tambahan atau memperbaiki metode belajar.
        </p> 
      </div>


      {/* Pengenalan Pola */}
      <div className="bg-white p-5 border-gray-300 mt-4 space-y-4">
        <h2 className="text-lg font-bold text-green-800">(2) Pengenalan Pola</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Pengenalan pola adalah cara mengenali kesamaan atau pola yang muncul dalam berbagai masalah. Dengan mengenali pola, 
          kita bisa memahami hubungan antar data dan menemukan solusi lebih cepat.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Saat mengamati data, kita mencari bagian yang mirip atau berbeda, lalu menghubungkannya dengan informasi yang sudah kita ketahui 
          sebelumnya. Dengan cara ini, kita dapat mengelompokkan data ke dalam kategori tertentu dan menentukan apakah sesuatu termasuk 
          dalam kelompok tersebut atau tidak.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Dalam menyelesaikan masalah, mengenali pola sangat berguna karena membantu kita menggunakan solusi dari masalah sebelumnya untuk 
          menyelesaikan masalah baru yang serupa. Dengan begitu, kita tidak perlu mencari solusi dari awal setiap kali menghadapi masalah baru.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Pengenalan pola dalam <i>Computational Thinking</i> (CT) dapat digunakan dalam banyak hal, seperti menganalisis data, mengelompokkan informasi, dan menyelesaikan masalah dengan lebih efisien.
        </p>

        {/* Interaktivitas */}
        <div className="bg-green-100 border-l-4 border-green-800 p-4 rounded-lg shadow-md space-y-3">
          <h3 className="text-green-800 font-bold">
            Isilah kolom-kolom kosong di bawah dengan jawaban yang paling tepat. Jawablah pertanyaan berikut secara mandiri dan teliti!
          </h3>

          <p className="text-gray-700 text-sm md:text-base font-semibold">
            Perhatikan pola data berikut, lalu isi bagian yang kosong dengan jawaban yang benar berdasarkan pola yang terbentuk:
          </p>
      
          <p className="text-gray-700 text-sm md:text-base font-semibold">(1) Jumlah siswa yang mengikuti ekstrakurikuler dalam empat semester terakhir adalah:</p>
          <p className="text-gray-700 text-sm md:text-base">
            120, 150, 180, 
            <input
              type="text"
              name="pola1"
              value={answers.pola1}
              onChange={handleChange}
              className={`border px-2 py-1 mx-1 ${
                answers.pola1 === correctAnswersPola.pola1
                  ? "bg-green-200"
                  : answers.pola1
                  ? "bg-red-200"
                  : ""
              }`}
            />, 
            <input
              type="text"
              name="pola2"
              value={answers.pola2}
              onChange={handleChange}
              className={`border px-2 py-1 mx-1 ${
                answers.pola2 === correctAnswersPola.pola2
                  ? "bg-green-200"
                  : answers.pola2
                  ? "bg-red-200"
                  : ""
              }`}
            />.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Jika pola kenaikan jumlah siswa tetap, maka jumlah siswa pada semester berikutnya adalah ....
          </p>

          <p className="text-gray-700 text-sm md:text-base font-semibold">(2) Berikut adalah jumlah pengunjung perpustakaan dalam lima hari terakhir:</p>
          <p className="text-gray-700 text-sm md:text-base">
            50, 55, 
            <input
              type="text"
              name="pola3"
              value={answers.pola3}
              onChange={handleChange}
              className={`border px-2 py-1 mx-1 ${
                answers.pola3 === correctAnswersPola.pola3
                  ? "bg-green-200"
                  : answers.pola3
                  ? "bg-red-200"
                  : ""
              }`}
            />,  
            65, 
            <input
              type="text"
              name="pola4"
              value={answers.pola4}
              onChange={handleChange}
              className={`border px-2 py-1 mx-1 ${
                answers.pola4 === correctAnswersPola.pola4
                  ? "bg-green-200"
                  : answers.pola4
                  ? "bg-red-200"
                  : ""
              }`}
            />, 
            75.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Berdasarkan pola yang terbentuk, jumlah pengunjung pada hari ketiga dan kelima adalah…
          </p>
        </div>
      </div>

      {/* Abstraksi */}
      <div className="bg-white p-5  border-gray-300 mt-4 space-y-4">
        <h2 className="text-lg font-bold text-green-800">(3) Abstraksi</h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Abstraksi membantu kita memahami banyak data dengan cara yang lebih sederhana. Dalam analisis data, abstraksi berarti kita tidak perlu 
          melihat semua detail satu per satu, tetapi cukup fokus pada bagian yang paling penting. 
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Misalnya, jika kita ingin mengetahui bagaimana hasil ujian siswa di suatu sekolah, kita tidak perlu membaca setiap nilai satu per satu. 
          Sebagai gantinya, kita bisa melihat rata-rata nilai setiap kelas atau membandingkan nilai tertinggi dan terendah. Dengan cara ini, kita bisa 
          lebih mudah memahami gambaran umum tanpa harus melihat semua angka.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Abstraksi juga sering digunakan dalam kehidupan sehari-hari. Misalnya, ketika kita membaca ringkasan sebuah buku, kita tidak perlu 
          membaca seluruh isi buku untuk mengetahui cerita intinya. Dalam analisis data, abstraksi membantu kita melihat pola atau kesimpulan
          penting tanpa harus membaca semua data secara langsung. Dengan begitu, kita bisa mengambil keputusan lebih cepat dan mudah.
        </p>

        {/* Interaktivitas Abstraksi */}
        <div className="bg-green-100 border-l-4 border-green-800 p-4 rounded-lg shadow-md space-y-3">
          <h3 className="text-green-800 font-bold">
            Isilah kotak pilihan di bawah dengan jawaban yang paling tepat.
            Pilih hanya informasi yang penting untuk menyelesaikan tugas berikut!
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            ❓ Kamu ingin mencari nomor telepon teman di sekolah. Pilih informasi yang penting!
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            📌 Petunjuk: Fokus hanya pada informasi yang diperlukan untuk menemukan nomor
          </p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                value="1" 
                checked={selectedOptions.includes("1")} 
                onChange={handleCheckboxChange} 
              />
              <span>Nama Teman</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                value="2" 
                checked={selectedOptions.includes("2")} 
                onChange={handleCheckboxChange} 
              />
              <span>Nomor Telepon</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                value="3" 
                checked={selectedOptions.includes("3")} 
                onChange={handleCheckboxChange} 
              />
              <span>Warna HP</span>
            </label>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                value="4" 
                checked={selectedOptions.includes("4")} 
                onChange={handleCheckboxChange} 
              />
              <span>Jenis SIM Card</span>
            </label>
          </div>
          {selectedOptions.length > 0 && (
            <p className={`text-sm font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? "Jawaban Anda benar!" : "Jawaban belum tepat. Coba lagi!"}
            </p>
          )}
        </div>
      </div>

      {/* Algoritma */}
      <div className="bg-white p-5  border-gray-300 mt-4 space-y-4">
        <h2 className="text-lg font-bold text-green-800 mb-2">(4) Algoritma </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Pernahkah kamu membaca grafik atau tabel untuk memahami suatu informasi? Saat menganalisis data, kita perlu mengikuti langkah-langkah 
          tertentu agar dapat menarik kesimpulan yang tepat. Proses ini mirip seperti mengikuti resep kue, setiap langkah harus dilakukan secara 
          berurutan agar hasilnya sesuai harapan.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          <i>📌 Misalnya, dalam membuat kue, kita harus mengumpulkan bahan, mencampur adonan, memanggang dengan suhu tertentu, dan menunggu 
            hingga matang. Jika ada langkah yang terlewat atau dilakukan tidak berurutan, hasilnya bisa berbeda dari yang diharapkan.</i>
        </p>
        <div className="flex justify-center mt-10">
          <img 
            src={algoritma} 
            alt="Algoritma" 
            className="w-[70%] md:w-[50%] lg:w-[40%] rounded-lg"
          />
        </div> 
        <p className="text-center text-gray-600 text-sm italic">Gambar 2. Langkah Membuat Kue</p>
        
        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
          Dalam analisis data, algoritma berperan sebagai serangkaian langkah sistematis yang membantu kita mengolah informasi. Jika seorang siswa ingin mengetahui perkembangan nilai ujiannya selama satu semester, ia bisa mengikuti algoritma berikut:
        </p>
        <ul className="list-decimal list-inside text-gray-700 text-sm md:text-base leading-relaxed mt-2">
          <li>Kumpulkan nilai ujian dari setiap mata pelajaran.</li>
          <li>Susun nilai dalam tabel berdasarkan tanggal ujian.</li>
          <li>Buat grafik untuk melihat tren kenaikan atau penurunan.</li>
          <li>Analisis pola, apakah ada peningkatan setelah belajar lebih giat.</li>
          <li>Simpulkan apakah strategi belajarnya sudah efektif atau perlu diperbaiki.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2">
          Dengan mengikuti algoritma ini, kita dapat memahami data dengan lebih sistematis dan membuat keputusan yang lebih baik. Proses ini tidak hanya berguna dalam pelajaran, tetapi juga dalam kehidupan sehari-hari, seperti menganalisis harga barang atau memantau pertumbuhan tanaman.
        </p>

      </div>
      
      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/mengenal-analisis" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/penerapan-ct" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default PengenalanCT;