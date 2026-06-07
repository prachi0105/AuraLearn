// import React, { useState, useEffect } from "react";
// import logo from "../assets/logo.jpg";
// import { IoMdPerson } from "react-icons/io";
// import { FaBookOpen } from "react-icons/fa6";
// import { MdLogout } from "react-icons/md";
// import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";
// import { serverUrl } from "../App";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserData } from "../redux/userSlice";

// function Nav() {
//   let [showHam, setShowHam] = useState(false);
//   let [showPro, setShowPro] = useState(false);
//   let [scrolled, setScrolled] = useState(false);
//   let navigate = useNavigate();
//   let dispatch = useDispatch();
//   let { userData } = useSelector((state) => state.user);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const result = await axios.get(serverUrl + "/api/auth/logout", {
//         withCredentials: true,
//       });
//       console.log(result.data);
//       await dispatch(setUserData(null));
//       toast.success("LogOut Successfully");
//       setShowPro(false);
//     } catch (error) {
//       console.log(error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-2" : "py-4 bg-transparent"
//           }`}
//       >
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
//             <img
//               src={logo}
//               className="w-[50px] rounded-full border-2 border-[var(--neon-blue)] shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:scale-105 transition-transform"
//               alt="Logo"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8">
//             <span
//               className="text-gray-300 hover:text-white cursor-pointer transition-colors font-light text-lg"
//               onClick={() => navigate("/allcourses")}
//             >
//               Courses
//             </span>
//             <span
//               className="text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors font-light text-lg"
//               onClick={() => navigate("/ai-hub")}
//             >
//               AI Hub
//             </span>
//             {userData?.role === "educator" && (
//               <span
//                 className="text-gray-300 hover:text-white cursor-pointer transition-colors font-light text-lg"
//                 onClick={() => navigate("/dashboard")}
//               >
//                 Dashboard
//               </span>
//             )}

//             {/* Profile Dropdown */}
//             <div className="relative">
//               {!userData ? (
//                 <button
//                   className="px-6 py-2 border border-[var(--neon-blue)] text-[var(--neon-blue)] rounded-full hover:bg-[var(--neon-blue)] hover:text-black transition-all duration-300 font-medium btn-glow"
//                   onClick={() => navigate("/login")}
//                 >
//                   Login
//                 </button>
//               ) : (
//                 <div
//                   className="w-[50px] h-[50px] rounded-full border-2 border-[var(--neon-purple)] cursor-pointer overflow-hidden p-[2px] hover:shadow-[0_0_15px_rgba(188,19,254,0.5)] transition-all"
//                   onClick={() => setShowPro((prev) => !prev)}
//                 >
//                   {userData.photoUrl ? (
//                     <img
//                       src={userData.photoUrl}
//                       className="w-full h-full rounded-full object-cover"
//                       alt="Profile"
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-[var(--primary-bg)] flex items-center justify-center text-white font-bold text-xl">
//                       {userData?.name.slice(0, 1).toUpperCase()}
//                     </div>
//                   )}
//                 </div>
//               )}

//             {/* Dropdown Menu */}
//               {showPro && (
//                 <div className="absolute top-[120%] right-0 w-56 glass rounded-2xl overflow-hidden animate-slide-up flex flex-col p-2 border border-white/10 shadow-2xl">
//                   <div className="px-4 py-3 mb-2 border-b border-white/5">
//                     <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Account</p>
//                     <p className="text-sm text-white font-medium truncate">{userData.name}</p>
//                   </div>
//                   <span
//                     className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-xl cursor-pointer text-gray-300 hover:text-[var(--neon-blue)] transition-all"
//                     onClick={() => { navigate("/profile"); setShowPro(false) }}
//                   >
//                     <IoMdPerson size={18} />
//                     My Profile
//                   </span>
//                   <span
//                     className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 rounded-xl cursor-pointer text-gray-300 hover:text-[var(--neon-blue)] transition-all"
//                     onClick={() => { navigate("/enrolledcourses"); setShowPro(false) }}
//                   >
//                     <FaBookOpen size={16} />
//                     My Courses
//                   </span>
//                   <div className="h-[1px] bg-white/5 my-2 mx-2"></div>
//                   <span
//                     className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/10 text-red-400 hover:text-red-300 rounded-xl cursor-pointer transition-all"
//                     onClick={handleLogout}
//                   >
//                     <MdLogout size={18} />
//                     Log Out
//                   </span>
//                 </div>
//               )}

//             </div>
//           </div>

//           {/* Mobile Hamburger */}
//           <GiHamburgerMenu
//             className="lg:hidden w-8 h-8 text-white cursor-pointer"
//             onClick={() => setShowHam(true)}
//           />
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-[#0f0c29fa] backdrop-blur-xl z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${showHam ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <GiSplitCross
//           className="absolute top-8 right-8 w-10 h-10 text-white cursor-pointer hover:rotate-90 transition-transform"
//           onClick={() => setShowHam(false)}
//         />

//         {!userData ? (
//           <button
//             className="px-10 py-3 border border-[var(--neon-blue)] text-[var(--neon-blue)] rounded-full text-xl hover:bg-[var(--neon-blue)] hover:text-black transition-all btn-glow"
//             onClick={() => { navigate("/login"); setShowHam(false) }}
//           >
//             Login
//           </button>
//         ) : (
//           <div className="flex flex-col items-center gap-4">
//             <div className="w-20 h-20 rounded-full border-2 border-[var(--neon-purple)] p-1">
//               {userData.photoUrl ? (
//                 <img
//                   src={userData.photoUrl}
//                   className="w-full h-full rounded-full object-cover"
//                   alt="Profile"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-[var(--primary-bg)] rounded-full flex items-center justify-center text-white font-bold text-3xl">
//                   {userData?.name.slice(0, 1).toUpperCase()}
//                 </div>
//               )}
//             </div>
//             <h3 className="text-2xl font-bold text-white">{userData.name}</h3>
//           </div>
//         )}

//         <div className="flex flex-col gap-4 text-center">
//           <span className="text-xl text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors" onClick={() => { navigate("/"); setShowHam(false) }}>Home</span>
//           <span className="text-xl text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors" onClick={() => { navigate("/allcourses"); setShowHam(false) }}>All Courses</span>
//           <span className="text-xl text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors" onClick={() => { navigate("/ai-hub"); setShowHam(false) }}>AI Hub</span>
//           {userData && (
//             <>
//               <span className="text-xl text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors" onClick={() => { navigate("/profile"); setShowHam(false) }}>My Profile</span>
//               <span className="text-xl text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors" onClick={() => { navigate("/enrolledcourses"); setShowHam(false) }}>My Courses</span>
//               {userData?.role === "educator" && (
//                 <span className="text-xl text-gray-300 hover:text-[var(--neon-blue)] cursor-pointer transition-colors" onClick={() => { navigate("/dashboard"); setShowHam(false) }}>Dashboard</span>
//               )}
//               <span className="text-xl text-red-500 hover:text-red-400 cursor-pointer transition-colors mt-4" onClick={() => { handleLogout(); setShowHam(false) }}>Log Out</span>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nav;




















import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { IoMdPerson } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
// import { MdLogout } from "react-index-icons" // altered back to your imports
import { MdLogout as MdLogoutIcon } from "react-icons/md";
import { MdLogout } from "react-icons/md"; //  Fixed
import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";
import { serverUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/userSlice";

function Nav() {
  let [showHam, setShowHam] = useState(false);
  let [showPro, setShowPro] = useState(false);
  let [scrolled, setScrolled] = useState(false);
  
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();
  let { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setShowHam(false);
    setShowPro(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
      dispatch(setUserData(null));
      toast.success("Logged Out Successfully");
      setShowPro(false);
    } catch (error) {
      console.error(error?.response?.data?.message || "Logout failed");
    }
  };

  const navLinks = [
    { name: "Courses", path: "/allcourses" },
    { name: "AI Hub", path: "/ai-hub", highlight: true },
    ...(userData?.role === "educator" ? [{ name: "Dashboard", path: "/dashboard" }] : []),
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#0b0f19]/70 py-3 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--neon-blue)] opacity-20 blur-md rounded-full group-hover:opacity-40 transition-opacity"></div>
              <img
                src={logo}
                className="w-10 h-10 rounded-full object-cover border border-white/20 relative z-10 transition-transform duration-300 group-hover:scale-105"
                alt="SkillUp Logo"
              />
            </div>
            <span className="text-white font-bold tracking-wider text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              AuraLearn
            </span>
          </div>

          {/* Desktop Menu Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <span
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`relative cursor-pointer py-1 text-sm font-medium tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:transition-all after:duration-300 ${
                  link.highlight
                    ? "text-[var(--neon-blue)] hover:text-white after:from-[var(--neon-blue)] after:to-indigo-400 after:w-0 hover:after:w-full"
                    : "text-slate-300 hover:text-white after:from-white after:to-slate-400 after:w-0 hover:after:w-full"
                } ${location.pathname === link.path ? "text-white after:w-full" : ""}`}
              >
                {link.name}
              </span>
            ))}

            {/* Profile Dropdown Action Segment */}
            <div className="relative ml-4">
              {!userData ? (
                <button
                  className="relative group overflow-hidden px-5 py-2 bg-gradient-to-r from-indigo-600 to-[var(--neon-blue)] text-white text-sm rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 font-medium"
                  onClick={() => navigate("/login")}
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              ) : (
                <div
                  className="w-10 h-10 rounded-xl border border-white/10 bg-slate-900/50 p-[2px] cursor-pointer hover:border-[var(--neon-purple)] hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] transition-all duration-300"
                  onClick={() => setShowPro((prev) => !prev)}
                >
                  {userData.photoUrl ? (
                    <img
                      src={userData.photoUrl}
                      className="w-full h-full rounded-lg object-cover"
                      alt="User dynamic profile"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-base">
                      {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
                    </div>
                  )}
                </div>
              )}

              {/* Account Dropdown Options Overlay */}
              {showPro && userData && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowPro(false)}></div>
                  <div className="absolute top-[130%] right-0 w-60 bg-[#0f1322]/95 backdrop-blur-xl rounded-xl border border-white/10 p-2 shadow-2xl z-20 transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-3 py-2.5 mb-1.5 border-b border-white/5">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Authenticated Profile</p>
                      <p className="text-sm text-white font-semibold truncate mt-0.5">{userData.name}</p>
                    </div>
                    
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-slate-300 hover:text-[var(--neon-blue)] text-sm transition-all text-left"
                      onClick={() => navigate("/profile")}
                    >
                      <IoMdPerson size={16} className="text-slate-400" />
                      My Profile
                    </button>
                    
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg text-slate-300 hover:text-[var(--neon-blue)] text-sm transition-all text-left"
                      onClick={() => navigate("/enrolledcourses")}
                    >
                      <FaBookOpen size={14} className="text-slate-400" />
                      My Courses
                    </button>
                    
                    <div className="h-[1px] bg-white/5 my-1.5 mx-1"></div>
                    
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-red-500/10 text-red-400 hover:text-red-300 text-sm rounded-lg transition-all text-left"
                      onClick={handleLogout}
                    >
                      <MdLogoutIcon size={16} />
                      Log Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Display Hamburger Button */}
          <button 
            className="lg:hidden p-1 text-slate-300 hover:text-white transition-colors"
            onClick={() => setShowHam(true)}
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Right-Side Sliding Panel Drawer */}
      {showHam && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop Blur Cover */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowHam(false)}
          ></div>
          
          {/* Drawer Element */}
          <div className="fixed top-0 right-0 max-w-xs w-full h-full bg-[#0d111c] border-l border-white/5 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out transform">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <span className="text-white font-bold text-lg tracking-wide">Navigation</span>
                <button onClick={() => setShowHam(false)} className="text-slate-400 hover:text-white p-1">
                  <GiSplitCross className="w-5 h-5" />
                </button>
              </div>

              {/* User Dynamic Overview Inside Sidebar */}
              {userData && (
                <div className="flex items-center gap-3 py-6 border-b border-white/5 mb-6">
                  <div className="w-11 h-11 rounded-lg bg-slate-800 border border-white/10 p-[2px]">
                    {userData.photoUrl ? (
                      <img src={userData.photoUrl} className="w-full h-full rounded object-cover" alt="Avatar representation" />
                    ) : (
                      <div className="w-full h-full bg-indigo-600 rounded flex items-center justify-center text-white font-bold">
                        {userData?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-white truncate">{userData.name}</p>
                    <p className="text-xs text-slate-400 capitalize">{userData.role}</p>
                  </div>
                </div>
              )}

              {/* Functional Links Column stack */}
              <div className="flex flex-col gap-1">
                <button onClick={() => navigate("/")} className="w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">Home</button>
                <button onClick={() => navigate("/allcourses")} className="w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">All Courses</button>
                <button onClick={() => navigate("/ai-hub")} className="w-full text-left px-3 py-2.5 rounded-lg text-[var(--neon-blue)] hover:bg-white/5 transition-all text-sm font-medium">AI Hub</button>
                
                {userData && (
                  <>
                    <button onClick={() => navigate("/profile")} className="w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">My Profile</button>
                    <button onClick={() => navigate("/enrolledcourses")} className="w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">My Courses</button>
                    {userData?.role === "educator" && (
                      <button onClick={() => navigate("/dashboard")} className="w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-all text-sm font-medium">Dashboard</button>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Auth CTA at bottom layout of Sidebar Container */}
            <div className="pt-6 border-t border-white/5">
              {!userData ? (
                <button
                  className="w-full py-2.5 text-center bg-indigo-600 text-white rounded-xl font-medium text-sm transition-colors hover:bg-indigo-500"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </button>
              ) : (
                <button
                  className="w-full py-2.5 text-center bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-xl font-medium text-sm transition-colors"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;