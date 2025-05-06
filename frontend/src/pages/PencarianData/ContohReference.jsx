import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohReference = () => {
  return (
    <Layout>

      {/* Header Judul */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN FUNGSI REFERENCE
      </div>

      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 1: INDEX 
      </h2>

      {/* Pengantar Masalah */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          Kamu sedang membantu orang tuamu di toko buku. Setiap buku memiliki kode unik, nama buku, dan harga. 
          Suatu hari, seorang pelanggan bertanya: "Buku dengan kode <span className='font-semibold'>TB002</span> itu harganya berapa, ya?" 
          Daripada mencari satu per satu secara manual, kamu bisa menggunakan fungsi <span className="font-semibold">INDEX</span> 
          untuk menemukan harga buku berdasarkan posisi datanya.
        </p>
      </div>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel. Data Buku di Toko</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Kode Buku</th>
              <th className="border border-green-600 px-4 py-2">Judul Buku</th>
              <th className="border border-green-600 px-4 py-2">Harga (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "TB001", "Cerita Anak Nusantara", 55000],
              [2, "TB002", "Matematika Cerdas 1", 60000],
              [3, "TB003", "Petualangan Sains", 58000],
              [4, "TB004", "Atlas Dunia Anak", 65000],
              [5, "TB005", "Panduan Bahasa Inggris", 53000],
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

      {/* Penyelesaian CT */}
      <div className="space-y-8 mt-10">
        {/* Dekomposisi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Tabel berisi informasi kode buku, judul buku, dan harga.</li>
            <li>Tujuan: Menemukan harga dari buku dengan kode tertentu.</li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Setiap baris berisi satu buku dengan informasi lengkap.</li>
            <li>Harga berada di kolom ke-4 pada baris tempat kode ditemukan.</li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-5 h-5 mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Kita hanya perlu fokus pada kolom harga dan baris yang sesuai dengan kode buku.</li>
            <li>Gunakan INDEX untuk mengambil harga dari baris tertentu pada kolom harga.</li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> Algoritma
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Temukan baris tempat kode TB002 berada (misalnya baris ke-2).</li>
            <li>Gunakan rumus:
              <div className="bg-gray-100 p-2 rounded mt-1">
                =INDEX(D2:D6;2)
              </div>
              untuk menampilkan harga dari buku dengan kode TB002.
            </li>
          </ul>
          <div className="flex justify-center">
            <iframe 
                width="80%" 
                height="400" 
                style={{ border: '1px solid #e7e7e7' }} 
                frameBorder="0" 
                scrolling="no" 
                src="https://sheet.zohopublic.com/sheet/published/cbhuve6b9eaad45264a6b9414a2877d494949?mode=embed">
            </iframe>
          </div>
        </div>
      </div>

      {/* Kesimpulan dan Analisis */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Fungsi INDEX membantu kamu mengambil data dari posisi tertentu dalam sebuah tabel. 
          Ini sangat bermanfaat saat kamu tahu posisi barisnya, tapi ingin mengambil datanya secara otomatis tanpa perlu melihat satu per satu.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>INDEX akan mengambil nilai berdasarkan nomor baris yang kamu tentukan.</li>
          <li>Bisa digunakan bersama fungsi MATCH untuk pencarian otomatis.</li>
          <li>Sangat berguna saat data dalam tabel cukup banyak dan kita ingin akses cepat berdasarkan urutan.</li>
        </ul>
      </div>

      {/* Header Judul */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: MATCH 
      </h2>

      {/* Pengantar Masalah */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          Kamu adalah <span className="font-semibold">panitia lomba</span> di sekolahmu. Setiap peserta lomba memiliki 
          <span className="font-semibold"> kode unik</span>, nama peserta, dan cabang lomba yang diikuti. Saat sedang menyusun daftar tampil, 
          temanmu bertanya: "Peserta dengan kode <span className="font-semibold">6371</span> itu ada di urutan ke berapa, ya?" 
          Nah, kamu bisa menggunakan fungsi <span className="font-semibold">MATCH</span> untuk menemukan posisi peserta berdasarkan kode uniknya.
        </p>
      </div>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel. Data Peserta Lomba</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Kode Peserta</th>
              <th className="border border-green-600 px-4 py-2">Nama Peserta</th>
              <th className="border border-green-600 px-4 py-2">Cabang Lomba</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["3729", "Nina", "Menyanyi"],
              ["8254", "Rafi", "Melukis"],
              ["6271", "Sita", "Pantomim"],
              ["1493", "Bayu", "Tari"],
              ["6802", "Dina", "Puisi"],
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

      {/* Penyelesaian CT */}
      <div className="space-y-8 mt-10">
        {/* Dekomposisi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Tabel berisi informasi kode peserta, nama, dan cabang lomba.</li>
            <li>Tujuan: Menemukan urutan peserta berdasarkan kode tertentu.</li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Setiap baris menampilkan satu peserta lomba dengan kode unik.</li>
            <li>Posisi peserta sesuai dengan urutan baris kode peserta.</li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-5 h-5 mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Kita hanya fokus pada kolom kode peserta dan ingin mencari posisinya dalam tabel.</li>
            <li>Gunakan fungsi MATCH untuk menemukan posisi baris berdasarkan kode peserta.</li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> Algoritma
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Gunakan fungsi MATCH untuk mencari kode peserta dalam daftar:</li>
            <li>
              Rumus:
              <div className="bg-gray-100 p-2 rounded mt-1">
                =MATCH(6271; A2:A6; 0)
              </div>
              Artinya:
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>6271 adalah kode yang dicari.</li>
                <li>A2:A6 adalah kolom tempat pencarian dilakukan.</li>
                <li>0 artinya mencari yang persis sama.</li>
                <li>Hasilnya: <span className="font-semibold">3</span>, karena 6271 berada di baris ke-3 dalam range.</li>
              </ul>
            </li>
          </ul>
          <div className="flex justify-center mt-4">
            <iframe 
              width="80%" 
              height="400" 
              style={{ border: '1px solid #e7e7e7' }} 
              frameBorder="0" 
              scrolling="no" 
              src="https://sheet.zohopublic.com/sheet/published/u4xoa5aec0a4f21f94d7bba59976b939227fe?mode=embed">
            </iframe>
          </div>
        </div>
      </div>

      {/* Kesimpulan dan Analisis */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Fungsi MATCH membantu kamu menemukan posisi suatu data (seperti kode peserta) dalam sebuah daftar. 
          Ini sangat bermanfaat saat ingin tahu urutan data tertentu dalam tabel.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>MATCH mencari data tertentu dan mengembalikan posisinya (baris ke berapa).</li>
          <li>Digunakan untuk menghubungkan data yang berkaitan, seperti INDEX + MATCH.</li>
          <li>Membantu pencarian otomatis saat jumlah data banyak.</li>
        </ul>
      </div>

       {/* Header Judul */}
       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 3: CHOOSE
      </h2>

      {/* Pengantar Masalah */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          Kamu adalah seorang siswa yang mengikuti kegiatan <span className="font-semibold">ekstrakurikuler</span> di sekolah. 
          Setiap hari memiliki jadwal ekstrakurikuler yang berbeda. Temanmu bertanya, 
          “Kalau hari ke-2 itu jadwalnya apa, ya?” Kamu bisa menggunakan fungsi <span className="font-semibold">CHOOSE</span> 
           untuk menentukan jadwal berdasarkan nomor hari.
        </p>
      </div>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel. Jadwal Ekstrakurikuler</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Nomor</th>
              <th className="border border-green-600 px-4 py-2">Kegiatan</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Futsal"],
              [2, "PMR"],
              [3, "Paduan Suara"],
              [4, "Pramuka"],
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

      {/* Penyelesaian CT */}
      <div className="space-y-8 mt-10">
        {/* Dekomposisi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Terdapat daftar kegiatan ekstrakurikuler berdasarkan hari (dalam bentuk nomor).</li>
            <li>Tujuan: Menemukan kegiatan berdasarkan nomor hari tertentu.</li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Setiap nomor mewakili satu hari dengan kegiatan tertentu.</li>
            <li>Pola: Nomor hari berhubungan langsung dengan urutan kegiatan.</li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-5 h-5 mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Kita hanya fokus pada nomor hari dan daftar kegiatan.</li>
            <li>Gunakan CHOOSE untuk memilih kegiatan berdasarkan nomor hari.</li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> Algoritma
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Gunakan fungsi CHOOSE untuk menampilkan kegiatan berdasarkan nomor:</li>
            <li>
              Rumus:
              <div className="bg-gray-100 p-2 rounded mt-1">
                =CHOOSE(2; "Futsal"; "PMR"; "Paduan Suara"; "Pramuka")
              </div>
              Artinya:
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Angka 2 = nomor hari yang dipilih.</li>
                <li>Setiap pilihan di dalam CHOOSE mewakili urutan kegiatan sesuai nomor hari.</li>
                <li>Hasilnya: <span className="font-semibold">PMR</span>, karena itu urutan ke-2.</li>
              </ul>
            </li>
          </ul>
          <div className="flex justify-center mt-4">
            <iframe
              width="80%"
              height="400"
              style={{ border: '1px solid #e7e7e7' }}
              frameBorder="0"
              scrolling="no"
              src="https://sheet.zohopublic.com/sheet/published/u4xoabea134672a124461a1ae7e5696634ec3?mode=embed"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Kesimpulan dan Analisis */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Fungsi CHOOSE berguna untuk memilih nilai berdasarkan posisi tertentu dalam daftar. 
          Sangat cocok digunakan ketika kita memiliki pilihan tetap dan ingin mengambil salah satunya secara cepat.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Mempermudah pengambilan data berdasarkan urutan (nomor).</li>
          <li>Cocok untuk memilih kegiatan, jadwal, atau kategori yang datanya tetap.</li>
          <li>Lebih praktis dibanding mencari manual, terutama jika sering digunakan berulang.</li>
        </ul>
      </div>




 



      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
          <a href="/pencarian-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md">← Sebelumnya</a>
          <a href="/aktivitas-lookup" className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md">Selanjutnya →</a>
      </div>
    </Layout>
  );
};

export default ContohReference;
