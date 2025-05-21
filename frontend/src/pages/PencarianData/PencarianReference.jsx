import Layout from "../../components/Layout";
import { BookOpen, CheckCircle, ChevronRight, Code } from "lucide-react";
import { useState, useEffect } from "react";

export default function PencarianReference() {
  // State untuk Dekomposisi
  const [dekomposisiSteps, setDekomposisiSteps] = useState([false, false, false]);
  // State untuk Pengenalan Pola
  const [polaSteps, setPolaSteps] = useState([false, false, false]);
  // State untuk Abstraksi
  const [abstraksiSteps, setAbstraksiSteps] = useState([false, false, false]);
  // State untuk Algoritma (INDEX, MATCH, CHOOSE)
  const [algoritmaIndexSteps, setAlgoritmaIndexSteps] = useState([false, false, false]);
  const [algoritmaMatchSteps, setAlgoritmaMatchSteps] = useState([false, false, false]);
  const [algoritmaChooseSteps, setAlgoritmaChooseSteps] = useState([false, false, false]);

  // State untuk Visualisasi INDEX
  const [indexRow, setIndexRow] = useState("");
  const [indexCol, setIndexCol] = useState("");
  const [indexResult, setIndexResult] = useState("");
  const [indexStepExplanation, setIndexStepExplanation] = useState("");
  const [indexSearching, setIndexSearching] = useState(false);
  const indexReferenceData = [
    { Kode: "P001", Nama: "Laptop", Harga: "8.500.000" },
    { Kode: "P002", Nama: "Printer", Harga: "2.000.000" },
    { Kode: "P003", Nama: "Mouse", Harga: "150.000" },
  ];

  // State untuk Visualisasi MATCH
  const [matchLookupValue, setMatchLookupValue] = useState("");
  const [matchCurrentIndex, setMatchCurrentIndex] = useState(-1);
  const [matchResult, setMatchResult] = useState("");
  const [matchStepExplanation, setMatchStepExplanation] = useState("");
  const [matchSearching, setMatchSearching] = useState(false);
  const matchReferenceData = ["T01", "T02", "T03"];
  const [matchResultTable, setMatchResultTable] = useState([
    { value: "T01", position: "-" },
    { value: "T02", position: "-" },
    { value: "T03", position: "-" },
  ]);

  // State untuk Visualisasi CHOOSE
  const [chooseIndex, setChooseIndex] = useState("");
  const [chooseResult, setChooseResult] = useState("");
  const [chooseStepExplanation, setChooseStepExplanation] = useState("");
  const [chooseSearching, setChooseSearching] = useState(false);
  const chooseReferenceData = ["Tas", "Buku", "Pensil"];
  const [chooseResultTable, setChooseResultTable] = useState([
    { value: "Tas", selected: "-" },
    { value: "Buku", selected: "-" },
    { value: "Pensil", selected: "-" },
  ]);

  // Fungsi toggle untuk Dekomposisi
  const toggleDekomposisiStep = (index) => {
    setDekomposisiSteps((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  // Fungsi toggle untuk Pengenalan Pola
  const togglePolaStep = (index) => {
    setPolaSteps((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  // Fungsi toggle untuk Abstraksi
  const toggleAbstraksiStep = (index) => {
    setAbstraksiSteps((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  // Fungsi toggle untuk Algoritma INDEX
  const toggleAlgoritmaIndexStep = (index) => {
    setAlgoritmaIndexSteps((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  // Fungsi toggle untuk Algoritma MATCH
  const toggleAlgoritmaMatchStep = (index) => {
    setAlgoritmaMatchSteps((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  // Fungsi toggle untuk Algoritma CHOOSE
  const toggleAlgoritmaChooseStep = (index) => {
    setAlgoritmaChooseSteps((prev) => prev.map((state, i) => (i === index ? !state : state)));
  };

  // Fungsi untuk Visualisasi INDEX
  const startIndexSearch = () => {
    const row = parseInt(indexRow);
    const col = parseInt(indexCol);
    if (isNaN(row) || isNaN(col) || row < 1 || row > 3 || col < 1 || col > 3) {
      setIndexStepExplanation("Masukkan nomor baris dan kolom antara 1 hingga 3.");
      return;
    }
    setIndexSearching(true);
    setIndexStepExplanation(`Mencari data pada baris ${row} dan kolom ${col}...`);
    setTimeout(() => {
      const keys = Object.keys(indexReferenceData[0]);
      const value = indexReferenceData[row - 1][keys[col - 1]];
      setIndexResult(`Ditemukan: ${value}`);
      setIndexStepExplanation(`Data ditemukan pada baris ${row}, kolom ${col}: ${value}`);
      setIndexSearching(false);
    }, 1500);
  };

  const resetIndexSearch = () => {
    setIndexRow("");
    setIndexCol("");
    setIndexResult("");
    setIndexStepExplanation("");
    setIndexSearching(false);
  };

  // Fungsi untuk Visualisasi MATCH
  const startMatchSearch = () => {
    if (!matchLookupValue) {
      setMatchStepExplanation("Masukkan kode tim (contoh: T02).");
      return;
    }
    setMatchSearching(true);
    setMatchCurrentIndex(0);
    setMatchStepExplanation("");
    setMatchResult("");
    setMatchResultTable([
      { value: "T01", position: "-" },
      { value: "T02", position: "-" },
      { value: "T03", position: "-" },
    ]);
  };

  const resetMatchSearch = () => {
    setMatchLookupValue("");
    setMatchCurrentIndex(-1);
    setMatchResult("");
    setMatchStepExplanation("");
    setMatchSearching(false);
    setMatchResultTable([
      { value: "T01", position: "-" },
      { value: "T02", position: "-" },
      { value: "T03", position: "-" },
    ]);
  };

  useEffect(() => {
    let interval;
    if (matchSearching && matchCurrentIndex >= 0 && matchCurrentIndex < matchReferenceData.length) {
      interval = setInterval(() => {
        const currentValue = matchReferenceData[matchCurrentIndex];
        setMatchStepExplanation(`Mencocokkan kode ${matchLookupValue} dengan ${currentValue} di baris ${matchCurrentIndex + 1}...`);

        if (currentValue === matchLookupValue) {
          setMatchResultTable((prev) =>
            prev.map((row, index) =>
              index === matchCurrentIndex ? { ...row, position: matchCurrentIndex + 1 } : row
            )
          );
          setMatchResult(`Ditemukan: Posisi ${matchCurrentIndex + 1}`);
          setMatchStepExplanation(`Kode ${matchLookupValue} ditemukan di posisi ${matchCurrentIndex + 1}!`);
          setMatchSearching(false);
          clearInterval(interval);
        } else if (matchCurrentIndex === matchReferenceData.length - 1) {
          setMatchResult("Tidak ditemukan");
          setMatchStepExplanation(`Kode ${matchLookupValue} tidak ditemukan dalam daftar.`);
          setMatchSearching(false);
          clearInterval(interval);
        } else {
          setMatchCurrentIndex((prev) => prev + 1);
        }
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [matchSearching, matchCurrentIndex, matchLookupValue]);

  // Fungsi untuk Visualisasi CHOOSE
  const startChooseSearch = () => {
    const idx = parseInt(chooseIndex);
    if (isNaN(idx) || idx < 1 || idx > 3) {
      setChooseStepExplanation("Masukkan nomor peringkat antara 1 hingga 3.");
      return;
    }
    setChooseSearching(true);
    setChooseStepExplanation(`Memilih hadiah untuk peringkat ${idx}...`);
    setChooseResultTable((prev) =>
      prev.map((row) => ({ ...row, selected: "-" }))
    );
    setTimeout(() => {
      const value = chooseReferenceData[idx - 1];
      setChooseResultTable((prev) =>
        prev.map((row, index) =>
          index === idx - 1 ? { ...row, selected: value } : row
        )
      );
      setChooseResult(`Ditemukan: ${value}`);
      setChooseStepExplanation(`Peringkat ${idx} mendapatkan hadiah: ${value}`);
      setChooseSearching(false);
    }, 1500);
  };

  const resetChooseSearch = () => {
    setChooseIndex("");
    setChooseResult("");
    setChooseStepExplanation("");
    setChooseSearching(false);
    setChooseResultTable([
      { value: "Tas", selected: "-" },
      { value: "Buku", selected: "-" },
      { value: "Pensil", selected: "-" },
    ]);
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        A. PENCARIAN DATA
      </div>

      <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
        <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
          <li>Memahami konsep pencarian data dengan menggunakan fungsi Lookup.</li>
          <li>Menggunakan pendekatan Computational Thinking untuk menyelesaikan permasalahan pencarian data.</li>
          <li>Menerapkan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</li>
        </ol>
      </section>

      {/* Pencarian Reference */}
      <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
        2. Pencarian Reference
      </div>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 mt-4">
        Dalam kehidupan sehari-hari, kita sering mencari informasi dengan cara melihat posisi suatu data dalam daftar atau memilih nilai tertentu berdasarkan indeks tertentu. Dalam dunia digital, pencarian ini dapat dilakukan dengan lebih cepat dan efisien menggunakan <strong>Fungsi Reference</strong> dalam aplikasi lembar kerja.
      </p>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4">
        Fungsi <strong>Reference</strong> digunakan untuk:
      </p>
      <ul className="list-disc list-inside mt-2 ml-8 text-gray-700 px-4 space-y-2">
        <li><strong>Mengambil data</strong> dari tabel → Berdasarkan posisi baris dan kolom tertentu.</li>
        <li><strong>Mencari posisi</strong> suatu nilai → Tanpa harus mencarinya secara manual dalam daftar.</li>
        <li><strong>Memilih salah satu nilai</strong> → Dari beberapa pilihan yang telah ditentukan.</li>
      </ul>

      <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-4 mt-4">
        Dalam lembar kerja, terdapat tiga fungsi utama dalam kategori <strong>Fungsi Reference</strong>, yaitu:
      </p>
      <ul className="list-disc list-inside mt-2 ml-8 text-gray-700 px-4 space-y-2">
        <li><strong>INDEX</strong> → Mengambil data dari tabel berdasarkan nomor baris dan kolom tertentu.</li>
        <li><strong>MATCH</strong> → Mencari posisi suatu nilai dalam daftar (baris atau kolom).</li>
        <li><strong>CHOOSE</strong> → Memilih satu nilai dari daftar berdasarkan indeks tertentu.</li>
      </ul>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BookOpen className="mr-2 w-5 h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Sebelum menggunakan fungsi <strong>reference</strong>, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan memecahnya menjadi <span className="font-semibold">langkah-langkah kecil</span> agar lebih mudah diselesaikan. Pencarian data dengan fungsi reference dapat dilakukan melalui langkah-langkah berikut:
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Menentukan tujuan</strong> pencarian data → Apakah ingin mengambil data berdasarkan posisi (<span className="font-bold">INDEX</span>), mencari posisi suatu data (<span className="font-bold">MATCH</span>), atau memilih nilai tertentu dari daftar (<span className="font-bold">CHOOSE</span>)?
          </li>
          <li className="text-justify">
            <strong>Menyiapkan data</strong> dalam tabel referensi → Pastikan data telah tersusun dalam format yang benar dan sesuai untuk fungsi yang digunakan.
          </li>
          <li className="text-justify">
            <strong>Menentukan fungsi</strong> reference yang tepat → Pilih fungsi yang sesuai dengan kebutuhan:
            <div className="ml-4 mt-2 space-y-4">
              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">1. INDEX</h3>
                <p>Digunakan untuk mengambil data berdasarkan baris dan kolom.</p>
                <pre className="bg-gray-200 p-2 rounded text-gray-800">
                  =INDEX(<span className="italic">array, row_num, column_num</span>)
                </pre>
                <p className="text-gray-700">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700">
                  <li><strong>Array:</strong> Tabel yang berisi data yang dicari.</li>
                  <li><strong>Row_num:</strong> Nomor baris posisi data yang dicari.</li>
                  <li><strong>Column_num:</strong> Nomor kolom posisi data yang dicari.</li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">2. MATCH</h3>
                <p>Digunakan untuk mencari posisi suatu nilai dalam daftar.</p>
                <pre className="bg-gray-200 p-2 rounded text-gray-800">
                  =MATCH(<span className="italic">lookup_value, lookup_array, match_type</span>)
                </pre>
                <p className="text-gray-700">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700">
                  <li>
                    <strong>lookup_value:</strong> Nilai yang ingin dicari di dalam tabel. 
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Jika nilai berupa <strong>angka</strong> (contoh: 5 atau 123), tulis langsung tanpa tanda kutip, misalnya: <code>123</code>.</li>
                      <li>Jika nilai berupa <strong>teks</strong> atau kode (contoh: "P01" atau "Sita"), harus menggunakan tanda kutip, misalnya: <code>"P01"</code>.</li>
                    </ul>
                  </li>
                  <li><strong>lookup_array:</strong> Tabel atau kolom yang berisi data yang dicari.</li>
                  <li><strong>match_type:</strong> Menentukan metode pencarian:
                    <ul className="list-disc list-inside ml-6">
                      <li>1 → mencari nilai yang mendekati lebih besar atau sama (data harus diurutkan naik).</li>
                      <li>0 → mencari nilai yang sama persis (paling sering digunakan).</li>
                      <li>-1 → mencari nilai yang mendekati lebih kecil atau sama (data harus diurutkan turun).</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38]">3. CHOOSE</h3>
                <p>Digunakan untuk memilih satu nilai dari beberapa pilihan.</p>
                <pre className="bg-gray-200 p-2 rounded text-gray-800">
                  =CHOOSE(<span className="italic">index_num, value1, value2, ...</span>)
                </pre>
                <p className="text-gray-700">Keterangan:</p>
                <ul className="list-disc list-inside ml-6 text-gray-700">
                  <li><strong>index_num:</strong> Argumen wajib berupa angka untuk menunjukkan posisi data dalam daftar.</li>
                  <li><strong>value1:</strong> Nilai yang dapat berupa angka, teks, rumus, atau referensi sel.</li>
                  <li><strong>value2 ...:</strong> Nilai-nilai selanjutnya dengan format sama seperti value1.</li>
                </ul>
              </section>
            </div>
          </li>
          <li className="text-justify">
            <strong>Menentukan parameter</strong> dalam rumus → Pastikan posisi data dalam tabel (nomor baris/kolom untuk INDEX, urutan dalam daftar untuk CHOOSE) sudah sesuai.
          </li>
          <li className="text-justify">
            <strong>Menggunakan fungsi</strong> reference dalam rumus → Gunakan sintaks yang benar untuk memastikan pencarian data berjalan dengan baik.
          </li>
        </ul>

        {/* Interactive Case Study for Dekomposisi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Memecah Masalah: Menyiapkan Jadwal Piket Kelas
          </h3>
          <p className="text-gray-700 mt-2">
            Ibu Guru ingin mencari nama siswa untuk jadwal piket berdasarkan nomor absen. Daftar absen berisi: nomor "1" untuk "Siti", nomor "2" untuk "Rudi", nomor "3" untuk "Tina". Ibu Guru ingin tahu nama untuk nomor "2".
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah memecah masalah:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleDekomposisiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Tentukan Tujuan
            </button>
            {dekomposisiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Tujuan:</strong> Cari nama siswa berdasarkan nomor absen "2".
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Siapkan Data
            </button>
            {dekomposisiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Data:</strong> Gunakan daftar absen dengan nomor (1, 2, 3) dan nama (Siti, Rudi, Tina).
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Pilih Fungsi
            </button>
            {dekomposisiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Fungsi:</strong> MATCH, karena kita perlu cari posisi nomor absen "2".
              </p>
            )}
          </div>
        </div>
      </div>

      {/* PENGENALAN POLA */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BookOpen className="w-5 h-5 mr-2" /> PENGENALAN POLA
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Pengenalan pola membantu memahami <span className="font-semibold">kesesuaian data dalam tabel</span> terstruktur sehingga kita bisa memilih <span className="italic">metode</span> pencarian yang tepat.
        </p>

        <p className="text-gray-700 text-sm md:text-base font-semibold">📌 Pola umum dalam penggunaan fungsi <span className="italic">reference</span>:</p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>INDEX bekerja berdasarkan koordinat</strong> → Menggunakan baris dan kolom untuk mengambil data dalam tabel.
          </li>
          <li className="text-justify">
            <strong>MATCH mencari posisi suatu nilai</strong> → Digunakan untuk menemukan posisi dalam satu kolom atau baris.
          </li>
          <li className="text-justify">
            <strong>CHOOSE memilih nilai berdasarkan indeks</strong> → Memilih nilai dari daftar sesuai nomor indeks yang diberikan.
          </li>
        </ul>

        <p className="text-gray-700 text-sm md:text-base font-semibold">📌 Pola yang ditemukan dalam tabel:</p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>INDEX dapat mengambil harga</strong> → Mengambil harga Laptop jika kita mengetahui baris dan kolom yang sesuai.
          </li>
          <li className="text-justify">
            <strong>MATCH dapat mencari posisi</strong> → Mencari posisi kode produk tertentu dalam daftar.
          </li>
          <li className="text-justify">
            <strong>CHOOSE dapat memilih nama</strong> → Memilih nama produk dari daftar berdasarkan nomor urut yang diberikan.
          </li>
        </ul>

        {/* Interactive Case Study for Pengenalan Pola */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Menemukan Pola: Pencarian Jadwal Pelajaran
          </h3>
          <p className="text-gray-700 mt-2">
            Rudi ingin tahu pelajaran di hari Rabu jam ke-3. Daftar pelajaran berisi: Senin (Matematika, IPA, Bahasa), Rabu (IPS, Seni, Olahraga), Jumat (Agama, PKN, Sejarah). Rudi ingin mencari pelajaran di hari Rabu jam ke-3.
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat pola yang ditemukan:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => togglePolaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Lihat Struktur
            </button>
            {polaSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Struktur:</strong> Tabel punya baris untuk hari (Senin, Rabu, Jumat) dan kolom untuk jam (1, 2, 3).
              </p>
            )}
            <button
              onClick={() => togglePolaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Temukan Pola
            </button>
            {polaSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Pola:</strong> Setiap hari punya 3 pelajaran, Rabu di baris 2, jam ke-3 di kolom 3.
              </p>
            )}
            <button
              onClick={() => togglePolaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Pilih Fungsi
            </button>
            {polaSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Fungsi:</strong> INDEX cocok karena pola baris dan kolom jelas.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center mt-2">
          <p className="text-gray-600 text-sm italic mb-2">Table 2. Pengenalan Pola Reference</p>
          <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2">Kode Barang</th>
                <th className="border border-green-600 px-4 py-2">Nama Barang</th>
                <th className="border border-green-600 px-4 py-2">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">P001</td>
                <td className="border border-green-600 px-4 py-2">Laptop</td>
                <td className="border border-green-600 px-4 py-2">8.500.000</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-green-600 px-4 py-2">P002</td>
                <td className="border border-green-600 px-4 py-2">Printer</td>
                <td className="border border-green-600 px-4 py-2">2.000.000</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-green-600 px-4 py-2">P003</td>
                <td className="border border-green-600 px-4 py-2">Mouse</td>
                <td className="border border-green-600 px-4 py-2">150.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ABSTRAKSI */}
      <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BookOpen className="w-5 h-5 mr-2" /> ABSTRAKSI
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
          Setelah pola ditemukan, kita bisa <span className="font-semibold">mengabaikan informasi yang tidak relevan</span> dan hanya fokus pada <span className="font-semibold">bagian penting</span> yang diperlukan dalam pencarian.
        </p>

        <p className="text-gray-700 text-sm md:text-base font-semibold">📌 Langkah-langkah menyederhanakan pencarian:</p>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
          <li className="text-justify">
            <strong>Hilangkan data</strong> yang tidak diperlukan → Abaikan informasi yang tidak relevan untuk pencarian.
          </li>
          <li className="text-justify">
            <strong>Gunakan hanya data</strong> yang relevan → Ambil data yang benar-benar dibutuhkan untuk fungsi reference.
          </li>
          <li className="text-justify">
            <strong>Fokus pada hubungan</strong> antara indeks, posisi, dan nilai → Pastikan hubungan antar data dalam tabel jelas.
          </li>
        </ul>

        {/* Interactive Case Study for Abstraksi */}
        <div className="bg-green-50 p-4 rounded shadow-md mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" /> Menyederhanakan Masalah: Pencarian Nilai Ujian
          </h3>
          <p className="text-gray-700 mt-2">
            Pak Guru ingin mencari nilai matematika siswa berdasarkan nomor absen. Daftar nilai berisi: nomor "1" (Siti: Matematika 80, IPA 75), nomor "2" (Rudi: Matematika 85, IPA 70). Pak Guru hanya butuh nilai matematika untuk nomor "2".
          </p>
          <p className="text-gray-700 mt-4">
            Klik tombol berikut untuk melihat langkah-langkah menyederhanakan:
          </p>
          <div className="space-y-3 mt-4">
            <button
              onClick={() => toggleAbstraksiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Abaikan yang Tidak Penting
            </button>
            {abstraksiSteps[0] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Abaikan:</strong> Nilai IPA (75, 70) karena tidak dibutuhkan.
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Ambil yang Penting
            </button>
            {abstraksiSteps[1] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Ambil:</strong> Nomor absen (1, 2) dan nilai matematika (80, 85).
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Cari Data
            </button>
            {abstraksiSteps[2] && (
              <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                <strong>Cari:</strong> Gunakan MATCH untuk nomor "2", lalu INDEX untuk nilai matematika.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ALGORITMA */}
      <div className="bg-white p-5 border-gray-300 space-y-6 mt-10 relative">
        <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BookOpen className="w-5 h-5 mr-2" /> Algoritma
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
            📌 Langkah-langkah penggunaan <strong>INDEX</strong>:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
            <li className="text-justify">
              <strong>Tentukan array</strong> data yang akan digunakan → Pilih tabel atau rentang data yang berisi informasi.
            </li>
            <li className="text-justify">
              <strong>Tentukan nomor</strong> baris dan kolom → Identifikasi posisi data yang ingin diambil berdasarkan baris dan kolom.
            </li>
            <li className="text-justify">
              <strong>Gunakan rumus</strong> INDEX dalam lembar kerja → Tulis rumus dengan parameter yang sesuai.
            </li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded mt-4 text-sm md:text-base leading-relaxed">
            =INDEX(A2:C4, 2, 3){"\n"}
            Keterangan: Mengambil harga produk di baris ke-2 dan kolom ke-3 dalam tabel.
          </pre>

          {/* Interactive Case Study for Algoritma INDEX */}
          <div className="bg-green-50 p-4 rounded shadow-md mt-6">
            <h3 className="font-semibold text-[#255F38] flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" /> Menentukan Langkah: Pencarian Jadwal Ekstrakurikuler
            </h3>
            <p className="text-gray-700 mt-2">
              Ani ingin tahu klub ekstrakurikuler di hari Jumat. Daftar klub berisi: Senin (Bulu Tangkis), Rabu (Basket), Jumat (Pramuka). Ani ingin mencari klub di hari Jumat.
            </p>
            <p className="text-gray-700 mt-4">
              Klik tombol berikut untuk melihat langkah-langkah pencarian:
            </p>
            <div className="space-y-3 mt-4">
              <button
                onClick={() => toggleAlgoritmaIndexStep(0)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Pilih Tabel
              </button>
              {algoritmaIndexSteps[0] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Tabel:</strong> Pilih tabel klub (Senin: Bulu Tangkis, Rabu: Basket, Jumat: Pramuka).
                </p>
              )}
              <button
                onClick={() => toggleAlgoritmaIndexStep(1)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Tentukan Posisi
              </button>
              {algoritmaIndexSteps[1] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Posisi:</strong> Jumat ada di baris 3, klub ada di kolom 1.
                </p>
              )}
              <button
                onClick={() => toggleAlgoritmaIndexStep(2)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Tulis Rumus
              </button>
              {algoritmaIndexSteps[2] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Rumus:</strong> Gunakan INDEX untuk ambil klub di baris 3, kolom 1.
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            📌 Langkah-langkah penggunaan <strong>MATCH</strong>:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
            <li className="text-justify">
              <strong>Tentukan nilai</strong> yang dicari → Identifikasi nilai yang ingin ditemukan dalam daftar.
            </li>
            <li className="text-justify">
              <strong>Pilih rentang</strong> data tempat pencarian → Tentukan kolom atau baris yang berisi data.
            </li>
            <li className="text-justify">
              <strong>Gunakan rumus</strong> MATCH dalam lembar kerja → Tulis rumus dengan parameter yang tepat.
            </li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded mt-4 text-sm md:text-base leading-relaxed">
            =MATCH("T02", A2:A4, 0){"\n"}
            Keterangan: Menampilkan posisi kode tim "T02" dalam daftar.
          </pre>

          {/* Interactive Case Study for Algoritma MATCH */}
          <div className="bg-green-50 p-4 rounded shadow-md mt-6">
            <h3 className="font-semibold text-[#255F38] flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" /> Menentukan Langkah: Pencarian Peringkat Lomba
            </h3>
            <p className="text-gray-700 mt-2">
              Budi ingin tahu posisi timnya di lomba cerdas cermat. Daftar tim berisi: "T01", "T02", "T03". Budi ingin mencari posisi kode "T02".
            </p>
            <p className="text-gray-700 mt-4">
              Klik tombol berikut untuk melihat langkah-langkah pencarian:
            </p>
            <div className="space-y-3 mt-4">
              <button
                onClick={() => toggleAlgoritmaMatchStep(0)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Tentukan Kode
              </button>
              {algoritmaMatchSteps[0] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Kode:</strong> Cari posisi kode "T02".
                </p>
              )}
              <button
                onClick={() => toggleAlgoritmaMatchStep(1)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Pilih Daftar
              </button>
              {algoritmaMatchSteps[1] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Daftar:</strong> Daftar kode tim ("T01", "T02", "T03").
                </p>
              )}
              <button
                onClick={() => toggleAlgoritmaMatchStep(2)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Tulis Rumus
              </button>
              {algoritmaMatchSteps[2] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Rumus:</strong> Gunakan MATCH untuk cari posisi "T02" di daftar.
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            📌 Langkah-langkah penggunaan <strong>CHOOSE</strong>:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
            <li className="text-justify">
              <strong>Tentukan nomor</strong> indeks yang akan digunakan → Pilih indeks yang sesuai dengan posisi data yang diinginkan.
            </li>
            <li className="text-justify">
              <strong>Masukkan daftar</strong> nilai yang tersedia → Tulis daftar nilai yang akan dipilih.
            </li>
            <li className="text-justify">
              <strong>Gunakan rumus</strong> CHOOSE dalam lembar kerja → Tulis rumus dengan parameter yang tepat.
            </li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded mt-4 text-sm md:text-base leading-relaxed">
            =CHOOSE(2, "Tas", "Buku", "Pensil"){"\n"}
            Keterangan: Memilih elemen ke-2 dari daftar, yaitu "Buku".
          </pre>

          {/* Interactive Case Study for Algoritma CHOOSE */}
          <div className="bg-green-50 p-4 rounded shadow-md mt-6">
            <h3 className="font-semibold text-[#255F38] flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" /> Menentukan Langkah: Pencarian Hadiah Lomba
            </h3>
            <p className="text-gray-700 mt-2">
              Siti ingin tahu hadiah untuk peringkat 2 di lomba sekolah. Daftar hadiah: "Tas", "Buku", "Pensil". Siti ingin mencari hadiah untuk peringkat 2.
            </p>
            <p className="text-gray-700 mt-4">
              Klik tombol berikut untuk melihat langkah-langkah pencarian:
            </p>
            <div className="space-y-3 mt-4">
              <button
                onClick={() => toggleAlgoritmaChooseStep(0)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Pilih Peringkat
              </button>
              {algoritmaChooseSteps[0] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Peringkat:</strong> Pilih peringkat 2.
                </p>
              )}
              <button
                onClick={() => toggleAlgoritmaChooseStep(1)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Buat Daftar
              </button>
              {algoritmaChooseSteps[1] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Daftar:</strong> Tulis hadiah ("Tas", "Buku", "Pensil").
                </p>
              )}
              <button
                onClick={() => toggleAlgoritmaChooseStep(2)}
                className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
              >
                <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Tulis Rumus
              </button>
              {algoritmaChooseSteps[2] && (
                <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded">
                  <strong>Rumus:</strong> Gunakan CHOOSE untuk ambil hadiah di peringkat 2.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

          <div className="bg-white p-5 border-gray-300 space-y-4 mt-8 relative">
      {/* Visualisasi Interaktif INDEX */}
      <h3 className="font-semibold text-[#255F38] mt-6">
        Visualisasi Interaktif: Cara Kerja INDEX
      </h3>
      <p className="text-gray-700 text-sm md:text-base text-justify">
        Cobalah simulasi berikut untuk memahami cara kerja INDEX secara langsung. Masukkan nomor baris dan kolom untuk mengambil data dari tabel referensi.
      </p>
      <div className="bg-green-50 p-4 rounded shadow-md mt-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <input
            type="number"
            value={indexRow}
            onChange={(e) => setIndexRow(e.target.value)}
            placeholder="Nomor baris (1-3)"
            className="p-2 border rounded w-full sm:w-40"
          />
          <input
            type="number"
            value={indexCol}
            onChange={(e) => setIndexCol(e.target.value)}
            placeholder="Nomor kolom (1-3)"
            className="p-2 border rounded w-full sm:w-40"
          />
          <button
            onClick={startIndexSearch}
            className="bg-[#255F38] text-white p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
          >
            Mulai
          </button>
          <button
            onClick={resetIndexSearch}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>

        {/* Workflow Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
          <span className="text-sm sm:text-lg font-bold">1. Input Baris & Kolom</span>
          <span className="text-2xl hidden sm:inline">→</span>
          <span className="text-sm sm:text-lg font-bold">2. Cari di Tabel Referensi</span>
          <span className="text-2xl hidden sm:inline">→</span>
          <span className="text-sm sm:text-lg font-bold">3. Tampilkan Hasil</span>
        </div>

        {/* Step-by-Step Narrative */}
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Langkah Pencarian:</strong>{" "}
            {indexStepExplanation || "Masukkan nomor baris dan kolom, lalu klik Mulai untuk melihat proses pencarian."}
          </p>
        </div>

        {/* Reference Table */}
        <h3 className="font-semibold text-[#255F38] mt-6">Tabel Referensi</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Kode</th>
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nama</th>
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Harga</th>
              </tr>
            </thead>
            <tbody>
              {indexReferenceData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                >
                  {Object.values(row).map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`border border-green-600 px-4 py-2 whitespace-nowrap ${
                        indexSearching &&
                        parseInt(indexRow) === rowIndex + 1 &&
                        parseInt(indexCol) === colIndex + 1
                          ? "bg-yellow-200 animate-pulse"
                          : ""
                      } ${
                        !indexSearching &&
                        indexResult &&
                        parseInt(indexRow) === rowIndex + 1 &&
                        parseInt(indexCol) === colIndex + 1
                          ? "bg-green-200"
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-4 text-sm md:text-base">
          <strong>Hasil:</strong>{" "}
          {indexResult || (indexSearching ? "Mencari..." : "Masukkan baris dan kolom, lalu klik Mulai")}
        </p>
      </div>

      {/* Visualisasi Interaktif MATCH */}
      <h3 className="font-semibold text-[#255F38] mt-6">
        Visualisasi Interaktif: Cara Kerja MATCH
      </h3>
      <p className="text-gray-700 text-sm md:text-base text-justify">
        Cobalah simulasi berikut untuk memahami cara kerja MATCH secara langsung. Masukkan kode tim untuk mencari posisinya dalam daftar referensi.
      </p>
      <div className="bg-green-50 p-4 rounded shadow-md mt-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <input
            type="text"
            value={matchLookupValue}
            onChange={(e) => setMatchLookupValue(e.target.value)}
            placeholder="Masukkan kode tim (contoh: T02)"
            className="p-2 border rounded w-full sm:w-64"
          />
          <button
            onClick={startMatchSearch}
            className="bg-[#255F38] text-white p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
          >
            Mulai
          </button>
          <button
            onClick={resetMatchSearch}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>

        {/* Workflow Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
          <span className="text-sm sm:text-lg font-bold">1. Input Kode Tim</span>
          <span className="text-2xl hidden sm:inline">→</span>
          <span className="text-sm sm:text-lg font-bold">2. Cari di Daftar Referensi</span>
          <span className="text-2xl hidden sm:inline">→</span>
          <span className="text-sm sm:text-lg font-bold">3. Tampilkan di Tabel Hasil</span>
        </div>

        {/* Step-by-Step Narrative */}
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Langkah Pencarian:</strong>{" "}
            {matchStepExplanation || "Masukkan kode tim dan klik Mulai untuk melihat proses pencarian."}
          </p>
        </div>

        {/* Reference Table */}
        <h3 className="font-semibold text-[#255F38] mt-6">Daftar Referensi</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {matchReferenceData.map((value, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                >
                  <td
                    className={`border border-green-600 px-4 py-2 whitespace-nowrap ${
                      matchSearching && matchCurrentIndex === rowIndex
                        ? "bg-yellow-200 animate-pulse"
                        : ""
                    } ${
                      !matchSearching &&
                      value === matchLookupValue &&
                      matchResult
                        ? "bg-green-200"
                        : ""
                    }`}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Result Table */}
        <h3 className="font-semibold text-[#255F38] mt-6">Tabel Hasil</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nilai</th>
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Posisi</th>
              </tr>
            </thead>
            <tbody>
              {matchResultTable.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } ${
                    row.value === matchLookupValue && row.position !== "-"
                      ? "bg-green-200"
                      : ""
                  }`}
                >
                  <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.value}</td>
                  <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-4 text-sm md:text-base">
          <strong>Hasil:</strong>{" "}
          {matchResult || (matchSearching ? "Mencari..." : "Masukkan kode tim dan klik Mulai")}
        </p>
      </div>

      {/* Visualisasi Interaktif CHOOSE */}
      <h3 className="font-semibold text-[#255F38] mt-6">
        Visualisasi Interaktif: Cara Kerja CHOOSE
      </h3>
      <p className="text-gray-700 text-sm md:text-base text-justify">
        Cobalah simulasi berikut untuk memahami cara kerja CHOOSE secara langsung. Masukkan nomor peringkat untuk memilih hadiah dari daftar.
      </p>
      <div className="bg-green-50 p-4 rounded shadow-md mt-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <input
            type="number"
            value={chooseIndex}
            onChange={(e) => setChooseIndex(e.target.value)}
            placeholder="Masukkan peringkat (1-3)"
            className="p-2 border rounded w-full sm:w-64"
          />
          <button
            onClick={startChooseSearch}
            className="bg-[#255F38] text-white p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
          >
            Mulai
          </button>
          <button
            onClick={resetChooseSearch}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>

        {/* Workflow Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
          <span className="text-sm sm:text-lg font-bold">1. Input Peringkat</span>
          <span className="text-2xl hidden sm:inline">→</span>
          <span className="text-sm sm:text-lg font-bold">2. Pilih dari Daftar</span>
          <span className="text-2xl hidden sm:inline">→</span>
          <span className="text-sm sm:text-lg font-bold">3. Tampilkan di Tabel Hasil</span>
        </div>

        {/* Step-by-Step Narrative */}
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Langkah Pencarian:</strong>{" "}
            {chooseStepExplanation || "Masukkan nomor peringkat dan klik Mulai untuk melihat proses pemilihan."}
          </p>
        </div>

        {/* Reference Table */}
        <h3 className="font-semibold text-[#255F38] mt-6">Daftar Referensi</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {chooseReferenceData.map((value, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                >
                  <td
                    className={`border border-green-600 px-4 py-2 whitespace-nowrap ${
                      chooseSearching && parseInt(chooseIndex) === rowIndex + 1
                        ? "bg-yellow-200 animate-pulse"
                        : ""
                    } ${
                      !chooseSearching &&
                      chooseResult &&
                      chooseReferenceData.indexOf(value) === parseInt(chooseIndex) - 1
                        ? "bg-green-200"
                        : ""
                    }`}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Result Table */}
        <h3 className="font-semibold text-[#255F38] mt-6">Tabel Hasil</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nilai</th>
                <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Dipilih</th>
              </tr>
            </thead>
            <tbody>
              {chooseResultTable.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } ${
                    row.value === chooseResult && row.selected !== "-"
                      ? "bg-green-200"
                      : ""
                  }`}
                >
                  <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.value}</td>
                  <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.selected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-4 text-sm md:text-base">
          <strong>Hasil:</strong>{" "}
          {chooseResult || (chooseSearching ? "Memilih..." : "Masukkan peringkat dan klik Mulai")}
        </p>
      </div>
    </div>


      {/* Tombol Navigasi */}
      <div className="flex justify-between mt-8 px-4">
        <a href="/penerapan-lookup" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600">
          ← Sebelumnya
        </a>
        <a href="/contoh-reference" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}