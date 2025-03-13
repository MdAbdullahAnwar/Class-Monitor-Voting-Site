import React, { useState } from 'react'
import './TotalVotes.module.css'

const TotalVotes = () => {

  const [count, setCount] = useState(0);  

  const voteSubmitHandler = () => {
    setCount((prevCount) => (prevCount + 1));
  }

  return (
    <div>
      <h3>Total Votes: {count}</h3>
      <button onClick={voteSubmitHandler}>Add Vote</button>
    </div>
  )
}

export default TotalVotes
