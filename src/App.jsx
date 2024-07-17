import Header from './components/Header';
import Hero from './components/Hero';
import ScienceInSpace from './components/ScienceInSpace';
import Features from './components/Features';
import Footer from './components/Footer';
import Astro from './components/Astro';
import StarsThree from './components/Three/StarsThree';
import LocomotiveScroll from "locomotive-scroll";
import MetorThree from './components/Three/MetorThree';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (<>
    <StarsThree />
    <MetorThree />
    <div className="">
      <Header />
      <Hero />
      <Astro />
      <ScienceInSpace />
      <Features />
      <Footer />
    </div>
  </>
  );
}

export default App;
