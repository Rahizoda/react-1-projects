// import React, { useState } from 'react';

import { use, useState } from "react";
import "./App.css";

const App = () => {
  // let [color, setCount] = useState("blue")
  // let colors = [
  //   "pink",
  //   "gray",
  //   "red",
  //   "green",
  //   "orange",
  //   "yellow",
  //   "skyblue",
  //   "blue",
  //   "purple",
  //   "gold"
  // ]

  // function handClick() {
  //   let randomColor = Math.floor(Math.random() * 10)

  //   setCount(colors[randomColor])

  // }

  const [data, setDel] = useState([
    {
      id: 1,
      name: "John Ederson",
      img: "https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      age: 19,
      status:false
    },
    {
      id: 2,
      name: "John Ederson",
      img: "https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      age: 19,
      status:false
    },
    {
      id: 3,
      name: "John Ederson",
      img: "https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      age: 19,
      status:false
    },
    {
      id: 4,
      name: "John Ederson",
      img: "https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      age: 19,
      status:false
    },
    {
      id: 5,
      name: "John Ederson",
      img: "https://tse2.mm.bing.net/th/id/OIP.snHrzGZLz662DPlJrZYd_gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
      age: 19,
      status:false
    },
  ]);

  const setData = (id) => {
    setDel(data.filter((el) => el.id != id));
  };

  let [id, setId] = useState(null);

  function editUser(e) {
    e.preventDefault();

    let editForm = document.querySelector(".editForm");

    setDel(
      data.map((el) => {
        if (el.id == id) {
          el.name = editForm["name"].value;
          el.age = editForm["age"].value;
          el.img = editForm["img"].value;
        }
        return el
      })
    );
  }

 function addUser(e) {
  e.preventDefault();

  let addForm = document.querySelector('.addForm');

  let newdata = {
    id: Date.now(), // 🔑 ID уникалӣ
    name: addForm["name"].value,
    age: addForm["age"].value,
    img: addForm["img"].value,
  };

  setDel([...data, newdata]); 

  addForm.reset(); 
  document.querySelector(".add").close(); 
 }
  
  let [isCheked , Ceck] = useState(false)
  



  return (
    <>
      
      <button className="w-[100px] p-[5px] bg-[blue] m-[50px_400px] " onClick={() => {
        let add = document.querySelector('.add')
        add.showModal()
      }}  >➕</button>
      <dialog className="add w-[300px] text-start pl-[20px] m-auto h-[300px] rounded-[10px] shadow-[0px_0px_20px_black]  ">
         <form onSubmit={addUser} className="addForm">
              <button
                onClick={() => {
                  let edit = document.querySelector(".add");

                  edit.close();
                }}
              >
                ❌
              </button>{" "}
              <br />
              <br />
              <label htmlFor="1" className="font-bold">
                {" "}
                Name
              </label>{" "}
              <br />
              <input type="text" className="border" name="name" id="1" /> <br />
              <label htmlFor="2" className="font-bold">
                Age
              </label>{" "}
              <br />
              <input type="text" className="border" name="age" id="2" /> <br />
              <label htmlFor="3" className="font-bold">
                Img
              </label>{" "}
              <br />
              <input
                type="text"
                className="border"
                name="img"
                id="3"
              /> <br /> <br />
              <button
                type="submit"
                className="border p-[5px_15px] bg-[blue] text-white rounded-[5px]"
              >
                submit
              </button>
            </form>

      </dialog>



      <table className="w-[100%] border">
        <thead className="border">
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </thead>

        <tbody className="text-center">
          {data.map((el, index) => {
            return (
              <tr>
                <td className="border h-[100px] text-center">{index + 1}</td>
                <td className="border flex justify-start pl-[30px] p-[10px] gap-[30px]  items-center">
                  <img className="w-[100px]" src={el.img} alt="" />
                  {el.name} {el.userName}{" "}
                </td>
                <td className="border"> {el.age} </td>
                <td className="border">
                  <button onClick={() => setData(el.id)}>🗑️</button>
                  <button
                    onClick={() => {
                      let edit = document.querySelector(".Edit");
                      let editForm = document.querySelector(".editForm");
                      editForm["name"].value = el.name;
                      editForm["age"].value = el.age;
                      editForm["img"].value = el.img;
                      setId(el.id);
                      edit.showModal();
                    }}
                  >
                    ✒️
                  </button>
                  <input type="checkbox" checked={isCheked} onChange={ Check } />
                </td>
              </tr>
            );
          })}
          <dialog className="Edit w-[300px] text-start pl-[20px] m-auto h-[300px] rounded-[10px] shadow-[0px_0px_20px_black]  ">
            <form onSubmit={editUser} className="editForm">
              <button
                onClick={() => {
                  let edit = document.querySelector(".Edit");

                  edit.close();
                }}
              >
                ❌
              </button>{" "}
              <br />
              <br />
              <label htmlFor="1" className="font-bold">
                {" "}
                Name
              </label>{" "}
              <br />
              <input type="text" className="border" name="name" id="1" /> <br />
              <label htmlFor="2" className="font-bold">
                Age
              </label>{" "}
              <br />
              <input type="text" className="border" name="age" id="2" /> <br />
              <label htmlFor="3" className="font-bold">
                Img
              </label>{" "}
              <br />
              <input
                type="text"
                className="border"
                name="img"
                id="3"
              /> <br /> <br />
              <button
                type="submit"
                className="border p-[5px_15px] bg-[blue] text-white rounded-[5px]"
              >
                submit
              </button>
            </form>
          </dialog>
        </tbody>
      </table>

      {/* <button style={{backgroundColor:color}} onClick={handClick} className='w-[200px] border'>
        ➕
      </button> */}
    </>
  );
};

export default App;
