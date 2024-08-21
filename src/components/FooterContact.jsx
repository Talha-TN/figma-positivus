import React from 'react'
const FooterContact = () => {
  return (
    <div className='py-3 flex gap-16 items-center border-b-[1px] w-[900px] m-auto'>
      <div className="flex flex-col gap-3">
         <h1 className='text-[13px] font-serif bg-lime-400 text-black rounded-md w-20 text-center font-medium'>Contact us:</h1>
         <p className='text-[13px] font-serif '>Email: nawazt964@gmail.com</p>
         <p className='text-[13px] font-serif '>phone: 03239825457</p>
         <p className='text-[13px] font-serif '>Address: 1234 Main st Abbottabad KPK, Pakistan</p>
      </div>
      <div className="subscribe flex gap-5 p-14 bg-gray-900 rounded-lg">
        <input type="email" placeholder='email' className='text-black p-1 rounded-lg border-[1px] border-black pl-3 cursor-pointer'/>
        <button className='bg-lime-400 text-black px-6 rounded-lg'>Subscribe to news</button>
      </div>
    </div>
  )
}

export default FooterContact