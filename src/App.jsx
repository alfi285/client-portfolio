
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';



const App = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Hero />
      <About />
      <Projects />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App