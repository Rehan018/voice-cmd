const Note = require('../models/noteModel');

exports.createNote = async (req, res) => {
  try {
    const newNote = await Note.create({ content: req.body.content });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { content: req.body.content },
      { new: true, runValidators: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(204).json(null);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};