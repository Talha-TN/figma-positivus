import React from "react";
import FooterHeader from "./FooterHeader";
import FooterContact from "./FooterContact";
import FooterCopyRight from "./FooterCopyRight";
const Footer = () => {
  return <div className="max-w-screen-lg m-auto  mt-20 mb-5  bg-black text-white rounded-lg pt-6">
    <FooterHeader/>
    <FooterContact/>
    <FooterCopyRight/>
  </div>;
};
export default Footer;
