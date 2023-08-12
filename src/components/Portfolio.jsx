import React from 'react';
import portfolio from "../assets/portfolio/portfolio.png";
import sketchify from "../assets/portfolio/sketchify.png";
import university from "../assets/portfolio/university.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: sketchify,
            code: "https://github.com/Mohith705/Sketchify",
            demo: "https://sketchify-sketch.netlify.app/"
        },
        {
            id: 2,
            src: university,
            code: "https://github.com/Mohith705/VitAp_uni",
            demo: "https://vit-ap-university.netlify.app/"
        },
        {
            id:3,
            src: portfolio,
            demo: "https://portfolio-mohith.netlify.app/",
            code: "https://github.com/Mohith705/portfolio"
        }
    ]

    return (
        <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Some cool stuff, built by me</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo}>Demo</a></button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code}>Code</a></button>
                                </div>
                            </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
