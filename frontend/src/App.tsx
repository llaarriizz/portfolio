import { About } from "./components/About";
import { Backdrop } from "./components/Backdrop";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Ticker } from "./components/Ticker";

function App() {
  return (
    <div className="scanlines vignette min-h-screen">
      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
