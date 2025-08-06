import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io("http://localhost:8080");

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [currentUserName, setCurrentUserName] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editedNote, setEditedNote] = useState({ EventName: '', Description: '' });

  useEffect(() => {
    fetchNotes();
    const userName = localStorage.getItem('userName');
    setCurrentUserName(userName);

    socket.on("noteUpdated", (updatedNote) => {
      setNotes(prevNotes =>
        prevNotes.map(note => (note._id === updatedNote._id ? updatedNote : note))
      );
    });

    socket.on("noteDeleted", ({ id }) => {
      setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    });

    // Cleanup on unmount
    return () => {
      socket.off("noteUpdated");
      socket.off("noteDeleted");
    };
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://scriptgurunotesapp-4.onrender.com/api/notes/all');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`https://scriptgurunotesapp-4.onrender.com/api/notes/delete/${id}`);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  const startEdit = (note) => {
    setEditNoteId(note._id);
    setEditedNote({ EventName: note.EventName, Description: note.Description });
  };

  const handleEditChange = (e) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`https://scriptgurunotesapp-4.onrender.com/api/notes/update/${id}`, editedNote);
      setEditNoteId(null);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">All Notes</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {notes.map(note => (
          <div
            key={note._id}
            className="bg-white w-80 shadow-md rounded-xl p-6 hover:shadow-lg transition-all"
          >
            {editNoteId === note._id ? (
              <div>
                <input
                  type="text"
                  name="EventName"
                  value={editedNote.EventName}
                  onChange={handleEditChange}
                  className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                  placeholder="Event Name"
                />
                <textarea
                  name="Description"
                  value={editedNote.Description}
                  onChange={handleEditChange}
                  className="w-full mb-3 p-2 border border-gray-300 rounded-md"
                  placeholder="Description"
                  rows="4"
                ></textarea>
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(note._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditNoteId(null)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{note.EventName}</h3>
                <p className="text-gray-700 mt-2">{note.Description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Date:</strong> {new Date(note.Date).toISOString().split('T')[0]}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <strong>Created By:</strong> {note.createdBy}
                </p>

                {note.createdBy === currentUserName && (
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => startEdit(note)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNote(note._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNotes;
