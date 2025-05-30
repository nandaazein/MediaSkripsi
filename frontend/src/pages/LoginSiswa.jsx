import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/login.png'; // Impor gambar dari folder src/assets

const LoginSiswa = () => {
  const [nis, setNis] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/students/login', { nis, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center">
        {/* Gambar di sisi kiri - Diimpor dari src/assets */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
          <img
            src={loginImage} // Menggunakan gambar yang diimpor
            alt="Ilustrasi Login Siswa"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Form Login */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Masuk sebagai Siswa</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">NIS</label>
              <input
                type="text"
                value={nis}
                onChange={(e) => setNis(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Kata Sandi</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
            >
              Masuk
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Belum punya akun?{' '}
            <a href="/register-siswa" className="text-green-700 font-medium hover:underline">
              Daftar sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSiswa;