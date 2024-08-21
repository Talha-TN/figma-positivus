import React from 'react'
const CardImage = ({data}) => {
  return (
    <img src={data.image} alt={data.name} className="w-28 self-end	 h-auto mb-4 " />
  )
}
export default CardImage