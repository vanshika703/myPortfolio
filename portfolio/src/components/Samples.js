import React from "react";
import work1 from "../img/work1.png";
import work2 from "../img/work2.png";
import work3 from "../img/work3.png";
import work4 from "../img/work4.png";
import work5 from "../img/work5.png";
import work6 from "../img/work6.png";
import work7 from "../img/work7.png";
import work8 from "../img/work8.png";

const Samples = () => {
  return (
    <div className="w-screen bg-black text-center">
      <p
        className="text-slate-300 font-medium text-[2rem] italic"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        don't believe me?
      </p>
      <p
        className="text-slate-400 font-medium text-[1.4rem]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        have a look 👀
      </p>
      <div className="flex flex-wrap justify-center items-center mt-10">
        <a href="https://www.jiteshagrawal.com/" target="_blank">
          <img
            src={work6}
            alt="projects"
            className="w-96 h-48 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Personal Website"
          />
        </a>
        <a href="https://y0utub.netlify.app/" target="_blank">
          <img
            src={work1}
            alt="projects"
            className="w-96 h-48 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Movie Streaming Website"
          />
        </a>
        <a href="https://awesome-toast-app.netlify.app" target="_blank">
          <img
            src={work3}
            alt="projects"
            className="w-96 h-48 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Food Ordering Web App"
          />
        </a>

        <a href="https://github.com/vanshika703/FoodApp" target="_blank">
          <img
            src={work2}
            alt="projects"
            className="w-96 h-48 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Food Delivery Website"
          />
        </a>
        <a href="https://roc8-chessboard.netlify.app/" target="_blank">
          <img
            src={work5}
            alt="projects"
            className="w-96 h-48 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Knight Moves Chess App"
          />
        </a>

        <a href="https://willowy-sorbet-61c558.netlify.app/" target="_blank">
          <img
            src={work7}
            alt="projects"
            className="w-96 h-48 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Multi Page Custom Form"
          />
        </a>
        <a
          href="https://www.behance.net/gallery/158877585/Cozy-Candles-Co"
          target="_blank"
        >
          <img
            src={work8}
            alt="projects"
            className="w-96 h-56 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Candle Website UI design"
          />
        </a>
        <a
          href="https://www.behance.net/gallery/159531577/Bakery-Website"
          target="_blank"
        >
          <img
            src={work4}
            alt="projects"
            className="w-96 h-56 rounded m-5"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-cursor-text="Bakery Website UI design"

          />
        </a>
      </div>
    </div>
  );
};

export default Samples;
