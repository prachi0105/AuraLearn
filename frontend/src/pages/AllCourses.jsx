import React, { useEffect, useState } from "react";
import { FaArrowLeftLong, FaFilter, FaMagnifyingGlass, FaRobot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import aiIcon from "../assets/SearchAi.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App.jsx";
import { setCourseData } from "../redux/courseSlice.js";
import Card from "../components/Card.jsx";
import { ClipLoader } from "react-spinners";
import allC from "../assets/allC.jpg";

function AllCourses() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [category, setCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCourses, setFilterCourses] = useState([]);
  const { courseData } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);

  const categories = [
    "Web Development", "App Development", "AI/ML", "Data Science", 
    "Data Analytics", "Ethical Hacking", "UI UX Designing", "Others"
  ];

  const toggleCategory = (cat) => {
    setCategory(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${serverUrl}/api/course/getpublishedcoures`, { withCredentials: true });
        dispatch(setCourseData(res.data));
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [dispatch]);

  useEffect(() => {
    let results = (courseData || []).filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (category.length > 0) {
      results = results.filter(course => category.includes(course.category));
    }
    setFilterCourses(results);
  }, [courseData, category, searchQuery]);

  // return (
  //   <div className="min-h-screen bg-[var(--primary-bg)] text-white">
  //     <Nav />
      
  //     {/* Mobile Toggle */}
  //     <button
  //       onClick={() => setIsSidebarVisible(!isSidebarVisible)}
  //       className="fixed bottom-6 right-6 z-50 p-4 bg-[var(--neon-blue)] text-black rounded-full shadow-2xl md:hidden"
  //     >
  //       <FaFilter size={20} />
  //     </button>

  //     <div className="flex pt-24">
  //       {/* Sidebar */}
  //       <aside className={`
  //         fixed top-24 left-0 h-[calc(100vh-6rem)] w-72 bg-black/40 backdrop-blur-xl border-r border-white/5 p-8 transition-transform duration-300 z-40
  //         ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
  //       `}>
  //         <div className="flex items-center gap-3 mb-10 text-gray-400 hover:text-white cursor-pointer transition-colors" onClick={() => navigate("/")}>
  //           <FaArrowLeftLong />
  //           <span className="font-bold uppercase tracking-widest text-xs">Back to Home</span>
  //         </div>

  //         <button 
  //           onClick={() => navigate("/searchwithai")}
  //           className="w-full mb-10 p-4 glass rounded-2xl flex items-center justify-center gap-3 border border-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)] transition-all group"
  //         >
  //           <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--neon-blue)]/50 group-hover:scale-110 transition-transform">
  //               <img src={aiIcon} alt="AI" className="w-full h-full object-cover" />
  //           </div>
  //           <span className="font-bold text-sm text-[var(--neon-blue)]">Search with AI</span>
  //         </button>

  //         <h2 className="text-sm font-black uppercase tracking-tighter text-gray-500 mb-6 px-2">Filter Categories</h2>
  //         <div className="space-y-3">
  //           {categories.map((cat) => (
  //             <label 
  //               key={cat}
  //               className={`
  //                 flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border
  //                 ${category.includes(cat) ? 'bg-[var(--neon-blue)]/10 border-[var(--neon-blue)]/30 text-white' : 'hover:bg-white/5 border-transparent text-gray-400'}
  //               `}
  //               onClick={() => toggleCategory(cat)}
  //             >
  //               <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${category.includes(cat) ? 'bg-[var(--neon-blue)] border-transparent' : 'border-gray-600'}`}>
  //                   {category.includes(cat) && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
  //               </div>
  //               <span className="text-sm font-bold">{cat}</span>
  //             </label>
  //           ))}
  //         </div>
  //       </aside>

  //       {/* Main Content */}
  //       <main className="flex-1 md:ml-72 p-8 lg:p-12">
  //         {/* Header & Search */}
  //         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
  //           <div>
  //             <h1 className="text-4xl font-black text-white mb-2">Explore Courses</h1>
  //             <p className="text-gray-500 font-medium">Discover your next skill from our curated library</p>
  //           </div>
            
  //           <div className="relative group max-w-md w-full">
  //             <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[var(--neon-blue)] transition-colors" />
  //             <input 
  //               type="text" 
  //               placeholder="Search by title or topic..."
  //               value={searchQuery}
  //               onChange={(e) => setSearchQuery(e.target.value)}
  //               className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[var(--neon-blue)]/50 focus:bg-white/10 transition-all text-white placeholder:text-gray-600 font-medium"
  //             />
  //           </div>
  //         </div>

  //         {/* Results Grid */}
  //         {loading ? (
  //           <div className="flex flex-col items-center justify-center py-40 gap-4">
  //               <ClipLoader color="#00F3FF" size={40} />
  //               <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Loading Catalog...</span>
  //           </div>
  //         ) : filterCourses.length > 0 ? (
  //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
  //             {filterCourses.map((course) => (
  //               <Card 
  //                 key={course._id}
  //                 id={course._id}
  //                 title={course.title}
  //                 thumbnail={course.thumbnail}
  //                 category={course.category}
  //                 price={course.price}
  //                 reviews={course.reviews}
  //               />
  //             ))}
  //           </div>
  //         ) : (
  //           <div className="text-center py-40 glass rounded-[3rem] border border-white/5">
  //             <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-700">
  //               <FaMagnifyingGlass size={30} />
  //             </div>
  //             <h2 className="text-2xl font-bold text-white mb-2">No Courses Found</h2>
  //             <p className="text-gray-500">Try adjusting your filters or search query</p>
  //           </div>
  //         )}
  //       </main>
  //     </div>
  //   </div>
  // );

return (
  <div className="min-h-screen bg-[#0b0f19] text-white">
    <Nav />

    {/* Mobile Filter Button */}
    <button
      onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-xl shadow-purple-500/30 md:hidden"
    >
      <FaFilter size={20} />
    </button>

    <div className="flex pt-24">
      {/* Sidebar */}
      <aside
        className={`
        fixed top-24 left-0 h-[calc(100vh-6rem)] w-72
        bg-[#0f1322]/95 backdrop-blur-xl
        border-r border-purple-500/10
        p-8 transition-transform duration-300 z-40
        ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        <div
          className="flex items-center gap-3 mb-10 text-slate-400 hover:text-white cursor-pointer transition-colors"
          onClick={() => navigate("/")}
        >
          <FaArrowLeftLong />
          <span className="font-bold uppercase tracking-widest text-xs">
            Back to Home
          </span>
        </div>

        {/* AI Search */}
        <button
          onClick={() => navigate("/searchwithai")}
          className="w-full mb-10 p-4 rounded-2xl flex items-center justify-center gap-3 border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:border-purple-400 transition-all group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/50 group-hover:scale-110 transition-transform">
            <img
              src={aiIcon}
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="font-bold text-sm text-purple-300">
            Search with AI
          </span>
        </button>

        <h2 className="text-sm font-black uppercase tracking-tighter text-slate-500 mb-6 px-2">
          Filter Categories
        </h2>

        <div className="space-y-3">
          {categories.map((cat) => (
            <label
              key={cat}
              className={`
                flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border
                ${
                  category.includes(cat)
                    ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/40 text-white"
                    : "hover:bg-white/5 border-white/5 text-slate-400"
                }
              `}
              onClick={() => toggleCategory(cat)}
            >
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center ${
                  category.includes(cat)
                    ? "bg-purple-500 border-transparent"
                    : "border-slate-600"
                }`}
              >
                {category.includes(cat) && (
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                )}
              </div>

              <span className="text-sm font-semibold">{cat}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-8 lg:p-12">
        {/* Hero Section */}
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 border border-purple-500/20 p-8 lg:p-10">
          <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
            Explore Your Future
          </h1>

          <p className="text-slate-300 max-w-2xl">
            Discover premium courses, learn in-demand skills,
            and unlock your potential with AuraLearn.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-end mb-10">
          <div className="relative group max-w-md w-full">
            <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              placeholder="Search by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-[#0f1322] border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Courses */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <ClipLoader color="#8B5CF6" size={40} />

            <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">
              Loading Courses...
            </span>
          </div>
        ) : filterCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filterCourses.map((course) => (
              <Card
                key={course._id}
                id={course._id}
                title={course.title}
                thumbnail={course.thumbnail}
                category={course.category}
                price={course.price}
                reviews={course.reviews}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-[#0f1322] rounded-3xl border border-white/10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 flex items-center justify-center">
              <FaMagnifyingGlass
                size={28}
                className="text-purple-400"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2">
              No Courses Found
            </h2>

            <p className="text-slate-400">
              Try changing your search or category filters.
            </p>
          </div>
        )}
      </main>
    </div>
  </div>
);


  
}

export default AllCourses;

