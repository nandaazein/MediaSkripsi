import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#255F38] text-white p-4 flex justify-between items-center shadow-lg">
        <div className="text-lg font-bold">AnalyticsLearn - User</div>
        <div className="space-x-4">
          <Link to="/user/kuis" className="hover:underline">Kuis</Link>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Keluar
          </button>
        </div>
      </nav>

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 shadow-lg">
          <h2 className="text-lg font-semibold text-[#255F38] mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/user/kuis" className="block p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                Kuis
              </Link>
            </li>
            <li>
              <Link to="/user/progres" className="block p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                Progres
              </Link>
            </li>
            <li>
              <Link to="/user/nilai" className="block p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                Nilai
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#255F38] text-white p-4 text-center">
        &copy; 2025 AnalyticsLearn. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;