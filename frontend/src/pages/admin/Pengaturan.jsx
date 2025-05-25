import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/admin/Layout';

const PengaturanKKM = () => {
  const [kkmValues, setKKMValues] = useState({
    1: 70,
    2: 70,
    3: 70,
    4: 70
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'teacher') {
      window.location.href = '/masuk';
      return;
    }
    fetchKKM();
  }, []);

  const fetchKKM = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token tidak ditemukan');
      console.log('Fetching KKM with token:', token);
      const response = await axios.get('http://localhost:5000/api/kkm', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('KKM response:', response.data);
      const kkmData = response.data.reduce((acc, item) => {
        acc[item.quiz_number] = item.kkm;
        return acc;
      }, {});
      setKKMValues((prev) => ({ ...prev, ...kkmData }));
      setError('');
    } catch (err) {
      console.error('Fetch KKM error:', err);
      setError(err.response?.data?.message || 'Gagal mengambil pengaturan KKM');
    } finally {
      setLoading(false);
    }
  };

  const handleKKMChange = (quizNumber, value) => {
    // Allow empty input during editing
    if (value === '') {
      setKKMValues((prev) => ({ ...prev, [quizNumber]: '' }));
      setError('');
      return;
    }

    const kkm = parseInt(value);
    if (isNaN(kkm) || kkm < 0 || kkm > 100) {
      setError(`KKM untuk Kuis ${quizNumber} harus antara 0 dan 100`);
      return;
    }
    setKKMValues((prev) => ({ ...prev, [quizNumber]: kkm }));
    setError('');
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token tidak ditemukan');
      
      // Validate all KKM values before saving
      const invalidKKM = Object.entries(kkmValues).find(
        ([quizNumber, value]) => value === '' || isNaN(value) || value < 0 || value > 100
      );
      if (invalidKKM) {
        setError(`KKM untuk Kuis ${invalidKKM[0]} tidak valid (harus antara 0 dan 100)`);
        return;
      }

      console.log('Saving KKM:', kkmValues);
      await axios.put(
        'http://localhost:5000/api/kkm',
        { kkmValues },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Pengaturan KKM berhasil disimpan');
      setError('');
      fetchKKM(); // Refresh KKM after saving
    } catch (err) {
      console.error('Save KKM error:', err);
      setError(err.response?.data?.message || 'Gagal menyimpan pengaturan KKM');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-white p-6 rounded-lg shadow-2xl mt-4 mb-6 text-center max-w-full mx-auto">
        <h2 className="text-xl font-semibold text-[#255F38] mb-6">Pengaturan KKM</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        {loading && <p className="text-gray-500 mb-4 text-sm">Memuat...</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[1, 2, 3, 4].map((quizNumber) => (
            <div key={quizNumber} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                KKM Kuis {quizNumber}
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={kkmValues[quizNumber]}
                onChange={(e) => handleKKMChange(quizNumber, e.target.value)}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38] transition text-sm"
                placeholder={`Masukkan KKM Kuis ${quizNumber}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm disabled:opacity-50"
          >
            Simpan Pengaturan
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default PengaturanKKM;