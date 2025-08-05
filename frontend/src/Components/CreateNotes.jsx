import React, { useState } from 'react';
import axios from 'axios';

const CreateNotes= () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  
  const [createdBy, setCreatedBy] = useState(''); 



const handleSubmit = async (e) => {
  e.preventDefault();

  const eventData = {
    EventName: eventName,
    Description: description,
    Date: date ,
    createdBy: createdBy, 
  };
  console.log(eventData);

  try {
    const res = await axios.post("http://localhost:8080/api/CreateNotes/Eventform", eventData);
    console.log(res.data);
  } catch (error) {
    console.error("Error submitting event data:", error);
  }
};

  return (
    <div className="flex justify-center mt-12 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-center">Create New Notes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Event Name</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              className="rounded bg-white h-9 px-3 border border-gray-300"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
  <label className="font-semibold mb-1">Description</label>
  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
    rows={4} 
    className="rounded bg-white px-3 py-2 border border-gray-300 resize-none"
    placeholder="Write your note description here..."
  />
</div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="rounded bg-white h-9 px-3 border border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col md:col-span-2">
  <label className="font-semibold mb-1">Your Name or Email</label>
  <input
    type="text"
    value={createdBy}
    onChange={(e) => setCreatedBy(e.target.value)}
    required
    className="rounded bg-white h-9 px-3 border border-gray-300"
  />
</div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNotes;