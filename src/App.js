import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";

import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

function App() {
  return (
    <div className="scroll-smooth ">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <Work />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <TaskDashboard/> */}
    </div>
  )
   
}

export default App;
