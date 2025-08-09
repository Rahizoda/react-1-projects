import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../config/api';

const UserbyId = () => {

  const { id } = useParams()
  const [ data , setData] = useState([])
 
  async function GetbyId() {
    try {
      const { data } = await axios.get(`${Api}?id=${id}`)
      setData( data.data )
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetbyId()
  }, [])

  return (
    <>
      <div>
        <h1>{data.name} </h1>
        
      </div>
    </>
  );
}

export default UserbyId;
