import Link from "next/link"
import { useState } from "react"
import { useSelector } from "react-redux"
import FloatingCounter from "../../components/FloatingCounter"

const myhome = () => {
  const [stateCounter, setStateCounter] = useState(0)

  const increaseStateCounter = () => {
    const nextCounter = stateCounter + 1
    setStateCounter(nextCounter)
  }

  return(
    <div>
      <h1>I am home page</h1>
      <h2>Current State Counter: {stateCounter}</h2>
      <button onClick={increaseStateCounter}>Increase State Counter</button>
      <FloatingCounter/>
      <Link href="/"><h4>Go To App</h4></Link>
    </div>
  )
}

export default myhome


// pages  -> 'localhost:3000'
// - myhome  -> 'localhost:3000/myhome'
// -- index.js -> 'localhost:3000/myhome/'
// - index.js -> 'localhost:3000/'
// - farhan.js -> 'localhost:3000/farhan'
// - myhome.js -> 'localhost:3000/myhome'