import "./App.css";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Samples from "./components/Samples.js";
import Contact from "./components/Contact.js";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "mouse-follower/src/scss/index.scss";

function App() {
  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower();
  return (
    <div className="App font-DMSans" data-cursor="-color-blue">
      <Hero />
      <About />
      <Samples />
      <Contact />
    </div>
  );
}

export default App;
