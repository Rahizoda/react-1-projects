import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sync from './sync'

const Async = () => {

  const [data, setData] = useState([])
  const [ triger , setTriger ] = useState(false)

    let api = 'https://68500abee7c42cfd17971bfc.mockapi.io/data/student'

    async function Get() {
        try {
          const { data } = await axios.get(api)
          setData(data)
        } catch (error) {
          console.log(error);
        }
  }
  
  useEffect(() => {
    if (triger) {
      Get()
    }
    return setTriger(true)
  }, [triger])

  
  async function deleteUser(id) {
    try {
      await axios.delete(`${api}/${id}`)
      Get()
    } catch (error) {
      console.error(error);
    }
    
  }

  async function EditUser(id , user) {
    try {
      await axios.put(`${api}/${id}`, user)
      Get()
    } catch (error) {
      console.log(error);
      
    }
  }

  async function SearchUser(value) {
    try {
      const { data } = await axios.get(`${api}?name=${value}`)
      setData(data)
    } catch (error) {
      console.error(error);
    }
    
  }

  async function SelectUsers(value) {
    try {
      const { data } = await axios.get(`${api}?status=${value}`)
      setData(data)
    } catch (error) {
      console.error(error);
    }
    
  }

  async function AddUser(user) {
    try {
      await axios.post(api, user)
      Get()
    } catch (error) {
      console.log(error);
    }
  }

  async function Checked(id , data) {
    try {
      await axios.put(`${api}/${id}`, { status: !data })
      Get()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Sync SelectUsers={SelectUsers} Checked={Checked} AddUser={AddUser} SearchUser={SearchUser} setData={setData} data={data} EditUser={EditUser} deleteUser={deleteUser} />
    </>
  )
}

export default Async
