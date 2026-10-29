const TagList = ({ items, label, className = '' }) => (
  <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
    {items.map((item) => (
      <li
        key={item}
        className="rounded-md border border-line bg-subtle px-2 py-0.5 font-mono text-[11px] leading-5 text-muted"
      >
        {item}
      </li>
    ))}
  </ul>
);

export default TagList;
