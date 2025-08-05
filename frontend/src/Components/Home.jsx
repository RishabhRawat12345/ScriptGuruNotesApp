import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate();
  const [check, setCheck] = useState(false);
  const [note, setNote] = useState(''); 
  const handleNavigate=()=>{
      navigate("/form")
  }

  return (
    <div className="flex flex-col items-center overflow-x-hidden h-full">
      <section className="w-full max-w-5xl px-6 py-16 text-center mt-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Capture. Organize. Remember.</h1>
        <p className="italic text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          "Every great idea starts with a note — a fleeting thought, a sudden spark, or a moment of clarity. We help you capture it before it fades."
          <br />
          <span className="not-italic font-medium text-gray-800">
            With <span className="font-semibold text-black-600">NoteNest</span> jot down ideas, organize your thoughts, and keep everything in sync — across devices, effortlessly.
          </span>
        </p>

        <button
          onClick={handleNavigate}
          className="text-white bg-black px-8 mt-10 rounded-2xl h-12 hover:bg-gray-800 transition"
        >
          Let's Make Notes
        </button>
      </section>

      {check && (
        <section className="w-full max-w-4xl px-6 pb-16 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Note</h2>
          <ReactQuill
            theme="snow"
            value={note}
            onChange={setNote}
            className="bg-white rounded-md shadow-md"
            placeholder="Start writing here..."
          />
        </section>
      )}
    </div>
  );
};

export default Home;
