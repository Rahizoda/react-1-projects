import React, { useEffect, useState } from 'react';
import Sync from './Sync';
import axios from 'axios';
import { Api } from '../config/Api';

const Async = () => {

    const [data, setData] = useState([])
    const [ triger , setTriger ] = useState(false)
    async function GetData() {
        try {
            const { data } = await axios.get(Api)
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (triger) {
            GetData()
        }
        return setTriger(true)
    } , [triger])


    async function Delete(id) {
        try {
            await axios.delete(`${Api}/${id}`)
            GetData()
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <Sync data={data} Delete={Delete} />
    </>
  );
}

export default Async;
