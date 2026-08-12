import React from 'react'
import Navbar from './Navbar.jsx'   
import Pageonecontent from './pageonecontent.jsx'
const Section1 = (props) => {
  console.log(props.user)
  return (
    <div className="h-screen w-full bg-white">
      <Navbar />
      <Pageonecontent use={props.user}/>
      
    </div>
  )
} 

export default Section1