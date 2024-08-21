import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";



const CaseStudyData = () => {
  const arrow = <FaArrowCircleRight />;
  const data = [
    {
      para: "For a local restaurant, we implemented a targeted PPC campaign that PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      button: `learn more`,
      arrowSign: arrow,
    },
    {
      para: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic..",
      button: "Learn more",
      arrowSign: arrow,
    },
    {
      para: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      button: "Learn more",
      arrowSign: arrow,
    },
  ];
  return (
    <div className="max-w-screen-lg m-auto mt-24 flex justify-around bg-black text-white p-10 rounded-3xl">
      {data.map((val,index) => {
        return (
          <div key={index} className="w-3/12 border-s-4 pl-3 text-base">
            <p className="text-base font-sans">{val.para}</p>
            <button className="mt-2 text-lime-400 ">
              {val.button} <span className="rotate-45">{val.arrowSign}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyData;
