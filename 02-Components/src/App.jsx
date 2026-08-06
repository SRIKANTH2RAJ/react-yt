import React from 'react'
import Card from "./Components/Card"
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
      {/* <div className='card'>
      <h1>Srikanth</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum est ipsum architecto id inventore placeat delectus ea veritatis quas.</p>
    </div>
    <div className='card'>
      <h1>Srikanth</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum est ipsum architecto id inventore placeat delectus ea veritatis quas.</p>
    </div> */}
    <div>
      <Navbar />
      <Card />
      
    </div>
    </div>
  )
}

export default App