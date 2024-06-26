import { motion } from "framer-motion";
import '../styles/herosection.css'
import scroll from '../Images/smallAnimations/scroll.png'
import myphoto from '../Images/MyPhoto/mudassirPhotoW.png'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const HeroSection = () => {
  return (
    <div className="hero" id="Homepage">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-[1200px] m-auto">
        <div className="wrapper h-[60%] justify-center items-center md:items-start md:p-2 md:justify-normal md:right-height">
          <motion.div
            className="textContainer gap-[10px] items-center justify-center md:items-start"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants} className="text-2xl md:text-3xl text-center md:text-left" >MOHAMMED MUDASSIR</motion.h2>
            <motion.h1 variants={textVariants} className="text-4xl md:text-6xl text-center md:text-left">
              GRAPHIC DESIGNER and<br></br> UI designer
            </motion.h1>
            <motion.div variants={textVariants} className="buttons flex gap-1 md:gap-3 flex-row">
              <motion.button variants={textVariants} className="p-2 md:p-4 z-30">
                See the Latest Works
              </motion.button>
              <motion.button variants={textVariants} className="p-2 md:p-4 z-30" >Contact Me</motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src={scroll}
              alt="scroll down"
              className="w-[50px]"
            /> 
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Graphic Designer And MultiMedia
        </motion.div>
        <div className="opacity-1 z-30 p-8 h-[50%] md:h-fit" >
          <img src={myphoto} alt="myPhotoHere" loading="lazy"  className=" bg-photo border rounded-2xl w-[200px] md:w-fit md:object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;