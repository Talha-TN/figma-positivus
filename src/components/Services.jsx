import React from "react";
import ServicesHeading from "./ServicesHeading";
import ServicesText from "./ServicesText";
const Services = () => {
  return (
    <div className="max-w-screen-lg m-auto flex mt-4 gap-10 p-10">
      <ServicesHeading />
      <ServicesText />
    </div>
  );
};

export default Services;
