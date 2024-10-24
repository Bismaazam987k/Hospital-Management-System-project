import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import vediobp from '../assets/vedio1.mp4'
import vediop from '../assets/vedio2.mp4'
import vediob from '../assets/vedio3.mp4'
function Vedio() {
  return (
    <>
      <div className=' h-[600px] flex justify-evenly items-center gap-10 mt-10 text-gray-700'> 
        <div className=''>
            <h1 className='text-4xl font-serif font-bold text-red-600'>Our Doctors Perform
                <br></br> Their Duties With Honestly</h1>
                <p  className='text-xl font-serif mt-2'>Real Review From Real Patients</p>
                <button className='p-4 px-16 font-bold text-xl rounded-3xl mt-5 bg-red-600 text-white'>Patients Recovery</button>
                <div className='flex justify-start mt-4 text-3xl'>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400' />
                <p className='text-xl text-blaCK font-mono mt-1' >Rated 4.8/5 by 1,319 + Happy Patients</p>
                </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
        <video className='h-[400px] w-[300px] object-cover rounded-3xl hover:animate-pulse'loop controls autoPlay src={vediobp} ></video>
        <video className='h-[500px] w-[300px] object-cover rounded-3xl hover:animate-pulse'loop autoplay src={vediob} ></video>
        <video className='h-[400px] w-[300px] object-cover rounded-3xl hover:animate-pulse'loop autoplay src={vediop} ></video>
        </div>
        
      </div>
      
      <div className='flex gap-2 pl-24 text-white mt-10 border-y-2 pb-10 my-12 '>
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
      </div>
    </>
  )
}
 
export default Vedio
