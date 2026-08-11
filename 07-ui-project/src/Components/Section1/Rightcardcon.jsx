import React from 'react'

const Rightcardcon = () => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold h-10 w-10 rounded-full flex justify-center items-center '>1</h2>
         <div >
            <p className=' leading-relaxed text-white mb-10 text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
             <div className='flex justify-between'>
              <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full '>Satisfied </button>
              <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full '> <i class="ri-arrow-right-line"></i></button>
             </div>
         </div>
        </div>
    </div>
  )
}

export default Rightcardcon