import React from 'react'

const Button = ({text , width , bgcolor , color , }) => {
  return (
    <div>
          <button style={{color:color , width:width , backgroundColor: bgcolor, borderRadius:"20px", padding:"5px 10px"}} > {text}</button>
    </div>
  )
}

export default Button
