import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student');
  const [nis, setNis] = useState('');
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const endpoint = role === 'student' ? '/api/students/login' : '/api/teachers/login';
      const payload = role === 'student' ? { nis, password } : { nip, password };

      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'student') {
        navigate('/home');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Masuk ke AnalyticsLearn</h2>
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 ${role === 'student' ? 'bg-green-700 text-white' : 'bg-gray-200'} rounded-l-lg`}
            onClick={() => setRole('student')}
          >
            Siswa
          </button>
          <button
            className={`px-4 py-2 ${role === 'teacher' ? 'bg-green-700 text-white' : 'bg-gray-200'} rounded-r-lg`}
            onClick={() => setRole('teacher')}
          >
            Guru
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {role === 'student' ? (
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
          ) : (
            <div>
              <label className="block text-gray-700 mb-1">NIP</label>
              <input
                type="text"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          )}
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
          <a href="/register" className="text-green-700 font-medium hover:underline">
            Daftar sekarang
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;