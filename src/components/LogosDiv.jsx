import React from "react";
import amazonLogo from "../assets/amazon.png"
import dribble from "../assets/dribble.png"
import netflix from "../assets/netflix.png"
import zoom from "../assets/zoom.png"
import notion from "../assets/notion.png"
import hubspot from "../assets/hubspot.png"
const LogosDiv = () => {
    const logoCss="w-16"
  return (
    <div className="max-w-screen-lg m-auto gap-4 p-10 flex justify-around">
      <img className={logoCss} src={amazonLogo} alt="" />
      <img className={logoCss}src={dribble} alt="" />
      <img className={logoCss} src={hubspot} alt="" />
      <img className={logoCss} src={notion} alt="" />
      <img className={logoCss} src={netflix} alt="" />
      <img className={logoCss} src={zoom} alt="" />
    </div>
  );
};

export default LogosDiv;
