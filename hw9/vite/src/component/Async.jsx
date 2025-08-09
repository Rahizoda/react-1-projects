import React, { useEffect, useState } from 'react';
import { Api } from '../config/api';
import axios from 'axios';
import Sync from './Sync';
import App from '../App';


const Async = () => {

  const [ data , setData ] = useState([])
  const [ triger , SetTriger ] = useState(false)
  
    async function GetData() {
        try {
          const { data } = await axios.get(Api)
          setData(data)
          console.log(data);
          
        } catch (error) {
            console.log(error);
        }
  }
  
  useEffect(() => { 
    if (triger) {
      GetData()
    }
    return SetTriger(true)
  }, [triger])  


  async function DeleteUser(id) {
    try {
      await axios.delete(`${Api}/${id}`)
      GetData()
    } catch (error) {
      console.log(error);
    }
    
  }

  async function Check(id  , data) {
    try {
      await axios.put(`${Api}/${id}`, { status: !data })
      GetData()
    } catch (error) {
      console.log(error)
    }
  }

   async function EditUser(id , obj) {
    try {
      await axios.put(`${Api}/${id}`, obj)
      GetData()
    } catch (error) {
      console.log(error);
    }
    
  }


  async function SerachUser(value) {
    try {
      await axios.get(`${Api}?name=${value}`)
      GetData()
    } catch (error) {
      console.log(error);
      
    }
  }

  

  return (
    <>
      <Sync EditUser={EditUser} Check={Check} data={data} DeleteUser={DeleteUser} />
      <App SerachUser={ SerachUser} />
    </>
  );
}

export default Async;
