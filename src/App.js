import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Inspiratif from "./components/Inspiratif";
import GreenYouth from "./components/GreenYouth";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Inspiratif/>
      <GreenYouth/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
