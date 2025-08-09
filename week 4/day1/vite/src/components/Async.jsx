import React, { useEffect, useState } from 'react';
import Sync from './Sync';
import axios from 'axios';
import { Api } from '../config/api';

const Async = () => {
  const [data, setData] = useState([])

  
    async function Get() {
        try {
          const { data } = await axios.get(Api)
          setData( data.data )
        } catch (error) {
            console.log(error);
        }
  }
  
  useEffect(() => {
    Get()
  } , [])

  async function DelData(id) {
    try {
      await axios.delete(`${Api}?id=${id}`)
      Get()
    } catch (error) {
      console.error(error);
    }
  }

async function EditData(formData) {
  try {
    await axios.put(Api, formData);
    Get();
  } catch (error) {
    console.log( error);
  }
  }
  
  async function AddData(data) {
    try {
      await axios.post(Api , data , {
          headers: { "Content-Type": "multipart/form-data" },
        })
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <Sync data={data} DelData={DelData} EditData={EditData} AddData={AddData} />
    </>
  );
}

export default Async;
