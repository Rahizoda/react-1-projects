import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    let api = 'https://68500abee7c42cfd17971bfc.mockapi.io/data/student'

    const [ data , setData] = useState([])
    const [ triger , setTriger]= useState(false)
    async function GetData() {
        try {
            const { data } = await axios.get(api)
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
    }, [triger])

  return (
    <div>
          { 
              data.map((el) => {
                  return (
                      <div className='flex justify-center items-center' style={{ height:'200px', border:'black 1px solid', boxShadow:'0px 0px 10px gray'}} key={el.id} >
                          <Link to={ `/user/${el.id}`}>
                           <h1> { el.name} </h1>
                          </Link>
                  </div>
                  )
              })
      }
    </div>
  );
}

export default Users;
