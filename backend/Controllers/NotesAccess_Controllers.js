const Note = require("../Models/Notes_Schema");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


const updateNote = async (req, res) => {
  const { id } = req.params;
  const { EventName, Description } = req.body;

  try {
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ error: "Note not found" });

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { EventName, Description },
      { new: true }
    );

    // Emit real-time update event
    req.io.emit("noteUpdated", updatedNote);

    res.json(updatedNote);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Emit real-time delete event
    req.io.emit("noteDeleted", { id });

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllNotes,
  updateNote,
  deleteNote,
};
