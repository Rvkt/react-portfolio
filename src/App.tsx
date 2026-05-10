import Navbar from "./components/layout/Navbar";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;