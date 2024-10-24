import React from 'react';
import vediop from '../assets/vedio4.mp4'
const ContactUsPage = () => {
    return (
        <div className="min-h-screen flex flex-row items-center justify-center p-4">
              <div className="mb-6">
                    <video className='h-[500px] w-[600px] object-cover rounded-l-3xl hover:animate-pulse'loop autoplay src={vediop} ></video>
                </div>
            <div className="bg-white p-8 rounded-r-3xl h-[500px] mt-2 shadow-lg w-[600px] max-w-4xl mb-8">
                <h2 className="text-3xl mb-6 text-center">Contact Us</h2>
                <form className="w-full">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsPage;
