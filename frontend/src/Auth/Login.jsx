import React, { useState } from 'react'
import image3 from '../assets/images/Login.avif'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
const Login = () => {
    const navigate=useNavigate();
    const[email,Setemail]=useState("");
    const[password,Setpassword]=useState("");
   

    const handlenavigate = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8080/api/Login/Logindata", {
      email,
      password
    });

    if (res.data && res.data.user) {
      localStorage.setItem("userName", res.data.user.name); 
      localStorage.setItem("Email",res.data.user.email)
      localStorage.setItem("userId", res.data.user._id);

      navigate("/home");
    } else {
      console.log("Invalid response");
    }
  } catch (error) {
    console.log("Login error:", error);
  }
};

  return (
   <div className="min-h-screen bg-white">
      
         <nav className="flex justify-between items-center p-4">
           <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
             <h1 className="text-white text-2xl font-bold italic">N</h1>
           </div>
         </nav>
   
       
         <div className="main flex justify-center items-center mt-12 gap-16 px-10 mr-8">
          
          <div className="w-[30rem] flex flex-col items-center text-center">
     <img src={image3} alt="Register" className="rounded-2xl shadow-md w-full h-auto object-cover" />
     <p className="mt-4 text-gray-600 text-lg italic">
       “Good to see you again! Let’s pick up where you left off.”
     </p>
   </div>
   
   
           <div className="border-l-2 border-gray-300 pl-12 ">
             <form className="w-[20rem] h-[30rem] border-2 border-gray-400 p-6 rounded-xl shadow-lg flex flex-col justify-center gap-4">
               <h2 className="text-xl font-bold text-center mb-2">Login</h2>
               <input value={email} onChange={(e)=>Setemail(e.target.value)} type="email" placeholder="Email" className="border p-2 rounded-md" />
               <input value={password} onChange={(e)=>Setpassword(e.target.value)} type="password" placeholder="Password" className="border p-2 rounded-md" />
               <button onClick={handlenavigate} type="submit" className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition">
                 Submit
               </button>
             </form>
           </div>
         </div>
       </div>
  )
}

export default Login