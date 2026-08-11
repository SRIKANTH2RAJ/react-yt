import React from 'react'
import Leftcontent from './leftcontent.jsx'
import Rightcontent from './Rightcontent.jsx'   

const Pageonecontent = () => {
  return (
    <div className="py-10 flex justify-between items-center h-[90vh]  px-18">
    
        <Leftcontent/>
       
        <Rightcontent/>

    </div>
  )
}

export default Pageonecontent