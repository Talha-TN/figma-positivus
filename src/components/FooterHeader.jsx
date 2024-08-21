import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import image from "../assets/vector.png"
const FooterHeader = () => {
  return (
    <div className='flex justify-between py-3 w-[900px] m-auto'>
        <div className="logo flex gap-2 ">
            <img src={image} alt="" className='w-8 h-8' />
            <h1 className='text-lg'>Positivus</h1>
        </div>
       
            <ul className='flex gap-4 '>
                <li className='cursor-pointer text-sm font-serif hover:text-lime-400'>About us</li>
                <li className='cursor-pointer text-sm font-serif hover:text-lime-400'>Services</li>
                <li className='cursor-pointer text-sm font-serif hover:text-lime-400'>Use Cases</li>
                <li className='cursor-pointer text-sm font-serif hover:text-lime-400'>Pricing</li>
                <li className='cursor-pointer text-sm font-serif hover:text-lime-400'>Blog</li>
            </ul>
        
        <div className="flex gap-3">
            <button ><FaLinkedin className='hover:text-lime-400'/></button>
            <button ><FaFacebook className='hover:text-lime-400' /></button>
            <button ><FaTwitter  className='hover:text-lime-400'/></button>
        </div>
    </div>
  )
}

export default FooterHeader