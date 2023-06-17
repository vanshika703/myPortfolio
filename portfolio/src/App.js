import "./App.css";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Samples from "./components/Samples.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App font-DMSans">
      <Hero />
      <About />
      <Samples />
      <Contact />
    </div>
  );
}

export default App;
