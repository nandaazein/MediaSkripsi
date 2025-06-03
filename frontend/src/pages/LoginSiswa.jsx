import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImage from "../assets/login.png";

const LoginSiswa = () => {
  const [nis, setNis] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/students/login`,
        { nis, password }
      );
      const { token, user } = response.data;

      // Simpan token dan data pengguna
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Tampilkan SweetAlert2 untuk notifikasi login berhasil
      Swal.fire({
        title: "Berhasil Masuk",
        text: "Anda telah berhasil masuk ke sistem.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#255F38",
      }).then(() => {
        // Redirect ke dashboard setelah konfirmasi
        navigate("/home");
      });
    } catch (err) {
      setError(err.response?.data?.message || "Login gagal");
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    // Tampilkan SweetAlert2 untuk notifikasi pendaftaran
    Swal.fire({
      title: "Menuju Pendaftaran",
      text: "Anda akan diarahkan ke halaman pendaftaran siswa.",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#255F38",
    }).then(() => {
      // Redirect ke halaman pendaftaran
      navigate("/register-siswa");
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-3xl p-8 bg-white shadow-md rounded-2xl md:flex-row">
        {/* Gambar di sisi kiri - Diimpor dari src/assets */}
        <div className="w-full mb-6 md:w-1/2 md:mb-0 md:pr-6">
          <img
            src={loginImage} // Menggunakan gambar yang diimpor
            alt="Ilustrasi Login Siswa"
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        {/* Form Login */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-2xl font-bold text-center text-green-700">
            Masuk sebagai Siswa
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-700">NIS</label>
              <input
                type="text"
                value={nis}
                onChange={(e) => setNis(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Kata Sandi</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-700 rounded-lg cursor-pointer hover:bg-green-800"
            >
              Masuk
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600 cursor-pointer">
            Belum punya akun?{" "}
            <button
              onClick={handleRegisterClick}
              className="font-medium text-green-700 cursor-pointer hover:underline"
            >
              Daftar sekarang
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSiswa;
