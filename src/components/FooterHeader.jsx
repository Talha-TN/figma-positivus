import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import image from "../assets/vector.png"
const FooterHeader = () => {
    const listyle = 'cursor-pointer text-sm font-serif hover:text-lime-400'
    const buttonstyle ='hover:text-lime-400'
  return (
    <div className='flex justify-between py-3 w-[900px] m-auto'>
        <div className="logo flex gap-2 ">
            <img src={image} alt="" className='w-8 h-8' />
            <h1 className='text-lg'>Positivus</h1>
        </div>
       
            <ul className='flex gap-4 '>
                <li className={listyle}>About us</li>
                <li className={listyle}>Services</li>
                <li className={listyle}>Use Cases</li>
                <li className={listyle}>Pricing</li>
                <li className={listyle}>Blog</li>
            </ul>
        
        <div className="flex gap-3">
            <button ><FaLinkedin className={buttonstyle}/></button>
            <button ><FaFacebook className={buttonstyle}/></button>
            <button ><FaTwitter  className={buttonstyle}/></button>
        </div>
    </div>
  )
}

export default FooterHeader