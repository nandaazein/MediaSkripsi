import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // let scrollActive = scroll ? "py-6 bg-[#1D6F35] shadow" : "py-4 bg-[#214C1E]";
    let scrollActive = scroll
  ? "py-6 bg-[#1D6F35] shadow fixed z-50"
  : "py-4 bg-[#214C1E] fixed z-50";


    return (
        <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="sm:text-2xl text-xl font-bold text-white">Analitica.</h1>
                    </div>
                    <ul
                        className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 
                        md:text-white md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg 
                        shadow-slate-300 bg-[#1D6F35] font-bold text-white transition-all`}
                    >
                        <li className="flex items-center gap-3">
                            <i className="ri-home-2-line text-3xl md:hidden block"></i>
                            <a href="/" className="font-medium opacity-75 ">Beranda</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ri-information-line text-3xl md:hidden block"></i>
                            <a href="materi" className="font-medium opacity-75">Materi</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ri-settings-3-line text-3xl md:hidden block"></i>
                            <a href="spreadsheet" className="font-medium opacity-75">Spreadsheet</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="ri-image-line text-3xl md:hidden block"></i>
                            <a href="informasi" className="font-medium opacity-75">Informasi</a>
                        </li>
                    </ul>
                    <div className="social flex items-center gap-2">
                        <a
                            href="#"
                            className="bg-white px-5 py-2 rounded-full text-[#214C1E] font-bold hover:bg-[#f0f0f0] transition-all"
                        >
                           Daftar
                        </a>
                        <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
