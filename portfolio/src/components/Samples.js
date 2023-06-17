import React from "react";
import work1 from "../img/work1.png";
import work2 from "../img/work2.png";
import work3 from "../img/work3.png";
import work4 from "../img/work4.png";
import work5 from "../img/work5.png";
import work6 from "../img/work6.png";

const Samples = () => {
  return (
    <div className="w-screen bg-black text-center">
      <p className="text-slate-300 font-medium text-[2rem]">
        don't <span className="italic">believe</span> me?
      </p>
      <p className="text-slate-400 font-medium text-[1.4rem]">have a look 👀</p>
      <div className="flex flex-wrap justify-center items-center mt-10">
        <img src={work6} alt="projects" className="w-96 h-48 rounded m-5" />
        <img src={work1} alt="projects" className="w-96 h-48 rounded m-5" />
        <img src={work3} alt="projects" className="w-96 h-48 rounded m-5" />

        <img src={work2} alt="projects" className="w-96 h-48 rounded m-5" />
        <img src={work5} alt="projects" className="w-96 h-48 rounded m-5" />

        <img src={work4} alt="projects" className="w-96 h-48 rounded m-5" />
      </div>
    </div>
  );
};

export default Samples;
