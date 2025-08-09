import React, { useEffect, useState } from 'react';
import Sync from './Sync';
import axios from 'axios';
import { Api } from '../config/api';
import { Try } from '@mui/icons-material';
import App from '../App';

const Async = () => {

    const [data, setData] = useState([]);
    const [ triger , setTriger ] = useState(false)

    async function GetData() {
        try {
            const { data } = await axios.get(Api)
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (triger) {
            GetData()
        }
        return setTriger(true)
    } , [ triger])


    async function DeleteUser(id) {
        try {
            await axios.delete(`${Api}/${id}`)
            GetData()
        } catch (error) {
            console.log(error);
        }
    }

    async function EditUser(id , user) {
        try {
            await axios.put(`${Api}/${id}` , user)
        } catch (error) {
            console.log(error);
            
        }
    }

    async function AddUser(user) {
        try {
            await axios.post(Api, user)
            GetData()
        } catch (error) {
          console.log(error);
            
        }
    }

   

    return (
      
    <>
            <Sync DeleteUser={DeleteUser} EditUser={EditUser} data={data} />
            <App AddUser={AddUser} />
    </>
  );
}

export default Async;
