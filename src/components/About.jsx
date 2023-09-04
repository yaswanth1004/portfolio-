import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 max-sm:mt-10'>
                    Hello, I am B.Mohith pursuing my BTech in VIT-AP in the stream of Computer Science and Engineering. I am passionate about coding and problem solving and found my interest in web development. I have prior knowledge on front end web technologies like HTML, CSS, JS, Tailwind, PHP, MYSQL, ReactJS, Next.js and learning MERN stack.
                </p>
                <br />
                <p>While coming to my academics, I have an aggregate CGPA of 9.23 for my whole 2years of engineering. I am also a team player where I have worked as CO-LEAD for the tech WEB TEAM for an entire academic year in a CLUB called NGC-VIT AP in our university. I have also been selected as FRONT END DEVELOPER in building the OFFICIAL WEBSITE OF VITAP UNIVERSITY.</p>
                
            </div>
        </div>
    )
}

export default About
