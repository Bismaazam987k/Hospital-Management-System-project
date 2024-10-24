import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import '../App.css'
function Footer() {
  return (
    <div>
        <footer class="footer bg-red-700 ">
        <div class="footer-container rounded-3xl flex ">
            <div class="footer-section about">
                <h2 className='text-2xl'>ABOUT US</h2>
                <p>We are a team of passionate individuals working to create beautiful, functional websites and applications. Our goal is to deliver quality experiences for our users and clients.</p>
            </div>
            
            <div class="footer-section links ">
                <h2>USEFUL LINKS</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className='text-3xl font-serif font-semibold py-3 cursor-pointer '>
                <h1 className='text-4xl font-bold text-green-300'>HOSPITAL MANAGEMENT SYSTEM </h1>
                <div className='flex justify-start mt-4 '>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid className='text-yellow-400'/>
                <LiaStarSolid />
                <p className='text-2xl text-blaCK font-mono font-semibold' > 19,223 (Reviews)</p>
                </div>
                <p className='text-4xl text-blaCK font-mono font-bold mt-4' > $30.00<sup>oo</sup></p>
                {/* cccccccc */}
                <div className='mt-8 flex gap-5'>
                    <div className='bg-white h-[150px] w-[200px] relative rounded-2xl px-[28px]  shadow-xl shadow-grey hover:scale-90 border-pink-300  '>
                        <h1 className='text-2xl font-sans text-white bg-yellow-500 font-bold p-2 text-center absolute rounded-xl w-[60] '>SAVE $9.00</h1>
                        <p className='text-2xl text-blaCK font-mono font-bold mt-14 pl-3  text-black' >Record-1</p>
                        <p className='text-xl text-blaCK font-mono font-bold  text-black ' > $30.00<span className='text-gray-400'>$40.00</span></p>
                    
                    </div>
                    {/* nnnn */}
                    <div className='bg-white h-[150px] w-[200px] relative rounded-2xl px-[28px]  shadow-xl shadow-grey hover:scale-90 border-yellow-600  '>
                        <h1 className='text-2xl font-sans text-white bg-blue-500 font-bold p-2 text-center absolute rounded-xl w-[60]'>SAVE $9.00</h1>
                        <p className='text-2xl text-blaCK font-mono font-bold mt-14 pl-3  text-black' >Record-2</p>
                        <p className='text-xl text-blaCK font-mono font-bold  text-black ' > $30.00<span className='text-gray-400'>$40.00</span></p>
                    
                    </div>
                    {/* vvvv */}
                    <div className='bg-white h-[150px] w-[200px] relative rounded-2xl px-[28px]  shadow-xl shadow-grey hover:scale-90 border-pink-300  '>
                        <h1 className='text-2xl font-sans text-white bg-pink-500 font-bold p-2 text-center absolute rounded-xl w-[60]'>SAVE $9.00</h1>
                        <p className='text-2xl text-blaCK font-mono font-bold mt-14 pl-3 text-black' >Record-3</p>
                        <p className='text-xl text-blaCK font-mono font-bold text-black ' > $30.00<span className='text-gray-400'>$40.00</span></p>
                    
                    </div>
                    {/* bbbb */}
                </div>
            </div>
                
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 Hospital Management System.bismaazam62@gmail.com.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
