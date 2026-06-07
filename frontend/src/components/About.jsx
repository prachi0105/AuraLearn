// import React from 'react'
// import about from "../assets/about.png"
// import VideoPlayer from './VideoPlayer'
// import { TfiLayoutLineSolid } from "react-icons/tfi";
// import { BiSolidBadgeCheck } from "react-icons/bi";

// function About() {
//   return (
//     <div className='w-full lg:min-h-[80vh] py-20 flex flex-wrap items-center justify-center gap-12 bg-[rgba(0,0,0,0.2)]'>
//       <div className='lg:w-[45%] md:w-[80%] w-[95%] h-full flex items-center justify-center relative group'>
//         <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
//         <img src={about} className='w-[90%] rounded-2xl shadow-2xl relative z-10 border border-white/10' alt="About Us" />
//         <div className="absolute bottom-10 right-10 z-20">
//           <VideoPlayer />
//         </div>
//       </div>

//       <div className='lg:w-[45%] md:w-[80%] w-[95%] flex flex-col items-start justify-center p-6'>
//         <div className='flex items-center gap-4 text-[var(--neon-blue)] text-xl font-medium tracking-wide mb-4'>
//           <span className="uppercase">About Us</span>
//           <TfiLayoutLineSolid className='w-8 h-8' />
//         </div>

//         <h2 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
//           Maximize Your <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Learning Growth</span>
//         </h2>

//         <p className='text-gray-400 text-lg mb-10 leading-relaxed font-light'>
//           We provide a modern Learning Management System to simplify online education, track progress, and enhance student-instructor collaboration efficiently. Experience the future of learning with our cutting-edge platform.
//         </p>

//         <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
//           {[
//             "Simplified Learning",
//             "Expert Trainers",
//             "Big Experience",
//             "Lifetime Access"
//           ].map((item, index) => (
//             <div key={index} className='flex items-center gap-3 text-white text-lg font-light glass p-3 rounded-lg hover:bg-white/5 transition-colors'>
//               <BiSolidBadgeCheck className='w-6 h-6 text-[var(--neon-purple)]' />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About











import React from 'react'
import about from "../assets/about.png" // Ensure this is the new image file
import VideoPlayer from './VideoPlayer'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidBadgeCheck } from "react-icons/bi";

function About() {
  return (
    <div className='w-full min-h-screen py-24 flex items-center justify-center bg-[#0b0f19] px-6'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center gap-16'>
        
        {/* Left: Image Section */}
        <div className='lg:w-[45%] w-full relative group'>
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <img 
              src={about} 
              className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-700' 
              alt="About Us" 
            />
            <div className="absolute bottom-6 left-6 z-20">
              <VideoPlayer />
            </div>
          </div>
        </div>

        {/* Right: Text Section */}
        <div className='lg:w-[50%] w-full'>
          <div className='flex items-center gap-4 text-indigo-400 font-bold tracking-widest uppercase text-sm mb-6'>
            <TfiLayoutLineSolid className='w-8 h-8' />
            <span>About AuraLearn</span>
          </div>

          <h2 className='text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1]'>
            Empowering Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Educational Journey</span>
          </h2>

          <p className='text-gray-400 text-lg mb-10 leading-relaxed font-light'>
            Experience a new standard in digital education. Our AI-powered platform simplifies learning, tracks your mastery in real-time, and connects you with world-class resources designed for the future of work.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {[
              "AI-Personalized Paths",
              "Expert-Led Curriculum",
              "Real-time Analytics",
              "Lifetime Knowledge Access"
            ].map((item, index) => (
              <div key={index} className='flex items-center gap-3 text-white font-medium bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                <BiSolidBadgeCheck className='w-6 h-6 text-purple-400' />
                {item}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About