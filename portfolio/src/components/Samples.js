import React from "react";
import youtube from "../img/work1.png";

const Samples = () => {
  return (
    <div className="h-screen w-screen bg-black text-center">
      <p className="text-slate-300 font-medium text-[2rem]">
        Don't believe me?
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <img src={youtube} alt="projects" className="w-96 h-52 rounded m-5" />
        <img src={youtube} alt="projects" className="w-96 h-52 rounded m-5" />
        <img src={youtube} alt="projects" className="w-96 h-52 rounded m-5" />
        <img src={youtube} alt="projects" className="w-96 h-52 rounded m-5" />
        <img src={youtube} alt="projects" className="w-96 h-52 rounded m-5" />
        <img src={youtube} alt="projects" className="w-96 h-52 rounded m-5" />
      </div>
    </div>
  );
};

export default Samples;
