// import React from "react";
// import Layout from "../../components/Admin/Layout";

// const Dashboard = () => {
//   // Dummy data to simulate database fetch
//   const dummyData = {
//     totalStudents: 3,
//     completedStudents: 2,
//     averageScores: {
//       kuis1: 60,
//       kuis2: 50,
//       kuis3: 45,
//       kuis4: 55,
//       evaluasi: 52,
//     },
//     highestScores: {
//       kuis1: { student: "SISWA 2", score: 100 },
//       kuis2: { student: "SISWA 1", score: 50 },
//       kuis3: { student: "SISWA 2", score: 90 },
//       kuis4: { student: "SISWA 2", score: 100 },
//       evaluasi: { student: "SISWA 2", score: 100 },
//     },
//     lowestScores: {
//       kuis1: { student: "SISWA 2", score: 20 },
//       kuis2: { student: "SISWA 2", score: 50 },
//       kuis3: { student: "SISWA 1", score: 0 },
//       kuis4: { student: "SISWA 1", score: 10 },
//       evaluasi: { student: "SISWA 1", score: 5 },
//     },
//     token: "0B71TP4P",
//   };

//   return (
//     <Layout>
//       <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
//         DASHBOARD GURU
//       </div>

//       <section className="bg-gray-100 p-6 rounded shadow-md mt-6 mb-6 text-center">
//         <h2 className="text-2xl font-bold text-[#255F38] mb-4">
//           Selamat Datang di Halaman Admin
//         </h2>
//         <div className="flex justify-between mb-4 items-center">
//           <div className="flex items-center space-x-4">
//             <select className="p-2 border rounded" defaultValue="Semua kelas">
//               <option value="Semua kelas">Semua kelas</option>
//               <option value="Kelas A">Kelas A</option>
//               <option value="Kelas B">Kelas B</option>
//               <option value="Kelas C">Kelas C</option>
//             </select>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//                 <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                   <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               <input
//                 type="text"
//                 placeholder="TOKEN"
//                 className="pl-10 p-2 border rounded w-64"
//                 value={dummyData.token}
//               />
//             </div>
//             <button className="bg-[#255F38] text-white p-2 rounded hover:bg-green-700 cursor-pointer">
//               Refresh
//             </button>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
//           <div className="border p-4 rounded">
//             <h3 className="text-sm font-bold text-gray-700">JUMLAH SISWA</h3>
//             <p className="text-base text-gray-700">{dummyData.totalStudents} SISWA</p>
//           </div>
//           <div className="border p-4 rounded">
//             <h3 className="text-sm font-bold text-gray-700">PROGRES BELAJAR</h3>
//             <p className="text-base text-gray-700">{dummyData.completedStudents} SISWA SELESAI</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="border p-4 rounded">
//             <h3 className="text-sm font-bold text-gray-700">NILAI RATA-RATA</h3>
//             <p className="text-sm text-gray-700">Kuis 1: {dummyData.averageScores.kuis1}</p>
//             <p className="text-sm text-gray-700">Kuis 2: {dummyData.averageScores.kuis2}</p>
//             <p className="text-sm text-gray-700">Kuis 3: {dummyData.averageScores.kuis3}</p>
//             <p className="text-sm text-gray-700">Kuis 4: {dummyData.averageScores.kuis4}</p>
//             <p className="text-sm text-gray-700">Evaluasi: {dummyData.averageScores.evaluasi}</p>
//           </div>
//           <div className="border p-4 rounded">
//             <h3 className="text-sm font-bold text-gray-700">NILAI TERTINGGI</h3>
//             <p className="text-sm text-gray-700">Kuis 1: {dummyData.highestScores.kuis1.student} ({dummyData.highestScores.kuis1.score})</p>
//             <p className="text-sm text-gray-700">Kuis 2: {dummyData.highestScores.kuis2.student} ({dummyData.highestScores.kuis2.score})</p>
//             <p className="text-sm text-gray-700">Kuis 3: {dummyData.highestScores.kuis3.student} ({dummyData.highestScores.kuis3.score})</p>
//             <p className="text-sm text-gray-700">Kuis 4: {dummyData.highestScores.kuis4.student} ({dummyData.highestScores.kuis4.score})</p>
//             <p className="text-sm text-gray-700">Evaluasi: {dummyData.highestScores.evaluasi.student} ({dummyData.highestScores.evaluasi.score})</p>
//           </div>
//           <div className="border p-4 rounded">
//             <h3 className="text-sm font-bold text-gray-700">NILAI TERENDAH</h3>
//             <p className="text-sm text-gray-700">Kuis 1: {dummyData.lowestScores.kuis1.student} ({dummyData.lowestScores.kuis1.score})</p>
//             <p className="text-sm text-gray-700">Kuis 2: {dummyData.lowestScores.kuis2.student} ({dummyData.lowestScores.kuis2.score})</p>
//             <p className="text-sm text-gray-700">Kuis 3: {dummyData.lowestScores.kuis3.student} ({dummyData.lowestScores.kuis3.score})</p>
//             <p className="text-sm text-gray-700">Kuis 4: {dummyData.lowestScores.kuis4.student} ({dummyData.lowestScores.kuis4.score})</p>
//             <p className="text-sm text-gray-700">Evaluasi: {dummyData.lowestScores.evaluasi.student} ({dummyData.lowestScores.evaluasi.score})</p>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Dashboard;

import React from "react";
import Layout from "../../components/Admin/Layout";

const Dashboard = () => {
  // Dummy data to simulate database fetch
  const dummyData = {
    totalStudents: 3,
    completedStudents: 2,
    averageScores: {
      kuis1: 60,
      kuis2: 50,
      kuis3: 45,
      kuis4: 55,
      evaluasi: 52,
    },
    highestScores: {
      kuis1: { student: "SISWA 2", score: 100 },
      kuis2: { student: "SISWA 1", score: 50 },
      kuis3: { student: "SISWA 2", score: 90 },
      kuis4: { student: "SISWA 2", score: 100 },
      evaluasi: { student: "SISWA 2", score: 100 },
    },
    lowestScores: {
      kuis1: { student: "SISWA 2", score: 20 },
      kuis2: { student: "SISWA 2", score: 50 },
      kuis3: { student: "SISWA 1", score: 0 },
      kuis4: { student: "SISWA 1", score: 10 },
      evaluasi: { student: "SISWA 1", score: 5 },
    },
    token: "0B71TP4P",
  };

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg md:text-xl text-center rounded-lg shadow-lg">
        DASHBOARD GURU
      </div>

      <section className="bg-gray-100 p-4 sm:p-6 rounded shadow-md mt-6 mb-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#255F38] mb-4">
          Selamat Datang di Halaman Admin
        </h2>
        <div className="flex flex-col sm:flex-row justify-between mb-4 items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <select className="p-2 border rounded w-full sm:w-auto max-w-xs">
              <option value="Semua kelas">Semua kelas</option>
              <option value="Kelas A">Kelas A</option>
              <option value="Kelas B">Kelas B</option>
              <option value="Kelas C">Kelas C</option>
            </select>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="TOKEN"
                className="pl-10 p-2 border rounded w-full sm:w-64"
                value={dummyData.token}
              />
            </div>
            <button className="bg-[#255F38] text-white p-2 rounded hover:bg-green-700 cursor-pointer w-full sm:w-auto">
              Refresh
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
          <div className="border p-4 rounded">
            <h3 className="text-sm font-bold text-gray-700">JUMLAH SISWA</h3>
            <p className="text-base text-gray-700">{dummyData.totalStudents} SISWA</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-sm font-bold text-gray-700">PROGRES BELAJAR</h3>
            <p className="text-base text-gray-700">{dummyData.completedStudents} SISWA SELESAI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <h3 className="text-sm font-bold text-gray-700">NILAI RATA-RATA</h3>
            <p className="text-sm text-gray-700">Kuis 1: {dummyData.averageScores.kuis1}</p>
            <p className="text-sm text-gray-700">Kuis 2: {dummyData.averageScores.kuis2}</p>
            <p className="text-sm text-gray-700">Kuis 3: {dummyData.averageScores.kuis3}</p>
            <p className="text-sm text-gray-700">Kuis 4: {dummyData.averageScores.kuis4}</p>
            <p className="text-sm text-gray-700">Evaluasi: {dummyData.averageScores.evaluasi}</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-sm font-bold text-gray-700">NILAI TERTINGGI</h3>
            <p className="text-sm text-gray-700">Kuis 1: {dummyData.highestScores.kuis1.student} ({dummyData.highestScores.kuis1.score})</p>
            <p className="text-sm text-gray-700">Kuis 2: {dummyData.highestScores.kuis2.student} ({dummyData.highestScores.kuis2.score})</p>
            <p className="text-sm text-gray-700">Kuis 3: {dummyData.highestScores.kuis3.student} ({dummyData.highestScores.kuis3.score})</p>
            <p className="text-sm text-gray-700">Kuis 4: {dummyData.highestScores.kuis4.student} ({dummyData.highestScores.kuis4.score})</p>
            <p className="text-sm text-gray-700">Evaluasi: {dummyData.highestScores.evaluasi.student} ({dummyData.highestScores.evaluasi.score})</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="text-sm font-bold text-gray-700">NILAI TERENDAH</h3>
            <p className="text-sm text-gray-700">Kuis 1: {dummyData.lowestScores.kuis1.student} ({dummyData.lowestScores.kuis1.score})</p>
            <p className="text-sm text-gray-700">Kuis 2: {dummyData.lowestScores.kuis2.student} ({dummyData.lowestScores.kuis2.score})</p>
            <p className="text-sm text-gray-700">Kuis 3: {dummyData.lowestScores.kuis3.student} ({dummyData.lowestScores.kuis3.score})</p>
            <p className="text-sm text-gray-700">Kuis 4: {dummyData.lowestScores.kuis4.student} ({dummyData.lowestScores.kuis4.score})</p>
            <p className="text-sm text-gray-700">Evaluasi: {dummyData.lowestScores.evaluasi.student} ({dummyData.lowestScores.evaluasi.score})</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;