import React from 'react'

import { FaPlane, FaSmile } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";
import CountUpComponent from "react-countup";
import Card from './Card';
import CountUpModule from "react-countup";




const HomeSecondPage = () => {
  
  
const CountUp = CountUpModule.default;
  
  return (
    <>
        <div className='h-90 w-full  bg-[linear-gradient(135deg,#0B1437_0%,#0f2057_50%,#0B1437_100%)] flex items-center justify-center  gap-5'>
        
     

    

     <div className=" grid grid-cols-4  px-12 py-16 bg-[linear-gradient(135deg,#0B1437_0%,#0f2057_50%,#0B1437_100%)] gap-15 rounded-2xl ">

      <div className="  p-10 text-center   w-50 h-58 bg-[#22326D] hover:bg-[#2F448C] rounded-3xl border border-[#3B4D8C] transition duration-300">
        <div className="w-15 h-15 mx-auto flex items-center justify-center rounded-2xl bg-[#1B3D9C] border border-blue-500">
          <FaPlane className="text-4xl text-blue-300" />
        </div>

        <h1 className="text-white text-4xl ml-5 font-bold mt-3  hover:text-yellow-300">
           <CountUpModule.default  end={500} duration={3} enableScrollSpy   />+
        </h1>
        <p className="text-gray-400 text-xl mt-4 tracking-wider hover:text-white">AIRLINES</p>
      </div>

      <div className="  p-10 text-center   w-50 h-58 bg-[#22326D] hover:bg-[#2F448C] rounded-3xl border border-[#3B4D8C] transition duration-300">
        <div className="w-15 h-15 mx-auto flex items-center justify-center rounded-2xl bg-[#1B3D9C] border border-blue-500">
          <FaHotel className="text-4xl text-blue-300" />
        </div>

        <h1  className="text-white text-4xl ml-5 font-bold mt-3  hover:text-yellow-300">
           <CountUpModule.default  end={50} duration={3} enableScrollSpy   />k+
        </h1>
        <p className="text-gray-400 text-xl mt-4 tracking-wider hover:text-white">HOTELS</p>
      </div>

      <div className="  p-10 text-center  w-50 h-58 bg-[#22326D] hover:bg-[#2F448C] rounded-3xl border border-[#3B4D8C] transition duration-300">
        <div className="w-15 h-15 mx-auto flex items-center justify-center rounded-2xl bg-[#1B3D9C] border border-blue-500">
          <IoEarth className="text-4xl text-blue-300" />
        </div>

        <h1  className="text-white text-4xl ml-5 font-bold mt-3  hover:text-yellow-300">
           <CountUpModule.default  end={150} duration={3} enableScrollSpy   />+</h1>
        <p className="text-gray-400 text-xl mt-4 tracking-wider hover:text-white">COUNTRIES</p>
      </div>

      <div className="  p-10 text-center  w-50 h-58 bg-[#22326D] hover:bg-[#2F448C] rounded-3xl border border-[#3B4D8C] transition duration-300">
        <div className="w-15 h-15 mx-auto flex items-center justify-center rounded-2xl bg-[#1B3D9C] border border-blue-500">
          <FaSmile className="text-4xl text-blue-300" />
        </div>

        <h1  className="text-white text-4xl ml-5 font-bold mt-3  hover:text-yellow-300">
           <CountUpModule.default  end={15} duration={3} enableScrollSpy   />M+</h1>
        <p className="text-gray-400 text-xl mt-4 tracking-wider hover:text-white">
          HAPPY TRAVELERS
        </p>
      </div>

    
    </div>
  
             
        </div>
    <Card/>
    </>
  )
}

export default HomeSecondPage
    