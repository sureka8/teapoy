import React from 'react'
import bgimage from '../image/Home-1-newsletter-bg-01.jpg'
const Newsletter = () => {
  return (
    <div className='h-[60vh] mt-10'>
    <div className='rounded-md  py-10'
    style={{
        backgroundImage :`url(${bgimage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
      height:"100%",
        backgroundRepeat: 'no-repeat',
    }}>
        <div>
        <p className='text-yello text-center uppercase font-bold'>art of comfort</p>
        <p className='text-5xl font-bold text-center mt-5'>Transforming Spaces,<br /> Transforming Style</p>
        </div>
    </div>
    </div>
  )
}

export default Newsletter