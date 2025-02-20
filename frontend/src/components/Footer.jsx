const Footer = () => {
  return (
    <div className="footer bg-[#214C1E] shadow fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between py-4">
        
        {/* Copyright di Tengah */}
        <p className="text-white text-center w-full sm:w-auto">
          &copy; Copyright by <span className="font-bold">Difana Nanda Pridhasila Zein</span>
        </p>

        {/* Sosial Media di Kanan */}
        <div className="social-footer flex items-center sm:gap-7 gap-1.5 mt-2 sm:mt-0">
          <i className="ri-facebook-circle-fill text-2xl text-white"></i>
          <i className="ri-twitter-fill text-2xl text-white"></i>
          <i className="ri-youtube-fill text-2xl text-white"></i>
          <i className="ri-linkedin-box-fill text-2xl text-white"></i>
          <i className="ri-github-fill text-2xl text-white"></i>
        </div>

      </div>
    </div>
  );
}

export default Footer;

