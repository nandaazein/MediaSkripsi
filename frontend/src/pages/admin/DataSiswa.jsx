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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [formData, setFormData] = useState({ full_name: '', class: '' });

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Fetching students with token:', token);
      const response = await axios.get('http://localhost:5000/api/students', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Students response:', response.data);
      setStudents(response.data);
      setError('');
    } catch (err) {
      console.error('Fetch students error:', err);
      setError(err.response?.data?.message || 'Gagal mengambil data siswa');
    }
  };

  const fetchClasses = async () => {
    try {
      const token = localStorage.getItem('token');
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

  const handleUpdateStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      const updatedData = {
        full_name: formData.full_name || selectedStudent.full_name,
        class: formData.class || selectedStudent.class,
      };
      console.log('Updating student:', updatedData);

      if (
        updatedData.full_name === selectedStudent.full_name &&
        updatedData.class === selectedStudent.class
      ) {
        console.log('No changes detected, closing modal');
        setIsModalOpen(false);
        return;
      }

      const response = await axios.put(
        `http://localhost:5000/api/students/${selectedStudent.nis}`,
        updatedData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Update response:', response.data);
      fetchStudents();
      setIsModalOpen(false);
      alert('Data siswa berhasil diperbarui');
    } catch (err) {
      console.error('Update student error:', err);
      alert(err.response?.data?.message || 'Gagal memperbarui data siswa');
    }
  };

  const handleDelete = async (nis) => {
    if (!window.confirm('Yakin ingin menghapus siswa ini?')) return;
    try {
      const token = localStorage.getItem('token');
      console.log('Deleting student with NIS:', nis);
      await axios.delete(`http://localhost:5000/api/students/${nis}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Student deleted successfully');
      fetchStudents();
    } catch (err) {
      console.error('Delete student error:', err);
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

      <section className="bg-gray-100 p-4 sm:p-6 rounded shadow-md mt-6 mb-6 text-center">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">Data Siswa</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="flex justify-between mb-6 items-center space-x-4 flex-wrap gap-4">
          <div className="flex items-center space-x-4 flex-wrap gap-4">
            <select
              className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
            >
              <option value="20">Menampilkan 20 data</option>
              <option value="50">Menampilkan 50 data</option>
              <option value="100">Menampilkan 100 data</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
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
              onChange={(e) => setSearch(e.target.value)}
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
                <th className="p-2 border-b-2 border-gray-300 text-center sm:table-cell text-sm">Kelas</th>
                <th className="p-2 border-b-2 border-gray-300 text-center sm:table-cell text-sm">Status Belajar</th>
                <th className="p-2 border-b-2 border-gray-300 text-center text-sm">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.nis}
                  className="hover:bg-gray-100 transition-colors duration-200 even:bg-gray-50"
                >
                  <td className="p-2 border-b border-gray-200 text-sm">{student.nis}</td>
                  <td className="p-2 border-b border-gray-200 text-sm">{student.full_name}</td>
                  <td className="p-2 border-b border-gray-200 sm:table-cell text-sm">{student.class}</td>
                  <td className="p-2 border-b border-gray-200 sm:table-cell text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        student.status === 'SELESAI' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="p-2 border-b border-gray-200 flex space-x-2 justify-center">
                    <button
                      onClick={() => {
                        console.log('Opening modal for student:', student);
                        setSelectedStudent(student);
                        setFormData({
                          full_name: student.full_name,
                          class: student.class,
                        });
                        setIsModalOpen(true);
                      }}
                      className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm"
                    >
                      Perbarui
                    </button>
                    <button
                      onClick={() => handleDelete(student.nis)}
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
        {filteredStudents.length === 0 && !error && (
          <p className="text-gray-500 mt-4 text-sm">Tidak ada data siswa yang ditemukan.</p>
        )}
      </section>

      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-base font-medium text-[#255F38] mb-4">Edit Data Siswa</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                placeholder="Nama"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
              <input
                type="text"
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                placeholder="Kelas"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button
                onClick={() => {
                  console.log('Closing modal');
                  setIsModalOpen(false);
                }}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm"
              >
                Batal
              </button>
              <button
                onClick={handleUpdateStudent}
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

export default DataSiswa;