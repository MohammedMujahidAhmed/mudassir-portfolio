import React from 'react'
import '../styles/gallery.css'
import { Gallery } from '../components/Gallery'
import { useLocation } from 'react-router-dom'

const GalleryPage = ({title,images}) => {
    let { state } = useLocation();
  return (
    <div className='bg-[#0c0c1d] p-4 relative min-h-[100vh] '>
        <h3 className='text-3xl text-center p-2 font-bold text-orange-500 sticky top-0 left-0 bg-[#0c0c1d]' >{state.title}</h3>
        <Gallery images={state.images}/>
    </div>
  )
}

export default GalleryPage