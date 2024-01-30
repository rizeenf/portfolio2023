import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        type: "spring",
      }}
    >
      <LazyLoadImage
        alt="Profile pic"
        src="/me.jpeg"
        placeholderSrc="/me.jpeg"
        effect="black-and-white"
        className="object-cover w-64 h-72 md:h-96 md:w-80 imageBlob"
      />
    </motion.div>
  );
};

export default ImageIntro;
