import React from 'react';
import image8 from '../../../assets/Pictures/image8.png';

const HighlightSection: React.FC = () => {
  return (
    <section className="flex flex-col  lg:flex-row gap-12 items-center justify-center mt-20 px-4  ">
      <img
        src={image8}
        alt="highlight"
        className=" "
      />

      <div className=" text-center sm:mt-0">
        <h4 className="font-roboto font-bold text-3xl  md:text-5xl">
          See it, Create it,
          Try it, Do it
        </h4>
        <p className="font-roboto text-lg text-center sm:text-base mt-3">
          The Best Part of Gallery is
          discovering images and ideas <br />
          from all over the world
        </p>
        <button className="text-white border-2 rounded w-[11rem] h-12 mt-4 font-roboto font-semibold bg-[#DB02DC] hover:bg-[#DB02DC]/70 border-none">
          Explore
        </button>
      </div>
    </section>
  );
};

export default HighlightSection;
