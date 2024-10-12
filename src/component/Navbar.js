import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='bg-yello rounded-2xl py-5 flex justify-between items-center text-white uppercase px-5'>
      <div className='h-10 w-40'>
   <img src='https://wdtteapoy.wpengine.com/wp-content/themes/teapoy/assets/images/light-logo.svg' className='h-full w-full'/>
      </div>
      <div>
        <ul className='flex space-x-5'>
          <li className='flex items-center'><p>Home </p><RiArrowDropDownLine className='text-xl'/></li>
          <li className='flex items-center'><p>Pages </p><RiArrowDropDownLine className='text-xl'/></li>
          <li className='flex items-center'><p>shop </p><RiArrowDropDownLine className='text-xl'/></li>
          <li className='flex items-center'><p>collection </p><RiArrowDropDownLine className='text-xl'/></li>
          <li className='flex items-center'><p>blog </p><RiArrowDropDownLine className='text-xl'/></li>
          <li className='flex items-center'><p>Contact us </p></li>
        </ul>
      </div>
      <div className='text-2xl flex space-x-3 items-center'>
<BiSearchAlt />
<CiUser />
<MdOutlineShoppingCartCheckout />
      </div>
    </div>
  )
}

export default Navbar