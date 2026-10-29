import { m } from 'framer-motion';

const MotionDiv = m.div;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

/** Fades and lifts its children into place the first time they scroll into view. */
const Reveal = ({ children, className }) => (
  <MotionDiv
    className={className}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
  >
    {children}
  </MotionDiv>
);

export default Reveal;
