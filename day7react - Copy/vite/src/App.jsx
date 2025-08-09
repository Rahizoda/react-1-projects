import React, {  useState } from 'react';
import './App.css'

const App = () => {

  const [data, setData] = useState([
    { id: 1, name: "Muhammad Bukhoriev", age: "25", img: "https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 2, name: "Ismoil Vakhidov" , age:"21" , img:"https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 3, name: "Abdurahmon Nazirov" , age:"20" , img:"https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 4, name: "Muhammadkarim Rahimov" , age:"29" , img:"https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: 5, name: "Subhon Nasriddinov" , age:"23" , img:"https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
    
  ])
  
  const Delete = (id) => {
    setData( data.filter((el) => el.id != id))
  }
  const [user, addData] = useState(false)
  let data2= data
  const [addName, addSetName] = useState('')
  const [ addAge , addSetAge] = useState('')
  const [addImg, addSetImg] = useState('')
  
  const [ us , editUs ] = useState(false)
  const [editName, editSetName] = useState('')
  const [ editAge , editSetAge] = useState('')
  const [editImg, editSetImg] = useState('')
  const [idx, editSetidx] = useState('')

  const [search, searchUser] = useState('')
  
  function Search(value) {
       console.log(value);
    
      searchUser( value)

    setData( data.filter((el)=>  el.name.toLowerCase().includes(value.toLowerCase()) ))
    
  }

  function addUser(e) {
    e.preventDefault()
    let newUser = {
      name: addName, 
      img: addImg,
      age: addAge, 
      id: Date.now()
    }

    setData([...data, newUser])
    addSetName('')
    addSetAge('')
    addData(false)
  
  }

  function EditUser(e) {
    e.preventDefault()

    setData(data.map((el) => {
      let newUser = {
        name: editName,
        age: editAge,
        img: editImg, 
        id:idx
      }
      if (el.id == idx) {
        el = newUser
      }
      return el
    }))

    editUs(false)

  }


 

  return (
    <>
      {
        user && (
      <div className='  shadow-[0px_0px_100px_black] fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 m-auto w-[400px]   bg-sky-200 rounded-[20px] p-[50px] '>
        <form action="">
          <input type="text" value={addName} onChange={(e)=> addSetName(e.target.value)} placeholder='Name'  className='border w-[90%] p-[10px] rounded-[5px] mt-[10px] mb-[5px] ' /> <br />
          <input type="text" value={addImg} onChange={(e)=> addSetImg(e.target.value)} placeholder='Img'  className='border w-[90%] p-[10px] rounded-[5px] mt-[10px] mb-[5px] ' /> <br />
          <input type="text" value={addAge}  onChange={(e)=> addSetAge(e.target.value)} placeholder='Age' className='border w-[90%] p-[10px] rounded-[5px] mt-[10px] mb-[5px] ' /> <br />
          <button type='submit' className='border p-[5px] bg-[blue] text-white w-[100px] ' onClick={addUser} >submit</button>
        </form>
          </div>
          

        )
        
      }
      {
        us && (
          <div  className='mt-[50px] m-auto w-[400px] fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  shadow-[0px_0px_100px_black]    bg-sky-200 rounded-[20px] p-[50px] '>
        <form action="">
          <input type="text" value={editName} onChange={(e)=> editSetName(e.target.value)} placeholder='Name'  className='border w-[90%] p-[10px] rounded-[5px] mt-[10px] mb-[5px] ' /> <br />
          <input type="text" value={editImg} onChange={(e)=> editSetImg(e.target.value)} placeholder='Img'  className='border w-[90%] p-[10px] rounded-[5px] mt-[10px] mb-[5px] ' /> <br />
          <input type="text" value={editAge}  onChange={(e)=> editSetAge(e.target.value)} placeholder='Age' className='border w-[90%] p-[10px] rounded-[5px] mt-[10px] mb-[5px] ' /> <br />
          <button type='submit' className='border p-[5px] bg-[blue] text-white w-[100px] ' onClick={EditUser} >submit</button>
        </form>
          </div>
        )
      }

      <div className='flex items-center justify-between p-[60px] '>
        <input type="text" value={search}  onChange={(e) => {
          Search(e.target.value)

        }} placeholder='search' className='border p-[10px] rounded-[10px] w-[300px] ' />

      <button className='border bg-[blue] text-white w-[100px] p-[5px] ' onClick={()=> addData(true) } > Add </button>

      </div>
      <table className='w-[90%] m-auto border mt-[50px]'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            data.map((el, index) => {
              return (
                <tr className='border text-center'>
                  <td className='border ' >{index + 1}</td>
                  <td className=' flex gap-[20px] font-bold text-[20px] justify-start items-center  p-[5px]'> <img className='w-[100px] rounded-[55%]  ' src={el.img} alt="" /> {el.name} </td>
                  <td className='border'> {el.age} </td>
                  <td>
                    <button className='bg-[red] text-white p-[5px]' onClick={() => Delete(el.id)} >🗑️ Delete</button>
                    <button className='bg-[blue] text-white p-[5px] ml-[5px] ' onClick={() => {
                      editUs(true)
                      editSetName(el.name)
                      editSetImg(el.img)
                      editSetAge(el.age)
                      editSetidx(el.id)
                    }}  >✒️ Edit </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>


      </table>

    </>
  );
}

export default App;
