// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function PencarianLookup() {
//    // State untuk mengatur visibilitas langkah interaktif
//   const [dekomposisiSteps, setDekomposisiSteps] = useState([false, false, false]);
//   const [polaSteps, setPolaSteps] = useState([false, false, false]);
//   const [abstraksiSteps, setAbstraksiSteps] = useState([false, false]);
//   const [algoritmaSteps, setAlgoritmaSteps] = useState([false, false, false]);

//   // Fungsi toggle untuk setiap bagian
//   const toggleDekomposisiStep = (index) => {
//     const newSteps = [...dekomposisiSteps];
//     newSteps[index] = !newSteps[index];
//     setDekomposisiSteps(newSteps);
//   };

//   const togglePolaStep = (index) => {
//     const newSteps = [...polaSteps];
//     newSteps[index] = !newSteps[index];
//     setPolaSteps(newSteps);
//   };

//   const toggleAbstraksiStep = (index) => {
//     const newSteps = [...abstraksiSteps];
//     newSteps[index] = !newSteps[index];
//     setAbstraksiSteps(newSteps);
//   };

//   const toggleAlgoritmaStep = (index) => {
//     const newSteps = [...algoritmaSteps];
//     newSteps[index] = !newSteps[index];
//     setAlgoritmaSteps(newSteps);
//   };

//   // State for VLOOKUP visualization
//   const [vlookupValue, setVlookupValue] = useState("");
//   const [vCurrentIndex, setVCurrentIndex] = useState(-1);
//   const [vResult, setVResult] = useState("");
//   const [vStepExplanation, setVStepExplanation] = useState("");
//   const [vSearching, setVSearching] = useState(false);
//   const [vResultTable, setVResultTable] = useState([
//     { code: "A0001", name: "" },
//     { code: "A0002", name: "" },
//     { code: "A0003", name: "" },
//   ].sort((a, b) => a.code.localeCompare(b.code)));

//   const vReferenceData = [
//     { code: "A0001", name: "Laptop", price: 8500000 },
//     { code: "A0002", name: "Printer", price: 2000000 },
//     { code: "A0003", name: "Mouse", price: 150000 },
//   ];

//   const startVLOOKUP = () => {
//     if (!vlookupValue) {
//       setVResult("Masukkan kode barang terlebih dahulu!");
//       return;
//     }
//     setVSearching(true);
//     setVCurrentIndex(0);
//     setVResult("");
//     setVStepExplanation(`Memulai pencarian kode ${vlookupValue}...`);
//     setVResultTable(vResultTable.map((row) => ({ ...row, name: "" })));
//   };

//   const resetVLOOKUP = () => {
//     setVlookupValue("");
//     setVCurrentIndex(-1);
//     setVResult("");
//     setVStepExplanation("");
//     setVSearching(false);
//     setVResultTable([
//       { code: "A0001", name: "" },
//       { code: "A0002", name: "" },
//       { code: "A0003", name: "" },
//     ].sort((a, b) => a.code.localeCompare(b.code)));
//   };

//   useEffect(() => {
//     let interval;
//     if (vSearching && vCurrentIndex >= 0 && vCurrentIndex < vReferenceData.length) {
//       interval = setInterval(() => {
//         const currentCode = vReferenceData[vCurrentIndex].code;
//         setVStepExplanation(`Mencocokkan kode ${vlookupValue} dengan ${currentCode} di baris ${vCurrentIndex + 1}...`);

//         if (currentCode === vlookupValue) {
//           const matchedName = vReferenceData[vCurrentIndex].name;
//           setVResultTable((prev) =>
//             prev.map((row) =>
//               row.code === vlookupValue ? { ...row, name: matchedName } : row
//             )
//           );
//           setVResult(`Ditemukan: ${matchedName}`);
//           setVStepExplanation(`Kode ${vlookupValue} ditemukan! Nama barang: ${matchedName}`);
//           setVSearching(false);
//           clearInterval(interval);
//         } else if (vCurrentIndex === vReferenceData.length - 1) {
//           setVResult("Tidak ditemukan");
//           setVStepExplanation(`Kode ${vlookupValue} tidak ditemukan dalam tabel referensi.`);
//           setVSearching(false);
//           clearInterval(interval);
//         } else {
//           setVCurrentIndex((prev) => prev + 1);
//         }
//       }, 1500);
//     }
//     return () => clearInterval(interval);
//   }, [vSearching, vCurrentIndex, vlookupValue]);

//   // State for HLOOKUP visualization
//   const [h_lookupValue, setHlookupValue] = useState("");
//   const [h_currentIndex, setHCurrentIndex] = useState(-1);
//   const [h_result, setHResult] = useState("");
//   const [h_stepExplanation, setHStepExplanation] = useState("");
//   const [h_searching, setHSearching] = useState(false);
//   const [h_resultTable, setHResultTable] = useState([
//     { day: "Senin", point: "" },
//     { day: "Selasa", point: "" },
//     { day: "Rabu", point: "" },
//   ].sort((a, b) => a.day.localeCompare(b.day)));

//   const hReferenceData = [
//     { label: "Hari", Senin: "Senin", Selasa: "Selasa", Rabu: "Rabu" },
//     { label: "Poin", Senin: "10", Selasa: "20", Rabu: "15" },
//   ];

//   const startHLOOKUP = () => {
//     if (!h_lookupValue) {
//       setHResult("Masukkan nama hari terlebih dahulu!");
//       return;
//     }
//     setHSearching(true);
//     setHCurrentIndex(0);
//     setHResult("");
//     setHStepExplanation(`Memulai pencarian hari ${h_lookupValue}...`);
//     setHResultTable(h_resultTable.map((row) => ({ ...row, point: "" })));
//   };

//   const resetHLOOKUP = () => {
//     setHlookupValue("");
//     setHCurrentIndex(-1);
//     setHResult("");
//     setHStepExplanation("");
//     setHSearching(false);
//     setHResultTable([
//       { day: "Senin", point: "" },
//       { day: "Selasa", point: "" },
//       { day: "Rabu", point: "" },
//     ].sort((a, b) => a.day.localeCompare(b.day)));
//   };

//   useEffect(() => {
//     let interval;
//     if (h_searching && h_currentIndex >= 0 && h_currentIndex < Object.keys(hReferenceData[0]).length - 1) {
//       interval = setInterval(() => {
//         const currentDay = hReferenceData[0][Object.keys(hReferenceData[0])[h_currentIndex + 1]];
//         setHStepExplanation(`Mencocokkan hari ${h_lookupValue} dengan ${currentDay} di kolom ${h_currentIndex + 1}...`);

//         if (currentDay === h_lookupValue) {
//           const matchedPoint = hReferenceData[1][Object.keys(hReferenceData[1])[h_currentIndex + 1]];
//           setHResultTable((prev) =>
//             prev.map((row) =>
//               row.day === h_lookupValue ? { ...row, point: matchedPoint } : row
//             )
//           );
//           setHResult(`Ditemukan: ${matchedPoint}`);
//           setHStepExplanation(`Hari ${h_lookupValue} ditemukan! Poin: ${matchedPoint}`);
//           setHSearching(false);
//           clearInterval(interval);
//         } else if (h_currentIndex === Object.keys(hReferenceData[0]).length - 2) {
//           setHResult("Tidak ditemukan");
//           setHStepExplanation(`Hari ${h_lookupValue} tidak ditemukan dalam tabel referensi.`);
//           setHSearching(false);
//           clearInterval(interval);
//         } else {
//           setHCurrentIndex((prev) => prev + 1);
//         }
//       }, 1500);
//     }
//     return () => clearInterval(interval);
//   }, [h_searching, h_currentIndex, h_lookupValue]);

//   return (
//     <Layout>
//       <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         A. PENCARIAN DATA
//       </div>

//       <section className="bg-green-100 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6 mb-2 sm:mb-6">
//         <h2 className="font-bold text-[#255F38] text-lg">Tujuan Pembelajaran:</h2>
//         <ol className="list-decimal list-inside ml-4 sm:ml-6 space-y-1 sm:space-y-2 mt-2 text-gray-700">
//           <li className="text-sm md:text-base">Memahami konsep pencarian data menggunakan fungsi Lookup.</li>
//           <li className="text-sm md:text-base">Menerapkan pendekatan Computational Thinking untuk menyelesaikan masalah pencarian data.</li>
//           <li className="text-sm md:text-base">Menggunakan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</li>
//         </ol>
//       </section>

//       <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6">
//         Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian: Lookup dan Reference. Fungsi Lookup digunakan untuk mencari nilai tertentu dalam tabel atau array dan mengembalikan hasil yang sesuai berdasarkan kunci pencarian. Fungsi ini sering diterapkan dalam spreadsheet untuk menemukan data terkait dengan nilai tertentu. Sementara itu, fungsi Reference digunakan untuk mengambil nilai berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel saat posisi data berubah. Dengan kedua metode ini, pencarian data menjadi lebih cepat dan akurat dibandingkan pencarian manual. Hasil pencarian memiliki dua kemungkinan:
//       </p>
//       <ul className="list-disc list-inside mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
//         <li className="text-sm md:text-base text-justify">
//           <strong>Data ditemukan</strong> → Data yang dicari sesuai dengan data dalam tabel.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Data tidak ditemukan</strong> → Data yang dicari tidak ada dalam tabel.
//         </li>
//       </ul>

//       <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg mt-2 sm:mt-6">
//         1. Pencarian Lookup
//       </div>
//       <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-2 sm:mt-4">
//         Dalam kehidupan sehari-hari, kita sering melakukan pencarian data, seperti mencari nomor telepon di kontak ponsel atau informasi barang di daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan lebih cepat dan efisien dengan menggunakan fungsi Lookup di aplikasi lembar kerja.
//       </p>
//       <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-2 sm:px-6">Fungsi Lookup digunakan untuk:</p>
//       <ul className="list-disc list-inside mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
//         <li className="text-sm md:text-base text-justify">
//           <strong>Mencari data</strong> dalam tabel → Membantu menemukan informasi di daftar besar.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Mengambil informasi</strong> berdasarkan referensi → Memungkinkan pencarian dengan kunci tertentu.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Mempermudah pengolahan</strong> data → Efektif untuk menangani data dalam jumlah banyak.
//         </li>
//       </ul>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <Lightbulb className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> Dekomposisi
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
//           Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan membaginya menjadi <span className="font-semibold">bagian-bagian kecil</span>. Pencarian data dalam tabel lembar kerja dapat diuraikan menjadi langkah-langkah berikut:
//         </p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base text-justify">
//             <strong>Identifikasi data</strong> yang akan dicari → Data harus memiliki nilai unik sebagai referensi, seperti kode barang atau kode siswa.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Menentukan tabel</strong> referensi → Data harus tersedia dalam tabel dengan format yang sesuai.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang tepat sesuai kebutuhan.
//           </li>
//         </ul>

//         <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
//             <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Memecah Masalah: Mencari Nama Siswa Berdasarkan Nomor Absen
//           </h3>
//           <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
//             Kamu membantu guru mencari nama siswa berdasarkan nomor absen menggunakan VLOOKUP. Daftar absen kelas mencakup: nomor absen "1" untuk "Ani", nomor absen "2" untuk "Budi", dan nomor absen "3" untuk "Clara". Tujuanmu adalah menemukan nama siswa untuk nomor absen "2".
//           </p>
//           <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk mempelajari langkah-langkah memecah masalah:
//           </p>
//           <div className="space-y-2 mt-2 sm:mt-4">
//             <button
//               onClick={() => toggleDekomposisiStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 1: Data yang Dicari
//             </button>
//             {dekomposisiSteps[0] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Data yang dicari:</strong> Nama siswa berdasarkan nomor absen, misalnya "2".
//               </p>
//             )}
//             <button
//               onClick={() => toggleDekomposisiStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 2: Daftar Referensi
//             </button>
//             {dekomposisiSteps[1] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Daftar referensi:</strong> Daftar absen kelas dengan nomor absen dan nama (1-Ani, 2-Budi, 3-Clara).
//               </p>
//             )}
//             <button
//               onClick={() => toggleDekomposisiStep(2)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 3: Fungsi yang Digunakan
//             </button>
//             {dekomposisiSteps[2] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Fungsi:</strong> VLOOKUP untuk mencari nama berdasarkan nomor absen.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <BarChart className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> PENGENALAN POLA
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
//           Setelah memecah permasalahan, kita perlu mengidentifikasi <span className="font-bold">pola dalam data</span> untuk memastikan pencarian dilakukan secara efisien.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Pola umum dalam pencarian data menggunakan Lookup meliputi:</p>
//       <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//         <li className="text-sm md:text-base text-justify">
//           <strong>Nilai referensi</strong> bersifat unik dalam tabel referensi.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Data dalam tabel</strong> referensi harus tersusun dengan benar sesuai urutan pencarian.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Pencarian dilakukan</strong> dengan mencocokkan nilai referensi dengan baris atau kolom pertama dalam tabel referensi.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Jika tabel tidak terurut</strong> maka parameter range_lookup harus bernilai FALSE untuk mencari kecocokan persis.
//         </li>
//         <li className="text-sm md:text-base text-justify">
//           <strong>Jika tabel terurut</strong> maka range_lookup bisa bernilai TRUE untuk pencarian nilai terdekat.
//         </li>
//       </ul>

//         <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
//             <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menemukan Pola: Pencarian Harga Makanan di Kantin Sekolah
//           </h3>
//           <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
//             Kamu membantu teman mencari harga makanan di kantin sekolah berdasarkan kode pesanan "A2" menggunakan VLOOKUP. Berdasarkan tabel, kode "A2" sesuai dengan "Bakso" seharga 8.000, dengan pola bahwa harga selalu ada di kolom ketiga.
//           </p>
//           <div className="mt-4 overflow-x-auto text-center">
//             <p className="text-gray-600 text-sm text-center mb-1 italic">Tabel: Daftar Makanan di Kantin Sekolah</p>
//             <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
//               <thead>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border border-green-600 px-2 py-1">Kode Pesanan</th>
//                   <th className="border border-green-600 px-2 py-1">Nama Makanan</th>
//                   <th className="border border-green-600 px-2 py-1">Harga</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-2 py-1">A1</td>
//                   <td className="border border-green-600 px-2 py-1">Nasi Goreng</td>
//                   <td className="border border-green-600 px-2 py-1">10.000</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border border-green-600 px-2 py-1">A2</td>
//                   <td className="border border-green-600 px-2 py-1">Bakso</td>
//                   <td className="border border-green-600 px-2 py-1">8.000</td>
//                 </tr>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-2 py-1">A3</td>
//                   <td className="border border-green-600 px-2 py-1">Mie Rebus</td>
//                   <td className="border border-green-600 px-2 py-1">7.000</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk mempelajari pola yang ditemukan:
//           </p>
//           <div className="space-y-2 mt-2 sm:mt-4">
//             <button
//               onClick={() => togglePolaStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Pola 1: Nilai Unik
//             </button>
//             {polaSteps[0] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Kode pesanan</strong> seperti "A2" bersifat unik untuk setiap makanan.
//               </p>
//             )}
//             <button
//               onClick={() => togglePolaStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Pola 2: Posisi Data
//             </button>
//             {polaSteps[1] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Harga</strong> (8.000) selalu terletak di kolom ketiga setelah kode dan nama.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <Filter className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ABSTRAKSI
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-2 sm:mt-4 text-justify">
//           Setelah mengidentifikasi pola, kita dapat <span className="font-semibold">menyederhanakan masalah</span> dengan <span className="font-semibold">mengabaikan</span> informasi yang tidak perlu dan fokus pada elemen penting untuk pencarian.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Bagian yang harus diperhatikan:</p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base text-justify">
//             <strong>Kolom atau baris pertama</strong> dalam tabel referensi harus berisi nilai referensi (lookup_value).
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Posisi kolom atau baris</strong> tempat data yang akan diambil harus diketahui.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             <strong>Gunakan tanda dolar</strong> atau absolute reference ($) untuk membuat referensi tabel tetap saat menyalin rumus.
//           </li>
//         </ul>


//         <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
//             <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menyederhanakan Masalah: Pencarian Poin Permainan
//           </h3>
//           <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
//             Kamu mengikuti lomba permainan dan ingin mencari poin untuk "Puzzle" menggunakan VLOOKUP. Berdasarkan tabel, "Puzzle" memiliki poin 30 dengan waktu 20 menit.
//           </p>
//           <div className="mt-4 overflow-x-auto text-center">
//             <p className="text-gray-600 text-sm text-center mb-1 italic">Tabel: Daftar Poin Permainan</p>
//             <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
//               <thead>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border border-green-600 px-2 py-1">Nama Permainan</th>
//                   <th className="border border-green-600 px-2 py-1">Poin</th>
//                   <th className="border border-green-600 px-2 py-1">Waktu (Menit)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-2 py-1">Lari</td>
//                   <td className="border border-green-600 px-2 py-1">50</td>
//                   <td className="border border-green-600 px-2 py-1">15</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border border-green-600 px-2 py-1">Puzzle</td>
//                   <td className="border border-green-600 px-2 py-1">30</td>
//                   <td className="border border-green-600 px-2 py-1">20</td>
//                 </tr>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-2 py-1">Kuis</td>
//                   <td className="border border-green-600 px-2 py-1">20</td>
//                   <td className="border border-green-600 px-2 py-1">10</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk mempelajari langkah-langkah menyederhanakan masalah:
//           </p>
//           <div className="space-y-2 mt-2 sm:mt-4">
//             <button
//               onClick={() => toggleAbstraksiStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 1: Data Relevan
//             </button>
//             {abstraksiSteps[0] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Data relevan:</strong> Nama permainan "Puzzle" dan poin 30.
//               </p>
//             )}
//             <button
//               onClick={() => toggleAbstraksiStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 2: Data Tidak Relevan
//             </button>
//             {abstraksiSteps[1] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Data diabaikan:</strong> Waktu (20 menit) tidak diperlukan untuk pencarian poin.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
//         <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <Code className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ALGORITMA
//         </div>
//         <p className="text-gray-600 text-sm md:text-base mt-2 sm:mt-4 text-justify">
//           Setelah memahami dan menyederhanakan masalah, kita dapat menyusun langkah-langkah sistematis untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Langkah-langkah penggunaan fungsi Lookup:</p>
//         <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
//           <li className="text-sm md:text-base text-justify">
//             Tentukan nilai referensi (lookup_value) yang akan dicari.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             Pilih tabel referensi (table_array) yang berisi data pencarian.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             Tentukan nomor kolom yang berisi data yang ingin diambil.
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             Pilih metode pencarian:
//             <ol className="list-decimal list-inside ml-4 sm:ml-6 mt-1">
//               <li className="text-sm md:text-base">Jika tabel tidak terurut, kita harus menggunakan FALSE agar VLOOKUP mencari kecocokan yang persis.</li>
//               <li className="text-sm md:text-base">Jika tabel terurut, kita bisa menggunakan TRUE untuk mencari nilai terdekat atau mendekati.</li>
//             </ol>
//           </li>
//           <li className="text-sm md:text-base text-justify">
//             Gunakan rumus VLOOKUP atau HLOOKUP dengan format yang benar.
//           </li>
//         </ul>

//         <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
//             <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menentukan Langkah: Pencarian Kategori Buku di Perpustakaan
//           </h3>
//           <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
//             Kamu membantu petugas perpustakaan mencari kategori buku untuk kode "K1" menggunakan VLOOKUP. Berdasarkan tabel, "K1" sesuai dengan "Matematika" dan kategori "Pelajaran" di kolom ketiga.
//           </p>
//           <div className="mt-4 overflow-x-auto text-center">
//             <p className="text-gray-600 text-sm text-center mb-1 italic">Tabel: Daftar Buku di Perpustakaan</p>
//             <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
//               <thead>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border border-green-600 px-2 py-1">Kode Buku</th>
//                   <th className="border border-green-600 px-2 py-1">Nama Buku</th>
//                   <th className="border border-green-600 px-2 py-1">Kategori</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-2 py-1">K1</td>
//                   <td className="border border-green-600 px-2 py-1">Matematika</td>
//                   <td className="border border-green-600 px-2 py-1">Pelajaran</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border border-green-600 px-2 py-1">K2</td>
//                   <td className="border border-green-600 px-2 py-1">Komik</td>
//                   <td className="border border-green-600 px-2 py-1">Hiburan</td>
//                 </tr>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-2 py-1">K3</td>
//                   <td className="border border-green-600 px-2 py-1">Ensiklopedia</td>
//                   <td className="border border-green-600 px-2 py-1">Pengetahuan</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk mempelajari langkah-langkah menentukan algoritma:
//           </p>
//           <div className="space-y-2 mt-2 sm:mt-4">
//             <button
//               onClick={() => toggleAlgoritmaStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 1: Nilai Referensi
//             </button>
//             {algoritmaSteps[0] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Nilai referensi:</strong> Kode buku, misalnya "K1".
//               </p>
//             )}
//             <button
//               onClick={() => toggleAlgoritmaStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 2: Daftar dan Posisi
//             </button>
//             {algoritmaSteps[1] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Daftar:</strong> Daftar buku (K1-Pelajaran, K2-Hiburan, K3-Pengetahuan). <strong>Posisi:</strong> Kategori di kolom ketiga.
//               </p>
//             )}
//             <button
//               onClick={() => toggleAlgoritmaStep(2)}
//               className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
//             >
//               <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 3: Langkah Pencarian
//             </button>
//             {algoritmaSteps[2] && (
//               <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
//                 <strong>Langkah:</strong> Cari "K1" dan ambil "Pelajaran" dari kolom ketiga menggunakan VLOOKUP.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//             <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
//       {/* Visualisasi Interaktif VLOOKUP */}
//       <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">
//         Visualisasi Interaktif: Cara Kerja VLOOKUP
//       </h3>
//       <p className="text-gray-700 text-sm md:text-base text-justify">
//         Cobalah simulasi berikut untuk memahami cara kerja VLOOKUP secara langsung. Masukkan kode barang untuk melihat proses pencarian data, dengan tabel referensi yang menunjukkan langkah-langkah dan tabel hasil yang menampilkan informasi yang ditemukan.
//       </p>
//       <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
//         <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2 sm:mb-4">
//           <input
//             type="text"
//             value={vlookupValue}
//             onChange={(e) => setVlookupValue(e.target.value)}
//             placeholder="Masukkan kode (contoh: A0002)"
//             className="p-1 sm:p-2 border rounded w-full"
//           />
//           <button
//             onClick={startVLOOKUP}
//             className="bg-[#255F38] text-white p-1 sm:p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
//           >
//             Mulai
//           </button>
//           <button
//             onClick={resetVLOOKUP}
//             className="bg-gray-500 text-white p-1 sm:p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Workflow Arrows */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mt-1 sm:mt-4 space-y-1 sm:space-y-0 text-center">
//           <span className="text-sm">1. Input Kode</span>
//           <span className="text-xl hidden sm:inline">→</span>
//           <span className="text-sm">2. Cari di Tabel Referensi</span>
//           <span className="text-xl hidden sm:inline">→</span>
//           <span className="text-sm">3. Tampilkan di Tabel Hasil</span>
//         </div>

//         {/* Step-by-Step Narrative */}
//         <div className="mt-2 sm:mt-4 p-1 sm:p-3 bg-gray-100 rounded">
//           <p className="text-gray-700 text-sm md:text-base">
//             <strong>Langkah Pencarian:</strong>{" "}
//             {vStepExplanation || "Masukkan kode barang dan klik Mulai untuk melihat proses pencarian."}
//           </p>
//         </div>

//         {/* Reference Table */}
//         <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Referensi</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Kode Barang</th>
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Nama Barang</th>
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Harga</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vReferenceData.map((item, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-green-50" : "bg-white"
//                   } ${
//                     vCurrentIndex === index && vSearching ? "bg-yellow-200 animate-pulse" : ""
//                   } ${
//                     !vSearching && item.code === vlookupValue ? "bg-green-200" : ""
//                   }`}
//                 >
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{item.code}</td>
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{item.name}</td>
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Result Table */}
//         <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Hasil</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Kode Barang</th>
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Nama Barang</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vResultTable.map((row, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-green-50" : "bg-white"
//                   } ${
//                     row.code === vlookupValue && row.name ? "bg-green-200" : ""
//                   }`}
//                 >
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.code}</td>
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.name || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
//           <strong>Hasil:</strong>{" "}
//           {vResult || (vSearching ? "Mencari..." : "Masukkan kode dan klik Mulai")}
//         </p>
//       </div>

//       {/* Visualisasi Interaktif HLOOKUP */}
//       <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">
//         Visualisasi Interaktif: Cara Kerja HLOOKUP
//       </h3>
//       <p className="text-gray-700 text-sm md:text-base text-justify">
//         Cobalah simulasi berikut untuk memahami cara kerja HLOOKUP secara langsung. Masukkan nama hari untuk melihat proses pencarian data, dengan tabel referensi yang menunjukkan langkah-langkah dan tabel hasil yang menampilkan poin yang ditemukan.
//       </p>
//       <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
//         <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2 sm:mb-4">
//           <input
//             type="text"
//             value={h_lookupValue}
//             onChange={(e) => setHlookupValue(e.target.value)}
//             placeholder="Masukkan hari (contoh: Senin)"
//             className="p-1 sm:p-2 border rounded w-full"
//           />
//           <button
//             onClick={startHLOOKUP}
//             className="bg-[#255F38] text-white p-1 sm:p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
//           >
//             Mulai
//           </button>
//           <button
//             onClick={resetHLOOKUP}
//             className="bg-gray-500 text-white p-1 sm:p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Workflow Arrows */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mt-1 sm:mt-4 space-y-1 sm:space-y-0 text-center">
//           <span className="text-sm">1. Input Hari</span>
//           <span className="text-xl hidden sm:inline">→</span>
//           <span className="text-sm">2. Cari di Tabel Referensi</span>
//           <span className="text-xl hidden sm:inline">→</span>
//           <span className="text-sm">3. Tampilkan di Tabel Hasil</span>
//         </div>

//         {/* Step-by-Step Narrative */}
//         <div className="mt-2 sm:mt-4 p-1 sm:p-3 bg-gray-100 rounded">
//           <p className="text-gray-700 text-sm md:text-base">
//             <strong>Langkah Pencarian:</strong>{" "}
//             {h_stepExplanation || "Masukkan nama hari dan klik Mulai untuk melihat proses pencarian."}
//           </p>
//         </div>

//         {/* Reference Table */}
//         <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Referensi</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
//             <tbody>
//               {hReferenceData.map((row, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
//                 >
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 bg-[#255F38] text-white whitespace-nowrap">{row.label}</td>
//                   {Object.keys(row).slice(1).map((day, colIndex) => (
//                     <td
//                       key={colIndex}
//                       className={`border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap ${
//                         h_currentIndex === colIndex && h_searching ? "bg-yellow-200 animate-pulse" : ""
//                       } ${
//                         !h_searching && rowIndex === 0 && row[day] === h_lookupValue ? "bg-green-200" : ""
//                       }`}
//                     >
//                       {row[day]}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Result Table */}
//         <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Hasil</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Hari</th>
//                 <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Poin</th>
//               </tr>
//             </thead>
//             <tbody>
//               {h_resultTable.map((row, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-green-50" : "bg-white"
//                   } ${
//                     row.day === h_lookupValue && row.point ? "bg-green-200" : ""
//                   }`}
//                 >
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.day}</td>
//                   <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.point || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
//           <strong>Hasil:</strong>{" "}
//           {h_result || (h_searching ? "Mencari..." : "Masukkan hari dan klik Mulai")}
//         </p>
//       </div>
//     </div>

//       <div className="flex justify-between items-center px-2 sm:px-6 py-2 mt-4">
//         <a href="/penerapan-ct" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px]">
//           ← Sebelumnya
//         </a>
//         <a href="/contoh-lookup" className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px]">
//           Selanjutnya →
//         </a>
//       </div>
//     </Layout>
//   );
// }

import Layout from "../../components/Layout";
import { Lightbulb, BarChart, Filter, Code, CheckCircle, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function PencarianLookup() {
   // State untuk mengatur visibilitas langkah interaktif
  const [dekomposisiSteps, setDekomposisiSteps] = useState([false, false, false]);
  const [polaSteps, setPolaSteps] = useState([false, false, false]);
  const [abstraksiSteps, setAbstraksiSteps] = useState([false, false]);
  const [algoritmaSteps, setAlgoritmaSteps] = useState([false, false, false]);

  // Fungsi toggle untuk setiap bagian
  const toggleDekomposisiStep = (index) => {
    const newSteps = [...dekomposisiSteps];
    newSteps[index] = !newSteps[index];
    setDekomposisiSteps(newSteps);
  };

  const togglePolaStep = (index) => {
    const newSteps = [...polaSteps];
    newSteps[index] = !newSteps[index];
    setPolaSteps(newSteps);
  };

  const toggleAbstraksiStep = (index) => {
    const newSteps = [...abstraksiSteps];
    newSteps[index] = !newSteps[index];
    setAbstraksiSteps(newSteps);
  };

  const toggleAlgoritmaStep = (index) => {
    const newSteps = [...algoritmaSteps];
    newSteps[index] = !newSteps[index];
    setAlgoritmaSteps(newSteps);
  };

  // State for VLOOKUP visualization
  const [vlookupValue, setVlookupValue] = useState("");
  const [vCurrentIndex, setVCurrentIndex] = useState(-1);
  const [vResult, setVResult] = useState("");
  const [vStepExplanation, setVStepExplanation] = useState("");
  const [vSearching, setVSearching] = useState(false);
  const [vResultTable, setVResultTable] = useState([
    { code: "A0001", name: "" },
    { code: "A0002", name: "" },
    { code: "A0003", name: "" },
  ].sort((a, b) => a.code.localeCompare(b.code)));

  const vReferenceData = [
    { code: "A0001", name: "Laptop", price: 8500000 },
    { code: "A0002", name: "Printer", price: 2000000 },
    { code: "A0003", name: "Mouse", price: 150000 },
  ];

  const startVLOOKUP = () => {
    if (!vlookupValue) {
      setVResult("Masukkan kode barang terlebih dahulu!");
      return;
    }
    setVSearching(true);
    setVCurrentIndex(0);
    setVResult("");
    setVStepExplanation(`Memulai pencarian kode ${vlookupValue}...`);
    setVResultTable(vResultTable.map((row) => ({ ...row, name: "" })));
  };

  const resetVLOOKUP = () => {
    setVlookupValue("");
    setVCurrentIndex(-1);
    setVResult("");
    setVStepExplanation("");
    setVSearching(false);
    setVResultTable([
      { code: "A0001", name: "" },
      { code: "A0002", name: "" },
      { code: "A0003", name: "" },
    ].sort((a, b) => a.code.localeCompare(b.code)));
  };

  useEffect(() => {
    let interval;
    if (vSearching && vCurrentIndex >= 0 && vCurrentIndex < vReferenceData.length) {
      interval = setInterval(() => {
        const currentCode = vReferenceData[vCurrentIndex].code;
        setVStepExplanation(`Mencocokkan kode ${vlookupValue} dengan ${currentCode} di baris ${vCurrentIndex + 1}...`);

        if (currentCode === vlookupValue) {
          const matchedName = vReferenceData[vCurrentIndex].name;
          setVResultTable((prev) =>
            prev.map((row) =>
              row.code === vlookupValue ? { ...row, name: matchedName } : row
            )
          );
          setVResult(`Ditemukan: ${matchedName}`);
          setVStepExplanation(`Kode ${vlookupValue} ditemukan! Nama barang: ${matchedName}`);
          setVSearching(false);
          clearInterval(interval);
        } else if (vCurrentIndex === vReferenceData.length - 1) {
          setVResult("Tidak ditemukan");
          setVStepExplanation(`Kode ${vlookupValue} tidak ditemukan dalam tabel referensi.`);
          setVSearching(false);
          clearInterval(interval);
        } else {
          setVCurrentIndex((prev) => prev + 1);
        }
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [vSearching, vCurrentIndex, vlookupValue]);

  // State for HLOOKUP visualization
  const [h_lookupValue, setHlookupValue] = useState("");
  const [h_currentIndex, setHCurrentIndex] = useState(-1);
  const [h_result, setHResult] = useState("");
  const [h_stepExplanation, setHStepExplanation] = useState("");
  const [h_searching, setHSearching] = useState(false);
  const [h_resultTable, setHResultTable] = useState([
    { day: "Senin", point: "" },
    { day: "Selasa", point: "" },
    { day: "Rabu", point: "" },
  ].sort((a, b) => a.day.localeCompare(b.day)));

  const hReferenceData = [
    { label: "Hari", Senin: "Senin", Selasa: "Selasa", Rabu: "Rabu" },
    { label: "Poin", Senin: "10", Selasa: "20", Rabu: "15" },
  ];

  const startHLOOKUP = () => {
    if (!h_lookupValue) {
      setHResult("Masukkan nama hari terlebih dahulu!");
      return;
    }
    setHSearching(true);
    setHCurrentIndex(0);
    setHResult("");
    setHStepExplanation(`Memulai pencarian hari ${h_lookupValue}...`);
    setHResultTable(h_resultTable.map((row) => ({ ...row, point: "" })));
  };

  const resetHLOOKUP = () => {
    setHlookupValue("");
    setHCurrentIndex(-1);
    setHResult("");
    setHStepExplanation("");
    setHSearching(false);
    setHResultTable([
      { day: "Senin", point: "" },
      { day: "Selasa", point: "" },
      { day: "Rabu", point: "" },
    ].sort((a, b) => a.day.localeCompare(b.day)));
  };

  useEffect(() => {
    let interval;
    if (h_searching && h_currentIndex >= 0 && h_currentIndex < Object.keys(hReferenceData[0]).length - 1) {
      interval = setInterval(() => {
        const currentDay = hReferenceData[0][Object.keys(hReferenceData[0])[h_currentIndex + 1]];
        setHStepExplanation(`Mencocokkan hari ${h_lookupValue} dengan ${currentDay} di kolom ${h_currentIndex + 1}...`);

        if (currentDay === h_lookupValue) {
          const matchedPoint = hReferenceData[1][Object.keys(hReferenceData[1])[h_currentIndex + 1]];
          setHResultTable((prev) =>
            prev.map((row) =>
              row.day === h_lookupValue ? { ...row, point: matchedPoint } : row
            )
          );
          setHResult(`Ditemukan: ${matchedPoint}`);
          setHStepExplanation(`Hari ${h_lookupValue} ditemukan! Poin: ${matchedPoint}`);
          setHSearching(false);
          clearInterval(interval);
        } else if (h_currentIndex === Object.keys(hReferenceData[0]).length - 2) {
          setHResult("Tidak ditemukan");
          setHStepExplanation(`Hari ${h_lookupValue} tidak ditemukan dalam tabel referensi.`);
          setHSearching(false);
          clearInterval(interval);
        } else {
          setHCurrentIndex((prev) => prev + 1);
        }
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [h_searching, h_currentIndex, h_lookupValue]);

  return (
    <Layout>
      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
        A. PENCARIAN DATA
      </div>

      <section className="bg-green-100 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6 mb-2 sm:mb-6">
        <h2 className="font-bold text-[#255F38] text-lg">Tujuan Pembelajaran:</h2>
        <ol className="list-decimal list-inside ml-4 sm:ml-6 space-y-1 sm:space-y-2 mt-2 text-gray-700">
          <li className="text-sm md:text-base">Memahami konsep pencarian data menggunakan fungsi Lookup.</li>
          <li className="text-sm md:text-base">Menerapkan pendekatan Computational Thinking untuk menyelesaikan masalah pencarian data.</li>
          <li className="text-sm md:text-base">Menggunakan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</li>
        </ol>
      </section>

      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6">
        Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian: Lookup dan Reference. Fungsi Lookup digunakan untuk mencari nilai tertentu dalam tabel atau array dan mengembalikan hasil yang sesuai berdasarkan kunci pencarian. Fungsi ini sering diterapkan dalam spreadsheet untuk menemukan data terkait dengan nilai tertentu. Sementara itu, fungsi Reference digunakan untuk mengambil nilai berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel saat posisi data berubah. Dengan kedua metode ini, pencarian data menjadi lebih cepat dan akurat dibandingkan pencarian manual. Hasil pencarian memiliki dua kemungkinan:
      </p>
      <ul className="list-disc list-inside mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <li className="text-sm md:text-base text-justify">
          <strong>Data ditemukan</strong> → Data yang dicari sesuai dengan data dalam tabel.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Data tidak ditemukan</strong> → Data yang dicari tidak ada dalam tabel.
        </li>
      </ul>

      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg mt-2 sm:mt-6">
        1. Pencarian Lookup
      </div>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-2 sm:mt-4">
        Dalam kehidupan sehari-hari, kita sering melakukan pencarian data, seperti mencari nomor telepon di kontak ponsel atau informasi barang di daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan lebih cepat dan efisien dengan menggunakan fungsi Lookup di aplikasi lembar kerja.
      </p>
      <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-2 sm:px-6">Fungsi Lookup digunakan untuk:</p>
      <ul className="list-disc list-inside mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <li className="text-sm md:text-base text-justify">
          <strong>Mencari data</strong> dalam tabel → Membantu menemukan informasi di daftar besar.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Mengambil informasi</strong> berdasarkan referensi → Memungkinkan pencarian dengan kunci tertentu.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Mempermudah pengolahan</strong> data → Efektif untuk menangani data dalam jumlah banyak.
        </li>
      </ul>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan membaginya menjadi <span className="font-semibold">bagian-bagian kecil</span>. Pencarian data dalam tabel lembar kerja dapat diuraikan menjadi langkah-langkah berikut:
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Identifikasi data</strong> yang akan dicari → Data harus memiliki nilai unik sebagai referensi, seperti kode barang atau kode siswa.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menentukan tabel</strong> referensi → Data harus tersedia dalam tabel dengan format yang sesuai.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang tepat sesuai kebutuhan.
          </li>
        </ul>

        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Memecah Masalah: Mencari Nama Siswa Berdasarkan Nomor Absen
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu membantu guru mencari nama siswa berdasarkan nomor absen menggunakan VLOOKUP. Daftar absen kelas mencakup: nomor absen "1" untuk "Ani", nomor absen "2" untuk "Budi", dan nomor absen "3" untuk "Clara". Tujuanmu adalah menemukan nama siswa untuk nomor absen "2".
          </p>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk mempelajari langkah-langkah memecah masalah:
          </p>
          <div className="space-y-2 mt-2 sm:mt-4">
            <button
              onClick={() => toggleDekomposisiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 1: Data yang Dicari
            </button>
            {dekomposisiSteps[0] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Data yang dicari:</strong> Nama siswa berdasarkan nomor absen, misalnya "2".
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 2: Daftar Referensi
            </button>
            {dekomposisiSteps[1] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Daftar referensi:</strong> Daftar absen kelas dengan nomor absen dan nama (1-Ani, 2-Budi, 3-Clara).
              </p>
            )}
            <button
              onClick={() => toggleDekomposisiStep(2)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 3: Fungsi yang Digunakan
            </button>
            {dekomposisiSteps[2] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Fungsi:</strong> VLOOKUP untuk mencari nama berdasarkan nomor absen.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> PENGENALAN POLA
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah memecah permasalahan, kita perlu mengidentifikasi <span className="font-bold">pola dalam data</span> untuk memastikan pencarian dilakukan secara efisien.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Pola umum dalam pencarian data menggunakan Lookup meliputi:</p>
      <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
        <li className="text-sm md:text-base text-justify">
          <strong>Nilai referensi</strong> bersifat unik dalam tabel referensi.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Data dalam tabel</strong> referensi harus tersusun dengan benar sesuai urutan pencarian.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Pencarian dilakukan</strong> dengan mencocokkan nilai referensi dengan baris atau kolom pertama dalam tabel referensi.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Jika tabel tidak terurut</strong> maka parameter range_lookup harus bernilai FALSE untuk mencari kecocokan persis.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Jika tabel terurut</strong> maka range_lookup bisa bernilai TRUE untuk pencarian nilai terdekat.
        </li>
      </ul>

        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menemukan Pola: Pencarian Harga Makanan di Kantin Sekolah
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu membantu teman mencari harga makanan di kantin sekolah berdasarkan kode pesanan "A2" menggunakan VLOOKUP. Berdasarkan tabel, kode "A2" sesuai dengan "Bakso" seharga 8.000, dengan pola bahwa harga selalu ada di kolom ketiga.
          </p>
          <div className="mt-4 overflow-x-auto text-center">
            <p className="text-gray-600 text-sm text-center mb-1 italic">Tabel: Daftar Makanan di Kantin Sekolah</p>
            <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Kode Pesanan</th>
                  <th className="border border-green-600 px-2 py-1">Nama Makanan</th>
                  <th className="border border-green-600 px-2 py-1">Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">A1</td>
                  <td className="border border-green-600 px-2 py-1">Nasi Goreng</td>
                  <td className="border border-green-600 px-2 py-1">10.000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-600 px-2 py-1">A2</td>
                  <td className="border border-green-600 px-2 py-1">Bakso</td>
                  <td className="border border-green-600 px-2 py-1">8.000</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">A3</td>
                  <td className="border border-green-600 px-2 py-1">Mie Rebus</td>
                  <td className="border border-green-600 px-2 py-1">7.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk mempelajari pola yang ditemukan:
          </p>
          <div className="space-y-2 mt-2 sm:mt-4">
            <button
              onClick={() => togglePolaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Pola 1: Nilai Unik
            </button>
            {polaSteps[0] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Kode pesanan</strong> seperti "A2" bersifat unik untuk setiap makanan.
              </p>
            )}
            <button
              onClick={() => togglePolaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Pola 2: Posisi Data
            </button>
            {polaSteps[1] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Harga</strong> (8.000) selalu terletak di kolom ketiga setelah kode dan nama.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ABSTRAKSI
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah mengidentifikasi pola, kita dapat <span className="font-semibold">menyederhanakan masalah</span> dengan <span className="font-semibold">mengabaikan</span> informasi yang tidak perlu dan fokus pada elemen penting untuk pencarian.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Bagian yang harus diperhatikan:</p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Kolom atau baris pertama</strong> dalam tabel referensi harus berisi nilai referensi (lookup_value).
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Posisi kolom atau baris</strong> tempat data yang akan diambil harus diketahui.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Gunakan tanda dolar</strong> atau absolute reference ($) untuk membuat referensi tabel tetap saat menyalin rumus.
          </li>
        </ul>


        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menyederhanakan Masalah: Pencarian Poin Permainan
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu mengikuti lomba permainan dan ingin mencari poin untuk "Puzzle" menggunakan VLOOKUP. Berdasarkan tabel, "Puzzle" memiliki poin 30 dengan waktu 20 menit.
          </p>
          <div className="mt-4 overflow-x-auto text-center">
            <p className="text-gray-600 text-sm text-center mb-1 italic">Tabel: Daftar Poin Permainan</p>
            <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Nama Permainan</th>
                  <th className="border border-green-600 px-2 py-1">Poin</th>
                  <th className="border border-green-600 px-2 py-1">Waktu (Menit)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">Lari</td>
                  <td className="border border-green-600 px-2 py-1">50</td>
                  <td className="border border-green-600 px-2 py-1">15</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-600 px-2 py-1">Puzzle</td>
                  <td className="border border-green-600 px-2 py-1">30</td>
                  <td className="border border-green-600 px-2 py-1">20</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">Kuis</td>
                  <td className="border border-green-600 px-2 py-1">20</td>
                  <td className="border border-green-600 px-2 py-1">10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk mempelajari langkah-langkah menyederhanakan masalah:
          </p>
          <div className="space-y-2 mt-2 sm:mt-4">
            <button
              onClick={() => toggleAbstraksiStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 1: Data Relevan
            </button>
            {abstraksiSteps[0] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Data relevan:</strong> Nama permainan "Puzzle" dan poin 30.
              </p>
            )}
            <button
              onClick={() => toggleAbstraksiStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 2: Data Tidak Relevan
            </button>
            {abstraksiSteps[1] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Data diabaikan:</strong> Waktu (20 menit) tidak diperlukan untuk pencarian poin.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ALGORITMA
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah memahami dan menyederhanakan masalah, kita dapat menyusun langkah-langkah sistematis untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Langkah-langkah penggunaan fungsi Lookup:</p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            Tentukan nilai referensi (lookup_value) yang akan dicari.
          </li>
          <li className="text-sm md:text-base text-justify">
            Pilih tabel referensi (table_array) yang berisi data pencarian.
          </li>
          <li className="text-sm md:text-base text-justify">
            Tentukan nomor kolom yang berisi data yang ingin diambil.
          </li>
          <li className="text-sm md:text-base text-justify">
            Pilih metode pencarian:
            <ol className="list-decimal list-inside ml-4 sm:ml-6 mt-1">
              <li className="text-sm md:text-base">Jika tabel tidak terurut, kita harus menggunakan FALSE agar VLOOKUP mencari kecocokan yang persis.</li>
              <li className="text-sm md:text-base">Jika tabel terurut, kita bisa menggunakan TRUE untuk mencari nilai terdekat atau mendekati.</li>
            </ol>
          </li>
          <li className="text-sm md:text-base text-justify">
            Gunakan rumus VLOOKUP atau HLOOKUP dengan format yang benar.
          </li>
        </ul>

        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menentukan Langkah: Pencarian Kategori Buku di Perpustakaan
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu membantu petugas perpustakaan mencari kategori buku dengan kode "K1" menggunakan VLOOKUP. Berdasarkan tabel, kode "K1" sesuai dengan buku "Matematika" yang termasuk dalam kategori "Pelajaran" di kolom ketiga.
          </p>
          <div className="mt-4 overflow-x-auto text-center">
            <p className="text-gray-600 text-sm text-center mb-1 italic">Tabel: Daftar Buku di Perpustakaan</p>
            <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 py-1">Kode Buku</th>
                  <th className="border border-green-600 px-2 py-1">Nama Buku</th>
                  <th className="border border-green-600 px-2 py-1">Kategori</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">K1</td>
                  <td className="border border-green-600 px-2 py-1">Matematika</td>
                  <td className="border border-green-600 px-2 py-1">Pelajaran</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-600 px-2 py-1">K2</td>
                  <td className="border border-green-600 px-2 py-1">Komik</td>
                  <td className="border border-green-600 px-2 py-1">Hiburan</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 py-1">K3</td>
                  <td className="border border-green-600 px-2 py-1">Ensiklopedia</td>
                  <td className="border border-green-600 px-2 py-1">Pengetahuan</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk mempelajari langkah-langkah menentukan algoritma:
          </p>
          <div className="space-y-2 mt-2 sm:mt-4">
            <button
              onClick={() => toggleAlgoritmaStep(0)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 1: Nilai Referensi
            </button>
            {algoritmaSteps[0] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Nilai referensi:</strong> Kode buku, misalnya "K1".
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(1)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 2: Daftar dan Posisi
            </button>
            {algoritmaSteps[1] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Daftar:</strong> Daftar buku (K1-Pelajaran, K2-Hiburan, K3-Pengetahuan). <strong>Posisi:</strong> Kategori di kolom ketiga.
              </p>
            )}
            <button
              onClick={() => toggleAlgoritmaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Langkah 3: Langkah Pencarian
            </button>
            {algoritmaSteps[2] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                <strong>Langkah:</strong> Cari "K1" dan ambil "Pelajaran" dari kolom ketiga menggunakan VLOOKUP.
              </p>
            )}
          </div>
        </div>
      </div>

            <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
      {/* Visualisasi Interaktif VLOOKUP */}
      <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">
        Visualisasi Interaktif: Cara Kerja VLOOKUP
      </h3>
      <p className="text-gray-700 text-sm md:text-base text-justify">
        Cobalah simulasi berikut untuk memahami cara kerja VLOOKUP secara langsung. Masukkan kode barang untuk melihat proses pencarian data, dengan tabel referensi yang menunjukkan langkah-langkah dan tabel hasil yang menampilkan informasi yang ditemukan.
      </p>
      <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2 sm:mb-4">
          <input
            type="text"
            value={vlookupValue}
            onChange={(e) => setVlookupValue(e.target.value)}
            placeholder="Masukkan kode (contoh: A0002)"
            className="p-1 sm:p-2 border rounded w-full"
          />
          <button
            onClick={startVLOOKUP}
            className="bg-[#255F38] text-white p-1 sm:p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
          >
            Mulai
          </button>
          <button
            onClick={resetVLOOKUP}
            className="bg-gray-500 text-white p-1 sm:p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>

        {/* Workflow Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mt-1 sm:mt-4 space-y-1 sm:space-y-0 text-center">
          <span className="text-sm">1. Input Kode</span>
          <span className="text-xl hidden sm:inline">→</span>
          <span className="text-sm">2. Cari di Tabel Referensi</span>
          <span className="text-xl hidden sm:inline">→</span>
          <span className="text-sm">3. Tampilkan di Tabel Hasil</span>
        </div>

        {/* Step-by-Step Narrative */}
        <div className="mt-2 sm:mt-4 p-1 sm:p-3 bg-gray-100 rounded">
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Langkah Pencarian:</strong>{" "}
            {vStepExplanation || "Masukkan kode barang dan klik Mulai untuk melihat proses pencarian."}
          </p>
        </div>

        {/* Reference Table */}
        <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Referensi</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Kode Barang</th>
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Nama Barang</th>
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Harga</th>
              </tr>
            </thead>
            <tbody>
              {vReferenceData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } ${
                    vCurrentIndex === index && vSearching ? "bg-yellow-200 animate-pulse" : ""
                  } ${
                    !vSearching && item.code === vlookupValue ? "bg-green-200" : ""
                  }`}
                >
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{item.code}</td>
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{item.name}</td>
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Result Table */}
        <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Hasil</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Kode Barang</th>
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Nama Barang</th>
              </tr>
            </thead>
            <tbody>
              {vResultTable.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } ${
                    row.code === vlookupValue && row.name ? "bg-green-200" : ""
                  }`}
                >
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.code}</td>
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.name || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
          <strong>Hasil:</strong>{" "}
          {vResult || (vSearching ? "Mencari..." : "Masukkan kode dan klik Mulai")}
        </p>
      </div>

      {/* Visualisasi Interaktif HLOOKUP */}
      <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">
        Visualisasi Interaktif: Cara Kerja HLOOKUP
      </h3>
      <p className="text-gray-700 text-sm md:text-base text-justify">
        Cobalah simulasi berikut untuk memahami cara kerja HLOOKUP secara langsung. Masukkan nama hari untuk melihat proses pencarian data, dengan tabel referensi yang menunjukkan langkah-langkah dan tabel hasil yang menampilkan poin yang ditemukan.
      </p>
      <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-2 sm:mb-4">
          <input
            type="text"
            value={h_lookupValue}
            onChange={(e) => setHlookupValue(e.target.value)}
            placeholder="Masukkan hari (contoh: Senin)"
            className="p-1 sm:p-2 border rounded w-full"
          />
          <button
            onClick={startHLOOKUP}
            className="bg-[#255F38] text-white p-1 sm:p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
          >
            Mulai
          </button>
          <button
            onClick={resetHLOOKUP}
            className="bg-gray-500 text-white p-1 sm:p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
          >
            Reset
          </button>
        </div>

        {/* Workflow Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 mt-1 sm:mt-4 space-y-1 sm:space-y-0 text-center">
          <span className="text-sm">1. Input Hari</span>
          <span className="text-xl hidden sm:inline">→</span>
          <span className="text-sm">2. Cari di Tabel Referensi</span>
          <span className="text-xl hidden sm:inline">→</span>
          <span className="text-sm">3. Tampilkan di Tabel Hasil</span>
        </div>

        {/* Step-by-Step Narrative */}
        <div className="mt-2 sm:mt-4 p-1 sm:p-3 bg-gray-100 rounded">
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Langkah Pencarian:</strong>{" "}
            {h_stepExplanation || "Masukkan nama hari dan klik Mulai untuk melihat proses pencarian."}
          </p>
        </div>

        {/* Reference Table */}
        <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Referensi</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
            <tbody>
              {hReferenceData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                >
                  <td className="border border-green-600 px-1 sm:px-4 py-1 bg-[#255F38] text-white whitespace-nowrap">{row.label}</td>
                  {Object.keys(row).slice(1).map((day, colIndex) => (
                    <td
                      key={colIndex}
                      className={`border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap ${
                        h_currentIndex === colIndex && h_searching ? "bg-yellow-200 animate-pulse" : ""
                      } ${
                        !h_searching && rowIndex === 0 && row[day] === h_lookupValue ? "bg-green-200" : ""
                      }`}
                    >
                      {row[day]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Result Table */}
        <h3 className="font-semibold text-[#255F38] mt-2 sm:mt-6 text-sm md:text-base">Tabel Hasil</h3>
        <div className="overflow-x-auto w-full">
          <table className="border-collapse border border-green-800 w-full mt-1 sm:mt-2">
            <thead>
              <tr className="bg-[#255F38] text-white">
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Hari</th>
                <th className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">Poin</th>
              </tr>
            </thead>
            <tbody>
              {h_resultTable.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-green-50" : "bg-white"
                  } ${
                    row.day === h_lookupValue && row.point ? "bg-green-200" : ""
                  }`}
                >
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.day}</td>
                  <td className="border border-green-600 px-1 sm:px-4 py-1 whitespace-nowrap">{row.point || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
          <strong>Hasil:</strong>{" "}
          {h_result || (h_searching ? "Mencari..." : "Masukkan hari dan klik Mulai")}
        </p>
      </div>
    </div>

      <div className="flex justify-between items-center px-2 sm:px-6 py-2 mt-4">
        <a href="/penerapan-ct" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 text-center min-w-[100px]">
          ← Sebelumnya
        </a>
        <a href="/contoh-lookup" className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1E4D2E] text-center min-w-[100px]">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}