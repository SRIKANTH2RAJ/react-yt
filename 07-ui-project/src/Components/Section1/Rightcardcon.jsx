import React from 'react'

const Rightcardcon = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold h-10 w-10 rounded-full flex justify-center items-center '>{props.i+1}</h2>
         <div >
            <p className='text-shadow-2xs leading-relaxed text-white mb-10 text-xl '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
             <div className='flex justify-between'>
              <button style={{backgroundColor:props.col}} className=' text-white font-medium px-4 py-2 rounded-full '>{props.t} </button>
              <button style={{backgroundColor:props.col}} className=' text-white font-medium px-4 py-2 rounded-full '> <i class="ri-arrow-right-line"></i></button>
             </div>
         </div>
        </div>
    </div>
  )
}

export default Rightcardcon