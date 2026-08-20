import React from 'react'

const App = () => {
  function btnclick(){
    console.log("Button clicked")
  }
  function change(val){
    console.log(val)
  }
  function scroll_speed(val){
    // console.log("Page scrolling at a speed", val)
    if(val>0)
      console.log("User scrolling DOWN")
    else
      console.log("User scrolling UP")
  }
  return (
    <div onWheel={(elem)=>{
      scroll_speed(elem.deltaY)
    }}>
      <div className='page1'>
      <h1>hi hello how are you how is it</h1>
      <button onClick={()=> {
        console.log("button is clicked")
      }}
      onDoubleClick={()=>{
        console.log("button is double clicked")
      }}>Click Here</button>
      <br />
      <input id="i" type="text" placeholder='Enter Name' onChange={()=>{
        console.log("The user is typing")
      }} />
      <input  id="iu" type="text" placeholder='Passion' onChange={(elem)=>{
          change(elem.target.value)
      }} />
      
    </div>
    <div className='page2'></div>
    <div className='page3'></div>
    </div>
  )
}

export default App