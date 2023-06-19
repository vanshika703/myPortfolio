import React from "react";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";

const Contact = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-around items-center">
      <p
        className="text-slate-300 font-medium text-[2rem] w-2/3 sm:w-auto"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Let's <span className="italic">collaborate</span> to create an
        impressive online presence<br></br> that drives your success.
      </p>

      <div className="flex justify-around items-center sm:flex-row flex-col">
        <a
          href="https://calendly.com/vanshikabhojnagarwala/30min"
          target="_blank"
        >
          <button
            className="text-slate-300 font-medium text-[1.4rem] underline"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Schedule a call today
          </button>
        </a>
        <p
          className="text-slate-300 sm:text-[1.4rem] text-[1rem] px-10"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          vanshikabhojnagarwala2000@gmail.com
        </p>

        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <a href="https://twitter.com/vanshikabh703" target="_blank">
            <img src={twitter} alt="social" className="w-6 h-6 m-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/vanshika-bhojnagarwala/"
            target="_blank"
          >
            <img src={linkedin} alt="social" className="w-6  h-6 m-2" />
          </a>
          <a href="https://www.instagram.com/vanshika_703/" target="_blank">
            <img src={instagram} alt="social" className="w-6 h-6  m-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
