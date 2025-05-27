import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

// Daftar langkah-langkah untuk soal nomor 1 (drag and drop)
const langkahSorting = [
  "Klik judul kolom 'Nilai' dalam tabel siswa.",
  "Klik kanan pada judul kolom yang dipilih.",
  "Pilih 'Sort', lalu pilih metode pengurutan yang diinginkan.",
  "Pilih 'Descending' atau 'Ascending' untuk mengurutkan nilai.",
];

// Fungsi untuk mengacak urutan array (digunakan di soal nomor 1)
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const AktivitasPengelolaan = () => {
  // State untuk soal nomor 1: menyimpan langkah yang sudah disusun
  const [langkahDisusun, setLangkahDisusun] = useState([]);
  // State untuk soal nomor 1: menyimpan langkah yang belum disusun (acak)
  const [daftarLangkah, setDaftarLangkah] = useState([]);
  // State untuk soal nomor 1: pesan feedback
  const [pesanSoal1, setPesanSoal1] = useState("");
  // State untuk soal nomor 2: jawaban inputan pertama ("mengurutkan")
  const [jawabanSoal2a, setJawabanSoal2a] = useState("");
  // State untuk soal nomor 2: jawaban inputan kedua ("descending")
  const [jawabanSoal2b, setJawabanSoal2b] = useState("");
  // State untuk soal nomor 2: pesan feedback
  const [pesanSoal2, setPesanSoal2] = useState("");
  // State untuk soal nomor 3: jawaban ("descending")
  const [jawabanSoal3, setJawabanSoal3] = useState("");
  // State untuk soal nomor 3: pesan feedback
  const [pesanSoal3, setPesanSoal3] = useState("");
  // State untuk soal nomor 4: jawaban ("filtering")
  const [jawabanSoal4, setJawabanSoal4] = useState("");
  // State untuk soal nomor 4: pesan feedback
  const [pesanSoal4, setPesanSoal4] = useState("");
  // State untuk soal nomor 5: pilihan checkbox
  const [jawabanSoal5, setJawabanSoal5] = useState({
    menghapus: false,
    menyaring: false,
    menerapkan: false,
    mengubah: false,
  });
  // State untuk soal nomor 5: pesan feedback
  const [pesanSoal5, setPesanSoal5] = useState("");

  // Mengacak langkah saat halaman pertama kali dimuat
  useEffect(() => {
    setDaftarLangkah(shuffleArray(langkahSorting));
  }, []);

  // Fungsi untuk memeriksa jawaban soal nomor 1
  const periksaJawabanSoal1 = () => {
    const jawabanBenar = langkahSorting;
    const isCorrect =
      langkahDisusun.every((item, index) => item === jawabanBenar[index]) &&
      langkahDisusun.length === jawabanBenar.length;
    setPesanSoal1(
      isCorrect
        ? "Jawaban benar! Langkah-langkah ini mencerminkan cara yang tepat untuk mengurutkan nilai siswa."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  // Fungsi untuk mengosongkan jawaban soal nomor 1
  const kosongkanUrutan = () => {
    setLangkahDisusun([]);
    setDaftarLangkah(shuffleArray(langkahSorting));
    setPesanSoal1("");
  };

  // Fungsi untuk memeriksa jawaban soal nomor 2
  const periksaJawabanSoal2 = () => {
    const benar =
      jawabanSoal2a.trim().toLowerCase() === "mengurutkan" &&
      jawabanSoal2b.trim().toLowerCase() === "menyaring";
    setPesanSoal2(
      benar
        ? "Jawaban benar! Sorting mengurutkan data, sedangkan filtering menyaring data berdasarkan kriteria."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  // Fungsi untuk mengosongkan jawaban soal nomor 2
  const kosongkanJawabanSoal2 = () => {
    setJawabanSoal2a("");
    setJawabanSoal2b("");
    setPesanSoal2("");
  };

  // Fungsi untuk memeriksa jawaban soal nomor 3
  const periksaJawabanSoal3 = () => {
    const benar = jawabanSoal3.trim().toLowerCase() === "descending";
    setPesanSoal3(
      benar
        ? "Jawaban benar! Metode descending digunakan untuk mengurutkan dari nilai terbesar ke terkecil."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  // Fungsi untuk mengosongkan jawaban soal nomor 3
  const kosongkanJawabanSoal3 = () => {
    setJawabanSoal3("");
    setPesanSoal3("");
  };

  // Fungsi untuk memeriksa jawaban soal nomor 4
  const periksaJawabanSoal4 = () => {
    const benar = jawabanSoal4.trim().toLowerCase() === "filtering";
    setPesanSoal4(
      benar
        ? "Jawaban benar! Filtering digunakan untuk menampilkan data berdasarkan kategori tertentu."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  // Fungsi untuk mengosongkan jawaban soal nomor 4
  const kosongkanJawabanSoal4 = () => {
    setJawabanSoal4("");
    setPesanSoal4("");
  };

  // Fungsi untuk memeriksa jawaban soal nomor 5
  const periksaJawabanSoal5 = () => {
    const benar =
      jawabanSoal5.menyaring &&
      jawabanSoal5.menerapkan &&
      !jawabanSoal5.menghapus &&
      !jawabanSoal5.mengubah;
    setPesanSoal5(
      benar
        ? "Jawaban benar! Filtering menyaring data dan dapat diterapkan pada teks maupun angka."
        : "Jawaban salah. Ayo coba lagi!"
    );
  };

  // Fungsi untuk mengosongkan jawaban soal nomor 5
  const kosongkanJawabanSoal5 = () => {
    setJawabanSoal5({
      menghapus: false,
      menyaring: false,
      menerapkan: false,
      mengubah: false,
    });
    setPesanSoal5("");
  };

  // Fungsi untuk drag and drop (soal nomor 1)
  const handleDrag = (event, item) => {
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    setLangkahDisusun((prev) => {
      if (!prev.includes(data)) {
        return [...prev, data];
      }
      return prev;
    });
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  // Fungsi untuk menampilkan langkah yang bisa diseret (soal nomor 1)
  const renderLangkahSeret = (items) => {
    return items
      .filter((item) => !langkahDisusun.includes(item))
      .map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDrag(e, item)}
          className="border border-gray-400 p-3 rounded bg-white shadow-sm mb-2 cursor-move text-sm md:text-base text-gray-700"
        >
          {item}
        </div>
      ));
  };

  // Fungsi untuk memeriksa apakah semua jawaban benar
  const semuaJawabanBenar = () => {
    const langkahBenar = pesanSoal1 === "Jawaban benar! Langkah-langkah ini mencerminkan cara yang tepat untuk mengurutkan nilai siswa.";
    const soal2Benar = pesanSoal2 === "Jawaban benar! Sorting mengurutkan data, sedangkan filtering menyaring data berdasarkan kriteria.";
    const soal3Benar = pesanSoal3 === "Jawaban benar! Metode descending digunakan untuk mengurutkan dari nilai terbesar ke terkecil.";
    const soal4Benar = pesanSoal4 === "Jawaban benar! Filtering digunakan untuk menampilkan data berdasarkan kategori tertentu.";
    const soal5Benar = pesanSoal5 === "Jawaban benar! Filtering menyaring data dan dapat diterapkan pada teks maupun angka.";
    return langkahBenar && soal2Benar && soal3Benar && soal4Benar && soal5Benar;
  };

  return (
    <Layout>
      {/* Judul Halaman */}
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        AKTIVITAS PENGELOLAAN DATA
      </div>

      {/* Konten Utama dengan Latar Belakang Putih */}
      <div className="p-6 bg-white">
        {/* Soal 1: Susun langkah-langkah sorting */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">1.</span>
            Seret dan susun langkah-langkah berikut agar benar untuk mengurutkan nilai siswa dari tertinggi ke terendah:
          </p>
          <div className="px-4">
            <div className="mb-4">{renderLangkahSeret(daftarLangkah)}</div>
            <div
              className="border border-gray-400 p-4 rounded mb-4 min-h-[150px] bg-gray-50"
              onDrop={handleDrop}
              onDragOver={allowDrop}
            >
              {langkahDisusun.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-400 p-3 rounded bg-white shadow-sm mb-2 text-sm md:text-base text-gray-700"
                >
                  {index + 1}. {item}
                </div>
              ))}
            </div>
            <div className="flex items-center px-0 mb-2">
              <button
                onClick={periksaJawabanSoal1}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={kosongkanUrutan}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {pesanSoal1 && (
              <p
                className={`text-sm mt-2 font-bold ${
                  pesanSoal1.includes("Jawaban benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {pesanSoal1}
              </p>
            )}
          </div>
        </div>

        {/* Soal 2: Isi titik-titik */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">2.</span>
            Sorting digunakan untuk ... data berdasarkan kriteria tertentu,
            sedangkan filtering digunakan untuk ... data yang tidak memenuhi syarat tertentu.
          </p>
          <div className="px-4 space-y-3">
            <div className="flex items-center gap-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                Jawaban 1:
              </label>
              <input
                type="text"
                className="border p-2 rounded-lg w-full max-w-md text-sm md:text-base text-gray-700"
                placeholder="Jawaban..."
                value={jawabanSoal2a}
                onChange={(e) => setJawabanSoal2a(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                Jawaban 2:
              </label>
              <input
                type="text"
                className="border p-2 rounded-lg w-full max-w-md text-sm md:text-base text-gray-700"
                placeholder="Jawaban..."
                value={jawabanSoal2b}
                onChange={(e) => setJawabanSoal2b(e.target.value)}
              />
            </div>
            <div className="flex items-center px-0 mb-2">
              <button
                onClick={periksaJawabanSoal2}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={kosongkanJawabanSoal2}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {pesanSoal2 && (
              <p
                className={`text-sm mt-2 font-bold ${
                  pesanSoal2.includes("Jawaban benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {pesanSoal2}
              </p>
            )}
          </div>
        </div>

        {/* Soal 3: Isi metode pengurutan */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">3.</span>
            Seorang guru ingin mengetahui siswa dengan nilai tertinggi. Ia harus
            mengurutkan data dari nilai terbesar ke terkecil menggunakan metode ...
          </p>
          <div className="flex items-center px-4 mb-2">
            <label className="text-gray-700 text-sm md:text-base font-medium">
              Jawaban:
            </label>
            <input
              type="text"
              className="border p-2 rounded-lg w-full max-w-md text-sm md:text-base text-gray-700 ml-2"
              placeholder="Jawaban..."
              value={jawabanSoal3}
              onChange={(e) => setJawabanSoal3(e.target.value)}
            />
            <button
              onClick={periksaJawabanSoal3}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={kosongkanJawabanSoal3}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {pesanSoal3 && (
            <p
              className={`text-sm mt-2 font-bold px-4 ${
                pesanSoal3.includes("Jawaban benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {pesanSoal3}
            </p>
          )}
        </div>

        {/* Soal 4: Isi fitur yang digunakan */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">4.</span>
            Seorang manajer toko ingin menampilkan hanya produk dengan kategori
            "Elektronik". Ia harus menggunakan fitur ...
          </p>
          <div className="flex items-center px-4 mb-2">
            <label className="text-gray-700 text-sm md:text-base font-medium">
              Jawaban:
            </label>
            <input
              type="text"
              className="border p-2 rounded-lg w-full max-w-md text-sm md:text-base text-gray-700 ml-2"
              placeholder="Jawaban..."
              value={jawabanSoal4}
              onChange={(e) => setJawabanSoal4(e.target.value)}
            />
            <button
              onClick={periksaJawabanSoal4}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={kosongkanJawabanSoal4}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {pesanSoal4 && (
            <p
              className={`text-sm mt-2 font-bold px-4 ${
                pesanSoal4.includes("Jawaban benar") ? "text-green-700" : "text-red-700"
              }`}
            >
              {pesanSoal4}
            </p>
          )}
        </div>

        {/* Soal 5: Pilih pernyataan yang benar */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">5.</span>
            Pilih semua pernyataan yang benar tentang filtering:
          </p>
          <div className="px-4 flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={jawabanSoal5.menghapus}
                onChange={() =>
                  setJawabanSoal5({ ...jawabanSoal5, menghapus: !jawabanSoal5.menghapus })
                }
                className="mr-2"
              />
              Menghapus data yang tidak sesuai.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={jawabanSoal5.menyaring}
                onChange={() =>
                  setJawabanSoal5({ ...jawabanSoal5, menyaring: !jawabanSoal5.menyaring })
                }
                className="mr-2"
              />
              Menyaring data berdasarkan kriteria tertentu.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={jawabanSoal5.menerapkan}
                onChange={() =>
                  setJawabanSoal5({ ...jawabanSoal5, menerapkan: !jawabanSoal5.menerapkan })
                }
                className="mr-2"
              />
              Dapat diterapkan pada teks maupun angka.
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={jawabanSoal5.mengubah}
                onChange={() =>
                  setJawabanSoal5({ ...jawabanSoal5, mengubah: !jawabanSoal5.mengubah })
                }
                className="mr-2"
              />
              Mengubah data yang tidak memenuhi kriteria.
            </label>
            <div className="flex items-center px-0 mb-2">
              <button
                onClick={periksaJawabanSoal5}
                className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Periksa
              </button>
              <button
                onClick={kosongkanJawabanSoal5}
                className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </div>
            {pesanSoal5 && (
              <p
                className={`text-sm mt-2 font-bold ${
                  pesanSoal5.includes("Jawaban benar") ? "text-green-700" : "text-red-700"
                }`}
              >
                {pesanSoal5}
              </p>
            )}
          </div>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-8 px-4">
          <button
            onClick={() => (window.location.href = "/aktivitas-peringkasan")}
            className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
          >
            ← Sebelumnya
          </button>
          <button
            onClick={() => (window.location.href = "/petunjuk-kuis1")}
            className={`px-5 py-2 text-base text-white transition duration-300 rounded-lg shadow-md cursor-pointer ${
              semuaJawabanBenar()
                ? "bg-[#255F38] hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!semuaJawabanBenar()}
          >
            Mulai Kuis →
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasPengelolaan;