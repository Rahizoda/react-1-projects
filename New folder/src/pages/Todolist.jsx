import React, { useEffect, useState } from 'react';
import abstract from "../assets/Abstract Design.png";
import contan from "../assets/Text Container.png";
import axios from 'axios';
import { Api } from '@/config/Api';

import { TextAnimate } from "@/components/magicui/text-animate";
import { RippleButton } from "@/components/magicui/ripple-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Link } from 'react-router-dom';

const Todolist = () => {
  const [data, setData] = useState([]);

  async function GetData() {
    try {
      const { data } = await axios.get(Api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  async function delUs(id) {
    try {
      await axios.delete(`${Api}/${id}`)
      GetData()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-[90%] mx-auto">

      <div className="relative w-full border-black shadow-[5px_10px_black] mt-16 p-16 border rounded-2xl flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-[#1f1f1f]  ">
        <img
          src={abstract}
          alt=""
          className="w-[100px] absolute left-[0px] top-[0px] hidden md:block"
        />
        <div className="w-full md:w-1/2 space-y-4">
          <button className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Overview
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Little Learners Academy
          </h1>
        </div>
        <div className="w-full md:w-1/2 text-sm text-gray-700 dark:text-gray-300">
          A leading kindergarten school dedicated to providing a nurturing and stimulating environment for young learners. Our holistic approach ensures each child reaches their full potential.
        </div>
      </div>


      <section className="text-center mt-32">
        <RippleButton className="mx-auto" rippleColor="#ADD8E6">
          Click me
        </RippleButton>
        <h2 className="text-3xl font-bold mt-4">Our Mission & Visions</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
        </p>

        {/* Static Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <img key={i} src={contan} alt="" className="w-full rounded-xl shadow-md" />
          ))}
        </div>
      </section>

      {/* Dynamic Cards */}
      <section className="text-center mt-32">
        <RippleButton className="mx-auto" rippleColor="#ADD8E6">
          Click me
        </RippleButton>
        <h2 className="text-3xl font-bold mt-4">Our Mission & Visions</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((e) => (
            <div
              key={e.id}
              data-aos="zoom-in"
              className="bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md text-center transition hover:shadow-xl"
            >
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-[200px] object-cover rounded-lg mb-4"
              />
              <TextAnimate animation="blurIn" as="h3" className="text-lg font-semibold mb-2">
                {e.name}
              </TextAnimate>
              <div className='flex items-center justify-between'>
                <InteractiveHoverButton onClick={() => { delUs(e.id) }}> Delet </InteractiveHoverButton>
                <InteractiveHoverButton onClick={() => { }}> Edit </InteractiveHoverButton>
                <Link to={`/todolist/${e.id}`}>
                  <InteractiveHoverButton onClick={() => { }}> info </InteractiveHoverButton>
                </Link>
              </div>
            </div>
          ))
          }
        </div >
      </section >
    </div >
  );
};

export default Todolist;
