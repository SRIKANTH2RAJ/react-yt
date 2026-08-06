import React from 'react'

const Card = (props) => {
    console.log(props)
    console.log(props.user,props.age)
  return (
    
    <div>
      <div className="parent">
       <div className="card">
        <img src={props.img} alt="error" />
        <h1>{props.user},{props.age}</h1>
        <p>{props.p}</p>
        <button>View Profile</button>
       </div>
      </div>
    </div>
  )
}

export default Card