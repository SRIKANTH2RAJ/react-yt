import React from 'react'
import Rightcard from './Rightcard.jsx'

const Rightcontent = () => {
  return (
    <div className="h-full p-6 w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap gap-5 bg-blue-300">
    <Rightcard/>
    <Rightcard/>
    <Rightcard/>
    <Rightcard/>
    <Rightcard/>

    </div>

  )
}

export default Rightcontent