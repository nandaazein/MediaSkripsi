// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

// const ContohReference = () => {
//   return (
//     <Layout>

//       {/* Header Judul */}
//       <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         CONTOH PENERAPAN FUNGSI REFERENCE
//       </div>

//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 1: INDEX 
//       </h2>

//       {/* Pengantar Masalah */}
//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
//           Kamu sedang membantu orang tuamu di toko buku. Setiap buku memiliki kode unik, nama buku, dan harga. 
//           Suatu hari, seorang pelanggan bertanya: "Buku dengan kode <span className='font-semibold'>TB002</span> itu harganya berapa, ya?" 
//           Daripada mencari satu per satu secara manual, kamu bisa menggunakan fungsi <span className="font-semibold">INDEX</span> 
//           untuk menemukan harga buku berdasarkan posisi datanya.
//         </p>
//       </div>

//       {/* Tabel Data */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel. Data Buku di Toko</p>
//         <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">No</th>
//               <th className="border border-green-600 px-4 py-2">Kode Buku</th>
//               <th className="border border-green-600 px-4 py-2">Judul Buku</th>
//               <th className="border border-green-600 px-4 py-2">Harga (Rp)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [1, "TB001", "Cerita Anak Nusantara", 55000],
//               [2, "TB002", "Matematika Cerdas 1", 60000],
//               [3, "TB003", "Petualangan Sains", 58000],
//               [4, "TB004", "Atlas Dunia Anak", 65000],
//               [5, "TB005", "Panduan Bahasa Inggris", 53000],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Penyelesaian CT */}
//       <div className="space-y-8 mt-10">
//         {/* Dekomposisi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Tabel berisi informasi kode buku, judul buku, dan harga.</li>
//             <li>Tujuan: Menemukan harga dari buku dengan kode tertentu.</li>
//           </ul>
//         </div>

//         {/* Pengenalan Pola */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Setiap baris berisi satu buku dengan informasi lengkap.</li>
//             <li>Harga berada di kolom ke-4 pada baris tempat kode ditemukan.</li>
//           </ul>
//         </div>

//         {/* Abstraksi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Filter className="w-5 h-5 mr-2" /> Abstraksi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Kita hanya perlu fokus pada kolom harga dan baris yang sesuai dengan kode buku.</li>
//             <li>Gunakan INDEX untuk mengambil harga dari baris tertentu pada kolom harga.</li>
//           </ul>
//         </div>

//         {/* Algoritma */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Code className="w-5 h-5 mr-2" /> Algoritma
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Temukan baris tempat kode TB002 berada (misalnya baris ke-2).</li>
//             <li>Gunakan rumus:
//               <div className="bg-gray-100 p-2 rounded mt-1">
//                 =INDEX(D2:D6;2)
//               </div>
//               untuk menampilkan harga dari buku dengan kode TB002.
//             </li>
//           </ul>
//           <div className="flex justify-center">
//             <iframe 
//                 width="80%" 
//                 height="400" 
//                 style={{ border: '1px solid #e7e7e7' }} 
//                 frameBorder="0" 
//                 scrolling="no" 
//                 src="https://sheet.zohopublic.com/sheet/published/cbhuve6b9eaad45264a6b9414a2877d494949?mode=embed">
//             </iframe>
//           </div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Fungsi INDEX membantu kamu mengambil data dari posisi tertentu dalam sebuah tabel. 
//           Ini sangat bermanfaat saat kamu tahu posisi barisnya, tapi ingin mengambil datanya secara otomatis tanpa perlu melihat satu per satu.
//         </p>
//         <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
//         <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
//           <li>INDEX akan mengambil nilai berdasarkan nomor baris yang kamu tentukan.</li>
//           <li>Bisa digunakan bersama fungsi MATCH untuk pencarian otomatis.</li>
//           <li>Sangat berguna saat data dalam tabel cukup banyak dan kita ingin akses cepat berdasarkan urutan.</li>
//         </ul>
//       </div>

//       {/* Header Judul */}
//       <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 2: MATCH 
//       </h2>

//       {/* Pengantar Masalah */}
//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
//           Kamu adalah <span className="font-semibold">panitia lomba</span> di sekolahmu. Setiap peserta lomba memiliki 
//           <span className="font-semibold"> kode unik</span>, nama peserta, dan cabang lomba yang diikuti. Saat sedang menyusun daftar tampil, 
//           temanmu bertanya: "Peserta dengan kode <span className="font-semibold">6371</span> itu ada di urutan ke berapa, ya?" 
//           Nah, kamu bisa menggunakan fungsi <span className="font-semibold">MATCH</span> untuk menemukan posisi peserta berdasarkan kode uniknya.
//         </p>
//       </div>

//       {/* Tabel Data */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel. Data Peserta Lomba</p>
//         <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">Kode Peserta</th>
//               <th className="border border-green-600 px-4 py-2">Nama Peserta</th>
//               <th className="border border-green-600 px-4 py-2">Cabang Lomba</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               ["3729", "Nina", "Menyanyi"],
//               ["8254", "Rafi", "Melukis"],
//               ["6271", "Sita", "Pantomim"],
//               ["1493", "Bayu", "Tari"],
//               ["6802", "Dina", "Puisi"],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Penyelesaian CT */}
//       <div className="space-y-8 mt-10">
//         {/* Dekomposisi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Tabel berisi informasi kode peserta, nama, dan cabang lomba.</li>
//             <li>Tujuan: Menemukan urutan peserta berdasarkan kode tertentu.</li>
//           </ul>
//         </div>

//         {/* Pengenalan Pola */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Setiap baris menampilkan satu peserta lomba dengan kode unik.</li>
//             <li>Posisi peserta sesuai dengan urutan baris kode peserta.</li>
//           </ul>
//         </div>

//         {/* Abstraksi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Filter className="w-5 h-5 mr-2" /> Abstraksi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Kita hanya fokus pada kolom kode peserta dan ingin mencari posisinya dalam tabel.</li>
//             <li>Gunakan fungsi MATCH untuk menemukan posisi baris berdasarkan kode peserta.</li>
//           </ul>
//         </div>

//         {/* Algoritma */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Code className="w-5 h-5 mr-2" /> Algoritma
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Gunakan fungsi MATCH untuk mencari kode peserta dalam daftar:</li>
//             <li>
//               Rumus:
//               <div className="bg-gray-100 p-2 rounded mt-1">
//                 =MATCH(6271; A2:A6; 0)
//               </div>
//               Artinya:
//               <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
//                 <li>6271 adalah kode yang dicari.</li>
//                 <li>A2:A6 adalah kolom tempat pencarian dilakukan.</li>
//                 <li>0 artinya mencari yang persis sama.</li>
//                 <li>Hasilnya: <span className="font-semibold">3</span>, karena 6271 berada di baris ke-3 dalam range.</li>
//               </ul>
//             </li>
//           </ul>
//           <div className="flex justify-center mt-4">
//             <iframe 
//               width="80%" 
//               height="400" 
//               style={{ border: '1px solid #e7e7e7' }} 
//               frameBorder="0" 
//               scrolling="no" 
//               src="https://sheet.zohopublic.com/sheet/published/u4xoa5aec0a4f21f94d7bba59976b939227fe?mode=embed">
//             </iframe>
//           </div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Fungsi MATCH membantu kamu menemukan posisi suatu data (seperti kode peserta) dalam sebuah daftar. 
//           Ini sangat bermanfaat saat ingin tahu urutan data tertentu dalam tabel.
//         </p>
//         <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
//         <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
//           <li>MATCH mencari data tertentu dan mengembalikan posisinya (baris ke berapa).</li>
//           <li>Digunakan untuk menghubungkan data yang berkaitan, seperti INDEX + MATCH.</li>
//           <li>Membantu pencarian otomatis saat jumlah data banyak.</li>
//         </ul>
//       </div>

//        {/* Header Judul */}
//        <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
//         Studi Kasus 3: CHOOSE
//       </h2>

//       {/* Pengantar Masalah */}
//       <div>
//         <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
//           Kamu adalah seorang siswa yang mengikuti kegiatan <span className="font-semibold">ekstrakurikuler</span> di sekolah. 
//           Setiap hari memiliki jadwal ekstrakurikuler yang berbeda. Temanmu bertanya, 
//           “Kalau hari ke-2 itu jadwalnya apa, ya?” Kamu bisa menggunakan fungsi <span className="font-semibold">CHOOSE</span> 
//            untuk menentukan jadwal berdasarkan nomor hari.
//         </p>
//       </div>

//       {/* Tabel Data */}
//       <div className="flex flex-col items-center mt-6">
//         <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel. Jadwal Ekstrakurikuler</p>
//         <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
//           <thead>
//             <tr className="bg-[#255F38] text-white">
//               <th className="border border-green-600 px-4 py-2">Nomor</th>
//               <th className="border border-green-600 px-4 py-2">Kegiatan</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               [1, "Futsal"],
//               [2, "PMR"],
//               [3, "Paduan Suara"],
//               [4, "Pramuka"],
//             ].map((row, index) => (
//               <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
//                 {row.map((cell, i) => (
//                   <td key={i} className="border border-green-600 px-4 py-2">{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Penyelesaian CT */}
//       <div className="space-y-8 mt-10">
//         {/* Dekomposisi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Terdapat daftar kegiatan ekstrakurikuler berdasarkan hari (dalam bentuk nomor).</li>
//             <li>Tujuan: Menemukan kegiatan berdasarkan nomor hari tertentu.</li>
//           </ul>
//         </div>

//         {/* Pengenalan Pola */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Setiap nomor mewakili satu hari dengan kegiatan tertentu.</li>
//             <li>Pola: Nomor hari berhubungan langsung dengan urutan kegiatan.</li>
//           </ul>
//         </div>

//         {/* Abstraksi */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Filter className="w-5 h-5 mr-2" /> Abstraksi
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Kita hanya fokus pada nomor hari dan daftar kegiatan.</li>
//             <li>Gunakan CHOOSE untuk memilih kegiatan berdasarkan nomor hari.</li>
//           </ul>
//         </div>

//         {/* Algoritma */}
//         <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//           <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//             <Code className="w-5 h-5 mr-2" /> Algoritma
//           </div>
//           <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
//             <li>Gunakan fungsi CHOOSE untuk menampilkan kegiatan berdasarkan nomor:</li>
//             <li>
//               Rumus:
//               <div className="bg-gray-100 p-2 rounded mt-1">
//                 =CHOOSE(2; "Futsal"; "PMR"; "Paduan Suara"; "Pramuka")
//               </div>
//               Artinya:
//               <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
//                 <li>Angka 2 = nomor hari yang dipilih.</li>
//                 <li>Setiap pilihan di dalam CHOOSE mewakili urutan kegiatan sesuai nomor hari.</li>
//                 <li>Hasilnya: <span className="font-semibold">PMR</span>, karena itu urutan ke-2.</li>
//               </ul>
//             </li>
//           </ul>
//           <div className="flex justify-center mt-4">
//             <iframe
//               width="80%"
//               height="400"
//               style={{ border: '1px solid #e7e7e7' }}
//               frameBorder="0"
//               scrolling="no"
//               src="https://sheet.zohopublic.com/sheet/published/u4xoabea134672a124461a1ae7e5696634ec3?mode=embed"
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       {/* Kesimpulan dan Analisis */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6">
//           Fungsi CHOOSE berguna untuk memilih nilai berdasarkan posisi tertentu dalam daftar. 
//           Sangat cocok digunakan ketika kita memiliki pilihan tetap dan ingin mengambil salah satunya secara cepat.
//         </p>
//         <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
//         <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
//           <li>Mempermudah pengambilan data berdasarkan urutan (nomor).</li>
//           <li>Cocok untuk memilih kegiatan, jadwal, atau kategori yang datanya tetap.</li>
//           <li>Lebih praktis dibanding mencari manual, terutama jika sering digunakan berulang.</li>
//         </ul>
//       </div>




 



//       {/* Tombol Navigasi */}
//       <div className="flex justify-between mt-8">
//           <a href="/pencarian-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition duration-300 text-base shadow-md">← Sebelumnya</a>
//           <a href="/aktivitas-lookup" className="bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-base shadow-md">Selanjutnya →</a>
//       </div>
//     </Layout>
//   );
// };

// export default ContohReference;


import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohReference = () => {
  return (
    <Layout>
      {/* Header Judul */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN FUNGSI REFERENCE
      </div>

      {/* Studi Kasus 1: INDEX */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 1: INDEX 
      </h2>

      {/* Pengantar Masalah */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          Kamu bekerja di perpustakaan sekolah dan bertanggung jawab atas daftar buku. Setiap buku memiliki kode unik, judul, dan stok. 
          Seorang guru bertanya: "Berapa stok buku dengan kode <span className='font-semibold'>B001</span>?" 
          Kamu bisa menggunakan fungsi <span className="font-semibold">INDEX</span> untuk mengambil stok berdasarkan posisi data yang sudah diketahui.
        </p>
      </div>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 5. Daftar Buku Perpustakaan</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Kode Buku</th>
              <th className="border border-green-600 px-4 py-2">Judul Buku</th>
              <th className="border border-green-600 px-4 py-2">Stok</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "B001", "Sejarah Indonesia", 10],
              [2, "B002", "Matematika Dasar", 15],
              [3, "B003", "Bahasa Inggris", 8],
              [4, "B004", "Fisika Modern", 12],
              [5, "B005", "Geografi Dunia", 7],
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
            <li>Menyiapkan tabel data berisi nomor, kode buku, judul, dan stok buku.</li>
            <li>Menentukan tujuan: menemukan stok buku berdasarkan kode unik B001.</li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Setiap baris mewakili satu buku dengan informasi lengkap.</li>
            <li>Stok buku berada di kolom ke-4, dan kode B001 ada di baris pertama dalam range stok.</li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-5 h-5 mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Fokus pada kolom stok dan baris yang sesuai dengan kode B001 (baris ke-1 dalam range).</li>
            <li>Menggunakan INDEX untuk mengambil data dari posisi tertentu.</li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> Algoritma
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Pilih tabel data yang berisi kode buku dan stok (range A3:D7).</li>
            <li>Tentukan nomor baris dan kolom data yang ingin diambil (baris ke-1, kolom stok).</li>
            <li>Tulis rumus INDEX dengan benar: 
              <code className="bg-gray-200 px-2 py-1 rounded"> =INDEX(D3:D7;1)</code><br />
              untuk menampilkan stok buku dengan kode B001, yaitu 10.
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
          Fungsi INDEX memungkinkan pengambilan data dari posisi tertentu dalam tabel berdasarkan baris dan kolom yang sudah diketahui.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Ideal untuk mengakses data spesifik tanpa perlu scrolling manual.</li>
          <li>Dapat dikombinasikan dengan MATCH untuk pencarian otomatis.</li>
          <li>Efektif pada tabel dengan banyak baris dan kolom terstruktur.</li>
        </ul>
      </div>

      {/* Studi Kasus 2: MATCH */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: MATCH 
      </h2>

      {/* Pengantar Masalah */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          Kamu adalah koordinator turnamen olahraga sekolah. Setiap peserta diberi kode identitas acak, nama, dan cabang olahraga yang diikuti. 
          Saat menyusun jadwal, seseorang bertanya: "Peserta dengan kode identitas <span className='font-semibold'>4821</span> ada di urutan ke berapa?" 
          Kamu bisa menggunakan fungsi <span className="font-semibold">MATCH</span> untuk menemukan posisi peserta berdasarkan kode acak tersebut.
        </p>
      </div>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 6. Daftar Peserta Turnamen</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Kode Identitas</th>
              <th className="border border-green-600 px-4 py-2">Nama Peserta</th>
              <th className="border border-green-600 px-4 py-2">Cabang Olahraga</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["4821", "Andi", "Bola Basket"],
              ["7392", "Budi", "Renang"],
              ["1509", "Citra", "Atletik"],
              ["9273", "Dedi", "Tenis Meja"],
              ["3648", "Eka", "Sepak Bola"],
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
            <li>Menyiapkan tabel data berisi kode identitas acak, nama, dan cabang olahraga peserta.</li>
            <li>Menentukan tujuan: menemukan posisi peserta berdasarkan kode identitas 4821.</li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Setiap baris mewakili satu peserta dengan kode identitas acak unik.</li>
            <li>Posisi peserta ditentukan oleh urutan kode identitas dalam kolom pertama.</li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-5 h-5 mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Fokus pada kolom kode identitas untuk mencari posisi kode 4821.</li>
            <li>Menggunakan MATCH untuk mengidentifikasi posisi dalam daftar berdasarkan nilai yang cocok.</li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> Algoritma
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Tentukan nilai yang ingin dicari, yaitu kode identitas 4821.</li>
            <li>Pilih daftar tempat mencari nilai, yaitu kolom kode identitas (A3:A7).</li>
            <li>Tulis rumus MATCH dengan benar:
            <code className="bg-gray-200 px-2 py-1 rounded">=MATCH(4821; A3:A7; 0)</code><br />
              Artinya:
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>4821 adalah kode identitas yang dicari.</li>
                <li>A2:A6 adalah kolom tempat pencarian dilakukan.</li>
                <li>0 artinya mencari kecocokan persis.</li>
                <li>Hasilnya: <span className="font-semibold">1</span>, karena 4821 berada di baris ke-1 dalam range.</li>
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
          Fungsi MATCH efektif untuk menemukan posisi data dalam daftar berdasarkan nilai yang ditentukan, seperti kode identitas acak.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Mengembalikan nomor posisi relatif dalam range yang ditentukan.</li>
          <li>Berguna untuk mengidentifikasi urutan data unik tanpa scrolling manual.</li>
          <li>Dapat dipadukan dengan INDEX untuk aplikasi pencarian yang lebih kompleks.</li>
        </ul>
      </div>

      {/* Studi Kasus 3: CHOOSE */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 3: CHOOSE
      </h2>

      {/* Pengantar Masalah */}
      <div>
        <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
          Kamu adalah anggota klub seni di sekolah. Setiap hari memiliki kegiatan seni yang berbeda berdasarkan nomor hari. 
          Temanmu bertanya: "Jika hari ke-3, kegiatan apa yang dijadwalkan?" Kamu bisa menggunakan fungsi <span className="font-semibold">CHOOSE</span> 
          untuk memilih kegiatan berdasarkan nomor hari.
        </p>
      </div>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 7. Jadwal Kegiatan Seni</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Nomor Hari</th>
              <th className="border border-green-600 px-4 py-2">Kegiatan Seni</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Lukis"],
              [2, "Tarian"],
              [3, "Musik"],
              [4, "Teater"],
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
            <li>Menyiapkan daftar kegiatan seni berdasarkan nomor hari.</li>
            <li>Menentukan tujuan: memilih kegiatan untuk hari ke-3.</li>
          </ul>
        </div>

        {/* Pengenalan Pola */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Nomor hari sesuai dengan urutan kegiatan seni dalam daftar.</li>
            <li>Hari ke-3 berhubungan dengan kegiatan di posisi ke-3.</li>
          </ul>
        </div>

        {/* Abstraksi */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Filter className="w-5 h-5 mr-2" /> Abstraksi
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Fokus pada nomor hari dan daftar kegiatan seni yang tersedia.</li>
            <li>Menggunakan CHOOSE untuk memilih berdasarkan indeks nomor hari.</li>
          </ul>
        </div>

        {/* Algoritma */}
        <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
          <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
            <Code className="w-5 h-5 mr-2" /> Algoritma
          </div>
          <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
            <li>Tentukan nomor urut (indeks) yang akan dipilih, yaitu hari ke-3.</li>
            <li>Tulis daftar nilai yang bisa dipilih: "Lukis", "Tarian", "Musik", "Teater".</li>
            <li>Tulis rumus CHOOSE dengan benar:
               <code className="bg-gray-200 px-2 py-1 rounded">  =CHOOSE(3; "Lukis"; "Tarian"; "Musik"; "Teater")</code><br />
              Artinya:
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>Angka 3 adalah nomor hari yang dipilih.</li>
                <li>Setiap pilihan mewakili urutan kegiatan sesuai nomor hari.</li>
                <li>Hasilnya: <span className="font-semibold">Musik</span>, karena itu kegiatan di urutan ke-3.</li>
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
          Fungsi CHOOSE memungkinkan pemilihan nilai dari daftar berdasarkan indeks tertentu.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Sesuai untuk memilih dari daftar tetap berdasarkan nomor urut.</li>
          <li>Mempermudah pengambilan data tanpa rumus kondisional.</li>
          <li>Efektif untuk jadwal atau opsi berurutan lainnya.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
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

export default ContohReference;