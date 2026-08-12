import React from 'react'
import Leftcontent from './leftcontent.jsx'
import Rightcontent from './Rightcontent.jsx'   

const Pageonecontent = (props) => {
  console.log(props.use)
  return (
    <div className="pb-16 pt-6 flex justify-between items-center h-[90vh]  px-18">
    
        <Leftcontent/>
       
        <Rightcontent us={props.use}/>

    </div>
  )
}

export default Pageonecontent