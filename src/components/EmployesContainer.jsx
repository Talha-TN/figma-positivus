import React from 'react'
import EmployeeCard from './EmployeeCard'
const EmployesContainer = () => {
  return (
    <div className='max-w-screen-lg m-auto flex flex-wrap justify-between'>
      <EmployeeCard/>
    </div>
  )
}

export default EmployesContainer