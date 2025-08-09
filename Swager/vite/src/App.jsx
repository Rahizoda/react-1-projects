import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api, ApiImage } from "./config/api";
import "./App.css";
import { useFormik } from 'formik';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import * as Yup from 'yup';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function GetData() {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  async function DeleteData(idx) {
    try {
      await axios.delete(`${Api}?id=${idx}`);
      GetData();
    } catch (error) {
      console.error(error);
    }
  }


    const handleChangefile = (event) => {
    formik.setFieldValue("Images", event.target.files[0]);
  };
   const SignupSchema = Yup.object().shape({
   Name: Yup.string()
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     Description: Yup.string()
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });

  const formik = useFormik({
     initialValues: {
       Name: '',
       Description: '',
       Images: '',
    },
    validationSchema:SignupSchema,
    onSubmit: async (values, { resetForm }) => {
       const formData = new FormData();
       formData.append('name', values.Name);
       formData.append('description', values.Description);
      formData.append('images', values.Images);
      
      try {
        await axios.post(Api, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        resetForm();
        handleClose();
        GetData()
      } catch (error) {
        console.error(error);
      }
       
     },
  });



  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              name="Name"
              onChange={formik.handleChange}
              value={formik.values.Name}
              margin="normal"
              fullWidth 
              onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name }
              variant="outlined" label="Name" /> <br />
            <TextField
              name="Description"
              onChange={formik.handleChange}
              value={formik.values.Description}
              margin="normal"
              fullWidth
              error={formik.touched.Description && Boolean(formik.errors.Description)}
              helperText={formik.touched.Description && formik.errors.Description }
              variant="outlined" label="Description" /> <br />
            <TextField
              name="Images" 
              onChange={handleChangefile}
              type="file"
              margin="normal"
              fullWidth
              variant="outlined" /> <br />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          <Button onClick={handleClose}>Close Modal</Button>
          </form>

        </Box>
      </Modal>

      <div className=" flex items-center gap-[30px] flex-wrap ">
        {data.map((el, i) => {
          return (
            <div
              key={i}
              className="w-[300px] h-[300px] rounded-2xl border text-center border-gray-800  p-[20px] "
            >
              {el.images?.map((image, index) => (
                <img
                  className="w-[90%] h-[50%] m-auto"
                  key={index}
                  src={el.images ?`${ApiImage}/${image.imageName}`: 'https://www.truckeradvisor.com/media/uploads/profilePics/notFound.jpg' }
                />
              ))}
              <h1> {el.name} </h1>
              <h2>{el.description}</h2>

              <Button
                variant="contained"
                color="error"
                onClick={()=> DeleteData(el.id)}
              >
                 DELETE
              </Button>
          
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
