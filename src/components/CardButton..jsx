import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const CardButton= ({index}) => {
  return (
    <button className={`flex items-center text-black hover:underline ${index===2 && "text-white"} ${index===5 && "text-white"}`}>
    <span className="mr-2 "><FaArrowAltCircleRight /></span> Learn more
  </button>
  )
}

export default CardButton