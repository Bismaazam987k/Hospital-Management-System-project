import React from 'react'
// import img1 from '../assets/img14.png';
import vediobp from '../assets/vedio1.mp4'
import '../App.css';
export default function Home() {
  return (
    <div>
      <div className='flex justify-center my-4 hover:animate-pulse mt-12'> 
       <div className='rounded-l-3xl'>
        {/* <img className='rounded-l-3xl h-[534px] w-[800px]' src={img1} alt=''/> */}
        <video className=' object-cover  h-[534px] w-[800px] rounded-l-3xl'loop autoPlay controls src={vediobp} ></video>
       </div>
       <div className='bg-slate-800 h-[534px] w-[800px] rounded-r-3xl relative'>
        <div className='absolute text-white font-bold pt-8'>
            <h1 className='text-center text-green-300 text-5xl py-6 font-serif '>
            Life In Safe Hands</h1>
            <p className='text-center text-wrap px-8'>Globally, the world is experiencing record energy prices and <br></br >soaring carbon emissions, placing significant financial pressure on households, <br></br> and our planet.
            In addition, 2.5 billion people still cook over an open fire each day. <br></br> This causes significant emissions, widespread deforestation, burdens women with hours <br></br> of unpaid labour, and jeopardizes their health.
             Wonderbag is the solution to this crisi Globally, the world is experiencing record energy prices and soaring carbon emissions, placing significant financial pressure on households, and our planet.
            In addition, 2.5 billion people still cook over an open fire each day. This causes significant emissions, widespread deforestation, burdens women with hours of unpaid labour, and jeopardizes their health
            to this crisi Globally, the world is experiencing record energy prices and soaring carbon emissions, placing significant financial pressure on households, and our planet.
            In addition, 2.5 billion people still cook over an open fire.</p>
            <button className='px-20 rounded-2xl py-3 text-center bg-green-500 mt-8 mx-64  text-2xl hover:bg-yellow-600'>Description</button>
        </div>
       </div>
      </div>

      <hr className=' mt-14'></hr>
    </div>
   
  )
}
 