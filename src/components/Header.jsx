import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";
const Header = () => {
  return (
    <header className="max-w-screen-lg m-auto flex justify-between items-center mt-2 p-10 ">
      <HeaderLogo/>
      <HeaderNavbar/>
    </header>
  );
};

export default Header;
