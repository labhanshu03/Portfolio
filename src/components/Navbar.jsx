

import { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionHeader = motion.header;

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = useCallback(() => {
    if (location.pathname === '/projects') {
      navigate('/projects', { state: { scrollTo: 'contact' } });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contact' } });
      return;
    }

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname, navigate]);

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-30 flex justify-center px-2 py-2 sm:px-4 sm:py-4"
    >
      <div className="flex w-full max-w-6xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2.5 sm:px-6 sm:py-4 backdrop-blur-2xl">
        <Link
          to="/"
          className="text-sm sm:text-lg font-semibold tracking-tight text-white whitespace-nowrap"
        >
          Labhanshu Gupta
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium text-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`rounded-full px-2 py-1.5 sm:px-4 sm:py-2 transition-colors ${
                location.pathname === item.path
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleContactClick}
            className="rounded-full bg-gradient-to-r from-brand-accent to-brand-highlight px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-glow transition hover:opacity-90 whitespace-nowrap"
          >
            Contact
          </button>
        </nav>
      </div>
    </MotionHeader>
  );
};

export default Navbar;



