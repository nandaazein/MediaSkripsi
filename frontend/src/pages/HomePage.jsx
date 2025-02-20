import React from 'react';
import HeroImage from '../assets/hero.svg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage pb-10">
        <div className="container mx-auto px-4">
          <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
            <div className="box">
              <h1 className="lg:text-4xl/tight text-3xl font-medium mb-7 text-[#214C1E]">
                Media Pembelajaran Interaktif <span className='font-bold text-[#1D6F35] underline'>Analisis Data</span>
              </h1>
              <p className="text-base/8 mb-7  text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe ducimus incidunt soluta, fuga, magni consectetur dolorem dolorum sed omnis quibusdam hic ad officia odio cumque consequatur cum, eaque quae!
              </p>
              <a href="#" className="bg-[#1D6F35] hover:bg-[#155A2A] transition-all py-2 px-4 text-white shadow rounded-full">
                Mulai Belajar <i className="ri-eye-line ms-1"></i>
              </a>
            </div>
            <div className="box">
              <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] md:m-0 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
