import React from 'react'
import img1 from '../assets/img15.png'
import { LuLeaf } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { BsMoisture } from "react-icons/bs";

function Features() {
  return (
    <>
      <div className=' h-[610px] text-red-600'>
      <h1 className='text-6xl font-bold text-pink-600 pt-14 text-center font-serif'><q>Hospital Management System Key Features </q></h1>
      <p className='text-xl font-semibold pt-2 text-gray-600 items-center text-center'>HMS features a completely integrated graphical work environment including a <br></br>database, data entry utilities, watershed map, computation engine, and results<br></br> reporting tools.</p>
        <div className='flex justify-center items-center pt-10 gap-24'>
            {/* bbbbbbbbbbbbbbb */}
       <div>
       <div className='items-center'>
                <LuLeaf size={60} className='ml-[130px] text-pink-600 ' />
                <h1 className='font-bold text-3xl'>Billing Management</h1>
                <p className='text-xl font-semibold text-gray-600 '>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
            <div className='items-center mt-6'>
            <FaTemperatureThreeQuarters size={60} className='ml-[130px] text-purple-600  ' />
                <h1 className='font-bold text-3xl'>Inventory Management</h1>
                <p className='text-xl font-semibold text-gray-600'>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
       </div>
       {/* bbbbbbbbbbbb */}
            <div>
            <div>
                <img className='w-[400px] h-[400px] rounded-full hover:scale-90 hover:animate-pulse cursor-pointer' src={img1} alt='no'/>
            </div>
            </div>
            {/* gggggggggggggg */}
            <div>
            <div className='items-center'>
            <AiOutlineSafety size={60} className='ml-[130px] text-yellow-400 ' />
                <h1 className='font-bold text-3xl'>Pharmacy Management</h1>
                <p className='text-xl font-semibold text-gray-600'>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
            <div className='items-center mt-6'>
            <BsMoisture size={60} className='ml-[130px] text-emerald-500 ' />
                <h1 className='font-bold text-3xl'>Staff Management</h1>
                <p className='text-xl font-semibold text-gray-600'>Socks provide a layer of Cushioning <br></br>  between your feets and shoes okk</p>
            </div>
       </div>
        </div>
        <hr className=' mt-24'></hr>
      </div>
    </>
  )
}

export default Features
