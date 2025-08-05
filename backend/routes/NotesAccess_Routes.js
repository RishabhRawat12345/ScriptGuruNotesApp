const express = require("express");
const router = express.Router();
const {getAllNotes}=require("../Controllers/NotesAccess_Controllers")
const {updateNote}=require("../Controllers/NotesAccess_Controllers")
const {deleteNote}=require("../Controllers/NotesAccess_Controllers")
router.get("/all", getAllNotes);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);
module.exports = router;
