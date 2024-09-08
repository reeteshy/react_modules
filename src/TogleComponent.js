import React, { useEffect, useState } from 'react'

function TogleComponent() {
    console.log("Component called!")
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        console.log("UseRef called!")
        return ()=>{
            console.log("Cache cleared!")
        }
    }, [toggle])

  return (
    <>
        <div>TogleComponent</div>
        { toggle ? <AboutUs /> : <Home /> }
        <button onClick={()=>setToggle(!toggle)} >Toggle Component</button>
    </>
  )
}

function Home(){
    return (
        <>
            <h1>Welcome Home Component!</h1>
        </>
    )
}

function AboutUs(){
    return (
        <>
            <h1>Welcome About Component!</h1>
        </>
    )
}

export default TogleComponent