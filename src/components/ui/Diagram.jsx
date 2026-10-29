/** Layered architecture sketch with animated flow between layers. */
const Diagram = ({ title, layers }) => (
  <figure className="rounded-xl border border-line bg-surface p-5 sm:p-6">
    <ol aria-label={`${title} architecture, top to bottom`}>
      {layers.map((layer, index) => (
        <li key={layer.label}>
          {index > 0 && (
            <div aria-hidden="true" className="relative mx-auto my-1 h-7 w-px bg-line">
              <span className="absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-accent motion-safe:animate-flow motion-reduce:hidden" />
            </div>
          )}
          <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {layer.label}
          </p>
          <ul className="flex flex-wrap justify-center gap-1.5">
            {layer.nodes.map((node, nodeIndex) => (
              <li
                key={`${node}-${nodeIndex}`}
                className="rounded-md border border-line bg-bg px-2.5 py-1.5 font-mono text-[11px] text-ink sm:text-xs"
              >
                {node}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
    <figcaption className="mt-5 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
      System sketch
    </figcaption>
  </figure>
);

export default Diagram;
