import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle } from "lucide-react";

const ContohPeringkasan = () => {
  return (
    <Layout>
      {/* Header utama */}
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        CONTOH PENERAPAN PERINGKASAN DATA
      </div>

      {/* Studi Kasus 1: SUMIF */}
      <h2 className="text-lg md:text-xl font-bold mt-8 mb-4 px-4 text-gray-800">
        Studi Kasus 1: SUMIF
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Kamu adalah bendahara kelas yang sedang mencatat pembayaran iuran kelas dari teman-temanmu. 
        Setiap siswa membayar iuran untuk beberapa kegiatan berbeda, seperti kebersihan kelas dan kas kelas. 
        Kamu ingin mengetahui jumlah total uang yang terkumpul untuk setiap kategori kegiatan. 
        Daripada menghitung manual satu per satu, kamu bisa menggunakan fungsi <span className="font-semibold">SUMIF</span> agar lebih cepat dan akurat.
      </p>

      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 9. Daftar Pembayaran Iuran</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Nama Siswa</th>
              <th className="border border-green-600 px-4 py-2">Kategori</th>
              <th className="border border-green-600 px-4 py-2">Jumlah (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Andi", "Kebersihan", 5000],
              [2, "Budi", "Kas", 10000],
              [3, "Citra", "Kebersihan", 5000],
              [4, "Dina", "Kas", 10000],
              [5, "Eko", "Kebersihan", 5000],
              [6, "Fira", "Kas", 10000],
              [7, "Gita", "Kebersihan", 5000],
              [8, "Hendra", "Kas", 10000],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">
                    {i === 3 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cell) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Penyelesaian dengan Computational Thinking */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tentukan tujuan: menghitung total iuran untuk kategori "Kebersihan" dan "Kas".</li>
          <li>Identifikasi data: tabel berisi kolom Nama Siswa, Kategori, dan Jumlah (Rp).</li>
        </ul>
      </div>

      {/* PENGENALAN POLA */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pola data: beberapa siswa membayar untuk kategori yang sama (Kebersihan atau Kas).</li>
          <li>Pola dapat digunakan untuk menjumlahkan total berdasarkan kategori yang sama.</li>
        </ul>
      </div>

      {/* ABSTRAKSI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Abaikan kolom "Nama Siswa" yang tidak relevan.</li>
          <li>Fokus pada kolom "Kategori" dan "Jumlah (Rp)" untuk perhitungan.</li>
          <li>Gunakan fungsi SUMIF untuk menyaring dan menjumlahkan data berdasarkan kategori.</li>
        </ul>
      </div>

      {/* ALGORITMA */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pilih range data yang akan diperiksa: kolom "Kategori" (C2:C9).</li>
          <li>Tentukan kriteria: "Kebersihan".</li>
          <li>Pilih sum_range: kolom "Jumlah (Rp)" (D2:D9).</li>
          <li>Masukkan rumus SUMIF di sel hasil (misal G1):
            <code className="bg-gray-200 px-2 py-1 rounded">=SUMIF(C2:C9;"Kebersihan";D2:D9)</code><br />
          </li>
          <li>Tekan Enter untuk mendapatkan total iuran "Kebersihan".</li>
          <li>Hasil: Total iuran untuk "Kebersihan" adalah Rp20.000.</li>
          <li>Ulangi untuk kategori "Kas" dengan rumus:
            <code className="bg-gray-200 px-2 py-1 rounded">=SUMIF(C2:C9;"Kas";D2:D9)</code><br />
          </li>
          <li>Tekan Enter untuk mendapatkan total iuran "Kas".</li>
          <li>Hasil: Total iuran untuk "Kas" adalah Rp40.000.</li>
        </ul>
        <div className="flex justify-center">
          <iframe 
            width="80%" 
            height="400" 
            style={{ border: '1px solid #e7e7e7' }} 
            frameBorder="0" 
            scrolling="no" 
            src="https://sheet.zohopublic.com/sheet/published/4yfvb369a32fdc2834f008ce16e21131901a1?mode=embed">
          </iframe>
        </div>
      </div>

      {/* KESIMPULAN DAN ANALISIS */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Dengan <span className="font-semibold">SUMIF</span>, siswa dapat menghitung total pengeluaran sesuai kategori secara otomatis, lebih cepat, dan lebih akurat.
        </p>
        <p className="text-gray-700 text-sm font-semibold md:text-base">Analisis</p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base mt-4 space-y-2">
          <li>Tanpa SUMIF, harus menjumlahkan kategori satu per satu secara manual.</li>
          <li>SUMIF membantu menyaring dan menjumlahkan data sekaligus dalam satu rumus.</li>
          <li>Pastikan data kategori konsisten agar hasil perhitungan tidak salah.</li>
        </ul>
      </div>

      {/* Studi Kasus 2: SUMIFS */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 2: SUMIFS
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Kamu adalah bendahara kelas. Setiap bulan kamu mencatat pengeluaran kelas untuk berbagai keperluan, seperti alat kebersihan, dekorasi, dan konsumsi. Sekarang kamu ingin tahu berapa total pengeluaran untuk <span className="font-semibold">"Alat Kebersihan"</span> di bulan <span className="font-semibold">"Maret"</span>. Daripada menghitung satu per satu secara manual, kamu bisa menggunakan <span className="font-semibold">fungsi SUMIFS</span> agar hasilnya otomatis.
      </p>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 10. Pengeluaran Kelas</p>
        <table className="border-collapse border border-green-800 w-full md:w-3/4 text-center">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">Bulan</th>
              <th className="border border-green-600 px-4 py-2">Jenis</th>
              <th className="border border-green-600 px-4 py-2">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Januari", "Alat Kebersihan", 30000],
              ["Januari", "Dekorasi", 25000],
              ["Februari", "Alat Kebersihan", 20000],
              ["Februari", "Konsumsi", 15000],
              ["Maret", "Alat Kebersihan", 40000],
              ["Maret", "Dekorasi", 30000],
              ["Maret", "Alat Kebersihan", 35000],
              ["April", "Konsumsi", 20000],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-green-600 px-4 py-2">
                    {i === 2 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(cell) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tentukan tujuan: menghitung total pengeluaran untuk "Alat Kebersihan" di bulan "Maret".</li>
          <li>Identifikasi data: tabel berisi kolom Bulan, Jenis, dan Jumlah.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pola data: setiap baris memiliki struktur Bulan, Jenis, dan Jumlah yang berulang.</li>
          <li>Pola dapat digunakan untuk menjumlahkan "Jumlah" berdasarkan Bulan "Maret" dan Jenis "Alat Kebersihan".</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Abaikan data yang tidak relevan, fokus pada kolom Bulan, Jenis, dan Jumlah.</li>
          <li>Gunakan fungsi SUMIFS untuk menyaring berdasarkan dua kriteria: Bulan dan Jenis.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pilih sum_range: kolom "Jumlah" (C2:C9).</li>
          <li>Pilih criteria_range1: kolom "Bulan" (A2:A9) dan criteria1: "Maret".</li>
          <li>Pilih criteria_range2: kolom "Jenis" (B2:B9) dan criteria2: "Alat Kebersihan".</li>
          <li>Masukkan rumus SUMIFS di sel hasil (misal E2):
            <code className="bg-gray-200 px-2 py-1 rounded">=SUMIFS(C2:C9;A2:A9;"Maret";B2:B9;"Alat Kebersihan")</code><br />
          </li>
          <li>Tekan Enter untuk mendapatkan total pengeluaran.</li>
          <li>Hasil: Total pengeluaran untuk "Alat Kebersihan" di bulan "Maret" adalah Rp75.000.</li>
        </ul>
        <div className="flex justify-center">
          <iframe 
            width="80%" 
            height="400" 
            style={{ border: '1px solid #e7e7e7' }} 
            frameBorder="0" 
            scrolling="no" 
            src="https://sheet.zohopublic.com/sheet/published/4yfvb13af0506b3624931b03051e9daf94597?mode=embed">
          </iframe>
        </div>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Dengan SUMIFS, kamu bisa menjumlahkan pengeluaran berdasarkan beberapa kriteria secara otomatis dan cepat.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Lebih cepat dan praktis dibanding menghitung manual.</li>
          <li>Bisa filter lebih dari satu syarat sekaligus.</li>
          <li>Pastikan kriteria ditulis konsisten agar hasilnya benar.</li>
        </ul>
      </div>

      {/* Studi Kasus 3: COUNTIF */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 3: COUNTIF
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Kamu sedang mencatat semua film yang kamu tonton selama liburan. Di spreadsheet, kamu menuliskan <span className="font-semibold">judul film, genre,</span> dan <span className="font-semibold">rating</span>. Sekarang kamu ingin tahu <span className="font-semibold">berapa banyak film bergenre "Petualangan"</span> yang sudah kamu tonton. Kamu akan menggunakan fungsi <span className="font-semibold">COUNTIF</span> untuk menghitungnya secara otomatis.
      </p>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 11. Daftar Film yang Ditonton</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Judul Film</th>
              <th className="border border-green-600 px-4 py-2">Genre</th>
              <th className="border border-green-600 px-4 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Jungle Adventure", "Petualangan", 5],
              [2, "Galaxy Wars", "Fiksi Ilmiah", 4],
              [3, "Treasure Island", "Petualangan", 5],
              [4, "Funny Days", "Komedi", 3],
              [5, "Mount Quest", "Petualangan", 4],
              [6, "Love in Summer", "Romantis", 2],
              [7, "Spy Mission", "Aksi", 4],
              [8, "Ocean Quest", "Petualangan", 5],
              [9, "Magic School", "Fantasi", 4],
              [10, "Jungle Return", "Petualangan", 4],
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

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tentukan tujuan: menghitung jumlah film bergenre "Petualangan".</li>
          <li>Identifikasi data: tabel berisi kolom Judul Film, Genre, dan Rating.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pola data: setiap baris mewakili satu film dengan genre yang mungkin berulang (contoh: Petualangan).</li>
          <li>Pola dapat digunakan untuk menghitung jumlah film dengan genre tertentu.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Abaikan kolom "Judul Film" dan "Rating" yang tidak relevan.</li>
          <li>Fokus pada kolom "Genre" untuk menghitung jumlah film tertentu.</li>
          <li>Gunakan fungsi COUNTIF untuk menyaring berdasarkan satu kriteria.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pilih range data yang akan diperiksa: kolom "Genre" (C2:C11).</li>
          <li>Tentukan kriteria: "Petualangan".</li>
          <li>Masukkan rumus COUNTIF di sel hasil (misal F2):
            <code className="bg-gray-200 px-2 py-1 rounded">=COUNTIF(C2:C11;"Petualangan")</code><br />
          </li>
          <li>Tekan Enter untuk mendapatkan jumlah film bergenre "Petualangan".</li>
          <li>Hasil: Jumlah film bergenre "Petualangan" adalah 6.</li>
        </ul>
        <div className="flex justify-center">
          <iframe 
            width="80%" 
            height="400" 
            style={{ border: '1px solid #e7e7e7' }} 
            frameBorder="0" 
            scrolling="no" 
            src="https://sheet.zohopublic.com/sheet/published/4yfvb546e313018d74fba81dbe3f53d0a88e4?mode=embed">
          </iframe>
        </div>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Dengan COUNTIF, kamu bisa menghitung jumlah data berdasarkan satu kriteria, secara otomatis dan cepat.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Cocok untuk menghitung data berulang seperti genre, warna, atau nilai.</li>
          <li>Menghindari kesalahan hitung manual.</li>
          <li>Pastikan kriteria ejaannya benar agar hasil akurat.</li>
        </ul>
      </div>

      {/* Studi Kasus 4: COUNTIFS */}
      <h2 className="text-lg md:text-xl font-bold mt-12 mb-4 px-4 text-gray-800">
        Studi Kasus 4: COUNTIFS
      </h2>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Sebagai anggota OSIS, kamu diminta untuk mendata kehadiran peserta dalam kegiatan "Senam Pagi". Kamu mencatat data peserta yang berisi <span className="font-semibold">nama, kelas, jenis kelamin,</span> dan <span className="font-semibold">status kehadiran</span>. Sekarang kamu ingin mengetahui <span className="font-semibold">berapa siswa perempuan dari kelas 8A yang hadir</span>. Untuk itu, kamu akan menggunakan fungsi <span className="font-semibold">COUNTIFS</span>.
      </p>

      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">Tabel 12. Kehadiran Peserta Senam Pagi</p>
        <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">No</th>
              <th className="border border-green-600 px-4 py-2">Nama</th>
              <th className="border border-green-600 px-4 py-2">Kelas</th>
              <th className="border border-green-600 px-4 py-2">Jenis Kelamin</th>
              <th className="border border-green-600 px-4 py-2">Kehadiran</th>
            </tr>
          </thead>
          <tbody>
            {[
              [1, "Alya", "8A", "Perempuan", "Hadir"],
              [2, "Raka", "8A", "Laki-laki", "Hadir"],
              [3, "Salsa", "8A", "Perempuan", "Hadir"],
              [4, "Bima", "8A", "Laki-laki", "Tidak Hadir"],
              [5, "Nadia", "8B", "Perempuan", "Hadir"],
              [6, "Farhan", "8B", "Laki-laki", "Hadir"],
              [7, "Nisa", "8A", "Perempuan", "Hadir"],
              [8, "Iqbal", "8C", "Laki-laki", "Tidak Hadir"],
              [9, "Zahra", "8A", "Perempuan", "Tidak Hadir"],
              [10, "Putri", "8A", "Perempuan", "Hadir"],
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

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-6">
        Penyelesaian dengan <span className="font-semibold italic">Computational Thinking:</span>
      </p>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Tentukan tujuan: menghitung jumlah siswa perempuan dari kelas 8A yang hadir.</li>
          <li>Identifikasi data: tabel berisi kolom Nama, Kelas, Jenis Kelamin, dan Kehadiran.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="w-5 h-5 mr-2" /> Pengenalan Pola
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pola data: setiap baris mewakili satu siswa dengan informasi Kelas, Jenis Kelamin, dan Kehadiran yang berulang.</li>
          <li>Pola dapat digunakan untuk menghitung jumlah siswa berdasarkan kriteria tertentu.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="w-5 h-5 mr-2" /> Abstraksi
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Abaikan kolom "Nama" yang tidak relevan.</li>
          <li>Fokus pada kolom "Kelas", "Jenis Kelamin", dan "Kehadiran" untuk menghitung berdasarkan tiga kriteria.</li>
          <li>Gunakan fungsi COUNTIFS untuk menyaring data berdasarkan beberapa kriteria.</li>
        </ul>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="w-5 h-5 mr-2" /> Algoritma
        </div>
        <ul className="text-gray-700 list-disc pl-6 ml-6 space-y-1 mt-6">
          <li>Pilih criteria_range1: kolom "Kelas" (C2:C11) dan criteria1: "8A".</li>
          <li>Pilih criteria_range2: kolom "Jenis Kelamin" (D2:D11) dan criteria2: "Perempuan".</li>
          <li>Pilih criteria_range3: kolom "Kehadiran" (E2:E11) dan criteria3: "Hadir".</li>
          <li>Masukkan rumus COUNTIFS di sel hasil (misal G2):
            <code className="bg-gray-200 px-2 py-1 rounded">=COUNTIFS(C2:C11;"8A";D2:D11;"Perempuan";E2:E11;"Hadir")</code><br />
          </li>
          <li>Tekan Enter untuk mendapatkan jumlah siswa perempuan 8A yang hadir.</li>
          <li>Hasil: Jumlah siswa perempuan dari kelas 8A yang hadir adalah 4.</li>
        </ul>
        <div className="flex justify-center">
          <iframe 
            width="80%" 
            height="400" 
            style={{ border: '1px solid #e7e7e7' }} 
            frameBorder="0" 
            scrolling="no" 
            src="https://sheet.zohopublic.com/sheet/published/2vh2060ce0212595c458d974d5650e70b5a3f?mode=embed">
          </iframe>
        </div>
      </div>

      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <CheckCircle className="w-5 h-5 mr-2" /> Kesimpulan & Analisis
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6">
          Fungsi COUNTIFS sangat membantu untuk menghitung data yang memenuhi lebih dari satu syarat secara akurat.
        </p>
        <p className="text-gray-700 font-semibold text-sm md:text-base">Analisis:</p>
        <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mt-4 space-y-2">
          <li>Lebih mudah dan pasti karena tidak menggunakan simbol pencocokan (wildcard).</li>
          <li>Membantu OSIS atau guru melihat jumlah peserta aktif secara cepat.</li>
          <li>Dapat digunakan dalam berbagai kegiatan, seperti lomba, upacara, atau pelatihan.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8">
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

export default ContohPeringkasan;