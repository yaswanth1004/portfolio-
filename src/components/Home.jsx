import React from 'react';
import HeroImage from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Front End Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am currently pursuing my 3rd year at Vellore Institute Of Technology, Amravati. I am passionate about problem solving and coding. Currently, I love to work on front end web applications using technologies like HTML, CSS, JS, ReactJS, TailwindCSS.
                    </p>

                    
                </div>

                <div >
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-2/4'/>
                </div>
            </div>
        </div>
    )
}

export default Home
