import React from 'react'
import Leftcontent from './leftcontent.jsx'
import Rightcontent from './Rightcontent.jsx'   

const Pageonecontent = (props) => {
  return (
    <div className="py-10 flex justify-between items-center h-[90vh]  px-18">
    
        <Leftcontent/>
       
        <Rightcontent us={props.use}/>

    </div>
  )
}

export default Pageonecontent