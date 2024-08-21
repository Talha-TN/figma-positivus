import React from 'react'
import ThingsHappenDetails from './ThingsHappenDetails'
import ThingsHappnImg from './ThingsHappnImg'
const ThingsHappen = () => {
  return (
    <div className="max-w-screen-lg m-auto flex mt-11 justify-around bg-slate-100 rounded-3xl items-center	">
     <ThingsHappenDetails/>
     <ThingsHappnImg/>
    </div>
  )
}
export default ThingsHappen