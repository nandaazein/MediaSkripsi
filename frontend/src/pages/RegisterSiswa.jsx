import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import registerImage from '../assets/register.png'; // Impor gambar dari folder src/assets

const RegisterSiswa = () => {
  const [nis, setNis] = useState('');
  const [fullName, setFullName] = useState('');
  const [studentClass, setStudentClass] = useState(''); // Default kosong
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Daftar opsi kelas
  const classOptions = ['8A', '8B', '8C', '8D'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Kata sandi tidak cocok');
      return;
    }

    try {
      const payload = { nis, fullName, password, confirmPassword, class: studentClass, token };
      await axios.post('http://localhost:5000/api/students/register', payload);
      navigate('/login-siswa');
    } catch (err) {
      setError(err.response?.data?.message || 'Registrasi gagal');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center">
        {/* Gambar di sisi kiri - Diimpor dari src/assets */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <img
            src={registerImage}
            alt="Ilustrasi Register Siswa"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Form Register */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Daftar sebagai Siswa</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">NIS</label>
              <input
                type="text"
                value={nis}
                onChange={(e) => setNis(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Nama Lengkap</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Kelas</label>
              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                required
              >
                <option value="" disabled>Pilih Kelas</option>
                {classOptions.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Token</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                required
              />
            </div>
            <div className="flex space-x-3">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-1 text-sm">Kata Sandi</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-1 text-sm">Konfirmasi Kata Sandi</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-1 rounded-lg hover:bg-green-800 text-sm"
            >
              Daftar
            </button>
          </form>
          <p className="mt-3 text-xs text-center text-gray-600">
            Sudah punya akun?{' '}
            <a href="/student-login" className="text-green-700 font-medium hover:underline">
              Masuk di sini
            </a>
          </p>
          <p className="mt-1 text-xs text-center text-gray-600">
            Daftar sebagai guru?{' '}
            <a href="/register-guru" className="text-green-700 font-medium hover:underline">
              Klik di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSiswa;