import React,{useState} from 'react'
import pro1_1 from '../image/shop-5-05.jpg'
import pro1_2 from '../image/shop-5-01.jpg'
import pro2_1 from '../image/shop-4-01.jpg'
import pro2_2 from '../image/shop-4-02.jpg'
import banner1 from '../image/Teapoy-Grid-banner-Image-2.png'
import bannerbg from '../image/Home-2-Secton-2-04.jpg'
import { IoMdArrowForward } from "react-icons/io";
import Button from './Button'
const Bestseller = () => {
    const [image1, setImage1] = useState(pro1_1);
    const [image2, setImage2] = useState(pro2_1);
  return (
    <div className='w-full flex h-[90vh] space-x-10 py-10 '>
        <div className='w-[40%] h-full bg-light_black rounded-2xl px-5 py-20 '>
        <div className='flex space-x-8'>
        <div className='w-1/2 h-3/4 '
         onMouseEnter={() => setImage1(pro1_2)} // Change image on hover
         onMouseLeave={() => setImage1(pro1_1)} // Reset image when hover ends
         >
        <img src={image1}  className='rounded-md' />
        <div className='mt-5 '>
            <p className='hover:text-yello text-slate-400 text-center uppercase'>home decorations</p>
            <p className='text-xl font-bold text-center hover:text-yello mt-2'>Morden Ceramic Lamp</p>
            <p className='text-xl font-semibold text-center'>$5 - $10</p>
        </div>
        </div>



        <div className='w-1/2 h-3/4 '
         onMouseEnter={() => setImage2(pro2_2)} // Change image on hover
         onMouseLeave={() => setImage2(pro2_1)} // Reset image when hover ends
        >
        <img src={image2}  className='rounded-md'/>
        <div className='mt-5'>
            <p className='hover:text-yello text-slate-400 text-center uppercase'>home decorations</p>
            <p className='text-xl font-bold text-center hover:text-yello mt-2'>Ceramic Art Set</p>
            <p className='text-xl font-semibold text-center'>$5 - $10</p>
        </div>
        </div>
        </div>
       

    </div>
    
    <div className='w-[30%] h-full bg-light_black rounded-2xl'
    style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
      height:"100%",
        backgroundRepeat: 'no-repeat',
    }}>
        <div className='flex  mt-96 px-5 space-x-5 items-center'>
        <div className=' w-auto px-3 py-2 rounded-full flex items-center space-x-3 justify-between mt-8 border-[1px] border-white bg-light_black'>
                <p className='ml-2 '>Office Rooms</p>
                <div className=''><IoMdArrowForward /></div>
            </div>
            <div className=' w-auto px-3 py-2 rounded-full flex items-center space-x-3 justify-between mt-8 border-[1px] border-white bg-light_black'>
                <p className='ml-2 '>Bars</p>
                <div className=''><IoMdArrowForward /></div>
            </div>
        </div>
        <div className='flex  px-5 space-x-5 items-center'>
        <div className=' w-auto px-3 py-2 rounded-full flex items-center space-x-3 justify-between mt-8 border-[1px] border-white bg-light_black'>
                <p className='ml-2 '>Lounges</p>
                <div className=''><IoMdArrowForward /></div>
            </div>
            <div className=' w-auto px-3 py-2 rounded-full flex items-center space-x-3 justify-between mt-8 border-[1px] border-white bg-light_black'>
                <p className='ml-2 '>Hospitals</p>
                <div className=''><IoMdArrowForward /></div>
            </div>
        </div>
    </div>

<div className='w-[30%] h-full bg-light_black rounded-2xl p-8'>
        <p className='text-yello uppercase'>unique fashion</p>
        <p className='text-4xl mt-8'>Best Sellers</p>
        <div className='mt-8'>
            <img src={banner1} />
        </div>
        <p className='mt-8'>Venec sit amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque. Donec sit 
            amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque.</p>
            {/* <div className='bg-yello w-48 px-3 py-1 rounded-full flex items-center space-x-3 justify-between mt-8'>
                <p className='ml-2'>Learn More</p>
                <div className='bg-white text-black p-3 rounded-full'><IoMdArrowForward /></div>
            </div> */}
            <div className='w-48'>
            <Button text={'Explore More'}/>
            </div>
          
    </div>
    
    
</div>
  )
}

export default Bestseller