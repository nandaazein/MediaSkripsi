// src/pages/Register.jsx
import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Daftar di AnalyticsLearn</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nama Lengkap</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Kata Sandi</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">Daftar</button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Sudah punya akun? <a href="/masuk" className="text-green-700 font-medium hover:underline">Masuk di sini</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
