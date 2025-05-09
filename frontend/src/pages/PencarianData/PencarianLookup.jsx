
// import Layout from "../../components/Layout";
// import { Lightbulb, BarChart, Filter, Code, CheckCircle, ChevronRight } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function PencarianLookup() {
//   // State untuk mengatur visibilitas langkah interaktif
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

//   // State for HLOOKUP visualization (renamed to avoid conflict)
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
//       <div className="p-4 bg-[#255F38] text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         A. PENCARIAN DATA
//       </div>

//       <section className="bg-green-100 p-4 rounded shadow-md mt-6 mb-6">
//         <h2 className="font-bold text-[#255F38]">Tujuan Pembelajaran:</h2>
//         <ol className="list-decimal list-inside ml-6 space-y-2 mt-4 text-gray-700">
//           <li>Memahami konsep pencarian data dengan menggunakan fungsi Lookup.</li>
//           <li>Menggunakan pendekatan Computational Thinking untuk menyelesaikan permasalahan pencarian data.</li>
//           <li>Menerapkan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</li>
//         </ol>
//       </section>

//       {/* Paragraf Penjelasan di Luar Section */}
//       <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 sm:px-6">
//         Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian, yaitu Lookup dan Reference. Lookup digunakan untuk mencari 
//         nilai tertentu dalam suatu tabel atau array dan mengembalikan hasil yang sesuai berdasarkan kunci pencarian. Fungsi ini sering digunakan 
//         dalam spreadsheet untuk menemukan data yang terkait dengan suatu nilai tertentu. Sementara itu, Reference digunakan untuk mengambil 
//         nilai berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel dalam menyesuaikan pencarian dengan posisi data yang 
//         berubah-ubah. Dengan kedua metode ini, pencarian data dapat dilakukan lebih cepat dan akurat dibandingkan dengan pencarian manual.
//         Hasil pencarian memiliki dua kemungkinan:
//       </p>
//       <ul className="list-disc list-inside mt-2 ml-8 text-gray-700 px-4 sm:px-6 space-y-2">
//         <li className="text-justify">
//           <strong>Data ditemukan</strong> → Data yang dicari cocok dengan data dalam tabel.
//         </li>
//         <li className="text-justify">
//           <strong>Data tidak ditemukan</strong> → Data yang dicari tidak ada dalam tabel.
//         </li>
//       </ul>

//       {/* Pencarian Lookup */}
//       <div className="p-4 bg-[#255F38] text-white font-bold text-lg mt-6">
//         1. Pencarian Lookup
//       </div>
//       <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-4 sm:px-6 mt-4">
//         Dalam kehidupan sehari-hari, kita sering melakukan pencarian data, seperti mencari nomor telepon di kontak ponsel atau mencari 
//         informasi barang di daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan dengan lebih cepat dan efisien menggunakan 
//         fungsi Lookup pada aplikasi lembar kerja.
//       </p>
//       <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-4 sm:px-6">Fungsi Lookup digunakan untuk:</p>
//       <ul className="list-disc list-inside mt-2 ml-8 text-gray-700 px-4 sm:px-6 space-y-2">
//         <li className="text-justify">
//           <strong>Mencari data</strong> dalam tabel → Digunakan untuk menemukan informasi dalam daftar besar.
//         </li>
//         <li className="text-justify">
//           <strong>Mengambil informasi</strong> berdasarkan referensi → Memungkinkan pencarian data dengan kunci tertentu.
//         </li>
//         <li className="text-justify">
//           <strong>Mempermudah pengolahan</strong> data → Efisien untuk data dalam jumlah banyak.
//         </li>
//       </ul>

//       {/* DEKOMPOSISI */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-12 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <Lightbulb className="mr-2 w-5 h-5" /> Dekomposisi
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
//           Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan memecahnya menjadi <span className="font-semibold">bagian-bagian kecil</span>. 
//           Pencarian data dalam tabel lembar kerja dapat dipecah menjadi beberapa langkah berikut: 
//         </p>
//         <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
//           <li className="text-justify">
//             <strong>Identifikasi data</strong> yang akan dicari → Data harus memiliki nilai unik sebagai referensi (misalnya, kode barang atau kode siswa).
//           </li>
//           <li className="text-justify">
//             <strong>Menentukan tabel</strong> referensi → Data harus tersedia dalam tabel dengan format yang benar.
//           </li>
//           <li className="text-justify">
//             <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang sesuai dengan kebutuhan:
//             <div className="ml-4 mt-2 space-y-4">
//               <section className="bg-gray-100 rounded p-4 shadow-lg">
//                 <h3 className="font-semibold text-[#255F38]">1. VLOOKUP</h3>
//                 <p>Mencari nilai dalam kolom pertama tabel dan mengembalikan nilai dari kolom yang ditentukan.</p>
//                 <pre className="bg-gray-200 p-2 rounded text-gray-800 overflow-x-auto whitespace-normal break-words text-xs sm:text-sm">
//                   =VLOOKUP(<span className="italic">lookup_value, table_array, col_index_num, [range_lookup]</span>)
//                 </pre>
//                 <p className="text-gray-700">Keterangan:</p>
//                 <ul className="list-disc list-inside ml-6 text-gray-700">
//                   <li><strong>lookup_value:</strong> Nilai yang akan dicari dalam kolom pertama tabel.</li>
//                   <li><strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.</li>
//                   <li><strong>col_index_num:</strong> Nomor kolom dari mana nilai yang ingin diambil.</li>
//                   <li><strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.</li>
//                 </ul>
//               </section>

//               <section className="bg-gray-100 rounded p-4 shadow-lg">
//                 <h3 className="font-semibold text-[#255F38]">2. HLOOKUP</h3>
//                 <p>Mencari nilai dalam baris pertama tabel dan mengembalikan nilai dari baris yang ditentukan.</p>
//                 <pre className="bg-gray-200 p-2 rounded text-gray-800 overflow-x-auto whitespace-normal break-words text-xs sm:text-sm">
//                   =HLOOKUP(<span className="italic">lookup_value, table_array, row_index_num, [range_lookup]</span>)
//                 </pre>
//                 <p className="text-gray-700">Keterangan:</p>
//                 <ul className="list-disc list-inside ml-6 text-gray-700">
//                   <li><strong>lookup_value:</strong> Nilai yang akan dicari dalam baris pertama tabel.</li>
//                   <li><strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.</li>
//                   <li><strong>row_index_num:</strong> Nomor baris dari mana nilai yang ingin diambil.</li>
//                   <li><strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.</li>
//                 </ul>
//               </section>
//             </div>
//           </li>
//         </ul>

//         {/* Interactive Case Study for Dekomposisi */}
//         <div className="bg-green-50 p-4 rounded shadow-md mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center">
//             <CheckCircle className="w-5 h-5 mr-2" /> Memecah Masalah: Mencari Nama Siswa Berdasarkan Nomor Absen
//           </h3>
//           <p className="text-gray-700 mt-2 text-sm md:text-base">
//             Kamu membantu guru mencari nama siswa berdasarkan nomor absen menggunakan VLOOKUP. Daftar absen kelas berisi: nomor absen "1" untuk "Ani", nomor absen "2" untuk "Budi", dan nomor absen "3" untuk "Clara". Kamu ingin menemukan nama untuk nomor absen "2".
//           </p>
//           <p className="text-gray-700 mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk melihat langkah-langkah memecah masalah:
//           </p>
//           <div className="space-y-3 mt-4">
//             <button
//               onClick={() => toggleDekomposisiStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Data yang Dicari
//             </button>
//             {dekomposisiSteps[0] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Data yang dicari:</strong> Nama siswa berdasarkan nomor absen, misalnya "2".
//               </p>
//             )}
//             <button
//               onClick={() => toggleDekomposisiStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Daftar Referensi
//             </button>
//             {dekomposisiSteps[1] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Daftar referensi:</strong> Daftar absen kelas dengan nomor absen dan nama (1-Ani, 2-Budi, 3-Clara).
//               </p>
//             )}
//             <button
//               onClick={() => toggleDekomposisiStep(2)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Fungsi yang Digunakan
//             </button>
//             {dekomposisiSteps[2] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Fungsi:</strong> VLOOKUP untuk mencari nama berdasarkan nomor absen.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* PENGENALAN POLA */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <BarChart className="w-5 h-5 mr-2" /> PENGENALAN POLA
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-6 text-justify">
//           Setelah memecah permasalahan, kita perlu mengenali <span className="font-bold">pola yang terdapat dalam data</span> untuk menentukan bagaimana pencarian dilakukan secara efisien.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Beberapa pola umum dalam pencarian data dengan Lookup:</p>
//         <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
//           <li className="text-justify">
//             <strong>Nilai referensi</strong> bersifat unik → Setiap nilai dalam tabel referensi harus unik.
//           </li>
//           <li className="text-justify">
//             <strong>Data dalam tabel</strong> harus tersusun → Sesuai urutan pencarian agar pencarian efisien.
//           </li>
//           <li className="text-justify">
//             <strong>Pencarian dilakukan</strong> dengan mencocokkan → Nilai referensi dengan baris atau kolom pertama.
//           </li>
//           <li className="text-justify">
//             <strong>Jika tabel tidak terurut</strong> → Parameter range_lookup harus bernilai FALSE untuk pencarian persis.
//           </li>
//           <li className="text-justify">
//             <strong>Jika tabel terurut</strong> → Parameter range_lookup bisa bernilai TRUE untuk pencarian terdekat.
//           </li>
//         </ul>
        
//         <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Contoh pola dalam tabel</p>
//         <div className="flex flex-col items-center mt-4">
//           <p className="text-gray-600 text-sm text-center mb-2 italic">
//             Table 1. Pengenalan Pola Lookup
//           </p>
//           <div className="overflow-x-auto w-full">
//             <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
//               <thead>
//                 <tr className="bg-[#255F38] text-white">
//                   <th className="border border-green-600 px-4 py-2">Kode Barang</th>
//                   <th className="border border-green-600 px-4 py-2">Nama Barang</th>
//                   <th className="border border-green-600 px-4 py-2">Harga</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-4 py-2">A0001</td>
//                   <td className="border border-green-600 px-4 py-2">Laptop</td>
//                   <td className="border border-green-600 px-4 py-2">8.500.000</td>
//                 </tr>
//                 <tr className="bg-white">
//                   <td className="border border-green-600 px-4 py-2">A0002</td>
//                   <td className="border border-green-600 px-4 py-2">Printer</td>
//                   <td className="border border-green-600 px-4 py-2">2.000.000</td>
//                 </tr>
//                 <tr className="bg-green-50">
//                   <td className="border border-green-600 px-4 py-2">A0003</td>
//                   <td className="border border-green-600 px-4 py-2">Mouse</td>
//                   <td className="border border-green-600 px-4 py-2">150.000</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Pola yang dapat dikenali dalam tabel</p>
//         <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
//           <li className="text-justify">
//             <strong>Kode Barang</strong> selalu unik → Tidak ada duplikat dalam kolom Kode Barang.
//           </li>
//           <li className="text-justify">
//             <strong>Nama Barang dan Harga</strong> berada di kolom tetap → Kolom ke-2 untuk nama, kolom ke-3 untuk harga.
//           </li>
//           <li className="text-justify">
//             <strong>Menggunakan VLOOKUP</strong> untuk mengambil informasi → Berdasarkan Kode Barang sebagai referensi.
//           </li>
//         </ul>

//         {/* Interactive Case Study for Pengenalan Pola */}
//         <div className="bg-green-50 p-4 rounded shadow-md mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center">
//             <CheckCircle className="w-5 h-5 mr-2" /> Menemukan Pola: Pencarian Harga di Kantin Sekolah
//           </h3>
//           <p className="text-gray-700 mt-2 text-sm md:text-base">
//             Kamu membantu teman mencari harga makanan di kantin sekolah berdasarkan kode pesanan menggunakan VLOOKUP. Daftar kantin berisi: kode "A1" untuk "Nasi Goreng" seharga 10.000, kode "A2" untuk "Bakso" seharga 8.000, dan kode "A3" untuk "Mie Rebus" seharga 7.000. Kamu ingin tahu harga untuk kode "A2".
//           </p>
//           <p className="text-gray-700 mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk melihat pola yang ditemukan:
//           </p>
//           <div className="space-y-3 mt-4">
//             <button
//               onClick={() => togglePolaStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Pola 1: Nilai Unik
//             </button>
//             {polaSteps[0] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Kode pesanan</strong> seperti "A2" adalah unik untuk setiap makanan.
//               </p>
//             )}
//             <button
//               onClick={() => togglePolaStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Pola 2: Posisi Data
//             </button>
//             {polaSteps[1] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Harga</strong> (8.000) selalu berada di sebelah kode pesanan "A2".
//               </p>
//             )}
//             <button
//               onClick={() => togglePolaStep(2)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Pola 3: Pencarian Persis
//             </button>
//             {polaSteps[2] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 Daftar tidak urut, jadi kita harus mencari kode <strong>"A2"</strong> dengan pencarian persis.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ABSTRAKSI */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <Filter className="w-5 h-5 mr-2" /> ABSTRAKSI
//         </div>
//         <p className="text-gray-700 text-sm md:text-base mt-4 text-justify">
//           Setelah mengenali pola, kita dapat <span className="font-semibold">menyederhanakan permasalahan</span> dengan <span className="font-semibold">mengabaikan</span> informasi yang tidak relevan dan hanya fokus pada bagian penting untuk pencarian.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Bagian yang harus diperhatikan:</p>
//         <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
//           <li className="text-justify">
//             <strong>Kolom/baris pertama</strong> dalam tabel → Harus berisi nilai referensi (lookup_value).
//           </li>
//           <li className="text-justify">
//             <strong>Posisi kolom/baris</strong> tempat data diambil → Harus diketahui dengan jelas.
//           </li>
//           <li className="text-justify">
//             <strong>Gunakan tanda dolar</strong> (absolute reference) → Untuk membuat referensi tabel tetap saat menyalin rumus.
//           </li>
//         </ul>

//         {/* Interactive Case Study for Abstraksi */}
//         <div className="bg-green-50 p-4 rounded shadow-md mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center">
//             <CheckCircle className="w-5 h-5 mr-2" /> Menyederhanakan Masalah: Pencarian Poin Permainan
//           </h3>
//           <p className="text-gray-700 mt-2 text-sm md:text-base">
//             Kamu ikut lomba permainan di sekolah dan perlu mencari poin berdasarkan nama permainan menggunakan VLOOKUP. Daftar permainan berisi: nama "Lari" dengan poin 50, nama "Puzzle" dengan poin 30, dan nama "Kuis" dengan poin 20. Kamu ingin tahu poin untuk permainan "Puzzle".
//           </p>
//           <p className="text-gray-700 mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk melihat langkah-langkah menyederhanakan masalah:
//           </p>
//           <div className="space-y-3 mt-4">
//             <button
//               onClick={() => toggleAbstraksiStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Data Relevan
//             </button>
//             {abstraksiSteps[0] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Data relevan:</strong> Nama permainan "Puzzle" dan poin 30.
//               </p>
//             )}
//             <button
//               onClick={() => toggleAbstraksiStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Data Tidak Relevan
//             </button>
//             {abstraksiSteps[1] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Data diabaikan:</strong> Detail lain seperti waktu permainan, karena hanya poin yang dibutuhkan.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ALGORITMA */}
//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//         <div className="absolute -top-6 left-4 bg-green-800 text-white px-5 py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
//           <Code className="w-5 h-5 mr-2" /> ALGORITMA
//         </div>
//         <p className="text-gray-600 text-sm md:text-base mt-4 text-justify">
//           Setelah masalah dipahami dan disederhanakan, kita dapat menyusun langkah-langkah sistematis untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
//         </p>
//         <p className="text-gray-700 text-sm md:text-base mt-2 text-justify">📌 Langkah-langkah penggunaan fungsi Lookup:</p>
//         <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
//           <li className="text-justify">
//             <strong>Tentukan nilai</strong> referensi → Identifikasi lookup_value yang akan dicari.
//           </li>
//           <li className="text-justify">
//             <strong>Pilih tabel</strong> referensi → Tentukan table_array yang berisi data pencarian.
//           </li>
//           <li className="text-justify">
//             <strong>Tentukan nomor</strong> baris/kolom → Identifikasi posisi data yang ingin diambil.
//           </li>
//           <li className="text-justify">
//             <strong>Pilih metode</strong> pencarian:
//             <ul className="list-disc list-inside ml-6 mt-1">
//               <li>Jika tabel tidak terurut → Gunakan <span className="font-semibold">FALSE</span> untuk pencarian persis.</li>
//               <li>Jika tabel terurut → Gunakan <span className="font-semibold">TRUE</span> untuk pencarian terdekat.</li>
//             </ul>
//           </li>
//           <li className="text-justify">
//             <strong>Gunakan rumus</strong> VLOOKUP/HLOOKUP → Tulis rumus dengan format yang benar.
//           </li>
//         </ul>

//         {/* Interactive Case Study for Algoritma */}
//         <div className="bg-green-50 p-4 rounded shadow-md mt-6">
//           <h3 className="font-semibold text-[#255F38] flex items-center">
//             <CheckCircle className="w-5 h-5 mr-2" /> Menentukan Langkah: Pencarian Kategori Buku di Perpustakaan
//           </h3>
//           <p className="text-gray-700 mt-2 text-sm md:text-base">
//             Kamu membantu petugas perpustakaan mencari kategori buku berdasarkan kode buku menggunakan VLOOKUP. Daftar buku berisi: kode "K1" untuk buku "Matematika" kategori "Pelajaran", kode "K2" untuk buku "Komik" kategori "Hiburan", dan kode "K3" untuk buku "Ensiklopedia" kategori "Pengetahuan". Kamu ingin tahu kategori untuk kode "K1".
//           </p>
//           <p className="text-gray-700 mt-4 text-sm md:text-base">
//             Klik tombol berikut untuk melihat langkah-langkah menentukan algoritma:
//           </p>
//           <div className="space-y-3 mt-4">
//             <button
//               onClick={() => toggleAlgoritmaStep(0)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 1: Nilai Referensi
//             </button>
//             {algoritmaSteps[0] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Nilai referensi:</strong> Kode buku, misalnya "K1".
//               </p>
//             )}
//             <button
//               onClick={() => toggleAlgoritmaStep(1)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 2: Daftar dan Posisi
//             </button>
//             {algoritmaSteps[1] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Daftar:</strong> Daftar buku (K1-Pelajaran, K2-Hiburan, K3-Pengetahuan). <strong>Posisi:</strong> Kategori ada di sebelah kode buku.
//               </p>
//             )}
//             <button
//               onClick={() => toggleAlgoritmaStep(2)}
//               className="flex items-center bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-1/2 shadow-md"
//             >
//               <ChevronRight className="w-4 h-4 mr-2" /> Langkah 3: Langkah Pencarian
//             </button>
//             {algoritmaSteps[2] && (
//               <p className="text-gray-700 pl-4 bg-gray-100 p-3 rounded text-sm md:text-base">
//                 <strong>Langkah:</strong> Cari kode "K1" di daftar, lalu ambil kategori "Pelajaran" di sebelahnya menggunakan VLOOKUP.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-5 border-gray-300 space-y-4 mt-10 relative">
//       {/* Visualisasi Interaktif VLOOKUP */}
//       <h3 className="font-semibold text-[#255F38] mt-6">
//         Visualisasi Interaktif: Cara Kerja VLOOKUP
//       </h3>
//       <p className="text-gray-700 text-sm md:text-base text-justify">
//         Cobalah simulasi berikut untuk memahami cara kerja VLOOKUP secara langsung. Masukkan kode barang untuk melihat proses pencarian data, dengan tabel referensi yang menunjukkan langkah-langkah dan tabel hasil yang menampilkan informasi yang ditemukan.
//       </p>
//       <div className="bg-green-50 p-4 rounded shadow-md mt-6">
//         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
//           <input
//             type="text"
//             value={vlookupValue}
//             onChange={(e) => setVlookupValue(e.target.value)}
//             placeholder="Masukkan kode (contoh: A0002)"
//             className="p-2 border rounded w-full sm:w-64"
//           />
//           <button
//             onClick={startVLOOKUP}
//             className="bg-[#255F38] text-white p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
//           >
//             Mulai
//           </button>
//           <button
//             onClick={resetVLOOKUP}
//             className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Workflow Arrows */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
//           <span className="text-sm sm:text-lg font-bold">1. Input Kode</span>
//           <span className="text-2xl hidden sm:inline">→</span>
//           <span className="text-sm sm:text-lg font-bold">2. Cari di Tabel Referensi</span>
//           <span className="text-2xl hidden sm:inline">→</span>
//           <span className="text-sm sm:text-lg font-bold">3. Tampilkan di Tabel Hasil</span>
//         </div>

//         {/* Step-by-Step Narrative */}
//         <div className="mt-4 p-3 bg-gray-100 rounded">
//           <p className="text-gray-700 text-sm md:text-base">
//             <strong>Langkah Pencarian:</strong>{" "}
//             {vStepExplanation || "Masukkan kode barang dan klik Mulai untuk melihat proses pencarian."}
//           </p>
//         </div>

//         {/* Reference Table */}
//         <h3 className="font-semibold text-[#255F38] mt-6">Tabel Referensi</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-2">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Kode Barang</th>
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nama Barang</th>
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Harga</th>
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
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{item.code}</td>
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{item.name}</td>
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Result Table */}
//         <h3 className="font-semibold text-[#255F38] mt-6">Tabel Hasil</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-2">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Kode Barang</th>
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Nama Barang</th>
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
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.code}</td>
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.name || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-700 mt-4 text-sm md:text-base">
//           <strong>Hasil:</strong>{" "}
//           {vResult || (vSearching ? "Mencari..." : "Masukkan kode dan klik Mulai")}
//         </p>
//       </div>

//       {/* Visualisasi Interaktif HLOOKUP */}
//       <h3 className="font-semibold text-[#255F38] mt-6">
//         Visualisasi Interaktif: Cara Kerja HLOOKUP
//       </h3>
//       <p className="text-gray-700 text-sm md:text-base text-justify">
//         Cobalah simulasi berikut untuk memahami cara kerja HLOOKUP secara langsung. Masukkan nama hari untuk melihat proses pencarian data, dengan tabel referensi yang menunjukkan langkah-langkah dan tabel hasil yang menampilkan poin yang ditemukan.
//       </p>
//       <div className="bg-green-50 p-4 rounded shadow-md mt-6">
//         <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
//           <input
//             type="text"
//             value={h_lookupValue}
//             onChange={(e) => setHlookupValue(e.target.value)}
//             placeholder="Masukkan hari (contoh: Senin)"
//             className="p-2 border rounded w-full sm:w-64"
//           />
//           <button
//             onClick={startHLOOKUP}
//             className="bg-[#255F38] text-white p-2 rounded hover:bg-[#1E4D2E] transition duration-300 w-full sm:w-auto"
//           >
//             Mulai
//           </button>
//           <button
//             onClick={resetHLOOKUP}
//             className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition duration-300 w-full sm:w-auto"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Workflow Arrows */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-4 mt-4 space-y-2 sm:space-y-0 text-center">
//           <span className="text-sm sm:text-lg font-bold">1. Input Hari</span>
//           <span className="text-2xl hidden sm:inline">→</span>
//           <span className="text-sm sm:text-lg font-bold">2. Cari di Tabel Referensi</span>
//           <span className="text-2xl hidden sm:inline">→</span>
//           <span className="text-sm sm:text-lg font-bold">3. Tampilkan di Tabel Hasil</span>
//         </div>

//         {/* Step-by-Step Narrative */}
//         <div className="mt-4 p-3 bg-gray-100 rounded">
//           <p className="text-gray-700 text-sm md:text-base">
//             <strong>Langkah Pencarian:</strong>{" "}
//             {h_stepExplanation || "Masukkan nama hari dan klik Mulai untuk melihat proses pencarian."}
//           </p>
//         </div>

//         {/* Reference Table */}
//         <h3 className="font-semibold text-[#255F38] mt-6">Tabel Referensi</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-2">
//             <tbody>
//               {hReferenceData.map((row, rowIndex) => (
//                 <tr
//                   key={rowIndex}
//                   className={`${rowIndex % 2 === 0 ? "bg-green-50" : "bg-white"}`}
//                 >
//                   <td className="border border-green-600 px-4 py-2 bg-[#255F38] text-white whitespace-nowrap">{row.label}</td>
//                   {Object.keys(row).slice(1).map((day, colIndex) => (
//                     <td
//                       key={colIndex}
//                       className={`border border-green-600 px-4 py-2 whitespace-nowrap ${
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
//         <h3 className="font-semibold text-[#255F38] mt-6">Tabel Hasil</h3>
//         <div className="overflow-x-auto w-full">
//           <table className="border-collapse border border-green-800 w-full mt-2">
//             <thead>
//               <tr className="bg-[#255F38] text-white">
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Hari</th>
//                 <th className="border border-green-600 px-4 py-2 whitespace-nowrap">Poin</th>
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
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.day}</td>
//                   <td className="border border-green-600 px-4 py-2 whitespace-nowrap">{row.point || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <p className="text-gray-700 mt-4 text-sm md:text-base">
//           <strong>Hasil:</strong>{" "}
//           {h_result || (h_searching ? "Mencari..." : "Masukkan hari dan klik Mulai")}
//         </p>
//       </div>
//     </div>

//       {/* Tombol Navigasi */}
//       <div className="flex flex-col sm:flex-row justify-between mt-8 px-4 sm:px-6 space-y-4 sm:space-y-0">
//         <a href="/penerapan-ct" className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 text-center">
//           ← Sebelumnya
//         </a>
//         <a href="/contoh-lookup" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] text-center">
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
          <li className="text-sm md:text-base">Memahami konsep pencarian data dengan menggunakan fungsi Lookup.</li>
          <li className="text-sm md:text-base">Menggunakan pendekatan Computational Thinking untuk menyelesaikan permasalahan pencarian data.</li>
          <li className="text-sm md:text-base">Menerapkan fungsi Lookup dalam studi kasus pencarian data di lembar kerja.</li>
        </ol>
      </section>

      {/* Paragraf Penjelasan di Luar Section */}
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6">
        Dalam proses pencarian data, terdapat dua jenis utama fungsi pencarian, yaitu Lookup dan Reference. Lookup digunakan untuk mencari 
        nilai tertentu dalam suatu tabel atau array dan mengembalikan hasil yang sesuai berdasarkan kunci pencarian. Fungsi ini sering digunakan 
        dalam spreadsheet untuk menemukan data yang terkait dengan suatu nilai tertentu. Sementara itu, Reference digunakan untuk mengambil 
        nilai berdasarkan referensi sel atau alamat memori, sehingga lebih fleksibel dalam menyesuaikan pencarian dengan posisi data yang 
        berubah-ubah. Dengan kedua metode ini, pencarian data dapat dilakukan lebih cepat dan akurat dibandingkan dengan pencarian manual.
        Hasil pencarian memiliki dua kemungkinan:
      </p>
      <ul className="list-disc list-inside mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <li className="text-sm md:text-base text-justify">
          <strong>Data ditemukan</strong> → Data yang dicari cocok dengan data dalam tabel.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Data tidak ditemukan</strong> → Data yang dicari tidak ada dalam tabel.
        </li>
      </ul>

      {/* Pencarian Lookup */}
      <div className="p-2 sm:p-4 bg-[#255F38] text-white font-bold text-lg mt-2 sm:mt-6">
        1. Pencarian Lookup
      </div>
      <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed px-2 sm:px-6 mt-2 sm:mt-4">
        Dalam kehidupan sehari-hari, kita sering melakukan pencarian data, seperti mencari nomor telepon di kontak ponsel atau mencari 
        informasi barang di daftar inventaris. Dalam dunia digital, pencarian data dapat dilakukan dengan lebih cepat dan efisien menggunakan 
        fungsi Lookup pada aplikasi lembar kerja.
      </p>
      <p className="text-gray-700 text-sm md:text-base font-semibold text-justify leading-relaxed px-2 sm:px-6">Fungsi Lookup digunakan untuk:</p>
      <ul className="list-disc list-inside mt-1 sm:mt-2 ml-6 px-2 sm:px-6 space-y-1 sm:space-y-2">
        <li className="text-sm md:text-base text-justify">
          <strong>Mencari data</strong> dalam tabel → Digunakan untuk menemukan informasi dalam daftar besar.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Mengambil informasi</strong> berdasarkan referensi → Memungkinkan pencarian data dengan kunci tertentu.
        </li>
        <li className="text-sm md:text-base text-justify">
          <strong>Mempermudah pengolahan</strong> data → Efisien untuk data dalam jumlah banyak.
        </li>
      </ul>

      {/* DEKOMPOSISI */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-6 sm:mt-12 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Lightbulb className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> Dekomposisi
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Sebelum melakukan pencarian dengan fungsi Lookup, kita perlu memahami <span className="font-semibold">komponen utama</span> dalam pencarian data dan memecahnya menjadi <span className="font-semibold">bagian-bagian kecil</span>. 
          Pencarian data dalam tabel lembar kerja dapat dipecah menjadi beberapa langkah berikut: 
        </p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Identifikasi data</strong> yang akan dicari → Data harus memiliki nilai unik sebagai referensi (misalnya, kode barang atau kode siswa).
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menentukan tabel</strong> referensi → Data harus tersedia dalam tabel dengan format yang benar.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menentukan jenis</strong> fungsi lookup → Pilih fungsi yang sesuai dengan kebutuhan:
            <div className="ml-2 sm:ml-4 mt-1 sm:mt-2 space-y-2">
              <section className="bg-gray-100 rounded p-2 sm:p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38] text-sm md:text-base">1. VLOOKUP</h3>
                <p className="text-gray-700 text-sm md:text-base">Mencari nilai dalam kolom pertama tabel dan mengembalikan nilai dari kolom yang ditentukan.</p>
                <pre className="bg-gray-200 p-1 sm:p-2 rounded text-gray-800 overflow-x-auto whitespace-normal break-words text-xs sm:text-sm">
                  =VLOOKUP(<span className="italic">lookup_value, table_array, col_index_num, [range_lookup]</span>)
                </pre>
                <p className="text-gray-700 text-sm md:text-base">Keterangan:</p>
                <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700">
                  <li className="text-sm md:text-base"><strong>lookup_value:</strong> Nilai yang akan dicari dalam kolom pertama tabel.</li>
                  <li className="text-sm md:text-base"><strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.</li>
                  <li className="text-sm md:text-base"><strong>col_index_num:</strong> Nomor kolom dari mana nilai yang ingin diambil.</li>
                  <li className="text-sm md:text-base"><strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.</li>
                </ul>
              </section>

              <section className="bg-gray-100 rounded p-2 sm:p-4 shadow-lg">
                <h3 className="font-semibold text-[#255F38] text-sm md:text-base">2. HLOOKUP</h3>
                <p className="text-gray-700 text-sm md:text-base">Mencari nilai dalam baris pertama tabel dan mengembalikan nilai dari baris yang ditentukan.</p>
                <pre className="bg-gray-200 p-1 sm:p-2 rounded text-gray-800 overflow-x-auto whitespace-normal break-words text-xs sm:text-sm">
                  =HLOOKUP(<span className="italic">lookup_value, table_array, row_index_num, [range_lookup]</span>)
                </pre>
                <p className="text-gray-700 text-sm md:text-base">Keterangan:</p>
                <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700">
                  <li className="text-sm md:text-base"><strong>lookup_value:</strong> Nilai yang akan dicari dalam baris pertama tabel.</li>
                  <li className="text-sm md:text-base"><strong>table_array:</strong> Rentang tabel tempat pencarian dilakukan.</li>
                  <li className="text-sm md:text-base"><strong>row_index_num:</strong> Nomor baris dari mana nilai yang ingin diambil.</li>
                  <li className="text-sm md:text-base"><strong>range_lookup:</strong> <span className="italic font-bold">TRUE</span> untuk pencarian nilai mendekati, <span className="italic font-bold">FALSE</span> untuk pencarian nilai persis.</li>
                </ul>
              </section>
            </div>
          </li>
        </ul>

        {/* Interactive Case Study for Dekomposisi */}
        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Memecah Masalah: Mencari Nama Siswa Berdasarkan Nomor Absen
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu membantu guru mencari nama siswa berdasarkan nomor absen menggunakan VLOOKUP. Daftar absen kelas berisi: nomor absen "1" untuk "Ani", nomor absen "2" untuk "Budi", dan nomor absen "3" untuk "Clara". Kamu ingin menemukan nama untuk nomor absen "2".
          </p>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk melihat langkah-langkah memecah masalah:
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

      {/* PENGENALAN POLA */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <BarChart className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> PENGENALAN POLA
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-4 sm:mt-6 text-justify">
          Setelah memecah permasalahan, kita perlu mengenali <span className="font-bold">pola yang terdapat dalam data</span> untuk menentukan bagaimana pencarian dilakukan secara efisien.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Beberapa pola umum dalam pencarian data dengan Lookup:</p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Nilai referensi</strong> bersifat unik → Setiap nilai dalam tabel referensi harus unik.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Data dalam tabel</strong> harus tersusun → Sesuai urutan pencarian agar pencarian efisien.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Pencarian dilakukan</strong> dengan mencocokkan → Nilai referensi dengan baris atau kolom pertama.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Jika tabel tidak terurut</strong> → Parameter range_lookup harus bernilai FALSE untuk pencarian persis.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Jika tabel terurut</strong> → Parameter range_lookup bisa bernilai TRUE untuk pencarian terdekat.
          </li>
        </ul>
        
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Contoh pola dalam tabel</p>
        <div className="flex flex-col items-center mt-2 sm:mt-4">
          <p className="text-gray-600 text-sm text-center mb-1 sm:mb-2 italic">
            Table 1. Pengenalan Pola Lookup
          </p>
          <div className="overflow-x-auto w-full">
            <table className="border-collapse border border-green-800 w-full md:w-2/3 text-center">
              <thead>
                <tr className="bg-[#255F38] text-white">
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">Kode Barang</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">Nama Barang</th>
                  <th className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">A0001</td>
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">Laptop</td>
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">8.500.000</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">A0002</td>
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">Printer</td>
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">2.000.000</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">A0003</td>
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">Mouse</td>
                  <td className="border border-green-600 px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap">150.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Pola yang dapat dikenali dalam tabel</p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Kode Barang</strong> selalu unik → Tidak ada duplikat dalam kolom Kode Barang.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Nama Barang dan Harga</strong> berada di kolom tetap → Kolom ke-2 untuk nama, kolom ke-3 untuk harga.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Menggunakan VLOOKUP</strong> untuk mengambil informasi → Berdasarkan Kode Barang sebagai referensi.
          </li>
        </ul>

        {/* Interactive Case Study for Pengenalan Pola */}
        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menemukan Pola: Pencarian Harga di Kantin Sekolah
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu membantu teman mencari harga makanan di kantin sekolah berdasarkan kode pesanan menggunakan VLOOKUP. Daftar kantin berisi: kode "A1" untuk "Nasi Goreng" seharga 10.000, kode "A2" untuk "Bakso" seharga 8.000, dan kode "A3" untuk "Mie Rebus" seharga 7.000. Kamu ingin tahu harga untuk kode "A2".
          </p>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk melihat pola yang ditemukan:
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
                <strong>Kode pesanan</strong> seperti "A2" adalah unik untuk setiap makanan.
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
                <strong>Harga</strong> (8.000) selalu berada di sebelah kode pesanan "A2".
              </p>
            )}
            <button
              onClick={() => togglePolaStep(2)}
              className="flex items-center bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] transition duration-300 w-full shadow-md"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" /> Pola 3: Pencarian Persis
            </button>
            {polaSteps[2] && (
              <p className="text-gray-700 pl-2 sm:pl-4 bg-gray-100 p-1 sm:p-3 rounded text-sm md:text-base">
                Daftar tidak urut, jadi kita harus mencari kode <strong>"A2"</strong> dengan pencarian persis.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ABSTRAKSI */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Filter className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ABSTRAKSI
        </div>
        <p className="text-gray-700 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah mengenali pola, kita dapat <span className="font-semibold">menyederhanakan permasalahan</span> dengan <span className="font-semibold">mengabaikan</span> informasi yang tidak relevan dan hanya fokus pada bagian penting untuk pencarian.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Bagian yang harus diperhatikan:</p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Kolom/baris pertama</strong> dalam tabel → Harus berisi nilai referensi (lookup_value).
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Posisi kolom/baris</strong> tempat data diambil → Harus diketahui dengan jelas.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Gunakan tanda dolar</strong> (absolute reference) → Untuk membuat referensi tabel tetap saat menyalin rumus.
          </li>
        </ul>

        {/* Interactive Case Study for Abstraksi */}
        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menyederhanakan Masalah: Pencarian Poin Permainan
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu ikut lomba permainan di sekolah dan perlu mencari poin berdasarkan nama permainan menggunakan VLOOKUP. Daftar permainan berisi: nama "Lari" dengan poin 50, nama "Puzzle" dengan poin 30, dan nama "Kuis" dengan poin 20. Kamu ingin tahu poin untuk permainan "Puzzle".
          </p>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk melihat langkah-langkah menyederhanakan masalah:
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
                <strong>Data diabaikan:</strong> Detail lain seperti waktu permainan, karena hanya poin yang dibutuhkan.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ALGORITMA */}
      <div className="bg-white p-3 sm:p-5 border-gray-300 space-y-2 sm:space-y-4 mt-4 sm:mt-10 relative">
        <div className="absolute -top-4 sm:-top-6 left-2 sm:left-4 bg-green-800 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-t-lg text-lg font-bold flex items-center shadow-lg">
          <Code className="mr-1 sm:mr-2 w-4 h-4 md:w-5 md:h-5" /> ALGORITMA
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-2 sm:mt-4 text-justify">
          Setelah masalah dipahami dan disederhanakan, kita dapat menyusun langkah-langkah sistematis untuk pencarian menggunakan VLOOKUP atau HLOOKUP.
        </p>
        <p className="text-gray-700 text-sm md:text-base mt-1 sm:mt-2 text-justify">📌 Langkah-langkah penggunaan fungsi Lookup:</p>
        <ul className="list-disc list-inside ml-4 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2">
          <li className="text-sm md:text-base text-justify">
            <strong>Tentukan nilai</strong> referensi → Identifikasi lookup_value yang akan dicari.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Pilih tabel</strong> referensi → Tentukan table_array yang berisi data pencarian.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Tentukan nomor</strong> baris/kolom → Identifikasi posisi data yang ingin diambil.
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Pilih metode</strong> pencarian:
            <ul className="list-disc list-inside ml-4 sm:ml-6 mt-1">
              <li className="text-sm md:text-base">Jika tabel tidak terurut → Gunakan <span className="font-semibold">FALSE</span> untuk pencarian persis.</li>
              <li className="text-sm md:text-base">Jika tabel terurut → Gunakan <span className="font-semibold">TRUE</span> untuk pencarian terdekat.</li>
            </ul>
          </li>
          <li className="text-sm md:text-base text-justify">
            <strong>Gunakan rumus</strong> VLOOKUP/HLOOKUP → Tulis rumus dengan format yang benar.
          </li>
        </ul>

        {/* Interactive Case Study for Algoritma */}
        <div className="bg-green-50 p-2 sm:p-4 rounded shadow-md mt-2 sm:mt-6">
          <h3 className="font-semibold text-[#255F38] flex items-center text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 sm:mr-2" /> Menentukan Langkah: Pencarian Kategori Buku di Perpustakaan
          </h3>
          <p className="text-gray-700 mt-1 sm:mt-2 text-sm md:text-base">
            Kamu membantu petugas perpustakaan mencari kategori buku berdasarkan kode buku menggunakan VLOOKUP. Daftar buku berisi: kode "K1" untuk buku "Matematika" kategori "Pelajaran", kode "K2" untuk buku "Komik" kategori "Hiburan", dan kode "K3" untuk buku "Ensiklopedia" kategori "Pengetahuan". Kamu ingin tahu kategori untuk kode "K1".
          </p>
          <p className="text-gray-700 mt-2 sm:mt-4 text-sm md:text-base">
            Klik tombol berikut untuk melihat langkah-langkah menentukan algoritma:
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
                <strong>Daftar:</strong> Daftar buku (K1-Pelajaran, K2-Hiburan, K3-Pengetahuan). <strong>Posisi:</strong> Kategori ada di sebelah kode buku.
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
                <strong>Langkah:</strong> Cari kode "K1" di daftar, lalu ambil kategori "Pelajaran" di sebelahnya menggunakan VLOOKUP.
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

      {/* Tombol Navigasi */}
      <div className="flex flex-col sm:flex-row justify-between mt-2 sm:mt-8 px-2 sm:px-6 space-y-2 sm:space-y-0">
        <a href="/penerapan-ct" className="bg-gray-500 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-gray-600 text-center w-full sm:w-auto">
          ← Sebelumnya
        </a>
        <a href="/contoh-lookup" className="bg-[#255F38] text-white px-3 sm:px-5 py-1 sm:py-2 rounded-lg hover:bg-[#1E4D2E] text-center w-full sm:w-auto">
          Selanjutnya →
        </a>
      </div>
    </Layout>
  );
}