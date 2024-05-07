import { motion } from 'framer-motion';

const balloonVariants = {
  initial: {
    y: '100vh',
    opacity: 0,
    scale: 0.5
  },
  animate: i => ({
    y: 0,
    opacity: 1,
    scale: [1, 1.5, 1],
    transition: {
      delay: i * 0.3,
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1
    }
  })
};

const Balloon = ({ color, i }) => {
  return (
    <motion.div
      variants={balloonVariants}
      initial="initial"
      animate={() => balloonVariants.animate(i)}
      style={{
        width: '50px',
        height: '75px',
        backgroundColor: color,
        borderRadius: '50px 50px 0 0',
        position: 'absolute',
        left: `${10 + i * 15}%`
      }}
    />
  );
};

export default Balloon;
