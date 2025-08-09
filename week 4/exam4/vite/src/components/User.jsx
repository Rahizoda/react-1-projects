import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import useDarkSide from "../confiig/useDarkMode";
import CustomizedSwitches from "./Swicer";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Api, ApiImage } from "../confiig/api";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const User = () => {
  const [data, userData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { id } = useParams();
  const [, toggleTheme] = useDarkSide();

  async function GetUser() {
    try {
      const { data } = await axios.get(`${Api}/${id}`);
      console.log(data.data);
      userData(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetUser();
  }, []);

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  async function addImage(id , data ) {
    try {
      await axios.post(
        `https://to-dos-api.softclub.tj/api/to-dos/${id}/images` , data
      );
      GetUser();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteImage(idx) {
    try {
      await axios.delete(
        `https://to-dos-api.softclub.tj/api/to-dos/images/${idx}`
      );
      GetUser();
    } catch (error) {
      console.log(error);
    }
    }
    
    
      const initialValues = {
        images: "",
      };
    
      function reducer(state, action) {
        
        if (action.type == "images") {
          return { ...state, images: action.value };
        }
      }
    
      const [values, dispatch] = useReducer(reducer, initialValues);
    
      function handleSubmit(e) {
        e.preventDefault();
        addImage(id, values);
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
          <form action=""  >
            <TextField value={values.images} onChange={(e) => dispatch({ type: "images", value: e.target.files })} type="file"  />,
            <Button
            type="submit"
              sx={{
                marginTop: "10px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => {
                handleSubmit()
                handleClose();
              }}
            >
              Add
            </Button>
          </form>
        </Box>
      </Modal>
      <div className="flex justify-between items-center p-4 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-3xl font-bold">User info</h1>
        <div className="flex items-center gap-10">
          <CustomizedSwitches toggleTheme={toggleTheme} />
          <Link to="/">
            <Button sx={{ backgroundColor: "blue", color: "white" }}>
              Go to Home
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex justify-between w-[80%] m-auto ">
          <h1 className="text-3xl font-bold  ">
            <span className="text-blue-500">Name:</span>

            {data.name}
          </h1>
          <Button
            sx={{ backgroundColor: "blue", color: "white" }}
            onClick={() => handleOpen()}
          >
            Add Image
          </Button>
        </div>

        <div className="w-full mt-[50px] pb-[50] max-w-md mx-auto text-center">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {/* {data.images.map((el) => {
              return (
                <SwiperSlide>
                    <img src={el.imageName} alt="" />
                  <Button
                    sx={{
                      marginTop: "10px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                    onClick={() => {
                      deleteImage(data.images.id);
                    }}
                  >
                    Delete Image
                  </Button>
                </SwiperSlide>
              );
            })} */}
          </Swiper>

          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              ⬅️ Prev{" "}
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-700 text-white px-4 py-2 rounded"
            >
              Next ➡️
            </button>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <h2 className="text-xl m-[30px] text-center">
          <span className="text-blue-500">Description:</span>
          {data.description}
        </h2>
      </div>
    </>
  );
};

export default User;
