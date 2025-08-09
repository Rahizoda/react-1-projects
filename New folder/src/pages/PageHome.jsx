import React from 'react'
import i1 from "../assets/Sub Container.svg"
import i2 from "../assets/Sub Container (1).svg"
import user from "../assets/Profile Container.png"
import sitora from "../assets/sitora.png"
import faq from "../assets/FAQ Item Open (1).svg"
import faqi from "../assets/FAQ Item.png"
import card from "../assets/Card.png"
import img1 from "../assets/Image Container (1).png"

const benefits = [
  {
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    title: "Experienced Educators",
    description:
      "Our dedicated staff ensures each child receives personalized attention and mentorship.",
  },
  {
    title: "Modern Facilities",
    description:
      "State-of-the-art classrooms, labs, and play areas designed for maximum learning and safety.",
  },
  {
    title: "Inclusive Environment",
    description:
      "We promote values of empathy, collaboration, and diversity from an early age.",
  },
  {
    title: "Parental Engagement",
    description:
      "We maintain strong communication with parents and involve them in the child's progress.",
  },
  {
    title: "Future-Ready Skills",
    description:
      "Students are encouraged to develop problem-solving, creativity, and communication skills.",
  },
]

function PageHome() {
  return (
    <div className='w-[90%] m-auto mt-[60px]'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-[30px]'>
        <img className='w-[400px]' src={img1} alt="" />
        <div className='w-full lg:w-[48%]'>
          <img src={i1} alt="" />
          <img src={i2} alt="" className='mt-[25px]' />
        </div>
      </div>

      <div className='text-center mt-[120px]'>
        <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
          Children Deserve Bright Future
        </button>
        <h1 className='text-[42px] md:text-[58px] font-bold mt-[10px]'>Our Benefits</h1>
        <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
        </p>

        <div className='flex flex-wrap gap-[20px] justify-center mt-[60px]'>
          {benefits.map((benefit, index) => (
            <div key={index} className='w-full md:w-[45%] lg:w-[30%] border rounded-[8px] p-[40px_20px] shadow hover:shadow-lg transition bg-white dark:bg-gray-900'>
              <h1 className='text-[19px] font-semibold'>{benefit.title}</h1>
              <p className='mt-[15px] text-gray-700 dark:text-gray-300'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center mt-[120px]'>
        <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
          Children Deserve Bright Future
        </button>
        <h1 className='text-[42px] md:text-[58px] font-bold mt-[10px]'>Our Benefits</h1>
        <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
        </p>

        <div className='flex flex-wrap gap-[20px] justify-center mt-[60px]'>
          <div className='flex items-center gap-[40px]' style={{ overflow: "auto", scrollbarColor: "transparent transparent" }}>
            <div className='p-[20px] text-center border rounded-[6px] w-[400px]' style={{ minWidth: "400px" }}>
              <img src={user} alt="" className='m-auto' />
              <h1 className='mt-[15px]'>Jennifer B</h1>
              <img src={sitora} alt="" className='m-auto mt-[20px] mb-[20px]' />
              <h1>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</h1>
            </div>
            <div className='p-[20px] text-center border rounded-[6px] w-[400px]' style={{ minWidth: "400px" }}>
              <img src={user} alt="" className='m-auto' />
              <h1 className='mt-[15px]'>Jennifer B</h1>
              <img src={sitora} alt="" className='m-auto mt-[20px] mb-[20px]' />
              <h1>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</h1>
            </div>
            <div className='p-[20px] text-center border rounded-[6px] w-[400px]' style={{ minWidth: "400px" }}>
              <img src={user} alt="" className='m-auto' />
              <h1 className='mt-[15px]'>Jennifer B</h1>
              <img src={sitora} alt="" className='m-auto mt-[20px] mb-[20px]' />
              <h1>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</h1>
            </div>
            <div className='p-[20px] text-center border rounded-[6px] w-[400px]' style={{ minWidth: "400px" }}>
              <img src={user} alt="" className='m-auto' />
              <h1 className='mt-[15px]'>Jennifer B</h1>
              <img src={sitora} alt="" className='m-auto mt-[20px] mb-[20px]' />
              <h1>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</h1>
            </div>
            <div className='p-[20px] text-center border rounded-[6px] w-[400px]' style={{ minWidth: "400px" }}>
              <img src={user} alt="" className='m-auto' />
              <h1 className='mt-[15px]'>Jennifer B</h1>
              <img src={sitora} alt="" className='m-auto mt-[20px] mb-[20px]' />
              <h1>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-[120px]'>
        <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
          Children Deserve Bright Future
        </button>
        <h1 className='text-[42px] md:text-[58px] font-bold mt-[10px]'>Our Benefits</h1>
        <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
        </p>

        <div className='flex justify-between mt-[50px]'>
          <div className='w-[48%]'>
            <img src={faq} alt="" />
            <img src={faqi} alt="" className='mt-[25px]' />
            <img src={faqi} alt="" className='mt-[25px]' />
            <img src={faqi} alt="" className='mt-[25px]' />
          </div>
          <div className='w-[46%]'>
            <img src={faqi} alt="" className='mt-[25px]' />
            <img src={faqi} alt="" className='mt-[25px]' />
            <img src={faqi} alt="" className='mt-[25px]' />
            <img src={faqi} alt="" className='mt-[25px]' />

          </div>
        </div>
      </div>

      <div className='text-center mt-[120px]'>
        <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
          Children Deserve Bright Future
        </button>
        <h1 className='text-[42px] md:text-[58px] font-bold mt-[10px]'>Our Benefits</h1>
        <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
        </p>

        <div className='flex items-center gap-[30px] mt-[50px] flex-wrap'>
          <img src={card} alt="" className='w-[47%]' />
          <img src={card} alt="" className='w-[47%]' />
          <img src={card} alt="" className='w-[47%]' />
          <img src={card} alt="" className='w-[47%]' />
        </div>
      </div>
    </div>
  )
}

export default PageHome
