import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Admin/Layout";
import { Users, CheckCircle, BarChart3, TrendingUp, TrendingDown } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const dummyData = {
    totalStudents: 3,
    completedStudents: 2,
    averageScores: {
      kuis1: 60,
      kuis2: 50,
      kuis3: 45,
      kuis4: 55,
      evaluasi: 52,
    },
    highestScores: {
      kuis1: { student: "SISWA 2", score: 100 },
      kuis2: { student: "SISWA 1", score: 50 },
      kuis3: { student: "SISWA 2", score: 90 },
      kuis4: { student: "SISWA 2", score: 100 },
      evaluasi: { student: "SISWA 2", score: 100 },
    },
    lowestScores: {
      kuis1: { student: "SISWA 2", score: 20 },
      kuis2: { student: "SISWA 2", score: 50 },
      kuis3: { student: "SISWA 1", score: 0 },
      kuis4: { student: "SISWA 1", score: 10 },
      evaluasi: { student: "SISWA 1", score: 5 },
    },
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'teacher') {
      navigate('/masuk');
    }
  }, [navigate]);

  return (
    <Layout>
      <section className="bg-white py-8 px-6 rounded-lg shadow mt-8 mb-8">
        <h2 className="text-3xl font-bold text-[#255F38] mb-6 text-center">
          📊 Dashboard Admin
        </h2>

        {/* Filter Kelas */}
        <div className="flex justify-center mb-8">
          <select className="p-3 border rounded-lg bg-white shadow-sm w-64">
            <option value="Semua kelas">Semua kelas</option>
            <option value="Kelas A">Kelas A</option>
            <option value="Kelas B">Kelas B</option>
            <option value="Kelas C">Kelas C</option>
          </select>
        </div>

        {/* Statistik Utama */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<Users className="text-green-600" />} title="Jumlah Siswa" value={`${dummyData.totalStudents} Siswa`} />
          <StatCard icon={<CheckCircle className="text-green-600" />} title="Progres Belajar" value={`${dummyData.completedStudents} Siswa Selesai`} />
          <StatCard icon={<BarChart3 className="text-green-600" />} title="Rata-rata Nilai" value={
            <ScoreList scores={dummyData.averageScores} />
          } />
        </div>

        {/* Nilai Tertinggi & Terendah */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StatCard icon={<TrendingUp className="text-green-600" />} title="Nilai Tertinggi" value={
            <ScoreDetailList data={dummyData.highestScores} />
          } />
          <StatCard icon={<TrendingDown className="text-red-600" />} title="Nilai Terendah" value={
            <ScoreDetailList data={dummyData.lowestScores} />
          } />
        </div>
      </section>
    </Layout>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm">
    <div className="flex items-center mb-3 space-x-3">
      <div className="p-2 rounded-full bg-green-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-700 text-sm">
      {typeof value === 'string' ? <p className="text-xl font-medium">{value}</p> : value}
    </div>
  </div>
);

const ScoreList = ({ scores }) => (
  <ul className="text-sm space-y-1">
    {Object.entries(scores).map(([key, val]) => (
      <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: <span className="font-semibold">{val}</span></li>
    ))}
  </ul>
);

const ScoreDetailList = ({ data }) => (
  <ul className="text-sm space-y-1">
    {Object.entries(data).map(([key, val]) => (
      <li key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}: {val.student} ({val.score})
      </li>
    ))}
  </ul>
);

export default Dashboard;
