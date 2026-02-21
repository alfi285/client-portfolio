
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Iconsection from './components/Iconsection';





const App = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-900 min-h-screen">
      <Hero />
      <About />
      <Iconsection/>
      <Projects />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App