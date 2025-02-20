import Layout from "../../components/Layout";

const Content = () => {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl sm:text-lg font-bold mb-5 text-center text-green-800">
        VISUALISASI DATA
      </h1>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Petunjuk Mengerjakan */}
        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-800 inline-block px-3">
            Cara Mengerjakan
          </h2>
          <ol className="list-decimal list-inside text-gray-600 text-sm md:text-base">
            <li>Urutkan kembali langkah-langkah tersebut dengan menuliskan angka urutannya pada kolom Nomor.</li>
            <li>Tulis setiap langkah dalam sel pada kolom Langkah Algoritma dengan urutan yang sudah diperbaiki.</li>
          </ol>
        </div>

        {/* Latihan: Menyusun Langkah Membuat Chart */}
        <div className="bg-white shadow-md rounded-lg p-5 border-2 border-green-800 mt-5">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-800 inline-block px-3">
            Latihan: Menyusun Langkah Membuat Chart
          </h2>
          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base">
            <li>Pilih jenis chart yang sesuai, misalnya Column Chart untuk membandingkan data.</li>
            <li>Siapkan data dan pastikan tabel sudah rapi sesuai kategori.</li>
            <li>Buat chart dengan memilih menu "Insert" lalu klik jenis chart yang diinginkan.</li>
            <li>Periksa apakah chart sudah jelas dan mudah dibaca.</li>
            <li>Pilih semua data yang akan dibuat chart.</li>
          </ul>
        </div>

        {/* Zoho Sheet Embed dengan Penjelasan */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-5 border-2 border-green-800">
          <div className="flex justify-center">
            <iframe 
              width="75%" 
              height="350" 
              style={{ border: "1px solid #f3f3f3" }} 
              frameBorder="0" 
              scrolling="no" 
              src="https://sheet.zohopublic.com/sheet/published/cc5ltdf04b9ecd4ab435297b87f7f67bb2d88?mode=embed">
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

export default Content;
