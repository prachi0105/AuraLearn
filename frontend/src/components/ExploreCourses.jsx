import React from 'react'
import { SiViaplay, SiGoogledataproc, SiOpenaigym } from "react-icons/si";
import { TbDeviceDesktopAnalytics, TbBrandOpenai } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function ExploreCourses() {
  const navigate = useNavigate()

  const categories = [
    { name: "Web Development", icon: <TbDeviceDesktopAnalytics className='w-full h-full text-[var(--neon-blue)]' />, color: "border-[var(--neon-blue)]" },
    { name: "UI/UX Design", icon: <LiaUikit className='w-full h-full text-[#ff0080]' />, color: "border-[#ff0080]" },
    { name: "App Development", icon: <MdAppShortcut className='w-full h-full text-[#7928ca]' />, color: "border-[#7928ca]" },
    { name: "Ethical Hacking", icon: <FaHackerrank className='w-full h-full text-[#00dfd8]' />, color: "border-[#00dfd8]" },
    { name: "AI/ML", icon: <TbBrandOpenai className='w-full h-full text-[#ff4d4d]' />, color: "border-[#ff4d4d]" },
    { name: "Data Science", icon: <SiGoogledataproc className='w-full h-full text-[#1c7eff]' />, color: "border-[#1c7eff]" },
    { name: "Data Analytics", icon: <BsClipboardDataFill className='w-full h-full text-[#f5a623]' />, color: "border-[#f5a623]" },
    { name: "AI Tools", icon: <SiOpenaigym className='w-full h-full text-[#47e6b1]' />, color: "border-[#47e6b1]" },
  ]

  return (
    <div className='w-full py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-12 bg-transparent'>
      {/* Text Section */}
      <div className='w-full lg:w-[400px] flex flex-col items-start gap-4'>
        <h2 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'>
          Explore <br /> Our Courses
        </h2>
        <p className='text-gray-400 text-lg font-light leading-relaxed mb-6'>
          Discover a wide range of courses designed to help you master new skills and advance your career. From coding to design, we have something for everyone.
        </p>
        <button
          className='px-8 py-3 border border-white/20 bg-white/5 hover:bg-white/10 rounded-full text-white text-lg flex items-center gap-3 transition-all duration-300 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_32px_rgba(0,243,255,0.2)]'
          onClick={() => navigate("/allcourses")}
        >
          Explore Courses <SiViaplay className='w-6 h-6' />
        </button>
      </div>

      {/* Categories Grid */}
      <div className='flex-1 flex flex-wrap justify-center gap-6 max-w-4xl'>
        {categories.map((cat, index) => (
          <div key={index} className='group w-[120px] h-[150px] flex flex-col items-center justify-center gap-4 glass-card rounded-2xl cursor-pointer hover:-translate-y-2'>
            <div className={`w-[70px] h-[70px] rounded-xl flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-white/10 ${cat.color} shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all`}>
              <div className="w-[40px] h-[40px]">
                {cat.icon}
              </div>
            </div>
            <span className='text-xs font-medium text-gray-300 text-center px-1 group-hover:text-white transition-colors'>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreCourses











// import React from 'react'
// import { SiViaplay, SiGoogledataproc, SiOpenaigym } from "react-icons/si";
// import { TbDeviceDesktopAnalytics, TbBrandOpenai } from "react-icons/tb";
// import { LiaUikit } from "react-icons/lia";
// import { MdAppShortcut } from "react-icons/md";
// import { FaHackerrank } from "react-icons/fa";
// import { BsClipboardDataFill } from "react-icons/bs";
// import { useNavigate } from 'react-router-dom';

// function ExploreCourses() {
//   const navigate = useNavigate()

//   const categories = [
//     { name: "Web Development", icon: <TbDeviceDesktopAnalytics className='w-full h-full text-indigo-400' />, color: "border-indigo-500/50" },
//     { name: "UI/UX Design", icon: <LiaUikit className='w-full h-full text-pink-400' />, color: "border-pink-500/50" },
//     { name: "App Development", icon: <MdAppShortcut className='w-full h-full text-purple-400' />, color: "border-purple-500/50" },
//     { name: "Ethical Hacking", icon: <FaHackerrank className='w-full h-full text-teal-400' />, color: "border-teal-500/50" },
//     { name: "AI/ML", icon: <TbBrandOpenai className='w-full h-full text-red-400' />, color: "border-red-500/50" },
//     { name: "Data Science", icon: <SiGoogledataproc className='w-full h-full text-blue-400' />, color: "border-blue-500/50" },
//     { name: "Data Analytics", icon: <BsClipboardDataFill className='w-full h-full text-amber-400' />, color: "border-amber-500/50" },
//     { name: "AI Tools", icon: <SiOpenaigym className='w-full h-full text-emerald-400' />, color: "border-emerald-500/50" },
//   ]

//   return (
//     <div className='w-full py-24 px-6 flex flex-col lg:flex-row items-center justify-center gap-16 bg-[#0b0f19]'>
      
//       {/* Text Section */}
//       <div className='w-full lg:w-[400px] flex flex-col items-start gap-6'>
//         <h2 className='text-4xl md:text-5xl font-extrabold text-white leading-tight'>
//           Explore <br /> 
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Our Courses</span>
//         </h2>
//         <p className='text-gray-400 text-lg font-light leading-relaxed'>
//           Discover a wide range of courses designed to help you master new skills and advance your career. From coding to design, we have something for everyone.
//         </p>
//         <button
//           className='px-8 py-4 bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-2xl text-white text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.5)]'
//           onClick={() => navigate("/allcourses")}
//         >
//           Explore All <SiViaplay className='w-5 h-5' />
//         </button>
//       </div>

//       {/* Categories Grid */}
//       <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl'>
//         {categories.map((cat, index) => (
//           <div key={index} className='group flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all hover:scale-105'>
//             <div className={`w-[60px] h-[60px] rounded-xl flex items-center justify-center bg-white/5 border ${cat.color} group-hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] transition-all`}>
//               <div className="w-[30px] h-[30px]">
//                 {cat.icon}
//               </div>
//             </div>
//             <span className='text-xs font-semibold uppercase tracking-widest text-gray-400 text-center group-hover:text-white transition-colors'>{cat.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ExploreCourses