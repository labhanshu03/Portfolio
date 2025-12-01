import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-body">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-glow" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(94,92,230,0.15),transparent_55%)]" />
      <Navbar />
      <main className="relative z-10 px-4 pb-20 pt-28 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
