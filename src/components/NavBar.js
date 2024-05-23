import React from 'react'
import { SocialIcon } from 'react-social-icons'
import SideBar from './SideBar'
import { motion } from 'framer-motion'

export const NavBar = () => {
  return (
    <div className='h-[50px] overflow-hidden'>
        <SideBar/>
        <div className='max-w-[1200px] m-auto sm:flex-row flex flex-row-reverse items-center justify-between h-[100%] p-2 pr-4'>

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:flex font-semibold ml-20 text-xl"
          >
            Mohd Mudassir
          </motion.span>
          <div className='flex gap-5'>
              <SocialIcon style={{ height: 30, width: 30 }} href='#' network='facebook' /> 
              <SocialIcon style={{ height: 30, width: 30 }} href='#' network='instagram' /> 
              <SocialIcon style={{ height: 30, width: 30 }} target='_blank' href='https://www.linkedin.com/in/mohd-mudassir-a80172291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' network='linkedin' /> 
          </div>
        </div>
    </div>
  )
}
