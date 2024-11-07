import React, { useState } from "react";
import ConsultationMain from "./ConsultationMain";
import { data } from "./ConusltaionData";
import ConsultationDataList from "./ConsultationDataList";
const Consultaion = () => {
  const [state, setState] = useState(data);
  const handleDelete = (id) => {
    setState(state.filter((val) => val.id !== id));
  };
  return (
    <>
      <ConsultationMain/>
      <div className="max-w-screen-lg m-auto mt-8 ">
        {state.map((val) => {
          return (
            <ConsultationDataList key={val.id} val={val} handleDelete={handleDelete}/>
          );
        })}
      </div>
    </>
  );
};

export default Consultaion;
