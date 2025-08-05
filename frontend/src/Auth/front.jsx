import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const front = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    const timer=setTimeout(()=>{
      navigate("/Register3");
    },5000);

    return ()=>clearTimeout(timer);
  },[navigate]);
  return (
    <div className="bg-white flex justify-center mt-[15rem]">
      <div className="bg-black h-60 w-60 rounded-full flex items-center justify-center">
        <h1 className="text-white text-8xl font-extrabold italic">N</h1>
      </div>
    </div>
  );
};

export default front;
