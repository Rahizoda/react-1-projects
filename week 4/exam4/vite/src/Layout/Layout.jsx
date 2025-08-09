import React, { useReducer } from "react";
import CustomizedSwitches from "../components/Swicer";
import useDarkSide from "../confiig/useDarkMode";
import { Outlet } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

const Layout = ({ AddData }) => {
  const [, toggleTheme] = useDarkSide();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    name: "",
    description: "",
    images: "",
  };

  function reducer(state, action) {
    if (action.type == "name") {
      return { ...state, name: action.value };
    }
    if (action.type == "description") {
      return { ...state, description: action.value };
    }
    if (action.type == "images") {
      return { ...state, images: action.value };
    }
  }

  const [values, dispatch] = useReducer(reducer, initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    AddData(values);
    handleClose();
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form action="" onSubmit={handleSubmit}>
            <TextField
              value={values.name}
              onChange={(e) =>
                dispatch({ type: "name", value: e.target.value })
              }
              fullWidth
              variant="outlined"
              label="Name"
            />{" "}
            <br />
            <br />
            <TextField
              value={values.description}
              onChange={(e) =>
                dispatch({ type: "description", value: e.target.value })
              }
              fullWidth
              variant="outlined"
              label="Desc"
            />{" "}
            <br />
            <br />
            <TextField
              onChange={(e) =>
                dispatch({ type: "images", value: e.target.files[0] })
              }
              fullWidth
              type="file"
            />
            <Button type="submit">Close Add Modal</Button>
          </form>

        </Box>
      </Modal>
      <div
      
       className="flex justify-between items-center p-4 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-3xl font-bold">My To-Do List</h1>
        <div className="flex items-center gap-10">
          <CustomizedSwitches toggleTheme={toggleTheme} />
          <Button
            onClick={handleOpen}
            sx={{ backgroundColor: "blue", color: "white" }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add User
          </Button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
