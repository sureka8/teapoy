import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
const Button = ({text}) => {
  return (
    <div className='bg-yello w-auto px-3 py-1 rounded-full flex items-center space-x-3 justify-between mt-8'>
    <p className='ml-2'>{text}</p>
    <div className='bg-white text-black p-3 rounded-full'><IoMdArrowForward /></div>
</div>
  )
}

export default Button