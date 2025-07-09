import React from "react";
import { Link } from "react-router-dom";
import Zhentryx from "../../../assets/Zhentryx.png";
import bgimage from "../../../assets/bgimage.png";
import Frame7 from "../../../assets/Frame 761.png";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 hidden md:block" />

      <div className="relative z-20 flex justify-center items-center pt-8 sm:pt-8">
        <img
          src={Zhentryx}
          alt="Zhentryx logo"
          className="w-32 sm:w-64 md:w-64 lg:w-56 h-auto"
        />
      </div>
     
      <div className="relative z-20 h-full flex flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="text-white text-left max-w-xl mt-10 sm:mt-16 lg:mt-0 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-castoro leading-tight">
            GALLERY OF<br />LIFE AND DEATH
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic saepe adipisci
            excepturi reiciendis neque.
          </p>
          <div className="mt-6 flex flex-row gap-4">
            <Link
              to="/login"
              className="inline-block mt-6 px-10 py-3 text-white border-2 border-white hover:bg-[#7A18F5]/80 rounded font-semibold"
            >
              LOG IN
            </Link>
            <Link
              to="/signup"
            className="inline-block mt-6 px-10 py-3 text-white bg-[#7A18F5] hover:bg-[#7A18F5]/80 rounded font-semibold"
          >
            SIGN UP
          </Link>
          </div>
        </div>

        <div className="mt-10 hidden md:block">
          <img
            src={Frame7}
            alt="Gallery logo"
            className=" sm:w-52 md:w-56 lg:w-64 xl:w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
