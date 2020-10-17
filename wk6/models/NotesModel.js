const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated



const NoteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  noteDescription: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  priority: {
    enum: ["HIGH","LOW", "MEDIUM"]
  },

  dateAdded:{
    type: Date,
    require:true
  }
  // ,
  // dateUpdated:{
  //     type:Date,
  //     required:false,
  // }
});

// const Note = mongoose.model("Note", NoteSchema);
// module.exports = Note;