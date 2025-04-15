import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import LogoDetail from './pages/LogoDetail';
import AnimatedCursor from './components/AnimatedCursor';
import GsapButton from './components/GsapButton';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={
  <>
    <AnimatedCursor />
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <div className="flex justify-center py-12">
        <GsapButton>I'm ready to grow</GsapButton>
      </div>
      <About />
      <Work />
      <Contact />
    </div>
  </>
} />

        <Route path="/work/:id" element={<LogoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;