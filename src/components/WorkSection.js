import React, { useRef } from 'react'
import {motion , useScroll ,useSpring, useTransform} from 'framer-motion'
import UseIsMobile from '../hooks/UseIsMouse'

const items = [
    {
      id: 1,
      title: "Logo Designs",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 2,
      title: "Business Cards",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 3,
      title: "Letter Head",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 4,
      title: "Social Media Post",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 5,
      title: "Dangler",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 6,
      title: "Flyier",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 7,
      title: "Brouchers",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 8,
      title: "News Paper Artical",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 9,
      title: "Cover Page",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 10,
      title: "UI and Web Template",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
];
  
const Single = ({ item }) => {
    const ref = useRef();
    const isMobile = UseIsMobile();

    const { scrollYProgress } = useScroll({
      target: ref,
    //   offset:["end end" , "start start"]
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
      <section  className='h-[100vh] flex items-center justify-center'>
        <div className="flex items-center justify-center overflow-hidden">
          <div className="max-w-[1200px] h-[100%] p-4 m-auto flex flex-col md:flex-row gap-[10px] md:gap-[50px] items-center justify-center">
            <div className="flex-1 h-[50%] " ref={ref}>
              <img src={item.img} className='md:w-[100%] md:h-[100%] object-cover' alt="" />
            </div>
            <motion.div className="flex-1  flex flex-col justify-center md:justify-normal items-center md:items-start gap-[10px] md:gap-[30px]" style={isMobile ? {} : { y }}>
              <h2 className='text-[30px] md:text-[40px] text-blue-900 font-bold '>{item.title}</h2>
              <p className='text-gray-400 text-[20px] '>{item.desc}</p>
              <button className='bg-orange-500 border-none rounded-[10px] w-[200px] cursor-pointer'>See Designs</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
};
  

const WorkSection = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref , offset:["end end" , "start start"]}); 
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    } )

  return (
    <div className='relative' ref={ref}>
        <div className='sticky top-0 left-0 pt-[10px] text-center text-orange-400 text-[36px]'>
            <h1 className=''>My Work</h1>
            <motion.div style={{scaleX}} className='h-[10px] bg-white'></motion.div>
        </div>
        {items.map(item => (
            <Single item={item} key={item.id}  />
        ))}
    </div>
  )
}

export default WorkSection