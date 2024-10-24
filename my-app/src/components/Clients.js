import React from 'react'
import img9 from '../assets/img16.png';
import img10 from '../assets/img23.png';
import img11 from '../assets/img22.png';
import img12 from '../assets/img20.png';
import img2 from '../assets/img21.png';
import img3 from '../assets/img18.png';
import img4 from '../assets/img24.png';
import img5 from '../assets/img17.png';
export default function Clients(Props) {
  return (
    <>
 
   
       <div>
        <h1 className='text-6xl text-blue-600 font-semibold text-center my-4 font-serif '><q>SEE OUR BRAND'S StAFF</q></h1>
       </div>
      <div className='grid grid-cols-4 px-20 gap-3 pt-8 text-center'>
        <div>
        <img className='h-[390px] w-[450px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img9} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-green-600 cursor-pointer'>
                <a className='text-b'>Dr Aliza Shah <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img10} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-purple-600 cursor-pointer'>
                <a>Dr Ali Ahmad <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img11} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-blue-600 cursor-pointer'>
                <a>Dr Subhan Sayed <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img12} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-orange-600 cursor-pointer'>
                <a>Dr Razia Kadir <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-4 px-20 gap-3 pt-2 text-center'>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img2} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-green-600 cursor-pointer'>
                <a className='text-b'>Dr Amina Kurashi <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img3} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-purple-600 cursor-pointer'>
                <a>Dr Zara Fatima <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-3xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img4} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-blue-600 cursor-pointer'>
                <a>Dr Bilal Sayyed <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
        </div>
        <div>
            <img className='h-[380px] w-[450px] object-cover rounded-xl hover:scale-90 hover:animate-pulse cursor-pointer' src={img5} alt='no img'></img>
            <div className='text-3xl font-serif font-bold py-3 text-orange-600 cursor-pointer'>
                <a>Dr Bisma Azam <span className='text-red-700'>---></span></a>
                <p className='text-xl font-semibold text-gray-600'>A physician, medical practitioner, medical doctor, or simply doctor is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments</p>
            </div>
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
