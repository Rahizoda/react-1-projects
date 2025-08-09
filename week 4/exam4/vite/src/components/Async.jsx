import React, { useEffect, useState } from "react";
import Sync from "./Sync";
import axios from "axios";
import { Api } from "../confiig/api";
import Layout from "../Layout/Layout";

const Async = () => {
    const [data, setData] = useState([]);
  async function Get() {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Get();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`${Api}?id=${id}`);
      Get();
    } catch (error) {
      console.log(error);
    }
  }

  async function AddData(data) {
    try {
      await axios.post(Api, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      Get();
    } catch (error) {
      console.log(error);
      error;
    }
    }
    
    async function handleEdit(data) {
        try { 
            await axios.put(Api, data)
            Get();
        } catch (error) {
            console.log(error);
        }
    }

    async function Status(id) {
        try {
            await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`)
            Get();                  
        } catch (error) {
            console.log(error);
        }
    }


    

  return (
    <div>
      <Layout AddData={AddData}  />
      <Sync data={data} handleDelete={handleDelete} AddData={AddData} handleEdit={handleEdit} Status={Status} />
    </div>
  );
};

export default Async;
