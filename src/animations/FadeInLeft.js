import { motion } from "framer-motion";

const FadeInLeft = ({ children }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: "-100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="fade-in-left"
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;
