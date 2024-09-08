import React from 'react'

function EventHandlings() {

    function callHandler(){
        console.log("Funtion called")
    }

    
    const callHandler1 = () => {
        console.log("Arrow Funtion called")
    }

  return (
    <>
        <button onClick={()=>callHandler()} >Event 1</button>
        <button onClick={callHandler} >Event 2</button>
        <button onClick={ ()=>callHandler1()  } >Event 3</button>
    </>
  )
}

export default EventHandlings