import React from 'react'
import img1 from '../assets/img27.png';
import img2 from '../assets/img30.png';
import img3 from '../assets/img35.png';
import img4 from '../assets/img34.png';
// import img5 from '../assets/img33.png';
import vediop from '../assets/vedio4.mp4'
export default function Services() {
  return (
    <>
{/*    
      <div className='flex gap-2 pl-24 text-white mt-32 border-b-2 pb-10 my-12 '>
      <button className='px-4 rounded-2xl py-3 text-center bg-green-700 mt-8  text-xl hover:bg-green-500'>Cencer</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-yellow-500 mt-8  text-xl hover:bg-yellow-400'>Heart Attack</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-purple-800 mt-8  text-xl hover:bg-purple-600'> Accidents</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-pink-600 mt-8  text-xl hover:bg-pink-500'> Covid 19</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-red-700 mt-8  text-xl hover:bg-red-600'> Strokes</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-green-500 mt-8  text-xl hover:bg-green-400'>Smoked Malaria</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-blue-600 mt-8  text-xl *:hover:bg-blue-500'>Cholera</button>
      <button className='px-4 rounded-2xl py-3 text-center bg-orange-600 mt-8  text-xl hover:bg-orange-500'>Blood Pressure</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-red-900 mt-8  text-xl hover:bg-red-800'> Diabetes</button>
      <button className='px-10 rounded-2xl py-3 text-center bg-teal-600 mt-8  text-xl hover:bg-teal-700'> Small pox</button>
      </div> */}
      {/* /////////////////////////////////////////////////////////////////////////////// */}
      
      <div>
        <h1 className='text-6xl text-yellow-400 font-semibold text-center my-4 font-serif pt-[150px]'><q>TOP PROVIDING SERVICES</q></h1>
      </div>
      <div className='flex gap-4 px-16 pt-6'>
        {/* bbbbbbbbbbbbbbbbbbb */}
      <div className=''>
        <div>
         <img className='w-[420px] h-[300px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer ' src={img1}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-blue-600 cursor-pointer '>ORTHOPEDICS</h1>
        </div>
        <div>
         <img className='w-[420px] h-[300px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-green-600 cursor-pointer'>HOSPICE SERVICES</h1>
        </div>
      </div>
      {/* nnnnnnnnnnnnnnnnnnnn */}
      <div>
      {/* <img className='w-[800px] h-[600px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5}></img> */}
      <video className='h-[600px] w-[800px] object-cover rounded-3xl hover:animate-pulse'loop autoplay controls src={vediop} ></video>
      <h1 className='text-5xl font-serif font-semibold py-3 text-pink-600 cursor-pointer'>ADICTION SERVICE CLINIC</h1>
      <p className='text-gray-600 text-lg'>Ready in under 30 minutes, these enchiladas are destined to be “a hit with the <br></br> whole family.” The 3 Best Travel Coffee Mug The 3 Best Travel Coffee <br></br> Mu3 Vegetarian Tacos That Don’t Skimp on Flavor Vegetarian Tacos That Don’t<br></br> Skimp on Flavor (or Toppings)</p>
      </div>
      {/* bbbbbbbbbbbbbbbbbbbb */}
      <div>
      <div>
         <img className='w-[400px] h-[300px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-red-600 cursor-pointer'>CLIMENENTIC SERVICES</h1>
        </div>
        <div>
         <img className='w-[400px] h-[300px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4}></img>
         <h1 className='text-2xl font-serif font-semibold py-3 text-orange-600 cursor-pointer'>DOCTOR CARE</h1>
        </div>
      </div>
      {/* bbbbbbbbbbbbbbbb */}
      </div>
    </>
  )
}
