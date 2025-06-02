// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../../components/admin/Layout';

// // Fungsi untuk mengkapitalkan huruf pada nama kelas (misal: 10c → 10C)
// const capitalizeClass = (className) => {
//   if (!className) return className;
//   // Pisahkan angka dan huruf (misal: "10c" → ["10", "c"])
//   const match = className.match(/(\d+)([a-zA-Z]+)/);
//   if (match) {
//     const number = match[1]; // Bagian angka
//     const letter = match[2].toUpperCase(); // Bagian huruf dijadikan kapital
//     return `${number}${letter}`;
//   }
//   return className.toUpperCase(); // Jika tidak ada angka, kapital semua
// };

// const DataSiswa = () => {
//   const [students, setStudents] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [classFilter, setClassFilter] = useState('Semua kelas');
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [formData, setFormData] = useState({ full_name: '', class: '' });
//   const [currentPage, setCurrentPage] = useState(1);
//   const studentsPerPage = 10;

//   const fetchStudents = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log('Fetching students with token:', token);
//       const response = await axios.get('http://localhost:5000/api/students', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Students response:', response.data);
//       // Kapitalkan kelas pada data siswa
//       const capitalizedStudents = response.data.map(student => ({
//         ...student,
//         class: capitalizeClass(student.class)
//       }));
//       setStudents(capitalizedStudents);
//       setError('');
//     } catch (err) {
//       console.error('Fetch students error:', err);
//       setError(err.response?.data?.message || 'Gagal mengambil data siswa');
//     }
//   };

//   const fetchClasses = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log('Fetching classes with token:', token);
//       const response = await axios.get('http://localhost:5000/api/students/classes', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Classes response:', response.data);
//       // Kapitalkan kelas pada daftar kelas
//       const capitalizedClasses = response.data.map(cls => capitalizeClass(cls));
//       setClasses(['Semua kelas', ...capitalizedClasses]);
//       setError('');
//     } catch (err) {
//       console.error('Fetch classes error:', err);
//       setError(err.response?.data?.message || 'Gagal mengambil daftar kelas');
//     }
//   };

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     console.log('Current user:', user);
//     if (!user || user.role !== 'teacher') {
//       console.log('Redirecting to /masuk due to invalid user or role');
//       window.location.href = '/masuk';
//     } else {
//       fetchStudents();
//       fetchClasses();
//     }
//   }, []);

//   const handleUpdateStudent = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const updatedData = {
//         full_name: formData.full_name || selectedStudent.full_name,
//         class: formData.class || selectedStudent.class, // Kirim as-is ke database
//       };
//       console.log('Updating student:', updatedData);

//       if (
//         updatedData.full_name === selectedStudent.full_name &&
//         updatedData.class === selectedStudent.class
//       ) {
//         console.log('No changes detected, closing modal');
//         setIsModalOpen(false);
//         return;
//       }

//       const response = await axios.put(
//         `http://localhost:5000/api/students/${selectedStudent.nis}`,
//         updatedData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log('Update response:', response.data);
//       fetchStudents(); // Ambil ulang data untuk memastikan kapitalisasi
//       setIsModalOpen(false);
//       alert('Data siswa berhasil diperbarui');
//     } catch (err) {
//       console.error('Update student error:', err);
//       alert(err.response?.data?.message || 'Gagal memperbarui data siswa');
//     }
//   };

//   const handleDelete = async (nis) => {
//     if (!window.confirm('Yakin ingin menghapus siswa ini?')) return;
//     try {
//       const token = localStorage.getItem('token');
//       console.log('Deleting student with NIS:', nis);
//       await axios.delete(`http://localhost:5000/api/students/${nis}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       console.log('Student deleted successfully');
//       fetchStudents();
//     } catch (err) {
//       console.error('Delete student error:', err);
//       alert(err.response?.data?.message || 'Gagal menghapus siswa');
//     }
//   };

//   // Filter dan pagination
//   const filteredStudents = students.filter(
//     (student) => classFilter === 'Semua kelas' || student.class === capitalizeClass(classFilter)
//   );
//   const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <Layout>
//       <section className="p-4 mt-6 mb-6 text-center bg-gray-100 rounded shadow-md sm:p-6">
//         <h2 className="text-xl font-semibold text-[#255F38] mb-6">Data Siswa</h2>
//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
//         <div className="flex items-center justify-start mb-6">
//           <select
//             className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//             value={classFilter}
//             onChange={(e) => {
//               setClassFilter(e.target.value);
//               setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
//             }}
//           >
//             {classes.map((cls, index) => (
//               <option key={index} value={cls} className="text-sm bg-white">
//                 {cls}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full text-gray-700 border-collapse">
//             <thead className="bg-[#255F38] text-white">
//               <tr>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">NIS</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Nama</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300 sm:table-cell">Kelas</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300 sm:table-cell">Status Belajar</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentStudents.map((student) => (
//                 <tr
//                   key={student.nis}
//                   className="transition-colors duration-200 hover:bg-gray-100 even:bg-gray-50"
//                 >
//                   <td className="p-2 text-sm border-b border-gray-200">{student.nis}</td>
//                   <td className="p-2 text-sm border-b border-gray-200">{student.full_name}</td>
//                   <td className="p-2 text-sm border-b border-gray-200 sm:table-cell">{student.class}</td>
//                   <td className="p-2 text-sm border-b border-gray-200 sm:table-cell">
//                     <span
//                       className={`px-2 py-1 rounded-full text-white text-sm ${
//                         student.status === 'SELESAI' ? 'bg-green-500' : 'bg-red-500'
//                       }`}
//                     >
//                       {student.status}
//                     </span>
//                   </td>
//                   <td className="flex justify-center p-2 space-x-2 border-b border-gray-200">
//                     <button
//                       onClick={() => {
//                         console.log('Opening modal for student:', student);
//                         setSelectedStudent(student);
//                         setFormData({
//                           full_name: student.full_name,
//                           class: student.class, // Sudah dikapitalkan
//                         });
//                         setIsModalOpen(true);
//                       }}
//                       className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600"
//                     >
//                       Perbarui
//                     </button>
//                     <button
//                       onClick={() => handleDelete(student.nis)}
//                       className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-red-500 rounded-lg hover:bg-red-600"
//                     >
//                       Hapus
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {currentStudents.length === 0 && !error && (
//           <p className="mt-4 text-sm text-gray-500">Tidak ada data siswa yang ditemukan untuk filter ini.</p>
//         )}

//         {/* Pagination Controls */}
//         {filteredStudents.length > 0 && (
//           <div className="flex justify-center mt-4 space-x-2">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
//             >
//               Sebelumnya
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handlePageChange(page)}
//                 className={`px-3 py-1 rounded-lg text-sm ${
//                   currentPage === page
//                     ? 'bg-[#255F38] text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 } transition-colors duration-200`}
//               >
//                 {page}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
//             >
//               Selanjutnya
//             </button>
//           </div>
//         )}
//       </section>

//       {isModalOpen && selectedStudent && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
//           <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="text-base font-medium text-[#255F38] mb-4">Edit Data Siswa</h3>
//             <div className="space-y-3">
//               <input
//                 type="text"
//                 value={formData.full_name}
//                 onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
//                 placeholder="Nama"
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//               />
//               <input
//                 type="text"
//                 value={formData.class}
//                 onChange={(e) => setFormData({ ...formData, class: e.target.value })}
//                 placeholder="Kelas (contoh: 10C)"
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//               />
//             </div>
//             <div className="flex justify-end mt-4 space-x-3">
//               <button
//                 onClick={() => {
//                   console.log('Closing modal');
//                   setIsModalOpen(false);
//                 }}
//                 className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 Batal
//               </button>
//               <button
//                 onClick={handleUpdateStudent}
//                 className="px-3 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600"
//               >
//                 Simpan
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default DataSiswa;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/admin/Layout";
import Swal from "sweetalert2";

// Fungsi untuk mengkapitalkan huruf pada nama kelas (misal: 10c → 10C)
const capitalizeClass = (className) => {
  if (!className) return className;
  // Pisahkan angka dan huruf (misal: "10c" → ["10", "c"])
  const match = className.match(/(\d+)([a-zA-Z]+)/);
  if (match) {
    const number = match[1]; // Bagian angka
    const letter = match[2].toUpperCase(); // Bagian huruf dijadikan kapital
    return `${number}${letter}`;
  }
  return className.toUpperCase(); // Jika tidak ada angka, kapital semua
};

const DataSiswa = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [classFilter, setClassFilter] = useState("Semua kelas");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({ full_name: "", class: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching students with token:", token);
      const response = await axios.get("http://localhost:5000/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Students response:", response.data);
      // Kapitalkan kelas pada data siswa
      const capitalizedStudents = response.data.map((student) => ({
        ...student,
        class: capitalizeClass(student.class),
      }));
      setStudents(capitalizedStudents);
      setError("");
    } catch (err) {
      console.error("Fetch students error:", err);
      setError(err.response?.data?.message || "Gagal mengambil data siswa");
    }
  };

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching classes with token:", token);
      const response = await axios.get(
        "http://localhost:5000/api/students/classes",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Classes response:", response.data);
      // Kapitalkan kelas pada daftar kelas
      const capitalizedClasses = response.data.map((cls) =>
        capitalizeClass(cls)
      );
      setClasses(["Semua kelas", ...capitalizedClasses]);
      setError("");
    } catch (err) {
      console.error("Fetch classes error:", err);
      setError(err.response?.data?.message || "Gagal mengambil daftar kelas");
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("Current user:", user);
    if (!user || user.role !== "teacher") {
      console.log("Redirecting to /masuk due to invalid user or role");
      window.location.href = "/masuk";
    } else {
      fetchStudents();
      fetchClasses();
    }
  }, []);

  const handleUpdateStudent = async () => {
    try {
      const token = localStorage.getItem("token");
      const updatedData = {
        full_name: formData.full_name || selectedStudent.full_name,
        class: formData.class || selectedStudent.class, // Kirim as-is ke database
      };
      console.log("Updating student:", updatedData);

      if (
        updatedData.full_name === selectedStudent.full_name &&
        updatedData.class === selectedStudent.class
      ) {
        console.log("No changes detected, closing modal");
        setIsModalOpen(false);
        Swal.fire({
          title: "Tidak Ada Perubahan",
          text: "Tidak ada perubahan pada data siswa.",
          icon: "info",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }

      const response = await axios.put(
        `http://localhost:5000/api/students/${selectedStudent.nis}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Update response:", response.data);

      Swal.fire({
        title: "Berhasil",
        text: "Data siswa berhasil diperbarui.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });

      fetchStudents();
      setIsModalOpen(false);
    } catch (err) {
      console.error("Update student error:", err);
      Swal.fire({
        title: "Gagal",
        text: err.response?.data?.message || "Gagal memperbarui data siswa.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });
    }
  };

  const handleDelete = async (nis) => {
    Swal.fire({
      title: "Konfirmasi Penghapusan",
      text: "Apakah Anda yakin ingin menghapus siswa ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#255F38",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          console.log("Deleting student with NIS:", nis);
          await axios.delete(`http://localhost:5000/api/students/${nis}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log("Student deleted successfully");

          Swal.fire({
            title: "Berhasil",
            text: "Siswa berhasil dihapus.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#255F38",
          });

          fetchStudents();
        } catch (err) {
          console.error("Delete student error:", err);
          Swal.fire({
            title: "Gagal",
            text: err.response?.data?.message || "Gagal menghapus siswa.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#255F38",
          });
        }
      }
    });
  };

  // Filter dan pagination
  const filteredStudents = students.filter(
    (student) =>
      classFilter === "Semua kelas" ||
      student.class === capitalizeClass(classFilter)
  );
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="p-4 mt-6 mb-6 text-center bg-gray-100 rounded shadow-md sm:p-6">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">
          Data Siswa
        </h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <div className="flex items-center justify-start mb-6">
          <select
            className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
            value={classFilter}
            onChange={(e) => {
              setClassFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            {classes.map((cls, index) => (
              <option key={index} value={cls} className="text-sm bg-white">
                {cls}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 border-collapse">
            <thead className="bg-[#255F38] text-white">
              <tr>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  NIS
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Nama
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300 sm:table-cell">
                  Kelas
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300 sm:table-cell">
                  Status Belajar
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student) => (
                <tr
                  key={student.nis}
                  className="transition-colors duration-200 hover:bg-gray-100 even:bg-gray-50"
                >
                  <td className="p-2 text-sm border-b border-gray-200">
                    {student.nis}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {student.full_name}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200 sm:table-cell">
                    {student.class}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200 sm:table-cell">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        student.status === "SELESAI"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="flex justify-center p-2 space-x-2 border-b border-gray-200">
                    <button
                      onClick={() => {
                        console.log("Opening modal for student:", student);
                        setSelectedStudent(student);
                        setFormData({
                          full_name: student.full_name,
                          class: student.class,
                        });
                        setIsModalOpen(true);
                      }}
                      className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
                    >
                      Perbarui
                    </button>
                    <button
                      onClick={() => handleDelete(student.nis)}
                      className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentStudents.length === 0 && !error && (
          <p className="mt-4 text-sm text-gray-500">
            Tidak ada data siswa yang ditemukan untuk filter ini.
          </p>
        )}

        {/* Pagination Controls */}
        {filteredStudents.length > 0 && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 disabled:opacity-50"
            >
              Sebelumnya
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  currentPage === page
                    ? "bg-[#255F38] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } transition-colors duration-200`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </section>

      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-base font-medium text-[#255F38] mb-4">
              Edit Data Siswa
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                placeholder="Nama"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="text"
                value={formData.class}
                onChange={(e) =>
                  setFormData({ ...formData, class: e.target.value })
                }
                placeholder="Kelas (contoh: 10C)"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
            </div>
            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={() => {
                  console.log("Closing modal");
                  setIsModalOpen(false);
                }}
                className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={handleUpdateStudent}
                className="px-3 py-1 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DataSiswa;
