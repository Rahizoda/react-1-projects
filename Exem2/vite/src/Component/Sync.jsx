import { useState } from "react";

const Sync = ({ data, DeleteUser , EditUser  }) => {
   
    const [edit, editMdel] = useState(false)
    const [ editname , setEditname ] = useState('')
    const [ editage , setEditage ] = useState('')
    const [ editimg , setEditimg ] = useState('')
    const [editinfo, setEditinfo] = useState('')
    const [editStatus, setEditStatus] = useState('')
    const [ idx , setIdx ] = useState(null)
    
    function Edit(e) {
        e.preventDefault()
        let user = {
            id: idx,
            name: editname, 
            age: editage, 
            avatar: editimg, 
            info: editinfo, 
            status :editStatus
        }

        EditUser(idx, user)
        editMdel(false)
    }

   

  return (
      <>
          {
              edit && (
                  <div className="w-[100%] h-[100%] bg-[#00000031]  fixed z-100 top-0 left-0  flex justify-center items-center  ">
                      <form onSubmit={Edit} action="" className="w-[400px] h-[400px] fixed bg-white m-auto p-[30px] rounded-2xl  ">
                          <input onChange={(e)=> setEditname(e.target.value) } value={editname} className="border border-gray-400 p-[5px_10px] shadow-[0px_0px_5px_grayu] w-[90%] m-auto ml-[15px] mt-[20px] rounded-l " type="text" />
                          <input onChange={(e)=> setEditage(e.target.value)} value={editage} className="border border-gray-400 p-[5px_15px] shadow-[0px_0px_5px_grayu] w-[90%] m-auto ml-[15px] mt-[20px] rounded-l " type="text" />
                          <input onChange={(e)=> setEditimg(e.target.value)} value={editimg} className="border border-gray-400 p-[5px_15px] shadow-[0px_0px_5px_grayu] w-[90%] m-auto ml-[15px] mt-[20px] rounded-l " type="text" />
                          <input onChange={(e)=> setEditinfo(e.target.value)} value={editinfo} className="border border-gray-400 p-[5px_15px] shadow-[0px_0px_5px_grayu] w-[90%] m-auto ml-[15px] mt-[20px] rounded-l " type="text" />
                          <button className="bg-blue-800 text-white p-[5px_10px] rounded-xl w-[70px] mt-[20px] " type="submit" >EDIT</button>
                          <button onClick={()=> editMdel(false)} className="border border-blue-600 text-blue-700 p-[5px_10px] rounded-xl" >CENEL</button>
                      </form>
                  </div>
           )    
          }
          {
        
        
          }
          
            {/* <div className="flex justify-between items-center p-[5px_20px] " style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5px', backgroundColor: 'white' }}>
            <div>
            <input onChange={(e) => SearchUser(e.target.value)}  placeholder='Name...                                                               🔍 ' style={{ width:"300px", padding: '10px', border: '1px solid gray', borderRadius: '5px' }} type="text" name="" id="" />
            <select onChange={(e) => SelectUsers(e.target.value)} style={{ marginLeft:'10px', padding: '10px', border: '1px solid gray', borderRadius: '5px' }} name="" id="">
                <option value="">All User</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            </div>
        
            <button style={{ padding: '10px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }} onClick={()=>addModal(true)} >➕ Add User</button>
        </div> */}
          
          
          {
              data.map((el, i) => {
                  return (
                      <tr className='border text-center border-black border-collapse p-[10px] font-bold text-xl ' >
                          <td>{i + 1}</td>
                          <td className='flex justify-start items-center gap-[30px] p-[20px] '>
                              <img className='w-[100px] rounded-[55%] ' src={el.avatar} alt="" />
                              {el.name}
                          </td>
                          <td> {el.status ? "Active" : "Inactive"} </td>
                          <td>
                              <button onClick={()=>DeleteUser(el.id)} className='bg-red-600 text-white p-[5px_10px] rounded-2xl '>🗑️ DELETE</button>
                              <button onClick={() => {
                                  editMdel(true)
                                  setEditname(el.name)
                                  setEditage(el.age)
                                  setEditimg(el.avatar)
                                  setEditinfo(el.info)
                                  setIdx(el.id)
                                  setEditStatus(el.status)
                              }}   className='bg-blue-800 text-white p-[5px_10px] rounded-2xl '>✒️ EDIT </button>
                              <button className='bg-blue-800 text-white p-[5px_10px] rounded-2xl '>ℹ️ INFO </button>
                          </td>
                      </tr>
                  )
              })
      }
    </>
  );
}

export default Sync;
