import React from "react";
import vector from "../assets/vector1.png";

const Banner = ({ selectedTicket, resolvedTicket }) => {
  return (
    <div className="flex flex-col md:flex-row mt-4 gap-3">
      
      {/* 1st Card */}
      <div className="relative w-full h-32 md:h-44 rounded-xl overflow-hidden flex items-center justify-center text-white">
        
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500"></div>

        <img src={vector} alt="design" className="absolute left-0 top-0 w-20 md:w-auto" />

        <div className="relative text-center">
          <p className="text-sm md:text-lg">In-Progress</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            {selectedTicket.length}
          </h2>
        </div>

        <img
          src={vector}
          alt="design"
          className="absolute right-0 top-0 h-full rotate-180 w-20 md:w-auto"
        />
      </div>

      {/* 2nd Card */}
      <div className="relative w-full h-32 md:h-44 rounded-xl overflow-hidden flex items-center justify-center text-white">
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500"></div>

        <img src={vector} alt="design" className="absolute left-0 top-0 w-20 md:w-auto" />

        <div className="relative text-center">
          <p className="text-sm md:text-lg">Resolved</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            {resolvedTicket.length}
          </h2>
        </div>

        <img
          src={vector}
          alt="design"
          className="absolute right-0 top-0 h-full rotate-180 w-20 md:w-auto"
        />
      </div>

    </div>
  );
};

export default Banner;
