import React, { useState } from 'react'

const Task1 = () => {

    const [ text , setState] = useState(0)
  return (
    <>
      
          <h1>{text}</h1>
          
          <button onClick={()=>{ setState( text + 1 ) } } > Click me </button>
          
          
    </>
  )
}

export default Task1
