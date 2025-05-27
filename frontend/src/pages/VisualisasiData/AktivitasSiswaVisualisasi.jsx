import { useState } from "react";
import Layout from "../../components/Layout";

// nomor 1
import satuLine from "../../assets/Visualisasi/satu-line.png";
import satuBar from "../../assets/Visualisasi/satu-bar.png";
import satuPie from "../../assets/Visualisasi/satu-pie.png";

// nomor 2
import duaPie from "../../assets/Visualisasi/dua-pie.png";
import duaBar from "../../assets/Visualisasi/dua-bar.png";
import duaLine from "../../assets/Visualisasi/dua-line.png";

// nomor 3
import tigaPie from "../../assets/Visualisasi/tiga-pie.png";
import tigaBar from "../../assets/Visualisasi/tiga-bar.png";
import tigaLine from "../../assets/Visualisasi/tiga-line.png";

// nomor 4
import empatPie from "../../assets/Visualisasi/empat-pie.png";
import empatKolom from "../../assets/Visualisasi/empat-kolom.png";
import empatLine from "../../assets/Visualisasi/empat-line.png";

const AktivitasVisualisasiGambar = () => {
  const [selected, setSelected] = useState("");
  const [feedback1, setFeedback1] = useState("");
  const [feedback2, setFeedback2] = useState("");
  const [feedback3, setFeedback3] = useState("");
  const [feedback4, setFeedback4] = useState("");
  const [jawaban2, setJawaban2] = useState("");
  const [jawaban3, setJawaban3] = useState("");
  const [jawaban4, setJawaban4] = useState("");
  const [jawaban5, setJawaban5] = useState([]); // Array untuk beberapa jawaban di Soal 5
  const [isTouched1, setIsTouched1] = useState(false);
  const [isTouched2, setIsTouched2] = useState(false);
  const [isTouched3, setIsTouched3] = useState(false);
  const [isTouched4, setIsTouched4] = useState(false);
  const [isTouched5, setIsTouched5] = useState(false);

  const isCorrect = (input, correct) => input.trim().toLowerCase() === correct.toLowerCase();

  const handlePeriksa1 = () => {
    setIsTouched1(true);
    if (isCorrect(selected, "Line Chart")) {
      setFeedback1("Benar! Grafik garis (Line Chart) cocok untuk melihat perubahan dari waktu ke waktu.");
    } else {
      setFeedback1("Jawaban salah, ayo coba lagi.");
    }
  };

  const handlePeriksa2 = () => {
    setIsTouched2(true);
    if (isCorrect(jawaban2, "Pie Chart")) {
      setFeedback2("Benar! Grafik Pie Chart cocok untuk menunjukkan persentase dari keseluruhan.");
    } else {
      setFeedback2("Jawaban salah, ayo coba lagi.");
    }
  };

  const handlePeriksa3 = () => {
    setIsTouched3(true);
    if (isCorrect(jawaban3, "Line Chart")) {
      setFeedback3("Benar! Grafik garis cocok untuk melihat perubahan dari waktu ke waktu.");
    } else {
      setFeedback3("Jawaban salah, ayo coba lagi.");
    }
  };

  const handlePeriksa4 = () => {
    setIsTouched4(true);
    if (isCorrect(jawaban4, "Bar Chart")) {
      setFeedback4("Benar! Grafik batang cocok untuk perbandingan nilai antar kategori.");
    } else {
      setFeedback4("Jawaban salah, ayo coba lagi.");
    }
  };

  const handlePeriksa5 = () => {
    setIsTouched5(true);
  };

  return (
    <Layout>
       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        AKTIVITAS VISUALISASI DATA
      </div>

      <div className="p-6 bg-white">
        {/* Soal 1 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
           <span className="text-lg font-bold text-green-700 mr-2">1.</span>
            Kamu ingin melihat perubahan jumlah penjualan produk dari waktu ke waktu selama 4 bulan terakhir. Grafik apa yang paling tepat untuk digunakan?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                selected === "Line Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setSelected("Line Chart")}
            >
              <img src={satuLine} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                selected === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setSelected("Bar Chart")}
            >
              <img src={satuBar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                selected === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setSelected("Pie Chart")}
            >
              <img src={satuPie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={handlePeriksa1}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setSelected("");
                setIsTouched1(false);
                setFeedback1("");
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {isTouched1 && selected && (
            <div className={`text-sm mt-2 font-bold ${isCorrect(selected, "Line Chart") ? "text-green-700" : "text-red-700"}`}>
              {feedback1}
            </div>
          )}
        </div>

        {/* Soal 2 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">2.</span>
            Kelasmu melakukan survei tentang warna favorit. Grafik apa yang paling tepat untuk menunjukkan persentase warna favorit dari seluruh kelas?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban2 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban2("Pie Chart")}
            >
              <img src={duaPie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban2 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban2("Bar Chart")}
            >
              <img src={duaBar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban2 === "Line Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban2("Line Chart")}
            >
              <img src={duaLine} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={handlePeriksa2}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban2("");
                setIsTouched2(false);
                setFeedback2("");
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {isTouched2 && jawaban2 && (
            <div className={`text-sm mt-2 font-bold ${isCorrect(jawaban2, "Pie Chart") ? "text-green-700" : "text-red-700"}`}>
              {feedback2}
            </div>
          )}
        </div>

        {/* Soal 3 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">3.</span>
            Kamu ingin melihat perubahan jumlah pengunjung perpustakaan sekolah dari waktu ke waktu setiap bulan. Grafik apa yang paling cocok?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban3 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban3("Pie Chart")}
            >
              <img src={tigaPie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban3 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban3("Bar Chart")}
            >
              <img src={tigaBar} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban3 === "Line Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban3("Line Chart")}
            >
              <img src={tigaLine} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={handlePeriksa3}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban3("");
                setIsTouched3(false);
                setFeedback3("");
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {isTouched3 && jawaban3 && (
            <div className={`text-sm mt-2 font-bold ${isCorrect(jawaban3, "Line Chart") ? "text-green-700" : "text-red-700"}`}>
              {feedback3}
            </div>
          )}
        </div>

        {/* Soal 4 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
            <span className="text-lg font-bold text-green-700 mr-2">4.</span>
            Kamu ingin melihat perbandingan nilai rata-rata siswa di pelajaran Matematika, IPA, dan Bahasa Indonesia. Grafik apa yang paling tepat?
          </p>
          <div className="grid grid-cols-1 gap-4 px-4 mb-5 md:grid-cols-3">
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban4 === "Pie Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban4("Pie Chart")}
            >
              <img src={empatPie} alt="Pie Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Pie Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban4 === "Bar Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban4("Bar Chart")}
            >
              <img src={empatKolom} alt="Bar Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Bar Chart
              </p>
            </div>
            <div
              className={`border-4 rounded-xl p-2 cursor-pointer transition-transform transform ${
                jawaban4 === "Line Chart" ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setJawaban4("Line Chart")}
            >
              <img src={empatLine} alt="Line Chart" className="rounded-lg" />
              <p className="mt-2 text-sm font-semibold text-center text-gray-700 md:text-base">
                Line Chart
              </p>
            </div>
          </div>
          <div className="mt-2 text-center">
            <button
              onClick={handlePeriksa4}
              className="ml-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban4("");
                setIsTouched4(false);
                setFeedback4("");
              }}
              className="px-4 py-2 ml-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {isTouched4 && jawaban4 && (
            <div className={`text-sm mt-2 font-bold ${isCorrect(jawaban4, "Bar Chart") ? "text-green-700" : "text-red-700"}`}>
              {feedback4}
            </div>
          )}
        </div>

        {/* Soal 5 */}
        <div className="p-6 mb-6 bg-green-50 border border-green-200 rounded-lg shadow-md">
          <p className="px-4 mb-4 text-sm leading-relaxed text-justify text-gray-700 md:text-base flex items-center">
             <span className="text-lg font-bold text-green-700 mr-2">5.</span>
            Lengkapi tabel berikut ini dengan jenis grafik yang paling sesuai berdasarkan deskripsi kasus.
          </p>
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Kasus</th>
                <th className="p-2 border">Jenis Grafik</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  kasus: "Menunjukkan persentase warna favorit siswa dari seluruh kelas",
                  jawabanBenar: "Pie Chart",
                },
                {
                  kasus: "Melihat perubahan jumlah penjualan produk dari waktu ke waktu selama 4 bulan",
                  jawabanBenar: "Line Chart",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border">{item.kasus}</td>
                  <td className="p-2 border">
                    <input
                      type="text"
                      value={jawaban5[index] || ""}
                      onChange={(e) => {
                        const newJawaban = [...jawaban5];
                        newJawaban[index] = e.target.value;
                        setJawaban5(newJawaban);
                      }}
                      className="w-full p-2 border-2 rounded-xl"
                      placeholder="Ketik jawaban Anda..."
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2 text-center">
            <button
              onClick={handlePeriksa5}
              className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-green-700 transition duration-200 mr-2"
            >
              Periksa
            </button>
            <button
              onClick={() => {
                setJawaban5([]);
                setIsTouched5(false);
              }}
              className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Hapus
            </button>
          </div>
          {isTouched5 && jawaban5.length > 0 && (
            <div className="mt-2 text-sm font-bold">
              {jawaban5.map((jawaban, index) => (
                <div
                  key={index}
                  className={isCorrect(jawaban, ["Pie Chart", "Line Chart"][index]) ? "text-green-700" : "text-red-700"}
                >
                  {isCorrect(jawaban, ["Pie Chart", "Line Chart"][index])
                    ? `Benar! Untuk kasus "${["Menunjukkan persentase warna favorit siswa dari seluruh kelas", "Melihat perubahan jumlah penjualan produk dari waktu ke waktu selama 4 bulan"][index]}".`
                    : `Jawaban salah, ayo coba lagi. Seharusnya ${["Pie Chart", "Line Chart"][index]}.`}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-8 px-4">
        <button
          onClick={() => window.location.href = '/contoh-penerapan-visualisasi-data'}
          className="px-5 py-2 text-base text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 cursor-pointer"
        >
          ← Sebelumnya
        </button>
        <button
          onClick={() => window.location.href = '/berlatih-visualisasi'}
          className="px-5 py-2 text-base text-white transition duration-300 bg-green-800 rounded-lg shadow-md hover:bg-green-700 cursor-pointer"
        >
          Selanjutnya →
        </button>
      </div>
            </div>
    </Layout>
  );
};

export default AktivitasVisualisasiGambar;