import React from 'react'
import bgimage from '../image/bg-pattern-teapoy.png'
const Elementor = () => {
  return (
    <div className='pt-10 pb-5'>
    <div className='h-20 rounded-xl'
    style={{
        backgroundImage:`url(${bgimage})`,
        backgroundSize:'cover',

    }}>Elementor</div>
    </div>
  )
}

export default Elementor