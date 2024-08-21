import React from 'react'
import Form from './Form'
import FormImage from './FormImage'
const FormContainer = () => {
  return (
    <div className='max-w-screen-lg m-auto  mt-12 flex bg justify-around bg-gray-200 rounded-3xl py-10'>
       <Form/>
      <FormImage/>
    </div>
  )
}

export default FormContainer