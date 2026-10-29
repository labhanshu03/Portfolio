/** Screenshot inside a minimal browser chrome. */
const BrowserFrame = ({ image, url }) => (
  <div className="overflow-hidden rounded-xl border border-line bg-surface">
    <div className="flex items-center gap-2 border-b border-line px-3 py-2">
      <span aria-hidden="true" className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </span>
      <span className="truncate font-mono text-[10px] text-muted">{url}</span>
    </div>
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      className="h-auto w-full"
    />
  </div>
);

export default BrowserFrame;
