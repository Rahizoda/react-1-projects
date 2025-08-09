import React, {  useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [trider, setTriger] = useState(false)
  const [data, setData] = useState([])

  const [edit, editModal] = useState(false)
  const [editName, SeteditName] = useState('')
  const [editAge, SeteditAge] = useState('')
  const [editImg, SeteditImg] = useState('')
  const [idx, setid] = useState('')
  
  const [add, addModal] = useState(false)
  const [addName, SetaddName] = useState('')
  const [addAge, SetaddAge] = useState('')
  const [addImg, SetaddImg] = useState('')

  

  let api = "https://68500abee7c42cfd17971bfc.mockapi.io/data/data"

  async function Get() {
    try {
      let { data } = await axios.get(api)
      setData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (trider) {
      Get()
    }
    return setTriger(true)
  } , [trider])


  async function SearchUser(value) {
    try {
      const { data } = await axios.get( value ? `${api}?name=${value}`: api)
      setData(data)
    } catch (error) {
      console.log(error);
      
    }
    
  }

  async function delData(Id) {
    try {
      await axios.delete(`${api}/${Id}`)
      Get()
    } catch (error) {
      console.log(error);
      
    }
  }

  async function EditData(id, data) {
    try {
      await axios.put(`${api}/${id}`, data)
      Get()
    } catch (error) {
      console.log(error);
      
    }
    
  }

  async function AddData(data) {
    try {
      await axios.post(api, data)
      Get()
    } catch (error) {
      console.log(error);
      
    }
  }


  function EditUser(e) {
    e.preventDefault()
    let user = {
      name: editName,
      age: editAge,
      image: editImg,
      id:idx
    }

    EditData(idx, user)
    editModal(false)
    

  }

  function AddUser(e) {
    e.preventDefault()
    let user = {
      name: addName,
      age: addAge,
      image: addImg,
      id: Date.now()
    }
    AddData(user)
    addModal(false)
  }


  return (
    <>
      
      <div style={{ display: "flex", justifyContent: "space-between", padding:" 30px 60px" , alignItems: "center" ,  marginTop: "20px" }}>
      <input onChange={(e)=> SearchUser(e.target.value)} style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid black", width: "30%" }} placeholder='Search User ..' type="text" name="" id="" />
        <button style={{ backgroundColor: "lightblue", border: "none", padding: "5px 10px", borderRadius: "5px" }}
        onClick={ ()=> addModal(true) }
        > ➕ Add </button>
      </div>
      
      {
        edit && (
          <div style={{ position: "fixed", top: "25%", left: "30%", width: "50%", height: "50%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={ EditUser }  style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px" }}  action="">
              <input value={editName}  onChange={(e)=> SeteditName(e.target.value) } style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }}  type="text" name="" id="" />
              <input value={editAge} onChange={(e)=> SeteditAge(e.target.value) }  style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }} type="text" name="" id="" />
              <input  value={editImg} onChange={(e)=> SeteditImg(e.target.value) } style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }} type="text" name="" id="" />
              <button    style={{ backgroundColor: "lightblue", border: "none", padding: "5px 10px", borderRadius: "5px" }} type='submit'  >Edit</button>
            </form>
          </div>
        )

      }
      {
        add && (
          <div style={{ position: "fixed", top: "25%", left: "30%", width: "50%", height: "50%", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={ EditUser }  style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px" }}  action="">
              <input  onChange={(e)=> SetaddName(e.target.value) } style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }}  placeholder='Your name' type="text" name="" id="" />
              <input  onChange={(e)=> SetaddAge(e.target.value) }  style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }} placeholder=' Your age ' type="text" name="" id="" />
              <input   onChange={(e)=> SetaddImg(e.target.value) } style={{ marginBottom: "10px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }} placeholder=' Your link img' type="text" name="" id="" />
              <button style={{ backgroundColor: "lightblue", border: "none", padding: "5px 10px", borderRadius: "5px" }} type='submit'
               onClick={ AddUser }
              > Add</button>
            </form>
          </div>
        )
      }

      <table style={{ border:"1px solid black" , width:"90%",   margin:"auto"  , borderCollapse:"collapse"}}>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </thead>

        <tbody>
          {
            data.map((el, i) => {
              return (
                <tr style={{ border:"1px solid black", textAlign:'center', borderCollapse:"collapse" }} >

                  <td style={{border:"1px solid black", borderCollapse:"collapse" }} > {i + 1} </td>
                  <td style={{  display:"flex" , justifyContent:'start', alignItems:'center', gap:"30px" } }>
                    <img style={{ width: "100px", borderRadius:"55%"  }} src={el.image} alt="" />
                    { el.name }
                  </td>

                  <td style={{ border: "1px solid black", borderCollapse: "collapse" }} > {el.age} </td>
                  <td style={{ border: "1px solid black", borderCollapse: "collapse" }}> 
                    <button style={{ backgroundColor: "lightcoral", border: "none", padding: "5px 10px", borderRadius: "5px" }}
                    onClick={ ()=> delData(el.id) }
                    >🗑️ Delete</button>
                    <button style={{ backgroundColor: "lightblue", border: "none", padding: "5px 10px", borderRadius: "5px" }}
                      onClick={() => {
                        editModal(true)
                        SeteditName(el.name)
                        SeteditAge(el.age)
                        SeteditImg(el.image)
                        setid(el.id)
                      }
                      }
                    > ✒️ Edit </button>
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

export default App
