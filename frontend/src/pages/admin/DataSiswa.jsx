import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/admin/Layout';

const DataSiswa = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState('');
  const [classFilter, setClassFilter] = useState('Semua kelas');
  const [limit, setLimit] = useState(20);
  const [error, setError] = useState('');

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

  const handleUpdateProgress = async (nis, currentProgress) => {
    try {
      const token = localStorage.getItem('token');
      const newProgress = prompt('Masukkan progres baru (0-100):', currentProgress);
      if (newProgress === null || isNaN(newProgress) || newProgress < 0 || newProgress > 100) {
        alert('Progres tidak valid');
        return;
      }
      await axios.put(
        `http://localhost:5000/api/students/${nis}/progress`,
        { progress: parseInt(newProgress) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchStudents();
    } catch (err) {
      alert(err.response?.data?.message || 'Gagal memperbarui progres');
    }
  };

  const handleDelete = async (nis) => {
    if (!window.confirm('Yakin ingin menghapus siswa ini?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/students/${nis}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchStudents();
    } catch (err) {
      alert(err.response?.data?.message || 'Gagal menghapus siswa');
    }
  };

  const filteredStudents = students
    .filter((student) =>
      student.full_name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((student) => classFilter === 'Semua kelas' || student.class === classFilter)
    .slice(0, limit);

  return (
    <Layout>
      <div className="p-4 bg-[#255F38] mb-4 text-white font-bold text-lg text-center rounded-lg shadow-lg">
        Data Siswa
      </div>
      <section className="bg-gray-100 p-6 rounded shadow-md mt-1 mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#255F38] mb-4">Data Siswa</h2>
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
                <th className="p-1 border">Progres</th>
                <th className="p-1 border">Status Belajar</th>
                <th className="p-1 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.nis} className="border">
                  <td className="p-1 border">{student.nis}</td>
                  <td className="p-1 border">{student.full_name}</td>
                  <td className="p-1 border">{student.class}</td>
                  <td className="p-1 border">{student.progress}%</td>
                  <td className="p-1 border">
                    <span
                      className={`px-2 py-1 rounded ${
                        student.status === 'SELESAI' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="p-1 flex space-x-2 justify-center border">
                    <button
                      onClick={() => handleUpdateProgress(student.nis, student.progress)}
                      className="px-2 py-1 bg-green-500 text-white rounded cursor-pointer"
                    >
                      Perbarui
                    </button>
                    <button
                      onClick={() => handleDelete(student.nis)}
                      className="px-2 py-1 bg-red-500 text-white rounded cursor-pointer"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default DataSiswa;