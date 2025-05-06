import Layout from "../../components/Layout";
import "remixicon/fonts/remixicon.css";

const MengenalAnalisisData = () => {
  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-4 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Mengenal Analisis Data
      </h1>

      {/* Tujuan Pembelajaran */}
      <section className="bg-green-100 p-4 rounded shadow-md mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <p className="text-gray-700">
          Memperkenalkan konsep dasar dari analisis data.
        </p>
      </section>

      {/* Konten */}
      <article className="bg-white p-4 rounded shadow-md text-gray-700 leading-relaxed space-y-5">
        <p className="text-sm md:text-base text-justify leading-relaxed">
          Analisis data adalah proses mengolah dan memahami informasi dalam
          bentuk angka, teks, atau kategori tertentu. Proses ini bertujuan
          untuk menemukan pola, mengambil keputusan, atau menyelesaikan
          masalah.
        </p>

        <p className="text-sm md:text-base text-justify leading-relaxed">
          Analisis data memiliki peran penting dalam berbagai aspek kehidupan,
          baik di sekolah, pekerjaan, maupun kehidupan sehari-hari. Beberapa
          alasan mengapa analisis data sangat penting antara lain:
        </p>

        <ul className="list-disc ml-8 space-y-2">
          <li>Membantu pengambilan keputusan yang lebih baik</li>
          <li>Menemukan pola dan tren dalam data</li>
          <li>Menyelesaikan masalah dengan efektif</li>
        </ul>

        <p className="text-sm md:text-base text-justify leading-relaxed">
          Analisis data dilakukan dengan beberapa langkah utama yang akan
          dipelajari dalam bab ini:
        </p>

        <ul className="list-disc ml-8 space-y-2">
          <li>
            <span className="font-semibold">
              Pencarian Data (Lookup dan Reference)
            </span>{" "}
            – Menemukan informasi dalam sekumpulan data besar dengan cara yang
            lebih efisien, seperti mencari nilai seorang siswa dalam daftar
            nilai menggunakan tabel referensi.
          </li>
          <li>
            <span className="font-semibold">Visualisasi Data</span> – Mengubah
            data mentah menjadi grafik atau diagram agar lebih mudah dipahami,
            misalnya menyajikan nilai rata-rata kelas dalam bentuk diagram
            batang.
          </li>
          <li>
            <span className="font-semibold">
              Peringkasan Data (SUMIF, SUMIFS, COUNTIF, COUNTIFS)
            </span>{" "}
            – Menghitung dan menganalisis data berdasarkan kategori tertentu,
            seperti menghitung jumlah siswa yang mendapatkan nilai di atas KKM.
          </li>
          <li>
            <span className="font-semibold">
              Pengelolaan Data (Sorting dan Filtering)
            </span>{" "}
            – Mengurutkan dan menyaring data agar lebih rapi dan mudah
            dianalisis, seperti mengurutkan daftar siswa berdasarkan nilai
            tertinggi ke terendah.
          </li>
        </ul>

        <p className="text-sm md:text-base text-justify leading-relaxed">
          Dalam bab ini, kalian akan belajar bagaimana menerapkan analisis data
          untuk berbagai keperluan, seperti:
        </p>

        <ul className="list-disc ml-8 space-y-2">
          <li>
            Mencari informasi dengan lebih cepat menggunakan fungsi pencarian
            data.
          </li>
          <li>
            Menganalisis tren nilai ujian atau kehadiran siswa melalui
            visualisasi data.
          </li>
          <li>
            Mengolah data keuangan atau statistik lainnya dengan teknik
            peringkasan data.
          </li>
          <li>
            Mengorganisasi data dalam tabel agar lebih terstruktur menggunakan
            sorting dan filtering.
          </li>
        </ul>

        <p className="text-sm md:text-base text-justify leading-relaxed">
          Dengan memahami analisis data dan cara menggunakannya, kita dapat
          mengelola informasi dengan lebih baik, membuat keputusan yang lebih
          tepat, dan menyelesaikan masalah secara efektif.
        </p>
      </article>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
        <a
          href="/pendahuluan"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          aria-label="Halaman sebelumnya"
        >
          ← Sebelumnya
        </a>
        <a
          href="/pengenalan-ct"
          className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]"
          aria-label="Halaman selanjutnya"
        >
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default MengenalAnalisisData;
