import React from 'react'
import abstract from "../assets/Abstract Design.png"
import icon from "../assets/Icon.png"
import contan from "../assets/Sub Container.png"
import sms from "../assets/Button.png"


const PageAbout = () => {
    return (
        <div className='w-[90%] m-auto'>
            <div className='p-[90px_40px] border border-black rounded-xl w-[100%]  shadow-[5px_10px_black] mt-[60px] flex justify-between items-center'>
                <img src={abstract} alt="" className='w-[100px] absolute left-[190px] top-[200px]' />
                <div className='w-[50%]'>
                    <button className='border rounded-[4px] p-[5px_10px]'> Overview </button>
                    <h1 className='text-[42px]'>Welcome to Little Learners Academy</h1>
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[14px]'>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</h1>
                </div>
            </div>
            <div className='text-center mt-[120px]'>
                <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
                    Children Deserve Bright Future
                </button>
                <h1 className='text-[32px] font-bold mt-[10px]'>Our Mission & Visions</h1>
                <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                    We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.
                </p>
                <div className='flex items-center justify-between mt-[70px] text-start'>
                    <div className='w-[47%] p-[2%] border-2 rounded-xl '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[20px]'>Mission</h1>
                            <img src={icon} alt="" />
                        </div>
                        <p className='text-[14px] mt-[30px]'>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
                    </div>
                    <div className='w-[47%] p-[2%] border-2 rounded-xl '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-[20px]'>Mission</h1>
                            <img src={icon} alt="" />
                        </div>
                        <p className='text-[14px] mt-[30px]'>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-[120px]'>
                <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
                    Children Deserve Bright Future
                </button>
                <h1 className='text-[32px] font-bold mt-[10px]'>Our Awards and Recognitions</h1>
                <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl text-[13px] mx-auto'>
                    Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.
                </p>
                <div className='flex items-center justify-between mt-[70px] text-start'>
                    <div className='w-[30%] hover:shadow-lg p-[2%] border-2 rounded-xl '>
                        <h1 className='font-bold'>Outstanding Early Childhood Education Awar</h1>
                        <h1 className='text-[13px] mt-[15px]'>Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.        </h1>
                    </div>
                    <div className='w-[30%] hover:shadow-lg p-[2%] border-2 rounded-xl '>
                        <h1 className='font-bold'>Outstanding Early Childhood Education Awar</h1>
                        <h1 className='text-[13px] mt-[15px]'>Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.        </h1>
                    </div>
                    <div className='w-[30%] hover:shadow-lg p-[2%] border-2 rounded-xl '>
                        <h1 className='font-bold'>Outstanding Early Childhood Education Awar</h1>
                        <h1 className='text-[13px] mt-[15px]'>Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.        </h1>
                    </div>
                </div>
            </div>
            <div className='text-center mt-[120px]'>
                <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
                    Children Deserve Bright Future
                </button>
                <h1 className='text-[32px] font-bold mt-[10px]'>Our History</h1>
                <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl text-[13px] mx-auto'>
                    Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment
                </p>
                <img src={contan} alt="" className='mt-[40px]' />
            </div>
            <div className='text-center mt-[120px]'>
                <button className='p-[8px_16px] rounded-md border text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition'>
                    Children Deserve Bright Future
                </button>
                <h1 className='text-[32px] font-bold mt-[10px]'>Our History</h1>
                <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-3xl text-[13px] mx-auto'>
                    Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment
                </p>

                <div className='flex items-center gap-[30px] flex-wrap mt-[50px]'>
                    <div className='w-[45%] border-2 p-[4%] rounded-xl text-start'>
                        <div className='flex items-center justify-between mt-[10px] mb-[10px]'>
                            <h1>Ms. Sarah Anderson</h1>
                            <img src={sms} alt="" className='w-[40px]' />
                        </div>
                        <h1> Qualification:Bachelor's Degree in Early Childhood Education </h1>
                        <h1 className='mt-[20px] text-[13px]'> Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</h1>
                    </div>
                    <div className='w-[45%] border-2 p-[4%] rounded-xl text-start'>
                        <div className='flex items-center justify-between mt-[10px] mb-[10px]'>
                            <h1>Ms. Sarah Anderson</h1>
                            <img src={sms} alt="" className='w-[40px]' />
                        </div>
                        <h1> Qualification:Bachelor's Degree in Early Childhood Education </h1>
                        <h1 className='mt-[20px] text-[13px]'> Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</h1>
                    </div>
                    <div className='w-[45%] border-2 p-[4%] rounded-xl text-start'>
                        <div className='flex items-center justify-between mt-[10px] mb-[10px]'>
                            <h1>Ms. Sarah Anderson</h1>
                            <img src={sms} alt="" className='w-[40px]' />
                        </div>
                        <h1> Qualification:Bachelor's Degree in Early Childhood Education </h1>
                        <h1 className='mt-[20px] text-[13px]'> Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</h1>
                    </div>
                    <div className='w-[45%] border-2 p-[4%] rounded-xl text-start'>
                        <div className='flex items-center justify-between mt-[10px] mb-[10px]'>
                            <h1>Ms. Sarah Anderson</h1>
                            <img src={sms} alt="" className='w-[40px]' />
                        </div>
                        <h1> Qualification:Bachelor's Degree in Early Childhood Education </h1>
                        <h1 className='mt-[20px] text-[13px]'> Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</h1>
                    </div>
                    <div className='w-[45%] border-2 p-[4%] rounded-xl text-start'>
                        <div className='flex items-center justify-between mt-[10px] mb-[10px]'>
                            <h1>Ms. Sarah Anderson</h1>
                            <img src={sms} alt="" className='w-[40px]' />
                        </div>
                        <h1> Qualification:Bachelor's Degree in Early Childhood Education </h1>
                        <h1 className='mt-[20px] text-[13px]'> Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</h1>
                    </div>
                    <div className='w-[45%] border-2 p-[4%] rounded-xl text-start'>
                        <div className='flex items-center justify-between mt-[10px] mb-[10px]'>
                            <h1>Ms. Sarah Anderson</h1>
                            <img src={sms} alt="" className='w-[40px]' />
                        </div>
                        <h1> Qualification:Bachelor's Degree in Early Childhood Education </h1>
                        <h1 className='mt-[20px] text-[13px]'> Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.</h1>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PageAbout
