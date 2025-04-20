import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const langkahSorting = [
  "Klik judul kolom 'Nilai' dalam tabel siswa.",
  "Pilih 'Sort', lalu pilih metode pengurutan yang diinginkan.",
  "Pilih 'Descending' atau 'Ascending' untuk mengurutkan nilai.",
  "Klik kanan pada judul kolom yang dipilih.",
];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const AktivitasSiswa = () => {
  const [urutan, setUrutan] = useState([]);
  const [bank, setBank] = useState([]);
  const [jawaban2, setJawaban2] = useState("");
  const [feedback2, setFeedback2] = useState("");
  const [jawaban3, setJawaban3] = useState("");
  const [feedback3, setFeedback3] = useState("");
  const [jawaban4, setJawaban4] = useState("");
  const [feedback4, setFeedback4] = useState("");
  const [jawaban5, setJawaban5] = useState({
    menghapus: false,
    menyaring: false,
    menerapkan: false,
    mengubah: false,
  });
  const [feedback5, setFeedback5] = useState("");

  useEffect(() => {
    setBank(shuffleArray(langkahSorting));
  }, []);

  const cekJawaban2 = () => {
    setFeedback2(
      jawaban2.trim().toLowerCase() === "mengurutkan"
        ? "✅ Jawaban benar!"
        : "❌ Jawaban salah. Coba lagi!"
    );
  };

  const resetJawaban2 = () => {
    setJawaban2("");
    setFeedback2("");
  };

  const cekJawaban3 = () => {
    setFeedback3(
      jawaban3.trim().toLowerCase() === "descending"
        ? "✅ Jawaban benar!"
        : "❌ Jawaban salah. Coba lagi!"
    );
  };

  const resetJawaban3 = () => {
    setJawaban3("");
    setFeedback3("");
  };

  const cekJawaban4 = () => {
    setFeedback4(
      jawaban4.trim().toLowerCase() === "filtering"
        ? "✅ Jawaban benar!"
        : "❌ Jawaban salah. Coba lagi!"
    );
  };

  const resetJawaban4 = () => {
    setJawaban4("");
    setFeedback4("");
  };

  const cekJawaban5 = () => {
    const benar =
      jawaban5.menyaring &&
      jawaban5.menerapkan &&
      !jawaban5.menghapus &&
      !jawaban5.mengubah;
    setFeedback5(benar ? "✅ Jawaban benar!" : "❌ Jawaban salah. Coba lagi!");
  };

  const resetJawaban5 = () => {
    setJawaban5({
      menghapus: false,
      menyaring: false,
      menerapkan: false,
      mengubah: false,
    });
    setFeedback5("");
  };

  const handleDrag = (event, item) => {
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    setUrutan((prev) => {
      if (!prev.includes(data)) {
        return [...prev, data];
      }
      return prev;
    });
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const renderDraggableItems = (items) => {
    return items
      .filter((item) => !urutan.includes(item))
      .map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDrag(e, item)}
          className="border border-gray-400 p-2 rounded bg-white shadow-sm mb-2 cursor-move"
        >
          {item}
        </div>
      ));
  };

  const resetUrutan = () => {
    setUrutan([]);
    setBank(shuffleArray(langkahSorting)); // Reset bank to a new shuffled order
  };

  return (
    <Layout>
      <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
        Aktivitas Pengelolaan Data{" "}
      </h1>

      <div className="bg-green-100 text-green-900 border border-green-400 p-4 rounded mx-4 mb-6">
        <p className="text-sm md:text-base">
          🎯 <b>Petunjuk:</b> Kerjakan semua soal di bawah ini dengan mencermati
          tabel data yang relevan. Jika semua jawabanmu benar, maka tombol
          "Mulai Kuis" di bawah akan aktif.
        </p>
      </div>

      {/* Soal 1 */}
      <div className="px-4 mb-6">
        <p className="text-gray-700 text-sm md:text-base mb-2">
          1. Seret dan jatuhkan langkah-langkah berikut ke dalam urutan yang
          benar untuk mengurutkan nilai siswa dari yang tertinggi ke yang
          terendah:
        </p>
        <div className="mb-2">{renderDraggableItems(bank)}</div>
        <div
          className="border border-gray-400 p-4 rounded mb-2 min-h-[100px] bg-gray-50"
          onDrop={handleDrop}
          onDragOver={allowDrop}
        >
          {urutan.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 p-2 rounded bg-white shadow-sm mb-2"
            >
              {index + 1}. {item}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={cekJawaban5}
            className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
          >
            Periksa
          </button>
          <button
            onClick={resetUrutan}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
        {feedback5 && <p className="mt-2 font-semibold">{feedback5}</p>}
      </div>

      {/* Soal 2 */}
      <div className="px-4 mb-6">
        <p className="text-gray-700 text-sm md:text-base mb-2">
          2. Sorting digunakan untuk{" "}
          <input
            type="text"
            className="w-25 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
            placeholder="Jawaban..."
            value={jawaban2}
            onChange={(e) => setJawaban2(e.target.value)}
          />{" "}
          data berdasarkan kriteria tertentu, sedangkan filtering digunakan
          untuk{" "}
          <input
            type="text"
            className="w-25 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
            placeholder="Jawaban..."
            value={jawaban3}
            onChange={(e) => setJawaban3(e.target.value)}
          />{" "}
          data yang tidak memenuhi syarat tertentu.
        </p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={cekJawaban2}
            className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
          >
            Periksa
          </button>
          <button
            onClick={resetJawaban2}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
        {feedback2 && <p className="mt-2 font-semibold">{feedback2}</p>}
      </div>

      {/* Soal 3 */}
      <div className="px-4 mb-6">
        <p className="text-gray-700 text-sm md:text-base mb-2">
          3. Seorang guru ingin mengetahui siswa dengan nilai tertinggi. Ia
          harus mengurutkan data dari nilai terbesar ke terkecil menggunakan
          metode{" "}
          <input
            type="text"
            className="w-25 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
            placeholder="Jawaban..."
            value={jawaban4}
            onChange={(e) => setJawaban4(e.target.value)}
          />
          .
        </p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={cekJawaban3}
            className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
          >
            Periksa
          </button>
          <button
            onClick={resetJawaban3}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
        {feedback3 && <p className="mt-2 font-semibold">{feedback3}</p>}
      </div>

      {/* Soal 4 */}
      <div className="px-4 mb-6">
        <p className="text-gray-700 text-sm md:text-base mb-2">
          4. Seorang manajer toko ingin menampilkan hanya produk dengan kategori
          "Elektronik". Ia harus menggunakan fitur{" "}
          <input
            type="text"
            className="w-25 px-2 py-1 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-300"
            placeholder="Jawaban..."
            value={jawaban4}
            onChange={(e) => setJawaban4(e.target.value)}
          />
          .
        </p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={cekJawaban4}
            className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
          >
            Periksa
          </button>
          <button
            onClick={resetJawaban4}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
        {feedback4 && <p className="mt-2 font-semibold">{feedback4}</p>}
      </div>

      {/* Soal 5 */}
      <div className="px-4 mb-6">
        <p className="text-gray-700 text-sm md:text-base mb-2">
          5. Pilih semua pertanyaan yang benar tentang filtering:
        </p>
        <div className="flex flex-col">
          <label>
            <input
              type="checkbox"
              checked={jawaban5.menghapus}
              onChange={() =>
                setJawaban5({ ...jawaban5, menghapus: !jawaban5.menghapus })
              }
            />
            Menghapus data yang tidak sesuai.
          </label>
          <label>
            <input
              type="checkbox"
              checked={jawaban5.menyaring}
              onChange={() =>
                setJawaban5({ ...jawaban5, menyaring: !jawaban5.menyaring })
              }
            />
            Menyaring data berdasarkan kriteria tertentu.
          </label>
          <label>
            <input
              type="checkbox"
              checked={jawaban5.menerapkan}
              onChange={() =>
                setJawaban5({ ...jawaban5, menerapkan: !jawaban5.menerapkan })
              }
            />
            Dapat diterapkan pada teks maupun angka.
          </label>
          <label>
            <input
              type="checkbox"
              checked={jawaban5.mengubah}
              onChange={() =>
                setJawaban5({ ...jawaban5, mengubah: !jawaban5.mengubah })
              }
            />
            Mengubah data yang tidak memenuhi kriteria.
          </label>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={cekJawaban5}
            className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
          >
            Periksa
          </button>
          <button
            onClick={resetJawaban5}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
        {feedback5 && <p className="mt-2 font-semibold">{feedback5}</p>}
      </div>

      <div className="flex justify-between mt-10 px-4">
        <a
          href="/aktivitas-peringkasan"
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Sebelumnya
        </a>
        <a
          href={
            urutan.length === langkahSorting.length &&
            feedback2.startsWith("✅") &&
            feedback3.startsWith("✅") &&
            feedback4.startsWith("✅") &&
            feedback5.startsWith("✅")
              ? "/petunjuk-kuis1"
              : "#"
          }
          className={`px-5 py-2 rounded-lg text-white ${
            urutan.length === langkahSorting.length &&
            feedback2.startsWith("✅") &&
            feedback3.startsWith("✅") &&
            feedback4.startsWith("✅") &&
            feedback5.startsWith("✅")
              ? "bg-[#255F38] hover:bg-[#1E4D2E]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (
              !(
                urutan.length === langkahSorting.length &&
                feedback2.startsWith("✅") &&
                feedback3.startsWith("✅") &&
                feedback4.startsWith("✅") &&
                feedback5.startsWith("✅")
              )
            )
              e.preventDefault();
          }}
        >
          Mulai Kuis →
        </a>
      </div>
    </Layout>
  );
};

export default AktivitasSiswa;
