import React from 'react'
import './App.css'
import Async from './components/Async'
// import useDarkSide from './config/useDarkMode'
import { ModalEdit } from './components/Edit'

const App = () => {
  // const [  , toggleTheme] = useDarkSide()
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      <Async/>
    </div>
  )
}

export default App
