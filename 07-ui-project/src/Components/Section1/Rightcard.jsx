import React from 'react'
import Rightcardcon from './Rightcardcon'

const Rightcard = (props) => {
  return (
    <div className='h-full shrink-0 w-50 bg-red-500 relative rounded-4xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.i} alt="" />
        <Rightcardcon/>
    </div>
  )
}

export default Rightcard