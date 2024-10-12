import React from 'react'
import img1 from '../image/book.png'
import img2 from '../image/phone.png'
import img3 from '../image/dollar.png'
const Messages = () => {
  return (
    <div className='h-auto py-14'>
        <div className='flex justify-between w-full space-x-10'>
            <div className='bg-light_black h-40 w-1/3 rounded-xl flex items-center justify-center px-10'>
            <div className='w-2/5 relative '>
            <div className='h-24 w-24 bg-black rounded-full'>
              
            </div>
            <div className='-top-5 left-5 absolute'>
            <img src={img1} />
            </div>
            </div>
            <div className='w-3/5'>
            <p className='text-xl font-bold'>Transit Protocol</p>
            </div>
            </div>
             <div className='bg-light_black h-40 w-1/3 rounded-xl'>1</div>
             <div className='bg-light_black h-40 w-1/3 rounded-xl'>1</div>
        </div>
    </div>
  )
}

export default Messages