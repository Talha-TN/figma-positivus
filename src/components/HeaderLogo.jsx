import React from "react";
import logo from "../assets/logo.png";
const HeaderLogo = () => {
  return (
    <div className="flex ">
      <img className="w-8 h-8 mt-1" src={logo} alt="" />
      <h1 className="text-3xl pl-2 ">Positivus</h1>
    </div>
  );
};
export default HeaderLogo;
