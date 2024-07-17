import Header from './components/Header';
import Hero from './components/Hero';
import ScienceInSpace from './components/ScienceInSpace';
import Features from './components/Features';
import Footer from './components/Footer';
import Astro from './components/Astro';

function App() {
  return (
    <div className="bg-chinese-black">
      <Header />
      <Hero />
      <Astro/>
      <ScienceInSpace />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
