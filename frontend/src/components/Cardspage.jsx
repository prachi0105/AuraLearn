// import React, { useEffect, useState } from 'react'
// import Card from "./Card.jsx"
// import { useSelector } from 'react-redux';
// import { SiViaplay } from "react-icons/si";
// import { useNavigate } from 'react-router-dom';

// function Cardspage() {
//   const [popularCourses, setPopularCourses] = useState([]);
//   const { courseData } = useSelector(state => state.course)
//   const navigate = useNavigate()
//   useEffect(() => {
//     if (courseData) {
//       setPopularCourses(courseData.slice(0, 6));
//     }
//   }, [courseData])

//   return (
//     <div className='relative flex items-center justify-center flex-col py-20 w-full bg-transparent'>
//       <div className="text-center mb-12 px-4">
//         <h1 className='md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]'>
//           Our Popular Courses
//         </h1>
//         <p className='lg:w-2/3 md:w-4/5 mx-auto text-lg text-gray-400 font-light leading-relaxed'>
//           Explore top-rated courses designed to boost your skills, enhance careers, and unlock opportunities in tech, AI, business, and beyond.
//         </p>
//       </div>

//       <div className='w-full max-w-7xl flex items-center justify-center flex-wrap gap-8 px-4 mb-16'>
//         {popularCourses.length > 0 ? (
//           popularCourses.map((item, index) => (
//             <Card key={index} id={item._id} thumbnail={item.thumbnail} title={item.title} price={item.price} category={item.category} reviews={item.reviews} />
//           ))
//         ) : (
//           <p className="text-gray-500 text-xl">Loading courses...</p>
//         )}
//       </div>

//       <button className='group px-8 py-3 border border-[var(--neon-blue)] text-white rounded-full text-lg font-light flex items-center gap-3 transition-all duration-300 hover:bg-[var(--neon-blue)] hover:text-black hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]' onClick={() => navigate("/allcourses")}>
//         View all Courses <SiViaplay className='w-6 h-6 transition-transform group-hover:scale-110' />
//       </button>
//     </div>
//   )
// }

// export default Cardspage










// import React, { useEffect, useState } from 'react'
// import Card from "./Card.jsx"
// import { useSelector } from 'react-redux';
// import { SiViaplay } from "react-icons/si";
// import { useNavigate } from 'react-router-dom';

// function Cardspage() {
//   const [popularCourses, setPopularCourses] = useState([]);
//   const { courseData } = useSelector(state => state.course)
//   const navigate = useNavigate()
  
//   useEffect(() => {
//     if (courseData) {
//       setPopularCourses(courseData.slice(0, 6));
//     }
//   }, [courseData])

//   return (
//     <div className='relative flex items-center justify-center flex-col py-24 w-full bg-[#0b0f19]'>
      
//       {/* Header Section */}
//       <div className="text-center mb-16 px-4">
//         <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight'>
//           Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Popular Courses</span>
//         </h1>
//         <p className='lg:w-1/2 md:w-3/4 mx-auto text-lg text-gray-400 font-light leading-relaxed'>
//           Explore top-rated courses designed to boost your skills, enhance careers, and unlock opportunities in tech, AI, and business.
//         </p>
//       </div>

//       {/* Courses Grid */}
//       <div className='w-full max-w-7xl flex items-center justify-center flex-wrap gap-8 px-6 mb-16'>
//         {popularCourses.length > 0 ? (
//           popularCourses.map((item, index) => (
//             <Card 
//               key={index} 
//               id={item._id} 
//               thumbnail={item.thumbnail} 
//               title={item.title} 
//               price={item.price} 
//               category={item.category} 
//               reviews={item.reviews} 
//             />
//           ))
//         ) : (
//           <div className="py-20 flex flex-col items-center">
//              <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
//              <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Loading courses...</p>
//           </div>
//         )}
//       </div>

//       {/* Action Button */}
//       <button 
//         className='group px-10 py-4 bg-white/5 border border-white/10 hover:border-indigo-500/50 text-white rounded-2xl text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]' 
//         onClick={() => navigate("/allcourses")}
//       >
//         View All Courses 
//         <SiViaplay className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
//       </button>
      
//     </div>
//   )
// }

// export default Cardspage








import React, { useEffect, useState } from 'react'
import Card from "./Card.jsx"
import { useSelector } from 'react-redux';
import { SiViaplay } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function Cardspage() {
  const [popularCourses, setPopularCourses] = useState([]);
  const { courseData } = useSelector(state => state.course)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (courseData) {
      setPopularCourses(courseData.slice(0, 6));
    }
  }, [courseData])

  return (
    <div className='relative flex items-center justify-center flex-col py-24 w-full bg-[#0b0f19]'>
      
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className='text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight'>
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Popular Courses</span>
        </h1>
        <p className='lg:w-1/2 md:w-3/4 mx-auto text-lg text-gray-400 font-light leading-relaxed'>
          Explore top-rated courses designed to boost your skills, enhance careers, and unlock opportunities in tech, AI, and business.
        </p>
      </div>

      {/* Courses Grid */}
      <div className='w-full max-w-7xl flex items-center justify-center flex-wrap gap-8 px-6 mb-16'>
        {popularCourses.length > 0 && (
          popularCourses.map((item, index) => (
            <Card 
              key={index} 
              id={item._id} 
              thumbnail={item.thumbnail} 
              title={item.title} 
              price={item.price} 
              category={item.category} 
              reviews={item.reviews} 
            />
          ))
        )}
      </div>

      {/* Action Button */}
      <button 
        className='group px-10 py-4 bg-white/5 border border-white/10 hover:border-indigo-500/50 text-white rounded-2xl text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]' 
        onClick={() => navigate("/allcourses")}
      >
        View All Courses 
        <SiViaplay className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
      </button>
      
    </div>
  )
}

export default Cardspage