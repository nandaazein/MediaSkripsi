import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/admin/Layout';
import Compressor from 'compressorjs'; // Tambahkan ini

const KelolaSoal = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [formData, setFormData] = useState({
    quizNumber: '1',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 'a',
    imageBase64: ''
  });
  const [previewImage, setPreviewImage] = useState(null);

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token tidak ditemukan');
      const response = await axios.get('http://localhost:5000/api/quizzes/questions', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setQuestions(response.data || []);
      setError('');
    } catch (err) {
      console.error('Fetch questions error:', err);
      setError(err.response?.data?.message || 'Gagal mengambil data soal');
      setQuestions([]);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'teacher') {
      window.location.href = '/masuk';
    } else {
      fetchQuestions();
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validasi ukuran file (maksimum 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran gambar terlalu besar. Maksimum 2MB.');
        return;
      }

      // Kompres gambar
      new Compressor(file, {
        quality: 0.6, // Kualitas gambar (0 hingga 1)
        maxWidth: 1200, // Lebar maksimum
        maxHeight: 1200, // Tinggi maksimum
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
          console.error('Error kompresi:', err);
          alert('Gagal mengompresi gambar');
        },
      });
    }
  };

  const handleAddOrUpdateQuestion = async () => {
    try {
      const token = localStorage.getItem('token');
      const optionsArray = Array.isArray(formData.options) && formData.options.length === 4
        ? formData.options
        : ['', '', '', ''];
      const updatedData = {
        quizNumber: parseInt(formData.quizNumber),
        question: formData.question,
        options: optionsArray,
        correctAnswer: formData.correctAnswer,
        imageUrl: formData.imageBase64 || null
      };

      console.log('Sending data:', updatedData); // Debug data yang dikirim

      let response;
      if (isEditMode) {
        response = await axios.put(
          `http://localhost:5000/api/quizzes/questions/${selectedQuestion.id}`,
          updatedData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        response = await axios.post(
          'http://localhost:5000/api/quizzes/questions',
          updatedData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      alert(response.data.message);
      fetchQuestions();
      setIsModalOpen(false);
      resetForm();
    } catch (err) {
      console.error('Add/Update question error:', err.response?.data || err);
      if (err.response?.status === 413) {
        alert('Ukuran data terlalu besar. Gunakan gambar dengan ukuran lebih kecil.');
      } else {
        alert(err.response?.data?.message || `Gagal menyimpan soal: ${err.message}`);
      }
    }
  };

  const handleDeleteQuestion = async (id) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus soal ini?')) return;
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token tidak ditemukan');
      const response = await axios.delete(`http://localhost:5000/api/quizzes/questions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert(response.data.message);
      fetchQuestions();
    } catch (err) {
      console.error('Delete question error:', err);
      const errorMessage = err.response?.data?.message || 'Gagal menghapus soal. Silakan coba lagi.';
      alert(errorMessage);
    }
  };

  const resetForm = () => {
    setFormData({
      quizNumber: '1',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 'a',
      imageBase64: ''
    });
    setPreviewImage(null);
    setIsEditMode(false);
    setSelectedQuestion(null);
  };

  const openEditModal = (question) => {
    setSelectedQuestion(question);
    const optionsArray = Array.isArray(question.options) && question.options.length === 4
      ? question.options
      : ['', '', '', ''];
    setFormData({
      quizNumber: question.quiz_number.toString(),
      question: question.question_text || '',
      options: optionsArray,
      correctAnswer: question.correct_answer || 'a',
      imageBase64: question.image_url || ''
    });
    setPreviewImage(question.image_url || null);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <section className="bg-white p-6 rounded-lg shadow-2xl mt-4 mb-6 text-center max-w-full mx-auto">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">Daftar Soal Kuis</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
          >
            Tambah Soal
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-700">
            <thead className="bg-[#255F38] text-white">
              <tr>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">No</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Kuis</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Pertanyaan</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Opsi</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Jawaban Benar</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Gambar</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr
                  key={question.id}
                  className="hover:bg-gray-100 transition-colors duration-200 even:bg-gray-50"
                >
                  <td className="p-2 border-b border-gray-200 text-sm">{index + 1}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {question.quiz_number === 5 ? 'Evaluasi Akhir' : `Kuis ${question.quiz_number}`}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">{question.question_text}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {Array.isArray(question.options) ? (
                      question.options.map((opt, idx) => (
                        <div key={idx}>{String.fromCharCode(97 + idx)}. {opt || '-'}</div>
                      ))
                    ) : (
                      ['a', 'b', 'c', 'd'].map((_, idx) => (
                        <div key={idx}>{String.fromCharCode(97 + idx)}. -</div>
                      ))
                    )}
                  </td>
                  <td className="p-2 border-b border-gray-200 text-sm">{question.correct_answer}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    {question.image_url ? (
                      <img
                        src={question.image_url}
                        alt="Question Image"
                        className="w-24 h-24 object-cover mx-auto rounded-lg"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    ) : (
                      '-'
                    )}
                  </td>
                  <td className="p-2 border-b border-gray-200 flex space-x-2 justify-center">
                    <button
                      onClick={() => openEditModal(question)}
                      className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(question.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {questions.length === 0 && !error && (
          <p className="text-gray-500 mt-4 text-sm">Tidak ada soal yang ditemukan. Silakan tambahkan soal baru.</p>
        )}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-base font-medium text-[#255F38] mb-4">
              {isEditMode ? 'Edit Soal Kuis' : 'Tambah Soal Kuis'}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <select
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                value={formData.quizNumber}
                onChange={(e) => setFormData({ ...formData, quizNumber: e.target.value })}
              >
                <option value="1">Kuis 1</option>
                <option value="2">Kuis 2</option>
                <option value="3">Kuis 3</option>
                <option value="4">Kuis 4</option>
                <option value="5">Evaluasi Akhir</option>
              </select>
              <textarea
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
              >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
              </select>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Unggah Gambar</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                />
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-24 h-24 object-cover mt-2 rounded-lg mx-auto"
                  />
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleAddOrUpdateQuestion}
                className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
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