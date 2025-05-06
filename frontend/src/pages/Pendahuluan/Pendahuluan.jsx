import Layout from "../../components/Layout";
import "remixicon/fonts/remixicon.css";
import pustakawan from "../../assets/Pendahuluan/pustakawan.jpg";

const Pendahuluan = () => {
  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white rounded-lg shadow-lg">
        Pendahuluan
      </h1>
      
      {/* Paragraf Pengantar */}
      <div className="bg-gray-100 p-4 mt-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          Di kelas VII, kalian telah belajar dasar-dasar pengolahan data. Sekarang, coba bayangkan saat mencari 
          nama teman di daftar panjang atau tugas lama di tumpukan file. Akan lebih mudah jika data bisa diurutkan 
          atau difilter sesuai kebutuhan, bukan?
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Di kelas VIII ini, kalian akan mendalami <strong>pencarian data</strong>, <strong>peringkasan data</strong>, 
          <strong> visualisasi data</strong>, dan <strong>pengelolaan data</strong> (sorting & filtering) untuk mengolah 
          informasi lebih efisien. Dengan keterampilan ini, kalian dapat mengelola data secara sistematis dan membuat keputusan lebih baik.
        </p>
      </div>

      {/* Bagian "Tahukah Kamu?" */}
      <div className="bg-white p-4 shadow-md rounded mt-4">
        <h2 className="font-bold text-lg flex items-center text-[#255F38]">
          <i className="ri-lightbulb-line text-[#255F38] text-xl mr-2"></i> Tahukah Kamu?
        </h2>

        {/* Gambar */}
        <div className="flex justify-center mt-4">
          <img 
            src={pustakawan} // Bisa diganti dengan ilustrasi siswa mengelola data
            alt="Siswa Mengelola Data" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 1. Mengelola Data sebagai Siswa</p>

        {/* Paragraf Informasi */}
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          Sebagai siswa, kalian tentu pernah mengalami situasi seperti mencari nilai ulangan tertentu, 
          menyusun jadwal piket kelas, atau memeriksa siapa saja yang belum mengumpulkan tugas. Semua kegiatan 
          tersebut melibatkan data dan memerlukan keterampilan untuk mengelolanya dengan baik.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Dengan bantuan fitur <strong>pencarian data</strong>, kalian dapat menemukan informasi yang dibutuhkan 
          dengan lebih cepat, seperti mengetahui siapa yang memperoleh nilai tertinggi dalam suatu mata pelajaran. 
          Fitur <strong>filter</strong> juga memudahkan dalam menyaring data, misalnya hanya menampilkan siswa 
          yang belum mengumpulkan tugas.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Selain itu, kalian dapat membuat <strong>peringkasan data</strong> menggunakan fungsi seperti 
          <strong> SUMIF</strong> atau <strong>COUNTIF</strong>, contohnya untuk menghitung jumlah tugas yang telah 
          dikumpulkan setiap minggu. Dengan <strong>visualisasi data</strong> seperti grafik batang, kalian juga 
          dapat melihat perkembangan nilai dari waktu ke waktu secara lebih jelas.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Melalui kegiatan tersebut, kalian sebenarnya telah menerapkan prinsip <strong> analisis data </strong> 
          dalam kehidupan sehari-hari. Kemampuan ini sangat berguna untuk memahami informasi, mengambil keputusan, 
          serta menjadi lebih teratur dan sistematis dalam belajar maupun beraktivitas di sekolah.
        </p>
      </div>


      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/pengantar-bab" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/mengenal-analisis" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
};

export default Pendahuluan;
