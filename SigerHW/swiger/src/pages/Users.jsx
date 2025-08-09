import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../config/api";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { TextField } from "@mui/material";

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

const Users = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      Name: "",
      Description: "",
      Images: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("Name", values.Name);
      formData.append("Description", values.Description);
      formData.append("Images", values.Images);

      try {
        await axios.post(Api, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        Getdata();
        resetForm();
        handleClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  async function Getdata() {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChangefile = (event) => {
    formik.setFieldValue("Images", event.target.files[0]);
    };
    
    async function DelData(idx) {
        try {
            await axios.delete(`${Api}?id=${idx}`)
            Getdata()
        } catch (error) {
            console.error(error);
        }
    }

  useEffect(() => {
    Getdata();
  }, []);

  async function DeleteData(idx) {
    try {
      await axios.delete(`${Api}?id=${idx}`);
      Getdata();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              onChange={handleChangefile}
              type="file"
              name="images"
              label="Images"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              onChange={formik.handleChange}
              value={formik.values.Name}
              name="Name"
              label="Name"
              variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
              onChange={formik.handleChange}
              value={formik.values.Description}
              name="Description"
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button type="button" onClick={handleClose}>
              Close Child Modal
            </Button>
          </form>
        </Box>
      </Modal>

      {data.map((item) => (
          <div
              key={item.id}
            className=" border border-black  w-[300px] text-2xl text-center bg-gray-500 "
            style={{ margin: "20px auto", padding: "20px" }}
          >
        <Link to={`/users/${item.id}`}>
            <h2> Name: {item.name}</h2>
                  <p>Description: {item.description}</p>
        </Link>

              <Button onClick={() => DelData(item.id)} >DELETE</Button>
              <Button onClick={handleOpen}>Edit</Button>
              
          </div>
      ))}
    </>
  );
};

export default Users;
