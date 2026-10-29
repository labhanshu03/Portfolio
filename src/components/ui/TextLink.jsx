import { ArrowUpRight } from 'lucide-react';

/** External link with a drawn underline and a nudging arrow. */
const TextLink = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-accent"
  >
    <span className="link-underline">{children}</span>
    <ArrowUpRight
      aria-hidden="true"
      className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>
);

export default TextLink;
