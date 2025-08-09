import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Api, ApiImage } from '../config/api';
import {  useParams } from 'react-router-dom';

const UserByid = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    async function GetUserById() {
        try {
            const {data} = await axios.get(`${Api}/${id}`);
            setUser(data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetUserById()
    }, [])

  return (
    <div  className=' border w-[350px] rounded-2xl h-[350px]  text-3xl '>
          <h1> {user.name} </h1>
          <p>{user.description}</p>
          {
              user.images?.map((image, index) => (
                  <img key={index} src={`${ApiImage}/${image.imageName}`}  className='w-[100px] h-[100px] object-cover' />
              ))
          }
    </div>
  );
}

export default UserByid;
