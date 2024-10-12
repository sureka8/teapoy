import React,{useState} from 'react'
import slider1 from '../image/Slider1.png'
import slider2 from '../image/Tea-Boy-Demo-4-Slider-Image-1.1.png'
import slider3 from '../image/Tea-Boy-Demo-4-Slider-Image-3.png'
import AnimatedCounter from './AnimatedCounter'
import { IoMdArrowForward } from "react-icons/io";
const Slider = () => {
    const [activeButton, setActiveButton] = useState(0);
    const sliderImages = [slider1, slider2, slider3];
  return (
    <div className='flex h-screen py-10 space-x-8'>
        <div className='w-1/2 h-[85vh] relative'>
        <div className='absolute top-5 w-full tom-20 h-4/5 '>
            <img src={sliderImages[activeButton]}  className='w-full h-full' />
        </div>
        <div className='h-3/5 bg-light_black rounded-2xl mt-60 flex items-end justify-center'>
        <div className='py-10 '>
        <div className="flex space-x-2 justify-center">
      {[0, 1, 2].map((index) => (
        <button
          key={index}
          className={`h-4 w-4 rounded-full border-[1px] p-1 ${
            activeButton === index ? 'border-yello' : 'border-white'
          }`}
          onClick={() => setActiveButton(index)}
        >
          <div
            className={`h-2 w-2 rounded-full ${
                activeButton === index ? 'bg-yello' : 'bg-white'
            } `}
          ></div>
        </button>
      ))}
    </div>
        </div>
        </div>
        </div>
        <div className='w-[60%] h-[85vh] bg-light_black rounded-2xl top-10 p-10'>
        <p className='uppercase text-yello'>Budget Friendly</p>
        <h1 className='text-5xl mt-5'>Unbeatable Selections & <br /> Unmatched Quality</h1>
        <p className='text-slate-400 mt-8'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
             <div className='flex mt-10 items-center justify-between'>
            <div>
             <div className='text-7xl flex text-yello'>
             <AnimatedCounter targetNumber={10} duration={10}/>M
             </div>
             <p className='text-lg font-bold ml-3 mt-2'>Products Sold</p>
             </div>

             <div>
             <div className='text-7xl flex text-yello'>
             <AnimatedCounter targetNumber={35} duration={10}/>+
             </div>
             <p className='text-lg font-bold ml-3 mt-2'>Years Service</p>
             </div>

             <div>
             <div className='text-7xl flex text-yello m'>
             <AnimatedCounter targetNumber={2} duration={10}/>K
             </div>
             <p className='text-lg font-bold ml-3 mt-2'>Outlets Worldwide</p>
             </div>
             
             </div>

             <div className='mt-10 flex space-x-6'>
                <div className='bg-yello w-48 px-3 py-1 rounded-full flex items-center space-x-3 justify-between'>
                    <p className='ml-2'>Learn More</p>
                    <div className='bg-white text-black p-3 rounded-full'><IoMdArrowForward /></div>
                </div>

                <div className='border-[1px] border-yello w-60 px-3 py-1 rounded-full flex items-center space-x-3 justify-between'>
                    <p className='ml-2'>Learn More</p>
                    <div className='bg-white text-black p-3 rounded-full'><IoMdArrowForward /></div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Slider