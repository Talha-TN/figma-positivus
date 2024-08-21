import React from 'react'
const Form = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div className="radio">
            <input type="radio" id='sayHi' name='contactOption' className='px-4  cursor-pointer' /> 
            <label htmlFor="sayHi" className='px-4  cursor-pointer'>say hi</label>
            <input type="radio" id='quote' name='contactOption' className='px-4 cursor-pointer' />
            <label htmlFor="quote" className='px-4 cursor-pointer'>Get a Quote</label>
        </div>
        <div className="flex flex-col gap-10">
            <input type="text" placeholder='enter your name'  className='p-2 border-[1px] border-black rounded-md cursor-pointer' />
            <input type="email" placeholder='enter your email'  className='p-2 border-[1px] border-black rounded-md cursor-pointer'/>
            <textarea placeholder='message' className='cursor-pointer p-2 border-[1px] border-black rounded-md ' name="message" id="textarea" rows="3" cols="6"></textarea>
        </div>
        <div className="btn">
            <button className='bg-black px-16 rounded-md text-white py-2'>Send message</button>
        </div>
    </div>
  )
}

export default Form