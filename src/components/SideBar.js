import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 27px 27px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at 27px 27px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
      <motion.div className="z-50 fixed top-0 bottom-0 left-0 w-[350px] bg-white" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;