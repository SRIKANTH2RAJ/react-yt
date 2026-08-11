import React from 'react'
import Section1 from './Components/Section1/Section1.jsx'
import Section2 from './Components/Section2/Section2.jsx'
const App = () => {
  const users=[
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underbanked"
    }
    
  ]
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App