import React from "react";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";

const Contact = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-around items-center">
      <p className="text-slate-300 font-medium text-[2rem]">
        Let's <span className="italic">collaborate</span> to create an
        impressive online presence<br></br> that drives your success.
      </p>

      <div className="flex justify-around items-center w-2/3">
        <button className="text-slate-300 font-medium text-[1.4rem]">
          Schedule a call today
        </button>
          <p className="text-slate-300 text-[1.4rem]">
            vanshikabhojnagarwala2000@gmail.com
          </p>

          <div className="flex justify-center">
            <img src={twitter} alt="social" className="w-6 h-6 m-2" />
            <img src={linkedin} alt="social" className="w-6  h-6 m-2" />
            <img src={instagram} alt="social" className="w-6 h-6  m-2" />
          </div>
      </div>
    </div>
  );
};

export default Contact;
