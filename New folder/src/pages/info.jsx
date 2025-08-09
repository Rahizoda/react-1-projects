import { Api } from '@/config/Api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    async function GetData() {
        try {
            const { data } = await axios.get(`${Api}/${id}`)
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <div className='p-[50px_0px]'>
            <h1 className='text-4xl'>{data.name}</h1> <br /><br />
            <img src={data.img} alt="" />
        </div>
    )
}

export default Info
