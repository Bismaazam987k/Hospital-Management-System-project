import React from 'react'

export default function Navbar(Props) {
  return (
    <>
     <div>
        <h1 className='text-7xl font-bold text-red-600 py-8 text-center font-serif border-b-2 mt-12'>"Hospital Management System"</h1>
     </div>
     <hr className=' pb-4'></hr>
    <nav className='flex justify-between px-16 py-2 text-xl sticky top-0 z-10 ' style={{color:Props.mode === 'light'?'black':'grey',backgroundColor:Props.mode === 'light'? 'white':'black'}}>
      <div className='text-white'>
        <ul className='flex gap-8 py-2 ' style={{color:Props.mode === 'light'?'black':'grey'}}>
            <li className='hover:text-red-500'><a href='/'>Home</a></li>
            <li className='hover:text-red-500'><a href='/'>About</a></li>
            <li className='hover:text-red-500'><a href='/'>Services</a></li>
            <li className='hover:text-red-500'><a href='Clients.js'>Clients</a></li>
            <li className='hover:text-red-500'><a href='/'>Contact Us</a></li>
        </ul>
      </div>
      <div className='flex gap-2'>
        <input className='bg-black px-28 py-2 text-gray-400 border-x-2 border-y-2 rounded-sm' placeholder='Search for "Records"'  style={{backgroundColor:Props.mode === 'dark'?'black':'white'?'white':'black'}}></input>
        <div className={` ${Props.mode === 'light'?'light':'dark'}`}>
          <button className='px-4 py-2 bg-red-600 text-white rounded-lg '  onClick={Props.toggleMode}>Mode</button>
      </div>
      </div>
    </nav>


    </>
  )
}
