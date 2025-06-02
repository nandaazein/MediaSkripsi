

import { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Filler);

const SimpleChart = () => {
  const [jenisDiagram, setJenisDiagram] = useState('line');

  const dataDiagram = {
    labels: jenisDiagram === 'pie' ? ['Makanan', 'Hiburan', 'Transportasi'] : ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        data:
          jenisDiagram === 'pie'
            ? [60, 30, 10]
            : jenisDiagram === 'bar' || jenisDiagram === 'column'
            ? [40, 30, 50]
            : [80, 85, 90],
        backgroundColor:
          jenisDiagram === 'pie'
            ? ['#255F38', '#4A8B5C', '#81C784']
            : jenisDiagram === 'area'
            ? 'rgba(37, 95, 56, 0.4)'
            : '#255F38',
        borderColor: jenisDiagram === 'line' ? '#255F38' : jenisDiagram === 'area' ? 'rgba(0,0,0,0)' : '#255F38',
        pointBackgroundColor: '#255F38',
        fill: jenisDiagram === 'area',
        tension: 0.3,
      },
    ],
  };

  const tampilkanDiagram = () => {
    if (jenisDiagram === 'line' || jenisDiagram === 'area') {
      return <Line key={jenisDiagram} data={dataDiagram} />;
    } else if (jenisDiagram === 'bar') {
      return <Bar key={jenisDiagram} data={dataDiagram} />;
    } else if (jenisDiagram === 'column') {
      return <Bar key={jenisDiagram} data={dataDiagram} options={{ indexAxis: 'y' }} />;
    } else if (jenisDiagram === 'pie') {
      return <Pie key={jenisDiagram} data={dataDiagram} />;
    }
    return null;
  };

  const keteranganDiagram = {
    line: 'Line Chart digunakan untuk melihat perubahan nilai secara bertahap dari satu waktu ke waktu lain.',
    area: 'Area Chart menunjukkan tren seperti garis, tetapi dengan warna latar yang memperjelas besarnya nilai.',
    bar: 'Bar Chart menunjukkan perbandingan antar kategori secara vertikal.',
    column: 'Column Chart menampilkan perbandingan nilai secara horizontal.',
    pie: 'Pie Chart menunjukkan proporsi bagian terhadap keseluruhan dalam bentuk potongan.',
  };

  // Data untuk tabel berdasarkan jenis diagram
  const tableData = dataDiagram.labels.map((label, index) => ({
    label,
    value: dataDiagram.datasets[0].data[index],
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-bold text-[#255F38] mb-2">MARI MENGAMATI</h3>
      <p className="text-gray-700 mb-4">
      Untuk mempelajari cara data disajikan dalam bentuk visual, coba simulasi berikut. Pilih jenis chart (Garis, Area, Batang, Kolom, atau Lingkaran) untuk mengamati berbagai pola data secara interaktif. <br />
      </p>

      {/* Tabel Data */}
      <div className="flex flex-col items-center mt-4 mb-6">
        <p className="text-gray-600 text-sm text-center mb-2 italic">
          Tabel 8.  {jenisDiagram === 'pie' ? 'Pengeluaran' : 'Nilai Bulanan'}
        </p>
        <table className="border-collapse border border-green-800 w-full md:w-1/2 text-center text-sm">
          <thead>
            <tr className="bg-[#255F38] text-white">
              <th className="border border-green-600 px-4 py-2">
                {jenisDiagram === 'pie' ? 'Kategori' : 'Bulan'}
              </th>
              <th className="border border-green-600 px-4 py-2">
                {jenisDiagram === 'pie' ? 'Persentase (%)' : 'Nilai'}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                <td className="border border-green-600 px-4 py-2">{row.label}</td>
                <td className="border border-green-600 px-4 py-2">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tombol Pemilihan Jenis Diagram */}
      <div className="flex gap-2 mb-4">
        {['line', 'area', 'bar', 'column', 'pie'].map((tipe) => (
          <button
            key={tipe}
            onClick={() => setJenisDiagram(tipe)}
            className={`px-3 py-1 rounded ${
              jenisDiagram === tipe ? 'bg-[#255F38] text-white' : 'bg-gray-200'
            }`}
          >
            {tipe === 'line'
              ? 'Line Chart'
              : tipe === 'area'
              ? 'Area Chart'
              : tipe === 'bar'
              ? 'Bar Chart'
              : tipe === 'column'
              ? 'Column Chart'
              : 'Pie Chart'}
          </button>
        ))}
      </div>

      {/* Visualisasi Diagram */}
      <div className="h-64">{tampilkanDiagram()}</div>
      <p className="text-sm text-gray-600 mt-4 italic">Keterangan: {keteranganDiagram[jenisDiagram]}</p>
    </div>
  );
};

export default SimpleChart;