// import Layout from "../../components/Layout";

// const Content = () => {
//   return (
//     <Layout>
//       <h1 className="text-xl md:text-2xl sm:text-lg font-bold mb-5 text-center text-green-800">
//         PENGANTAR BAB ANALISIS DATA
//       </h1>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Capaian Pembelajaran */}
//         <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800">
//           <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-800 inline-block px-3">
//             CAPAIAN PEMBELAJARAN
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base">
//             Pada akhir fase D, peserta didik mampu mengakses, mengolah, mengelola, dan menganalisis data secara efisien, terstruktur, dan sistematis untuk menginterpretasi dan memprediksi sekumpulan data dari situasi konkret sehari-hari dengan menggunakan perkakas TIK atau manual.
//           </p>
//         </div>

//         {/* Tujuan Pembelajaran */}
//         <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
//           <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-800 inline-block px-3">
//             TUJUAN PEMBELAJARAN
//           </h2>
//           <ul className="list-decimal list-inside text-gray-600 text-sm md:text-base">
//             <li>Peserta didik mampu memahami cara pencarian data dalam pengolah lembar kerja.</li>
//             <li>Peserta didik mampu memahami cara visualisasi data dalam pengolah lembar kerja.</li>
//             <li>Peserta didik mampu menentukan kriteria dan merangkas data berdasarkan kategori tertentu.</li>
//             <li>Peserta didik mampu menggunakan tools seperti pengolah lembar kerja untuk mengelola data dan menampilkan data sesuai dengan tujuan.</li>
//           </ul>
//         </div>
//       </div>
      
//     </Layout>
//   );
// };

// export default Content;

import Layout from "../../components/Layout"; 

const Content = () => {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl sm:text-lg font-bold mb-5 text-center text-green-800">
        PENGANTAR BAB ANALISIS DATA
      </h1>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capaian Pembelajaran */}
        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-800 inline-block px-3">
            CAPAIAN PEMBELAJARAN
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Pada akhir fase D, peserta didik mampu mengakses, mengolah, mengelola, dan menganalisis data secara efisien, terstruktur, dan sistematis untuk menginterpretasi dan memprediksi sekumpulan data dari situasi konkret sehari-hari dengan menggunakan perkakas TIK atau manual.
          </p>
        </div>

        {/* Tujuan Pembelajaran */}
        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-800 inline-block px-3">
            TUJUAN PEMBELAJARAN
          </h2>
          <ul className="list-decimal list-inside text-gray-600 text-sm md:text-base">
            <li>Peserta didik mampu memahami cara pencarian data dalam pengolah lembar kerja.</li>
            <li>Peserta didik mampu memahami cara visualisasi data dalam pengolah lembar kerja.</li>
            <li>Peserta didik mampu menentukan kriteria dan merangkas data berdasarkan kategori tertentu.</li>
            <li>Peserta didik mampu menggunakan tools seperti pengolah lembar kerja untuk mengelola data dan menampilkan data sesuai dengan tujuan.</li>
          </ul>
        </div>

        {/* Tombol Selanjutnya */}
        <div className="flex justify-end mt-5 sm:mt-7">
          <a 
            href="/pencarian-data" 
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base"
          >
            Selanjutnya
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Content;

