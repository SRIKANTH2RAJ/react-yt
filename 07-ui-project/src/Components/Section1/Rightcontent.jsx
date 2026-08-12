import React from 'react'
import Rightcard from './Rightcard.jsx'

const Rightcontent = (props) => {
  return (
    <div className="h-full p-6 w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap gap-5">
    {props.us.map(function(elem,idx){
      return <Rightcard key={idx} id={idx} i={elem.img} ta={elem.tag}/>

    })}


    </div>

  )
}

export default Rightcontent