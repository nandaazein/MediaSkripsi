  
  // State untuk Aktivitas Algoritma (Visualisasi Interaktif)
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisualizing, setIsVisualizing] = useState(false);
    const lookupValue = "C002"; // Nilai referensi yang dicari
    const tableData = [
      { kode: "C001", nama: "Buku", harga: 5000 },
      { kode: "C002", nama: "Pensil", harga: "" }, // Harga C002 kosong
      { kode: "C003", nama: "Pen", harga: 3000 },
    ]; // Tabel data dengan harga C002 kosong
    const tableReference = [
      { kode: "C001", nama: "Buku", harga: 5000 },
      { kode: "C002", nama: "Pensil", harga: 2000 },
      { kode: "C003", nama: "Pen", harga: 3000 },
    ]; // Tabel referensi
    const colIndexNum = 3; // Kolom harga (indeks 3, karena dimulai dari 1)
  
    const steps = [
      {
        text: "Tentukan nilai referensi (lookup_value):  'C002' adalah lookup_value yang ada pada tabel data.",
        highlight: { target: "data-row-c002", color: "bg-yellow-200" },
      },
      {
        text: "Cari nilai 'C002' pada tabel referensi.",
        highlight: { target: "ref-col1-c002", color: "bg-green-200" },
      },
      {
        text: "Tentukan index kolomnya yaitu 3 karena harga ada pada kolom ketiga.",
        highlight: { target: "ref-col3-c002", color: "bg-blue-200" },
      },
      {
        text: "Pilih metode pencarian: Gunakan FALSE untuk kecocokan persis.",
        highlight: { target: "method", color: "bg-purple-200" },
      },
      {
        text: "Hasil ditemukan: Harga untuk 'C002' adalah 2000.",
        highlight: { target: "data-price-c002", color: "bg-orange-200" },
      },
    ];
  
    const startVisualization = () => {
      setIsVisualizing(true);
      setCurrentStep(0);
    };
  
    const nextStep = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(0);
        setIsVisualizing(false);
      }
    };
    
  <div className="flex justify-center gap-6 mt-2">
            <div>
              <p className="text-gray-700 text-sm md:text-base text-center mb-2">Tabel Data</p>
              <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-2 py-1">Kode</th>
                    <th className="border border-green-600 px-2 py-1">Nama</th>
                    <th className="border border-green-600 px-2 py-1">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        isVisualizing &&
                        currentStep === 0 &&
                        row.kode === lookupValue
                          ? steps[0].highlight.color
                          : isVisualizing &&
                            currentStep === 4 &&
                            row.kode === lookupValue
                          ? steps[4].highlight.color
                          : ""
                      }
                    >
                      <td className="border border-green-600 px-2 py-1">{row.kode}</td>
                      <td className="border border-green-600 px-2 py-1">{row.nama}</td>
                      <td
                        className={`border border-green-600 px-2 py-1 ${
                          isVisualizing && currentStep === 4 && row.kode === lookupValue ? "bg-orange-200" : ""
                        }`}
                      >
                        {isVisualizing && currentStep === 4 && row.kode === lookupValue ? 2000 : row.harga}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-gray-700 text-sm md:text-base text-center mb-2">Tabel Referensi</p>
              <table className="border-collapse border border-green-800 mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                <thead>
                  <tr className="bg-[#255F38] text-white">
                    <th className="border border-green-600 px-2 py-1">Kode</th>
                    <th className="border border-green-600 px-2 py-1">Nama</th>
                    <th className="border border-green-600 px-2 py-1">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {tableReference.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        isVisualizing &&
                        currentStep === 1 &&
                        row.kode === lookupValue
                          ? steps[1].highlight.color
                          : isVisualizing &&
                            currentStep === 2 &&
                            row.kode === lookupValue
                          ? steps[2].highlight.color
                          : isVisualizing &&
                            currentStep === 3 &&
                            row.kode === lookupValue
                          ? steps[3].highlight.color
                          : ""
                      }
                    >
                      <td className="border border-green-600 px-2 py-1">{row.kode}</td>
                      <td className="border border-green-600 px-2 py-1">{row.nama}</td>
                      <td
                        className={`border border-green-600 px-2 py-1 ${
                          isVisualizing && currentStep === 3 && row.kode === lookupValue ? "bg-blue-200" : ""
                        }`}
                      >
                        {row.harga}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base text-center mt-2">
            Langkah saat ini: <strong>{isVisualizing ? steps[currentStep].text : "Tekan 'Mulai' untuk memulai visualisasi"}</strong>
          </p>
          <div className="mt-4 flex space-x-2 justify-center">
            {!isVisualizing ? (
              <button
                onClick={startVisualization}
                className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
              >
                Mulai
              </button>
            ) : (
              <>
                <button
                  onClick={nextStep}
                  className="bg-[#1B5E20] text-white px-3 py-1 rounded hover:bg-[#145A20] transition duration-300"
                >
                  Langkah Selanjutnya
                </button>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setIsVisualizing(false);
                  }}
                  className="bg-[#D32F2F] text-white px-3 py-1 rounded hover:bg-[#B71C1C] transition duration-300"
                >
                  Ulangi
                </button>
              </>
            )}
          </div>
        </div>