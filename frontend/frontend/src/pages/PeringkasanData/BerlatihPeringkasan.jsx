import Layout from "../../components/Materi/Layout";

const BerlatihPeringkasan = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container untuk Instruksi */}
        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
            💡 Instruksi
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base">
            <li>Gunakan fungsi yang sesuai untuk menjawab pertanyaan berikut.</li>
            <li>Tuliskan rumusnya di sel yang sesuai dan pastikan hasilnya benar.</li>
            <li>Unduh file kemudian kumpulkan pada tempat yang sudah disediakan.</li>
          </ul>
        </div>

        {/* Container untuk Soal Latihan */}
        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3">
            ❓ Soal Latihan
          </h2>
          <ol className="list-decimal list-inside text-gray-600 text-sm md:text-base">
            <li>Hitung total penjualan untuk kategori "Minuman" menggunakan fungsi SUMIF.</li>
            <li>Hitung total penjualan untuk kategori "Minuman" di kota "Jakarta" menggunakan fungsi SUMIFS.</li>
            <li>Hitung jumlah produk yang termasuk dalam kategori "Makanan" menggunakan fungsi COUNTIF.</li>
            <li>Hitung jumlah produk dalam kategori "Makanan" yang berada di kota "Bandung" menggunakan fungsi COUNTIFS.</li>
          </ol>
          
        </div>

        {/* Zoho Sheet Embed */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-5 border-2 border-green-800">
          <div className="flex justify-center">
            <iframe 
              width="100%" 
              height="400" 
              style={{ border: '1px solid #e7e7e7' }} 
              frameBorder="0" 
              scrolling="no" 
              src="https://sheet.zohopublic.com/sheet/published/3viiy535293c7271b4430a5e2e368a0ad2fed?mode=embed">
            </iframe>
          </div>
        </div>

        <div className="mt-8 bg-white shadow-md rounded-lg p-5 border-2 border-green-800">
          <div className="flex justify-center">
            <iframe 
              width="100%" 
              height="400" 
              style={{ border: '1px solid #e7e7e7' }} 
              frameBorder="0" 
              scrolling="no" 
              src="https://sheet.zohopublic.com/sheet/published/8wieo22dcc489c0fe4968ad9dcc9b8d9c0178?mode=embed">
            </iframe>
          </div>
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

export default BerlatihPeringkasan;
