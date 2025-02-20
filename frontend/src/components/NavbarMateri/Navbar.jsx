const Navbar = () => {
    return (
      <nav className="bg-[#214c1e] p-4 text-white fixed top-0 left-0 right-0 z-10"> {/* Fixed to top */}
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold ">Data Analysis App</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/materi" className="hover:underline">Materi</a></li>
            <li><a href="/informasi" className="hover:underline">Informasi</a></li>
            <li><a href="/spreadsheet" className="hover:underline">Spreadsheet</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;