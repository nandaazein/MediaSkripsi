import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/admin/Layout";

const PengaturanKKM = () => {
  const [kkmValues, setKKMValues] = useState({
    1: 70,
    2: 70,
    3: 70,
    4: 70,
    5: 70,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "teacher") {
      window.location.href = "/masuk";
      return;
    }
    fetchKKM();
  }, []);

  const fetchKKM = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token tidak ditemukan");
      console.log("Fetching KKM with token:", token);
      const response = await axios.get("http://localhost:5000/api/kkm", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("KKM response:", response.data);
      const kkmData = response.data.reduce((acc, item) => {
        acc[item.quiz_number] = item.kkm;
        return acc;
      }, {});
      setKKMValues((prev) => ({ ...prev, ...kkmData }));
      setError("");
    } catch (err) {
      console.error("Fetch KKM error:", err);
      setError(err.response?.data?.message || "Gagal mengambil pengaturan KKM");
    } finally {
      setLoading(false);
    }
  };

  const handleKKMChange = (quizNumber, value) => {
    if (value === "") {
      setKKMValues((prev) => ({ ...prev, [quizNumber]: "" }));
      setError("");
      return;
    }

    const kkm = parseInt(value);
    if (isNaN(kkm) || kkm < 0 || kkm > 100) {
      setError(
        `KKM untuk ${
          quizNumber === 5 ? "Evaluasi Akhir" : "Kuis " + quizNumber
        } harus antara 0 dan 100`
      );
      return;
    }
    setKKMValues((prev) => ({ ...prev, [quizNumber]: kkm }));
    setError("");
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token tidak ditemukan");

      const invalidKKM = Object.entries(kkmValues).find(
        ([quizNumber, value]) =>
          value === "" || isNaN(value) || value < 0 || value > 100
      );
      if (invalidKKM) {
        setError(
          `KKM untuk ${
            invalidKKM[0] === "5" ? "Evaluasi Akhir" : "Kuis " + invalidKKM[0]
          } tidak valid (harus antara 0 dan 100)`
        );
        return;
      }

      console.log("Saving KKM:", kkmValues);
      await axios.put(
        "http://localhost:5000/api/kkm",
        { kkmValues },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Pengaturan KKM berhasil disimpan");
      setError("");
      fetchKKM();
    } catch (err) {
      console.error("Save KKM error:", err);
      setError(err.response?.data?.message || "Gagal menyimpan pengaturan KKM");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="max-w-full p-6 mx-auto mt-4 mb-6 text-center bg-white rounded-lg shadow-2xl">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">
          Pengaturan KKM
        </h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        {loading && <p className="mb-4 text-sm text-gray-500">Memuat...</p>}
        <div className="grid max-w-2xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2">
          {[1, 2, 3, 4, 5].map((quizNumber) => (
            <div key={quizNumber} className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                KKM {quizNumber === 5 ? "Evaluasi Akhir" : `Kuis ${quizNumber}`}
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={kkmValues[quizNumber]}
                onChange={(e) => handleKKMChange(quizNumber, e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                placeholder={`Masukkan KKM untuk ${
                  quizNumber === 5 ? "Evaluasi Akhir" : "Kuis " + quizNumber
                }`}
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 text-sm text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 disabled:opacity-50"
          >
            Simpan Pengaturan
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default PengaturanKKM;
