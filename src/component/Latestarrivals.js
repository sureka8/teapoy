import React, { useState } from "react";
import Button from "./Button";
import pro1_1 from "../image/shop-7-04.jpg";
import pro1_2 from "../image/shop-7-05.jpg";
import pro2_1 from "../image/shop-10-02.jpg";
import pro2_2 from "../image/shop-10-03.jpg";
import pro3_1 from "../image/shop-9-01.jpg";
import pro3_2 from "../image/shop-9-02.jpg";
const Latestarrivals = () => {
  const [image1, setImage1] = useState(pro1_1);
  const [image2, setImage2] = useState(pro2_1);
  const [image3, setImage3] = useState(pro3_1);
  return (
    <div className="bg-light_black rounded-xl h-auto px-20 py-20">
      <p className="text-yello uppercase">Don't Miss Out</p>
      <div className="flex justify-between items-center">
        <p className="text-6xl ">Shop The Latest Arrivals</p>
        <Button text={"View All Products"} />
      </div>
      <div className="grid grid-cols-3 gap-10 py-10 h-[80vh]">
        <div
          className="bg-light_black h-full w-full"
          onMouseEnter={() => setImage1(pro1_2)}
          onMouseLeave={() => setImage1(pro1_1)}
        >
          <div className="bg-black h-3/4 rounded-xl">
            <img src={image1} className="h-full w-full rounded-xl" />
          </div>
          <p className="uppercase text-center  text-slate-400 text-sm mt-5">
            indoor decorations, outdoor decorations
          </p>
          <p className="text-xl font-bold text-center mt-3">
            Rounded Steel Tea Table
          </p>
          <p className="text-xl font-bold text-center mt-3">$5 - $10</p>
        </div>
        <div
          className="bg-light_black h-full w-full"
          onMouseEnter={() => setImage2(pro2_2)}
          onMouseLeave={() => setImage2(pro2_1)}
        >
          <div className="bg-black h-3/4 rounded-xl">
            <img src={image2} className="h-full w-full rounded-xl" />
          </div>
          <p className='uppercase text-center  text-slate-400 text-sm mt-5'>indoor decorations</p>
                    <p className='text-xl font-bold text-center mt-3'>Microfiber Bed Pillow</p>
                    <p className='text-xl font-bold text-center mt-3'>$5 - $10</p>
        </div>
        <div
          className="bg-light_black h-full w-full"
          onMouseEnter={() => setImage3(pro3_2)}
          onMouseLeave={() => setImage3(pro3_1)}
        >
          <div className="bg-black h-3/4 rounded-xl">
            <img src={image3} className="h-full w-full rounded-xl" />
          </div>
          <p className='uppercase text-center  text-slate-400 text-sm mt-5'>indoor decorations</p>
                    <p className='text-xl font-bold text-center mt-3'>Office Leather Sofa</p>
                    <p className='text-xl font-bold text-center mt-3'>$5 - $10</p>
        </div>
      </div>
    </div>
  );
};

export default Latestarrivals;
