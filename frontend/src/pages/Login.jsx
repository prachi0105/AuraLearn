// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.png"; // make sure this exists

// import { auth, provider } from "../utils/Firebase.js";
// import axios from "axios";
// import { serverUrl } from "../App";

// import { MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md";
// import { useNavigate, useLocation } from "react-router-dom";
// import { signInWithPopup } from "firebase/auth";

// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const result = await axios.post(
//         serverUrl + "/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       dispatch(setUserData(result.data));
//       const dest = location.state?.from?.pathname || "/";
//       navigate(dest);

//       toast.success("Login Successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const googleLogin = async () => {
//     try {

//       const response = await signInWithPopup(auth, provider);
    
//       const user = response.user;

//       const result = await axios.post(
//         serverUrl + "/api/auth/googlesignup",
//         {
//           name: user.displayName,
//           email: user.email,
//           role,
//         },
        
//         { withCredentials: true }
//       );

//       dispatch(setUserData(result.data));
//       const dest = location.state?.from?.pathname || "/";
//       navigate(dest);

//       toast.success("Login Successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error(error?.response?.data?.message || "Google login failed");
//     }
//   };

//   return (
//     <div className="bg-purple-50 w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-3">
//       <form
//         className="w-[90%] md:w-[800px] h-[600px] bg-white text-black shadow-xl rounded-2xl flex"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         {/* LEFT */}
//         <div className="md:w-[50%] w-full flex flex-col items-center justify-center gap-4">
//           <div>
//             <h1 className="font-semibold text-black text-2xl">
//               Welcome back
//             </h1>
//             <h2 className="text-gray-500 text-lg">
//               Login to your account
//             </h2>
//           </div>

//           {/* EMAIL */}
//           <div className="flex flex-col gap-1 w-[85%]">
//             <label className="font-semibold text-black">Email</label>
//             <input
//               type="text"
//               className="border border-gray-300 rounded w-full h-[35px] px-3 bg-white text-black outline-none focus:border-black"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* PASSWORD */}
//           <div className="flex flex-col gap-1 w-[85%] relative">
//             <label className="font-semibold text-black">Password</label>
//             <input
//               type={show ? "text" : "password"}
//               className="border border-gray-300 rounded w-full h-[35px] px-3 bg-white text-black outline-none focus:border-black"
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             {!show ? (
//               <MdOutlineRemoveRedEye
//                 className="absolute right-3 top-9 cursor-pointer"
//                 onClick={() => setShow(true)}
//               />
//             ) : (
//               <MdRemoveRedEye
//                 className="absolute right-3 top-9 cursor-pointer"
//                 onClick={() => setShow(false)}
//               />
//             )}
//           </div>

//           {/* ROLE */}
//           <div className="flex gap-3">
//             <span
//               className={`px-3 py-1 border border-gray-300 rounded cursor-pointer ${
//                 role === "student"
//                   ? "bg-black text-white"
//                   : "hover:bg-gray-100 text-black"
//               }`}
//               onClick={() => setRole("student")}
//             >
//               Student
//             </span>

//             <span
//               className={`px-3 py-1 border border-gray-300 rounded cursor-pointer ${
//                 role === "educator"
//                   ? "bg-black text-white"
//                   : "hover:bg-gray-100 text-black"
//               }`}
//               onClick={() => setRole("educator")}
//             >
//               Educator
//             </span>
//           </div>

//           {/* LOGIN BUTTON */}
//           <button
//             className="w-[80%] h-[40px] bg-black text-white rounded"
//             onClick={handleLogin}
//             disabled={loading}
//           >
//             {loading ? <ClipLoader size={20} color="white" /> : "Login"}
//           </button>

//           <span
//             className="text-sm cursor-pointer text-gray-500"
//             onClick={() => navigate("/forgotpassword")}
//           >
//             Forgot password?
//           </span>

//           {/* GOOGLE */}
//           <div
//             className="w-[80%] h-[40px] border flex items-center justify-center gap-2 cursor-pointer"
//             onClick={googleLogin}
//           >
//             <img src={google} alt="google" className="w-5" />
//             <span className="text-gray-500">Google</span>
//           </div>

//           <div className="text-gray-500">
//             Don't have an account?{" "}
//             <span
//               className="underline text-black cursor-pointer"
//               onClick={() => navigate("/signup")}
//             >
//               Sign up
//             </span>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="w-[50%] bg-black hidden md:flex flex-col items-center justify-center rounded-r-2xl">
//           <img src={logo} className="w-20" alt="logo" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from "react";
// import logo from "../assets/logo.jpg";
// import google from "../assets/google.png";
// import { auth, provider } from "../utils/Firebase.js";
// import axios from "axios";
// import { serverUrl } from "../App";
// import { MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md";
// import { useNavigate, useLocation } from "react-router-dom";
// import { signInWithPopup } from "firebase/auth";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { useDispatch } from "react-redux";
// import { setUserData } from "../redux/userSlice";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("student");
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const result = await axios.post(
//         serverUrl + "/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );
//       dispatch(setUserData(result.data));
//       const dest = location.state?.from?.pathname || "/";
//       navigate(dest);
//       toast.success("Login Successfully");
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const googleLogin = async () => {
//     try {
//       const response = await signInWithPopup(auth, provider);
//       const user = response.user;
//       const result = await axios.post(
//         serverUrl + "/api/auth/googlesignup",
//         { name: user.displayName, email: user.email, role },
//         { withCredentials: true }
//       );
//       dispatch(setUserData(result.data));
//       navigate(location.state?.from?.pathname || "/");
//       toast.success("Login Successfully");
//     } catch (error) {
//       toast.error("Google login failed");
//     }
//   };

//   return (
//     <div className="bg-[#0b0f19] w-[100vw] h-[100vh] flex items-center justify-center p-4">
//       <form
//         className="w-full max-w-4xl h-auto min-h-[500px] bg-[#0f1322] border border-white/10 text-white shadow-2xl rounded-3xl flex overflow-hidden"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         {/* LEFT FORM SECTION */}
//         <div className="md:w-[50%] w-full flex flex-col items-center justify-center p-8 gap-5">
//           <div className="text-center">
//             <h1 className="font-bold text-3xl mb-1 text-white">Welcome back</h1>
//             <h2 className="text-slate-400">Login to your AuraLearn account</h2>
//           </div>

//           <div className="flex flex-col gap-2 w-full max-w-sm">
//             <label className="text-sm font-medium text-slate-300">Email Address</label>
//             <input
//               type="text"
//               className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-blue)] transition-all"
//               placeholder="name@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col gap-2 w-full max-w-sm relative">
//             <label className="text-sm font-medium text-slate-300">Password</label>
//             <input
//               type={show ? "text" : "password"}
//               className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-blue)] transition-all"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-10 text-slate-400">
//               {show ? <MdRemoveRedEye size={20} /> : <MdOutlineRemoveRedEye size={20} />}
//             </button>
//           </div>

//           <div className="flex gap-2 bg-white/5 p-1 rounded-xl w-full max-w-sm">
//             {["student", "educator"].map((r) => (
//               <button
//                 key={r}
//                 className={`flex-1 py-2 rounded-lg capitalize transition-all ${role === r ? "bg-[var(--neon-purple)] text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
//                 onClick={() => setRole(r)}
//               >
//                 {r}
//               </button>
//             ))}
//           </div>

//           <button
//             className="w-full max-w-sm h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]"
//             onClick={handleLogin}
//           >
//             {loading ? <ClipLoader size={20} color="white" /> : "Sign In"}
//           </button>

//           <button className="text-sm text-slate-400 hover:text-white" onClick={() => navigate("/forgotpassword")}>
//             Forgot password?
//           </button>


//           <div className="w-full max-w-sm flex items-center gap-4">
//             <div className="flex-1 h-[1px] bg-white/10"></div>
//             <span className="text-xs text-slate-500 uppercase">Or continue with</span>
//             <div className="flex-1 h-[1px] bg-white/10"></div>
//           </div>




//           <button className="w-full max-w-sm h-12 border border-white/10 flex items-center justify-center gap-2 rounded-xl hover:bg-white/5 transition-all" onClick={googleLogin}>
//             <img src={google} alt="google" className="w-5" />
//             <span className="text-slate-300">Google</span>
//           </button>
//         </div>
       


       
          


             








//         {/* RIGHT SIDE BRANDING (Decorative) */}
//         <div className="w-[50%] bg-gradient-to-br from-indigo-900 via-purple-900 to-black hidden md:flex flex-col items-center justify-center p-10 relative">
//           <img src={logo} className="w-32 rounded-full mb-6 shadow-2xl" alt="logo" />
//           <h2 className="text-3xl font-bold text-white tracking-wider">AuraLearn</h2>
//           <p className="text-indigo-200 mt-2 text-center text-sm">Experience the future of personalized AI-driven education.</p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


















import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import google from "../assets/google.png";
import { auth, provider } from "../utils/Firebase.js";
import axios from "axios";
import { serverUrl } from "../App";
import { MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      dispatch(setUserData(result.data));

      const destination = location.state?.from?.pathname || "/";
      navigate(destination);

      toast.success("Login Successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);

      const user = response.user;

      const result = await axios.post(
        `${serverUrl}/api/auth/googlesignup`,
        {
          name: user.displayName,
          email: user.email,
          role,
        },
        { withCredentials: true }
      );

      dispatch(setUserData(result.data));

      navigate(location.state?.from?.pathname || "/");

      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Google Login Failed");
    }
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-5xl bg-[#0f1322] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex"
      >
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 gap-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="text-slate-400 mt-1">
              Login to your AuraLearn account
            </p>
          </div>

          {/* Email */}
          <div className="w-full max-w-sm flex flex-col gap-2">
            <label className="text-sm text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-500 text-white"
            />
          </div>

          {/* Password */}
          <div className="w-full max-w-sm flex flex-col gap-2 relative">
            <label className="text-sm text-slate-300">
              Password
            </label>

            <input
              type={show ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-indigo-500 text-white"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-10 text-slate-400"
            >
              {show ? (
                <MdRemoveRedEye size={20} />
              ) : (
                <MdOutlineRemoveRedEye size={20} />
              )}
            </button>
          </div>

          {/* Role Selection */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl w-full max-w-sm">
            {["student", "educator"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-lg capitalize transition-all ${
                  role === r
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full max-w-sm h-12 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white flex items-center justify-center"
          >
            {loading ? (
              <ClipLoader size={20} color="#fff" />
            ) : (
              "Sign In"
            )}
          </button>

          {/* Forgot Password */}
          <button
            type="button"
            onClick={() => navigate("/forgotpassword")}
            className="text-sm text-slate-400 hover:text-white"
          >
            Forgot Password?
          </button>

          {/* Divider */}
          <div className="w-full max-w-sm flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-xs text-slate-500 uppercase">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={googleLogin}
            className="w-full max-w-sm h-12 border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition"
          >
            <img
              src={google}
              alt="google"
              className="w-5 h-5"
            />
            <span className="text-slate-300">
              Continue with Google
            </span>
          </button>

          {/* Create Account */}
          <div className="w-full max-w-sm flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/10"></div>

              <span className="text-xs text-slate-500 uppercase">
                New Here?
              </span>

              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="w-full h-12 border border-indigo-500/50 text-indigo-400 rounded-xl hover:bg-indigo-500/10 transition-all font-medium"
            >
              Create an Account
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-900 via-purple-900 to-black items-center justify-center flex-col p-10">
          <img
            src={logo}
            alt="logo"
            className="w-32 h-32 rounded-full shadow-2xl mb-6"
          />

          <h2 className="text-4xl font-bold text-white">
            AuraLearn
          </h2>

          <p className="text-indigo-200 mt-3 text-center max-w-sm">
            Experience the future of personalized
            AI-powered education and skill development.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;