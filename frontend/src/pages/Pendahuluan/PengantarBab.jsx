
import Layout from "../../components/Layout";


const PengantarBab = () => {
  
  return (
    <Layout>
      {/* Header judul */}
      <h1 className="text-xl md:text-2xl text-center sm:text-lg font-bold mb-8 p-4 bg-[#255F38] text-white rounded-lg shadow-lg ">
        Pengantar Bab Analisis Data
      </h1>

      {/* Capaian Pembelajaran */}
      <div className="bg-white p-4 shadow-md rounded mt-4">
        <h2 className="font-bold text-lg text-[#255F38] flex items-center">
          <i className="ri-flag-line text-[#255F38] text-xl mr-2"></i> Capaian Pembelajaran
        </h2>
        <p className="mt-2 text-gray-700">
          Pada akhir fase D, peserta didik mampu mengakses, mengolah, mengelola, dan menganalisis data
          secara efisien, terstruktur, dan sistematis untuk menginterpretasi dan memprediksi sekumpulan
          data dari situasi konkret sehari-hari dengan menggunakan perkakas TIK atau manual.
        </p>
      </div>

      {/* Tujuan Pembelajaran */}
      <div className="bg-white p-4 shadow-md rounded mt-4">
        <h2 className="font-bold text-[#255F38] text-lg flex items-center">
          <i className="ri-check-double-line text-[#255F38] text-xl mr-2"></i> Tujuan Pembelajaran
        </h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>Peserta didik mampu memahami konsep analisis data dan pentingnya dalam pengolahan informasi.</li>
          <li>Peserta didik mampu menerapkan Computational Thinking (CT) dalam analisis data.</li>
          <li>Peserta didik mampu menggunakan fungsi pencarian data.</li>
          <li>Peserta didik mampu menyajikan data dalam bentuk visualisasi yang efektif.</li>
          <li>Peserta didik mampu menentukan kriteria dan meringkas data berdasarkan kategori tertentu.</li>
          <li>Peserta didik mampu mengelola data dengan sorting dan filtering untuk mempermudah analisis.</li>
        </ul>
      </div>

      {/* Tombol Navigasi */}
      <div className="flex justify-end mt-8 px-4">
          <a href="/pendahuluan" className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E]">
            Selanjutnya →
          </a>
      </div>
    </Layout>
  );
};

export default PengantarBab;
