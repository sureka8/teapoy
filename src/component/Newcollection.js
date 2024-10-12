import React,{useState} from 'react'
import banner1 from '../image/Teapoy-Grid-banner-Image-1.png'
import { IoMdArrowForward } from "react-icons/io";
import bannerbg from '../image/Home-2-Secton-2-04.jpg'
import pro1_1 from '../image/shop-2-01.jpg'
import pro1_2 from '../image/shop-2-02.jpg'
import pro2_1 from '../image/shop-3-02.jpg'
import pro2_2 from '../image/shop-3-03.jpg'
const Newcollection = () => {
    const [image1, setImage1] = useState(pro1_1);
    const [image2, setImage2] = useState(pro2_1);
  return (
    <div className='w-full flex h-[75vh] space-x-10 '>
        <div className='w-[30%] h-full bg-light_black rounded-2xl p-8'>
            <p className='text-yello uppercase'>GLAMOROUS & STYLE</p>
            <p className='text-4xl mt-8'>New Collections</p>
            <div className='mt-8'>
                <img src={banner1} />
            </div>
            <p className='mt-8'>Venec sit amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque. Donec sit 
                amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque.</p>
                <div className='bg-yello w-48 px-3 py-1 rounded-full flex items-center space-x-3 justify-between mt-8'>
                    <p className='ml-2'>Learn More</p>
                    <div className='bg-white text-black p-3 rounded-full'><IoMdArrowForward /></div>
                </div>
        </div>
        <div className='w-[30%] h-full bg-light_black rounded-2xl'
        style={{
            backgroundImage: `url(${bannerbg})`,
            backgroundSize: 'cover', // Ensures the image covers the entire area
            backgroundPosition: 'center', // Centers the image
          height:"100%",
            backgroundRepeat: 'no-repeat',
        }}></div>
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
        
    </div>
  )
}

export default Newcollection