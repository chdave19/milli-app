import { motion } from 'framer-motion';

const ribbonVariants = {
  initial: {
    y: '-100vh',
    opacity: 0,
    rotate: 0
  },
  animate: j => ({
    y: '100vh',
    opacity: [0, 1, 0],
    rotate: 360,
    transition: {
      delay: j * 0.5,
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

const Ribbon = ({ color, j }) => {
  return (
    <motion.div
      variants={ribbonVariants}
      initial="initial"
      animate={() => ribbonVariants.animate(j)}
      style={{
        width: '5px',
        height: '32px',
        backgroundColor: color,
        position: 'absolute',
        left: `${0 + j * 2}%`
      }}
    />
  );
};

export default Ribbon;
