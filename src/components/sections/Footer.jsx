import { profile } from '../../data/profile';

const Footer = () => (
  <footer className="border-t border-line">
    <div className="page flex flex-col gap-3 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Built with React + Tailwind</p>
      <a href="#top" className="transition-colors hover:text-ink">
        Back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;
