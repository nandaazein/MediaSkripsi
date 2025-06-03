import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/register.png";

const RegisterGuru = () => {
  const [nip, setNip] = useState("");
  const [fullName, setFullName] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Kata sandi tidak cocok");
      return;
    }

    try {
      const payload = { nip, fullName, school, password, confirmPassword };
      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/teachers/register`,
        payload
      );
      navigate("/login-guru");
    } catch (err) {
      setError(err.response?.data?.message || "Registrasi gagal");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-2xl p-6 bg-white shadow-md rounded-2xl md:flex-row">
        <div className="w-full mb-4 md:w-1/2 md:mb-0 md:pr-4">
          <img
            src={registerImage}
            alt="Ilustrasi Register Guru"
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        {/* Form Register */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-xl font-bold text-center text-green-700">
            Daftar sebagai Guru
          </h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm text-gray-700">NIP</label>
              <input
                type="text"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                Asal Sekolah
              </label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div className="flex space-x-3">
              <div className="w-1/2">
                <label className="block mb-1 text-sm text-gray-700">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-sm text-gray-700">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-1 text-sm text-white bg-green-700 rounded-lg hover:bg-green-800"
            >
              Daftar
            </button>
          </form>
          <p className="mt-3 text-xs text-center text-gray-600">
            Sudah punya akun?{" "}
            <a
              href="/login-guru"
              className="font-medium text-green-700 hover:underline"
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterGuru;
