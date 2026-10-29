const nodeClass =
  'rounded-md border border-line bg-bg px-2.5 py-1.5 font-mono text-[11px] text-ink sm:text-xs';
const labelClass = 'font-mono text-[10px] uppercase tracking-[0.14em] text-muted';

/** Vertical link between layers, with an optional protocol label and an animated packet. */
const Connector = ({ edge, className = 'my-1' }) => (
  <div aria-hidden="true" className={`relative mx-auto h-7 w-px bg-line ${className}`}>
    <span className="absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-accent motion-safe:animate-flow motion-reduce:hidden" />
    {edge && <span className={`${labelClass} absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap normal-case tracking-normal`}>{edge}</span>}
  </div>
);

const NodeRow = ({ nodes }) => (
  <ul className="flex flex-wrap justify-center gap-1.5">
    {nodes.map((node, index) => (
      <li key={`${node}-${index}`} className={nodeClass}>
        {node}
      </li>
    ))}
  </ul>
);

/** One parent fanning out to independent services, each connected directly. */
const BranchRow = ({ branches }) => {
  const inset = `${50 / branches.length}%`;
  return (
    <div className="relative">
      <span aria-hidden="true" className="absolute top-0 h-px bg-line" style={{ left: inset, right: inset }} />
      <ul className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${branches.length}, minmax(0, 1fr))` }}>
        {branches.map((branch) => (
          <li key={branch.name} className="flex flex-col items-center text-center">
            <span aria-hidden="true" className="h-4 w-px bg-line" />
            <span className={`${nodeClass} w-full px-1.5`}>{branch.name}</span>
            <span className="mt-1.5 text-[10px] leading-tight text-muted sm:text-[11px]">{branch.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/** Layered architecture sketch: stacked layers, optionally ending in parallel branches. */
const Diagram = ({ title, layers }) => (
  <figure className="rounded-xl border border-line bg-surface p-5 sm:p-6">
    <ol aria-label={`${title} architecture, top to bottom`}>
      {layers.map((layer, index) => (
        <li key={layer.label}>
          {layer.branches ? (
            // Label first so the line runs unbroken from the layer above into the branch bar.
            <>
              <p className={`${labelClass} mt-3 text-center`}>{layer.label}</p>
              <Connector edge={layer.edge} className="mt-1" />
              <BranchRow branches={layer.branches} />
            </>
          ) : (
            <>
              {index > 0 && <Connector edge={layer.edge} />}
              <p className={`${labelClass} mb-2 text-center`}>{layer.label}</p>
              <NodeRow nodes={layer.nodes} />
            </>
          )}
        </li>
      ))}
    </ol>
    <figcaption className={`${labelClass} mt-5 border-t border-line pt-3`}>System sketch</figcaption>
  </figure>
);

export default Diagram;
