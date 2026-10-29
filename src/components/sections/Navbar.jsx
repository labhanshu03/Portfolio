import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import ThemeToggle from '../ui/ThemeToggle';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const ResumeLink = ({ className = '' }) => (
  <a
    href={profile.resumeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex h-9 items-center rounded-md bg-ink px-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 ${className}`}
  >
    Résumé
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const isScrolled = useScrolled();

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const hasSurface = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        hasSurface ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="page flex h-[var(--nav-height)] items-center justify-between gap-4">
        <a href="#top" onClick={closeMenu} className="flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-ink font-mono text-xs font-medium text-bg">
            LG
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span aria-hidden="true" className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ResumeLink className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-ink lg:hidden"
          >
            {isMenuOpen ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line lg:hidden">
          <ul className="page flex flex-col py-3">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="flex items-baseline gap-4 border-b border-line py-3.5 text-lg font-medium tracking-tight last:border-0"
                >
                  <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4 sm:hidden">
              <ResumeLink className="w-full justify-center" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
