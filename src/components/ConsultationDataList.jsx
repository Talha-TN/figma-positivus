import React from "react";
import { MdDelete } from "react-icons/md";
const ConsultationDataList = ({ val, handleDelete }) => {
  return (
    <div
      key={val.id}
      className="bg-gray-200 mt-6 flex justify-between p-10 rounded-3xl shadow-xl shadow-gray-700"
    >
      <h1 className="text-3xl font-semibold tracking-[3px]	">{val.name}</h1>
      <button className="text-6xl">
        {val.button}
        {/* <button onClick={() => handleDelete(val.id)}>
          <MdDelete />
        </button> */}
      </button>
    </div>
  );
};

export default ConsultationDataList;
