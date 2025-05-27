import React from "react";
import Layout from "../../components/Layout";

export default function PetunjukPengerjaanEvaluasi() {
  return (
    <Layout>
      <div className="flex-1 p-6 bg-gray-100 flex justify-center items-start">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <h1 className="text-2xl font-bold text-green-800 mb-2">EVALUASI AKHIR PENGELOLAAN DATA</h1>
          <div className="bg-gray-100 p-6 rounded-lg text-left">
            <p className="text-gray-600 mb-4">
              Evaluasi ini bertujuan untuk menguji pengetahuan Anda tentang materi Pengelolaan Data dengan teknik Sorting dan Filtering dengan ketentuan sebagai berikut: 
            </p>
            <ul className="list-disc list-outside text-gray-600 space-y-2 ml-6">
              <li>
                <div>
                  Terdapat 10 soal pilihan ganda pada evaluasi ini. Untuk memulai, tekan tombol "MULAI". 
                </div>
              </li>
              <li>
                <div>
                  Waktu pengerjaan evaluasi selama 40 menit.
                </div>
              </li>
              <li>
                <div>
                  Jika nilai belum mencapai KKM, maka evaluasi harus diulang. Namun jika nilai sudah mencapai atau melebihi KKM, peserta didik tidak perlu mengerjakan evaluasi lagi. 
                </div>
              </li>
              <li>
                <div>
                  Jika semua soal selesai, klik tombol "Selesai". 
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => (window.location.href = "/kuis-evaluasi")}
              className="bg-[#255F38] text-white px-5 py-2 rounded-lg hover:bg-[#1E4D2E] cursor-pointer transition duration-300"
            >
              Mulai
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}