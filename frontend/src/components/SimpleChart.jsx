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
    labels: jenisDiagram === 'pie' ? ['Makanan', 'Hiburan'] : ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        data:
          jenisDiagram === 'pie'
            ? [60, 40]
            : jenisDiagram === 'bar' || jenisDiagram === 'column'
            ? [40, 30, 50]
            : [80, 85, 90],
       backgroundColor:
        jenisDiagram === 'pie'
            ? ['#255F38', '#4A8B5C']
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
    line: 'Diagram Garis digunakan untuk melihat perubahan nilai secara bertahap dari satu waktu ke waktu lain.',
    area: 'Diagram Area menunjukkan tren seperti garis, tetapi dengan warna latar yang memperjelas besarnya nilai.',
    bar: 'Diagram Batang menunjukkan perbandingan antar kategori secara vertikal.',
    column: 'Diagram Kolom menampilkan perbandingan nilai secara horizontal.',
    pie: 'Diagram Lingkaran menunjukkan proporsi bagian terhadap keseluruhan dalam bentuk potongan.',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-8">
      <h3 className="text-lg font-bold text-[#255F38] mb-2">Lihat Diagram</h3>
      <p className="text-gray-700 mb-4">
        Untuk memahami bagaimana data disajikan dalam bentuk grafik, gunakan simulasi berikut.
        Pilih jenis diagram (Garis, Area, Batang, Kolom, atau Lingkaran) untuk melihat pola data yang berbeda. <br />
        Ini mirip seperti saat menggunakan <strong>VLOOKUP</strong> — kamu mencoba menampilkan data tertentu dengan cara yang mudah dibaca dan dipahami.
      </p>
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
              ? 'Garis'
              : tipe === 'area'
              ? 'Area'
              : tipe === 'bar'
              ? 'Batang'
              : tipe === 'column'
              ? 'Kolom'
              : 'Lingkaran'}
          </button>
        ))}
      </div>
      <div className="h-64">{tampilkanDiagram()}</div>
      <p className="text-sm text-gray-600 mt-4 italic">Keterangan: {keteranganDiagram[jenisDiagram]}</p>
    </div>
  );
};

export default SimpleChart;
