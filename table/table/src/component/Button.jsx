import React from 'react'

const Button = ({ text, color, width, rounded, colortxt }) => {
  
  
  return (
    <>
      <button style={{ color:colortxt , backgroundColor:color, border:"1px solid blue" , borderRadius:rounded , padding:"5px 30px" }}  className={`bg-[${color}] w-[${width}] rounded-[${rounded}] `}>{ text}  </button>  
    </>
  )
}

export default Button
