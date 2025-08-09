import React, { useState } from "react";
import { ApiImage } from "../config/api";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
 import { Formik, useFormik } from 'formik';
import { Link } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Sync = ({ data, DelData , AddData , EditData}) => {
   const [open, setOpen] = React.useState(false);
   const [openadd, setOpenadd] = React.useState(false);
  const handleOpenadd = () => setOpenadd(true);
  const handleCloseadd = () => setOpenadd(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openimg, setOpenimg] = React.useState(false);
   const handleOpenimg = () => setOpenimg(true);
  const handleCloseimg = () => setOpenimg(false);

  

  const handleChangefile = (event) => {
    formik.setFieldValue("Images", event.target.files[0]);
  };
  
   const formik = useFormik({
      initialValues: {
        Name: '',
        Description: '',
        Images:''
      },
      enableReinitialize: true,
      onSubmit:( values , { resetForm} ) => {
        const formData = new FormData()
        formData.append("Name", values.Name)
        formData.append("Description", values.Description)
        formData.append("Images" , values.Images)
        
       
        AddData(formData)
        handleClose()
        resetForm()
      },

   })
  
  const [ name , setName ] = useState('')
  const [description, setDescription] = useState('')
  const [ idx , setIdx] = useState(null)
    
  function Edit(e) {
    e.preventDefault()
    const data = {
      name: name, 
      description: description, 
      id: idx
    }
    EditData(data)
    handleCloseadd()
  }
  



  return (
    <>
       
      <Modal
        open={openadd}
        onClose={handleCloseadd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="" onSubmit={Edit}>
            <TextField name="Name" value={name} onChange={(e)=> setName(e.target.value)}  variant="outlined" fullWidth label='Name'/> <br /><br />
            <TextField name="Description" value={description} onChange={(e)=> setDescription(e.target.value)} variant="outlined" fullWidth label='Description' /> <br /><br />
            <Button  type="submit" sx={{ backgroundColor:"blue", color:"white" }} > SUBMIT </Button>
            <Button onClick={handleCloseadd} sx={{ backgroundColor:"white", border:"1px solid blue", marginLeft:"20px", color:"blue" }} > CENEL </Button>
          </form>
        </Box>
      </Modal>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="" onSubmit={formik.handleSubmit}>
            <TextField name="Name" value={formik.values.Name} onChange={formik.handleChange}  variant="outlined" fullWidth label='Name'/> <br /><br />
            <TextField name="Description" value={formik.values.Description} onChange={formik.handleChange} variant="outlined" fullWidth label='Description' /> <br /><br />
            <TextField name="Images" type="file" onChange={handleChangefile} variant="outlined" fullWidth  /> <br /><br />
            <Button type="submit" sx={{ backgroundColor:"blue", color:"white" }} > SUBMIT </Button>
            <Button onClick={handleClose} sx={{ backgroundColor:"white", border:"1px solid blue", marginLeft:"20px", color:"blue" }} > CENEL </Button>
          </form>
        </Box>
      </Modal>

       <Modal
        open={openimg}
        onClose={handleCloseimg}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="" onSubmit={formik.handleSubmit}>
            <TextField name="Images" type="file" onChange={handleChangefile} variant="outlined" fullWidth  /> <br /><br />
            <Button type="submit" sx={{ backgroundColor:"blue", color:"white" }} > SUBMIT </Button>
            <Button onClick={handleCloseimg} sx={{ backgroundColor:"white", border:"1px solid blue", marginLeft:"20px", color:"blue" }} > CENEL </Button>
          </form>
        </Box>
      </Modal>

      <button onClick={handleOpen}>Add User</button>
      <table>
        <thead style={{ backgroundColor: "blue", color: "white" }}>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th> Action </th>
        </thead>
        <tbody>
          {data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>

                <td style={{display:"flex", alignItems:"center", gap:"20px"}}>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "15px",
                    }}
                    key={index}
                    src={
                      el.images
                        ? `${ApiImage}/${el.images[0]?.imageName}`
                        : "https://www.truckeradvisor.com/media/uploads/profilePics/notFound.jpg"
                    }
                    alt="No Img"
                  />

                  {el.name}
                </td>

                <td> <button >{el.isCompleted ? "Completed" : "Pending"}</button> </td>

                <td>
                  <button
                    onClick={()=>DelData(el.id)}
                    style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px" }}>
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      setIdx(el.id)
                      setName(el.name)
                      setDescription(el.description)
                      handleOpenadd()
                    }}
                    style={{ backgroundColor: "blue", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px" } }>
                    EDIT
                  </button>
                  
                  <button onClick={handleOpenimg} >Add IMG</button>

                  <Link to={`/user/${el.id}`}>
                  
                    <button>info</button>
                  </Link>

                </td>
                

              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Sync;
