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
        <span data-cursor-text="Designer" data-cursor="-color-blue">
          Van
        </span>
        <span data-cursor-text="Developer" data-cursor="-color-purple">
          shika <br className="block sm:hidden"></br>
          Bhoj
        </span>
        <span data-cursor-text="Traveller" data-cursor="-color-pink">
          nagar
        </span>
        <span data-cursor-text="and more!" data-cursor="-color-pink">
          wala
        </span>
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
