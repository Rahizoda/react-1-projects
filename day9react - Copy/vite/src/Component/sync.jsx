import { useState } from 'react'
import Async from './Async'
import useDarkSide from './useDarkMode'

const Sync = ({ data, deleteUser, EditUser , SearchUser ,  AddUser , Checked , SelectUsers }) => {
  const [edit, editModal] = useState(false)
  const [idx, setIdx] = useState(null)
  const [editName , setEditName] = useState('')
  const [editAge , setEditAge] = useState('')
  const [editImg, setEditImg] = useState('')

  function Edit(e) {
    e.preventDefault()
    let newUser = {
      name: editName,
      age: editAge,
      avatar: editImg,
      id: idx, 
      status:false
    }
    EditUser(idx, newUser)
    editModal(false)
  }

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

  function Check(id , user) {
    Checked(id , user ) 
  }

  const [del, setDel] = useState(false)
  const [ , toggleTheme] = useDarkSide()
  
  return (
    <>
      {
        edit && (
          <div style={{ position: 'fixed', zIndex:"100" ,  top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form onSubmit={Edit} action=" " style={{ width: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label htmlFor="name">Name</label>
              <input onChange={(e)=> setEditName(e.target.value)} value={editName} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="name" id="name" />
              
              <label htmlFor="age">Age</label>
              <input onChange={(e)=>setEditAge(e.target.value)} value={editAge} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="age" id="age" />
              
              <label htmlFor="status">Link Img</label>
              <input onChange={(e)=> setEditImg(e.target.value)} value={editImg} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="status" id="status" />
              
              <button style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} type='submit'  >Edit</button>
            </form>
          </div>
        )

        
      }
      {
        
        add && (
          <div style={{ position: 'fixed', zIndex:'100', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
      {
        del && (
          <div style={{ position: 'fixed', zIndex: '1000', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '300px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h1>Are you sure you want to delete this user?</h1>
              <button onClick={() => setDel(false)} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} >Cancel</button>
              <button onClick={() => {deleteUser(idx); setDel(false)}} style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px', backgroundColor:'red' , color:'white' }} >Delete</button>
            </div>
          </div>
        )
      }

      <div className=' flex justify-between p-[20px] '>
      <h1 className='text-4xl' style={{ textAlign: 'center', margin: '20px 0', font:'bold 24px' }}>List User</h1>
       <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
      >
        Toggle Theme
      </button>
      </div>

      <div className='bg-white text-black dark:bg-black dark:text-white' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5px', backgroundColor: 'white' }}>
        <div className='bg-white dark:text-white text-black dark:bg-black'>
        <input className='bg-white dark:text-white text-black dark:bg-black' onChange={(e) => SearchUser(e.target.value)}  placeholder='Name...                                                               🔍 ' style={{ width:"300px", padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="" id="" />
          <select className='bg-white dark:text-white text-black dark:bg-black' onChange={(e) => SelectUsers(e.target.value)} style={{ marginLeft:'10px', padding: '10px', border: '1px solid gray', borderRadius: '5px' }} name="" id="">
            <option value="">All User</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
        </select>
        </div>
      
        <button style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} onClick={()=>addModal(true)} >➕ Add User</button>
      </div>

      <table className='bg-white dark:text-white text-black dark:bg-black' style={{  borderCollapse: 'collapse', width: '100%', margin:'auto' }} >
        <thead className='bg-blue-800 dark:text-white text-white dark:bg-black' style={{  fontSize:'25px',  color:'white' , textAlign: 'center',  border: '2px solid gray', padding: '10px' }}>
          <th className='bg-blue-800 dark:text-white text-white dark:bg-black' style={{ padding: '10px', border: '1px solid gray' }} >ID</th>
          <th className='bg-blue-800 dark:text-white text-white dark:bg-black' style={{ padding: '10px', border: '1px solid gray' }} >Name</th>
          <th className='bg-blue-800 dark:text-white text-white dark:bg-black' style={{ padding: '10px', border: '1px solid gray' }} >Age</th>
          <th className='bg-blue-800 dark:text-white text-white dark:bg-black' style={{ padding: '10px', border: '1px solid gray' }} >Status</th>
          <th className='bg-blue-800 dark:text-white text-white dark:bg-black' style={{ padding: '10px', border: '1px solid gray' }} >Action</th>
        </thead>
        <tbody>
           {
        data.map((e, i) => {
          return (
            <tr style={{ border:'2px solid blue', textAlign:'center', transform: 'scale(1.01)',  } } >
              <td > {i + 1} </td>

              <td style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
                <img style={{ width: '100px', height: '100px',  borderRadius:'55%' }} src={e.avatar} alt="" />
                <h1> {e.name} </h1>
              </td>

              <td >{e.age}</td>

              <td >
                <input onClick={() => { 
                  Check(e.id, e.status)

                }} checked={e.status} type="checkbox" name="" id="" />
              </td>

              <td > 
                <button style={{ borderRadius: '10px', padding: '5px 10px ', backgroundColor: 'red', color: 'white', border: 'none' }} onClick={() => { setIdx(e.id); setDel(true) }} >🗑️ Delete </button>
                <button style={{ borderRadius:'10px', padding: ' 5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', marginLeft: '10px' }} onClick={
                  () => {
                    setIdx(e.id); editModal(true);
                    setEditName(e.name)
                    setEditAge(e.age)
                    setEditImg(e.avatar)
                   }}
                > ✒️ Edit </button>

                <button style={{ borderRadius:'10px', padding: ' 5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', marginLeft: '10px' }} >ℹ️ INFO</button>
              </td>
            </tr>
          )
        })
      }

        </tbody>
      </table>
     
    
    </>
  )
}

export default Sync
