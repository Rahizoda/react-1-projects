import React, { useReducer, useState } from "react";
import { ApiImage } from "../confiig/api";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

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

const Sync = ({ data, handleDelete, handleEdit , Status }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [idx, setIdx] = useState(null);

  const initialValuess = {
    name: name,
    description: description,
    id: idx,
  };

  function reducerr(states, actionn) {
    if (actionn.type == "name") {
      return { ...states, name: actionn.value };
    }
    if (actionn.type == "description") {
      return { ...states, description: actionn.value };
    }
    if (actionn.type == "id") {
      return { ...states, id: actionn.value };
    }
  }

  console.log(initialValuess);
    const [values, dispatch] = useReducer(reducerr, initialValuess);
    
  function handleSubmitedit(e) {
    e.preventDefault();
    handleEdit(values);
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <form action="" onSubmit={handleSubmitedit}>
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
            <Button type="submit">Close Child Modal</Button>
          </form>

        </Box>
      </Modal>

      <table className="border border-collapse w-[95%] m-auto ">
        <thead className="h-[50px] bg-blue-600">
          <th className="border ">ID</th>
          <th className="border">Name</th>
          <th className="border">Status</th>
          <th>Actions</th>
        </thead>
        <tbody className="text-center">
          {data.map((el, index) => {
            return (
              <tr className="border border-collapse h-[50px]" key={index}>
                    <td> {index + 1} </td>
                    <Link to={`/user/${el.id}`} >
                       <td className="flex items-center  gap-10">
                  {/* <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={
                      el.images
                        ? `${ApiImage}/${el.images[0].imageName}`
                        : "https://www.truckeradvisor.com/media/uploads/profilePics/notFound.jpg"
                    }
                    alt="no image"
                  /> */}
                  {el.name}
                       </td>
                    </Link>
                <td>
                        <Button
                            onClick={()=>Status(el.id)}
                            sx={{ backgroundColor: el.isCompleted ? "green" : "gray", color: "white" }}>
                      {el.isCompleted ? "Active" : "Inactive"}
                    </Button>
                </td>
                <td>
                  <Button
                    sx={{ backgroundColor: "red", color: "white" }}
                    onClick={() => handleDelete(el.id)}
                  >
                    delete
                  </Button>
                  <Button
                    sx={{ backgroundColor: "blue", color: "white" }}
                    onClick={() => {
                        dispatch({ type: "id", value: el.id });
                        dispatch({ type: "name", value: el.name });
                        dispatch({ type: "description", value: el.description });
                        setIdx(el.id);
                        setName(el.name);
                        setDescription(el.description);
                        handleOpen();
                    }}>
                    ✒️ edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sync;
