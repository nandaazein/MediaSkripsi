import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/admin/Layout';

const ProgressBelajar = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('Semua kelas');
  const [limit, setLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');

  const itemsPerPage = 10; // Menampilkan 10 data per halaman

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token tidak ditemukan. Silakan login kembali.');
      }
      console.log('Fetching students with token:', token);
      const response = await axios.get('http://localhost:5000/api/students', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Students response:', response.data);
      setStudents(response.data || []);
      setError('');
    } catch (err) {
      console.error('Fetch students error:', err);
      setError(err.response?.data?.message || 'Gagal mengambil data siswa');
    }
  };

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token tidak ditemukan. Silakan login kembali.');
      }
      console.log('Fetching classes with token:', token);
      const response = await axios.get('http://localhost:5000/api/students/classes', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Classes response:', response.data);
      setClasses(['Semua kelas', ...response.data]);
      setError('');
    } catch (err) {
      console.error('Fetch classes error:', err);
      setError(err.response?.data?.message || 'Gagal mengambil daftar kelas');
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('Current user:', user);
    if (!user || user.role !== 'teacher') {
      console.log('Redirecting to /masuk due to invalid user or role');
      window.location.href = '/masuk';
    } else {
      fetchStudents();
      fetchClasses();
    }
  }, []);

  // Filter dan hitung data untuk pagination
  const filteredStudents = students
    .filter((student) => student.full_name?.toLowerCase().includes(search.toLowerCase()))
    .filter((student) => classFilter === 'Semua kelas' || student.class === classFilter);

  const totalItems = Math.min(filteredStudents.length, limit);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Pastikan currentPage tidak melebihi totalPages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Potong data untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      console.log('Navigating to previous page:', currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log('Navigating to next page:', currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    console.log('Navigating to page:', pageNumber);
    setCurrentPage(pageNumber);
  };

  // Generate nomor halaman untuk ditampilkan
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Layout>
      <section className="bg-gray-100 p-4 sm:p-6 rounded shadow-md mt-6 mb-6 text-center">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">Progres Belajar</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="flex justify-between mb-6 items-center space-x-4 flex-wrap gap-4">
          <div className="flex items-center space-x-4 flex-wrap gap-4">
            <select
              className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={limit}
              onChange={(e) => {
                setLimit(parseInt(e.target.value));
                setCurrentPage(1); // Reset ke halaman 1 saat limit berubah
              }}
            >
              <option value="20">Menampilkan 20 data</option>
              <option value="50">Menampilkan 50 data</option>
              <option value="100">Menampilkan 100 data</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={classFilter}
              onChange={(e) => {
                setClassFilter(e.target.value);
                setCurrentPage(1); // Reset ke halaman 1 saat filter berubah
              }}
            >
              {classes.map((cls, index) => (
                <option key={index} value={cls} className="bg-white text-sm">{cls}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari nama..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset ke halaman 1 saat pencarian berubah
              }}
              className="p-2 border border-gray-300 rounded-lg w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-gray-700">
            <thead className="bg-[#255F38] text-white">
              <tr>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">NIS</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Nama</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Kelas</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Progres Belajar</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((student) => (
                <tr
                  key={student.nis}
                  className="hover:bg-gray-100 transition-colors duration-200 even:bg-gray-50"
                >
                  <td className="p-2 border-b border-gray-200 text-sm">{student.nis}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">{student.full_name}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">{student.class}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#255F38] h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{student.progress}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {currentItems.length === 0 && !error && (
          <p className="text-gray-500 mt-4 text-sm">Tidak ada data siswa yang ditemukan.</p>
        )}
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer'
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              «
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`px-4 py-2 rounded-lg text-sm ${
                  currentPage === number
                    ? 'bg-[#255F38] text-white'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </button>
            ))}
            <button
              className={`px-4 py-2 rounded-lg text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400 cursor-pointer'
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProgressBelajar;