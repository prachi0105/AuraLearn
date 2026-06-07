// import React, { useState } from 'react'
// import logo from '../assets/logo.jpg'
// import google from "../assets/google.png";
// import axios from 'axios'
// import { serverUrl } from '../App'
// import { MdOutlineRemoveRedEye } from "react-icons/md";

// import { MdRemoveRedEye } from "react-icons/md";
// import { useNavigate } from 'react-router-dom'
// import { signInWithPopup } from 'firebase/auth'
// import { auth, provider } from '../utils/Firebase'
// import { ClipLoader } from 'react-spinners'
// import { toast } from 'react-toastify'
// import { useDispatch } from 'react-redux'
// import { setUserData } from '../redux/userSlice'
// function SignUp() {
//     const [name,setName]= useState("")
//     const [email,setEmail]= useState("")
//     const [password,setPassword]= useState("")
//     const [role,setRole]= useState("student")
//     const navigate = useNavigate()
//     let [show,setShow] = useState(false)
//     const [loading,setLoading]= useState(false)
//     let dispatch = useDispatch()

//     const handleSignUp = async () => {
//         setLoading(true)
//         try {
//             const result = await axios.post(serverUrl + "/api/auth/signup" , {name , email , password , role} , {withCredentials:true} )
//             dispatch(setUserData(result.data))

//             navigate("/")
//             toast.success("SignUp Successfully")
//             setLoading(false)
//         } 
//         catch (error) {
//             console.log(error)
//             setLoading(false)
//             toast.error(error.response.data.message)
//         }
        
//     }
//     const googleSignUp = async () => {
//         try {
//             const response = await signInWithPopup(auth,provider)
//             console.log(response)
//             let user = response.user
//             let name = user.displayName;
//             let email=user.email
            
            
//             const result = await axios.post(serverUrl + "/api/auth/googlesignup" , {name , email ,role}
//                 , {withCredentials:true}
//             )
//             dispatch(setUserData(result.data))
//             navigate("/")
//             toast.success("SignUp Successfully")
//         } catch (error) {
//             console.log(error)
//             toast.error(error.response.data.message)
//         }
        
//     }
//   return (
//     <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-3'>
//         <form className='w-[90%] md:w-200 h-150 bg-[white] shadow-xl rounded-2xl flex' onSubmit={(e)=>e.preventDefault()}>
//             <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col items-center justify-center gap-3 '>
//                 <div><h1 className='font-semibold text-black text-2xl'>Let's get Started</h1>
//                 <h2 className='text-[#999797] text-[18px]'>Create your account</h2>
//                 </div>
//                 <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
//                     <label htmlFor="name" className='font-semibold text-black text-md'>
//                         Name
//                     </label>
//                     <input id='name' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] text-black text-2xl'placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} value={name} />
//                 </div>
//                  <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
//                     <label htmlFor="email" className='font-semibold text-black text-md'>
//                         Email
//                     </label>
//                     <input id='email' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] text-black text-2xl'placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} />
//                 </div>
//                  <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
//                     <label htmlFor="password" className='font-semibold text-black text-md'>
//                         Password
//                     </label>
//                     <input id='password' type={show?"text":"password"} className='border-1 w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px] text-black text-2xl' placeholder='***********' onChange={(e)=>setPassword(e.target.value)} value={password}/>
//                     {!show && <MdOutlineRemoveRedEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev => !prev)}/>}
//               {show && <MdRemoveRedEye className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev => !prev)} />}
//                 </div>
//                  <div className='flex md:w-[50%] w-[70%] items-center justify-between'>
//                   <span className={`px-[10px] py-[5px] border-[1px] border-[#e7e6e6] rounded-2xl  cursor-pointer text-black ${role === 'student' ? "border-black" : "border-[#646464]"}`} onClick={()=>setRole("student")}>Student</span>
//                   <span className={`px-[10px] py-[5px] border-[1px] border-[#e7e6e6] rounded-2xl  cursor-pointer text-black ${role === 'educator' ? "border-black" : "border-[#646464]"}`}  onClick={()=>setRole("educator")}>Educator</span>
//                 </div>
//                 <button className='w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px]' disabled={loading} onClick={handleSignUp}>{loading?<ClipLoader size={30} color='white' /> : "Sign Up"}</button>
             

//                 <div className='w-[80%] flex items-center gap-2'>
//                     <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
//                     <div className='w-[50%] text-[15px] text-[#6f6f6f] flex items-center justify-center '>Or continue with</div>
//                     <div className='w-[25%] h-[0.5px] bg-[#c4c4c4]'></div>
//                 </div>
//                 <div className='w-[80%] h-[40px] border-1 border-black rounded-[5px] flex items-center justify-center cursor-pointer  ' onClick={googleSignUp} ><img src={google} alt="" className='w-[25px]' /><span className='text-[18px] text-gray-500'>oogle</span> </div>
//                  <div className='text-[#6f6f6f]'>Already have an account? <span className='underline underline-offset-1 text-black cursor-pointer' onClick={()=>navigate("/login")}>Login</span></div>

//             </div>
//             <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex items-center justify-center flex-col hidden'><img src={logo} className='w-30 shadow-2xl' alt="" />
//             <span className='text-[white] text-2xl'></span>
//             </div>
           
//         </form>
     
//     </div>
//   )
// }

// export default SignUp













import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import google from "../assets/google.png";
import axios from 'axios';
import { serverUrl } from '../App';
import { MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/Firebase';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = async () => {
        setLoading(true);
        try {
            const result = await axios.post(`${serverUrl}/api/auth/signup`, 
                { name, email, password, role }, 
                { withCredentials: true }
            );
            dispatch(setUserData(result.data));
            toast.success("Account created successfully!");
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    const googleSignUp = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            const { displayName, email: userEmail } = response.user;
            const result = await axios.post(`${serverUrl}/api/auth/googlesignup`, 
                { name: displayName, email: userEmail, role },
                { withCredentials: true }
            );
            dispatch(setUserData(result.data));
            toast.success("Signup successful!");
            navigate("/");
        } catch (error) {
            toast.error("Google signup failed");
        }
    };

    return (
        <div className="bg-[#0b0f19] w-[100vw] h-[100vh] flex items-center justify-center p-4">
            <form
                className="w-full max-w-4xl h-auto min-h-[500px] bg-[#0f1322] border border-white/10 text-white shadow-2xl rounded-3xl flex overflow-hidden"
                onSubmit={(e) => e.preventDefault()}
            >
                {/* LEFT FORM SECTION */}
                <div className="md:w-[50%] w-full flex flex-col items-center justify-center p-8 gap-5">
                    <div className="text-center">
                        <h1 className="font-bold text-3xl mb-1 text-white">Create Account</h1>
                        <h2 className="text-slate-400">Join the AuraLearn community</h2>
                    </div>

                    {/* Name Input */}
                    <div className="flex flex-col gap-2 w-full max-w-sm">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-blue)] transition-all" placeholder="John Doe" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2 w-full max-w-sm">
                        <label className="text-sm font-medium text-slate-300">Email Address</label>
                        <input type="email" className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-blue)] transition-all" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col gap-2 w-full max-w-sm relative">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <input type={show ? "text" : "password"} className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-blue)] transition-all" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-10 text-slate-400">
                            {show ? <MdRemoveRedEye size={20} /> : <MdOutlineRemoveRedEye size={20} />}
                        </button>
                    </div>

                    {/* Role Selection */}
                    <div className="flex gap-2 bg-white/5 p-1 rounded-xl w-full max-w-sm">
                        {["student", "educator"].map((r) => (
                            <button
                                key={r}
                                className={`flex-1 py-2 rounded-lg capitalize transition-all ${role === r ? "bg-[var(--neon-purple)] text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                                onClick={() => setRole(r)}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <button className="w-full max-w-sm h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]" onClick={handleSignUp}>
                        {loading ? <ClipLoader size={20} color="white" /> : "Sign Up"}
                    </button>

                    <p className="text-sm text-slate-400">
                        Already have an account? <span className="text-white underline cursor-pointer hover:text-[var(--neon-blue)]" onClick={() => navigate("/login")}>Login</span>
                    </p>
                </div>

                {/* RIGHT SIDE BRANDING */}
                <div className="w-[50%] bg-gradient-to-br from-indigo-900 via-purple-900 to-black hidden md:flex flex-col items-center justify-center p-10 relative">
                    <img src={logo} className="w-32 rounded-full mb-6 shadow-2xl" alt="logo" />
                    <h2 className="text-3xl font-bold text-white tracking-wider">AuraLearn</h2>
                    <p className="text-indigo-200 mt-2 text-center text-sm">Experience the future of personalized AI-driven education.</p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;