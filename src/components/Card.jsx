
import React from 'react';
import CardHeading from './CardHeading';
import CardImage from './CardImage';
import CardButton from './CardButton.';
import { cardData } from './CardData';
const Card = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-evenly">
      {cardData.map((data, index) => (
        <div key={index} className={`w-5/12  shadow-xl shadow-gray-900	 ${index === 0 && 'bg-gray-300'} 
            ${index === 1 && 'bg-lime-500'}  ${index === 2 && 'bg-slate-950 text-white'}  ${index === 3 && 'bg-gray-300 text-black'} ${index === 4 && 'bg-lime-500 text-white'} ${index === 5 && 'bg-slate-950 text-white'}  rounded-2xl p-6 flex flex-col `}>
          <CardHeading data={data} index={index}/>
          <CardImage data={data} index={index}/>
          <CardButton data={data} index={index}/>
          
        </div>
      ))}
    </div>
  );
}

export default Card;

