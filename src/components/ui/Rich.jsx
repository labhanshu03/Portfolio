/** Renders text, turning **phrases** into highlighted metrics. No HTML injection. */
const Rich = ({ text }) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-accent">
        {part}
      </strong>
    ) : (
      part
    ),
  );

export default Rich;
