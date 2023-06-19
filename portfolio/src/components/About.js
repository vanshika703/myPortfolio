import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center">
      <p
        className="text-slate-300 font-medium text-[2rem] w-2/3 sm:w-auto"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        I can help you craft a <span className="italic">stunning website</span>
        <br className="sm:block hidden"></br> that effectively showcases your
        products or services,<br></br> whether you're an individual or a
        business.
      </p>
      {/*       <p className="text-slate-300 text-lg w-6/12">
        With a focus on creating a seamless user experience, my websites boast a
        visually appealing UI that is both user-friendly and mobile responsive.
        By partnering with me, you can expect a website that not only captivates
        your audience but also generates better traffic and leads for your
        business. Let's collaborate to create an impressive online presence that
        drives your success.
      </p> */}
    </div>
  );
};

export default About;
