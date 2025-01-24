import React from "react";
const HeaderNavbar = () => {
  const li = "px-3 text-base pt-1 cursor-pointer hover:text-lime-500"
  return (
    <div className="navbar">
      <ul className="flex">
        <li className={li}>About us</li>
        <li className={li}>Services</li>
        <li className={li}>Use Cases</li>
        <li className={li}>Pricing</li>
        <li className={li}>Blog</li>
        <button className=" border-2 p-1 pl-3 pr-3 rounded-lg  text-center hover:bg-lime-300">
          Request a quote
        </button>
      </ul>
    </div>
  );
};
export default HeaderNavbar;
