import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
      <h6
        className="text-slate-300 font-medium text-[2rem]"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Hi 👋, I'm
      </h6>
      <h1
        className="font-extrabold sm:text-[5rem] text-[3rem] text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Vanshika <br className="block sm:hidden"></br>Bhojnagarwala
      </h1>
      <div id="mouse-scroll">
        <span class="down-arrow-1"></span>
        <span class="down-arrow-2"></span>
        <span class="down-arrow-3"></span>
      </div>
    </div>
  );
};

export default Hero;
