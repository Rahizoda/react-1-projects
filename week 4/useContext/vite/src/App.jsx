import React, { useRef } from 'react';

const App = () => {
  const inputref = useRef(null)

  function handleClick() {
    inputref.current.focus()
    inputref.current.value = 'Hello, World!'
    console.log(inputref.current.value)
    inputref.current.style.backgroundColor = 'lightblue'
    inputref.current.style.color = 'darkblue'
    inputref.current.style.fontSize = '20px'
    inputref.current.style.border = '2px solid darkblue'
    inputref.current.style.padding =  '10px'
    inputref.current.style.borderRadius = '5px'
    inputref.current.style.transition = 'all 0.3s ease'
    inputref.current.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
    inputref.current.style.outline = 'none'
    inputref.current.style.textAlign = 'center'
    inputref.current.style.fontFamily = 'Arial, sans-serif'
    inputref.current.style.width = '300px'
    inputref.current.style.margin = '10px auto'
    inputref.current.style.display = 'block'
    inputref.current.style.cursor = 'pointer'
    inputref.current.style.userSelect = 'none'
    inputref.current.style.boxSizing = 'border-box'
    inputref.current.style.textTransform = 'uppercase'    
  }

  return (
    <div>
      <input ref={inputref} type="text" name="" id="" placeholder='Your name' />
       <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
