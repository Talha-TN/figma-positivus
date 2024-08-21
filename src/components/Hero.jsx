import React from "react";
import HeroAbout from "./HeroAbout";
import HeroImage from "./HeroImage";
const Hero = () => {
  return (
    <div className="max-w-screen-lg m-auto flex justify-between mt-2 p-10">
    <HeroAbout/>
    <HeroImage/>
    </div>
  );
};
export default Hero;
