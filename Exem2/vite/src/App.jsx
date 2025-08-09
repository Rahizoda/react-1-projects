
import './App.css'
import './index.css'
import CustomizedSwitches from './Component/Button'
import Async from './Component/Async'
import { useState } from 'react'

function App({AddUser}) {
  const [ add , addModal]= useState(false)
  const[ addName , setAddName] = useState('')
  const[ addAge , setAddAge] = useState('')
  const[ addImg , setAddImg] = useState('')

  function Add(e) {
    e.preventDefault()
    let newUser = {
      name: addName, 
      age: addAge,
      avatar: addImg, 
      status:false
    }

    AddUser(newUser)
    addModal(false)
    setAddName('')
    setAddAge('')
    setAddImg('')
  }

  {
     add && (
          <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={Add} action=" " style={{ width: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label htmlFor="name">Name</label>
              <input placeholder='Name' onChange={(e)=> setAddName(e.target.value)} value={addName} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="name" id="name" />
              
              <label htmlFor="age">Age</label>
              <input placeholder='Age' onChange={(e)=>setAddAge(e.target.value)} value={addAge} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="age" id="age" />
              
              <label htmlFor="status">Link Img</label>
              <input placeholder='Image' onChange={(e)=> setAddImg(e.target.value)} value={addImg} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="status" id="status" />
              
              <button style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} type='submit'  >Add User</button>
            </form>
          </div>
        )
 }

  return (
    <>
      <div className=' bg-[white] text-[black] dark:bg-[#1f213d] dark:text-[white] ' >
        <CustomizedSwitches />
        <button onClick={()=> addModal(true)} className='bg-blue-800 text-white p-[5px_15px] rounded-xl '> Add USER </button>

        <table className=' border w-[90%] m-auto  '>
          <thead className='text-center' >
            <th>Id </th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>

          <tbody>
            <Async/>
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
