import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  
  const items = ["Homepage", "MyWork", "Resume", "Contact", "About"];

  return (
    <motion.div className="absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-5" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-[40px]"
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;