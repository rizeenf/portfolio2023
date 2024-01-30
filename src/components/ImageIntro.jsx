import { motion } from "framer-motion";

const ImageIntro = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "50%",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.5,
        delay: 0.3,
        type: "spring",
      }}
    >
      <div className="w-64 h-72 md:h-96 md:w-80 imageBlob" />
    </motion.div>
  );
};

export default ImageIntro;
