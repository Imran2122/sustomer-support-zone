import React from "react";
import vector from "../assets/vector1.png";

const Banner = ({selectedTicket,resolvedTicket}) => {
  return (
    <div className="flex mt-4 gap-2">
      {/* 1st Card start*/}
      <div className="relative w-full h-44 rounded-xl overflow-hidden flex items-center justify-center text-white">
    
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500"></div>

        {/* Left image */}
        <img src={vector} alt="design" className="absolute left-0 top-0   " />

        {/* Content */}
        <div className="relative  text-center">
          <p className="text-lg">In-Progress</p>
          <h2 className="text-4xl font-bold">{selectedTicket.length}</h2>
        </div>

        {/* Right  image */}
        <img
          src={vector}
          alt="design"
          className="absolute right-0 top-0 h-full  rotate-180 "
        />
      </div>

      {/* 1st cart end */}

      {/* 2nd cart start*/}
      <div className="relative w-full h-44 rounded-xl overflow-hidden flex items-center justify-center text-white">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500"></div>

        {/* Left image */}
        <img src={vector} alt="design" className="absolute left-0 top-0   " />
        {/* content */}
        <div className="relative text-center">
          <p className="text-lg">Resolved</p>
          <h2 className="text-4xl font-bold">{resolvedTicket.length}</h2>
        </div>

        {/* Right image */}
        <img
          src={vector}
          alt="design"
          className="absolute right-0 top-0 h-full rotate-180"
        />
      </div>

      {/* 2nd cart end */}
    </div>
  );
};

export default Banner;
