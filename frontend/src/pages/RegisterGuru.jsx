import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import registerImage from '../assets/register.png'; // Impor gambar dari folder src/assets

const RegisterGuru = () => {
  const [nip, setNip] = useState('');
  const [fullName, setFullName] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Kata sandi tidak cocok');
      return;
    }

    try {
      const payload = { nip, fullName, school, password, confirmPassword };
      await axios.post('http://localhost:5000/api/teachers/register', payload);
      navigate('/login-guru');
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
            src={registerImage} // Menggunakan gambar yang diimpor
            alt="Ilustrasi Register Guru"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Form Register */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Daftar sebagai Guru</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 text-sm">NIP</label>
              <input
                type="text"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
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
              <label className="block text-gray-700 mb-1 text-sm">Asal Sekolah</label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
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
            <a href="/login-guru" className="text-green-700 font-medium hover:underline">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterGuru;