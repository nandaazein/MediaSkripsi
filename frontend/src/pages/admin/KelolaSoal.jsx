// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../../components/admin/Layout';
// import Compressor from 'compressorjs';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const KelolaSoal = () => {
//   const [questions, setQuestions] = useState([]);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [selectedQuestion, setSelectedQuestion] = useState(null);
//   const [formData, setFormData] = useState({
//     quizNumber: '1',
//     question: '',
//     options: ['', '', '', ''],
//     correctAnswer: 'a',
//     imageBase64: ''
//   });
//   const [previewImage, setPreviewImage] = useState(null);
//   const [filterQuizNumber, setFilterQuizNumber] = useState('all'); // State untuk filter
//   const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
//   const questionsPerPage = 10; // Jumlah soal per halaman

//   const fetchQuestions = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('Token tidak ditemukan');
//       const response = await axios.get('http://localhost:5000/api/quizzes/questions', {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setQuestions(response.data || []);
//       setError('');
//     } catch (err) {
//       console.error('Fetch questions error:', err);
//       setError(err.response?.data?.message || 'Gagal mengambil data soal');
//       setQuestions([]);
//     }
//   };

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user || user.role !== 'teacher') {
//       window.location.href = '/masuk';
//     } else {
//       fetchQuestions();
//     }
//   }, []);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 2 * 1024 * 1024) {
//         alert('Ukuran gambar terlalu besar. Maksimum 2MB.');
//         return;
//       }

//       new Compressor(file, {
//         quality: 0.6,
//         maxWidth: 1200,
//         maxHeight: 1200,
//         success(compressedFile) {
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             const base64String = reader.result;
//             setFormData({ ...formData, imageBase64: base64String });
//             setPreviewImage(base64String);
//           };
//           reader.readAsDataURL(compressedFile);
//         },
//         error(err) {
//           console.error('Error kompresi:', err);
//           alert('Gagal mengompresi gambar');
//         },
//       });
//     }
//   };

//   const handleAddOrUpdateQuestion = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const optionsArray = Array.isArray(formData.options) && formData.options.length === 4
//         ? formData.options
//         : ['', '', '', ''];
//       const updatedData = {
//         quizNumber: parseInt(formData.quizNumber),
//         question: formData.question,
//         options: optionsArray,
//         correctAnswer: formData.correctAnswer,
//         imageUrl: formData.imageBase64 || null
//       };

//       console.log('Sending data:', updatedData);

//       let response;
//       if (isEditMode) {
//         response = await axios.put(
//           `http://localhost:5000/api/quizzes/questions/${selectedQuestion.id}`,
//           updatedData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         response = await axios.post(
//           'http://localhost:5000/api/quizzes/questions',
//           updatedData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }
//       alert(response.data.message);
//       fetchQuestions();
//       setIsModalOpen(false);
//       resetForm();
//     } catch (err) {
//       console.error('Add/Update question error:', err.response?.data || err);
//       if (err.response?.status === 413) {
//         alert('Ukuran data terlalu besar. Gunakan gambar dengan ukuran lebih kecil.');
//       } else {
//         alert(err.response?.data?.message || `Gagal menyimpan soal: ${err.message}`);
//       }
//     }
//   };

//   const handleDeleteQuestion = async (id) => {
//     if (!window.confirm('Apakah Anda yakin ingin menghapus soal ini?')) return;
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('Token tidak ditemukan');
//       const response = await axios.delete(`http://localhost:5000/api/quizzes/questions/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert(response.data.message);
//       fetchQuestions();
//     } catch (err) {
//       console.error('Delete question error:', err);
//       const errorMessage = err.response?.data?.message || 'Gagal menghapus soal. Silakan coba lagi.';
//       alert(errorMessage);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       quizNumber: '1',
//       question: '',
//       options: ['', '', '', ''],
//       correctAnswer: 'a',
//       imageBase64: ''
//     });
//     setPreviewImage(null);
//     setIsEditMode(false);
//     setSelectedQuestion(null);
//   };

//   const openEditModal = (question) => {
//     setSelectedQuestion(question);
//     const optionsArray = Array.isArray(question.options) && question.options.length === 4
//       ? question.options
//       : ['', '', '', ''];
//     setFormData({
//       quizNumber: question.quiz_number.toString(),
//       question: question.question_text || '',
//       options: optionsArray,
//       correctAnswer: question.correct_answer || 'a',
//       imageBase64: question.image_url || ''
//     });
//     setPreviewImage(question.image_url || null);
//     setIsEditMode(true);
//     setIsModalOpen(true);
//   };

//   // Filter soal berdasarkan quizNumber
//   const filteredQuestions = filterQuizNumber === 'all'
//     ? questions
//     : questions.filter(q => q.quiz_number === parseInt(filterQuizNumber));

//   // Hitung total halaman dan soal untuk halaman saat ini
//   const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
//   const indexOfLastQuestion = currentPage * questionsPerPage;
//   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

//   // Fungsi untuk mengganti halaman
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <Layout>
//       <section className="max-w-full p-6 mx-auto mt-4 mb-6 text-center bg-white rounded-lg shadow-2xl">
//         <h2 className="text-xl font-semibold text-[#255F38] mb-6">Daftar Soal Kuis</h2>
//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         {/* Filter Dropdown */}
//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <label className="mr-2 text-sm font-medium text-gray-700">Filter Kuis:</label>
//             <select
//               className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//               value={filterQuizNumber}
//               onChange={(e) => {
//                 setFilterQuizNumber(e.target.value);
//                 setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
//               }}
//             >
//               <option value="all">Semua Kuis</option>
//               <option value="1">Kuis 1</option>
//               <option value="2">Kuis 2</option>
//               <option value="3">Kuis 3</option>
//               <option value="4">Kuis 4</option>
//               <option value="5">Evaluasi Akhir</option>
//             </select>
//           </div>
//           <button
//             onClick={() => {
//               resetForm();
//               setIsModalOpen(true);
//             }}
//             className="px-4 py-2 bg-[#255F38] text-white rounded-lg cursor-pointer hover:bg-green-800 transition-colors duration-200 text-sm"
//           >
//             Tambah Soal
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-gray-700 border-collapse">
//             <thead className="bg-[#255F38] text-white">
//               <tr>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">No</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Kuis</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Pertanyaan</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Opsi</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Jawaban Benar</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Gambar</th>
//                 <th className="p-2 text-sm text-center border-b-2 border-gray-300">Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentQuestions.map((question, index) => (
//                 <tr
//                   key={question.id}
//                   className="transition-colors duration-200 hover:bg-gray-100 even:bg-gray-50"
//                 >
//                   <td className="p-2 text-sm border-b border-gray-200">{indexOfFirstQuestion + index + 1}</td>
//                   <td className="p-2 text-sm border-b border-gray-200">
//                     {question.quiz_number === 5 ? 'Evaluasi Akhir' : `Kuis ${question.quiz_number}`}
//                   </td>
//                   <td className="p-2 text-sm border-b border-gray-200">{question.question_text}</td>
//                   <td className="p-2 text-sm border-b border-gray-200">
//                     {Array.isArray(question.options) ? (
//                       question.options.map((opt, idx) => (
//                         <div key={idx}>{String.fromCharCode(97 + idx)}. {opt || '-'}</div>
//                       ))
//                     ) : (
//                       ['a', 'b', 'c', 'd'].map((_, idx) => (
//                         <div key={idx}>{String.fromCharCode(97 + idx)}. -</div>
//                       ))
//                     )}
//                   </td>
//                   <td className="p-2 text-sm border-b border-gray-200">{question.correct_answer}</td>
//                   <td className="p-2 text-sm border-b border-gray-200">
//                     {question.image_url ? (
//                       <img
//                         src={question.image_url}
//                         alt="Question Image"
//                         className="object-cover w-24 h-24 mx-auto rounded-lg"
//                         onError={(e) => { e.target.style.display = 'none'; }}
//                       />
//                     ) : (
//                       '-'
//                     )}
//                   </td>
//                   <td className="flex justify-center p-2 space-x-2 border-b border-gray-200">
//                     <button
//                       onClick={() => openEditModal(question)}
//                       className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDeleteQuestion(question.id)}
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
//         {filteredQuestions.length === 0 && !error && (
//           <p className="mt-4 text-sm text-gray-500">Tidak ada soal yang ditemukan untuk filter ini. Silakan tambahkan soal baru.</p>
//         )}

//         {/* Pagination Controls */}
//         {filteredQuestions.length > 0 && (
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

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
//           <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="text-base font-medium text-[#255F38] mb-4">
//               {isEditMode ? 'Edit Soal Kuis' : 'Tambah Soal Kuis'}
//             </h3>
//             <div className="grid grid-cols-1 gap-3">
//               <select
//                 className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//                 value={formData.quizNumber}
//                 onChange={(e) => setFormData({ ...formData, quizNumber: e.target.value })}
//               >
//                 <option value="1">Kuis 1</option>
//                 <option value="2">Kuis 2</option>
//                 <option value="3">Kuis 3</option>
//                 <option value="4">Kuis 4</option>
//                 <option value="5">Evaluasi Akhir</option>
//               </select>
//               <textarea
//                 value={formData.question}
//                 onChange={(e) => setFormData({ ...formData, question: e.target.value })}
//                 placeholder="Masukkan pertanyaan"
//                 className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//                 rows="3"
//               />
//               {formData.options.map((option, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   value={option}
//                   onChange={(e) => {
//                     const newOptions = [...formData.options];
//                     newOptions[idx] = e.target.value;
//                     setFormData({ ...formData, options: newOptions });
//                   }}
//                   placeholder={`Opsi ${String.fromCharCode(97 + idx)}`}
//                   className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//                 />
//               ))}
//               <select
//                 className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//                 value={formData.correctAnswer}
//                 onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
//               >
//                 <option value="a">a</option>
//                 <option value="b">b</option>
//                 <option value="c">c</option>
//                 <option value="d">d</option>
//               </select>
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Unggah Gambar</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
//                 />
//                 {previewImage && (
//                   <div className="flex flex-col items-center mt-2">
//                     <img
//                       src={previewImage}
//                       alt="Preview"
//                       className="object-cover w-24 h-24 rounded-lg"
//                     />
//                     <button
//                       onClick={() => {
//                         setFormData({ ...formData, imageBase64: '' });
//                         setPreviewImage(null);
//                       }}
//                       className="px-3 py-1 mt-2 text-sm text-white transition-colors duration-200 bg-red-500 rounded-lg hover:bg-red-600"
//                     >
//                       Hapus Gambar
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-end mt-4 space-x-3">
//               <button
//                 onClick={() => {
//                   setIsModalOpen(false);
//                   resetForm();
//                 }}
//                 className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
//               >
//                 Batal
//               </button>
//               <button
//                 onClick={handleAddOrUpdateQuestion}
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

// export default KelolaSoal;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/admin/Layout";
import Compressor from "compressorjs";
import Swal from "sweetalert2";

const KelolaSoal = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [formData, setFormData] = useState({
    quizNumber: "1",
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "a",
    imageBase64: "",
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [filterQuizNumber, setFilterQuizNumber] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token tidak ditemukan");
      const response = await axios.get(
        "http://localhost:5000/api/quizzes/questions",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setQuestions(response.data || []);
      setError("");
    } catch (err) {
      console.error("Fetch questions error:", err);
      setError(err.response?.data?.message || "Gagal mengambil data soal");
      setQuestions([]);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "teacher") {
      window.location.href = "/masuk";
    } else {
      fetchQuestions();
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        Swal.fire({
          title: "Ukuran Gambar Terlalu Besar",
          text: "Ukuran gambar maksimum adalah 2MB.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
        return;
      }

      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1200,
        maxHeight: 1200,
        success(compressedFile) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result;
            setFormData({ ...formData, imageBase64: base64String });
            setPreviewImage(base64String);
          };
          reader.readAsDataURL(compressedFile);
        },
        error(err) {
          console.error("Error kompresi:", err);
          Swal.fire({
            title: "Gagal Mengompresi Gambar",
            text: "Terjadi kesalahan saat mengompresi gambar.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#255F38",
          });
        },
      });
    }
  };

  const handleAddOrUpdateQuestion = async () => {
    try {
      const token = localStorage.getItem("token");
      const optionsArray =
        Array.isArray(formData.options) && formData.options.length === 4
          ? formData.options
          : ["", "", "", ""];
      const updatedData = {
        quizNumber: parseInt(formData.quizNumber),
        question: formData.question,
        options: optionsArray,
        correctAnswer: formData.correctAnswer,
        imageUrl: formData.imageBase64 || null,
      };

      console.log("Sending data:", updatedData);

      let response;
      if (isEditMode) {
        response = await axios.put(
          `http://localhost:5000/api/quizzes/questions/${selectedQuestion.id}`,
          updatedData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/quizzes/questions",
          updatedData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      Swal.fire({
        title: "Berhasil",
        text:
          response.data.message ||
          (isEditMode
            ? "Soal berhasil diperbarui."
            : "Soal berhasil ditambahkan."),
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      });

      fetchQuestions();
      setIsModalOpen(false);
      resetForm();
    } catch (err) {
      console.error("Add/Update question error:", err.response?.data || err);
      if (err.response?.status === 413) {
        Swal.fire({
          title: "Ukuran Data Terlalu Besar",
          text: "Gunakan gambar dengan ukuran lebih kecil.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      } else {
        Swal.fire({
          title: "Gagal",
          text:
            err.response?.data?.message ||
            `Gagal menyimpan soal: ${err.message}`,
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#255F38",
        });
      }
    }
  };

  const handleDeleteQuestion = async (id) => {
    Swal.fire({
      title: "Konfirmasi Penghapusan",
      text: "Apakah Anda yakin ingin menghapus soal ini?",
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
          if (!token) throw new Error("Token tidak ditemukan");
          const response = await axios.delete(
            `http://localhost:5000/api/quizzes/questions/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          Swal.fire({
            title: "Berhasil",
            text: response.data.message || "Soal berhasil dihapus.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#255F38",
          });

          fetchQuestions();
        } catch (err) {
          console.error("Delete question error:", err);
          Swal.fire({
            title: "Gagal",
            text:
              err.response?.data?.message ||
              "Gagal menghapus soal. Silakan coba lagi.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#255F38",
          });
        }
      }
    });
  };

  const resetForm = () => {
    setFormData({
      quizNumber: "1",
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "a",
      imageBase64: "",
    });
    setPreviewImage(null);
    setIsEditMode(false);
    setSelectedQuestion(null);
  };

  const openEditModal = (question) => {
    setSelectedQuestion(question);
    const optionsArray =
      Array.isArray(question.options) && question.options.length === 4
        ? question.options
        : ["", "", "", ""];
    setFormData({
      quizNumber: question.quiz_number.toString(),
      question: question.question_text || "",
      options: optionsArray,
      correctAnswer: question.correct_answer || "a",
      imageBase64: question.image_url || "",
    });
    setPreviewImage(question.image_url || null);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  // Filter soal berdasarkan quizNumber
  const filteredQuestions =
    filterQuizNumber === "all"
      ? questions
      : questions.filter((q) => q.quiz_number === parseInt(filterQuizNumber));

  // Hitung total halaman dan soal untuk halaman saat ini
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Fungsi untuk mengganti halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="max-w-full p-6 mx-auto mt-4 mb-6 text-center bg-white rounded-lg shadow-2xl">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">
          Daftar Soal Kuis
        </h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        {/* Filter Dropdown */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="mr-2 text-sm font-medium text-gray-700">
              Filter Kuis:
            </label>
            <select
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={filterQuizNumber}
              onChange={(e) => {
                setFilterQuizNumber(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">Semua Kuis</option>
              <option value="1">Kuis 1</option>
              <option value="2">Kuis 2</option>
              <option value="3">Kuis 3</option>
              <option value="4">Kuis 4</option>
              <option value="5">Evaluasi Akhir</option>
            </select>
          </div>
          <button
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="px-4 py-2 bg-[#255F38] text-white rounded-lg cursor-pointer hover:bg-green-800 transition-colors duration-200 text-sm"
          >
            Tambah Soal
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 border-collapse">
            <thead className="bg-[#255F38] text-white">
              <tr>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  No
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Kuis
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Pertanyaan
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Opsi
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Jawaban Benar
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Gambar
                </th>
                <th className="p-2 text-sm text-center border-b-2 border-gray-300">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {currentQuestions.map((question, index) => (
                <tr
                  key={question.id}
                  className="transition-colors duration-200 hover:bg-gray-100 even:bg-gray-50"
                >
                  <td className="p-2 text-sm border-b border-gray-200">
                    {indexOfFirstQuestion + index + 1}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {question.quiz_number === 5
                      ? "Evaluasi Akhir"
                      : `Kuis ${question.quiz_number}`}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {question.question_text}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {Array.isArray(question.options)
                      ? question.options.map((opt, idx) => (
                          <div key={idx}>
                            {String.fromCharCode(97 + idx)}. {opt || "-"}
                          </div>
                        ))
                      : ["a", "b", "c", "d"].map((_, idx) => (
                          <div key={idx}>
                            {String.fromCharCode(97 + idx)}. -
                          </div>
                        ))}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {question.correct_answer}
                  </td>
                  <td className="p-2 text-sm border-b border-gray-200">
                    {question.image_url ? (
                      <img
                        src={question.image_url}
                        alt="Question Image"
                        className="object-cover w-24 h-24 mx-auto rounded-lg"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="flex justify-center p-2 space-x-2 border-b border-gray-200">
                    <button
                      onClick={() => openEditModal(question)}
                      className="px-2 py-1 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
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
        {filteredQuestions.length === 0 && !error && (
          <p className="mt-4 text-sm text-gray-500">
            Tidak ada soal yang ditemukan untuk filter ini. Silakan tambahkan
            soal baru.
          </p>
        )}

        {/* Pagination Controls */}
        {filteredQuestions.length > 0 && (
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-base font-medium text-[#255F38] mb-4">
              {isEditMode ? "Edit Soal Kuis" : "Tambah Soal Kuis"}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <select
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                value={formData.quizNumber}
                onChange={(e) =>
                  setFormData({ ...formData, quizNumber: e.target.value })
                }
              >
                <option value="1">Kuis 1</option>
                <option value="2">Kuis 2</option>
                <option value="3">Kuis 3</option>
                <option value="4">Kuis 4</option>
                <option value="5">Evaluasi Akhir</option>
              </select>
              <textarea
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
                placeholder="Masukkan pertanyaan"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                rows="3"
              />
              {formData.options.map((option, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...formData.options];
                    newOptions[idx] = e.target.value;
                    setFormData({ ...formData, options: newOptions });
                  }}
                  placeholder={`Opsi ${String.fromCharCode(97 + idx)}`}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                />
              ))}
              <select
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                value={formData.correctAnswer}
                onChange={(e) =>
                  setFormData({ ...formData, correctAnswer: e.target.value })
                }
              >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Unggah Gambar
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                />
                {previewImage && (
                  <div className="flex flex-col items-center mt-2">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="object-cover w-24 h-24 rounded-lg"
                    />
                    <button
                      onClick={() => {
                        setFormData({ ...formData, imageBase64: "" });
                        setPreviewImage(null);
                      }}
                      className="px-3 py-1 mt-2 text-sm text-white transition-colors duration-200 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                    >
                      Hapus Gambar
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
                className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={handleAddOrUpdateQuestion}
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

export default KelolaSoal;
