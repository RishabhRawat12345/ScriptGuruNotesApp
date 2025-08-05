import React, { useState } from 'react'
import image2 from '../assets/images/register3.avif'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Register3 = () => {
    const [name,Setname]=useState("");
    const [email,SetEmail]=useState("");
    const [password,Setpassword]=useState("");
    const navigate=useNavigate();
    const handleRegister=async(e)=>{
       e.preventDefault();
        try {
          console.log(name);
          console.log(email);
          console.log(password);
          const res=await axios.post('http://localhost:8080/api/Register/userRegsiter',{
            name,
            email,
            password
          });
          console.log(res.data);
          if(res){
            navigate("/Login");
          }
        } catch (error) {
          console.log("error",error);
        }
    }
    const handleloginnav=()=>{
      navigate("/Login");
    }
  return (
    <div className="min-h-screen bg-white">

      <nav className="flex justify-between items-center p-4">
        <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold italic">N</h1>
        </div>
      </nav>
      <div className="main flex justify-center items-center mt-12 gap-16 px-10 mr-8">
 
       <div className="w-[30rem] flex flex-col items-center text-center">
  <img src={image2}alt="Register" className="rounded-2xl shadow-md w-full h-auto object-cover" />
  <p className="mt-4 text-gray-600 text-lg italic">
    “Every great moment begins with a single step. Let yours begin here.”
  </p>
</div>



        <div className="border-l-2 border-gray-300 pl-12">
          <form className="w-[20rem] h-[30rem] border-2 border-gray-400 p-6 rounded-xl shadow-lg flex flex-col justify-center gap-4">
            <h2 className="text-xl font-bold text-center mb-2">Register</h2>
            <input value={name} onChange={(e)=>Setname(e.target.value)} type="text" placeholder="Name" className="border p-2 rounded-md" />
            <input value={email} onChange={(e)=>SetEmail(e.target.value)} type="email" placeholder="Email" className="border p-2 rounded-md" />
            <input value={password} onChange={(e)=>Setpassword(e.target.value)} type="password" placeholder="Password" className="border p-2 rounded-md" />
            <div className="flex justify-center gap-8">
            <button onClick={handleRegister} type="submit" className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition">
              Submit
            </button>
             <button onClick={handleloginnav} type="submit" className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition">
              Login
            </button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register3
