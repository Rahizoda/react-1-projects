import React, { useState } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import EditModal from "./editModal";

const Sync = ({ data, DeleteUser, Check , EditUser}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ user , setUser] = useState({})

  return (
    <>
        <EditModal EditUser={EditUser} handleClose={handleClose} open={open} close={close} handleOpen={handleOpen} setUser={setUser} user={user} />
      {data.map((el, i) => {
        return (
          <tr className="border border-collapse dark:border-gray-500 border-gray-400 p-[20px] font  ">
            <td className="p-[10px]">{i + 1}</td>
            <td className="text-start" >{el.name} </td>
            <td className="p-[10px]"> {el.age} </td>
            <td >
            <input  checked={el.status} onClick={()=>Check(el.id , el.status)}  type="checkbox" name="" id="" />
            </td>
            <td className="p-[10px]">
              <Button onClick={()=>DeleteUser(el.id)}  variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button   onClick={()=>{handleOpen(); setUser(el)}} variant="contained" endIcon={<SendIcon />}>
                EDIT
              </Button>
             
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Sync;
