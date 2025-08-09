import React, { useState } from 'react'

const Task2 = () => {

    const [temp, setTemp] = useState('')
    const harorat = ( temp * 9/5 ) + 32
    
  return (
      <div>
          <h1> { harorat} °F </h1>
      <input type="number" value={ temp }   onChange={ (e)=>{ setTemp(e.target.value) } }  />
    </div>
  )
}

export default Task2
