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

  const itemsPerPage = 3;
  const totalPages = Math.ceil(
    students
      .filter((student) => student.full_name.toLowerCase().includes(search.toLowerCase()))
      .filter((student) => classFilter === 'Semua kelas' || student.class === classFilter)
      .length / itemsPerPage
  );

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/students', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudents(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal mengambil data siswa');
    }
  };

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/students/classes', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClasses(['Semua kelas', ...response.data]);
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal mengambil daftar kelas');
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'teacher') {
      window.location.href = '/masuk';
    } else {
      fetchStudents();
      fetchClasses();
    }
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const filteredStudents = students
    .filter((student) => student.full_name.toLowerCase().includes(search.toLowerCase()))
    .filter((student) => classFilter === 'Semua kelas' || student.class === classFilter);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        Progres Belajar
      </div>
      <section className="bg-gray-100 p-6 rounded shadow-md mt-1 mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#255F38] mb-4">Progres Belajar</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-between mb-4 items-center space-x-4">
          <div className="flex items-center space-x-4">
            <select
              className="p-2 border rounded"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
            >
              <option value="20">Menampilkan 20 data</option>
              <option value="50">Menampilkan 50 data</option>
              <option value="100">Menampilkan 100 data</option>
            </select>
            <select
              className="p-2 border rounded"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
            >
              {classes.map((cls, index) => (
                <option key={index} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari nama..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border rounded w-64"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-gray-700">
            <thead>
              <tr>
                <th className="p-1 border">NIS</th>
                <th className="p-1 border">Nama</th>
                <th className="p-1 border">Kelas</th>
                <th className="p-1 border">Progres Belajar</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((student) => (
                <tr key={student.nis} className="border">
                  <td className="p-1 border">{student.nis}</td>
                  <td className="p-1 border">{student.full_name}</td>
                  <td className="p-1 border">{student.class}</td>
                  <td className="p-1 border">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{student.progress}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded">{currentPage}</button>
          <button
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default ProgressBelajar;