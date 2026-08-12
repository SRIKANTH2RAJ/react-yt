import React from 'react'
import Rightcard from './Rightcard.jsx'

const Rightcontent = (props) => {
  console.log(props)
  return (
    <div className="h-full p-6 w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap gap-5 bg-blue-300">
    {props.us.map(function(elem){
      return <Rightcard i={elem.img}/>

    })}


    </div>

  )
}

export default Rightcontent