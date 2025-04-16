import { useState } from "react";
import Layout from "../../components/Layout";
import bar from "../../assets/Visualisasi/bar.png";
import line from "../../assets/Visualisasi/line.png";
import pie from "../../assets/Visualisasi/pie.png";

const AktivitasVisualisasiGambar = () => {
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [jawaban1, setJawaban1] = useState(""); // ✅ Tambahan penting!
  const [jawaban2, setJawaban2] = useState("");
  const [jawaban3, setJawaban3] = useState("");
  const [jawaban4, setJawaban4] = useState("");
  const [jawaban5, setJawaban5] = useState("");
  const [isTouched1, setIsTouched1] = useState(false);
  const [isTouched2, setIsTouched2] = useState(false);
  const [isTouched3, setIsTouched3] = useState(false);
  const [isTouched4, setIsTouched4] = useState(false);
  const [isTouched5, setIsTouched5] = useState(false);

  const isCorrect = (input, correct) => input.trim().toLowerCase() === correct;

  const semuaBenar =
    isCorrect(selected, "line") &&
    isCorrect(jawaban2, "pie chart") &&
    isCorrect(jawaban3, "line chart") &&
    isCorrect(jawaban4, "bar chart");

  return (
    <Layout>
      <div className="p-6 bg-white">
        <h1 className="text-xl md:text-2xl text-center font-bold mb-6 p-4 bg-[#255F38] text-white">
          Aktivitas Visualisasi Data
        </h1>

        {/* Soal 1 */}
        <div className="p-4">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
            1. Kamu ingin tahu bagaimana{" "}
            <span className="font-bold text-red-600">
              jumlah penjualan produk berubah selama 4 bulan terakhir
            </span>
            . Grafik apa yang paling tepat untuk digunakan?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban1 === "Line Chart"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => setJawaban1("Line Chart")}
            >
              <img src={line} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban1 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban1("Bar Chart")}
            >
              <img src={bar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban1 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban1("Pie Chart")}
            >
              <img src={pie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsTouched1(true)}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban1("");
                setIsTouched1(false);
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>
          {isTouched1 && jawaban1 && (
            <div
              className={`mt-2 text-sm font-medium ${
                isCorrect(jawaban1, "line chart")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {isCorrect(jawaban1, "line chart")
                ? "✅ Benar! Grafik garis (line chart) cocok untuk menunjukkan data yang berubah dari waktu ke waktu."
                : "❌ Coba lagi. Grafik ini kurang tepat untuk menunjukkan data yang berubah dari waktu ke waktu."}
            </div>
          )}
        </div>

        {/* Soal 2 */}
        <div className="p-4">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
            2. Kelasmu melakukan survei tentang warna favorit. Grafik apa yang
            paling pas untuk menunjukkan bagian warna favorit dari seluruh
            kelas?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban2 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban2("Pie Chart")}
            >
              <img src={pie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban2 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban2("Bar Chart")}
            >
              <img src={bar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban2 === "Line Chart"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => setJawaban2("Line Chart")}
            >
              <img src={line} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsTouched2(true)}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban2("");
                setIsTouched2(false);
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>
          {isTouched2 && jawaban2 && (
            <div
              className={`mt-2 text-sm font-medium ${
                isCorrect(jawaban2, "pie chart")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {isCorrect(jawaban2, "pie chart")
                ? "✅ Benar! Grafik pie chart cocok untuk menunjukkan bagian dari keseluruhan."
                : "❌ Salah. Grafik tersebut kurang tepat untuk menunjukkan bagian dari keseluruhan."}
            </div>
          )}
        </div>

        {/* Soal 3 */}
        <div className="p-4">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
            3. Kamu ingin tahu bagaimana jumlah pengunjung perpustakaan sekolah
            berubah setiap bulan. Grafik apa yang paling cocok?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban3 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban3("Pie Chart")}
            >
              <img src={pie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban3 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban3("Bar Chart")}
            >
              <img src={bar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban3 === "Line Chart"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => setJawaban3("Line Chart")}
            >
              <img src={line} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsTouched3(true)}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban3("");
                setIsTouched3(false);
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>
          {isTouched3 && jawaban3 && (
            <div
              className={`mt-2 text-sm font-medium ${
                isCorrect(jawaban3, "line chart")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {isCorrect(jawaban3, "line chart")
                ? "✅ Benar! Grafik garis cocok untuk menunjukkan perubahan dari waktu ke waktu."
                : "❌ Salah. Grafik tersebut kurang tepat untuk menunjukkan perubahan dari waktu ke waktu."}
            </div>
          )}
        </div>

        {/* Soal 4 */}
        <div className="p-4">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
            4. Kamu ingin membandingkan nilai rata-rata siswa di pelajaran
            Matematika, IPA, dan Bahasa Indonesia. Grafik apa yang paling tepat?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban4 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban4("Pie Chart")}
            >
              <img src={pie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban4 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban4("Bar Chart")}
            >
              <img src={bar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer ${
                jawaban4 === "Line Chart"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => setJawaban4("Line Chart")}
            >
              <img src={line} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsTouched4(true)}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban4("");
                setIsTouched4(false);
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>
          {isTouched4 && jawaban4 && (
            <div
              className={`mt-2 text-sm font-medium ${
                isCorrect(jawaban4, "bar chart")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {isCorrect(jawaban4, "bar chart")
                ? "✅ Benar! Grafik batang cocok untuk membandingkan beberapa kategori."
                : "❌ Salah. Grafik tersebut kurang tepat untuk menunjukkan perbandingan antar kategori."}
            </div>
          )}
        </div>

        {/* Soal 5 */}
        <div className="p-4">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base">
            5. Lengkapi tabel berikut ini dengan jenis grafik yang paling sesuai
            berdasarkan deskripsi kasus.
          </p>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Kasus</th>
                <th className="p-2 border">Jenis Grafik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">
                  Menunjukkan bagian warna favorit siswa dari seluruh kelas
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    value={jawaban5}
                    onChange={(e) => setJawaban5(e.target.value)}
                    className="w-full p-2 border-2 rounded-xl"
                    placeholder="Ketik jawaban Anda..."
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2 text-center">
            <button
              onClick={() => setIsTouched5(true)}
              className="px-4 py-2 bg-[#255F38] text-white rounded hover:bg-green-700 mr-2"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban5("");
                setIsTouched5(false);
              }}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>

          {isTouched5 && jawaban5 && (
            <div
              className={`mt-2 text-sm font-medium ${
                isCorrect(jawaban5, "pie chart")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {isCorrect(jawaban5, "pie chart")
                ? "✅ Benar!"
                : "❌ Salah. Grafik tersebut kurang tepat untuk menunjukkan bagian dari keseluruhan."}
            </div>
          )}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-8">
          <a
            href="/contoh-penerapan-visualisasi-data"
            className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600"
          >
            ← Sebelumnya
          </a>
          <a
            href="/mari-berlatih-visualisasi"
            className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md hover:bg-green-700"
          >
            Selanjutnya →
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AktivitasVisualisasiGambar;
