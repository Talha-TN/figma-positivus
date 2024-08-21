import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
const ConsultationMain = () => {
  return (
    <div className="max-w-screen-lg m-auto shadow-xl shadow-gray-900 bg-lime-300 p-10 mt-14 rounded-xl ">
        <div className="flex justify-between border-b-[1.5px] pb-6 border-black ">
          <h1 className="text-3xl font-semibold tracking-[4px]	">
            01 Consultation
          </h1>
          <button className="text-6xl ">
            <CiCircleMinus />
          </button>
        </div>

        <div className="mt-6">
          <p className="text-[14px]">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </div>
      </div>
  )
}

export default ConsultationMain