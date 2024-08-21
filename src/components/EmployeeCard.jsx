// import React from "react";
// import data from "./EmployeeData";
// const EmployeeCard = () => {
//   return (
//     <>
//       {data.map((val) => {
//         return (
//           <div className="max-w-xs mt-10 border p-6 shadow-xl shadow-gray-900 rounded-xl">
//             <div className="flex gap-6 border-b-[1px] border-black pb-5">
//               <img className="w-20" src={val.profile} alt="profile-image" />
//               <div className="flex flex-col justify-evenly gap-3">
//                 <h1 className="text-sm font-semibold">{val.name}</h1>
//                 <p className="text-[14px]">{val.position}</p>
//               </div>

//               <img className="w-10 h-12" src={val.logo} alt="" />
//             </div>
//             <div className="mt-3 font-sans text-[14px]">
//               <p>{val.experience}</p>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default EmployeeCard;
//////////////////////  new 
import React from "react";
import data from "./EmployeeData";

const EmployeeCard = () => {
  return (
    <>
      {data.map((val) => {
        return (
     
          <div className="max-w-xs mt-10 p-6 rounded-3xl shadow-xl shadow-gray-900 border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full transform rotate-45 w-16 h-16"></div>
                  <img
                    className="relative w-16 h-16 "
                    src={val.profile}
                    alt="profile-image"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-lg font-semibold">{val.name}</h1>
                  <p className="text-gray-500">{val.position}</p>
                </div>
              </div>
              <img
                className="w-8 h-8"
                src={val.logo}
                alt="linkedin-logo"
              />
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className="text-gray-600 text-sm">
              <p>{val.experience}</p>
            </div>
          </div>
      

  
          
        );
      })}
    </>
  );
};

export default EmployeeCard;
////////////////////////////////////////////////////////////////////////
// import React from "react";
// import data from "./EmployeeData";

// const EmployeeCard = () => {
//   return (
//     <>
//       {data.map((val) => {
//         return (
//           <div className="max-w-xs mt-10 p-6 rounded-3xl shadow-xl shadow-gray-900 border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
//             <div className="flex items-center justify-between">
//               <div className="flex gap-4">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-lime-300 rounded-full transform rotate-45 w-16 h-16"></div>
//                   <img
//                     className="relative w-16 h-16 rounded-full"
//                     src={val.profile}
//                     alt="profile-image"
//                   />
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <h1 className="text-lg font-semibold">{val.name}</h1>
//                   <p className="text-gray-500">{val.position}</p>
//                 </div>
//               </div>
//               <img
//                 className="w-8 h-8"
//                 src={val.logo}
//                 alt="linkedin-logo"
//               />
//             </div>
//             <hr className="my-4 border-t border-gray-300" />
//             <div className="text-gray-600 text-sm">
//               <p>{val.experience}</p>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default EmployeeCard;