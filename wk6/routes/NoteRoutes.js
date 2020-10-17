const express = require('express');
const noteModel = require('../models/NotesModel.js');
const app = express();
//TODO - Create a new Note

/*
{
    "noteTitle": "wk6 fs",
    "noteDescription": "My week 6 full-stack course note",
    "priority": "MEDIUM",
    "dateAdded": "2020-10-06"
}
*/

//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', (req, res) => {
    
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    else{
        const note = new noteModel(req.body);
        note.save();
        res.send(note);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
 app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    else{
        const node =  noteModel.find({});
        res.send(node)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    else{
        const note = new nodeModel.findById(req.param.id);
        res.send(note)
    }

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    else{
        const note = new nodeModel.findByIdAndUpdate(req.param.id, req.body);
        nodeModel.save();
        res.send(note);
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {


    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    else{
        const note = noteModel.findByIdAndDelete(req.params,id)
        res.status(200).send()
    }
});

module.exports = app