import Layout from "../../components/Layout";
import "remixicon/fonts/remixicon.css";
import pustakawan from "../../assets/Pendahuluan/pustakawan.jpg";

const Pendahuluan = () => {
  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white ">
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
            src={pustakawan} 
            alt="Perpustakaan" 
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
        <p className="text-center text-sm italic text-gray-500 mt-2">Gambar 1. Perpustakaan</p>

        {/* Paragraf Informasi */}
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          Menganalisis data mirip dengan cara pustakawan mengelola koleksi buku di perpustakaan. Bayangkan ada banyak 
          data peminjaman buku, seperti <strong>judul</strong>, <strong>kategori</strong>, dan <strong>tanggal peminjaman</strong>. 
          Untuk menemukan informasi dengan cepat, pustakawan menggunakan <strong>pencarian data</strong> (lookup dan reference), 
          misalnya mencari siapa yang terakhir meminjam buku tertentu.
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Setelah data terkumpul, pustakawan dapat menganalisis pola peminjaman, seperti buku pelajaran yang lebih sering 
          dipinjam saat ujian. Dengan <strong>visualisasi data</strong>, seperti grafik batang atau pie chart, tren peminjaman 
          menjadi lebih mudah dipahami.
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Mereka juga bisa membuat <strong>peringkasan data</strong>, seperti menghitung total peminjaman dengan 
          <strong> SUMIF</strong> atau <strong>COUNTIF</strong>, serta mengelola data dengan <strong>sorting dan filtering</strong>, 
          misalnya mengurutkan daftar peminjaman atau mencari siswa yang paling sering meminjam buku.
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed text-justify">
          Seperti pustakawan, kita juga bisa menerapkan <strong>analisis data dalam kehidupan sehari-hari</strong>, misalnya 
          menyusun nilai ujian untuk melihat perkembangan belajar atau mengelompokkan pekerjaan agar lebih terkontrol. Dengan 
          analisis data, kita bisa memahami informasi lebih baik dan mengambil keputusan lebih tepat.
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
