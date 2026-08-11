import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './Arrow.jsx'
import Hero from './Hero.jsx'


const Leftcontent = () => {
  return (
    <div className="h-full flex w-1.1/5 flex-col justify-between mr-4    ">
        <Hero/>
        <Arrow/>        
    </div>
  )
}

export default Leftcontent
