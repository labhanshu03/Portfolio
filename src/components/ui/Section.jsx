import Reveal from './Reveal';

/**
 * Numbered page section.
 * "aside" puts a sticky label in a left column; "stacked" puts it above full-width content.
 */
const Section = ({ id, index, title, layout = 'aside', className = '', children }) => {
  const headingId = `${id}-title`;
  const isAside = layout === 'aside';

  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${className}`}>
      <div className={`page ${isAside ? 'grid gap-8 md:grid-cols-12 md:gap-10' : ''}`}>
        <header className={isAside ? 'md:col-span-3' : 'mb-12 md:mb-16'}>
          <div className={isAside ? 'md:sticky md:top-[calc(var(--nav-height)+2rem)]' : ''}>
            <p className="eyebrow">{index}</p>
            <h2 id={headingId} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          </div>
        </header>
        {/* Stacked sections are tall, so their children reveal themselves piece by piece. */}
        {isAside ? <Reveal className="min-w-0 md:col-span-9">{children}</Reveal> : children}
      </div>
    </section>
  );
};

export default Section;
