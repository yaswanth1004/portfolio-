import React from 'react';
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.jpeg";
import cpp from "../assets/cpp.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimg,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: php, 
            style: 'shadow-blue-800'
        },
        {
            id: 9,
            src: cpp,
            style: 'shadow-blue-900'
        }
    ]

    return (
        <div name="Experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-bt-4 border-gray-500 p-2 inline max-sm:text-2xl max-sm:p-0'>Experience</p>
                    <p className='py-6 max-sm:py-1'>The technologies which I am familiar with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={
                                `shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
                            }>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Experience
